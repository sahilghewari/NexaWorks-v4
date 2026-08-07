export interface Workflow {
  slug: string;
  title: string;
  problem: string;
  currentProcess: string;
  contextLoss: string;
  reconstructedProcess: string;
  roi: string;
  category: string;
}

export const workflows: Workflow[] = [
  {
    slug: 'pre-meeting-research',
    title: 'Pre-Meeting Research',
    category: 'Sales',
    problem: 'Sales reps spend 30-45 minutes before every prospect call manually searching CRM records, past email threads, LinkedIn profiles, and internal Slack channels to understand the customer context.',
    currentProcess: 'Open Salesforce → search contact → read notes → switch to Gmail → search threads → switch to Slack → search mentions → open LinkedIn → review profile → open last proposal → compile mental model.',
    contextLoss: 'Critical details from past interactions are missed. Reps ask questions the customer already answered. Deals stall because the buyer feels unheard.',
    reconstructedProcess: 'NexaWorks automatically assembles a Context Brief 15 minutes before the call: full contact history, last 5 interactions, open proposals, competitive signals, and relationship health score — delivered to Slack or email.',
    roi: 'Average 35 minutes saved per meeting. For a 10-person sales team taking 8 calls/day, this recovers 23,300 hours annually.'
  },
  {
    slug: 'customer-onboarding-handoff',
    title: 'Customer Onboarding Handoff',
    category: 'Customer Success',
    problem: 'When a deal closes, the transition from sales to customer success loses critical context. The CS team starts from scratch, asking the customer to repeat requirements that were already discussed extensively during the sales cycle.',
    currentProcess: 'CS manager receives a Slack message saying "deal closed." They open Salesforce, read incomplete notes, search for the proposal document, try to find the original RFP, and schedule a "kickoff call" that largely repeats the discovery process.',
    contextLoss: 'Customer frustration increases. Time-to-value extends by 2-3 weeks. Churn risk increases within the first 90 days.',
    reconstructedProcess: 'NexaWorks reconstructs the complete deal context: original requirements, technical constraints discussed, competitive alternatives evaluated, pricing negotiations, and key stakeholder preferences — delivered as a structured handoff brief the moment the deal stage changes.',
    roi: 'Reduces onboarding time by 40%. Cuts first-90-day churn risk by 25%.'
  },
  {
    slug: 'deal-review-preparation',
    title: 'Deal Review Preparation',
    category: 'Revenue Operations',
    problem: 'Sales managers spend hours before weekly pipeline reviews manually pulling data from CRM dashboards, reading individual deal notes, and trying to identify which deals are actually at risk versus which are sandbagged.',
    currentProcess: 'Export Salesforce report → cross-reference with Gong call recordings → check Slack for rep updates → review email threads for buyer signals → build a spreadsheet summary → present in meeting.',
    contextLoss: 'Managers enter reviews with incomplete data. At-risk deals are missed. Coaching opportunities are lost because the context of each deal is too shallow.',
    reconstructedProcess: 'NexaWorks reconstructs pipeline context: deal velocity trends, buyer engagement signals, competitive threat indicators, and coaching recommendations — delivered as a pre-meeting intelligence brief.',
    roi: 'Reduces pipeline review prep from 2 hours to 10 minutes. Increases forecast accuracy by 30%.'
  },
  {
    slug: 'clinical-patient-handoff',
    title: 'Clinical Patient Handoff',
    category: 'Healthcare',
    problem: 'When clinical shifts change, incoming providers must reconstruct the complete patient context from fragmented EHR notes, nursing assessments, lab results, and verbal handoffs — a process proven to cause medical errors.',
    currentProcess: 'Read EHR summary → review nursing notes → check lab results → ask outgoing provider verbal questions → review medication list → check pending orders → form mental model.',
    contextLoss: 'Critical details are missed during verbal handoffs. Medication reconciliation errors occur. Patient safety is compromised.',
    reconstructedProcess: 'NexaWorks reconstructs a structured patient context brief: active problems, recent changes, pending results, medication reconciliation, and outstanding tasks — delivered to the incoming provider before shift start.',
    roi: 'Reduces handoff errors by 60%. Saves 25 minutes per patient transition.'
  },
  {
    slug: 'incident-response-context',
    title: 'Incident Response Context',
    category: 'Engineering',
    problem: 'When a production incident fires at 3am, the on-call engineer must reconstruct the context of the affected system: recent deployments, related incidents, system dependencies, and runbook history — all while the system is down.',
    currentProcess: 'Open PagerDuty alert → check Datadog dashboards → search Slack for recent deployment mentions → open GitHub for recent PRs → find the runbook in Confluence → check if this happened before in Jira.',
    contextLoss: 'Mean Time to Resolution (MTTR) increases dramatically. Engineers waste critical minutes searching for context instead of fixing the issue.',
    reconstructedProcess: 'NexaWorks reconstructs incident context: related past incidents, recent deployments to affected services, system dependency map, relevant runbook sections, and owner contact information — delivered alongside the PagerDuty alert.',
    roi: 'Reduces MTTR by 45%. Eliminates the "context gathering" phase of incident response entirely.'
  },
  {
    slug: 'quarterly-business-review',
    title: 'Quarterly Business Review Preparation',
    category: 'Executive',
    problem: 'Preparing for a QBR requires synthesizing data from dozens of sources: CRM pipeline data, financial reports, customer health scores, product roadmap updates, competitive intelligence, and team performance metrics.',
    currentProcess: 'Request reports from 5+ teams → wait for responses → manually compile slides → cross-reference conflicting data → identify narrative threads → build executive summary.',
    contextLoss: 'QBR prep consumes 15-20 hours of executive and analyst time. Data is often stale by presentation day. Strategic decisions are delayed by information gathering.',
    reconstructedProcess: 'NexaWorks reconstructs QBR context: pipeline trends, revenue metrics, customer health indicators, product milestones, competitive movements, and team KPIs — assembled into a structured executive brief 48 hours before the review.',
    roi: 'Reduces QBR prep from 20 hours to 2 hours. Ensures all data is current and consistent.'
  }
];
