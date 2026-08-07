import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Careers | NexaWorks',
  description: 'Join the engineering team building the foundational architecture for the enterprise AI automation boom.',
};

export default function CareersPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>Join NexaWorks</h1>
          <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', margin: '0 auto' }}>
            We don't build demos. We build deterministic, production-grade AI infrastructure for the Fortune 500. We are hiring relentless engineers.
          </p>
        </div>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '48px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Our Engineering Culture</h2>
          <ul style={{ paddingLeft: '20px', color: 'var(--color-ink)', lineHeight: 1.8, fontSize: '18px', marginBottom: '0' }}>
            <li style={{ marginBottom: '16px' }}><strong>Systems over Prompts:</strong> We believe prompt engineering is a transitional phase. We focus on stateful orchestrators (LangGraph), vector infrastructure (Pinecone/pgvector), and protocol standardization (MCP).</li>
            <li style={{ marginBottom: '16px' }}><strong>Extreme Ownership:</strong> You own the pipeline from ingestion to deployment. If the agent hallucinates in production, you debug the trace.</li>
            <li><strong>No Theoretical Fluff:</strong> If it cannot pass a SOC2 audit or comply with the EU AI Act, it does not ship.</li>
          </ul>
        </div>

        <h2 className="display-md" style={{ marginBottom: '32px' }}>Open Roles</h2>

        <div className="grid-1" style={{ gap: '24px' }}>
          
          <div className="card-elevated" style={{ background: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 className="heading-lg" style={{ marginBottom: '8px' }}>AI Systems Architect (RAG & Agentic)</h3>
                <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>REMOTE (US / INDIA) &bull; FULL-TIME</span>
              </div>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Apply Now</button>
            </div>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
              You will lead the architectural design of multi-agent systems for our enterprise clients. You must have deep, bleeding-edge experience moving beyond basic semantic search into deterministic routing, GraphRAG, and Model Context Protocol (MCP) server deployment.
            </p>
            <div className="micro-cap" style={{ color: 'var(--color-primary)' }}>REQUIRED: PYTHON, LANGGRAPH, PINECONE, FASTAPI, DOCKER</div>
          </div>

          <div className="card-elevated" style={{ background: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 className="heading-lg" style={{ marginBottom: '8px' }}>Founding Full-Stack Engineer</h3>
                <span className="micro-cap" style={{ color: 'var(--color-ink-secondary)' }}>REMOTE (US / INDIA) &bull; FULL-TIME</span>
              </div>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Apply Now</button>
            </div>
            <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
              You will own the front-end visualization of our AI pipelines. Building Human-in-the-Loop (HITL) dashboards, real-time agent observability UIs, and interactive Pydantic schema generators. You must be obsessed with Next.js performance and Turbopack.
            </p>
            <div className="micro-cap" style={{ color: 'var(--color-primary)' }}>REQUIRED: TYPESCRIPT, NEXT.JS 16, TAILWIND, FRAMER MOTION, VERCEL</div>
          </div>

        </div>

      </div>
    </main>
  );
}
