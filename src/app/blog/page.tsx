import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './blog.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Blog & Resources | NexaWorks',
  description: 'Technical insights, engineering deep dives, and architectural patterns from the NexaWorks team.',
  keywords: ['NexaWorks Blog', 'AI Engineering Insights', 'Architecture Patterns', 'GraphRAG vs Vector', 'LLM Tutorials'],
  alternates: { canonical: 'https://nexaworks.tech/blog' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Blog & Resources | NexaWorks',
    description: 'Technical insights, engineering deep dives, and architectural patterns from the NexaWorks team.',
    url: 'https://nexaworks.tech/blog',
    siteName: 'NexaWorks',
    type: 'website',
    images: [{ url: 'https://nexaworks.tech/og-image.jpg', width: 1200, height: 630, alt: 'NexaWorks Blog' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NexaWorksAI',
    creator: '@NexaWorksAI',
    title: 'Blog & Resources | NexaWorks',
    description: 'Technical insights, engineering deep dives, and architectural patterns from the NexaWorks team.',
    images: ['https://nexaworks.tech/og-image.jpg']
  }
};

export default function BlogLandingPage() {
  const latestPost = {
    title: "GraphRAG vs Vector Databases: A Quantitative Benchmark",
    description: "We open-source our internal benchmarks comparing latency, token consumption, and recall accuracy between flat vector databases (Pinecone) and property graphs (Neo4j).",
    category: "Engineering",
    date: "Aug 10, 2026",
    link: "/blog/graphrag-benchmark"
  };

  const olderPosts = [
    {
      title: "The Death of Prompt Engineering",
      description: "Why structured schemas (Pydantic) and constrained decoding have rendered traditional prompt engineering obsolete.",
      category: "Methodology",
      date: "Jul 22, 2026",
      large: true,
      link: "/blog/prompt-engineering"
    },
    {
      title: "Building Deterministic Agents",
      description: "How to constrain LLM routing using explicit state machines in LangGraph.",
      category: "Tutorial",
      date: "Jul 15, 2026",
      large: false,
      link: "/blog/deterministic-agents"
    },
    {
      title: "Deploying Llama 3 405B on Bare Metal",
      description: "Hardware requirements for offline processing.",
      category: "Infrastructure",
      date: "Jun 30, 2026",
      large: false,
      link: "/blog/llama-deployment"
    },
    {
      title: "SOC 2 Compliance with AI Agents",
      description: "Implementing HITL (Human-in-the-Loop) to satisfy strict auditor requirements.",
      category: "Security",
      date: "Jun 12, 2026",
      large: false,
      link: "/blog/soc2-compliance"
    }
  ];

  return (
    <main className="blog-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [latestPost, ...olderPosts].map((post, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date
          }
        }))
      }) }} />
      <section className="blog-hero">
        <ScrollReveal delay={0.1}>
          <span className="blog-tag">ENGINEERING LOG</span>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h1 className="blog-headline">Thoughts on Architecture</h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <p className="blog-subhead">
            Deep dives, benchmarks, and honest post-mortems from the team building deterministic AI systems for the enterprise.
          </p>
        </ScrollReveal>
      </section>

      <section className="blog-content-section">
        
        {/* Featured Post (Full Width) */}
        <ScrollReveal delay={0.1}>
          <article className="blog-featured">
            <Link href={latestPost.link} className="featured-card">
              <div className="featured-image-placeholder">
                &lt; BENCHMARK_DATA_VISUALIZATION &gt;
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="post-category">{latestPost.category}</span>
                  <span className="post-date">{latestPost.date}</span>
                </div>
                <h2 className="featured-title">{latestPost.title}</h2>
                <p className="featured-desc">{latestPost.description}</p>
                <div className="read-more">Read Article &rarr;</div>
              </div>
            </Link>
          </article>
        </ScrollReveal>

        {/* Masonry Grid */}
        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Latest Articles</h2>
        <div className="blog-masonry">
          {olderPosts.map((post, idx) => (
            <ScrollReveal key={idx} delay={0.1 + (idx * 0.1)} className={post.large ? "masonry-card large h-full" : "h-full"}>
              <Link href={post.link} className={post.large ? "masonry-card large h-full" : "masonry-card h-full"}>
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="masonry-title">{post.title}</h3>
                <p className="masonry-desc">{post.description}</p>
                <div className="read-more">Read Article &rarr;</div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </section>
    </main>
  );
}
