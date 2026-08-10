import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './playbooks.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Executive Playbooks | NexaWorks',
  description: 'Actionable engineering and strategy guides for technical leaders.',
  keywords: ['Executive AI Playbooks', 'CIO Strategy', 'AI Architecture Guide', 'LLM Cost Optimization', 'AI Operations'],
  alternates: { canonical: 'https://nexaworks.tech/playbooks' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Executive Playbooks | NexaWorks',
    description: 'Actionable engineering and strategy guides for technical leaders.',
    url: 'https://nexaworks.tech/playbooks',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Playbooks' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Executive Playbooks | NexaWorks',
    description: 'Actionable engineering and strategy guides for technical leaders.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function PlaybooksLandingPage() {
  const playbooks = [
    {
      title: "The CIO's Guide to Agentic Architecture",
      description: "How to transition from static LLM wrappers to dynamic, tool-using agents without compromising security.",
      category: "Strategy",
      author: "Dr. Sarah Chen",
      role: "Chief Architect",
      link: "/research/state-of-enterprise-ai-2026"
    },
    {
      title: "EU AI Act Compliance & Governance",
      description: "A framework for classifying AI risk tiers, implementing human-in-the-loop audit logs, and meeting EU deadlines.",
      category: "Governance",
      author: "Marcus Reynolds",
      role: "VP Engineering",
      link: "/playbooks/eu-ai-act-compliance"
    },
    {
      title: "Enterprise Infrastructure & Latency Optimization",
      description: "Step-by-step technical playbook for deploying private models, GPU scheduling, and sub-100ms context caching.",
      category: "Infrastructure",
      author: "Elena Rostova",
      role: "Lead ML Engineer",
      link: "/infrastructure-playbooks"
    },
    {
      title: "Context Window Degradation & Benchmark Report",
      description: "Comprehensive benchmark comparing GraphRAG vs flat vector databases across 1M+ token enterprise contexts.",
      category: "Research",
      author: "David Kim",
      role: "Head of MLSecOps",
      link: "/benchmarks/context-window-degradation"
    }
  ];

  return (
    <main className="playbooks-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Playbooks', href: '/playbooks' }]} />
      <section className="playbooks-hero">
        <ScrollReveal delay={0.1}>
          <span className="playbooks-tag">EXECUTIVE RESOURCES</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="playbooks-headline">Strategic Playbooks</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="playbooks-subhead">
            Actionable guides for engineering leaders navigating the transition to autonomous AI systems.
          </p>
        </ScrollReveal>
      </section>

      <section className="playbooks-slider-section">
        <div className="slider-header">
          <ScrollReveal delay={0.1}>
            <h2 className="slider-title">Latest Publications</h2>
          </ScrollReveal>
        </div>

        <div className="horizontal-scroll-container">
          {playbooks.map((playbook, idx) => (
            <Link href={playbook.link} key={idx} className="playbook-card">
              <article className="h-full" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <span className="playbook-category">{playbook.category}</span>
                <h3 className="playbook-title">{playbook.title}</h3>
                <p className="playbook-desc">{playbook.description}</p>
                
                <div className="playbook-author" style={{ marginTop: 'auto' }}>
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>{playbook.author}</h4>
                    <p>{playbook.role}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
