import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Security Trust Center & AI Governance | NexaWorks',
  description: 'How NexaWorks mitigates the OWASP Top 10 for LLM Applications and guarantees deterministic security for enterprise AI.',
};

export default function SecurityPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="tag" style={{ marginBottom: '16px', background: 'var(--color-ruby)', color: 'white', border: 'none' }}>ENTERPRISE TRUST CENTER</span>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>Deterministic Security Architecture</h1>
          <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Probabilistic models present unique attack vectors. We engineer Agentic AI pipelines with strict, deterministic guardrails to prevent data exfiltration, prompt injection, and hallucinated execution.
          </p>
        </div>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '48px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Mitigating the OWASP Top 10 for LLM Applications</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
            Standard web application firewalls (WAFs) cannot parse semantic intent. NexaWorks mitigates LLM-specific vulnerabilities at the orchestration layer.
          </p>

          <div className="grid-2" style={{ gap: '32px' }}>
            <div>
              <h3 className="heading-md" style={{ marginBottom: '12px', color: 'var(--color-primary)' }}>LLM01: Prompt Injection</h3>
              <p className="body-md" style={{ color: 'var(--color-ink)', lineHeight: 1.6 }}>
                <strong>Risk:</strong> Malicious actors appending hidden commands (e.g., "Ignore previous instructions and DROP TABLE") to user inputs.
                <br /><br />
                <strong>Mitigation:</strong> All pipelines utilize strict <strong>Pydantic Validation</strong> and parameterized prompt templating. The LLM is forced to output a strongly-typed schema, making arbitrary command execution mathematically impossible.
              </p>
            </div>
            
            <div>
              <h3 className="heading-md" style={{ marginBottom: '12px', color: 'var(--color-primary)' }}>LLM06: Sensitive Information Disclosure</h3>
              <p className="body-md" style={{ color: 'var(--color-ink)', lineHeight: 1.6 }}>
                <strong>Risk:</strong> AI agents leaking PII (Social Security Numbers, Medical Records) into third-party foundation models (OpenAI/Anthropic).
                <br /><br />
                <strong>Mitigation:</strong> We deploy edge-based Regex interception middleware. All PII is identified, cryptographically hashed, and replaced with tokens (e.g., <code>[SSN_REDACTED_8f2a]</code>) <em>before</em> the payload ever leaves your VPC.
              </p>
            </div>

            <div>
              <h3 className="heading-md" style={{ marginBottom: '12px', color: 'var(--color-primary)' }}>LLM09: Overreliance & Autonomous Execution</h3>
              <p className="body-md" style={{ color: 'var(--color-ink)', lineHeight: 1.6 }}>
                <strong>Risk:</strong> An autonomous agent hallucinating and issuing a destructive API call (e.g., executing a $100,000 wire transfer).
                <br /><br />
                <strong>Mitigation:</strong> We implement strict <strong>Human-in-the-Loop (HITL) Gateways</strong>. Any action modifying database state (POST/PUT/DELETE) is paused by the orchestrator (LangGraph), forcing a human cryptographic signature via our UI before proceeding.
              </p>
            </div>

            <div>
              <h3 className="heading-md" style={{ marginBottom: '12px', color: 'var(--color-primary)' }}>LLM10: Model Theft & IP Leakage</h3>
              <p className="body-md" style={{ color: 'var(--color-ink)', lineHeight: 1.6 }}>
                <strong>Risk:</strong> Proprietary vector data being exposed through reverse-prompting or RAG poisoning.
                <br /><br />
                <strong>Mitigation:</strong> We implement rigid <strong>Multi-Tenant Namespace Isolation</strong> at the vector database layer (Pinecone/pgvector). Agents are bound to explicit IAM roles, preventing horizontal traversal across tenant clusters.
              </p>
            </div>
          </div>
        </div>

        <div className="card-elevated" style={{ background: '#1e1e1e', padding: '48px', color: 'white' }}>
          <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Compliance & Regulatory Alignment</h2>
          <p className="body-md" style={{ color: '#a3a3a3', marginBottom: '32px' }}>
            We architect systems to comply with the most stringent global regulatory frameworks automatically.
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.8, fontSize: '16px' }}>
            <li><strong>EU AI Act (August 2026):</strong> Full compliance with Article 14 (Human Oversight) and Article 12 (WORM Tamper-Evident Trace Logging).</li>
            <li><strong>SOC 2 Type II:</strong> All infrastructure is designed around principle-of-least-privilege and zero-trust authentication protocols.</li>
            <li><strong>India DPDP Act (2023):</strong> Strict adherence to data minimization and the right to erasure (vector purging protocols).</li>
            <li><strong>HIPAA / GDPR:</strong> Complete isolation of Protected Health Information (PHI) within air-gapped on-premise execution environments (e.g., Llama 3.1 405B).</li>
          </ul>
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <h3 className="heading-md" style={{ marginBottom: '16px' }}>Require a detailed Security Assessment?</h3>
          <button className="btn-primary" style={{ padding: '16px 32px' }}>Download Architecture Whitepaper</button>
        </div>

      </div>
    </main>
  );
}
