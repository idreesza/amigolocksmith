#!/usr/bin/env python3
"""
Static pre-rendering (SSG) for the Dfwkeymaster site.

Run AFTER `npm run build`. Serves dist/, loads every route in headless
Chromium, waits for the client app to fully render (including per-route
title/meta/canonical/JSON-LD), then writes the serialized DOM as a real
static index.html per route:

  dist/index.html                          (homepage)
  dist/locksmith/<slug>/index.html         (27 city pages)

Crawlers and social-preview bots get complete HTML with zero JS required.
"""
import os, re, sys, time, socket, subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright

DIST = Path(__file__).resolve().parent.parent / "dist"
PORT = 8899
# Vite build base — '/amigolocksmith/' on CI (GitHub Pages subpath), './' locally
BASE_PATH = os.environ.get("PRERENDER_BASE", "/amigolocksmith/")
BASE_DIR = BASE_PATH.strip("/")

def get_slugs():
    src = (Path(__file__).resolve().parent.parent / "src/data/cities.ts").read_text()
    return re.findall(r'slug: "([a-z-]+)"', src)

def wait_port(port, timeout=10):
    t0 = time.time()
    while time.time() - t0 < timeout:
        with socket.socket() as s:
            if s.connect_ex(("127.0.0.1", port)) == 0:
                return True
        time.sleep(0.2)
    return False

def find_chromium():
    """Locate a Chromium binary: env override, common paths, or Playwright's own."""
    env = os.environ.get("CHROMIUM_PATH")
    if env and os.path.exists(env):
        return env
    import shutil
    for name in ("chromium", "chromium-browser", "google-chrome", "google-chrome-stable"):
        path = shutil.which(name)
        if path:
            return path
    for path in ("/usr/bin/chromium", "/usr/bin/chromium-browser"):
        if os.path.exists(path):
            return path
    return None  # Playwright falls back to its bundled chromium


def main():
    slugs = get_slugs()
    routes = ["/"] + [f"/locksmith/{s}" for s in slugs]
    print(f"Prerendering {len(routes)} routes...")

    # when base is a subpath, copy dist into a temp dir under <base>/ so
    # http.server serves /<base>/... exactly like GitHub Pages would.
    # (sandbox mount doesn't support symlinks, so we copy instead)
    if BASE_DIR:
        import tempfile, shutil
        serve_root = Path(tempfile.mkdtemp(prefix="prerender-"))
        shutil.copytree(DIST, serve_root / BASE_DIR)
    else:
        serve_root = DIST
    entry = f"/{BASE_DIR}/" if BASE_DIR else "/"

    server = subprocess.Popen(
        [sys.executable, "-m", "http.server", str(PORT), "--bind", "127.0.0.1"],
        cwd=serve_root, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    try:
        assert wait_port(PORT), "static server did not start"
        with sync_playwright() as p:
            launch_args = {"args": ["--no-sandbox"]}
            chromium = find_chromium()
            if chromium:
                launch_args["executable_path"] = chromium
            browser = p.chromium.launch(**launch_args)
            errors = []

            for route in routes:
                page = browser.new_page(viewport={"width": 1440, "height": 950})
                page.goto(f"http://127.0.0.1:{PORT}{entry}", wait_until="networkidle")
                if route != "/":
                    page.evaluate(
                        "r => { window.history.pushState({}, '', r); window.dispatchEvent(new PopStateEvent('popstate')); }",
                        entry + route.lstrip("/"),
                    )
                # wait until the route's React page has actually rendered
                page.wait_for_function(
                    "r => r === '/' ? !!document.querySelector('#top') : document.querySelectorAll('h1').length === 1 && document.title.includes('Locksmith')",
                    arg=route,
                    timeout=10000,
                )
                page.wait_for_timeout(1200)

                title = page.title()
                canon = page.evaluate("document.querySelector('link[rel=canonical]')?.href || ''")
                ld_count = page.eval_on_selector_all('script[type="application/ld+json"]', "e => e.length")
                if route == "/" and "Grand Prairie TX | Dfwkeymaster" not in title:
                    errors.append(f"{route}: unexpected title '{title}'")
                if route != "/":
                    # compare against expected city name from the slug (handles DeSoto etc.)
                    slug = route.rsplit("/", 1)[-1]
                    src = (Path(__file__).resolve().parent.parent / "src/data/cities.ts").read_text()
                    m = re.search(rf'slug: "{re.escape(slug)}",\s*\n\s*name: "([^"]+)"', src)
                    city = m.group(1) if m else slug.replace("-", " ").title()
                    if f"Locksmith {city} TX" not in title:
                        errors.append(f"{route}: title not city-specific ('{title}', expected '{city}')")
                    if not canon.endswith(route):
                        errors.append(f"{route}: canonical mismatch '{canon}'")
                if ld_count < 1:
                    errors.append(f"{route}: no JSON-LD in rendered head")

                html = "<!doctype html>\n" + page.content()

                # strip the prerender server's absolute origin if any leaked in
                html = html.replace(f"http://127.0.0.1:{PORT}", "")

                out = DIST / ("index.html" if route == "/" else f"{route.strip('/')}/index.html")
                out.parent.mkdir(parents=True, exist_ok=True)
                out.write_text(html)
                print(f"  ✓ {route} -> {out.relative_to(DIST)}")
                page.close()

            browser.close()
    finally:
        server.terminate()

    if errors:
        print("\nPRERENDER VALIDATION FAILED:")
        for e in errors:
            print("  " + e)
        sys.exit(1)
    print(f"\nDone — {len(routes)} static pages written to dist/")

if __name__ == "__main__":
    main()
