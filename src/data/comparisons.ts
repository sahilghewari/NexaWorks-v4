export interface Comparison {
  slug: string;
  competitorName: string;
  category: string;
  ourApproach: string;
  theirApproach: string;
  keyDifference: string;
  verdict: string;
}

export const comparisons: Comparison[] = [
  {
    slug: 'enterprise-search',
    competitorName: 'Enterprise Search (Glean, Coveo)',
    category: 'Search vs Assembly',
    theirApproach: 'Indexes documents and returns a list of links based on keyword relevance or semantic similarity. Requires the user to open multiple tabs, read the documents, and synthesize the context manually.',
    ourApproach: 'Deterministically retrieves specific data points across systems and automatically synthesizes a unified Context Brief structured specifically for the user\'s current workflow state.',
    keyDifference: 'Search finds documents. Context Reconstruction builds understanding.',
    verdict: 'Use Enterprise Search when you want to find a specific file. Use NexaWorks when you need complete context before a meeting, decision, or ticket resolution without doing the synthesis yourself.'
  },
  {
    slug: 'conversational-ai',
    competitorName: 'Conversational AI (ChatGPT Enterprise, Copilot)',
    category: 'Reactive vs Proactive',
    theirApproach: 'Waits for the user to write a prompt. Operates largely as a reactive assistant that requires the user to know what questions to ask and what data to upload.',
    ourApproach: 'Proactively monitors workflow state (e.g., deal stage change, meeting start time, incident creation) and automatically delivers reconstructed context before the user even has to ask.',
    keyDifference: 'Conversational AI requires prompting. Context Reconstruction is autonomous and proactive.',
    verdict: 'Conversational AI is great for drafting emails or brainstorming. NexaWorks is required when you need guaranteed, validated context assembled from 5 different systems automatically.'
  },
  {
    slug: 'rpa',
    competitorName: 'RPA (UiPath, Automation Anywhere)',
    category: 'Rigid vs Adaptive',
    theirApproach: 'Records screen clicks and runs brittle scripts that break immediately if a UI changes by a single pixel. Requires massive maintenance overhead.',
    ourApproach: 'Uses semantic understanding and Computer Use agents to navigate interfaces dynamically. If a button moves, the agent understands the goal and adapts to the new UI instantly.',
    keyDifference: 'RPA is deterministic execution without understanding. NexaWorks is semantic execution with reasoning.',
    verdict: 'RPA is for highly standardized, never-changing legacy data entry. NexaWorks is for complex knowledge work workflows where context is scattered across modern and legacy systems.'
  },
  {
    slug: 'custom-langchain',
    competitorName: 'In-House LangChain/LlamaIndex Builds',
    category: 'Build vs Buy',
    theirApproach: 'Engineering teams spend 6-12 months building RAG pipelines, managing vector databases, writing evaluation frameworks, and fighting hallucinations in production.',
    ourApproach: 'An enterprise-grade Context Reconstruction platform ready on day one. Pre-built MCP integrations, deterministic Pydantic routing, GraphRAG validation, and SOC2/EU AI Act compliance out of the box.',
    keyDifference: 'Building in-house traps your best engineers in maintenance mode. NexaWorks delivers the outcome immediately.',
    verdict: 'Only build in-house if AI infrastructure is your core product. For everyone else, NexaWorks delivers production-ready Context Reconstruction in weeks, not years.'
  }
];
