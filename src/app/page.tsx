import Link from "next/link";
import TrustSignals from "@/components/TrustSignals";
import "./page.css";

export const metadata = {
  title: 'NexaWorks — Context Reconstruction Infrastructure',
  description: 'NexaWorks eliminates the hours your team spends gathering context before every meeting, deal, and decision.',
};

export default function Home() {
  return (
    <main className="engineered-layout">
      {/* 1. HERO SECTION - ASYMMETRIC */}
      <section className="hero-terminal">
        <div className="hero-split">
          <div className="hero-left">
            <h1 className="hero-headline">
              Your team spends hours rebuilding context.
              <br />
              <span style={{ color: 'var(--color-ink-mute)' }}>We end that.</span>
            </h1>
            <p className="hero-subtext">
              NexaWorks reconstructs the context your team needs before every meeting, customer interaction, and decision. We build the intelligence infrastructure for the modern enterprise.
            </p>
            <div className="hero-actions">
              <Link href="/product" className="btn-primary btn-lg">View Infrastructure</Link>
              <Link href="/contact" className="btn-secondary btn-lg">Book Architecture Review</Link>
            </div>
          </div>
          <div className="hero-right">
             <div className="context-engine-viz">
                <div className="pipeline-line">Slack <span className="arrow">↘</span></div>
                <div className="pipeline-line">CRM <span className="arrow">──→</span> <span className="highlight-box">Context Engine</span> <span className="arrow">──→</span> <span className="brief-box">Executive Brief</span></div>
                <div className="pipeline-line">Email <span className="arrow">↗</span></div>
                <div className="pipeline-line">Tickets <span className="arrow">↗</span></div>
             </div>
          </div>
        </div>
      </section>

      <div style={{ borderBottom: '1px solid var(--color-hairline)', background: 'var(--color-canvas)' }}>
        <TrustSignals />
      </div>

      {/* 2. SHOW THE OUTPUT (LITERAL BRIEF) */}
      <section className="output-section">
        <div className="container">
          <div className="section-header-left">
            <h2 className="display-lg">The final output.</h2>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)', maxWidth: '500px', marginTop: '16px' }}>
              We don't sell you a copilot that you have to prompt. We push synthesized intelligence directly into your workflow at the exact moment you need it.
            </p>
          </div>
          
          <div className="brief-mockup">
            <div className="brief-header">
              <span className="mono-badge">GENERATED: -5m</span>
              <span className="mono-badge">CONFIDENCE: 98%</span>
              <span className="mono-badge" style={{ marginLeft: 'auto' }}>PIPELINE: SALES_DISCOVERY</span>
            </div>
            <div className="brief-body">
              <div className="brief-grid">
                <div className="data-point">
                  <div className="data-label">Customer</div>
                  <div className="data-value">Acme Inc.</div>
                </div>
                <div className="data-point">
                  <div className="data-label">Event</div>
                  <div className="data-value">Renewal (34 days)</div>
                </div>
                <div className="data-point">
                  <div className="data-label">Health Score</div>
                  <div className="data-value" style={{color: 'var(--color-ruby)'}}>78 (At Risk)</div>
                </div>
                <div className="data-point">
                  <div className="data-label">Open Risks</div>
                  <div className="data-value">3</div>
                </div>
              </div>
              <div className="brief-divider"></div>
              <div className="brief-timeline">
                <div className="timeline-item">
                  <div className="timeline-time">Yesterday</div>
                  <div className="timeline-desc">
                    <strong style={{ display: 'block', marginBottom: '4px' }}>Support Escalation</strong>
                    Critical bug in API integration reported by Acme CTO. Engineering team flagged as high priority.
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-time">2 Days Ago</div>
                  <div className="timeline-desc">
                    <strong style={{ display: 'block', marginBottom: '4px' }}>Email Exchange</strong>
                    Acme CFO requested contract downgrade options from Account Executive.
                  </div>
                </div>
              </div>
              <div className="brief-divider"></div>
              <div className="brief-action">
                <div className="data-label">Recommended Talking Points</div>
                <ul className="action-list">
                  <li>Acknowledge API bug immediately; provide ETA from engineering.</li>
                  <li>Offer 3-month grace period on current contract tier to prevent immediate churn.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING DEPTH */}
      <section className="architecture-section">
        <div className="container">
          <div className="architecture-grid">
            <div className="arch-text">
              <h2 className="display-lg">Engineered for deterministic retrieval.</h2>
              <p className="body-md" style={{ marginTop: '16px', marginBottom: '24px' }}>
                LLMs are probabilistic. Enterprise data is deterministic. Our architecture bridges this gap using Model Context Protocol (MCP) and GraphRAG to guarantee factual accuracy across isolated systems.
              </p>
              <Link href="/architecture" className="link-arrow">Read the Architecture Docs</Link>
            </div>
            <div className="arch-diagram">
              <pre className="diagram-pre">
{`Context Engine
██████████████

[17 Systems]
     ↓
[Graph Node Resolution]
     ↓
[Multi-Hop Reasoning]
     ↓
[Evidence Citation]
     ↓
[Executive Brief]`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. CTA */}
      <section className="dense-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md">Ready to deploy?</h2>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">Book Architecture Review</Link>
            <Link href="/research" className="btn-secondary">View Benchmarks</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
