import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Executive Playbooks | NexaWorks',
  description: 'Actionable engineering and compliance playbooks for C-Suite executives deploying enterprise AI systems.',
};

export default function PlaybooksHubPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>Executive Playbooks</h1>
          <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            We bypass vague thought leadership. These are hard, actionable engineering checklists and deployment strategies for enterprise leaders.
          </p>
        </div>

        <div className="grid-1" style={{ gap: '32px' }}>
          
          <Link href="/playbooks/eu-ai-act-compliance" className="card-elevated" style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit', border: '1px solid var(--color-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span className="tag" style={{ background: 'var(--color-ruby)', color: 'white', border: 'none' }}>REGULATORY COMPLIANCE</span>
              <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>AUGUST 2026</span>
            </div>
            <h2 className="display-md" style={{ marginBottom: '16px' }}>The EU AI Act Engineering Checklist</h2>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
              Legal advice won't prevent server shutdowns. This playbook translates Article 12 (WORM Logging) and Article 14 (HITL Authorization) into hard engineering requirements for your technical teams.
            </p>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read Playbook &rarr;</div>
          </Link>

          <div className="card-elevated" style={{ background: 'var(--color-surface)', opacity: 0.7 }}>
            <span className="tag" style={{ background: '#1e1e1e', color: 'white', border: 'none', marginBottom: '16px', display: 'inline-block' }}>LLMOps & FINOPS</span>
            <h2 className="display-md" style={{ marginBottom: '16px' }}>The LLMOps Cost Reduction Playbook</h2>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
              A technical guide on migrating from trace-billing providers (LangSmith) to flat-rate proxy gateways (Helicone) to reduce inference overhead by 40%. (Coming Soon)
            </p>
          </div>

          <div className="card-elevated" style={{ background: 'var(--color-surface)', opacity: 0.7 }}>
            <span className="tag" style={{ background: '#1e1e1e', color: 'white', border: 'none', marginBottom: '16px', display: 'inline-block' }}>INFRASTRUCTURE</span>
            <h2 className="display-md" style={{ marginBottom: '16px' }}>Deploying Air-Gapped Llama 3.1 405B</h2>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
              Hardware requirements, quantization strategies, and vLLM configuration for running Meta's frontier model entirely offline for classified legal data. (Coming Soon)
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
