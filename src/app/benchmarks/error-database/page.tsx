import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Enterprise AI Error Database | NexaWorks',
  description: 'A proprietary dataset of RAG and Agentic failure modes, tracking critical system vulnerabilities like Context Window Truncation and Pydantic validation failures.',
  alternates: {
    canonical: 'https://nexaworks.tech/benchmarks/error-database'
  }
};

export default function ErrorDatabasePage() {
  const lastUpdatedISO = "2026-08-05T00:00:00Z";

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "NexaWorks Enterprise AI Error Database",
    "description": "An open dataset logging critical failure modes in production Retrieval-Augmented Generation (RAG) and Agentic pipelines.",
    "creator": {
      "@type": "Organization",
      "name": "NexaWorks Research"
    },
    "dateModified": lastUpdatedISO,
    "variableMeasured": ["Failure Mode", "Trigger Condition", "Blast Radius", "Resolution Strategy"]
  };

  const errors = [
    {
      id: "ERR-RAG-001",
      name: "Context Window Silent Truncation",
      trigger: "Retrieving 20+ dense chunks exceeding the 8k context limit of older embedding architectures.",
      blastRadius: "High - Causes silent hallucination as the model attempts to answer using incomplete data.",
      resolution: "Implement strict token counting middleware (e.g., tiktoken) prior to LLM payload transmission and dynamically rank chunks by MRR."
    },
    {
      id: "ERR-PYD-042",
      name: "Pydantic Schema Drift",
      trigger: "The LLM outputs valid JSON, but keys are hallucinated due to complex nested schema definitions exceeding reasoning capacity.",
      blastRadius: "Critical - Downstream ETL pipelines fail entirely when ingesting unmapped keys.",
      resolution: "Enforce `extra=forbid` in Pydantic V2 and implement a 3-strike retry loop pushing the validation error back into the LLM context."
    },
    {
      id: "ERR-CEL-011",
      name: "Uvicorn Thread Starvation",
      trigger: "Running synchronous HTTP requests (e.g., `requests.get`) inside an `async def` FastAPI endpoint during heavy load.",
      blastRadius: "Critical - Complete API lockup and 504 Gateway Timeouts across all user sessions.",
      resolution: "Mandate ASGI compliance. All external LLM calls must utilize `httpx.AsyncClient` or be offloaded to Celery background workers."
    },
    {
      id: "ERR-VEC-088",
      name: "Vector Search Dilution",
      trigger: "Using a general-purpose embedding model (e.g., text-embedding-ada-002) on highly specialized medical or legal terminology.",
      blastRadius: "Medium - Retrieving irrelevant documents, severely degrading Context Precision metrics.",
      resolution: "Transition to domain-specific embedding models (e.g., BioBERT for medical) or implement hybrid search (BM25 + Dense Vectors)."
    },
    {
      id: "ERR-AGT-005",
      name: "Agentic Loop Exhaustion",
      trigger: "An autonomous ReAct agent gets stuck in a validation loop, repeatedly calling the same tool without altering parameters.",
      blastRadius: "High - Massive API cost overruns and latency spikes.",
      resolution: "Implement a strict `max_iterations=5` circuit breaker and force human-in-the-loop escalation upon threshold breach."
    }
  ];

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <Script id="dataset-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/benchmarks" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Benchmarks
          </Link>
        </div>

        <span className="tag" style={{ marginBottom: '16px', background: 'var(--color-ruby)', color: 'white', border: 'none' }}>PROPRIETARY DATASET</span>
        <h1 className="display-lg" style={{ marginBottom: '24px' }}>Enterprise AI Error Database</h1>
        <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px', maxWidth: '800px' }}>
          A living encyclopedia of critical failure modes in production AI systems. We open-source our telemetry findings so DevOps and ML engineering teams can build resilient automation.
        </p>

        <div className="grid-1" style={{ gap: '24px' }}>
          {errors.map((error, idx) => (
            <div key={idx} className="card-elevated" style={{ background: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '16px', marginBottom: '24px' }}>
                <h3 className="heading-md" style={{ color: 'var(--color-ruby)' }}>{error.id}: {error.name}</h3>
              </div>
              
              <div className="grid-3" style={{ gap: '24px' }}>
                <div>
                  <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '8px' }}>TRIGGER CONDITION</div>
                  <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>{error.trigger}</p>
                </div>
                <div>
                  <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '8px' }}>BLAST RADIUS</div>
                  <p className="body-md" style={{ color: 'var(--color-ink)' }}><strong>{error.blastRadius}</strong></p>
                </div>
                <div>
                  <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '8px' }}>RESOLUTION STRATEGY</div>
                  <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>{error.resolution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
