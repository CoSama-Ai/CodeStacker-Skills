---
name: ui-responsive-layout-strategy
description: "Creates a responsive strategy for a page or component: breakpoint plan, layout rules, table/mobile behavior, and edge cases."
---

# Responsive Layout Strategy

## Inputs
- Page type (dashboard, settings form, list/detail, marketing)
- Key components (tables, filters, nav, sidebar)
- Target breakpoints (or defaults)

## Output
- Layout rules per breakpoint
- Handling for overflow content
- Mobile strategy for dense UIs (tables, filters, actions)

## Patterns
- Collapse sidebar → drawer
- Convert table → cards with key fields
- Sticky primary action on mobile
- Use max-width + centered shell for readability
