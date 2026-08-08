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
      {/* 1. HERO SECTION - DRAMATIC TYPOGRAPHY & CONTEXT GRAPH */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-typography">
            <h1 className="hero-headline">
              Your team spends hours<br/>rebuilding context.
            </h1>
            <div className="hero-spacer"></div>
            <h2 className="hero-punchline">
              We don't.
            </h2>
          </div>

          <div className="context-graph-container">
            <div className="graph-layer">
              <svg className="graph-lines" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path className="graph-flow delay-1" d="M100,50 L400,180" />
                <path className="graph-flow delay-2" d="M100,150 L400,200" />
                <path className="graph-flow delay-3" d="M100,250 L400,220" />
                <path className="graph-flow delay-4" d="M100,350 L400,240" />
                
                <path className="graph-flow-out" d="M600,210 L800,150" />
                <path className="graph-flow-out" d="M600,210 L800,270" />
              </svg>
            </div>
            
            <div className="graph-nodes">
              {/* Inputs */}
              <div className="graph-col inputs">
                <div className="node input-node">Slack</div>
                <div className="node input-node">CRM</div>
                <div className="node input-node">Email</div>
                <div className="node input-node">Calendar</div>
              </div>

              {/* Engine */}
              <div className="graph-col engine">
                <div className="node engine-node pulse">
                  Context Graph
                  <div className="engine-status">Resolving...</div>
                </div>
              </div>

              {/* Outputs */}
              <div className="graph-col outputs">
                <div className="node output-node">Evidence</div>
                <div className="node output-node">Executive Brief</div>
              </div>
            </div>
          </div>
          
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '64px' }}>
            <Link href="/product" className="btn-primary btn-lg">View Infrastructure</Link>
            <Link href="/contact" className="btn-secondary btn-lg">Book Architecture Review</Link>
          </div>
        </div>
      </section>

      {/* 2. NARROW QUOTE / TRUST (Rhythm Break) */}
      <section className="quote-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="editorial-quote">
            "The most expensive problem in the enterprise is invisible. It's the 23 minutes lost every time an employee switches contexts to find a document."
          </p>
          <div style={{ marginTop: '64px' }}>
            <TrustSignals />
          </div>
        </div>
      </section>

      {/* 3. FULL BLEED BRIEF MOCKUP */}
      <section className="bleeding-output-section">
        <div className="output-header container">
          <h2 className="display-lg">The final output.</h2>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '600px', marginTop: '16px' }}>
            We push synthesized intelligence directly into your workflow at the exact moment you need it. No prompting required.
          </p>
        </div>
        
        <div className="brief-mockup-bleeding">
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
      </section>

      {/* 4. FULL-WIDTH ARCHITECTURE (Dark Section) */}
      <section className="architecture-dark-section">
        <div className="container">
          <div className="architecture-grid">
            <div className="arch-text">
              <h2 className="display-lg">Engineered for deterministic retrieval.</h2>
              <p className="body-md" style={{ marginTop: '16px', marginBottom: '24px', color: 'var(--color-ink-mute-2)' }}>
                LLMs are probabilistic. Enterprise data is deterministic. Our architecture bridges this gap using Model Context Protocol (MCP) and GraphRAG to guarantee factual accuracy across isolated systems.
              </p>
              <Link href="/architecture" className="link-arrow" style={{ color: 'var(--color-on-primary)' }}>Read the Architecture Docs</Link>
            </div>
            <div className="arch-diagram">
              <pre className="diagram-pre">
{`[Context Engine]
██████████████████

├── [17 Systems]
│    ↓
├── [Graph Node Resolution]
│    ↓
├── [Multi-Hop Reasoning]
│    ↓
└── [Evidence Citation]
     ↓
[Executive Brief]`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. INDUSTRIES (Minimalist Icons) */}
      <section className="industries-minimal-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ marginBottom: '64px' }}>Context Reconstruction for every workflow</h2>
          <div className="industries-grid">
            <div className="industry-item">
              <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <h3 className="heading-md">Sales Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Complete customer history, deal context, and timeline.</p>
            </div>
            <div className="industry-item">
              <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <h3 className="heading-md">Clinical Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Patient history and clinical notes for seamless handoffs.</p>
            </div>
            <div className="industry-item">
              <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <h3 className="heading-md">Finance Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Invoice context and vendor history for AP research.</p>
            </div>
            <div className="industry-item">
              <svg className="industry-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
              <h3 className="heading-md">Legal Teams</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Contract history and regulatory context instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
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
