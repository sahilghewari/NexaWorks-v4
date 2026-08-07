import React from 'react';
import Link from 'next/link';
import GradientMesh from '@/components/GradientMesh';

export const metadata = {
  title: 'Enterprise AI Developer Tools',
  description: 'High-utility developer tools, calculators, and simulators for AI engineering, RAG architecture, and Generative Engine Optimization.',
};

export default function ToolsLandingPage() {
  const tools = [
    {
      name: "RAG Parameter Simulator",
      slug: "rag-simulator",
      description: "Visually simulate the impact of chunk sizes and overlap on Retrieval-Augmented Generation (RAG) context windows.",
      tag: "AI ENGINEERING"
    },
    {
      name: "JSON-LD Schema Generator",
      slug: "schema-generator",
      description: "Generate valid Schema.org JSON-LD payloads for TechArticles, Datasets, and Software to dominate Generative Engine Optimization.",
      tag: "DEVELOPER UTILITY"
    },
    {
      name: "Automation ROI Calculator",
      slug: "roi-calculator",
      description: "Calculate the long-term compounding savings and risk exposure of deploying enterprise automation workflows.",
      tag: "BUSINESS CALCULATOR"
    }
  ];

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <span className="tag" style={{ marginBottom: '16px' }}>OPEN ENGINEERING TOOLS</span>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>
              Developer Utilities
            </h1>
            <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '64px' }}>
              Free, high-gravity technical utilities engineered to solve daily friction points for CTOs, data scientists, and automation engineers.
            </p>

            <div className="grid-2" style={{ gap: '32px' }}>
              {tools.map((tool, idx) => (
                <Link key={idx} href={`/tools/${tool.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card hover-border-primary" style={{ cursor: 'pointer', transition: 'all 0.3s', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', height: '100%' }}>
                    <div className="micro-cap" style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>
                      {tool.tag}
                    </div>
                    <h3 className="heading-md" style={{ marginBottom: '16px' }}>
                      {tool.name}
                    </h3>
                    <p className="body-md" style={{ color: 'var(--color-ink-secondary)' }}>
                      {tool.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </GradientMesh>
    </main>
  );
}
