# Product card and dashboard refinement

The supplied references call for substantial white card frames, lavender illustration wells, layered product elements, restrained underlighting and modular analytics surfaces. This pass applies those principles to the existing light NexaWorks direction without introducing unrelated marketing claims or replacing functional UI with screenshots.

## Implementation

- `SignalBento.tsx` reuses the repository's shadcn Card, CardContent, CardHeader, CardTitle and CardDescription primitives. It replaces the old score/timeline board with three signal illustrations, a health-score panel and a double-width connected-evidence panel. The illustrative Meridian data remains consistent: 82 health, 47 days quiet, declining adoption, active users 128 to 100 (rounded −22%), and a P1 issue open four days.
- `signal-surfaces.css` defines shared panel tokens and applies layered surfaces to both working dashboards and pricing. Data panels remain solid and readable; translucent edges and tinted illustration wells supply depth. The existing serif hero, conversion offer, pricing and supporting content remain in place.
- The new bento is a server component. Its illustrations are native HTML/SVG/CSS, not generated images. Hover movement is limited to four pixels and only enabled on hover-capable devices without reduced-motion preferences. No continuous background animation or runtime package was added. The existing React Bits Ghost Fibers hero remains the single animated background.
- Existing dashboard account switching, source filters, evidence disclosures, chart data controls and next actions are preserved. Forms, APIs, route destinations, SEO and integration contracts were not edited.

## Component selection

Used the existing shadcn primitives rather than installing another component stack. Aceternity's bento layout was reviewed for composition; no Aceternity component source was copied or added. React Bits already supplies the hero environment. The custom product artwork follows the reference principles using NexaWorks' own sample data.

Reference documentation: https://ui.shadcn.com/docs/components/base/card and https://ui.aceternity.com/components/bento-grid.

## Verification performed

- Production build passed (44 generated pages).
- Changed TypeScript/TSX files passed ESLint.
- Existing animation lifecycle and payment suites passed: 11 tests.
- Actual production preview inspected at 1440, 1024, 768, 390 and 320 pixels. No horizontal document overflow; card and dashboard scroll widths fit their content widths at the measured sizes.
- Desktop: Meridian/Northstar switching, Northstar Support empty state, Meridian evidence expansion and 30-day chart selection (128 users) verified in the running page.
- Narrow mobile: account switching and evidence expansion verified. Hero correctly used the CSS fallback at 320 pixels.
- Browser homepage error/warning log was empty during these checks.
- Full repository lint still reports the existing 10 errors / 18 warnings. Type check reports the existing 10 errors in payment API annotations, calendar, resizable panels and scroll-state generic casts. None are in the changed files. The production configuration already skips type validation; it was not altered.

No form submissions or external CRM writes were performed. No new performance benchmark, Lighthouse score or reduced-motion OS emulation is claimed. The new section adds no client-side component or renderer; full field performance remains to be measured. Changes are for review only; not merged or deployed.
