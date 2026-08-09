# Mobile Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give mobile visitors an identity-first hero with an early compact integration visual, reachable actions, and the same visual character as the desktop hero.

**Architecture:** Recompose the hero grid into three responsive units: identity, integration map, and supporting copy/actions. Mobile renders those units sequentially; desktop places the integration map beside two stacked text units. The existing map component gains mobile-safe node geometry rather than maintaining a separate visual implementation.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion.

## Global Constraints

- Keep the existing desktop two-column composition from the `lg` breakpoint.
- Preserve the current content, links, focus areas, portrait, accessible labels, and reduced-motion behavior.
- Do not add dependencies or duplicate the integration map in the DOM.
- Use content-driven height below `lg`; retain `min-h-[100svh]` at `lg` and above.
- Disable scroll-linked text and map translation below `768px`.
- Keep interactive targets at least 44px high.

---

### Task 1: Responsive Hero Composition

**Files:**
- Modify: `components/Hero.tsx`
- Test: responsive browser inspection at `320x700`, `390x844`, `768x1024`, and desktop width

**Interfaces:**
- Consumes: `HeroIntegrationMap`, `siteProfile`, existing Motion variants and media-query hook
- Produces: a three-unit grid whose mobile order is identity, map, supporting content and whose desktop order is text beside map

- [ ] **Step 1: Capture the failing mobile behavior**

Run the current page at `390x844` and confirm that the square map appears only after the description, both actions, and focus areas, and that scroll-linked transforms remain active below `768px`.

- [ ] **Step 2: Split the hero content into responsive grid units**

Keep the badge, name, role, and employer in the first `motion.div`; make the existing map the second grid child; move the description, actions, and focus areas into a third `motion.div`. Apply desktop placement with:

```tsx
className="lg:col-start-1 lg:row-start-1"
className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
className="lg:col-start-1 lg:row-start-2"
```

- [ ] **Step 3: Apply mobile spacing and action rules**

Use content-driven mobile height and compact rhythm:

```tsx
className="relative isolate flex scroll-mt-24 items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:min-h-[100svh] lg:px-8 lg:py-28"
```

Use a full-width two-column action row at `360px` and above, stacking only below it. Retain `min-h-12` on both links.

- [ ] **Step 4: Gate scroll-linked transforms to tablet/desktop**

Add:

```tsx
const enableScrollEffects = useMediaQuery(
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
);
```

Apply `contentY`, `mapY`, and `mapOpacity` only when `enableScrollEffects` is true.

- [ ] **Step 5: Verify Task 1**

At `390x844`, confirm the visible order is status, name, role, compact map, description, actions, focus areas. At desktop width, confirm the map remains in the right column and the text remains in the left column.

### Task 2: Mobile-Safe Integration Map

**Files:**
- Modify: `components/hero/HeroIntegrationMap.tsx`
- Test: responsive browser inspection at `320px`, `360px`, `390px`, and `768px`

**Interfaces:**
- Consumes: the existing desktop node definition and map rendering loop
- Produces: `mobileNodes` with inset coordinates and paths; the existing six-node desktop map remains unchanged

- [ ] **Step 1: Confirm the failing edge geometry**

At `320px`, confirm nodes based on `x: 91` plus non-wrapping labels approach or cross the map boundary and that `w-[calc(100%+2rem)]` depends on clipping by the hero.

- [ ] **Step 2: Define mobile-specific node geometry**

Create four mobile nodes using the existing identifiers and accents, with coordinates inset approximately to `16–84%` and paths terminating at `50 50`:

```tsx
const mobileNodes = [
  { ...desktopNodes[0], x: 16, y: 22, path: "M16 22 C32 29 42 40 50 50" },
  { ...desktopNodes[1], x: 84, y: 14, path: "M84 14 C69 27 59 41 50 50" },
  { ...desktopNodes[2], x: 84, y: 60, path: "M84 60 C69 55 59 52 50 50" },
  { ...desktopNodes[4], x: 18, y: 82, path: "M18 82 C31 68 41 58 50 50" },
] as const;
```

Use `showAllNodes ? desktopNodes : mobileNodes`.

- [ ] **Step 3: Use width-safe mobile sizing**

Replace the negative-width calculation with a contained map:

```tsx
className="relative mx-auto aspect-square w-full max-w-[300px] min-[400px]:max-w-[320px] sm:max-w-[440px] lg:max-w-[540px]"
```

Reduce the mobile portrait to `150px`, increase it to `170px` at `360px`, and retain existing `sm` and `lg` sizes.

- [ ] **Step 4: Tighten mobile node labels**

Use smaller mobile padding and tracking while retaining the current `sm` typography. Verify that every label remains fully visible without relying on ancestor clipping.

- [ ] **Step 5: Run full verification**

Run:

```powershell
npm.cmd run typecheck
npm.cmd run build
```

Inspect representative mobile and desktop screenshots. Confirm no horizontal overflow, no clipped nodes, stable content order, valid links, and no console errors.

