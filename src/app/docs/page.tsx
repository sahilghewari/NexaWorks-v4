import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'Context Reconstruction Documentation | NexaWorks',
  description: 'Learn how NexaWorks uses Deterministic RAG, GraphRAG, and stateful agents to reconstruct context.',
};

export default function DocumentationLandingPage() {
  const docCategories = [
    {
      title: "Methodology",
      description: "Explain Deterministic Retrieval, GraphRAG, and Pydantic schemas.",
      links: [
        { label: "Deterministic Retrieval", url: "/docs/methodology" },
        { label: "GraphRAG Overview", url: "/docs/methodology" },
        { label: "Pydantic Schemas", url: "/docs/methodology" }
      ]
    },
    {
      title: "Integrations",
      description: "Setting up Model Context Protocol (MCP) and custom OAuth.",
      links: [
        { label: "MCP Setup Guide", url: "/docs/mcp-integrations" },
        { label: "Custom OAuth", url: "/docs/mcp-integrations" }
      ]
    },
    {
      title: "Security & Compliance",
      description: "Data residency, SOC2, EU AI Act, and DPDP Act compliance.",
      links: [
        { label: "SOC2 Report", url: "#" },
        { label: "EU AI Act", url: "#" },
        { label: "DPDP Act", url: "#" }
      ]
    },
    {
      title: "Architecture",
      description: "How stateful LangGraph agents orchestrate context assembly.",
      links: [
        { label: "Stateful Agents", url: "#" },
        { label: "Context Assembly", url: "#" }
      ]
    }
  ];

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>DOCUMENTATION SYSTEM</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Developer Hub
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
              Built for speed. Designed for Zero Time-To-First-Value (TTFV).
            </p>
            
            <div className="card" style={{ background: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', marginBottom: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🤖</span>
                <div>
                  <div className="body-md" style={{ fontWeight: 600 }}>Using an AI Copilot?</div>
                  <div className="body-sm" style={{ color: 'var(--color-ink-mute)' }}>
                    Point Cursor, Copilot, or ChatGPT directly to <code style={{ color: 'var(--color-primary)' }}>https://nexaworks.tech/llms-full.txt</code> for instant context ingestion of our entire API surface.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-3" style={{ gap: '32px' }}>
              {docCategories.map((cat, idx) => (
                <div key={idx} className="card-elevated" style={{ background: 'white' }}>
                  <h3 className="heading-sm" style={{ marginBottom: '12px' }}>{cat.title}</h3>
                  <p className="body-sm" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px', minHeight: '40px' }}>
                    {cat.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {cat.links.map((link, linkIdx) => (
                      <li key={linkIdx} style={{ marginBottom: '12px', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '12px' }}>
                        <Link href={link.url} className="link-arrow" style={{ fontSize: '14px', fontWeight: 500 }}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
