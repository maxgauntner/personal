# Case study template

Copy this into `src/content/projects/<slug>.md`. The filename becomes the URL: `/projects/<slug>`.

Every case study follows the same narrative arc so hiring managers can scan any project in under a minute, then go deep where they're interested. The `##` headings automatically become the sticky "On this page" navigation.

```md
---
title: Short, outcome-oriented title            # "Redesigning triage for a 24/7 SOC"
summary: One or two sentences: problem → result.
company: Company or product name
role: Lead Product Designer                     # your role, not your title history
timeline: 9 months · 2024
team: 1 PM, 6 engineers, 1 data scientist
platform: Web app · B2B SaaS
year: 2024
tags: [Threat detection, Data-dense UI, AI/ML UX]   # first 3 show on cards
visual: detections        # detections | identity | incident | vuln (cover art until you add screenshots)
featured: true            # show on the homepage
order: 1                  # sort order (1 = first; first featured = large card on homepage)
nda: true                 # shows an NDA disclaimer at the top
draft: false              # true = only visible in `npm run dev`
outcomes:                 # 2–4 headline metrics, shown big at the top
  - value: "−61%"
    label: Mean time to triage
---

## Overview
The TL;DR. Product, your role, scope, and the one-line result. 3–5 sentences.
Optionally a pull quote (`>`) with the core insight.

## The problem
What was broken, for whom, and why it mattered to the business.
Use 2–4 bullets with **bolded** lead-ins.

## Users & context
Who you designed for. Personas, environment (SOC, on-call, compliance),
how you learned about them. A table works well here.

## Constraints
Technical, organizational, regulatory, timeline. Constraints show seniority —
they explain *why* the solution looks the way it does.

## Discovery
Research methods and the key insight that reframed the problem.
One sharp finding beats ten weak ones.

## Key decisions
2–4 decisions, each as a `###` subheading. For each: the options,
what you chose, and the trade-off you accepted.

## The solution
Walk through the final design. Lead with screenshots/video; keep prose short.
![Alt text](/images/project/screen-1.png)

## Impact
Quantitative results first, then qualitative (quotes, adoption, business wins).

## Reflection
What you'd do differently, what you learned, what happened next.
```

## Tips

- **Images**: put them in `public/images/<project-slug>/` and reference as `/images/<project-slug>/file.png`. Export at 2× and keep under ~400 KB (WebP/AVIF).
- **NDA work**: blur or recreate sensitive data, rename customers, and use relative metrics ("−61%") instead of absolute ones.
- **Length**: aim for a 5–8 minute read. Cut anything that doesn't support a decision.
