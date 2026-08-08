import Link from "next/link";
import Image from "next/image";
import GradientMesh from "@/components/GradientMesh";
import TrustSignals from "@/components/TrustSignals";
import "./page.css";

export const metadata = {
  title: 'NexaWorks — Context, Reconstructed',
  description: 'NexaWorks eliminates the hours your team spends gathering context before every meeting, deal, and decision. Complete context. Before you ask.',
};

export default function Home() {
  return (
    <main>
      <GradientMesh>
        <section className="hero-section" style={{ paddingTop: '160px' }}>
          <span className="tag" style={{ border: '1px solid var(--color-primary)', background: 'transparent', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}>CONTEXT RECONSTRUCTION</span>
          <h1 className="display-xxl text-gradient" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Your team spends hours rebuilding context.<br />We end that.
          </h1>
          <p className="body-lg" style={{ color: "var(--color-ink-secondary)", marginTop: "32px", maxWidth: "700px", margin: "32px auto 0", fontSize: '20px' }}>
            NexaWorks automatically reconstructs the context your team needs before every meeting, customer interaction, and decision — so important work starts with clarity, not chaos.
          </p>
          <div className="hero-actions">
            <Link href="/product" className="btn-primary btn-lg" style={{ padding: '16px 36px', fontSize: '18px', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>See How It Works</Link>
            <Link href="/tools/context-score" className="btn-secondary btn-lg" style={{ padding: '16px 36px', fontSize: '18px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>Try Context Score</Link>
          </div>
          
          <div className="dashboard-hero-wrapper animate-fade-in-up">
            <Image 
              src="/dashboard-hero-v2.jpg" 
              alt="NexaWorks Context Reconstruction Platform UI" 
              width={1400} 
              height={787}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </section>
      </GradientMesh>

      <TrustSignals />

      <section className="services-overview">
        <h2 className="display-xl">The most expensive problem nobody measures</h2>
        <p className="body-lg services-subtitle">
          Every knowledge worker rebuilds context before important work. It is invisible, unmeasured, and costs enterprises millions.
        </p>
        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)' }}>23 min</div>
            <h3 className="heading-md">Lost Per Context Switch</h3>
            <p className="body-md">Average time to regain deep focus after switching between tasks, tools, or conversations.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)' }}>58%</div>
            <h3 className="heading-md">Of the Day Spent Gathering</h3>
            <p className="body-md">Knowledge workers spend more than half their time searching for information — not using it.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)' }}>$15K+</div>
            <h3 className="heading-md">Per Employee Per Year</h3>
            <p className="body-md">The hidden cost of context reconstruction that never appears on any operational dashboard.</p>
          </div>
        </div>
      </section>

      <section className="services-overview" style={{ background: 'var(--color-canvas)' }}>
        <h2 className="display-xl">Context, reconstructed.</h2>
        <p className="body-lg services-subtitle">
          Three capabilities. One outcome: your team never starts important work blind.
        </p>
        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon">📡</div>
            <h3 className="heading-md">Capture</h3>
            <p className="body-md">We passively capture context across your existing tools — meetings, emails, documents, CRM — without adding bots or changing workflows.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3 className="heading-md">Reconstruct</h3>
            <p className="body-md">Our AI reconstructs the complete context relevant to your next action — pulling the right information from the right sources at the right time.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3 className="heading-md">Deliver</h3>
            <p className="body-md">Your team receives a complete Context Brief before every meeting, deal review, or decision — so they start with clarity from minute one.</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <div className="why-content">
            <h2 className="display-xl">Built on production-grade AI infrastructure</h2>
            <p className="body-lg">
              Context Reconstruction is powered by the same deterministic AI architectures trusted by Fortune 500 enterprises. Every retrieval is validated. Every output is auditable. Every system is engineered for 24/7 autonomous operation.
            </p>
            <Link href="/contact" className="btn-primary">Book architecture review</Link>
          </div>
          <div className="why-stats">
            <div className="stat-card">
              <div className="display-lg">96%</div>
              <div className="caption">Context accuracy</div>
            </div>
            <div className="stat-card">
              <div className="display-lg">97×</div>
              <div className="caption">Token cost reduction</div>
            </div>
            <div className="stat-card">
              <div className="display-lg">&lt;2s</div>
              <div className="caption">Brief generation time</div>
            </div>
            <div className="stat-card">
              <div className="display-lg">Zero</div>
              <div className="caption">Workflow disruption</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <h2 className="display-xl">We don't just build the product. We define the category.</h2>
        <p className="body-lg services-subtitle">
          NexaWorks publishes original research on context loss, AI retrieval accuracy, and workflow intelligence.
        </p>
        <div className="grid-3">
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="heading-md">State of Enterprise AI 2026</h3>
            <p className="body-md">Our annual report on the collapse of traditional search and the rise of Generative Engine Optimization.</p>
            <Link href="/research/state-of-enterprise-ai-2026" className="link-arrow">Read the report →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3 className="heading-md">Document AI Benchmarks</h3>
            <p className="body-md">Head-to-head comparison of Claude 3.5 Sonnet vs GPT-4o on FUNSD extraction datasets.</p>
            <Link href="/benchmarks/document-ai" className="link-arrow">View benchmarks →</Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3 className="heading-md">Security Trust Center</h3>
            <p className="body-md">How we mitigate the OWASP Top 10 for LLM Applications with deterministic guardrails.</p>
            <Link href="/security" className="link-arrow">View security →</Link>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <h2 className="display-xl">Context Reconstruction for every workflow</h2>
        <div className="grid-4">
          <div className="card service-card">
            <div className="service-icon">🏦</div>
            <h3 className="heading-md">Sales Teams</h3>
            <p className="body-md">Complete customer history, deal context, and relationship timeline — assembled before every call.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">🏥</div>
            <h3 className="heading-md">Clinical Teams</h3>
            <p className="body-md">Patient history, prior interactions, and clinical notes — reconstructed for seamless handoffs.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">🏢</div>
            <h3 className="heading-md">Finance Teams</h3>
            <p className="body-md">Invoice context, vendor history, and approval chains — eliminating manual AP research.</p>
          </div>
          <div className="card service-card">
            <div className="service-icon">⚖️</div>
            <h3 className="heading-md">Legal Teams</h3>
            <p className="body-md">Contract history, clause precedents, and regulatory context — reducing review preparation by hours.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="display-xl">Ready to eliminate context loss?</h2>
          <p className="body-lg">Start with a free diagnostic or book an architecture review with our engineering team.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-on-dark-inverse">Book Architecture Review</Link>
            <Link href="/research" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Read the Research</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
