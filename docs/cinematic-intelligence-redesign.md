> This records the earlier cinematic implementation. The current light redesign is documented in `liquid-glass-redesign.md`.

# NexaWorks — cinematic intelligence redesign

Implemented in the existing Next.js project, on draft PR #26. Preview: http://127.0.0.1:3004/. Not deployed to production.

## Art direction and implementation

- Replaced the hero composition with a full-width near-black spatial scene. A custom projected SVG sphere combines latitude/longitude mesh, connected nodes, source paths, particles and restrained orbital highlights. Relationship, product and support labels connect the environment to the account narrative. No downloaded stock scene, raster placeholder, additional dependency or WebGL renderer.
- Introduced oversized contemporary sans-serif headline typography with editorial serif emphasis, cool white copy, lavender actions and cyan signal highlights. Preserved the headline, positioning, wordmark and original CTA destinations.
- Integrated the existing interactive dashboard into a layered, lightly perspective-shifted interface in front of the network. The illustrative Meridian data remains 82/100, renewal in 60 days, active users down 22%. Northstar switching, evidence, chart inspection and accessible data table retain their existing behavior.
- Added an environment reveal, bounded desktop cursor parallax (maximum 10px horizontal / 7px vertical), slow orbital movement and chart-line transitions. Orbital motion pauses when the hero is outside the viewport. Event handlers and animation frames are cleaned up. Reduced-motion CSS and the existing Motion preference hook disable motion; mobile/tablet environments are static and remove backdrop blur.
- Rebuilt the transition into a separate ivory Snapshot section: “Perspective first. Then the next move.”, 20 accounts, five business days and evidence-backed priorities. Kept the compact source-system strip and its existing business meaning.
- Continued the spatial palette through the dark account timeline, source-to-action workflow, Snapshot deliverable, pricing, Reading Room and shared footer. Shared marketing typography and tokens carry the direction into service, guide, tool and contact pages.
- Reworked mobile composition as copy, a simplified network scene and a flat, usable dashboard. Fixed an observed clipped headline at 320px.

## Files and components

- `src/components/marketing/IntelligenceEnvironment.tsx` — new deterministic projected network.
- `src/components/marketing/EditorialExperience.tsx` — entrance, parallax and off-screen animation lifecycle.
- `src/app/page.tsx` — new hero structure and separate ivory offer transition.
- `src/app/cinematic-home.css` — spatial composition, dashboard surfaces, section treatments and responsive states.
- `src/app/marketing-system.css` — shared palette, typography, navigation and footer system.
- `src/components/layout/Footer.tsx` — restrained orbital reprise across marketing pages.

Existing routes, metadata, prices, form submission components, APIs, CRM contracts, calendar configuration and payment logic were not changed by this iteration. The independent /ai campaign keeps its existing layout and checkout.

## Verification actually performed

| Check | Result |
|---|---|
| Production build | Pass, 44 generated pages |
| Changed TSX ESLint | Pass, no errors or warnings |
| Existing payment tests | 9/9 pass; no live payment |
| Separate type check | 10 existing errors outside changed files; none introduced here |
| Full-project lint | Same 10 errors / 18 warnings in unchanged files |
| Final homepage widths | Measured at 1920, 1440, 1024, 768, 390 and 320px; no document overflow or internal headline clipping |
| Page checks | Nine key routes at 1440 and 390px: Snapshot, Customer Success AI, Blueprint, Pilot, Green Then Gone guide, contact, about and both tools; no detected document overflow |
| Visual inspection | Actual desktop/mobile hero screenshots, full homepage and desktop page-review sheet inspected; dark account story and ivory transition inspected in browser |
| Dashboard | Account switching, keyboard evidence activation, chart date selection, full data table and corresponding values checked |
| Mobile navigation | Modal opens; Escape closes it and returns focus to Open menu |
| Environment | Desktop interaction produced bounded depth values; off-screen orbit state observed as paused; 768/390/320px computed orbit animation is none |
| Intake | Blank submission focuses name field; isolated local endpoint exercises visible failure, retry and success. Two local requests retained the same submission ID |
| Console | Final production navigation and account switching: no warnings or errors observed |
| Diff | Whitespace check passes; no dependency, API, form-handler or route deletion changes |

The isolated form test used fictional data and intercepted POST /api/lead locally. It created no email, CRM record, booking or payment. Earlier sample/contact form checks remain documented in the previous implementation report; they were not resubmitted during this iteration.

## Remaining limitations

The separate type check retains implicit-any errors in the payment routes (2), calendar class-name API mismatch (1), resizable-panel API mismatches (5) and scroll-state generic casts (2). The existing build configuration skips type validation. Full-project lint failures remain in unchanged components, as detailed in the earlier report.

Real email/CRM delivery and checkout still need controlled deployment-environment verification. Reduced-motion behavior is implemented and reviewed in source; OS preference emulation was not performed. No formal assistive-technology certification, Lighthouse score or field-performance result is claimed.

No new reference image was accessible in the supplied attachments: the available attachment is the previous text brief. This implementation follows the current written cinematic direction; no image comparison is claimed.

## Review artifacts

`cinematic-home-desktop.jpg`, `cinematic-home-full.jpg`, `cinematic-home-mobile.jpg`, `cinematic-home-mobile-full.jpg` and `cinematic-account-story.jpg` accompany the report.
