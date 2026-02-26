---
name: react-dynamic-components-patterns
description: Builds React sites with dynamic, configuration-driven components using a safe component registry, typed props, lazy loading, feature flags, and predictable layouts. Avoids brittle render logic and prevents security issues from arbitrary component execution.
---

# React Dynamic Components Patterns

## Goal
Build React UIs where pages are assembled from a configuration (DB/CMS/JSON) without turning the codebase into spaghetti.

This skill provides:
- a component registry pattern,
- safe allow-list rendering,
- typed props validation,
- lazy loading where it matters,
- consistent layout rules,
- and guardrails against unsafe “eval-like” behaviors.

## When to use
- Page builder / dynamic dashboard modules
- User-configurable UI blocks
- CMS-driven landing pages
- Feature-flagged UI variants
- Multi-tenant apps with different modules per tenant

## Inputs
- Component set (what blocks are allowed?)
- Data source for config (static JSON, database, CMS)
- Routing approach (React Router / Next.js)
- TypeScript on/off (recommended: on)

## Outputs
- `ComponentRegistry` (allow-list)
- `DynamicRenderer` (renders config safely)
- Prop validation strategy (TS + runtime checks)
- Example config schema
- Patterns for code-splitting and performance

## Hard rules (security + maintainability)
- Never render arbitrary component names without allow-list validation.
- Never accept raw code in config (no eval, no Function constructor).
- Treat config as untrusted input:
  - validate shape
  - validate allowed values
  - enforce defaults
- Keep layout stable:
  - dynamic blocks render inside one content parent container
  - blocks are stacked using a consistent layout primitive

## Recommended config schema
A page is an ordered list of blocks:

```ts
type Block =
  | { id: string; type: "Hero"; props: HeroProps }
  | { id: string; type: "StatsGrid"; props: StatsGridProps }
  | { id: string; type: "DataTable"; props: DataTableProps };

type PageConfig = {
  pageId: string;
  title?: string;
  blocks: Block[];
};
```

## Pattern 1: Component registry (allow-list)
- Map `type` strings to React components.
- Keep it centralized and explicit.

## Pattern 2: Dynamic renderer
- Switch/lookup by `type`
- Validate props (runtime) before rendering
- Provide a safe fallback UI when a block is invalid

## Pattern 3: Typed props + runtime validation
- TypeScript gives compile-time safety for internal config
- Runtime validation protects you when config comes from DB/CMS

Recommended runtime validation options:
- Lightweight manual validation per block
- Zod (if allowed in your stack)

## Pattern 4: Lazy load heavy blocks
- Only lazy-load blocks that are expensive (charts, editors)
- Use suspense boundaries and skeletons

## Pattern 5: Feature flags and gradual rollout
- Add `enabled` or `minRole` constraints in config
- Server can filter blocks before sending to client
- Client still enforces allow-list and validation

## Common pitfalls
- “Too dynamic” = no design system: blocks must adhere to standard classes
- Nested layout wrappers: dynamic renderer should not introduce extra containers
- Performance death by a thousand blocks: cap blocks per page and virtualize large lists

## Prompt template (for COSMO runtime)
"Implement a config-driven React UI using an explicit component registry, a safe dynamic renderer, typed props, runtime validation, and optional lazy loading for heavy blocks. Enforce allow-list rules and layout consistency. Provide example config and usage."
