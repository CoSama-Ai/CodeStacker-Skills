---
name: ui-accessibility-wcag-audit
description: "Runs a WCAG-oriented accessibility audit for a web UI (keyboard, focus, contrast, forms, semantics). Produces a remediation checklist."
---

# Accessibility Audit (WCAG-oriented)

## Scope
This skill produces an audit plan + remediation list for common WCAG issues.

## Inputs
- A URL or screenshots
- Framework (React/Next/Vite/etc.)
- Component library (if any)

## Output
- Issues grouped by severity (Blocker/Major/Minor)
- Suggested code-level fixes (ARIA, semantics, focus management)
- A short test script for QA

## What to check
- Keyboard-only navigation (tab order, traps)
- Visible focus styles (consistent, not removed)
- Contrast (text, icons, controls)
- Form labeling (label/aria-label, errors, helper text)
- Semantic HTML (buttons are buttons, headings in order)
- Dialogs/menus (ARIA roles, escape, focus return)
- Motion and reduced-motion support
