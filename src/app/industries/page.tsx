import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Context Reconstruction by Industry | NexaWorks',
  description: 'Industry-specific Context Reconstruction architectures for Financial Services, Healthcare, Real Estate, and Legal.',
};

export default function IndustriesHubPage() {
  const industries = [
    {
      id: 'financial-services',
      name: 'Financial Services',
      description: 'Automate invoice processing, compliance audits, and AP/AR reconciliation using secure, SOC2-compliant Agentic pipelines.',
      icon: '🏛️'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Pydantic-validated clinical data extraction, patient triage routing, and automated claims processing.',
      icon: '⚕️'
    },
    {
      id: 'real-estate',
      name: 'Commercial Real Estate',
      description: 'Automate lease abstraction, portfolio analytics, and tenant onboarding with zero hallucinations.',
      icon: '🏢'
    },
    {
      id: 'logistics',
      name: 'Supply Chain & Logistics',
      description: 'Predictive routing, automated bill of lading (BOL) extraction, and agentic inventory management.',
      icon: '🚢'
    },
    {
      id: 'legal',
      name: 'Legal & Compliance',
      description: 'Contract analysis, EU AI Act compliance monitoring, and automated redlining using deterministic RAG.',
      icon: '⚖️'
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      description: 'Agentic customer support routing, dynamic pricing optimization, and automated inventory sync.',
      icon: '🛍️'
    }
  ];

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>Industries</h1>
          <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            We engineer sector-specific AI architectures designed to solve the hardest operational bottlenecks in your industry.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '32px' }}>
          {industries.map((industry) => (
            <Link 
              key={industry.id} 
              href={`/industries/${industry.id}`} 
              className="card-elevated"
              style={{ display: 'block', background: 'white', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            >
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>{industry.icon}</div>
              <h2 className="heading-md" style={{ marginBottom: '16px' }}>{industry.name}</h2>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                {industry.description}
              </p>
              <div style={{ marginTop: '24px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}>
                View Workflows &rarr;
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '96px', textAlign: 'center', background: '#1e1e1e', padding: '64px', borderRadius: '16px', color: 'white' }}>
          <h2 className="display-lg" style={{ marginBottom: '16px' }}>Don't see your industry?</h2>
          <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '32px' }}>
            Our foundational Context Reconstruction architectures (RAG, MCP) are industry-agnostic. We eliminate context loss for any complex enterprise environment.
          </p>
          <button className="btn-primary" style={{ padding: '16px 32px' }}>Request Custom Architecture</button>
        </div>

      </div>
    </main>
  );
}
