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
  },
  {
    slug: 'ma-due-diligence',
    title: 'M&A Due Diligence',
    category: 'Finance',
    problem: 'During M&A due diligence, finance and legal teams spend hundreds of hours manually reviewing thousands of documents in a data room to identify risks, liabilities, and structural anomalies.',
    currentProcess: 'Open secure data room → download hundreds of PDFs → read each contract manually → cross-reference with financial statements → log findings in a master spreadsheet → review with partners.',
    contextLoss: 'Reviewers suffer from fatigue and miss subtle clauses hidden deep in contracts. Important connections between financial anomalies and legal liabilities are overlooked.',
    reconstructedProcess: 'NexaWorks deterministically reconstructs the data room context: identifying all non-standard clauses, mapping liabilities to financial disclosures, and building a risk matrix — delivered as an executive diligence brief.',
    roi: 'Reduces diligence phase by 3 weeks. Improves risk identification accuracy by 85%.'
  },
  {
    slug: 'soc2-audit-prep',
    title: 'SOC2 Audit Preparation',
    category: 'Security',
    problem: 'Security compliance teams spend weeks manually gathering evidence across AWS, GitHub, Jira, and HR systems to prove SOC2 controls are being actively followed before an auditor arrives.',
    currentProcess: 'Check compliance framework requirements → open AWS console to screenshot IAM roles → open GitHub to verify PR approvals → check Jira for access requests → compile evidence into Vanta/Drata or a massive Google Drive folder.',
    contextLoss: 'Evidence gathering is fragmented. Minor gaps in control adherence are missed until the auditor flags them as exceptions.',
    reconstructedProcess: 'NexaWorks continuously reconstructs compliance context: validating IAM configurations, pulling PR approval history, and verifying offboarding workflows — generating ready-to-present evidence briefs tied directly to SOC2 controls.',
    roi: 'Cuts audit prep time by 75%. Eliminates pre-audit panic and reduces the chance of audit exceptions to near zero.'
  },
  {
    slug: 'it-helpdesk-escalation',
    title: 'IT Helpdesk Escalation',
    category: 'Engineering',
    problem: 'When L1 support escalates a complex IT ticket to L2 or L3 engineering, they rarely provide enough technical context. The senior engineer has to start debugging from scratch.',
    currentProcess: 'Receive Jira ticket → see vague description ("Database is slow") → ping L1 for more info → wait 2 hours → ask user for reproduction steps → check logs manually → piece together the timeline.',
    contextLoss: 'L2 engineers waste expensive hours doing L1 triage. Users experience extended downtime. Frustration builds between support tiers.',
    reconstructedProcess: 'NexaWorks reconstructs the ticket context upon escalation: analyzing the user\'s recent system activity, pulling relevant error logs, checking for similar historical tickets, and summarizing the timeline — attached directly to the Jira escalation.',
    roi: 'Reduces L2 resolution time by 50%. Deflects 20% of escalations back to L1 with automated diagnostic steps.'
  },
  {
    slug: 'legal-ediscovery-prep',
    title: 'Legal eDiscovery Preparation',
    category: 'Legal',
    problem: 'In response to litigation or subpoenas, paralegals and junior associates spend hundreds of billable hours manually reading through gigabytes of emails and chat logs to find relevant communications.',
    currentProcess: 'Export data from Google Vault/O365 → load into Relativity → run keyword searches → manually review thousands of false positives → tag relevant documents → build chronological timeline.',
    contextLoss: 'Keyword searches miss nuances, slang, or indirect references. Reviewers lose the overarching narrative when reading fragmented, out-of-order communications.',
    reconstructedProcess: 'NexaWorks uses GraphRAG to reconstruct the communication context: identifying narrative threads, mapping relationships between key actors, and surfacing conceptually relevant documents regardless of keyword match — delivered as a chronological case narrative.',
    roi: 'Reduces eDiscovery review time by 60%. Uncovers critical evidence that standard keyword searches miss.'
  },
  {
    slug: 'enterprise-product-launch',
    title: 'Enterprise Product Launch',
    category: 'Marketing',
    problem: 'Product marketing managers (PMMs) struggle to keep sales, support, and marketing teams aligned during a major product launch, as information is scattered across Google Docs, Jira, and Figma.',
    currentProcess: 'PMM updates master Google Doc → pings sales enablement on Slack → checks Jira for delayed features → updates the release notes → realizes support team is using an outdated FAQ.',
    contextLoss: 'Go-to-market teams operate on stale information. Sales reps pitch features that were cut. Support agents are blindsided by customer questions on launch day.',
    reconstructedProcess: 'NexaWorks reconstructs launch context daily: syncing Jira feature status, summarizing new Figma designs, and updating the master FAQ — delivering a unified, real-time "Launch Brief" to all GTM teams.',
    roi: 'Ensures 100% GTM alignment. Reduces pre-launch meetings by 12 hours per week.'
  },
  {
    slug: 'vendor-risk-assessment',
    title: 'Vendor Risk Assessment',
    category: 'Procurement',
    problem: 'Procurement teams must manually evaluate lengthy security questionnaires, SOC2 reports, and financial statements to assess the risk of onboarding a new enterprise software vendor.',
    currentProcess: 'Receive 100-page SOC2 report → read PDF to find exceptions → review 200-question security survey → check external news for breaches → compile a vendor risk summary for approval.',
    contextLoss: 'Reviewers miss critical exceptions buried in page 84 of the SOC2 report. The context of the vendor\'s data access is disconnected from their security posture.',
    reconstructedProcess: 'NexaWorks reconstructs the vendor risk context: parsing the SOC2 for exceptions, cross-referencing survey answers with actual documentation, and pulling external breach history — delivered as a concise Vendor Risk Brief.',
    roi: 'Reduces vendor onboarding time from 3 weeks to 3 days. Improves risk detection accuracy.'
  },
  {
    slug: 'churn-risk-intervention',
    title: 'Churn Risk Intervention',
    category: 'Customer Success',
    problem: 'When a major enterprise account shows signs of churn, Customer Success Leaders scramble to gather context on product usage, recent support tickets, and executive relationship health before an intervention call.',
    currentProcess: 'Check Amplitude for usage drops → check Zendesk for angry tickets → review Salesforce for contract terms → ping the Account Executive in Slack → try to schedule a save call blind.',
    contextLoss: 'The CS Leader enters the intervention call without understanding the full timeline of the customer\'s frustration, leading to ineffective "save" attempts.',
    reconstructedProcess: 'NexaWorks reconstructs the account health context: summarizing the last 6 months of support tickets, highlighting usage drop-offs, identifying key champion departures, and drafting an intervention strategy — delivered before the save call.',
    roi: 'Increases enterprise churn save rate by 15%. Equips CS Leaders with complete context instantly.'
  },
  {
    slug: 'rfp-response-assembly',
    title: 'RFP Response Assembly',
    category: 'Sales Engineering',
    problem: 'Sales Engineers and Bid Managers spend days manually answering 200+ question RFPs by searching through old proposals, Confluence wikis, and pinging product managers for updated answers.',
    currentProcess: 'Receive Excel RFP → search past RFPs for similar questions → copy/paste old answers → realize the feature changed → ping PM on Slack → wait for response → format document.',
    contextLoss: 'The company submits outdated, inaccurate technical answers because the SE relied on a year-old proposal. The narrative of the RFP is disjointed.',
    reconstructedProcess: 'NexaWorks reconstructs the RFP context: using deterministic retrieval to pull the exact, approved answers from the current product knowledge base and tailoring the tone to the specific prospect — drafting 80% of the RFP instantly.',
    roi: 'Reduces RFP response time from 40 hours to 4 hours. Ensures 100% technical accuracy.'
  }
];
