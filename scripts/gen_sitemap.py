#!/usr/bin/env python3
"""Regenerate public/sitemap.xml with home, city, blog-index and blog-post URLs."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://www.amigolocksmith.com"

def slugs(src_file, pattern):
    txt = (ROOT / src_file).read_text()
    return re.findall(pattern, txt)

def main():
    cities = slugs("src/data/cities.ts", r'slug: "([a-z-]+)"')
    posts = slugs("src/data/blog.ts", r'slug: "([a-z0-9-]+)"')

    urls = [("/", "weekly", "1.0"), ("/blog", "weekly", "0.9")]
    urls += [(f"/locksmith/{s}", "monthly", "0.8") for s in cities]
    urls += [(f"/blog/{s}", "monthly", "0.7") for s in posts]

    parts = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, freq, pri in urls:
        parts.append("  <url>")
        parts.append(f"    <loc>{BASE}{loc}</loc>")
        parts.append(f"    <changefreq>{freq}</changefreq>")
        parts.append(f"    <priority>{pri}</priority>")
        parts.append("  </url>")
    parts.append("</urlset>")

    out = "\n".join(parts) + "\n"
    (ROOT / "public/sitemap.xml").write_text(out)
    print(f"✓ sitemap.xml written with {len(urls)} URLs (home + blog index + {len(cities)} cities + {len(posts)} posts)")

if __name__ == "__main__":
    main()
