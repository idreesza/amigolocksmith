#!/usr/bin/env python3
"""Regenerate the FAQPage JSON-LD block in index.html from src/lib/site.ts
so the on-page accordion and the schema never drift."""
import re, json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "src/lib/site.ts"
INDEX = ROOT / "index.html"

def parse_faqs():
    txt = SITE.read_text()
    m = re.search(r"export const FAQS = \[(.*?)\n\];", txt, re.S)
    if not m:
        sys.exit("could not locate FAQS array")
    body = m.group(1)
    pairs = re.findall(r'q:\s*"((?:[^"\\]|\\.)*)",\s*\n\s*a:\s*"((?:[^"\\]|\\.)*)"', body)
    return [(q.replace('\\"', '"'), a.replace('\\"', '"')) for q, a in pairs]

def main():
    faqs = parse_faqs()
    entities = [
        {"@type": "Question", "name": q,
         "acceptedAnswer": {"@type": "Answer", "text": a}}
        for q, a in faqs
    ]
    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": entities,
    }
    # render compact, one Question per line, matching existing style
    lines = ['    {', '      "@context": "https://schema.org",', '      "@type": "FAQPage",', '      "mainEntity": [']
    items = []
    for e in entities:
        items.append('        ' + json.dumps(e, ensure_ascii=False))
    lines.append(",\n".join(items))
    lines.append('      ]')
    lines.append('    }')
    block = "\n".join(lines)

    html = INDEX.read_text()
    new_html, n = re.subn(
        r'(<script type="application/ld\+json" id="home-faq-schema">\s*)\{.*?\}(\s*</script>)',
        lambda mm: mm.group(1) + block + mm.group(2),
        html, flags=re.S,
    )
    if n != 1:
        sys.exit("faq schema block not found/replaced")
    INDEX.write_text(new_html)
    print(f"✓ wrote {len(faqs)} FAQs into index.html schema")

if __name__ == "__main__":
    main()
