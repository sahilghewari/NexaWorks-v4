import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';
import GradientMesh from '@/components/GradientMesh';
import integrationsData from '@/data/integrations.json';

export async function generateStaticParams() {
  return integrationsData.map((integration) => ({
    slug: integration.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = integrationsData.find(item => item.slug === params.slug);
  
  if (!data) {
    return { title: 'Integration Not Found' };
  }

  const lastUpdatedISO = "2026-08-01T00:00:00Z";

  return {
    title: `${data.name} | NexaWorks Integration Architecture`,
    description: data.description,
    alternates: {
      canonical: `https://nexaworks.tech/integrations/${params.slug}`
    },
    openGraph: {
      title: `${data.name} | NexaWorks`,
      description: data.description,
      modifiedTime: lastUpdatedISO,
    }
  };
}

export default function IntegrationPage({ params }: { params: { slug: string } }) {
  const data = integrationsData.find(item => item.slug === params.slug);
  
  if (!data) {
    notFound();
  }

  const lastUpdatedISO = "2026-08-01T00:00:00Z";

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${data.name} Architecture`,
    "description": data.description,
    "author": {
      "@type": "Organization",
      "name": "NexaWorks"
    },
    "datePublished": "2026-01-15T00:00:00Z",
    "dateModified": lastUpdatedISO,
    "proficiencyLevel": "Expert",
    "dependencies": data.technicalDependencies.join(", ")
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": data.schemaQuestion,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": data.schemaAnswer
      }
    }]
  };

  return (
    <>
      <Script id={`tech-schema-${params.slug}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <Script id={`faq-schema-${params.slug}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        <GradientMesh>
          <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
            <div className="container">
              {/* Breadcrumb */}
              <div style={{ marginBottom: '48px' }}>
                <Link href="/" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  &larr; Back to Platform Integrations
                </Link>
              </div>

              <div className="grid-2" style={{ alignItems: 'flex-start' }}>
                <div>
                  <span className="tag" style={{ marginBottom: '16px' }}>API INTEGRATION PIPELINE</span>
                  <h1 className="display-xl" style={{ marginBottom: '16px' }}>
                    {data.name}
                  </h1>
                  
                  <div className="caption" style={{ color: 'var(--color-ink-mute)', marginBottom: '32px', fontWeight: 600 }}>
                    Last Updated: August 2026
                  </div>
                  
                  <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px', maxWidth: '600px' }}>
                    {data.description}
                  </p>
                  
                  <h3 className="heading-md" style={{ marginBottom: '16px' }}>Business Outcome</h3>
                  <p className="body-md" style={{ color: 'var(--color-ink)', marginBottom: '40px', padding: '16px', background: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-md)' }}>
                    {data.businessOutcome}
                  </p>

                  <Link href="/contact" className="btn-primary btn-lg">
                    Discuss Architecture Requirements
                  </Link>
                </div>
                
                {/* Tech Stack Payload */}
                <div className="card-elevated" style={{ background: 'var(--color-ink)', color: 'white' }}>
                  <h3 className="heading-sm" style={{ marginBottom: '24px', color: 'var(--color-canvas-soft)' }}>
                    Architecture Dependencies
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {data.technicalDependencies.map((tech, idx) => (
                      <li key={idx} className="body-md" style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <span style={{ color: 'var(--color-brand)' }}>&gt;</span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </GradientMesh>

        {/* AEO Answer Block */}
        <section className="section" style={{ paddingTop: '0px' }}>
          <div className="container">
            <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '64px' }}>
              <AEOAnswerBlock 
                question={data.schemaQuestion} 
                answer={data.schemaAnswer} 
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
