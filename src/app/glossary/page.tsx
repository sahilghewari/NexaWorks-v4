import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';
import glossaryData from '@/data/glossary.json';

export const metadata = {
  title: 'Enterprise AI Dictionary & Glossary | NexaWorks',
  description: 'The definitive architectural dictionary for Enterprise AI. Definitions for GraphRAG, Semantic Routing, and Generative Engine Optimization.',
};

export default function GlossaryLandingPage() {
  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>THE DEFINITIVE AI LEXICON</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Enterprise AI Dictionary
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              We define the architecture. Clear, highly-technical definitions for the methodologies powering the next generation of automation.
            </p>

            <div className="grid-2" style={{ gap: '32px' }}>
              {glossaryData.map((item, idx) => (
                <Link key={idx} href={`/glossary/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card hover-border-primary" style={{ cursor: 'pointer', transition: 'all 0.3s', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', height: '100%' }}>
                    <h3 className="heading-md" style={{ marginBottom: '16px', color: 'var(--color-primary)' }}>
                      {item.term}
                    </h3>
                    <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                      {item.definition}
                    </p>
                    <div style={{ marginTop: '24px', fontSize: '12px', fontWeight: 600, color: 'var(--color-ink-mute)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Read Architectural Context &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
