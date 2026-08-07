import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { contexts } from '@/data/contexts';
import GradientMesh from '@/components/GradientMesh';
import Link from 'next/link';

interface ContextPageProps {
  params: Promise<{
    'use-case': string;
  }>;
}

export function generateStaticParams() {
  return contexts.map((context) => ({
    'use-case': context.slug,
  }));
}

export async function generateMetadata({ params }: ContextPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const contextData = contexts.find((c) => c.slug === resolvedParams['use-case']);

  if (!contextData) {
    return {
      title: 'Context Not Found - NexaWorks',
    };
  }

  return {
    title: `${contextData.title} | NexaWorks Context Reconstruction`,
    description: `How NexaWorks reconstructs context for ${contextData.useCase} to drive impact.`,
  };
}

export default async function ContextPage({ params }: ContextPageProps) {
  const resolvedParams = await params;
  const contextData = contexts.find((c) => c.slug === resolvedParams['use-case']);

  if (!contextData) {
    notFound();
  }

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--color-surface)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <GradientMesh>
        <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '160px 0 120px' }}>
          <div className="container relative z-10 text-center">
            <span className="tag mb-6 inline-block uppercase text-emerald-400 font-semibold tracking-widest">{contextData.useCase}</span>
            <h1 className="display-xxl mb-6 text-white">Context Reconstruction for {contextData.title.replace('Context for ', '')}</h1>
            <p className="body-lg text-slate-300 max-w-3xl mx-auto">
              Unifying fragmented data into a cohesive reality for {contextData.useCase} teams.
            </p>
          </div>
        </section>
      </GradientMesh>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        
        {/* Section 1: Fragmented Reality */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Fragmented Reality
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {contextData.dataSources.map((source, idx) => (
              <div 
                key={idx} 
                className="flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                {source}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Reconstructed Brief */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Reconstructed Brief
          </h2>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 shadow-md dark:border-emerald-900/50 dark:bg-emerald-950/20">
            <p className="text-xl leading-relaxed text-emerald-900 dark:text-emerald-100">
              {contextData.contextBrief}
            </p>
          </div>
        </div>

        {/* Section 3: Impact */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Impact
          </h2>
          <div className="rounded-2xl bg-indigo-600 p-8 text-white shadow-lg sm:p-12">
            <p className="text-center text-2xl font-semibold sm:text-3xl">
              "{contextData.impact}"
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Ready to unify your context?
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 px-8 font-medium text-white transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Contact Sales
          </Link>
        </div>

      </div>
    </div>
  );
}
