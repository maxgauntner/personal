---
# PLACEHOLDER CONTENT — replace with your real project details.
title: Redesigning triage for a 24/7 SOC
summary: Turning a firehose of 10,000+ daily alerts into a prioritized, explainable queue that analysts could trust — and act on in minutes, not hours.
company: Sentinel XDR
role: Lead Product Designer
timeline: 9 months · 2024
team: 1 PM, 6 engineers, 1 data scientist, 2 SOC advisors
platform: Web app · B2B SaaS
year: 2024
tags: [Threat detection, Data-dense UI, AI/ML UX]
visual: detections
featured: true
order: 1
nda: true
outcomes:
  - value: "−61%"
    label: Mean time to triage
  - value: "3.4×"
    label: Alerts closed per analyst-hour
  - value: "+38"
    label: Analyst NPS
---

## Overview

Sentinel's detection queue was the product's front door — and its biggest source of churn. Tier-1 analysts were drowning in low-fidelity alerts, opening five tabs to answer a single question: *is this real?* I led the end-to-end redesign of the triage experience, from discovery with SOC teams through a phased rollout to 400+ customer tenants.

> The goal wasn't to show more data. It was to show the *right* data at the moment of decision.

## The problem

- **Volume without signal.** The average tenant saw 10k+ detections a day; fewer than 2% were true positives.
- **Context lived elsewhere.** Analysts pivoted across the SIEM, EDR, identity provider and ticketing tool to build a story.
- **The model was a black box.** Our ML risk score was ignored because nobody could explain why it was high.

## Users & context

I shadowed 14 analysts across 5 customer SOCs — MSSPs, an in-house Fortune 500 team, and a two-person team at a mid-market bank. Three archetypes emerged:

| Persona | Primary job | What breaks today |
| --- | --- | --- |
| Tier-1 analyst | Close or escalate fast | Context switching, alert fatigue |
| Tier-2 / IR | Investigate deeply | Rebuilding timelines by hand |
| SOC manager | Prove coverage & SLAs | No view of queue health |

## Constraints

- Must work on a 1080p monitor alongside two other tools — **density was non-negotiable**.
- Existing detection schema couldn't change for two quarters.
- Every AI-generated statement needed a traceable source for audit.

## Discovery

We mapped the full triage journey and timed each step. **58% of time-to-triage was spent gathering context**, not making decisions. That reframed the project: from "make the table nicer" to "bring the investigation to the alert."

## Key decisions

### 1. Group by story, not by alert

Related detections are clustered into a single incident with a plain-language headline. Trade-off: some power users lost a flat view, so we kept it one keystroke away.

### 2. Explainable risk, always

Every score expands into its contributing signals with links to raw evidence. Analysts went from ignoring the score to sorting by it.

### 3. Keyboard-first, mouse-friendly

`J/K` navigation, `E` to escalate, `R` to resolve with a reason. Command palette for everything else.

## The solution

A three-pane triage workspace: a prioritized queue, an evidence-rich detail view, and an investigation timeline that auto-assembles related activity across endpoint, identity and cloud.

<!-- Add screenshots here: ![Alt text](/images/your-image.png) -->

## Impact

- **−61% mean time to triage** across pilot tenants within 90 days.
- **3.4× more alerts closed per analyst-hour**, with no increase in missed true positives.
- The triage workspace became the #1 cited reason for renewal in Q4 win reports.

## Reflection

I'd bring SOC managers into research earlier — their reporting needs shaped the data model more than we expected. And I learned that in security, *trust is a feature*: explainability did more for adoption than any visual polish.
