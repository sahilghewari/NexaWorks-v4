import { Metadata } from 'next';
import Link from 'next/link';
import InteractiveHero from '@/components/InteractiveHero';

export const metadata: Metadata = {
  title: 'How Context Reconstruction Works | NexaWorks',
  description: 'Eliminate context loss with deterministic RAG, Model Context Protocol integrations, and agentic orchestration.',
};

export default function ProductPage() {
  return (
    <main style={{ backgroundColor: '#000' }}>
      <InteractiveHero />

      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="display-xl" style={{ textAlign: 'center', marginBottom: '48px' }}>The Problem</h2>
          <div className="grid-3">
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Context Switching Cost</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Teams waste hours daily moving between platforms to piece together the history of a customer, incident, or project.
              </p>
            </div>
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Fragmented Tools</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Crucial knowledge is scattered across CRMs, ticketing systems, chat applications, and email threads.
              </p>
            </div>
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Invisible Productivity Loss</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                The mental toll of rebuilding context for every new task silently degrades work quality and team velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="display-xl" style={{ textAlign: 'center', marginBottom: '48px' }}>How It Works</h2>
          <div className="grid-3">
            <div className="service-card">
              <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px' }}>STEP 01</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Capture</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Passively connects to existing tools via MCP (Model Context Protocol) without adding invasive bots or requiring workflow changes.
              </p>
            </div>
            <div className="service-card">
              <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px' }}>STEP 02</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Reconstruct</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                Deterministic RAG and GraphRAG algorithms assemble relevant context using rigorous Pydantic validation to ensure factual accuracy.
              </p>
            </div>
            <div className="service-card">
              <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px' }}>STEP 03</div>
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Deliver</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                A synthesized Context Brief is delivered proactively before meetings, decisions, or ticket assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="display-xl" style={{ textAlign: 'center', marginBottom: '48px' }}>The Infrastructure</h2>
          <div className="grid-2">
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Deterministic Retrieval</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Combining Pydantic schemas, vector search, and graph databases for precise, validated extraction.</p>
            </div>
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Model Context Protocol</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Secure, standardized tool connections that respect your data boundaries and never expose credentials.</p>
            </div>
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Agentic Orchestration</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>LangGraph-powered stateful agents that reason through complex, multi-step context gathering autonomously.</p>
            </div>
            <div className="service-card">
              <h3 className="heading-md" style={{ marginBottom: '12px' }}>Computer Use</h3>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>Visual automation capabilities for bridging legacy systems where modern APIs do not exist.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="display-xl" style={{ marginBottom: '16px' }}>Enterprise Security</h2>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
            Built from day one to comply with OWASP, SOC2, DPDP Act, and the EU AI Act. Your data is processed securely and never used to train generalized models.
          </p>
          <Link href="/security" className="link" style={{ fontWeight: 600 }}>Read Security Whitepaper →</Link>
        </div>
      </section>

      <section className="cta-section" style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-canvas)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="cta-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="display-xl" style={{ marginBottom: '1.5rem', color: 'var(--color-canvas)' }}>Ready to eliminate context loss?</h2>
            <p className="body-lg" style={{ marginBottom: '2rem', color: 'var(--color-canvas)', opacity: 0.8 }}>Book an architecture review with our engineering team.</p>
            <Link href="/contact" className="btn-primary btn-on-dark-inverse" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink)', fontWeight: 'bold', borderRadius: '0.5rem', textDecoration: 'none' }}>
              Book Architecture Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
