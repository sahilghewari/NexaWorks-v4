import React from 'react';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/resources/system-card-template" },
  title: 'SYSTEM_CARD.md Annex IV Template | NexaWorks Resources',
  description: 'Download the markdown template required to satisfy the EU AI Act Annex IV technical documentation mandate.',
};

export default function SystemCardTemplatePage() {
  const systemCardContent = `# SYSTEM_CARD.md (EU AI Act Annex IV Compliant)

## 1. System Identification
- **System Name:** [E.g., Automated Accounts Payable Agent]
- **Version:** [E.g., 2.1.4]
- **Deployment Date:** [YYYY-MM-DD]
- **Provider / Deployer:** [Company Name]

## 2. Intended Purpose (Article 11)
- **Primary Use Case:** [Explicitly define what the AI is allowed to do. E.g., Extracting total amounts from PDF invoices.]
- **Out-of-Scope (Prohibited) Uses:** [Explicitly define what it MUST NOT do. E.g., Denying vendor payments without human review.]

## 3. Architecture & Logic
- **Foundational Model:** [E.g., Claude 3.5 Sonnet via Anthropic API]
- **Retrieval Architecture:** [E.g., Pinecone Vector DB, BGE-Large-EN Embeddings]
- **Deterministic Safeguards:** [E.g., Pydantic V2 schema validation strictly enforcing expected JSON keys]

## 4. Human Oversight (Article 14)
- **Intervention Protocol:** [Describe the HITL UI. E.g., All invoices exceeding $10,000 are routed to the /review endpoint before ERP posting.]
- **Kill Switch Mechanism:** [Document the hard-stop API endpoint.]

## 5. Logging & Traceability (Article 12)
- **Log Retention Policy:** [E.g., All LangSmith traces are retained in AWS S3 WORM storage for 6 months.]
`;

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/resources" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Resources
          </Link>
        </div>

        <h1 className="display-lg" style={{ marginBottom: '24px' }}>Annex IV Technical Documentation Template</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px' }}>
          Place this <code>SYSTEM_CARD.md</code> file in the root of your repository to establish a living compliance record satisfying the EU AI Act's technical documentation mandate.
        </p>

        <div style={{ background: '#1e1e1e', borderRadius: '8px', padding: '24px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span className="micro-cap" style={{ color: '#888' }}>SYSTEM_CARD.md</span>
          </div>
          <pre style={{ color: '#d4d4d4', fontFamily: 'monospace', fontSize: '14px', margin: 0, whiteSpace: 'pre-wrap' }}>
            <code>
{systemCardContent}
            </code>
          </pre>
        </div>
      </div>
    </main>
  );
}
