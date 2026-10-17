# NexaWorks: evolving hero background

Implemented for review on `codex/liquid-glass-redesign` in PR #27. **Not merged or deployed to production.** Local production preview: http://127.0.0.1:3004/.

## Selected effect

Selected React Bits **Ghost Fibers**, adapted to the approved light NexaWorks hero. This replaces the previous fixed SVG contours with a single evolving WebGL2 scene. Its shader changes the ribbon centerline, twist and surface normals over time; fold-dependent light changes with those normals. It is not an image translated across the page.

The effect is a fine translucent ribbon material, rather than physically accurate solid-glass refraction. No raster image, particle field, bloom, sparkle, cursor response or grain is enabled. The headline, description, dashboard, layout, CTA destinations and commercial content are unchanged.

## Candidates actually evaluated

Aero Shards was installed and run **behind the real homepage dashboard**, not just viewed on the library site. A light-mode glass configuration used pale blue/lavender colors, reduced speed, right placement, controlled shard count/size, no markers, no pointer behavior, negligible glow and DPR 1. The canvas rendered successfully without observed console errors. Its angular folded pieces remained conspicuous around the dashboard, so it was rejected for this composition. Its prototype screenshot is included below.

Ghost Fibers was then prototyped in the same hero and selected because its continuous curved ribbons provide the softer motion requested. Aurora was not prototyped: an ambient-light gradient would communicate less of the requested flowing structure.

Aero Shards uses WebGPU and `vgpu`; Ghost Fibers uses native WebGL2 with no external runtime dependency. The temporary `vgpu` installation and Aero source were removed from the final application. Package declarations are unchanged. The original Ghost Fibers source, CSS and **MIT + Commons Clause** license are retained with the implementation. Those terms permit use within commercial websites while restricting resale/redistribution of the components themselves.

Sources inspected:
- [Aero Shards](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Backgrounds/AeroShards/AeroShards.tsx)
- [Ghost Fibers](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Backgrounds/GhostFibers/GhostFibers.tsx)
- [License](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md)

## Final engineering and tuning

- One lazily loaded Ghost Fibers renderer. Server rendering and initial loading show the CSS fallback immediately.
- Pearl/lavender/icy-blue material, continuous line fibers, no particles or sparkle, no bloom and no noisy grain. The existing dashboard surfaces remain readable above the scene.
- Desktop uses two ribbons, 48 threads, density 0.5 and a maximum DPR of 0.6. At the tested 1440px viewport the rendering surface was 719×540 pixels for a displayed area around 1199×900.
- Tablet uses one ribbon, 32 threads and DPR 0.5. At 1024px the observed surface was approximately 444×475 pixels.
- At 800px and below, a static CSS fallback is used and the WebGL component is unmounted. No canvas remained at 320, 390 or 768px. Reduced motion also unmounts the renderer; unsupported WebGL leaves the CSS fallback visible.
- Added a 20-draw-per-second ceiling to the vendored frame loop. This is a configured limit, not a measured FPS guarantee. State updates stay inside the renderer; React changes only for visibility, viewport and motion preferences.
- The wrapper waits for the hero to become visible before enabling the renderer. Offscreen/document-hidden states pause it. Existing shader timing is retained for ordinary resume. Unmount deletes programs/textures/framebuffers and disconnects listeners/observers.
- Small vendor patches keep settings-ref updates inside an effect for the project's React lint rules and bypass pointer work while interaction is disabled. No lint rules were disabled.
- The effect is decorative (`aria-hidden`, canvas hidden from accessibility, pointer events disabled). It has no interactive controls and cannot intercept existing links or product interactions.

## Files affected

`LiquidGlassBackground.tsx`, its CSS module, new `backgrounds/GhostFibers.tsx`, `GhostFibers.css` and the upstream license; the existing lifecycle tests; this report. No page content, routing, form, API, payment, pricing or metadata changes.

## Actual checks

| Check | Result |
|---|---|
| Production build | Passed; 44 generated pages |
| Changed-file lint | Passed, including adapted vendor source and lifecycle tests |
| Tests | 11/11 passed: 9 existing payment tests and 2 expanded lifecycle tests |
| Type check | Same 10 existing diagnostics outside this change |
| Full lint | Existing 10 errors / 18 warnings in untouched files |
| Route smoke checks | 35 public routes returned HTTP 200 |
| Responsive browser checks | 320, 390, 768, 1024, 1440 and 1920px; no document overflow detected |
| Geometry | Hero height and CTA position unchanged at the measured widths |
| Product controls | Account switching, evidence expansion and chart-date controls verified |
| Navigation | Snapshot CTA opens its existing route; example CTA reaches its anchor; Pricing and wordmark navigation work |
| Keyboard/mobile | 3px CTA focus outline; mobile menu opens, Escape closes and returns focus |
| Lifecycle | Browser offscreen pause/resume verified; controlled component tests cover document-hidden pause/resume, reduced motion, viewport fallback, delayed enablement and cleanup |
| Console | No observed in-app-browser homepage/dashboard warnings or errors in the final running version |
| Motion evidence | Two final screenshots approximately 38.9 seconds apart show different ribbon folds and lighting while foreground content stays fixed |
| Integrity | No new package dependency; no hero raster image; whitespace diff check passed |

## Measured performance findings

The first denser Ghost Fibers prototype was too costly in this local Chromium run: DevTools Performance Monitor reported CPU near 99%. It was not retained. Reducing thread density, raster resolution and the draw-rate ceiling produced later optimized readings of **2.2% and 1.2% CPU** at the same 1440×900 responsive viewport with no throttling. These are spot samples across reloads, not a controlled benchmark or an across-device guarantee. Broader sustained GPU, thermal and battery measurements remain necessary before making performance promises.

The final lazy renderer chunk measured **27,072 bytes raw / 9,490 bytes gzip** in the production build. It adds no image/texture download and no runtime package. No FPS, Core Web Vitals or formal memory-leak result is claimed. Canvas resolution and actual fallback behavior were checked in the running DOM.

## Limitations

Actual live reduced-motion emulation could not be completed reliably in this native-browser session; the selector did not register the requested preference. The new controller's preference changes and renderer-disable state were verified in component tests, and the no-canvas CSS fallback was verified at phone/tablet widths. Direct hidden-tab browser verification was also unavailable in the in-app browser, which reports its background documents as visible; the document-hidden branch is covered by lifecycle tests. These limits should not be confused with completed OS-level tests.

No Safari, Firefox, physical-phone, low-end-device, thermal, formal accessibility or production-provider tests were performed. The existing unrelated type/lint failures remain. Forms and payments were not submitted to live providers. This remains a visual review branch, with no merge or production release.

## Review images

Screenshots are attached as Codex deliverables: `aero-in-hero-prototype.jpg`, `evolving-before-after.jpg`, `evolving-motion-comparison.jpg`, and final desktop/tablet/mobile captures. They are not committed to this repository.
