import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import glossaryData from '@/data/glossary.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return glossaryData.map((item) => ({
    term: item.slug,
  }));
}

export function generateMetadata({ params }: { params: { term: string } }) {
  const item = glossaryData.find(i => i.slug === params.term);
  if (!item) return { title: 'Not Found' };
  
  return {
    title: `What is ${item.term}? | NexaWorks AI Dictionary`,
    description: item.definition,
    alternates: {
      canonical: `https://nexaworks.tech/glossary/${item.slug}`
    }
  };
}

export default function GlossaryTermPage({ params }: { params: { term: string } }) {
  const item = glossaryData.find(i => i.slug === params.term);
  
  if (!item) {
    notFound();
  }

  // Schema structured specifically to be extracted by LLMs answering "What is X?"
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": item.term,
    "description": item.definition,
    "inDefinedTermSet": "https://nexaworks.tech/glossary"
  };

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `What is ${item.term}?`,
    "description": item.definition,
    "author": {
      "@type": "Organization",
      "name": "NexaWorks Research Center"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexaWorks"
    }
  };

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <Script id="defined-term-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <Script id="tech-article-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '48px' }}>
          <Link href="/glossary" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Dictionary
          </Link>
        </div>

        <h1 className="display-lg" style={{ marginBottom: '48px', color: 'var(--color-primary)' }}>{item.term}</h1>

        <div className="card-elevated" style={{ background: 'white', padding: '48px', marginBottom: '48px' }}>
          <div className="micro-cap" style={{ color: 'var(--color-ink-mute)', marginBottom: '16px' }}>NEXAWORKS DEFINITION</div>
          <p className="heading-md" style={{ color: 'var(--color-ink)', lineHeight: 1.6 }}>
            {item.definition}
          </p>
        </div>

        <article style={{ padding: '0 24px', color: 'var(--color-ink-secondary)', lineHeight: 1.8 }}>
          <h2 className="heading-md" style={{ color: 'var(--color-ink)', marginBottom: '24px' }}>Architectural Context</h2>
          <p className="body-md">
            {item.context}
          </p>
        </article>

      </div>
    </main>
  );
}
