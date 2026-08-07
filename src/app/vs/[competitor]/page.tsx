import Link from 'next/link';
import { notFound } from 'next/navigation';
import GradientMesh from '@/components/GradientMesh';
import { comparisons } from '@/data/comparisons';

export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    competitor: comparison.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const comparison = comparisons.find((c) => c.slug === resolvedParams.competitor);

  if (!comparison) {
    return {
      title: 'Comparison Not Found',
    };
  }

  return {
    title: `NexaWorks vs ${comparison.competitorName} | Comparison`,
    description: comparison.verdict,
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
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
