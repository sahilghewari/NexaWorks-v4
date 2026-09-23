# 03. Component Library

This document specifies the exact visual and interaction rules for every atom and molecule in the NexaWorks Design OS.

---

## 1. Foundational UI Components

### 1.1 Buttons
- **Primary:** Background `#0A0A0A`, Text `#FFFFFF`. `2px` border radius. `padding: 12px 24px`. No drop shadow. Hover state: instantaneous shift to `#333333`.
- **Secondary:** Background `#FFFFFF`, Border `1px solid #E4E4E7`, Text `#0A0A0A`. Hover state: Border shifts to `#0A0A0A`.
- **Destructive/Risk:** Background `#EA580C`, Text `#FFFFFF`. (Used only in dashboard for deleting workflows).

### 1.2 Inputs & Forms
- **Fields:** `1px solid #E4E4E7` border. Background `#FFFFFF`. `padding: 12px`.
- **Focus State:** Border changes to `#0A0A0A`. `outline: 1px solid #0A0A0A`. Instantaneous. No glowing blue rings.
- **Labels:** `Mono-Micro` (`11px`, uppercase) sitting above the field.

### 1.3 Badges & Tags
- Used heavily to display engine telemetry and status.
- **Style:** Background `#F4F4F5`, Text `#52525B`. `font-family: monospace`. `font-size: 11px`. `padding: 4px 8px`. `border-radius: 2px`.
- **Semantic Badges:** 
  - High Confidence: `#16A34A` background with `#FFFFFF` text.
  - Degraded Context: `#EA580C` background with `#FFFFFF` text.

---

## 2. Advanced Data Components

### 2.1 The Executive Brief Viewer
The core output of NexaWorks. This component is used in marketing mockups and the actual dashboard.
- **Container:** Stark white box, `1px solid #E4E4E7`. 
- **Header:** Gray background (`#F4F4F5`). Contains monospace metadata (`GENERATED: 12:04PM`, `CONFIDENCE: 98%`).
- **Data Grid:** 2-column to 4-column grid displaying key variables (Customer, Event, Risk Score).
- **Typography:** Labels use `Mono-Micro`. Values use `Body-Large` (18px, Medium weight).

### 2.2 Context Timeline
Visualizes historical events leading up to a decision.
- **Line:** A vertical 1px line (`#E4E4E7`) running down the left side.
- **Nodes:** `6px` solid dots lying on the line.
- **Timestamps:** Left-aligned, `Mono-Data` (`13px`).
- **Content:** Right of the line, containing the event description and linked data sources (e.g., a badge saying `Slack`).

### 2.3 Evidence Blocks
Used to prove *why* the Context Engine generated a specific point in the brief.
- **Visual Style:** Mimics a code editor snippet.
- **Header:** Displays the exact file path or API endpoint (e.g., `jira/ticket/ENG-402`).
- **Body:** Dark background (`#111113`) with monospace text.
- **Highlight:** The specific sentence the AI extracted is highlighted with a faint `#2563EB` background to prove deterministic retrieval.

---

## 3. Research & Editorial Components

### 3.1 Data Tables (Bloomberg Style)
- Banned: Hover-over row highlights, rounded borders, excess padding.
- **Structure:** `border-bottom: 1px solid #E4E4E7` on rows. No vertical borders. 
- **Headers:** `Mono-Micro`.
- **Data:** Heavy reliance on right-aligned tabular numerals (`font-feature-settings: 'tnum'`) for perfect decimal alignment.

### 3.2 Confidence Intervals (Charts)
- Line charts must always display a shaded region representing the margin of error or context confidence. 
- **Line:** `2px solid #0A0A0A`.
- **Shaded Area:** `rgba(10, 10, 10, 0.05)`.

### 3.3 Footnotes & Citations
- Inline references rendered as superscripts: `[1]`, `[2]`.
- Clicking scrolls deterministically to the Bibliography at the bottom of the article.
- Bibliography rendered in `Mono-Data` to imply academic rigor.

---

## 4. Navigation Components

### 4.1 Breadcrumbs
- `font-family: monospace`, `12px`.
- Separated by a simple slash `/` or chevron `›`.
- Active page is `#0A0A0A`, parent pages are `#A1A1AA`.

### 4.2 Accordions (FAQ / Docs)
- Minimalist. `border-bottom: 1px solid #E4E4E7`. 
- `+` icon on the right. Rotates 45deg to `x` instantly on open. No slow height-sliding animations; instant toggle is preferred.

### 4.3 Skeletons (Loading States)
- We do not use "shimmering" or "breathing" skeleton loaders (they feel like generic SaaS).
- We use a "Compiling" state: A static gray box (`#F4F4F5`) containing a flashing monospace cursor (`_`) or terminal-style text reading `Fetching context...`.
