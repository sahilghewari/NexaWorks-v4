export const contexts = [
  {
    slug: 'enterprise-sales-discovery',
    title: 'Context for Enterprise Sales Discovery',
    useCase: 'B2B Sales',
    dataSources: ['Salesforce', 'LinkedIn', 'Gmail', 'Gong Transcripts'],
    contextBrief: 'A unified timeline of the account, recent intent signals from emails, competitive mentions from past calls, and key stakeholders mapped.',
    impact: 'Increases conversion rate from Discovery to Demo by 35% by eliminating redundant questioning.',
  },
  {
    slug: 'clinical-patient-handoff',
    title: 'Context for Clinical Patient Handoffs',
    useCase: 'Healthcare',
    dataSources: ['Epic/Cerner (EHR)', 'Nursing Notes', 'Lab Results (HL7)'],
    contextBrief: 'A highly structured summary of active problems, changes in the last 12 hours, pending lab results, and medication reconciliation.',
    impact: 'Reduces medical errors during shift changes by 60%.',
  },
  {
    slug: 'sev1-incident-response',
    title: 'Context for Sev-1 Incident Response',
    useCase: 'Engineering / SRE',
    dataSources: ['Datadog', 'PagerDuty', 'GitHub PRs', 'Jira Incidents'],
    contextBrief: 'A dependency graph of the failing service, recent deployments in the last 4 hours, and historical runbooks used for similar alerts.',
    impact: 'Cuts Mean Time to Resolution (MTTR) by 45%.',
  },
  {
    slug: 'legal-contract-review',
    title: 'Context for Legal Contract Review',
    useCase: 'Legal / Compliance',
    dataSources: ['Ironclad', 'SharePoint', 'Email Threads', 'Regulatory Database'],
    contextBrief: 'Redlined deviations from standard clauses, historical precedent for this specific vendor, and compliance risk flags based on current EU AI Act requirements.',
    impact: 'Reduces manual review time from 6 hours to 20 minutes.',
  }
];
