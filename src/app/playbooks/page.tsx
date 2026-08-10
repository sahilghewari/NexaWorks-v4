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
      link: "/playbooks/cio-guide"
    },
    {
      title: "Cost Optimization in LLM Serving",
      description: "A framework for calculating total cost of ownership (TCO) across managed APIs vs. bare-metal self-hosting.",
      category: "Operations",
      author: "Marcus Reynolds",
      role: "VP Engineering",
      link: "/playbooks/cost-optimization"
    },
    {
      title: "Migrating to GraphRAG",
      description: "Step-by-step technical guide for moving from naive chunking to entity-relationship knowledge graphs.",
      category: "Implementation",
      author: "Elena Rostova",
      role: "Lead ML Engineer",
      link: "/playbooks/graphrag-migration"
    },
    {
      title: "Defending Against Prompt Injection",
      description: "A comprehensive analysis of red-teaming techniques and how deterministic guardrails neutralize them.",
      category: "Security",
      author: "David Kim",
      role: "Head of MLSecOps",
      link: "/playbooks/prompt-injection-defense"
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
