import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | NexaWorks',
  description: 'Technical insights and strategic analysis on Agentic AI, Model Context Protocol (MCP), and enterprise automation.',
};

export default function BlogIndexPage() {
  const posts = [
    {
      title: 'The Death of Legacy OCR: Why Agentic Pipelines Won in 2026',
      excerpt: 'Traditional template-based OCR systems have entirely collapsed under the weight of unstructured enterprise data. Here is how visual-language models (VLMs) replaced them.',
      date: 'August 12, 2026',
      category: 'Architecture',
      slug: 'death-of-legacy-ocr-agentic-pipelines'
    },
    {
      title: 'Understanding the Model Context Protocol (MCP)',
      excerpt: 'Anthropic\'s MCP standard has fundamentally changed how agents connect to data. Stop writing custom API wrappers and start building MCP servers.',
      date: 'August 5, 2026',
      category: 'Engineering',
      slug: 'understanding-model-context-protocol-mcp'
    },
    {
      title: 'Why "Chat with your PDF" is a Dead Enterprise Feature',
      excerpt: 'Basic semantic search over chunks of text is not sufficient for commercial operations. Enterprise RAG requires deterministic routing and Pydantic validation.',
      date: 'July 28, 2026',
      category: 'Strategy',
      slug: 'enterprise-rag-deterministic-routing'
    },
    {
      title: 'Browser Automation Agents: Navigating Legacy Mainframes',
      excerpt: 'When APIs do not exist, your agent must be granted "Computer Use" to visually navigate DOMs and extract data exactly like a human operator.',
      date: 'July 15, 2026',
      category: 'Capability',
      slug: 'browser-automation-agents-legacy-mainframes'
    }
  ];

  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-canvas)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="display-xl" style={{ marginBottom: '24px' }}>NexaWorks Engineering Blog</h1>
          <p className="heading-md" style={{ color: 'var(--color-ink-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Technical deep-dives, architectural post-mortems, and deployment strategies from our systems engineering team.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px' }}>
          {posts.map((post, i) => (
            <div key={i} className="card-elevated" style={{ background: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="micro-cap" style={{ color: 'var(--color-primary)' }}>{post.category}</span>
                <span className="caption" style={{ color: 'var(--color-ink-secondary)' }}>{post.date}</span>
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '16px' }}>{post.title}</h2>
              <p className="body-md" style={{ color: 'var(--color-ink-secondary)', marginBottom: '24px' }}>
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="link" style={{ fontWeight: 600 }}>Read Article &rarr;</Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <button className="btn-secondary" style={{ padding: '16px 32px' }}>Load More Articles</button>
        </div>

      </div>
    </main>
  );
}
