import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  alternates: { canonical: "https://nexaworks.tech/docs/methodology" },
  title: 'Methodology | NexaWorks Documentation',
  description: 'NexaWorks methodology for context reconstruction using Deterministic RAG and GraphRAG.',
};

export default function MethodologyPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <Link href="/docs" className="link-arrow" style={{ display: 'inline-block', marginBottom: '32px' }}>
              &larr; Back to Docs
            </Link>
            
            <span className="tag" style={{ marginBottom: '16px' }}>METHODOLOGY</span>
            <h1 className="heading-lg" style={{ marginBottom: '32px' }}>
              Context Reconstruction Methodology
            </h1>
            
            <div className="card" style={{ background: 'white', padding: '40px' }}>
              <h2 className="heading-md" style={{ marginBottom: '16px' }}>Why Vector Databases Alone Fail</h2>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
                Standard vector databases are prone to hallucinations and lost context. They rely solely on semantic similarity, which can retrieve irrelevant or outdated chunks when precise, factual alignment is required for complex workflows.
              </p>

              <h2 className="heading-md" style={{ marginBottom: '16px' }}>Deterministic RAG</h2>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
                NexaWorks leverages Deterministic RAG to enforce rigid structural validation. By utilizing rigorous Pydantic schema validation, we ensure that the data extracted conforms precisely to expected types and structures, mitigating unpredictable generation and reducing hallucinations.
              </p>

              <h2 className="heading-md" style={{ marginBottom: '16px' }}>The Role of GraphRAG</h2>
              <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '0' }}>
                Beyond simple key-value or vector retrieval, GraphRAG maps complex entity relationships. It enables our stateful agents to traverse knowledge graphs, understanding the nuanced connections between entities. This holistic context assembly is crucial for deep reasoning and accurate decision-making.
              </p>
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
