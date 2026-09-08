# Simplifyne

Marketing site built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Scope

This build covers the **header and hero only**. Footer, other page sections,
real dropdown contents, routing and forms are intentionally not built.

## Getting started

```bash
npm install
npm run dev
```

## Design tokens

Every colour, type step, spacing value, radius and motion value lives in the
single `@theme` block in `src/app/globals.css`. Components reference tokens —
they do not hardcode raw values.

Two notes on that file:

- `--spacing` is set to `0.5rem`, so every numeric spacing utility lands on the
  8px grid (`p-1` = 8px, `p-2` = 16px, `p-3` = 24px, `p-6` = 48px).
- The service-card resize and the staggered reveal cannot be expressed as
  utilities, so they live in one `@layer components` block in the same file.

## Assets

The logo lives at `src/assets/simplifyne-logo-white.webp` and is pulled in with
a static import, so Next derives its intrinsic dimensions from the file, gives
it a content-hashed URL, and fails the build if it ever goes missing.

Build-time assets referenced from code belong in `src/assets/`. Only files that
need a stable public URL of their own — `robots.txt`, an Open Graph image, a
downloadable PDF — need `public/`, which is why this project does not have one.
