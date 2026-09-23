# 06. Page-by-Page Architectural Blueprints

This document provides the exhaustive, section-by-section structural blueprint for all 26+ pages across the NexaWorks ecosystem.

---

## 1. Marketing & Core Pages

### 1.1 Homepage (`/`)
- **Purpose:** Establish the category (Context Reconstruction) and prove engineering superiority.
- **Sections:**
  1. **Hero Asymmetric:** Massive typography left. Animated Context Graph right.
  2. **Trust Ribbon:** 1px bordered boxes with monochrome logos.
  3. **Output Mockup (Bleeding):** Full-bleed Executive Brief overlapping the next section.
  4. **Engineering Depth (Dark):** ASCII diagram mapping the GraphRAG architecture.
  5. **Industries Grid:** Minimalist wireframe SVGs.
  6. **CTA:** "Book Architecture Review".

### 1.2 Product Overview (`/product`)
- **Purpose:** Deep dive into the 3-step engine (Capture, Reconstruct, Deliver).
- **Sections:**
  1. **Hero:** Centered, Display-Large headline. "Infrastructure for Intelligence."
  2. **The Pipeline (Sticky Scroll):** A 3-part scroll-spy section. The left side stays pinned showing a data graph, while the right side scrolls through textual explanations of Capture, Reconstruct, Deliver.
  3. **Performance Metrics:** 3-column grid of live telemetry (Latency, Cost reduction, Accuracy).
  4. **Integration Ecosystem:** A massive, dense grid of all 40+ supported apps.

### 1.3 Solutions Overview (`/solutions`)
- **Purpose:** Route personas to their specific playbooks.
- **Layout:** Masonry grid of 4 large cards (Sales, Clinical, IT, Legal). Hovering reveals a snippet of an industry-specific Executive Brief.

### 1.4 Industry Detail (`/industries/[slug]`)
- **Purpose:** Hyper-specific landing page for programmatic SEO and paid ads.
- **Sections:**
  1. **Hero:** "Context Reconstruction for [Industry]."
  2. **Before / After:** A brutal 2-column table comparing manual workflow vs NexaWorks workflow.
  3. **Live Architecture:** An SVG diagram showing exactly how NexaWorks connects to [Industry-specific Tool, e.g., Epic for Healthcare, Salesforce for Sales].
  4. **Case Study Quote:** Editorial pull quote.

### 1.5 Pricing (`/pricing`)
- **Purpose:** Transparent, enterprise SaaS pricing.
- **Layout:** 3-column table (Infrastructure, Growth, Enterprise). No generic checkmarks (✔️). Use `Mono-Micro` text (`INCLUDED`, `CUSTOM`, `LIMIT: 1M TOKENS`).

### 1.6 About (`/about`)
- **Purpose:** Establish the founding team's engineering pedigree.
- **Layout:** Editorial. Heavy text. Headshots must be black and white, high-contrast, strictly square (no circles).

### 1.7 Contact / Book Review (`/contact`)
- **Purpose:** Lead capture.
- **Layout:** Split pane. Left: Minimalist form (Name, Email, Repo size, Architecture question). Right: A dark panel displaying a rotating log of recent API pings to signify activity/infrastructure.

### 1.8 Waitlist (`/waitlist`)
- **Purpose:** Capture early access demand.
- **Layout:** Ultra-minimalist. White background, center-aligned form, blinking terminal cursor in the input placeholder.

### 1.9 404 Page (`/404`)
- **Purpose:** Handle errors with brand voice.
- **Layout:** Terminal window aesthetic. `Error 404: Context Node Unreachable`. A button to return to the root directory (`/`).

---

## 2. Research Hub

### 2.1 Research Center Landing (`/research`)
- **Purpose:** Bloomberg-style hub for authority.
- **Sections:**
  1. **Hero:** "Macroeconomic Intelligence & Benchmarks".
  2. **Empirical Benchmarks Table:** 4-column data table (Date, Abstract, Key Finding, Link).
  3. **Live Datasets Table:** Data that updates dynamically.
  4. **Annual Reports:** 1-column list with deep descriptions.

### 2.2 Research Article (`/research/[slug]`)
- **Purpose:** Long-form empirical reading.
- **Layout:** Constrained to 65ch width.
- **Components:** High-density data tables, D3.js line charts with confidence intervals, superscript footnotes `[1]`, PDF Download button fixed to the top right.

### 2.3 Blog Landing (`/blog`)
- **Purpose:** Editorial stream of product updates and thought leadership.
- **Layout:** 2-column grid. Left column for feature releases (Dark cards), Right column for thought leadership (White cards).

### 2.4 Case Study (`/case-studies/[slug]`)
- **Purpose:** Prove ROI.
- **Layout:** Starts with a massive, monospace metric (e.g., `97x ROI`). Followed by an editorial interview format (Q&A style).

### 2.5 Glossary (`/glossary`)
- **Purpose:** SEO capture for technical terms (e.g., GraphRAG).
- **Layout:** Alphabetical index. Dictionary-style definitions.

---

## 3. Documentation & Developer Hub

### 3.1 Docs Landing (`/docs`)
- **Purpose:** Developer onboarding.
- **Layout:** 3-column grid of getting started playbooks.

### 3.2 Documentation Article (`/docs/[slug]`)
- **Purpose:** Technical instruction.
- **Layout:** Dual sidebar. Left: Nav tree. Right: Page TOC.
- **Components:** Syntax-highlighted code blocks, tabbed interfaces (cURL, Python, TS), Warning callouts (Alert Orange border).

### 3.3 API Reference (`/docs/api`)
- **Purpose:** Endpoint documentation.
- **Layout:** 3-column. Left: Nav. Middle: Parameters and Schema. Right: Dark-mode code block with an interactive "Run in Browser" button.

### 3.4 Open Source (`/open-source`)
- **Purpose:** Highlight contributions (e.g., MCP connectors).
- **Layout:** GitHub-style density. List of repos with star counts, last commit timestamps, and primary language indicators.

### 3.5 Playbooks (`/playbooks`)
- **Purpose:** Step-by-step implementation guides.
- **Layout:** Numbered list, heavily featuring workflow diagrams.

### 3.6 Security & Trust Center (`/security`)
- **Purpose:** Pass vendor security review.
- **Layout:** Dense, unstyled text list of SOC2, GDPR, HIPAA compliance measures. Links to download penetration test summaries.

---

## 4. SaaS App / Dashboard

### 4.1 Dashboard Home (`/app`)
- **Purpose:** Command center.
- **Layout:** Full-width. Left sidebar for navigation. Main pane shows a feed of recently generated Context Briefs and a timeline of ingested data events.

### 4.2 Customer Portal / Context Viewer (`/app/brief/[id]`)
- **Purpose:** The core product experience.
- **Layout:** Split screen. Left: The formatted Executive Brief. Right: The "Evidence Graph"—a visual network map showing exactly which emails, Jira tickets, and CRM records fed into the brief.

### 4.3 Integrations Manager (`/app/integrations`)
- **Purpose:** Connect data sources.
- **Layout:** Grid of square cards with monochromatic logos. Status badges (e.g., `SYNCING`, `HEALTHY`, `DEGRADED`).

### 4.4 Settings (`/app/settings`)
- **Purpose:** Workspace configuration.
- **Layout:** Standard vertical list of input forms. Use of danger buttons (`Delete Workspace`).

### 4.5 App Global Search (`/app/search`)
- **Purpose:** Find any reconstructed context.
- **Layout:** A massive `Cmd+K` command palette overlay that dims the background and indexes all briefs, contacts, and tickets across the graph.
