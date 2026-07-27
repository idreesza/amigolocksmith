# Amigo Locksmith — Website

24/7 mobile locksmith site for Grand Prairie, TX & the DFW metroplex.
React 19 + TypeScript + Vite + Tailwind, statically pre-rendered (SSG) — 28 pages
(homepage + 27 city landing pages), full SEO/GEO/AIO metadata baked into every HTML file.

## Develop

```bash
npm install
npm run dev
```

## Build (with static pre-rendering)

```bash
npm run build:static   # tsc + vite build, then prerenders all routes into dist/
```

`dist/` is a fully static site — host it anywhere.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`:
build → pre-render → `vercel deploy dist --prod`.

Required GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
