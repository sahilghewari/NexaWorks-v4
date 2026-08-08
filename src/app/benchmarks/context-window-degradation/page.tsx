import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Context Window Degradation | NexaWorks',
  description: 'Empirical study on fact-retrieval dropoff when foundational models exceed 128k context limits.',
  alternates: {
    canonical: 'https://nexaworks.tech/benchmarks/context-window-degradation'
  }
};

export default function ContextWindowDegradationPage() {
  const lastUpdatedISO = "2026-07-15T00:00:00Z";

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Context Window Degradation: The 128k Cliff",
    "description": "Empirical study on fact-retrieval dropoff when foundational models exceed 128k context limits.",
    "author": {
      "@type": "Organization",
      "name": "NexaWorks"
    },
    "datePublished": "2026-07-15T00:00:00Z",
    "dateModified": lastUpdatedISO,
    "proficiencyLevel": "Expert"
  };

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <Script id="tech-article-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/benchmarks" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Benchmarks
          </Link>
        </div>

        <h1 className="display-lg" style={{ marginBottom: '24px' }}>Context Window Degradation: The 128k Cliff</h1>
        <div className="caption" style={{ color: 'var(--color-ink-mute)', marginBottom: '48px', fontWeight: 600 }}>
          Last Updated: July 2026 | Prepared by NexaWorks Research
        </div>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '48px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '24px' }}>Bottom Line Up Front (BLUF)</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--color-hairline)' }}>
              <strong style={{ color: 'var(--color-primary)' }}>1. The "Lost in the Middle" Phenomenon:</strong> When context size exceeds 128k tokens, retrieval accuracy drops by up to 22% for facts buried in the middle of the prompt.
            </li>
            <li style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--color-hairline)' }}>
              <strong style={{ color: 'var(--color-primary)' }}>2. Model Variations:</strong> While Claude 3.5 Sonnet exhibits a more resilient attention mechanism than GPT-4o past 200k tokens, both suffer significant latency penalties (TTFT spikes to &gt;12s).
            </li>
            <li style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--color-hairline)' }}>
              <strong style={{ color: 'var(--color-primary)' }}>3. The RAG Imperative:</strong> Relying on massive context windows is economically and technically unviable for synchronous enterprise operations. Deterministic RAG pipelines (chunking and semantic search) remain the mandatory architecture for reliable Context Reconstruction.
            </li>
          </ul>
        </div>

        <div style={{ padding: '0 24px' }}>
          <h3 className="heading-md" style={{ marginBottom: '24px' }}>Methodology</h3>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
            This study utilized a "needle in a haystack" testing framework. We injected 50 distinct factual statements ("needles") at varying depths into dense 250k-token legal contracts and technical manuals ("haystacks"). We then queried the models to retrieve these specific facts.
          </p>
          <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '48px', lineHeight: 1.7 }}>
            Accuracy was mapped against the relative position of the fact within the prompt, revealing a distinct U-shaped curve where the beginning and end of the prompt maintain high fidelity, while the middle experiences severe degradation.
          </p>
        </div>

      </div>
    </main>
  );
}
