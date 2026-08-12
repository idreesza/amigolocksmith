#!/usr/bin/env python3
"""Assign themed blog images to each post in src/data/blog.ts.
Maps post slug -> one of the generated themed pool images, copied to
public/images/blog/<slug>.jpg, and updates the post's image path."""
import re, shutil
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
POOL = Path("/tmp/blogimg")
OUTDIR = ROOT / "public/images/blog"
OUTDIR.mkdir(parents=True, exist_ok=True)

# slug -> themed pool key
CITY_KEY = "van"  # all 27 city posts use the branded van
EVERGREEN_KEY = {
    "car-key-replacement-cost-guide-2026": "car-key",
    "key-fob-programming-explained": "fob",
    "transponder-vs-smart-vs-traditional-keys": "car-key",
    "dealer-vs-mobile-locksmith-car-keys": "car-key",
    "locked-out-of-car-what-to-do": "lockout",
    "locked-out-of-house-step-by-step": "house-lock",
    "new-home-rekey-checklist": "house-lock",
    "signs-ignition-cylinder-failing": "ignition",
    "broken-key-stuck-in-lock": "rekey",
    "master-key-systems-small-business-guide": "master-key",
    "choose-licensed-insured-locksmith-texas": "van",
    "locksmith-scam-red-flags": "van",
    "smart-lock-buying-installation-guide-2026": "smart-lock",
    "are-smart-locks-worth-it": "smart-lock",
    "rekey-vs-replace-locks": "rekey",
    "cost-to-change-locks-texas": "house-lock",
    "commercial-locksmith-access-control-master-keys": "commercial",
    "safe-opening-services-lost-combination": "safe",
    "motorcycle-rv-key-replacement": "motorcycle",
    "trunk-lockout-dont-force-it": "lockout",
    "dfw-lockout-prevention-tips": "van",
    "what-to-have-ready-emergency-locksmith": "fob",
    "push-to-start-key-fob-guide": "fob",
}

def key_for(slug):
    if slug.startswith("locksmith-"):
        return CITY_KEY
    return EVERGREEN_KEY.get(slug, "van")

def convert(src_png, dest_jpg):
    im = Image.open(src_png).convert("RGB")
    w, h = im.size
    im = im.crop((0, 0, w, h - 60))  # strip any watermark strip
    target_w = 1200
    im = im.resize((target_w, int(im.height * target_w / im.width)), Image.LANCZOS)
    im.save(dest_jpg, quality=82, optimize=True)

def main():
    txt = (ROOT / "src/data/blog.ts").read_text()
    slugs = re.findall(r'slug: "([a-z0-9-]+)"', txt)
    made = 0
    for slug in slugs:
        key = key_for(slug)
        src = POOL / f"{key}.png"
        dest = OUTDIR / f"{slug}.jpg"
        if not src.exists():
            print(f"  ! missing pool image {key} for {slug}")
            continue
        convert(str(src), str(dest))
        made += 1
    print(f"✓ wrote {made} blog images to {OUTDIR}")

if __name__ == "__main__":
    main()
