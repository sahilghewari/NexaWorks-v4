import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveHero from '@/components/InteractiveHero';
import './page.css';

export const metadata: Metadata = {
  title: 'How Context Reconstruction Works | NexaWorks',
  description: 'Eliminate context loss with deterministic RAG, Model Context Protocol integrations, and agentic orchestration.',
};

export default function ProductPage() {
  return (
    <main className="product-page">
      <InteractiveHero />

      <section className="product-section product-section-light">
        <h2 className="product-section-title">The Context Gap</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>Context Switching Cost</h3>
            <p>
              Teams waste hours daily moving between platforms to piece together the history of a customer, incident, or project.
            </p>
          </div>
          <div className="problem-card">
            <h3>Fragmented Tools</h3>
            <p>
              Crucial knowledge is scattered across CRMs, ticketing systems, chat applications, and email threads.
            </p>
          </div>
          <div className="problem-card">
            <h3>Invisible Productivity Loss</h3>
            <p>
              The mental toll of rebuilding context for every new task silently degrades work quality and team velocity.
            </p>
          </div>
        </div>
      </section>

      <section className="product-section stepper-section">
        <h2 className="product-section-title">The Reconstruction Pipeline</h2>
        <div className="stepper-container">
          <div className="stepper-step">
            <span className="stepper-step-num">Step 01</span>
            <h3>Capture</h3>
            <p>
              Passively connects to existing tools via MCP (Model Context Protocol) without adding invasive bots or requiring workflow changes.
            </p>
          </div>
          <div className="stepper-step">
            <span className="stepper-step-num">Step 02</span>
            <h3>Reconstruct</h3>
            <p>
              Deterministic RAG and GraphRAG algorithms assemble relevant context using rigorous Pydantic validation to ensure factual accuracy.
            </p>
          </div>
          <div className="stepper-step">
            <span className="stepper-step-num">Step 03</span>
            <h3>Deliver</h3>
            <p>
              A synthesized Context Brief is delivered proactively before meetings, decisions, or ticket assignments.
            </p>
          </div>
        </div>
      </section>

      <section className="product-section product-section-light">
        <h2 className="product-section-title">The Technical Engine</h2>
        <div className="bento-grid">
          <div className="bento-card large">
            <Image src="/bento-retrieval.jpg" alt="Deterministic Retrieval" width={600} height={400} style={{width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px'}} />
            <h3>Deterministic Retrieval</h3>
            <p>Combining Pydantic schemas, vector search, and graph databases for precise, validated extraction. We eliminate hallucinations by strictly anchoring generated context to source truth.</p>
          </div>
          <div className="bento-card small">
            <Image src="/bento-agentic.jpg" alt="Agentic Orchestration" width={300} height={200} style={{width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
            <h3>Agentic Orchestration</h3>
            <p>LangGraph-powered stateful agents that reason through complex, multi-step context gathering autonomously.</p>
          </div>
          <div className="bento-card small">
            <Image src="/bento-computer.jpg" alt="Computer Use" width={300} height={200} style={{width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px'}} />
            <h3>Computer Use</h3>
            <p>Visual automation capabilities for bridging legacy systems where modern APIs do not exist.</p>
          </div>
          <div className="bento-card wide">
            <h3>Model Context Protocol (MCP)</h3>
            <p>Secure, standardized tool connections that respect your data boundaries and never expose credentials. Out-of-the-box integrations with Salesforce, Zendesk, Slack, Jira, and Confluence.</p>
          </div>
        </div>
      </section>

      <section className="product-security-section">
        <h2>Enterprise Security</h2>
        <p>
          Built from day one to comply with OWASP, SOC2, DPDP Act, and the EU AI Act. Your data is processed securely and never used to train generalized models.
        </p>
        <Link href="/security" className="btn-outline-light" style={{ display: 'inline-block' }}>Read Security Whitepaper →</Link>
      </section>

      <section className="footer-cta-section" style={{ marginTop: '96px' }}>
        <div className="footer-cta-container">
          <h2 className="footer-cta-title">Give your team the context they need to win.</h2>
          <Link href="/contact" className="btn-solid-white">Book Architecture Review</Link>
        </div>
      </section>
    </main>
  );
}
