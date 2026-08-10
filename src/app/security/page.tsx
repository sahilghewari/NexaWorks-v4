import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './security.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Security Trust Center & AI Governance | NexaWorks',
  description: 'How NexaWorks mitigates the OWASP Top 10 for LLM Applications and guarantees deterministic security for enterprise AI.',
  keywords: ['AI Security', 'LLM Security', 'OWASP LLM', 'AI Governance', 'Deterministic Security', 'Enterprise AI Security'],
  alternates: { canonical: 'https://nexaworks.tech/security' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Security Trust Center & AI Governance | NexaWorks',
    description: 'How NexaWorks mitigates the OWASP Top 10 for LLM Applications and guarantees deterministic security for enterprise AI.',
    url: 'https://nexaworks.tech/security',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Security Trust Center' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Security Trust Center & AI Governance | NexaWorks',
    description: 'How NexaWorks mitigates the OWASP Top 10 for LLM Applications and guarantees deterministic security for enterprise AI.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function SecurityPage() {
  return (
    <main className="security-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Security', href: '/security' }]} />
      
      <section className="security-hero">
        <ScrollReveal delay={0.1}>
          <span className="security-tag">[STATUS: SECURE]</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="security-headline">Deterministic Security Architecture</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="security-subhead">
            Probabilistic models present unique attack vectors. We engineer Agentic AI pipelines with strict, deterministic guardrails to prevent data exfiltration, prompt injection, and hallucinated execution.
          </p>
        </ScrollReveal>
      </section>

      <section className="security-content-section">
        <ScrollReveal delay={0.1}>
          <h2 className="security-section-title">Mitigating the OWASP Top 10</h2>
          <p className="security-section-desc">
            Standard web application firewalls (WAFs) cannot parse semantic intent. NexaWorks mitigates LLM-specific vulnerabilities at the orchestration layer.
          </p>
        </ScrollReveal>

        <div className="terminal-block-wrapper">
          
          <ScrollReveal delay={0.1} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="terminal-block left">
              <h3 className="terminal-title">LLM01: Prompt Injection</h3>
              <p className="terminal-text">
                <strong>[RISK]:</strong> Malicious actors appending hidden commands (e.g., "Ignore previous instructions and DROP TABLE") to user inputs.
                <br /><br />
                <strong>[MITIGATION]:</strong> All pipelines utilize strict <strong>Pydantic Validation</strong> and parameterized prompt templating. The LLM is forced to output a strongly-typed schema, making arbitrary command execution mathematically impossible.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="terminal-block right">
              <h3 className="terminal-title">LLM06: Sensitive Information Disclosure</h3>
              <p className="terminal-text">
                <strong>[RISK]:</strong> AI agents leaking PII (Social Security Numbers, Medical Records) into third-party foundation models (OpenAI/Anthropic).
                <br /><br />
                <strong>[MITIGATION]:</strong> We deploy edge-based Regex interception middleware. All PII is identified, cryptographically hashed, and replaced with tokens (e.g., <code>[SSN_REDACTED_8f2a]</code>) <em>before</em> the payload ever leaves your VPC.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="terminal-block left">
              <h3 className="terminal-title">LLM09: Overreliance & Autonomous Execution</h3>
              <p className="terminal-text">
                <strong>[RISK]:</strong> An autonomous agent hallucinating and issuing a destructive API call (e.g., executing a $100,000 wire transfer).
                <br /><br />
                <strong>[MITIGATION]:</strong> We implement strict <strong>Human-in-the-Loop (HITL) Gateways</strong>. Any action modifying database state (POST/PUT/DELETE) is paused by the orchestrator (LangGraph), forcing a human cryptographic signature via our UI before proceeding.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="terminal-block right">
              <h3 className="terminal-title">LLM10: Model Theft & IP Leakage</h3>
              <p className="terminal-text">
                <strong>[RISK]:</strong> Proprietary vector data being exposed through reverse-prompting or RAG poisoning.
                <br /><br />
                <strong>[MITIGATION]:</strong> We implement rigid <strong>Multi-Tenant Namespace Isolation</strong> at the vector database layer (Pinecone/pgvector). Agents are bound to explicit IAM roles, preventing horizontal traversal across tenant clusters.
              </p>
            </div>
          </ScrollReveal>

        </div>

        <div className="compliance-layout">
          <div className="compliance-sticky-nav">
            <h2 className="security-section-title">Compliance & Regulatory Alignment</h2>
            <p className="security-section-desc">
              We architect systems to comply with the most stringent global regulatory frameworks automatically. Scroll to read more about specific acts and certifications.
            </p>
          </div>
          
          <div className="compliance-list-content">
            <ScrollReveal delay={0.1}>
              <div className="compliance-item">
                <h3>EU AI Act (August 2026)</h3>
                <p>Full compliance with Article 14 (Human Oversight) and Article 12 (WORM Tamper-Evident Trace Logging).</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="compliance-item">
                <h3>SOC 2 Type II</h3>
                <p>All infrastructure is designed around principle-of-least-privilege and zero-trust authentication protocols.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="compliance-item">
                <h3>India DPDP Act (2023)</h3>
                <p>Strict adherence to data minimization and the right to erasure (vector purging protocols).</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="compliance-item">
                <h3>HIPAA / GDPR</h3>
                <p>Complete isolation of Protected Health Information (PHI) within air-gapped on-premise execution environments (e.g., Llama 3.1 405B).</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="security-cta">
            <h2>Require a detailed Security Assessment?</h2>
            <Link href="/contact" className="btn-glass">Download Architecture Whitepaper</Link>
          </div>
        </ScrollReveal>

      </section>
    </main>
  );
}
