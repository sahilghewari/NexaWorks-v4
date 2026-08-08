# 01. Design Philosophy & Design Tokens

## 1. Core Philosophy
NexaWorks is an enterprise infrastructure company. Our design language must communicate:
- **Engineering:** Bare-metal performance, deterministic architecture, raw output.
- **Systems Thinking:** Everything is connected. Flows are visible. 
- **Enterprise Trust:** Serious, data-backed, uncompromising.
- **Calm Precision:** No visual noise, no startup hype.

### 1.1 Anti-Tenets (What We Are Not)
- **No Glassmorphism:** We do not blur backgrounds. We rely on solid, opaque layers.
- **No Purple Gradients:** We reject the "AI Wrapper" purple aesthetic.
- **No Bouncy Physics:** Animations must not use spring physics. Use instant or linear transitions.
- **No Floating Emoji Cards:** We use stark, terminal-like boxes for features.
- **No Stock Illustrations:** We use precise data visualizations, never generic corporate vectors.

---

## 2. Brand & Visual Personality

### 2.1 The "Context Graph" Signature
Our foundational visual motif is the **Context Graph**—a literal visualization of data flowing from disparate systems (Slack, CRM, Jira) into a central engine, which deterministically outputs an Executive Brief. It represents the order we bring to enterprise chaos.

### 2.2 Editorial Authority
Our Research and Documentation hubs must feel like reading the Financial Times or a Bloomberg terminal: factually dense, heavily footnoted, relying on huge scale contrast to guide the eye.

---

## 3. Color System

Our color system sits at the intersection of a high-end editorial publication and a developer terminal.

### 3.1 Primary Palette (Monochrome Base)
- `--color-ink`: `#0A0A0A` (Primary Text - Near Black)
- `--color-canvas`: `#FFFFFF` (Primary Background - Stark White)
- `--color-brand-dark`: `#111113` (Used for heavy infrastructural sections)
- `--color-brand-light`: `#F4F4F5` (Used for subtle section offsets)
- `--color-hairline`: `#E4E4E7` (Borders, grid lines)

### 3.2 Semantic & Data Palette (Bloomberg-Inspired)
We never use generic brand colors for data. Data uses stark, semantic terminal colors.
- `--color-confidence-high`: `#16A34A` (Phosphor Green)
- `--color-risk-alert`: `#EA580C` (Alert Orange)
- `--color-data-link`: `#2563EB` (Terminal Blue - strictly for sources/integrations)
- `--color-timeline`: `#9CA3AF` (Muted Gray for chronological connections)

### 3.3 Dashboard Hierarchy
- **Base Layer (z-0):** `#F4F4F5`
- **Surface Layer (z-10):** `#FFFFFF`
- **Floating Panel (z-50):** `#FFFFFF` with strict `0 1px 2px rgba(0,0,0,0.05)` shadow.

---

## 4. Typography System

We use a high-tension pairing: Editorial scale vs. Engineering telemetry.

### 4.1 Display & Body (Editorial Voice)
- **Typeface:** *Inter Tight* or *PP Neue Montreal*
- **Weights:** 300 (Light), 500 (Medium). No bold shouting.
- **Scale (Desktop):**
  - `Hero-Punchline`: 88px, -3px letter-spacing, 1.0 line-height.
  - `Display-1`: 72px, -2px letter-spacing.
  - `Display-2`: 48px, -1px letter-spacing.
  - `Body-Large`: 18px, 1.6 line-height (Introductions).
  - `Body-Base`: 15px, 1.5 line-height (Standard UI).

### 4.2 Data & Code (Engineering Voice)
- **Typeface:** *JetBrains Mono* or *SF Mono*
- **Usage:** Strictly used for engine outputs, timestamps, confidence scores, logs, and API paths.
- **Scale:**
  - `Mono-Data`: 13px
  - `Mono-Micro`: 11px, All-caps, +0.5px letter-spacing (e.g., `PIPELINE: ACTIVE`).

---

## 5. Layout & Grid System

### 5.1 Grid Definitions
- **Desktop Grid:** 12-column, 24px gutter.
- **Tablet Grid:** 8-column, 16px gutter.
- **Mobile Grid:** 4-column, 16px gutter.
- **Container Max-Width:** 1200px (Marketing), 1400px (Dashboard).

### 5.2 Reading Constrains
- **Research/Docs Width:** Strictly constrained to `65ch` (approx 680px) for optimal reading ergonomics. Never let text span the full 1200px.

### 5.3 Bleeding Rules (Breaking the Box)
- Linear, repeating boxes are banned. UI elements (like a generated Brief or an Evidence Panel) should use negative margins (`margin-bottom: -96px`) to break out of their section and overlap the next, creating physical depth and interrupting the scroll rhythm.

---

## 6. Motion & Interaction System

We avoid excessive animation. Motion means state change, not decoration.

### 6.1 Transition Constraints
- **Hover States:** Instantaneous (`0.05s` or `0s`). Software doesn't slowly fade in; it reacts.
- **Page Transitions:** Immediate. No elaborate wipes.

### 6.2 Data Animations
- **Pipeline Flows:** Use SVG `stroke-dasharray` to simulate data flowing from node to node. 
- **Context Assembly:** When rendering a mockup of an Executive Brief, elements should stagger-load (50ms offset) to simulate the engine generating the data in real-time.
- **Pulsing Nodes:** The central Context Engine node uses a subtle 3-second opacity pulse. No scale bouncing.

### 6.3 Interactions
- **Keyboard First:** Everywhere. `Cmd+K` for global search. `J/K` navigation in dashboards.
- **Cursor Constraints:** No custom cursors. Use standard system cursors to maintain OS-level trust.
