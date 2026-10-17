# NexaWorks — premium liquid-glass redesign

Implemented on `codex/liquid-glass-redesign`, based on the deployed main branch. Local production preview: http://127.0.0.1:3004/. This iteration is prepared for review; it has not been merged or deployed.

## What changed

The three supplied references informed one coherent light identity: cool white, pale lavender, restrained indigo, expressive Instrument Serif, crisp Inter and technical IBM Plex Mono. The actual NexaWorks wordmark, logo, positioning and conversion destinations remain.

- Replaced the dark orbital scene with original glass-ribbon artwork surrounding a light, softly translucent hero workspace. Data panels remain nearly opaque and readable. The previous unused sphere component and cinematic stylesheet were removed.
- Rebuilt homepage styling rather than layering another theme over the old cinematic stylesheet. The shared token system also updates service, guide, tool, legal and contact pages, navigation and footer.
- Added a detailed account workspace using the same existing account data and chart implementation. Overview/People/Product/Support filters reveal source-specific evidence. Northstar’s Support view explicitly states that the example contains no support signal. Both workspace instances have independent state and unique evidence/gradient IDs.
- Preserved Meridian’s 82/100 score, renewal in 60 days and 22% active-user decline, as well as the existing Northstar growth example. Chart inspection, axis values, data tables, evidence disclosures and recommendations remain functional.
- Refined the Snapshot offer and health/timeline story; replaced the three-part workflow composition with four connected stages: Connect, Extract, Review, Next step. Pricing, the Reading Room and founder/sample-brief sections retain their actual business content.
- Added the final “Get your free Account Risk Snapshot.” conversion scene with primary Snapshot and secondary discovery-call actions. Sitemap, policies, status, contacts and existing sample form are retained.
- Used finite entrances, a one-time desktop material settle, chart updates and bounded desktop parallax (6px/4px). Mobile/tablet artwork is static; reduced-motion styles and Motion’s preference hook are preserved. Content is server rendered and visible before motion initializes.
- Reworked phones/tablets as stacked compositions. Health and chart panels stack on mobile; chart labels and touch targets remain readable. Fixed observed internal headline clipping at 320px and a cramped two-column arrangement at 768px. Kept mobile artwork clear of the trust metadata.

## Main files

`src/app/page.tsx`, `src/app/editorial-home.css`, `src/app/marketing-system.css`, `src/app/layout.tsx`, `src/components/marketing/EditorialSnapshot.tsx`, `EditorialExperience.tsx`, shared `Navbar` and `Footer`, `src/app/fonts/`, and `public/brand/liquid-ribbon-v1.webp`.

No runtime dependency was added. Fonts are self-hosted WOFF2 with included SIL Open Font Licenses: four font files total approximately 95 KB. The 1536×1024 artwork is an optimized 87,046-byte WebP and is served through Next Image for the main image placements. Decorative section crops reuse the same cached asset.

Existing routes, prices, scope, disclosures, API handlers, form submission components, CRM contracts, calendar configuration, payment logic, SEO metadata and structured data are preserved. The independent /ai campaign retains its own layout and checkout. Reference-only prices, testimonials and customer endorsements were not copied.

## Checks performed

| Check | Observed result |
|---|---|
| Production build | Pass; 44 generated pages |
| ESLint on changed TSX files | Pass, no errors or warnings |
| Existing payment tests | 9/9 pass; no live payment |
| Type check after build | Same 10 existing diagnostics outside changed files |
| Full-project lint | Same 10 errors / 18 warnings in unchanged files |
| Homepage widths | Actual 1920, 1440, 1024, 768, 390 and 320px viewports; no document or dashboard-frame overflow; headline fits internally |
| Route checks | 35 rendered routes at desktop and 390px, including six generated source pages and /ai; one H1 each, no detected document overflow |
| Visual review | Desktop/mobile homepage and full-page screenshots, plus desktop/mobile review sheets for nine key pages inspected |
| Product controls | Independent account switching, keyboard source activation, source filtering, evidence details, honest empty state, chart date selection and full data table verified |
| Structure/navigation | No duplicate homepage IDs, missing internal homepage anchor targets or placeholder # links; primary CTA opens Snapshot page with required fields |
| Mobile menu | Opens as modal; Escape closes and restores focus to Open menu |
| Forms | Blank Snapshot focuses name. Local intercepted failure/retry/success; sample and contact-guide success. Retry preserves submission ID; four requests remained local |
| Calendar | Configured Calendly iframe and direct fallback observed; no booking |
| Contrast | Main body 16.08:1; secondary 5.75:1; primary CTA 18.62:1; accent text 5.89:1; positive 5.48:1; critical 5.70:1 on their tested light surfaces |
| Console | Homepage/account interactions have no observed warnings/errors. Route sweep recorded a third-party Calendly/Datadog warning about browser session storage being unavailable |
| Integrity | No package/API/form-handler/sitemap changes; whitespace diff check passes |

The local form harness intercepted lead requests and used fictional data. It sent no email, created no CRM record, booked no event and made no payment. It verifies client behavior, not provider delivery.

## Remaining limitations

The existing configuration skips type validation during the Next build. Separate type checking retains implicit-any diagnostics in payment routes (2), calendar class-name API mismatch (1), resizable-panel API mismatches (5) and scroll-state generic casts (2). Full-project lint failures remain in unchanged components. No new diagnostics were introduced in modified files.

The embedded Calendly SDK logs a session-storage warning in the test browser; its iframe still loads. Real provider email/CRM delivery and checkout require controlled deployment-environment verification. Reduced-motion handling was reviewed in code, but OS preference emulation was not performed. No formal assistive-technology certification, Lighthouse score, CLS measurement or field-performance claim is made.

## Artwork provenance and prompt

Generated with the built-in imagegen tool, then optimized to WebP. Saved in the repository at `public/brand/liquid-ribbon-v1.webp`; a user-facing copy is `liquid-glass-artwork.webp` alongside this report. It contains material artwork only, never baked-in interface text or fake customer evidence.

Final generation prompt:

> Use case: stylized-concept. Asset type: premium NexaWorks website artwork, landscape 3:2. Create one original sculptural liquid-glass ribbon, a graceful elongated looping S that twists in depth, made of clear optical glass with pearlescent lavender and periwinkle refractions, faint icy blue and blush pink edge reflections. High-end 3D product photography, convincing polished transmission and caustics, beautifully lit in a large white studio. Composition: sculpture concentrated in the right two-thirds, sweeping down to the bottom edge, left third quiet nearly white negative space for real HTML headlines; broad open loop can frame a floating product UI. Background solid cool off-white #F8F8FF, very subtle soft contact shadows. Restrained ethereal colors, translucent rounded ribbon cross-section with layered thin reflective edges. Elegant, airy, precise art direction. No text, letters, numbers, website mockup, dashboard, logos, watermarks, symbols, grid, particles or dark background. This is only an abstract material artwork to sit behind a real enterprise interface. Do not create a screenshot or layout. Beautiful detailed glass geometry, not painted soft blobs.

## Review outputs

`liquid-glass-home-desktop.jpg`, `liquid-glass-home-mobile.jpg`, `liquid-glass-home-full.jpg`, `liquid-glass-mobile-full.jpg` and `liquid-glass-artwork.webp` accompany this report.
