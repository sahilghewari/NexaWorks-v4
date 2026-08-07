import { MetadataRoute } from 'next';
import { workflows } from '@/data/workflows';
import { contexts } from '@/data/contexts';
import { comparisons } from '@/data/comparisons';
import { glossaryTerms } from '@/data/glossaryTerms';
import { blogPosts } from '@/data/blogPosts';
import integrations from '@/data/integrations.json';
import glossaryJson from '@/data/glossary.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexaworks.tech';

  // Static core routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/product',
    '/solutions',
    '/pricing',
    '/research',
    '/research/context-reconstruction-index',
    '/research/state-of-enterprise-ai-2026',
    '/research/global-roi-index',
    '/research/academic-partnerships',
    '/infrastructure-playbooks',
    '/tools',
    '/tools/context-score',
    '/tools/roi-calculator',
    '/tools/eu-ai-act-assessor',
    '/tools/mcp-architecture-generator',
    '/tools/rag-simulator',
    '/tools/schema-generator',
    '/benchmarks',
    '/benchmarks/document-ai',
    '/benchmarks/error-database',
    '/benchmarks/llmops-observability-matrix',
    '/security',
    '/careers',
    '/open-source',
    '/docs',
    '/docs/methodology',
    '/docs/mcp-integrations',
    '/docs/swarm-api',
    '/blog',
    '/glossary'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Routes
  const workflowRoutes = workflows.map((item) => ({
    url: `${baseUrl}/workflows/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const contextRoutes = contexts.map((item) => ({
    url: `${baseUrl}/context/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const comparisonRoutes = comparisons.map((item) => ({
    url: `${baseUrl}/vs/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((item) => ({
    url: `${baseUrl}/blog/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const integrationRoutes = integrations.map((item: any) => ({
    url: `${baseUrl}/integrations/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Combine glossary sources
  const glossarySlugs = new Set([
    ...glossaryTerms.map(t => t.term),
    ...glossaryJson.map((t: any) => t.slug)
  ]);

  const glossaryRoutes = Array.from(glossarySlugs).map((slug) => ({
    url: `${baseUrl}/glossary/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // US Architecture Niches
  const usNiches = [
    '/us-architecture/async-llm-refactoring',
    '/us-architecture/pydantic-clinical-extraction',
    '/us-architecture/sales-engineering-rag',
    '/us-architecture/sla-telemetry-monitoring',
    '/us-architecture/freelance-agency-rfp'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // India Automation Niches
  const inNiches = [
    '/in-automation/dpdp-act-pii-redaction',
    '/in-automation/tally-erp-bi-pipelines',
    '/in-automation/whatsapp-saas-telemetry',
    '/in-automation/cre-lease-abstraction'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    ...staticRoutes, 
    ...workflowRoutes, 
    ...contextRoutes, 
    ...comparisonRoutes, 
    ...blogRoutes,
    ...integrationRoutes,
    ...glossaryRoutes,
    ...usNiches, 
    ...inNiches
  ];
}
