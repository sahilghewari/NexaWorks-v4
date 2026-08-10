import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'US Architecture Blueprints | NexaWorks',
  description: 'Enterprise AI architectures for US engineering teams. Async LLM refactoring, Pydantic clinical extraction, and RFP automation.',
  keywords: ['US Enterprise AI', 'Async FastAPI LLM', 'Pydantic Clinical Extraction', 'Sales Engineering RAG', 'OpenTelemetry SLA Monitoring'],
  alternates: { canonical: 'https://nexaworks.tech/us-architecture' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'US Architecture Blueprints | NexaWorks',
    description: 'Enterprise AI architectures for US engineering teams.',
    url: 'https://nexaworks.tech/us-architecture',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'US Architecture Blueprints' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'US Architecture Blueprints | NexaWorks',
    description: 'Enterprise AI architectures for US engineering teams.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function UsArchitecturePage() {
  const items = [
    {
      slug: 'async-llm-refactoring',
      title: 'Async LLM API Refactoring',
      desc: 'Production rescue for FastAPI & Uvicorn pipelines. Resolve blocking WSGI traps and thread starvation during high-concurrency inference.'
    },
    {
      slug: 'pydantic-clinical-extraction',
      title: 'Pydantic Clinical Extraction',
      desc: 'HIPAA-compliant structured extraction converting unstructured clinical notes into validated JSON with automated retry mechanisms.'
    },
    {
      slug: 'sales-engineering-rag',
      title: 'Sales Engineering RAG',
      desc: 'Deploy GraphRAG and semantic search over internal engineering documentation to automate technical RFPs and security reviews.'
    },
    {
      slug: 'sla-telemetry-monitoring',
      title: 'SLA Telemetry Monitoring',
      desc: 'Real-time observability and distributed tracing for Python data pipelines with OpenTelemetry integration.'
    },
    {
      slug: 'freelance-agency-rfp',
      title: 'Agency RFP Automation',
      desc: 'Turn multi-week enterprise RFP responses into deterministic, verified proposal generation within hours.'
    }
  ];

  return (
    <main style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', padding: '120px 24px 80px 24px' }}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'US Architecture', href: '/us-architecture' }]} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
        <ScrollReveal delay={0.1}>
          <span style={{ 
            display: 'inline-block', 
            fontSize: '12px', 
            fontWeight: 600, 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase', 
            color: '#c4b5fd', 
            backgroundColor: 'rgba(83, 58, 253, 0.15)', 
            border: '1px solid rgba(83, 58, 253, 0.35)', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            marginBottom: '16px' 
          }}>
            ENTERPRISE BLUEPRINTS
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1 style={{ fontFamily: 'ui-serif, Georgia, serif', fontSize: '48px', fontWeight: 400, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            US Architecture Blueprints
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.65)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Deterministic reference architectures and production patterns for high-scale enterprise engineering teams.
          </p>
        </ScrollReveal>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
        {items.map((item, idx) => (
          <ScrollReveal key={item.slug} delay={0.05 * idx}>
            <Link 
              href={`/us-architecture/${item.slug}`} 
              style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}
            >
              <article style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderRadius: '12px', 
                padding: '32px', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column'
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: 500, color: '#ffffff', marginBottom: '12px' }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {item.desc}
                </p>
                <span style={{ fontSize: '13px', color: '#a78bfa', fontWeight: 500 }}>
                  View Technical Specification →
                </span>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
