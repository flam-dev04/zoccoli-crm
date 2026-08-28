---
name: ui-ux-pro-max
description: Advanced UI/UX intelligence encompassing styles, color palettes, font pairings, and graphic components.
---

# UI/UX Pro Max

## Accessibility & Usability (a11y)
1. **Contrast Ratio**: Ensure all text has at least a 4.5:1 contrast ratio with its background. Use WCAG standards.
2. **Focus States**: Never remove outline without providing a distinct :focus-visible custom style. Keyboard navigation must be obvious.
3. **Tap Targets**: Interactive elements must be at least 44x44px for touch screens.

## Color & Hierarchy
1. **Semantic Colors**: Warning/Error/Success colors must be distinct and not rely on color alone (use icons + color).
2. **Visual Hierarchy**: The most important element on the screen must be the most visually prominent. Use size, weight, and color to guide the user's eye naturally.
3. **Dark Mode Ready**: Always design with a dark mode variant in mind. Use CSS variables or Tailwind's dark: classes from the start.

## Components
- **Buttons**: Should have active feedback (scale down slightly on click).
- **Forms**: Labels must be clear. Inputs should have generous padding. Error states must be informative.
- **Empty States**: Empty tables or lists must feature a beautifully illustrated or styled message explaining what goes here and how to add it.
