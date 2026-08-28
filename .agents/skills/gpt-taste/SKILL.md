---
name: gpt-taste
description: Advanced editorial layouts, bento-grid concepts, zero-gap designs, and high visual impact sections.
---

# GPT Taste & Bento Layouts

## Bento Grid System
1. **Asymmetric Harmony**: Design dashboard widgets to fit together seamlessly like a bento box. Mix large feature cards with smaller stat cards.
2. **Zero or Uniform Gaps**: Keep gaps extremely consistent (e.g., exactly 16px or 24px) or go for a striking zero-gap grid with internal borders.
3. **Card Styling**: Cards should have subtle rounded corners (e.g., ounded-2xl or ounded-3xl in Tailwind) and extremely subtle borders (order border-white/10 or order-neutral-200).

## Editorial Flow
- Sections should flow logically. Use oversized typography for section headers to create an editorial magazine feel.
- Mix text-heavy cards with purely visual or chart-based cards to maintain user interest.

## Animation Foundation (GSAP Ready)
- Keep the DOM structure flat where possible to make it easy to attach GSAP ScrollTriggers in the future.
- Use overflow: hidden on cards so that internal elements can be animated in without breaking the layout.
