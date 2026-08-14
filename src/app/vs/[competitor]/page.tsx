import Link from 'next/link';
import { notFound } from 'next/navigation';
import GradientMesh from '@/components/GradientMesh';
import { comparisons } from '@/data/comparisons';
import { createClient } from '@/utils/supabase/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AEOAnswerBlock from '@/components/AEOAnswerBlock';
import remarkGfm from 'remark-gfm';
import '../../blog/blog.css';
import '../../blog/article.css';

const mdxComponents = {
  AEOAnswerBlock
};

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  }
};

export const revalidate = 0; // Ensures fresh data from DB

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  
  // Check Supabase first (pSEO engine)
  const { data: dbPage } = await supabase
    .from('competitor_pages')
    .select('*')
    .eq('slug', resolvedParams.competitor)
    .single();

  if (dbPage) {
    return {
      title: `${dbPage.title} | NexaWorks Comparison`,
      description: dbPage.excerpt,
      alternates: {
        canonical: `https://nexaworks.tech/vs/${dbPage.slug}`
      }
    };
  }

  // Fallback to static
  const comparison = comparisons.find((c) => c.slug === resolvedParams.competitor);
  if (!comparison) return { title: 'Comparison Not Found' };

  return {
    title: `NexaWorks vs ${comparison.competitorName} | Comparison`,
    description: comparison.verdict,
    alternates: {
      canonical: `https://nexaworks.tech/vs/${comparison.slug}`
    }
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();
  
  // 1. Try to fetch from the pSEO Engine
  const { data: dbPage } = await supabase
    .from('competitor_pages')
    .select('*')
    .eq('slug', resolvedParams.competitor)
    .single();

  if (dbPage) {
    return (
      <main className="blog-page" style={{ paddingTop: '120px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <header style={{ marginBottom: '64px' }}>
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.05em' }}>COMPETITIVE ANALYSIS</span>
            <h1 style={{ fontSize: '48px', fontFamily: 'ui-serif, Georgia, serif', lineHeight: 1.1, margin: '24px 0' }}>
              {dbPage.title}
            </h1>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              {dbPage.excerpt}
            </p>
          </header>
          <article className="article-content">
            <MDXRemote source={dbPage.content} components={mdxComponents} options={mdxOptions} />
          </article>
          
          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '64px 0' }} />

          <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.1)', padding: '48px', borderRadius: '24px', textAlign: 'center', marginBottom: '64px' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '16px', fontFamily: 'ui-serif, Georgia, serif' }}>Tired of {dbPage.competitor_name}'s limitations?</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              Stop overpaying for rigid legacy systems. See how NexaWorks can rebuild your automation pipelines to be faster, cheaper, and 100% deterministic.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '16px', transition: 'transform 0.2s ease' }}>
              Get a Free Architectural Audit
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // 2. Fallback to static legacy code
  const comparison = comparisons.find((c) => c.slug === resolvedParams.competitor);
  if (!comparison) {
    notFound();
  }

  return (
    <main>
      <GradientMesh>
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
          <div className="container">
            <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>COMPARISON</span>
            <h1 className="heading-1">NexaWorks vs {comparison.competitorName}</h1>
          </div>
        </section>
      </GradientMesh>

      <section className="section" style={{ background: 'var(--color-canvas)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="card-elevated" style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0.5rem', marginBottom: '3rem' }}>
            <h2 className="heading-sm" style={{ marginBottom: '0.5rem', color: 'var(--color-ink)' }}>Executive Summary</h2>
            <p className="body-md">
              <strong>Bottom Line:</strong> When comparing NexaWorks to {comparison.competitorName}, the primary difference is {comparison.keyDifference.toLowerCase()} {comparison.verdict}
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '4rem' }}>
            <div className="card" style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '8px' }}>
              <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Their Approach</h2>
              <h3 className="heading-4" style={{ marginBottom: '1rem', color: 'var(--color-muted)' }}>{comparison.competitorName}</h3>
              <p className="text-body">{comparison.theirApproach}</p>
            </div>
            
            <div className="card" style={{ background: 'var(--color-surface-elevated)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--color-primary)' }}>
              <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Our Approach</h2>
              <h3 className="heading-4" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>NexaWorks</h3>
              <p className="text-body">{comparison.ourApproach}</p>
            </div>
          </div>

          <div className="card" style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '8px', textAlign: 'center', marginBottom: '4rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1rem' }}>The Key Difference</h3>
            <p className="text-lg">{comparison.keyDifference}</p>
          </div>

          <div className="card-elevated" style={{ padding: '3rem', borderRadius: '8px', background: 'var(--color-surface-elevated)' }}>
            <h3 className="heading-2" style={{ marginBottom: '1.5rem' }}>The Verdict</h3>
            <p className="text-lg" style={{ marginBottom: '2rem' }}>{comparison.verdict}</p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 className="heading-3" style={{ marginBottom: '1.5rem' }}>Ready to experience Context Reconstruction?</h3>
            <Link href="/contact" className="button button-primary">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
