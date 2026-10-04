export type SignalSource =
  | "crm"
  | "calls"
  | "tickets"
  | "product"
  | "billing"
  | "email";

export interface Signal {
  slug: string;
  name: string;
  source: SignalSource;
  sourceLabel: string;
  definition: string;
  detection: string;
  falsePositives: string;
  leadTime: string;
  fpRisk: "Low" | "Medium" | "High";
}

export interface SignalSourceInfo {
  slug: SignalSource;
  page: string;
  label: string;
  blurb: string;
  why: string;
  instrument: string;
  pitfalls: string;
}

export const signalSources: SignalSourceInfo[] = [
  {
    slug: "crm",
    page: "crm",
    label: "CRM",
    blurb:
      "Salesforce, HubSpot — where commercial truth lives: opportunities, contacts, activities, and contract history.",
    why: "Every renewal, escalation, and sponsor change leaves a record in the CRM. It is the only source that connects commercial outcomes to the humans involved. But CRM data is rep-entered, which makes it the most human source — and the most gamed. Read it as testimony, not telemetry: directionally true, individually noisy.",
    instrument:
      "Pull opportunity field history (close-date changes are the highest-value field in the building), contact role assignments and title changes, activity counts per contact role per account, and join support cases to accounts. The four queries that matter: close-date pushes, days since champion activity, sponsor-role changes, and case volume vs baseline.",
    pitfalls:
      "Activity logging discipline varies wildly by rep — “last activity date” lies when reps bulk-log Friday afternoons. Calibrate per-rep before trusting per-account. And never read a single note as signal; CRM signals work in patterns across touches, not anecdotes.",
  },
  {
    slug: "calls",
    page: "call-transcripts",
    label: "Call transcripts",
    blurb:
      "Gong, Chorus, Fireflies — what people actually say on QBRs, cadence calls, and escalations.",
    why: "Calls are where customers think out loud. Tone shifts before language does; absence patterns appear before complaints. A transcript is the only source that captures both what was said and who stopped showing up to say it.",
    instrument:
      "Track attendee lists across recurring call series (the absence signal), maintain a short phrase-pattern library for commercial and competitor language, and trend sentiment per account over 90 days — never judge a single call. Pair transcript signals with calendar data for the no-show pattern.",
    pitfalls:
      "Transcription mangles names and numbers, so verify entities before acting. Sentiment models need per-account calibration — a blunt New York buyer reads as “negative” to a generic model. And be transparent: customers should know calls are analyzed, ideally because you tell them it improves their service.",
  },
  {
    slug: "tickets",
    page: "support-tickets",
    label: "Support tickets",
    blurb:
      "Zendesk, Intercom, Freshdesk — the support queue is where frustration shows up first, in writing.",
    why: "Written frustration is deliberate — the customer chose those words and hit send. Tickets are timestamped, categorized, and already structured, which makes them the cheapest source to instrument and the hardest for anyone to argue with.",
    instrument:
      "Volume vs the account's own baseline, severity mix over time, reopen counts, intent classification on cancellation-adjacent topics, and CSAT trend. The five queries cover 90% of ticket signal value. Always exclude incident-tagged tickets from baselines.",
    pitfalls:
      "One platform outage skews every account at once — check account-specificity before flagging. CSAT suffers response bias (the angriest reply most). And tag hygiene decides everything: garbage tags in, garbage signals out.",
  },
  {
    slug: "product",
    page: "product-usage",
    label: "Product usage",
    blurb:
      "Mixpanel, Amplitude, your warehouse — what accounts do inside the product, not what they say about it.",
    why: "Usage is ground truth. But usage is not value — logins are vanity, breadth without depth is shelfware, and a busy dashboard can belong to an account that's already decided to leave. The signals below separate motion from meaning.",
    instrument:
      "Define the core cohort per account and track its DAU/WAU against its own peak; count distinct features touched per month; watch the top-decile power users individually; track API and integration event volume; compute the active-seat ratio monthly. Compare against the same period last year, not just last month.",
    pitfalls:
      "Seasonality moves usage without meaning — calibrate per segment. Telemetry changes masquerade as behavior changes: confirm with engineering before declaring a drop real. And never use global benchmarks; an account's only fair comparison is its own history.",
  },
  {
    slug: "billing",
    page: "billing-payments",
    label: "Billing & payments",
    blurb:
      "Stripe, Chargebee, NetSuite — money behavior rarely lies: late payments, downgrades, discount pressure.",
    why: "Nobody churns without the money changing first. Billing signals are late in the chain but brutally honest — a customer can fake enthusiasm on a call, but they can't fake paying the invoice.",
    instrument:
      "Days-to-pay per invoice vs the account's own history, ARR composition at every renewal (seats, modules, add-ons), dunning event counts, effective discount percentage term-over-term, requested term lengths, and contested-invoice counts. Six numbers, updated monthly.",
    pitfalls:
      "AP process changes, fiscal year-ends, and new finance leadership delay payments without meaning — distinguish process from intent. And the signal in dunning isn't the failure, it's the failure to fix it after the first retry.",
  },
  {
    slug: "email",
    page: "email-slack",
    label: "Email & Slack",
    blurb:
      "Gmail, Outlook, Slack Connect — the relationship layer: reply times, thread participants, ritual engagement.",
    why: "Responsiveness is a measurable proxy for priority. You can compute exactly where you rank in a champion's week — and watch the rank change before the contract does. Participation patterns reveal committee dynamics no survey captures.",
    instrument:
      "Median reply latency per champion per month, distinct participants per thread per quarter, QBR and business-review completion vs plan, and message volume in shared channels. Metadata and patterns — not message content — carry most of the signal.",
    pitfalls:
      "This is the most privacy-sensitive source: analyze metadata and aggregate patterns, be transparent about it, and stay inside your data-processing agreements. Busy quarters slow everyone down — compare champions against their peers, not just their history.",
  },
];

