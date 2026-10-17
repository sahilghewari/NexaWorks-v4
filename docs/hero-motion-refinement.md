# NexaWorks hero and motion refinement

The approved light-lavender, liquid-glass and editorial identity is preserved. This pass changes only the homepage motion controller, existing dashboard SVG presentation and homepage stylesheet. No new asset, font, library, route, commercial term or API contract was introduced.

## Implemented

- Refined headline line-height and tracking, with a small italic overshoot allowance. The three-line text remains accessible HTML and fits at all tested widths.
- Coordinated navigation, eyebrow, complete headline, paragraph, two CTAs, credibility indicators, dashboard and signal rows. Major reveals use 400–500ms; small stagger intervals keep the sequence under one second. Dashboard rises 14px on desktop; tablet/mobile movement and delays are halved. Server-rendered content remains visible before JavaScript.
- Reused the existing ribbon image for a 15-second alternating drift leg: 12px horizontal travel, 9px vertical travel and 1.5% scale change. The full out-and-back cycle is 30 seconds. Tablet travel is smaller and slower; phones remain static. The existing parallax is reduced to 4px/3px and restricted to fine-pointer desktops. Ambient motion pauses offscreen and when the document is hidden.
- Normalized the existing health SVG ring to draw to the actual account score over 850ms, and the actual chart path to draw over 900ms. Drawing starts on first visibility; account switches replay the draw using the existing data. Neither metrics nor sample values are simulated.
- Added once-only Snapshot heading/metrics/CTA and workflow-step reveals, plus precise tab/filter color transitions, a selected-tab underline, short evidence opacity transitions and restrained CTA arrow movement. Pricing has a subtle background/focus treatment; Reading Room artwork moves only slightly on hover. Forms retain their existing focus/loading/error/success states; footer remains static.
- Reduced-motion disables drift, parallax, entrances, SVG drawing and evidence transitions. Cleanup restores final readable styles if preferences change. No motion is required to read data or use a control.

## Components changed

- `src/components/marketing/EditorialExperience.tsx`: choreography, once-only observers, visibility pause, cleanup and bounded parallax.
- `src/components/marketing/EditorialSnapshot.tsx`: normalized SVG path lengths and score offset; state, evidence, handlers and account data unchanged.
- `src/app/editorial-home.css`: typography, ambient motion, drawing, interaction states and responsive/reduced-motion rules.

## Checks performed

- Production build passed, with 44 generated pages.
- ESLint on both changed TSX files passed. Whitespace diff check passed.
- Existing payment tests: 9/9 passed; no live payment made.
- Separate type check: same 10 existing errors outside changed files. Full-project lint: same 10 errors and 18 warnings in unchanged files. Existing build type-check bypass was not changed.
- All 35 inventoried/generated public routes returned HTTP 200.
- Actual browser checks at 320, 390, 768, 1024, 1440 and 1920px: no horizontal document overflow; italic line fits its column. Primary/secondary CTA group stays within the first phone screen (bottom 553px at 390px, 577px at 320px).
- Reviewed initial-load and settled desktop screenshots, plus mobile screenshot. Confirmed ring settles at dash offset 18 (82/100) and chart at offset 0; ribbon transforms remain restrained, are disabled at phone widths and pause offscreen.
- Account switching, chart-date selection, evidence expansion and detailed Support filtering verified. Primary and secondary CTA keyboard focus outlines verified at 3px. No observed homepage/dashboard console warnings or errors.
- Local intercepted form regression: sample success, blank Snapshot focusing name, controlled failure, retry and success. Fictional requests stayed local; no email/CRM record created. No backend form logic changed.

## Limits

Reduced-motion CSS and controller cleanup were inspected in code; actual OS preference emulation was unavailable in the browser controls and was not performed. Hover styles were code-reviewed; keyboard focus was exercised visually, but a true pointer-hover screenshot was not captured. Formal CLS/performance measurement and assistive-technology testing were not performed. Existing unrelated type/lint failures and previously documented external Calendly storage warning remain. No booking, provider delivery or production checkout was exercised.

The supplied attachment contained the brief; no separate new screenshot was included. The rendered approved V2.1 preview was inspected before editing.

Preview: http://127.0.0.1:3004/
Review PR: https://github.com/sahilghewari/NexaWorks-v4/pull/27
This update is for review; it has not been merged or deployed to production.
