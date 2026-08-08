# 05. User Experience (UX) Flows

NexaWorks interfaces with distinct personas. The UX flows must route them efficiently based on their technical depth.

## 1. Discovery Flow (Marketing to Contact)
*Target: Founders, Operations, Executives.*

1. **The Hook (Homepage):** User lands. Sees the asymmetric Context Graph animation. Immediately grasps that NexaWorks replaces manual context-gathering with an automated pipeline.
2. **The Proof:** User scrolls down and sees the **Executive Brief Mockup**. They realize we sell an outcome (the brief), not a tool they have to prompt.
3. **The Validation:** User sees Trust Signals (Fortune 500 logos, Security badges).
4. **The CTA ("Book Architecture Review"):** We do not say "Get a Demo." We say "Book Architecture Review." This positions our sales team as engineers and consultants. Clicking opens a Calendly/Typeform flow.

## 2. Technical Evaluation Flow (Research & Docs)
*Target: CTOs, Staff Engineers, Developers.*

1. **The Hook (Homepage Architecture Section):** Developer sees the ASCII diagram detailing MCP and GraphRAG. They click "Read Architecture Docs."
2. **Documentation Hub:** They land on the Mintlify-style docs. The left sidebar guides them from Concept -> Integration -> API Reference.
3. **Code Validation:** They interact with the API explorer. They copy a curl request. They note the clean, dark-mode code blocks.
4. **The Trust Builder (Research):** From the docs, they follow an inline link to a Research Benchmark (e.g., "See our study on Context Window Degradation"). They land on the Bloomberg-style data tables.
5. **The Conversion:** Convinced by the empirical data, they click the primary CTA in the global nav: "Start Free Trial" or "Access Dashboard."

## 3. Product Exploration Flow (Dashboard)
*Target: Customer Success, End Users.*

1. **Empty State:** User logs in. The dashboard is empty. We do not show a cute illustration of a ghost. We show a terminal-style loader: `Connect your first data source to begin context assembly.`
2. **Integration Flow:** User clicks "Add Source". A modal opens. They select Jira. OAuth completes.
3. **The Generation (Magic Moment):** Back on the dashboard, a timeline starts populating. `Fetching tickets...` -> `Resolving Graph Nodes...`.
4. **The Output:** An Executive Brief is generated and appears at the top of their inbox. They click it, expanding the brief on the right panel, with evidence citations heavily highlighted on the left.

## 4. Reading Flow (Blog & Articles)
*Target: SEO, Social Media traffic.*

1. **Article Page:** Max 65ch width. Dense, editorial typography (Inter 18px).
2. **Footnote Interaction:** User clicks a `[1]` citation. The page instantly jumps to the bibliography at the bottom (no smooth scrolling delay).
3. **Progress Tracking:** A 2px thin black line at the top of the viewport tracks reading progress.
4. **Related Content:** At the bottom, a 2x2 grid of "Related Architectural Playbooks" keeps them in the ecosystem.
