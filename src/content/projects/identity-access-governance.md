---
# PLACEHOLDER CONTENT — replace with your real project details.
title: Making identity risk visible
summary: Designing an access-graph experience that helps security teams find and remove risky, unused privileges across cloud and SaaS — without breaking the business.
company: Keystone Identity
role: Senior Product Designer
timeline: 6 months · 2023
team: 1 PM, 5 engineers, 1 researcher
platform: Web app · B2B SaaS
year: 2023
tags: [Identity & access, Data visualization, Design system]
visual: identity
featured: true
order: 2
nda: true
outcomes:
  - value: "41%"
    label: Excess privileges removed
  - value: "−70%"
    label: Access review time
  - value: "2"
    label: Enterprise deals unblocked
---

## Overview

Identity is the new perimeter, but most teams couldn't answer a basic question: *who can access what, and should they?* I designed Keystone's access graph and the remediation workflow that sits on top of it.

## The problem

Access data lived across Okta, AWS, Azure and dozens of SaaS apps. Quarterly access reviews were spreadsheet marathons that rubber-stamped everything.

## Users & context

IAM engineers, GRC analysts, and app owners — three groups with very different tolerance for complexity and risk.

## Constraints

- Graphs with 100k+ nodes had to stay legible and performant.
- Remediation could never silently revoke production access.

## Discovery

Card sorts and contextual interviews revealed that users don't think in graphs — they think in **questions** ("Who has admin on prod?"). We designed the experience around saved questions, with the graph as supporting evidence.

## Key decisions

### 1. Questions first, graph second

A query bar with curated "risk questions" became the primary entry point.

### 2. Reversible by default

Every remediation was staged, previewed, and auto-reverted if a business owner objected within 72 hours.

## The solution

An access explorer with progressive disclosure, a risk-ranked findings list, and a staged remediation flow with owner sign-off.

## Impact

- **41% of excess privileges removed** in the first 60 days for design partners.
- Access reviews shrank from weeks to days.

## Reflection

Visualization is a means, not the product. The biggest wins came from reducing the decision to one clear, reversible action.