export const signals: Signal[] = [
  // ---------------- CRM ----------------
  {
    slug: "stalled-expansion-pipeline",
    name: "Stalled expansion pipeline",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "An account approaching renewal with no open expansion or upsell opportunity, after a history of regular pipeline creation. Healthy accounts generate commercial motion; silence here means nobody inside is building a case to stay.",
    detection:
      "Compare opportunities created per account per quarter against the account's own 4-quarter baseline. Flag accounts in the final 120 days before renewal with zero open opportunities where the baseline is 1+.",
    falsePositives:
      "Some enterprise accounts buy on multi-year cycles with genuinely quiet middle years. Check contract structure before flagging.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "renewal-close-date-slippage",
    name: "Renewal close-date slippage",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "The renewal opportunity's close date is pushed repeatedly. One push is scheduling; three pushes is the customer telling you — politely — that signing is not a priority.",
    detection:
      "Count close-date changes on the renewal opportunity in the last 90 days via field history. Flag at 2+ pushes, escalate at 3+.",
    falsePositives:
      "Procurement calendars, budget freezes, and M&A can push dates without churn intent. Cross-check with champion engagement before acting.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "champion-goes-quiet",
    name: "Champion goes quiet",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "No logged activity (calls, emails, meetings) with the identified champion for 30+ days in an account that previously had weekly or biweekly contact. Relationships cool before contracts do.",
    detection:
      "For each account, track days since last activity logged against the champion contact role. Flag at 30 days, escalate at 45.",
    falsePositives:
      "Champions take leave; activity sometimes gets logged against the account but not the contact. Verify the contact-role mapping first.",
    leadTime: "45–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "executive-sponsor-change",
    name: "Executive sponsor change",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "The economic buyer or executive sponsor leaves, changes role, or goes unresponsive. New executives re-evaluate every vendor in their first 90 days — including you.",
    detection:
      "Monitor contact title/department changes and email bounces on sponsor-role contacts. Treat any sponsor departure within 6 months of renewal as high risk.",
    falsePositives:
      "An internal promotion can deepen the relationship — the new sponsor may be your former champion. Map the successor before assuming risk.",
    leadTime: "60–180 days",
    fpRisk: "Low",
  },
  {
    slug: "risk-language-in-notes",
    name: "Risk language in activity notes",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "Phrases like “evaluating alternatives”, “budget cut”, “leadership reviewing vendors” appear in call notes, tasks, or emails logged to the account. Reps hear the truth and write it down — then nobody reads it.",
    detection:
      "Keyword and phrase scan over activity descriptions and email bodies logged in the last 90 days. Keep the phrase list short and review hits manually — context matters.",
    falsePositives:
      "Negotiation posturing: “we're looking at competitors” is often a discount play. Distinguish one mention from a pattern across multiple touches.",
    leadTime: "30–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "support-cases-spike-pre-renewal",
    name: "Support cases spike pre-renewal",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "Cases linked to the account rise sharply in the two quarters before renewal. A rough last mile poisons the renewal conversation no matter how good the year was.",
    detection:
      "Join case records to the account; compare case count in the last 90 days against the prior 90. Flag at 2x baseline or 3+ P1/P2 cases.",
    falsePositives:
      "A platform-wide incident spikes every account at once — check whether the spike is account-specific before flagging.",
    leadTime: "30–90 days",
    fpRisk: "Low",
  },
  {
    slug: "contract-redlines-multiply",
    name: "Contract redlines multiply",
    source: "crm",
    sourceLabel: "CRM",
    definition:
      "Legal and procurement touches on the renewal paperwork run well above the prior term's count. Heavy redlining often means the deal is being re-justified from scratch.",
    detection:
      "Count contract versions, legal tasks, or procurement activities on the renewal vs the previous term. Flag at 2x prior-term activity.",
    falsePositives:
      "New procurement leadership or a first enterprise-grade MSA can inflate redlines without churn intent. Check who is driving the markup.",
    leadTime: "30–60 days",
    fpRisk: "Medium",
  },
  // ---------------- CALLS ----------------
  {
    slug: "sponsor-stops-attending",
    name: "Sponsor stops attending calls",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "The economic buyer attends the kickoff, then misses two consecutive QBRs or cadence calls while the champion keeps showing up. Absence is a decision expressed politely.",
    detection:
      "Track attendee lists on recurring call series per account. Flag when the sponsor-role attendee misses 2 consecutive scheduled calls they previously attended.",
    falsePositives:
      "Delegation to a trusted lieutenant is healthy in mature accounts. Check whether the replacement has real authority before flagging.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "contract-language-spike",
    name: "\"Remind me what we pay for\"",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "Questions about pricing, contract terms, and what's included spike in call transcripts. When customers start auditing the deal aloud, the renewal is already being litigated.",
    detection:
      "Phrase-pattern scan on transcripts: pricing, contract, renewal-terms, and cancellation-adjacent questions. Flag a rising trend over 3+ calls, not a single mention.",
    falsePositives:
      "New stakeholders legitimately need onboarding on the commercial relationship. Check attendee tenure before reading intent into it.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "sentiment-drop-trend",
    name: "Sentiment drop across calls",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "The emotional tone of customer calls trends negative over a quarter — more frustration markers, fewer positive outcome statements. Tone shifts before language does.",
    detection:
      "Run sentiment scoring per call, then trend the account's average over 90 days. Flag sustained 20%+ declines; ignore single-call dips.",
    falsePositives:
      "One bad incident or a difficult personality can skew a quarter. Require the trend across multiple calls and multiple speakers.",
    leadTime: "60–120 days",
    fpRisk: "High",
  },
  {
    slug: "competitor-named-by-customer",
    name: "Competitor named by the customer",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "The customer names a competitor unprompted — “we're looking at X”, “X offered us”. Unprompted mentions mean evaluation is already underway, not just beginning.",
    detection:
      "Maintain a competitor-name list; scan transcripts for mentions with surrounding context. Weight unprompted mentions far above answers to “who else are you considering?”.",
    falsePositives:
      "Classic discount leverage: naming a competitor to extract pricing. Look for depth — feature comparisons signal real evaluation, price talk signals negotiation.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "value-language-disappears",
    name: "Value language disappears",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "The customer stops talking about outcomes and results and talks only about tickets, features, and fixes. When the conversation becomes purely transactional, the relationship already is.",
    detection:
      "Track the ratio of outcome-words (results, ROI, goals, impact) to task-words (ticket, bug, feature, fix) per call. Flag a sustained inversion over a quarter.",
    falsePositives:
      "During active implementations the conversation is legitimately task-heavy. Compare against the account's own lifecycle stage, not a global benchmark.",
    leadTime: "60–180 days",
    fpRisk: "Medium",
  },
  {
    slug: "no-show-rate-climbs",
    name: "Meeting no-show rate climbs",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "Scheduled calls get skipped, rescheduled, or attended by substitutes increasingly often. Calendar behavior is the most honest engagement metric you have.",
    detection:
      "Compute attended vs scheduled rate per account per month from calendar/call data. Flag a 25%+ drop from the account's baseline.",
    falsePositives:
      "Reorgs, holidays, and quarter-end chaos move calendars without meaning. Require the pattern across 6+ weeks.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "new-stakeholder-fundamentals",
    name: "New stakeholder asks fundamentals late",
    source: "calls",
    sourceLabel: "Call transcripts",
    definition:
      "An unfamiliar attendee asks basic “what do you actually do” questions deep into the relationship. Either onboarding failed — or someone new is building the case to replace you.",
    detection:
      "Flag first-time attendees on established accounts whose questions map to vendor-evaluation patterns (capabilities, pricing, contract terms) rather than onboarding patterns.",
    falsePositives:
      "Genuine new hires need genuine onboarding. Check the attendee's role and tenure — evaluators ask about commercial terms, new users ask about workflows.",
    leadTime: "30–90 days",
    fpRisk: "High",
  },
  // ---------------- TICKETS ----------------
  {
    slug: "ticket-volume-spike",
    name: "Ticket volume spike vs baseline",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "Ticket volume runs at 2x or more of the account's rolling baseline. Volume alone doesn't predict churn — but a sustained spike means the product is consuming the customer's week, and patience is finite.",
    detection:
      "Compare tickets opened in the last 30 days against the account's 6-month rolling average. Flag at 2x; escalate if the spike persists into a second month.",
    falsePositives:
      "New rollouts, migrations, and known platform incidents spike every affected account. Exclude incident-tagged tickets before computing the baseline.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "severity-mix-shifts-up",
    name: "Severity mix shifts up",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "The share of P1/P2 tickets rises even if total volume is flat. Customers escalate severity when they stop believing normal channels will fix it — that's a trust signal, not a volume signal.",
    detection:
      "Track the percentage of tickets marked high/critical per account per month. Flag a sustained 2x increase in share over the account's baseline.",
    falsePositives:
      "A single outage generates a burst of P1s across accounts. Require the shift to persist beyond the incident window.",
    leadTime: "30–60 days",
    fpRisk: "Low",
  },
  {
    slug: "reopened-tickets-climb",
    name: "Reopened tickets climb",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "The same issues get reopened — the customer is telling you the fix didn't hold. Reopens are the support metric most correlated with “we've lost confidence in this vendor.”",
    detection:
      "Count tickets reopened 2+ times per account per quarter. Flag at 3+ reopens; weight reopens on issues the customer marked “resolved” themselves.",
    falsePositives:
      "Genuinely complex integrations produce legitimate reopens. Distinguish “fix didn't hold” reopens from “new symptom discovered” ones.",
    leadTime: "30–90 days",
    fpRisk: "Low",
  },
  {
    slug: "cancellation-adjacent-intents",
    name: "\"How do I export my data\" tickets",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "Tickets asking about data export, cancellation process, contract end dates, or API access for migration. Customers planning to leave ask how to take their data with them first.",
    detection:
      "Intent-classify tickets for export, cancellation, migration, and contract-end topics. Any single hit deserves a human look; two in a quarter is a pattern.",
    falsePositives:
      "Security reviews and data-residency audits generate export questions with zero churn intent. Check the requester's role — compliance teams ask differently than admins.",
    leadTime: "14–60 days",
    fpRisk: "Medium",
  },
  {
    slug: "ticket-sentiment-negative-trend",
    name: "Ticket sentiment turns negative",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "CSAT scores drop and negative language in ticket threads trends up over a quarter. Written frustration is deliberate — the customer chose those words.",
    detection:
      "Trend CSAT and text-sentiment per account over 90 days. Flag sustained declines; pair with volume to separate “angry and loud” from “quietly gone.”",
    falsePositives:
      "One bad support interaction or one difficult agent can tank a quarter's CSAT. Check agent-level distribution before blaming the account.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "sla-breaches-cluster",
    name: "SLA breaches cluster on one account",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "First-response or resolution SLA breaches concentrate on a single account while others stay clean. The account is experiencing a worse product than everyone else — and noticing.",
    detection:
      "Compare SLA breach rate per account against the portfolio average. Flag accounts running 3x the average over 60 days.",
    falsePositives:
      "Understaffed support pods breach SLAs broadly — check whether the cluster is account-specific or pod-wide before flagging.",
    leadTime: "30–90 days",
    fpRisk: "Low",
  },
  {
    slug: "champion-channel-shift",
    name: "Champion shifts to transactional channels",
    source: "tickets",
    sourceLabel: "Support tickets",
    definition:
      "The champion stops calling the CSM and starts filing tickets instead. The relationship is being downgraded from partnership to vendor — quietly, through channel choice.",
    detection:
      "Compare the champion's ticket-filing rate vs direct CSM touch rate over time. Flag when ticket share of their interactions doubles from baseline.",
    falsePositives:
      "Some champions genuinely prefer async written channels. Establish the individual's baseline before reading intent into the shift.",
    leadTime: "60–120 days",
    fpRisk: "High",
  },
  // ---------------- PRODUCT ----------------
  {
    slug: "core-user-activity-drop",
    name: "Core user activity drop",
    source: "product",
    sourceLabel: "Product usage",
    definition:
      "Daily or weekly active users fall 30%+ over 60 days among the account's core user cohort. Usage is the ground truth — everything else is commentary.",
    detection:
      "Define the core cohort (users active 3+ days/week at peak); track cohort DAU/WAU vs its own peak. Flag sustained 30%+ declines over 60 days.",
    falsePositives:
      "Seasonality, holidays, and industry cycles move usage without meaning. Compare against the same period last year, not just last month.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "feature-breadth-narrows",
    name: "Feature breadth narrows",
    source: "product",
    sourceLabel: "Product usage",
    definition:
      "The account uses fewer distinct modules or features than it did 90 days ago. Shrinking footprints precede shrinking contracts — customers consolidate onto what works, then question the rest.",
    detection:
      "Count distinct features/modules touched per account per month. Flag 30%+ contraction sustained over 90 days.",
    falsePositives:
      "Completed project phases legitimately narrow usage. Check whether the contraction maps to a finished initiative before flagging.",
    leadTime: "90–180 days",
    fpRisk: "Medium",
  },
  {
    slug: "power-user-attrition",
    name: "Power-user attrition",
    source: "product",
    sourceLabel: "Product usage",
    definition:
      "The top decile of users by activity goes dark. Power users are your internal advocates — when they leave or disengage, the account's immune system is gone.",
    detection:
      "Identify each account's top 10% of users by activity; alert when 30%+ of them show zero activity for 30 days.",
    falsePositives:
      "Role changes, parental leave, and reorgs move individuals. Check HR-level changes (title/department in CRM) before reading account risk.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "integration-usage-decline",
    name: "API and integration usage decline",
    source: "product",
    sourceLabel: "Product usage",
    definition:
      "Programmatic usage — API calls, webhook deliveries, integration syncs — declines steadily. When the pipes go quiet, the product is being unwired from the customer's stack.",
    detection:
      "Track API/integration event volume per account vs its 90-day baseline. Flag 40%+ sustained declines; sudden drops to zero are migration events, not drift.",
    falsePositives:
      "Endpoint migrations and SDK upgrades shift traffic patterns without meaning. Confirm with engineering that the decline isn't a telemetry change.",
    leadTime: "60–180 days",
    fpRisk: "Low",
  },
  {
    slug: "seat-utilization-falls",
    name: "Seat utilization falls",
    source: "product",
    sourceLabel: "Product usage",
    definition:
      "Active seats divided by purchased seats drops below half and keeps falling. Shelfware is the easiest line item to cut at renewal — it's pre-justified.",
    detection:
      "Compute active-seat ratio monthly per account. Flag below 50% with a declining trend; escalate below 30%.",
    falsePositives:
      "Hiring freezes and layoffs cut active users without any dissatisfaction. Pair with engagement-per-active-user to separate contraction from disengagement.",
    leadTime: "90–180 days",
    fpRisk: "Medium",
  },
  {
    slug: "new-team-activation-stalls",
    name: "New team activation stalls",
    source: "product",
    sourceLabel: "Product usage",
    definition:
      "A newly added business unit or team never reaches the activation milestone the sales team promised. Failed land-and-expand poisons the whole account's expansion story.",
    detection:
      "Define activation per use case (e.g., 5 active users + core workflow completed); flag new cohorts that miss it within 2x the normal time-to-value.",
    falsePositives:
      "Enterprise onboarding is legitimately slow — some industries take quarters. Calibrate “normal” per segment, not globally.",
    leadTime: "90–180 days",
    fpRisk: "Medium",
  },
  // ---------------- BILLING ----------------
  {
    slug: "late-payments-start",
    name: "Late payments start",
    source: "billing",
    sourceLabel: "Billing & payments",
    definition:
      "Invoices that were always paid on time start arriving 15+ days late. Payment behavior changes before anyone says the relationship is strained — money moves first.",
    detection:
      "Track days-to-pay per invoice per account vs its own history. Flag the first 15+ day late payment after 4+ quarters of on-time payment.",
    falsePositives:
      "AP system changes, new finance leadership, or fiscal year-ends delay payments without meaning. Check whether the delay is process or intent.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "seats-modules-cut",
    name: "Seats or modules cut",
    source: "billing",
    sourceLabel: "Billing & payments",
    definition:
      "The renewal order form comes back with fewer seats or dropped modules. Downsells are churn in installments — and they predict full churn better than any usage metric.",
    detection:
      "Compare ARR composition at each renewal: seats, modules, add-ons. Flag any reduction; treat module drops as higher risk than seat trims.",
    falsePositives:
      "Shelfware cleanup after an overbought initial deal is healthy. Distinguish “cutting what we never used” from “cutting what we stopped using.”",
    leadTime: "0–30 days",
    fpRisk: "Low",
  },
  {
    slug: "dunning-events-increase",
    name: "Payment failures increase",
    source: "billing",
    sourceLabel: "Billing & payments",
    definition:
      "Failed charges and dunning emails climb. Sometimes it's just expired cards — but a customer that wanted to stay would update the card after the first retry.",
    detection:
      "Count failed payment events per account per quarter. Flag 3+ failures with no successful update within 14 days of first failure.",
    falsePositives:
      "Card expirations and bank fraud holds are routine. The signal isn't the failure — it's the failure to fix it.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "discount-pressure-escalates",
    name: "Discount pressure escalates",
    source: "billing",
    sourceLabel: "Billing & payments",
    definition:
      "The discount demanded at renewal grows meaningfully versus the prior term. Escalating discount pressure means the perceived value is falling — price is the argument, value is the problem.",
    detection:
      "Compare effective discount % term over term. Flag increases of 10+ points; escalate when paired with any usage decline.",
    falsePositives:
      "Procurement teams are paid to ask. One round of discount pressure is process; a growing demand across terms is a value problem.",
    leadTime: "30–60 days",
    fpRisk: "Medium",
  },
  {
    slug: "shorter-term-requested",
    name: "Shorter term requested",
    source: "billing",
    sourceLabel: "Billing & payments",
    definition:
      "The customer asks to move from annual to quarterly or monthly billing. Shorter commitments are optionality purchases — they're buying the right to leave sooner.",
    detection:
      "Flag any requested term reduction at renewal, regardless of stated reason. Weight it higher when paired with stalled expansion.",
    falsePositives:
      "Cash management and budget cycles drive legitimate term shortening. Check whether the request comes with usage growth (healthy) or decline (risk).",
    leadTime: "30–60 days",
    fpRisk: "Medium",
  },
  {
    slug: "true-up-disputes",
    name: "Usage true-up disputes",
    source: "billing",
    sourceLabel: "Billing & payments",
    definition:
      "The customer contests overage or true-up charges. Disputed bills become disputed value — “we shouldn't pay this” turns into “this isn't worth paying for” fast.",
    detection:
      "Flag contested invoices and credit requests tied to usage overages. Two disputes in a term is a pattern worth a CSM call.",
    falsePositives:
      "Genuine billing errors happen — check your own metering before reading intent. A quick credit for a real error builds trust.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  // ---------------- EMAIL ----------------
  {
    slug: "champion-reply-latency-doubles",
    name: "Champion reply latency doubles",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "The champion's median email reply time doubles versus their baseline. Responsiveness is a proxy for priority — you can measure exactly where you rank in their week.",
    detection:
      "Compute median reply latency per champion per month from email metadata. Flag 2x baseline sustained over 60 days.",
    falsePositives:
      "Busy quarters, board prep, and reorgs slow everyone down. Compare against the champion's peers, not just their history.",
    leadTime: "60–120 days",
    fpRisk: "High",
  },
  {
    slug: "thread-participants-shrink",
    name: "Thread participants shrink",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "Email threads that used to include five colleagues now include one. The buying committee is disbanding — or the conversation moved somewhere you're not invited.",
    detection:
      "Track average distinct participants per account thread per quarter. Flag 40%+ contraction sustained over a quarter.",
    falsePositives:
      "Streamlined communication is sometimes just efficiency. Check whether the missing participants left the company or just the thread.",
    leadTime: "60–120 days",
    fpRisk: "High",
  },
  {
    slug: "value-rituals-skipped",
    name: "QBRs and business reviews skipped",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "QBRs get declined, rescheduled into oblivion, or attended by substitutes. Customers who see value protect the review; customers who don't, don't.",
    detection:
      "Track QBR/business-review completion rate per account vs plan. Flag 2 consecutive missed or downgraded reviews.",
    falsePositives:
      "Calendar collisions are real, especially in December and August. Require the pattern across two quarters before flagging.",
    leadTime: "60–120 days",
    fpRisk: "Medium",
  },
  {
    slug: "slack-connect-goes-quiet",
    name: "Shared Slack channel goes quiet",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "Messages per week in the shared Slack Connect channel drop 70%+ from baseline. The informal channel dying means the relationship moved — or ended — elsewhere.",
    detection:
      "Count messages per week in shared channels per account. Flag 70%+ drops sustained 4+ weeks.",
    falsePositives:
      "Teams migrate channels, especially after reorgs. Verify the channel is actually the live one before reading silence as signal.",
    leadTime: "30–90 days",
    fpRisk: "Medium",
  },
  {
    slug: "unknown-evaluator-looped-in",
    name: "Unknown evaluator looped into threads",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "A new address — often from a different department or an unknown domain — starts asking pointed questions in existing threads. Evaluations announce themselves in CC lines before they announce themselves in RFPs.",
    detection:
      "Flag first-time participants on established account threads whose messages contain evaluation-pattern questions (capabilities, pricing, terms, references).",
    falsePositives:
      "New hires genuinely need onboarding. Evaluators ask about commercial terms and alternatives; new users ask about workflows.",
    leadTime: "30–90 days",
    fpRisk: "High",
  },
  {
    slug: "detractor-feedback-ignored",
    name: "Detractor feedback goes unanswered",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "An NPS detractor or negative CSAT response gets no meaningful follow-up within two weeks. The survey asked for honesty; silence in return teaches the customer that feedback goes nowhere.",
    detection:
      "Join survey responses to follow-up activities. Flag detractor responses with no logged outreach within 14 days.",
    falsePositives:
      "Survey fatigue produces low-effort detractor scores that don't reflect real sentiment. Weight written comments far above bare scores.",
    leadTime: "60–180 days",
    fpRisk: "Medium",
  },
  {
    slug: "renewal-thread-to-procurement",
    name: "Renewal conversation moves to procurement only",
    source: "email",
    sourceLabel: "Email & Slack",
    definition:
      "The commercial thread leaves your users and lands solely with procurement. When the conversation becomes purely about price and terms, the value case has already been lost — or was never made.",
    detection:
      "Track participant roles on renewal-related threads. Flag when business users drop out and only procurement/finance remain for 3+ exchanges.",
    falsePositives:
      "Some companies route all renewals through procurement by policy. Establish the account's normal pattern before flagging the shift.",
    leadTime: "14–60 days",
    fpRisk: "Low",
  },
];
