# NexaWorks: real-time vector glass hero

Implemented for review on `codex/liquid-glass-redesign`, PR #27. **Not merged, released or deployed to production.** Local production preview: http://127.0.0.1:3004/.

## Selection and source review

Selected a custom SVG/CSS composition: three broad, closed Bézier glass surfaces with translucent material gradients, fine reflective contours and independently restrained transform motion. This is vector artwork rendered by the browser, not an animated raster texture or a physically accurate refraction simulation. No dependencies, textures, fonts or additional network assets were added.

Reviewed the current React Bits source, API and license, and tried a slower light-mode/right-aligned Aero Shards configuration in its official interactive preview with reduced count and markers/pointer effects disabled. That prototype remained visibly fragmented; it was not installed or performance-benchmarked inside NexaWorks. Its source uses `vgpu`, WebGPU, shader/post-processing passes, a default 1,300 shards and a high-performance GPU request. It provides material/color/speed/placement/pause/DPR controls, reduced-motion handling, visibility checks and resource disposal, but needs a fallback when WebGPU is unavailable. Keeping discrete shard geometry was a greater compromise than drawing continuous curves directly.

Also reviewed Beams and Iridescence source. Both currently use native WebGL2; Beams supplies glossy bands and Iridescence a full-surface folded shader. They have color/speed/pause controls and cleanup, but their rendering approach and visual vocabulary add complexity for this bounded decorative composition. Neither was installed or locally benchmarked. A custom SVG gives exact silhouettes and a static fallback with no GPU-context dependency.

React Bits' checked license is **MIT + Commons Clause**, explicitly permitting use within commercial websites while restricting resale/redistribution of the components themselves. No React Bits source is included in the final implementation.

Primary sources inspected:
- [Aero Shards source](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Backgrounds/AeroShards/AeroShards.tsx)
- [Beams source](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Backgrounds/Beams/Beams.tsx)
- [Iridescence source](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Backgrounds/Iridescence/Iridescence.tsx)
- [React Bits license](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md)

## Integration and motion

- New `LiquidGlassBackground.tsx` and scoped CSS module replace the hero image. Absolute positioning inside the existing isolated hero keeps its dimensions unchanged; `pointer-events: none`, `aria-hidden` and a non-focusable SVG keep it decorative.
- Desktop uses three composed glass layers. Full cycles are 28 and 32 seconds, with 8–12px travel, restrained rotation and approximately 1% scale variation. Only transforms animate; gradients and path geometry stay stable. No frame-by-frame React updates, canvas, WebGL, blur stack or pointer tracking.
- Tablet shows two layers with just one small 5px/4px moving layer. At 768px and below, one quiet static layer sits below the main message. A radial gradient and the static server-rendered SVG remain visible if JavaScript does not initialize.
- Intersection Observer and document-visibility events pause CSS animation using play state, preserving its position for normal resume. A preference listener disables motion when reduced motion is enabled. Observers/listeners are removed on unmount.
- Removed the previous hero raster element, raster pseudo-element, image-drift rules and obsolete pointer/parallax lifecycle. Other ribbon placements and the shared WebP asset remain intact. Entrance choreography and dashboard behavior remain.
- No changes to headline/description/CTA copy, layout geometry, routes, navigation, commercial terms, forms, APIs, CRM, email, payments, SEO or the dashboard data model.

## Files changed

`src/app/page.tsx`; `src/app/editorial-home.css`; `src/components/marketing/EditorialExperience.tsx`; new `LiquidGlassBackground.tsx` and `LiquidGlassBackground.module.css`; `tests/liquid-glass-lifecycle.test.mjs`; this report.

## Verification

| Check | Actual result |
|---|---|
| Production build | Passed, 44 generated pages |
| Changed-file ESLint | Passed, including the new lifecycle test |
| Payment + lifecycle tests | 11/11 passed: existing 9 payment tests and 2 lifecycle tests |
| Separate type check | Same 10 pre-existing errors in untouched files |
| Full lint | Existing 10 errors / 18 warnings in untouched files |
| Routes | 35 inventoried/generated public routes returned HTTP 200 |
| Widths | 320, 390, 768, 1024, 1440 and 1920px: no detected horizontal overflow |
| Geometry comparison | At 1440, hero stays 795.29px and CTA group bottom 687.54px; at 1024, 844.79px / 679.20px; at 390, 1666.72px / 552.94px; at 320, 1731.72px / 577.44px. Matches measured baseline |
| Visual review | Before/after at 1440, 1024, 390 and 320px; initial-load after captures and settled screenshots; full phone hero and direct comparison inspected |
| Interaction | Snapshot CTA opens the correct route; example CTA reaches its anchor; Pricing/navigation and scrolling work; account tabs, evidence expansion and chart controls work; keyboard CTA focus remains 3px |
| Layering | No image in `.ed-hero`; background pointer events disabled and hidden from accessibility tree; dashboard remains legible |
| Offscreen pause/resume | Browser observed `paused` after scrolling away and `running` on return |
| Reduced motion | Actually emulated in Brave/Chromium DevTools Rendering, both switched while open and on reload. Elements inspection showed `data-motion="paused"`; static background and visible content confirmed. Diagnostic tab closed afterward |
| Hidden-document lifecycle | The shipped effect was exercised through controlled component-level visibility events: pause, resume and listener cleanup pass. Direct hidden-tab visual verification was unavailable in the in-app browser, whose background tabs still reported `document.hidden=false` |
| Console | No observed homepage/dashboard errors or warnings in the in-app browser. Brave had an unrelated injected `[WindowMode]` extension warning |
| Diff integrity | Whitespace check passes; no package, API, form, metadata, pricing or dashboard-model changes |

## Performance observations

Compared the baseline and new implementation in Brave DevTools Performance Monitor at the same 1440×900 responsive viewport, no throttling, after entrances settled. Baseline CPU samples were 0.2–0.3%; after samples were also 0.2–0.3%. Layouts/sec and style recalculations/sec read 0 in both settled observations. DOM nodes increased from 1,724 to 1,749. Heap readings went from approximately 14.8MB to 36MB across reloads with DevTools open; these were not taken after equivalent garbage collection and do not establish a retained-memory regression or improvement.

Rendering paint flashing and layer borders were inspected after settling. Layer boundaries were visible, with no broad persistent green repaint regions observed in that spot check. This is not an FPS benchmark, a formal trace, a leak audit or a Core Web Vitals result. No 60-FPS, CLS or performance-improvement claim is made. The existing shared ribbon can still be downloaded for lower-page placements; this change removes it specifically from the hero rendering path.

## Remaining limits

Existing type/lint issues remain outside this scope; the build's existing type-validation skip was not changed. No Safari, Firefox, physical-phone, low-end-device or battery/thermal tests were available. No formal CLS measurement or assistive-technology certification was performed. Forms and backend integrations are untouched; provider delivery and production checkout were not exercised in this pass. The vector glass is deliberately quieter than the prior image; visual preference remains subject to review.

## Screenshot artifacts

Before/after screenshots and first-load captures are provided with the Codex deliverables for 1440, 1024, 390 and 320px: `glass-before-{width}.jpg`, `glass-after-{width}.jpg`, and `glass-after-{width}-initial.jpg`. Desktop/mobile comparisons, a full mobile hero, reduced-motion diagnostics and paint/layer diagnostics are included. These local review artifacts are not committed to the repository.
