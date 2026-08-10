import React from 'react';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/docs/swarm-api" },
  title: 'AI Agent Swarm API (MCP) | NexaWorks Docs',
  description: 'Documentation for the NexaWorks Swarm API. Authenticate external autonomous agents via the Model Context Protocol (MCP) to interact with our infrastructure.',
};

export default function SwarmAPIPage() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/docs" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Developer Hub
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: '#000', color: 'white', border: 'none' }}>MACHINE-TO-MACHINE</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>AI Agent Swarm API</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          The NexaWorks Swarm API allows external, third-party autonomous agents (like AutoGPT, MultiOn, or custom LangChain swarms) to authenticate and programmatically orchestrate workflows across the NexaWorks infrastructure using the <strong>Model Context Protocol (MCP)</strong>.
        </p>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '48px' }}>
          <h2 className="heading-md" style={{ marginBottom: '24px' }}>1. Authentication (Agentic Identity)</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
            External agents must authenticate using an <code style={{ color: 'var(--color-primary)' }}>x-agent-bearer</code> token. This token defines the strict RBAC (Role-Based Access Control) boundaries for the autonomous session, ensuring the agent cannot hallucinate a destructive API call.
          </p>
          <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '24px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
            <code>
{`POST /api/v1/swarm/auth
Headers:
  Content-Type: application/json

{
  "agent_id": "ext_agt_9876",
  "client_secret": "sk_live_...",
  "requested_scopes": ["orchestrate:read", "vector_db:query"]
}`}
            </code>
          </pre>
        </div>

        <div className="card-elevated" style={{ background: 'white', padding: '48px' }}>
          <h2 className="heading-md" style={{ marginBottom: '24px' }}>2. Model Context Protocol (MCP) Integration</h2>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
            To achieve zero-friction integration with Anthropic and OpenAI ecosystems, NexaWorks fully supports the Model Context Protocol. You can inject our infrastructure capabilities directly into your agent's context window by initializing an MCP connection.
          </p>
          <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '24px', borderRadius: '8px', overflowX: 'auto', fontSize: '14px' }}>
            <code>
{`{
  "mcp_version": "1.0",
  "server": "wss://mcp.nexaworks.tech/v1/stream",
  "tools": [
    {
      "name": "query_nexaworks_rag",
      "description": "Searches the NexaWorks deterministic vector index for enterprise runbooks.",
      "parameters": {
        "type": "object",
        "properties": {
          "query": { "type": "string" },
          "top_k": { "type": "integer", "default": 5 }
        },
        "required": ["query"]
      }
    }
  ]
}`}
            </code>
          </pre>
        </div>

      </div>
    </main>
  );
}
