# Portfolio

Personal portfolio for **Max Gauntner — Senior Product Designer** specializing in complex cybersecurity SaaS.

Built with [Astro](https://astro.build) — static, fast, and content-driven. Case studies and articles are plain Markdown files.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # preview the production build
```

Requires Node 18.17+ (20+ recommended).

## Structure

```
src/
├── site.ts                   # ← your name, email, socials, accent color
├── styles/global.css         # design tokens (colors, glass, type), prose styles
├── layouts/Base.astro        # <head>, nav, footer, theme script
├── components/
│   ├── HeroConsole.astro     # animated security console in the homepage hero
│   ├── ProjectVisual.astro   # abstract cover art for case studies
│   ├── ProjectCard.astro
│   ├── ArticleRow.astro
│   ├── PageHeader.astro
│   ├── Nav.astro / Footer.astro
├── content/
│   ├── projects/*.md         # ← case studies
│   └── articles/*.md         # ← articles
└── pages/
    ├── index.astro           # Home
    ├── about.astro           # About
    ├── projects/             # Work index + case study template
    ├── articles/             # Writing index + article template
    ├── rss.xml.js            # RSS feed for articles
    └── 404.astro
docs/CASE_STUDY_TEMPLATE.md   # the case study structure + frontmatter reference
```

## Customizing

| What | Where |
| --- | --- |
| Name, email, location, social links | `src/site.ts` |
| Accent color (green ↔ blue) | `accent` in `src/site.ts` |
| Exact color values, glass blur, radii | `:root` tokens in `src/styles/global.css` |
| Homepage stats, focus areas, process | top of `src/pages/index.astro` |
| Experience, principles, toolkit | top of `src/pages/about.astro` |
| Portrait | add `public/portrait.jpg`, swap the placeholder in `about.astro` |
| Résumé | add `public/resume.pdf` |
| Production domain | `site` in `astro.config.mjs` |

Search the codebase for `TODO` and `PLACEHOLDER` to find everything that needs your real content.

## Writing

**New case study:** follow [`docs/CASE_STUDY_TEMPLATE.md`](docs/CASE_STUDY_TEMPLATE.md).

**New article:** create `src/content/articles/<slug>.md`:

```md
---
title: Your title
description: One-sentence summary shown in lists and previews.
date: 2026-10-12
tags: [Security UX]
draft: false
---

Your content…
```

Set `draft: true` to keep anything visible only in local dev.

## Design system

- **Foundation:** neutral zinc scale, dark-first with a light theme (toggle in nav; respects OS preference).
- **Material:** translucent "glass" surfaces (`.glass`) with backdrop blur, a 1px specular edge and soft depth.
- **Type:** Geist + Geist Mono.
- **Accent:** a single accent used sparingly for state, focus and emphasis.
- **Motion:** subtle entrance and scroll reveals; all disabled under `prefers-reduced-motion`.

## Deploying

Any static host works. Easiest options:

- **Vercel** — import the repo, framework preset "Astro", done.
- **Netlify** — build `npm run build`, publish `dist`.
- **GitHub Pages** — use the official [`withastro/action`](https://github.com/withastro/action).
