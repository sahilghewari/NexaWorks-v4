import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import './research.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Enterprise AI Research & Publications — NexaWorks',
  description: 'Annual reports, empirical studies, and deep-dive analytics into global enterprise AI adoption, latency, and compliance.',
  keywords: ['Enterprise AI Research', 'LLM Adoption', 'AI Benchmarks', 'Context Window Degradation', 'AI Latency', 'AI Compliance'],
  alternates: { canonical: 'https://nexaworks.tech/research' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Enterprise AI Research & Publications — NexaWorks',
    description: 'Annual reports, empirical studies, and deep-dive analytics into global enterprise AI adoption, latency, and compliance.',
    url: 'https://nexaworks.tech/research',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Enterprise AI Research' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Enterprise AI Research & Publications — NexaWorks',
    description: 'Annual reports, empirical studies, and deep-dive analytics into global enterprise AI adoption, latency, and compliance.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function ResearchLandingPage() {
  const annualReports = [
    {
      title: "State of Enterprise AI 2026",
      href: "/research/state-of-enterprise-ai-2026",
      description: "Macroeconomic analysis of LLM adoption, deterministic routing, and the transition from heuristic search to AI agent ecosystems.",
      date: "August 2026",
      image: "/research-featured.webp"
    }
  ];

  const benchmarks = [
    {
      title: "Document AI Accuracy Index",
      href: "/benchmarks/document-ai",
      description: "Comparative accuracy benchmarks of unstructured data extraction across OCR vs Agentic Pipelines.",
      date: "Q3 2026",
      image: "/research-doc-ai.webp"
    },
    {
      title: "Context Window Degradation",
      href: "/benchmarks/context-window-degradation",
      description: "Empirical study on fact-retrieval dropoff when foundational models exceed 128k context limits.",
      date: "July 2026",
      image: "/research-context-degrad.webp"
    }
  ];

  const datasets = [
    {
      title: "Global AI ROI Index",
      href: "/research/global-roi-index",
      description: "Sector-by-sector empirical tracking of Return on Investment (ROI) and cost displacement achieved through Enterprise AI automation.",
      date: "LIVE DATA",
      image: "/research-roi.webp"
    },
    {
      title: "LLMOps Observability Matrix",
      href: "/benchmarks/llmops-observability-matrix",
      description: "Structured dataset of average MTTR and error rates across RAG production deployments.",
      date: "LIVE DATA",
      image: "/research-llmops.webp"
    }
  ];

  return (
    <main className="research-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Research', href: '/research' }]} />
      <section className="research-hero">
        <div className="research-tag">MACROECONOMIC INTELLIGENCE</div>
        <h1 className="research-headline">Research & Intelligence</h1>
        <p className="research-subhead">
          Factually dense, statistically rigorous analysis engineered for CTOs, institutional investors, and operations leaders navigating the enterprise AI transition.
        </p>
      </section>

      {/* Featured Annual Report (Beige Break) */}
      <section className="research-featured-section">
        <div className="research-featured-container">
          <h2 className="research-section-title">Featured Annual Report</h2>
          <ScrollReveal>
            <Link href={annualReports[0].href} className="research-featured-card">
              <div className="research-featured-content">
                <div className="research-meta">
                  <span>ANNUAL REPORT</span>
                  <span>{annualReports[0].date}</span>
                </div>
                <h3>{annualReports[0].title}</h3>
                <p>{annualReports[0].description}</p>
              </div>
              <div className="research-featured-image">
                <Image 
                  src={annualReports[0].image} 
                  alt={annualReports[0].title} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Empirical Benchmarks (Dark Glassmorphic Grid) */}
      <section className="research-grid-section">
        <h2 className="research-section-title dark">Empirical Benchmarks</h2>
        <div className="research-bento-grid">
          {benchmarks.map((report, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href={report.href} className="research-bento-card" style={{ flex: 1 }}>
                <div className="research-card-image">
                  <Image 
                    src={report.image} 
                    alt={report.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="research-card-content">
                  <div className="research-card-meta">
                    <span>BENCHMARK</span>
                    <span>{report.date}</span>
                  </div>
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Live Datasets (Dark Glassmorphic Grid) */}
      <section className="research-grid-section" style={{ paddingTop: '0' }}>
        <h2 className="research-section-title dark">Live Datasets</h2>
        <div className="research-bento-grid">
          {datasets.map((report, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href={report.href} className="research-bento-card" style={{ flex: 1 }}>
                <div className="research-card-image">
                  <Image 
                    src={report.image} 
                    alt={report.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="research-card-content">
                  <div className="research-card-meta">
                    <span>DATASET</span>
                    <span>{report.date}</span>
                  </div>
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </main>
  );
}
