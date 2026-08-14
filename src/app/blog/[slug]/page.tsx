import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';
import '../blog.css';
import '../article.css';

export const revalidate = 0; // Disable caching so dynamic content shows immediately

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from('articles').select('*').eq('slug', resolvedParams.slug).single();
  
  if (!post) {
    return { title: 'Post Not Found | NexaWorks' };
  }

  return {
    title: `${post.title} | NexaWorks Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://nexaworks.tech/blog/${post.slug}`
    }
  };
}

import remarkGfm from 'remark-gfm';

// Map custom MDX components
const components = {
  AEOAnswerBlock
};

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from('articles').select('*').eq('slug', resolvedParams.slug).single();
  
  if (!post) {
    notFound();
  }

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.created_at,
    "author": {
      "@type": "Organization",
      "name": "NexaWorks Research Center"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexaWorks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexaworks.tech/logo.png"
      }
    }
  };

  return (
    <main className="blog-page" style={{ paddingTop: '120px' }}>
      <Script id="tech-article-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }} />
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link href="/blog" className="back-link" style={{ display: 'inline-block', marginBottom: '40px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          &larr; Back to Blog
        </Link>

        <header style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            <span style={{ color: 'var(--color-accent)' }}>{post.category}</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>&bull;</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>{post.date || new Date(post.created_at).toLocaleDateString()}</span>
          </div>
          <h1 style={{ fontSize: '48px', fontFamily: 'ui-serif, Georgia, serif', lineHeight: 1.1, marginBottom: '24px' }}>
            {post.title}
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
        </header>

        <article className="article-content">
          <MDXRemote source={post.content} components={components} options={mdxOptions} />
        </article>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '64px 0' }} />

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Ready to deploy deterministic AI?</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Stop experimenting. Start executing with highly-governed, compliant AI architectures.</p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
            Schedule an Architecture Review
          </Link>
        </div>

      </div>
    </main>
  );
}
