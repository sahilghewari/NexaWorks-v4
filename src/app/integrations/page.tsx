import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';
import integrations from '@/data/integrations.json';

export const metadata: Metadata = {
  title: 'Enterprise Integrations | NexaWorks',
  description: 'Connect NexaWorks to your entire software stack via Model Context Protocol (MCP) and secure enterprise APIs.',
  keywords: ['MCP Integrations', 'Salesforce AI', 'SAP AI Integration', 'Zendesk AI', 'ServiceNow AI', 'Enterprise AI Connectors'],
  alternates: { canonical: 'https://nexaworks.tech/integrations' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Enterprise Integrations | NexaWorks',
    description: 'Connect NexaWorks to your entire software stack via Model Context Protocol (MCP) and secure enterprise APIs.',
    url: 'https://nexaworks.tech/integrations',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Enterprise Integrations' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Enterprise Integrations | NexaWorks',
    description: 'Connect NexaWorks to your entire software stack via Model Context Protocol (MCP) and secure enterprise APIs.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function IntegrationsPage() {
  return (
    <main style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', padding: '120px 24px 80px 24px' }}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Integrations', href: '/integrations' }]} />
      
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
            MCP & API CONNECTORS
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h1 style={{ fontFamily: 'ui-serif, Georgia, serif', fontSize: '48px', fontWeight: 400, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Enterprise Integrations
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.65)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Seamlessly connect your CRM, ERP, ticketing, and internal databases to autonomous agents using the Model Context Protocol (MCP).
          </p>
        </ScrollReveal>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
        {integrations.map((item, idx) => (
          <ScrollReveal key={item.slug} delay={0.05 * (idx % 6)}>
            <Link 
              href={`/integrations/${item.slug}`} 
              style={{ 
                display: 'block', 
                height: '100%', 
                textDecoration: 'none', 
                color: 'inherit' 
              }}
            >
              <article style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)', 
                border: '1px solid rgba(255, 255, 255, 0.08)', 
                borderRadius: '12px', 
                padding: '32px', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: 500, color: '#ffffff', marginBottom: '12px' }}>
                  {item.name}
                </h2>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {item.technicalDependencies?.slice(0, 3).map((tech: string, i: number) => (
                    <span key={i} style={{ 
                      fontSize: '11px', 
                      background: 'rgba(255, 255, 255, 0.06)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      padding: '3px 8px', 
                      borderRadius: '4px', 
                      color: 'rgba(255, 255, 255, 0.7)' 
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: '13px', color: '#a78bfa', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  View Architecture Blueprint →
                </span>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
