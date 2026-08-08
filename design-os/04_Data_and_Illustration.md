# 04. Data Visualization & Illustration System

## 1. Illustration Philosophy
**Absolute Ban on Stock Illustrations.** NexaWorks never uses generic, isometric "corporate memphis" vectors or 3D characters. 
We visualize abstract concepts (AI, Context, Retrieval) using explicit system diagrams, network graphs, and literal UI mockups.

## 2. Iconography
- **System Icons:** Sharp, unrounded, 1.5px stroke weight. Minimalist geometric construction. (e.g., Lucide or Radix UI style, but with strictly 0px border-radius caps).
- **Industry Icons:** Do not use emojis (`🏦`, `🏥`). Use single-color, high-fidelity SVGs.
- **Brand Logos:** When showing integrations (Slack, Salesforce, Jira), use monochromatic (black or white) versions of their logos. We do not let third-party brand colors pollute our stark palette.

## 3. Diagram Language (Architectural Visualization)
When explaining GraphRAG, MCP, or deterministic retrieval, we use a distinct visual language that mimics technical schematics.
- **Node Style:** Simple rectangles (`2px` border radius) or perfect circles. Black border on white background.
- **Edges (Lines):** 1px solid lines. Orthogonal routing only (lines must turn at 90-degree angles). No swooping bezier curves.
- **Annotations:** Explanatory text floating near the nodes must use `font-family: monospace` (`11px`, all caps) connected by a dashed leader line.
- **ASCII/Preformatted:** We encourage using literal ASCII diagrams within `<pre>` blocks to convey raw engineering authenticity.

## 4. Data Visualization (The "Bloomberg" Rules)
NexaWorks charts must feel like financial instruments—precise, information-dense, and highly credible.

### 4.1 Libraries
The Design OS recommends using D3.js or Observable Plot for custom data viz, or Recharts heavily overridden with custom CSS. Default tooltip behaviors must be stripped and replaced with our instant hover states.

### 4.2 Chart Anatomy
- **Grid Lines:** Horizontal lines only. 1px solid `#F4F4F5`. No vertical grid lines.
- **Axes:** Y-axis labels sit *on top* of the grid lines, right-aligned. X-axis labels use `Mono-Micro` typography.
- **Tooltips:** Square corners (`0px` radius). Black background (`#0A0A0A`), white text (`#FFFFFF`), monospace formatting. Instant appearance (`0s` transition).

### 4.3 Specific Visualization Types
- **Risk Visualization (Heatmaps):** Used for LLMOps Observability. Color scale from `#FFFFFF` (Safe) to `#EA580C` (Alert Orange) to `#DC2626` (Ruby Red - Severe Error).
- **Confidence Visualization:** Line charts plotting AI accuracy must include a shaded region underneath the primary line indicating the 95% confidence interval or standard deviation. The region color is `rgba(10, 10, 10, 0.05)`.
- **Latency/Timeline Visualization:** Step charts or bar charts. Bars must be 1px wide, packed densely. 
- **Knowledge Graphs (GraphRAG):** Force-directed layouts are banned (they feel too chaotic/bouncy). Node clusters must be arranged in strict radial or hierarchical (tree) layouts. Nodes are `#0A0A0A` dots, edges are `#E4E4E7` lines.
