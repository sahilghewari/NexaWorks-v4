import { notFound } from 'next/navigation';
import Link from 'next/link';
import { workflows } from '@/data/workflows';

export async function generateStaticParams() {
  return workflows.map((workflow) => ({
    workflow: workflow.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ workflow: string }> }) {
  const resolvedParams = await params;
  const workflow = workflows.find((w) => w.slug === resolvedParams.workflow);
  
  if (!workflow) {
    return {
      title: 'Workflow Not Found | NexaWorks',
    };
  }

  return {
    title: `${workflow.title} - Context Reconstruction | NexaWorks`,
    description: workflow.problem,
    alternates: {
      canonical: `https://nexaworks.tech/workflows/${workflow.slug}`
    }
  };
}

export default async function WorkflowPage({ params }: { params: Promise<{ workflow: string }> }) {
  const resolvedParams = await params;
  const workflow = workflows.find((w) => w.slug === resolvedParams.workflow);

  if (!workflow) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink)' }}>
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/solutions" className="link" style={{ display: 'inline-block', marginBottom: '2rem' }}>
            &larr; Back to Solutions
          </Link>
          
          <div style={{ marginBottom: '3rem' }}>
            <span className="tag micro-cap" style={{ display: 'inline-block', marginBottom: '1rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-hairline)', borderRadius: '999px' }}>
              {workflow.category}
            </span>
            <h1 className="display-xl" style={{ marginBottom: '1rem' }}>{workflow.title}</h1>
            <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', marginBottom: '2rem' }}>
              How NexaWorks eliminates context loss for {workflow.title.toLowerCase()}.
            </p>
            
            <div className="card-elevated" style={{ padding: '1.5rem', backgroundColor: 'var(--color-surface)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0.5rem', marginBottom: '2rem' }}>
              <h2 className="heading-sm" style={{ marginBottom: '0.5rem', color: 'var(--color-ink)' }}>Executive Summary</h2>
              <p className="body-md">
                <strong>Bottom Line:</strong> The primary challenge in {workflow.title.toLowerCase()} is {workflow.problem.toLowerCase()} By implementing NexaWorks Context Reconstruction, teams can move from manual context gathering to an automated state where {workflow.reconstructedProcess.toLowerCase()} This delivers an immediate impact of {workflow.roi.toLowerCase()}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card-elevated" style={{ padding: '2rem', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', borderRadius: '0.75rem' }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>The Problem</h2>
              <p className="body-md">{workflow.problem}</p>
            </div>

            <div className="card-elevated" style={{ padding: '2rem', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', borderRadius: '0.75rem' }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Current Process</h2>
              <p className="body-md" style={{ fontFamily: 'monospace', padding: '1rem', backgroundColor: 'var(--color-hairline)', borderRadius: '0.5rem' }}>
                {workflow.currentProcess}
              </p>
            </div>

            <div className="card-elevated" style={{ padding: '2rem', backgroundColor: 'var(--color-canvas)', border: '2px solid #eab308', borderRadius: '0.75rem' }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem', color: '#ca8a04' }}>The Context Loss</h2>
              <p className="body-md">{workflow.contextLoss}</p>
            </div>

            <div className="card-elevated" style={{ padding: '2rem', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', borderRadius: '0.75rem' }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem' }}>After Context Reconstruction</h2>
              <p className="body-md">{workflow.reconstructedProcess}</p>
            </div>

            <div className="card-elevated" style={{ padding: '2rem', backgroundColor: 'var(--color-canvas)', border: '2px solid var(--color-primary)', borderRadius: '0.75rem' }}>
              <h2 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Impact</h2>
              <p className="body-md"><strong>{workflow.roi}</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-canvas)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="cta-content" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="display-xl" style={{ marginBottom: '1.5rem', color: 'var(--color-canvas)' }}>Eliminate context loss in this workflow</h2>
            <Link href="/contact" className="btn-primary btn-on-dark-inverse" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink)', fontWeight: 'bold', borderRadius: '0.5rem', textDecoration: 'none' }}>
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
