import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'India Automation Solutions | NexaWorks',
  description: 'Enterprise AI and deterministic data pipelines engineered for Indian enterprises. DPDP Act compliance, Tally ERP sync, and WhatsApp telemetry.',
  keywords: ['India Enterprise AI', 'DPDP Act AI', 'Tally Prime API', 'WhatsApp Telemetry', 'Tally ERP Automation'],
  alternates: { canonical: 'https://nexaworks.tech/in-automation' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'India Automation Solutions | NexaWorks',
    description: 'Enterprise AI and deterministic data pipelines engineered for Indian enterprises.',
    url: 'https://nexaworks.tech/in-automation',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'India Automation Solutions' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'India Automation Solutions | NexaWorks',
    description: 'Enterprise AI and deterministic data pipelines engineered for Indian enterprises.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function InAutomationPage() {
  const items = [
    {
      slug: 'dpdp-act-pii-redaction',
      title: 'DPDP Act PII Redaction',
      desc: 'Automated historical data discovery and PII masking pipelines to ensure total compliance with the Digital Personal Data Protection Act.'
    },
    {
      slug: 'tally-erp-bi-pipelines',
      title: 'Tally ERP BI Pipelines',
      desc: 'Asynchronous Python pipelines querying Tally via ODBC to sync complex financial ledgers and vouchers directly into PowerBI.'
    },
    {
      slug: 'tally-prime-xml-api',
      title: 'TallyPrime 7.0 XML Integration',
      desc: 'Bypass ODBC read limits with direct XML over HTTP integration for real-time GSTR-2B reconciliation and invoice auto-entry.'
    },
    {
      slug: 'whatsapp-saas-telemetry',
      title: 'WhatsApp SaaS Telemetry',
      desc: 'Event-driven WhatsApp Business API integrations for real-time customer onboarding, alerts, and transactional lead activation.'
    },
    {
      slug: 'cre-lease-abstraction',
      title: 'Commercial Real Estate Lease Abstraction',
      desc: 'Deterministic extraction of complex CRE lease agreements with strict Pydantic schema validation.'
    }
  ];

  return (
    <main style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', padding: '120px 24px 80px 24px' }}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'India Automations', href: '/in-automation' }]} />
      
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
            REGIONAL ENTERPRISE SOLUTIONS
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1 style={{ fontFamily: 'ui-serif, Georgia, serif', fontSize: '48px', fontWeight: 400, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            India Enterprise Automations
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.65)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Purpose-built automation pipelines and compliance architectures engineered for Indian corporate infrastructure.
          </p>
        </ScrollReveal>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
        {items.map((item, idx) => (
          <ScrollReveal key={item.slug} delay={0.05 * idx}>
            <Link 
              href={`/in-automation/${item.slug}`} 
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
                  View Implementation Blueprint →
                </span>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
