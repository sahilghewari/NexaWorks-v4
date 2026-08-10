import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/docs/mcp-integrations" },
  title: 'MCP Integrations | NexaWorks Documentation',
  description: 'How NexaWorks uses the Model Context Protocol (MCP) for secure tool connections.',
};

export default function MCPIntegrationsPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Link href="/docs" className="link-arrow" style={{ display: 'inline-block', marginBottom: '32px' }}>
              &larr; Back to Docs
            </Link>
            
            <span className="tag" style={{ marginBottom: '16px' }}>INTEGRATIONS</span>
            <h1 className="heading-lg" style={{ marginBottom: '32px' }}>
              Model Context Protocol (MCP)
            </h1>
            
            <div className="card" style={{ background: 'white', padding: '40px' }}>
              <h2 className="heading-md" style={{ marginBottom: '16px' }}>An Open Standard for Tool Connections</h2>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
                The Model Context Protocol (MCP) is an open standard that enables secure, standardized connections between our stateful agents and external tools or data sources. This ensures consistency and reliability across diverse integrations.
              </p>

              <h2 className="heading-md" style={{ marginBottom: '16px' }}>Configuring an MCP Server</h2>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
                To connect internal data, you can configure an MCP server within your VPC. The server acts as a bridge, securely exposing necessary endpoints and functions to the NexaWorks orchestrator while keeping your infrastructure isolated.
              </p>

              <h2 className="heading-md" style={{ marginBottom: '16px' }}>The Security Boundary</h2>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '0' }}>
                Security is paramount. In our architecture, agents request data through the MCP layer but do not hold or manage credentials directly. The MCP server handles authentication and authorization, enforcing strict security boundaries and minimizing the attack surface.
              </p>
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
