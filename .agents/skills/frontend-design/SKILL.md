---
name: frontend-design
description: Use when building, refactoring, or designing any UI component or page. Forces high-craft, intentional design decisions and prevents generic AI slop.
---

# Frontend Design

## Overview
AI coding assistants tend to default to the "statistical center" of design—bland colors, uncalibrated spacing, nested cards, and generic layouts. This skill forces you to apply deliberate, high-craft design thinking before and during frontend implementation.

## When to Use
- When scaffolding a new interface, dashboard, or component.
- When applying CSS, Tailwind, or styling.
- When the user asks for a "modern", "clean", or "professional" design.

## Core Rules

1. **Bold Aesthetic Direction**
   Before coding, decide on a clear aesthetic (e.g., Minimalist, Brutalist, Editorial, Data-Dense) based on the project's purpose. Do not use generic defaults.

2. **Spacing & Hierarchy**
   - Use an 8px or 4px baseline grid.
   - Avoid infinite nesting of borders, shadows, and cards. Use whitespace to separate content instead of lines.
   - Ensure visual hierarchy: the most important action should be immediately obvious.

3. **Colors & Contrast**
   - Avoid pure #000000 or #FFFFFF. Use off-blacks and off-whites.
   - Use color sparingly to draw attention to primary actions.

4. **Anti-Patterns to Avoid**
   - No generic gradient buttons.
   - No "card within a card within a card".
   - No overuse of box-shadows.
