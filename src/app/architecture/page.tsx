import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './architecture.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Reference Architecture | NexaWorks',
  description: 'Explore the technical foundations and deployment topologies of NexaWorks solutions.',
  keywords: ['AI Reference Architecture', 'RAG Architecture', 'Agentic Architecture', 'Enterprise LLM Topology', 'vLLM', 'Zero Trust'],
  alternates: { canonical: 'https://nexaworks.tech/architecture' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Reference Architecture | NexaWorks',
    description: 'Explore the technical foundations and deployment topologies of NexaWorks solutions.',
    url: 'https://nexaworks.tech/architecture',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Reference Architecture' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Reference Architecture | NexaWorks',
    description: 'Explore the technical foundations and deployment topologies of NexaWorks solutions.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function ArchitectureLibrary() {
  const architectures = [
    {
      title: "Agentic Retrieval-Augmented Generation (RAG)",
      description: "How we deploy Stateful LangGraph agents connected to pgvector databases for high-fidelity context reconstruction.",
      tags: ["LangGraph", "pgvector", "FastAPI"],
      link: "/us-architecture/sales-engineering-rag"
    },
    {
      title: "On-Premise LLM Deployment",
      description: "Hardware requirements and vLLM serving configuration for air-gapped deployments of Llama 3 405B.",
      tags: ["vLLM", "CUDA", "Llama-3"],
      link: "/us-architecture/async-llm-refactoring"
    },
    {
      title: "Zero-Trust Security Gateway",
      description: "Edge-based token redaction and semantic firewalling for strict multi-tenant isolation.",
      tags: ["Istio", "Regex", "OAuth2"],
      link: "/in-automation/dpdp-act-pii-redaction"
    },
    {
      title: "Browser Automation & Legacy Mainframes",
      description: "Our pipeline for bridging legacy mainframes and air-gapped platforms using computer use and distributed worker queues.",
      tags: ["Computer Use", "Playwright", "FastAPI"],
      link: "/architecture/browser-automation"
    }
  ];

  return (
    <main className="architecture-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Architecture', href: '/architecture' }]} />
      <section className="architecture-hero">
        <ScrollReveal delay={0.1}>
          <span className="architecture-tag">BLUEPRINTS</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="architecture-headline">Reference Architecture</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="architecture-subhead">
            We open-source our deployment topologies. Explore the exact systems, microservices, and databases we use to scale AI for the enterprise.
          </p>
        </ScrollReveal>
      </section>

      <section className="architecture-content-section">
        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Explore Our Architectures</h2>
        <div className="flow-stack-container">
          {architectures.map((arch, idx) => (
            <ScrollReveal key={idx} delay={0.1} style={{ width: '100%' }}>
              <div className={`flow-card-wrapper ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <Link href={arch.link} className="flow-card">
                  <h3 className="architecture-card-title">{arch.title}</h3>
                  <div className="architecture-tag-list">
                    {arch.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="arch-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="architecture-card-desc">{arch.description}</p>
                  <div className="architecture-card-link">View Topology &rarr;</div>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
