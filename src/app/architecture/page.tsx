import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Architecture Library | NexaWorks',
  description: 'A repository of reference architectures, system designs, and deployment patterns for Enterprise AI Agents.',
};

export default function ArchitectureLibraryHub() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h1 className="display-xl" style={{ marginBottom: '24px' }}>Architecture Library</h1>
        <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px', maxWidth: '800px' }}>
          Production-grade system design patterns for deploying autonomous agents, MCP servers, and LLMOps infrastructure within Fortune 500 environments.
        </p>

        <div className="grid-2" style={{ gap: '32px' }}>
          
          <Link href="/architecture/browser-automation" className="card-elevated" style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit' }}>
            <span className="micro-cap" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '16px' }}>SYSTEM DESIGN</span>
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Browser Automation & Computer Use</h2>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
              Architectural reference for deploying Claude 3.5 Sonnet's 'Computer Use' API to autonomously navigate legacy web portals and internal SaaS dashboards.
            </p>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}>View Architecture &rarr;</div>
          </Link>

          <div className="card-elevated" style={{ background: 'var(--color-surface)', opacity: 0.7 }}>
            <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)', display: 'block', marginBottom: '16px' }}>COMING SOON</span>
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Multi-Tenant RAG Isolation</h2>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
              Implementing strict namespace isolation and Role-Based Access Control (RBAC) across vector databases (Pinecone/pgvector) for enterprise legal teams.
            </p>
          </div>

          <div className="card-elevated" style={{ background: 'var(--color-surface)', opacity: 0.7 }}>
            <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)', display: 'block', marginBottom: '16px' }}>COMING SOON</span>
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>The Human-in-the-Loop Gateway</h2>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
              A reverse-proxy architecture designed to intercept agentic API calls (e.g., payment issuance) and force cryptographic human authorization.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
