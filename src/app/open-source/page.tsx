import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'Open Source AI Infrastructure | NexaWorks',
  description: 'Production-ready boilerplate repositories, SDKs, and middleware for Enterprise AI automation.',
};

export default function OpenSourcePage() {
  const repositories = [
    {
      name: "FastAPI-LLM-Middleware",
      language: "Python",
      stars: "1.2k",
      description: "ASGI-compliant middleware that intercepts incoming requests, strips PII via regex before it hits the LLM, and logs token usage to Datadog.",
      link: "https://github.com/nexaworks-ai/fastapi-llm-middleware"
    },
    {
      name: "Pydantic-Doc-Extractor",
      language: "Python",
      stars: "850",
      description: "Strict validation pipelines for extracting nested tabular data from unstructured PDFs using Claude 3.5 Sonnet and Pydantic V2.",
      link: "https://github.com/nexaworks-ai/pydantic-doc-extractor"
    },
    {
      name: "NextJS-RAG-Boilerplate",
      language: "TypeScript",
      stars: "2.1k",
      description: "A Vercel-optimized Next.js 16 template featuring streaming AI responses, Edge runtime support, and native Pinecone integration.",
      link: "https://github.com/nexaworks-ai/nextjs-rag-boilerplate"
    }
  ];

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>OPEN ENGINEERING</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Open Source Hub
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              We open-source our foundational boilerplate so enterprise engineering teams can stop reinventing the wheel and start deploying deterministic automation.
            </p>

            <div className="grid-1" style={{ gap: '24px' }}>
              {repositories.map((repo, idx) => (
                <div key={idx} className="card hover-border-primary" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 className="heading-md" style={{ marginBottom: '8px', color: 'var(--color-primary)' }}>{repo.name}</h3>
                      <div className="micro-cap" style={{ color: 'var(--color-ink-mute)' }}>{repo.language} &bull; ★ {repo.stars}</div>
                    </div>
                    <a href={repo.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px', textDecoration: 'none' }}>
                      View Repository
                    </a>
                  </div>
                  <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                    {repo.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '64px', padding: '48px', background: 'var(--color-canvas)', borderRadius: '12px', border: '1px solid var(--color-hairline)', textAlign: 'center' }}>
              <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Join the NexaWorks Developer Community</h2>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Collaborate with 5,000+ automation engineers, share custom RAG strategies, and get early access to our proprietary agent frameworks.
              </p>
              <button className="btn-secondary">Request Slack Access</button>
            </div>

          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
