import { MetadataRoute } from 'next';

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
    '/infrastructure-playbooks',
    '/tools/context-score'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Workflow Routes
  const workflowRoutes = [
    'pre-meeting-research',
    'customer-onboarding-handoff',
    'deal-review-preparation',
    'clinical-patient-handoff',
    'incident-response-context',
    'quarterly-business-review'
  ].map((slug) => ({
    url: `${baseUrl}/workflows/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
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

  // Comparison Routes
  const comparisonRoutes = [
    'enterprise-search',
    'conversational-ai',
    'rpa',
    'custom-langchain'
  ].map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Context Routes
  const contextRoutes = [
    'enterprise-sales-discovery',
    'clinical-patient-handoff',
    'sev1-incident-response',
    'legal-contract-review'
  ].map((slug) => ({
    url: `${baseUrl}/context/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...workflowRoutes, ...usNiches, ...inNiches, ...comparisonRoutes, ...contextRoutes];
}
