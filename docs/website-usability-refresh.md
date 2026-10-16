# Website usability refresh

Addresses the desktop/mobile visual audit while preserving the existing Next.js routes and lead-capture contract.

## Changes

- Replace the blurred-header mobile overlay with an opaque native modal dialog, accessible state, Escape dismissal, focus return, scroll locking, and desktop-breakpoint cleanup.
- Shorten the homepage headline; elevate the free Snapshot alongside discovery; make the illustrative meeting brief visible on mobile.
- Preserve `/#services` and give it a positive Snapshot / Blueprint / Pilot overview. Keep limitations in their own section.
- Reduce shared mobile heading size and section spacing, compact solution/article intros, add article jump links and earlier paid-offer CTAs.
- Add persistent form labels, autocomplete, required/optional cues, grouped source selection, live feedback, privacy link and clearer data-access expectations.
- Put Snapshot deliverables before market-research quotes, bring qualification criteria forward, and identify the quotes as research rather than customer endorsements.
- Give Calendly the full content width, a taller mobile/tablet area and a direct fallback link. Retain NEXT_PUBLIC_CALENDLY_URL and its current fallback.
- Improve light-surface accent/placeholder contrast, visible focus, skip navigation, heading hierarchy and reduced-motion handling.
- Identify the founder as Sahil using the identity already present in the lead-email templates. No credentials, customer logos or case-study metrics were invented.

## Preserved

No route files were added or removed. Existing canonicals, metadata, structured-data definitions, sitemap, robots, pricing and paid checkout remain in place. No API handlers, email templates, CRM integrations, analytics configuration, submission JSON keys, lead-source values, consent requirements or idempotency behavior were changed. The homepage CTA emphasis changes intentionally, while booking remains available in the navigation and footer. The homepage hero also links to an interactive example, and the mobile action promotes the Snapshot.

## Validation

- Production build passes (all 44 pages generated). Existing configuration skips build-time type validation; a separate type check was run.
- ESLint passes for every changed TSX file; diff whitespace check passes.
- Existing payment suite: 9/9 tests pass.
- Browser inspection on local development and production builds: desktop 1440x1000, mobile 390x844, narrow mobile Pilot at 320x740. Checked menu opening/closing, Escape, restored focus, services navigation, visible intake labels, guide layout, calendar loading and fallback URL. No horizontal document overflow was detected in inspected layouts.
- Separate TypeScript check reports 10 existing diagnostics in payment routes, calendar/resizable shared UI and scroll-state utilities. A clean checkout of the original commit with the same installed dependencies reproduces all 10. No changed file is named in those diagnostics.
- No real leads, emails, CRM records, calendar bookings or payments were created during verification. End-to-end delivery requires deployment environment credentials and a controlled test.

## External follow-up

The configured Calendly event still calls itself “NexaWorks Enterprise Beta Onboarding.” Rename it and its description in the Calendly account, or set NEXT_PUBLIC_CALENDLY_URL to the intended discovery event after verifying the destination. This repository change deliberately retains the functioning booking destination rather than inventing a replacement.

Real founder credentials, portraits, attributable research sources and measured customer case studies should be supplied and verified before publishing those additions. This pass does not claim to complete those editorial follow-ups.

## Release

Review the branch in a preview deployment, exercise consent, lead routing, asset email delivery and attribution using controlled test details, then deploy through the existing release workflow. Roll back by reverting this commit.

## Editorial homepage redesign

The final homepage follows the selected Editorial concept: warm ivory, aubergine, large serif typography and an interactive account dossier. This supersedes the earlier green/mint and generated-glass directions on this branch. Those unused components/assets are no longer imported by the homepage.

The illustrative Meridian and Northstar examples switch account status, metric, chart, evidence and next action. Evidence rows expand with source context; buttons expose pressed/expanded state and support keyboard activation. The page combines a score-versus-timeline comparison, source-to-action diagram, Snapshot deliverable, original pricing, illustrated resources and founder/sample-brief section. Shared navigation and footer receive the new treatment only on the homepage; scoped variables prevent styling from persisting onto inner routes after navigation.

No new library or font dependency. Motion consists of a short arrival, chart draw on selection and hover feedback; there is no repeating ambient motion, and reduced-motion CSS disables these effects. The illustration and report visuals are code-native, with examples labeled as illustrative. Existing sample-email form code, intake and contact routes, CRM handlers, pricing and SEO metadata remain unchanged.

Validation: production build generates all 44 pages; changed-file ESLint passes. The separate type check reports the same 10 previously established diagnostics in unchanged payment/UI/scroll files, with no changed file named. Browser review includes desktop, mobile and narrow-mobile layouts, account selection, evidence disclosure, navigation and the existing Snapshot intake handoff. No live lead, email, booking or payment was submitted; CRM delivery still needs a controlled deployment-environment check.
