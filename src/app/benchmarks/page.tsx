import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'AI Benchmarks & Empirical Testing',
  description: 'Rigorous, empirical benchmarks comparing foundation models on enterprise unstructured data tasks.',
};

export default function BenchmarksLandingPage() {
  const benchmarks = [
    {
      name: "Document AI (OCR & Parsing)",
      slug: "document-ai",
      description: "Evaluation of Claude 3.5 Sonnet, GPT-4o, and Gemini 1.5 Pro on complex enterprise PDF extraction.",
      status: "UPDATED AUG 2026",
      tag: "VISION AI"
    },
    {
      name: "Enterprise AI Error Database",
      slug: "error-database",
      description: "Proprietary telemetry logging critical failure modes in production RAG and Agentic pipelines.",
      status: "UPDATED AUG 2026",
      tag: "DATASET"
    },
    {
      name: "Vector Database Latency",
      slug: "vector-latency",
      description: "QPS and Time-to-First-Token (TTFT) benchmarks across Pinecone, Milvus, and Qdrant at 10M+ vectors.",
      status: "COMING Q4 2026",
      tag: "INFRASTRUCTURE"
    }
  ];

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>NEUTRAL SCIENTIFIC EVALUATION</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Benchmark Center
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              We evaluate leading foundation models and infrastructure against rigorous academic datasets (FUNSD, CORD) to provide CTOs with undeniable, empirical proof of capabilities.
            </p>

            <div className="grid-2" style={{ gap: '32px' }}>
              {benchmarks.map((bench, idx) => (
                <div key={idx}>
                  {bench.slug === 'document-ai' || bench.slug === 'error-database' ? (
                    <Link href={`/benchmarks/${bench.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <BenchmarkCard bench={bench} />
                    </Link>
                  ) : (
                    <div style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                      <BenchmarkCard bench={bench} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}

function BenchmarkCard({ bench }: { bench: any }) {
  return (
    <div className="card hover-border-primary" style={{ transition: 'all 0.3s', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div className="micro-cap" style={{ color: 'var(--color-primary)' }}>
          {bench.tag}
        </div>
        <div className="micro-cap" style={{ color: 'var(--color-ink-mute)' }}>
          {bench.status}
        </div>
      </div>
      <h3 className="heading-md" style={{ marginBottom: '16px' }}>
        {bench.name}
      </h3>
      <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
        {bench.description}
      </p>
    </div>
  );
}
