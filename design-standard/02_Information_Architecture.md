# 02. Information Architecture (IA)

NexaWorks possesses a massive surface area: marketing, deep research, dense documentation, and a highly interactive SaaS application. The Information Architecture must allow distinct personas (Engineers, Executives, Analysts) to navigate efficiently without tripping over each other.

---

## 1. Primary Global Navigation

The top navigation bar is universally persistent across all public properties (Marketing, Research, Docs).

- **Product**
  - Platform Architecture
  - GraphRAG Engine
  - Security & Trust
  - Integrations
- **Solutions (By Persona)**
  - For Sales Engineering
  - For Clinical Operations
  - For Incident Response (IT)
  - For Legal & Compliance
- **Research Hub**
  - Empirical Benchmarks
  - Live ROI Indexes
  - Annual Reports
  - Methodology
- **Developers**
  - Documentation
  - API Reference
  - Model Context Protocol (MCP)
  - Open Source
- **Pricing**
- **Company** (About, Careers, Contact)

**Right-Aligned Actions:**
- Sign In (Subdued link)
- Book Architecture Review (Primary Button)

---

## 2. Command Palette (`Cmd+K`)

The Command Palette is the primary navigation method for power users. It sits globally across all properties.

### 2.1 Indexing Scope
The palette instantly indexes:
- All Documentation pages and sub-headers (H2, H3).
- All Research publications and benchmarks.
- All Marketing solutions pages.
- Action triggers (e.g., "Contact Sales", "Login to Dashboard").

### 2.2 Visual Presentation
- Centered modal.
- `Mono-Data` typography for search results metadata (e.g., `DOCS › MCP › INIT`).
- Instant keyboard navigation (Up/Down arrows, Enter to select).

---

## 3. The Footer Taxonomy

The footer is massive, brutalist, and utilitarian. It acts as the ultimate sitemap for programmatic SEO hubs and deep integrations.

### Columns:
1. **Platform:** Architecture, Security, GraphRAG, Deterministic Routing.
2. **Use Cases:** Pre-Meeting Research, Customer Onboarding, Deal Review, SEV-1 Triage, Contract Abstraction.
3. **Compare (vs):** Enterprise Search, Conversational AI, RPA, Custom Langchain.
4. **Integrations:** Salesforce, Zendesk, SAP, Jira, Slack, Tally.
5. **Research:** Document AI Benchmarks, LLM Observability, ROI Index.
6. **Company:** About, Careers, Security Trust Center, Legal, Privacy.

---

## 4. Deep-Dive Navigations

### 4.1 Research Explorer (Sidebar)
When inside the Research Hub, a left-hand sticky sidebar appears.
- **Filters:** By Date, By Subject (LLMOps, Degradation, ROI).
- **Tags:** `empirical`, `benchmark`, `whitepaper`.

### 4.2 Documentation Explorer (Dual Sidebar)
Inspired by Stripe and Mintlify.
- **Left Sidebar:** Global navigation tree (Getting Started, Authentication, Endpoints, Webhooks).
- **Right Sidebar (On Page):** "On this page" (H2/H3 anchors) highlighting the current scroll position.

### 4.3 App/Dashboard Navigation
- **Workspace Switcher:** Top-left dropdown.
- **Left Sidebar:** 
  - Inbox (New Context Briefs)
  - Workflows (Sales, Support, Custom)
  - Integrations (Data Sources)
  - Analytics (Tokens, Retrieval Latency)
  - Settings
- **Bottom-Left:** User Profile & Billing.

---

## 5. Cross-Linking Strategy (Knowledge Graph)

Pages must never be isolated. We treat our own properties like a connected context graph.
- **Marketing pages** must link inline to **Research Benchmarks** (e.g., "Our architecture prevents hallucination [See Document AI Benchmark]").
- **Research Benchmarks** must link to **Documentation** (e.g., "To implement this routing, see our MCP Documentation").
- **Documentation** must link to **Solutions** (e.g., "See how Clinical teams deploy this endpoint").
