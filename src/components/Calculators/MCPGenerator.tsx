'use client';

import React, { useState } from 'react';

export default function MCPGenerator() {
  const [model, setModel] = useState('claude-3-5-sonnet');
  const [vectorDb, setVectorDb] = useState('pinecone');
  const [integrations, setIntegrations] = useState<string[]>([]);

  const toggleIntegration = (name: string) => {
    if (integrations.includes(name)) {
      setIntegrations(integrations.filter(i => i !== name));
    } else {
      setIntegrations([...integrations, name]);
    }
  };

  const generateJson = () => {
    const config = {
      "mcp_version": "1.0",
      "server_url": "wss://mcp.nexaworks.tech/v1/stream",
      "agent_identity": {
        "model": model,
        "temperature": 0.0,
        "max_tokens": 8192
      },
      "retrieval": {
        "engine": vectorDb,
        "embedding_model": "bge-large-en-v1.5",
        "top_k": 5
      },
      "tools": integrations.map(integration => {
        if (integration === 'salesforce') {
          return {
            "name": "salesforce_query",
            "description": "Query the Salesforce CRM via SOQL.",
            "auth": "bearer_token"
          };
        }
        if (integration === 'sap') {
          return {
            "name": "sap_bapi_execute",
            "description": "Execute an SAP BAPI function module.",
            "auth": "x509_cert"
          };
        }
        if (integration === 'tally') {
          return {
            "name": "tally_xml_post",
            "description": "Post an XML payload to TallyPrime port 9000.",
            "auth": "basic"
          };
        }
        return {};
      })
    };
    return JSON.stringify(config, null, 2);
  };

  return (
    <div className="card-elevated" style={{ background: 'white', padding: '48px', margin: '48px 0' }}>
      
      <div className="grid-2" style={{ gap: '48px' }}>
        <div>
          <div style={{ marginBottom: '32px' }}>
            <label className="micro-cap" style={{ display: 'block', marginBottom: '16px' }}>1. SELECT FOUNDATIONAL MODEL</label>
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              className="select"
              style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}
            >
              <option value="claude-3-5-sonnet">Claude 3.5 Sonnet (Recommended)</option>
              <option value="gpt-4o">GPT-4o (Omni)</option>
              <option value="llama-3-1-405b">Llama 3.1 405B (Self-Hosted)</option>
            </select>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label className="micro-cap" style={{ display: 'block', marginBottom: '16px' }}>2. SELECT VECTOR INFRASTRUCTURE</label>
            <select 
              value={vectorDb} 
              onChange={(e) => setVectorDb(e.target.value)}
              className="select"
              style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-hairline)' }}
            >
              <option value="pinecone">Pinecone (Serverless)</option>
              <option value="pgvector">pgvector (On-Premise / RDS)</option>
              <option value="milvus">Milvus (High-Volume)</option>
            </select>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label className="micro-cap" style={{ display: 'block', marginBottom: '16px' }}>3. ENABLE ENTERPRISE TOOLS (MCP)</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={integrations.includes('salesforce')} onChange={() => toggleIntegration('salesforce')} style={{ width: '20px', height: '20px' }} />
                <span className="body-md">Salesforce CRM</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={integrations.includes('sap')} onChange={() => toggleIntegration('sap')} style={{ width: '20px', height: '20px' }} />
                <span className="body-md">SAP ERP (BAPI)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={integrations.includes('tally')} onChange={() => toggleIntegration('tally')} style={{ width: '20px', height: '20px' }} />
                <span className="body-md">TallyPrime 7.0</span>
              </label>
            </div>
          </div>
        </div>

        <div style={{ background: '#1e1e1e', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="micro-cap" style={{ color: '#888' }}>mcp_config.json</span>
            <button 
              onClick={() => navigator.clipboard.writeText(generateJson())}
              style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 600, fontSize: '12px' }}
            >
              COPY JSON
            </button>
          </div>
          <div style={{ padding: '24px', overflowX: 'auto', flexGrow: 1 }}>
            <pre style={{ color: '#d4d4d4', margin: 0, fontSize: '13px' }}>
              <code>{generateJson()}</code>
            </pre>
          </div>
        </div>
      </div>

    </div>
  );
}
