import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import './blog.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import { createClient } from '@/utils/supabase/server';

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

export const revalidate = 0; // Disable caching to fetch live articles, or use ISR like `export const revalidate = 3600;`
// We will use standard dynamic rendering for now since it updates via cron.

export default async function BlogLandingPage() {
  const supabase = await createClient();
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !articles || articles.length === 0) {
    return (
      <main className="blog-page">
        <section className="blog-hero">
          <h1 className="blog-headline">No Articles Found</h1>
        </section>
      </main>
    );
  }

  // Format posts for the UI
  const latestPost = {
    title: articles[0].title,
    description: articles[0].excerpt,
    category: articles[0].category || "Article",
    date: articles[0].date || new Date(articles[0].created_at).toLocaleDateString(),
    link: `/blog/${articles[0].slug}`
  };

  const olderPosts = articles.slice(1).map((a: any) => ({
    title: a.title,
    description: a.excerpt,
    category: a.category || "Article",
    date: a.date || new Date(a.created_at).toLocaleDateString(),
    large: a.large || false,
    link: `/blog/${a.slug}`
  }));

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
            <ScrollReveal key={idx} delay={0.1 + (idx * 0.1)} className="h-full">
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
