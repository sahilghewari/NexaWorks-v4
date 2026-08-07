import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts'; // I will create this data file next

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) {
    return { title: 'Post Not Found | NexaWorks' };
  }
  return {
    title: `${post.title} | NexaWorks Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '48px' }}>
          <Link href="/blog" className="link" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            &larr; Back to Blog
          </Link>
        </div>

        <article>
          <header style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
              <span className="tag" style={{ background: 'var(--color-primary)', color: 'white', border: 'none' }}>{post.category}</span>
              <span className="caption" style={{ color: 'var(--color-ink-secondary)' }}>{post.date}</span>
            </div>
            <h1 className="display-xl" style={{ marginBottom: '24px' }}>{post.title}</h1>
            <p className="body-xl" style={{ color: 'var(--color-ink-secondary)', fontSize: '20px', lineHeight: 1.6 }}>
              {post.excerpt}
            </p>
          </header>
          
          <div className="blog-content" style={{ color: 'var(--color-ink)', lineHeight: 1.8, fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--color-hairline)' }}>
          <h3 className="heading-md" style={{ marginBottom: '16px' }}>Ready to deploy this architecture?</h3>
          <button className="btn-primary" style={{ padding: '16px 32px' }}>Book Engineering Consultation</button>
        </div>

      </div>
    </main>
  );
}
