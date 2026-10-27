"use client";

import { useId, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardList,
  CornerDownRight,
  CreditCard,
  Database,
  Headphones,
  MessageSquareText,
  PenLine,
  Radar,
  TrendingUp,
} from "lucide-react";

const accounts = [
  {
    name: "Meridian",
    timing: "Renewal in 60 days",
    days: 60,
    status: "Review now",
    kind: "risk",
    signals: [
      {
        icon: MessageSquareText,
        source: "Call history",
        title: "The champion went quiet.",
        detail:
          "The champion missed the last three account calls. Confirm whether ownership or priorities have changed.",
        stamp: "Last 3 calls",
      },
      {
        icon: Database,
        source: "Product data",
        title: "Adoption is losing momentum.",
        detail:
          "Weekly active users fell from 128 to 100 over 30 days. Validate whether this reflects a change in the customer’s team or the value they receive.",
        stamp: "Past 30 days",
      },
      {
        icon: Headphones,
        source: "Support",
        title: "A critical issue remains open.",
        detail:
          "A P1 ticket has been open for four days. Confirm the blocker, its business impact and the resolution owner.",
        stamp: "4 days open",
      },
    ],
    action: "Reconnect on value. Before you reconnect on renewal.",
    next: "Arrange an alignment call with the sponsor. Confirm the renewal owner and a plan for the open issue.",
    draft: {
      subject: "A plan for the open issue and the adoption dip",
      body: [
        "Hi team, I want to make sure the open critical issue and the recent dip in adoption are fully resolved well before your renewal.",
        "Can we take 20 minutes this week to agree on the plan and the owners on both sides? I will bring a short summary of what we are fixing first.",
      ],
    },
  },
  {
    name: "Brightpath",
    timing: "Renewal in 21 days",
    days: 21,
    status: "Review now",
    kind: "risk",
    signals: [
      {
        icon: Database,
        source: "CRM",
        title: "The budget owner changed.",
        detail:
          "A new operations lead appeared as the account owner in the CRM last week. The renewal conversation now starts with someone who did not choose the product.",
        stamp: "Last week",
      },
      {
        icon: MessageSquareText,
        source: "Call history",
        title: "Two renewal calls were rescheduled.",
        detail:
          "The last two calls were moved by the customer and no new date was confirmed. Treat the silence as a signal, not a scheduling problem.",
        stamp: "Last 2 calls",
      },
      {
        icon: Database,
        source: "Product data",
        title: "The second team stopped logging in.",
        detail:
          "Usage from the second team fell to zero over the past two weeks while the first team stayed steady.",
        stamp: "Past 14 days",
      },
    ],
    action: "Meet the new owner before the renewal clock does.",
    next: "Ask your champion for an introduction to the new budget owner, and send the one page value summary before the call.",
    draft: {
      subject: "A quick introduction and a renewal plan",
      body: [
        "Hello, I understand the account has recently moved to you. Rather than wait for the renewal, I would like to share a short summary of the results your teams have seen so far, and hear what matters most to you.",
        "Would 20 minutes this week work? I will keep it to the results and the plan, nothing else.",
      ],
    },
  },
  {
    name: "Copperline",
    timing: "Renewal in 45 days",
    days: 45,
    status: "Review now",
    kind: "risk",
    signals: [
      {
        icon: Headphones,
        source: "Support",
        title: "Tickets went quiet instead of closing.",
        detail:
          "Three tickets stopped receiving replies from the customer after our last update. Quiet tickets usually mean the workaround failed, or the problem moved elsewhere.",
        stamp: "3 tickets",
      },
      {
        icon: Database,
        source: "Product data",
        title: "Logins narrowed to one team.",
        detail:
          "Four teams were active last quarter. Only one team has logged in during the past 30 days.",
        stamp: "Past 30 days",
      },
      {
        icon: CreditCard,
        source: "Billing",
        title: "The last invoice was paid 18 days late.",
        detail:
          "Payment timing slipped for the first time in a year. It can be a process change, or an early sign the budget is under review.",
        stamp: "Latest invoice",
      },
    ],
    action: "Clear the billing question and reopen the quiet tickets.",
    next: "Send one short note that closes the billing question and asks which of the three open tickets still matters most.",
    draft: {
      subject: "Closing the loop on the open items",
      body: [
        "Hi team, three things are still open on our side: the invoice query and the three support tickets that went quiet.",
        "I have put a one page status together for each. Tell me which one matters most and I will get it resolved this week.",
      ],
    },
  },
  {
    name: "Fieldway",
    timing: "Renewal in 73 days",
    days: 73,
    status: "Review now",
    kind: "risk",
    signals: [
      {
        icon: Database,
        source: "CRM",
        title: "The sponsor left the company.",
        detail:
          "The executive sponsor who signed the contract has left. No replacement owner is recorded in the CRM yet.",
        stamp: "This week",
      },
      {
        icon: Database,
        source: "Product data",
        title: "Weekly usage fell three weeks in a row.",
        detail:
          "Usage is down a third from its peak. The fall is steady rather than sudden, which points to a fading habit, not an outage.",
        stamp: "Past 3 weeks",
      },
      {
        icon: Headphones,
        source: "Support",
        title: "A severity two ticket is still open.",
        detail:
          "The ticket has been open for nine days and two promised updates were missed.",
        stamp: "9 days open",
      },
    ],
    action: "Find the new owner before the habit fades.",
    next: "Ask your day to day contact who owns the relationship now, and offer a short restart session for the teams whose usage fell.",
    draft: {
      subject: "Who should we be working with now?",
      body: [
        "Hi team, I noticed your sponsor has moved on and I want to make sure nothing falls through the gap.",
        "Who is the best person to own the relationship now? I can bring them up to speed in 15 minutes, including where usage has dipped and how we plan to fix it.",
      ],
    },
  },
  {
    name: "Alderpoint",
    timing: "Renewal in 88 days",
    days: 88,
    status: "Review now",
    kind: "risk",
    signals: [
      {
        icon: MessageSquareText,
        source: "Call history",
        title: "The quarterly review was skipped.",
        detail:
          "The review was cancelled by the customer and never rebooked. Skipped reviews usually mean the value story is not being told inside the account.",
        stamp: "This quarter",
      },
      {
        icon: Database,
        source: "Product data",
        title: "New users stopped being added.",
        detail:
          "No new seats were activated in 45 days, after six months of steady growth.",
        stamp: "Past 45 days",
      },
      {
        icon: Headphones,
        source: "Support",
        title: "Replies from the customer slowed down.",
        detail:
          "Replies on open threads now take days instead of hours. Engagement is cooling even though no ticket is critical.",
        stamp: "Past 30 days",
      },
    ],
    action: "Rebook the review with a value story, not a status update.",
    next: "Send the champion a one page summary of results so far, with two proposed dates for the review.",
    draft: {
      subject: "Your results summary and a new date for the review",
      body: [
        "Hi team, I have put together a one page summary of what your teams have achieved so far this year. It is the agenda I suggest for our review.",
        "Would either of these two dates work, or is there a better time?",
      ],
    },
  },
  {
    name: "Northstar",
    timing: "Seats near capacity",
    days: 0,
    status: "Explore growth",
    kind: "expansion",
    signals: [
      {
        icon: Database,
        source: "Product data",
        title: "The team is growing.",
        detail:
          "Active users increased from 84 to 110 over 30 days. Check which teams are adopting the product and where capacity is tightening.",
        stamp: "Past 30 days",
      },
      {
        icon: MessageSquareText,
        source: "Call history",
        title: "A second team is interested.",
        detail:
          "The champion mentioned another department on the last call. Ask about its goals before recommending an expansion.",
        stamp: "Last call",
      },
      {
        icon: Database,
        source: "CRM",
        title: "Capacity needs a conversation.",
        detail:
          "The latest account export shows seat utilization approaching capacity. Validate the requirement with the customer.",
        stamp: "Latest export",
      },
    ],
    action: "Understand the opportunity. Then earn the expansion.",
    next: "Ask your champion about the second team’s goals and confirm the value already delivered before discussing more seats.",
    draft: {
      subject: "Making room for the second team",
      body: [
        "Hi team, your usage has grown steadily and a second team is now looking at the product.",
        "Before seats become a blocker, can we spend 15 minutes on what the second team needs and how we phase it in?",
      ],
    },
  },
];

const riskAccounts = accounts.filter((account) => account.kind === "risk");
const radarAccounts = [...riskAccounts].sort((a, b) => a.days - b.days);
const views = [
  { name: "Risk Brief", icon: ClipboardList },
  { name: "Renewal Radar", icon: Radar },
  { name: "Drafts", icon: PenLine },
] as const;

export default function EditorialSnapshot({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [view, setView] = useState<(typeof views)[number]["name"]>("Risk Brief");
  const uid = useId();
  const account = accounts[selected];
  const featured = accounts[0];

  if (!detailed) {
    return (
      <div className="ed-dossier is-preview" id="intelligence-demo">
        <div className="ed-dossier-content">
          <div className="ed-brief-head">
            <strong>Today’s Risk Brief</strong>
            <span>8:00 AM · Slack or email</span>
          </div>
          <div className="ed-sheet-heading">
            <div>
              <h2>
                {featured.name}
                <span className="ed-account-status">
                  <span />
                  {featured.status}
                </span>
              </h2>
            </div>
            <p className="ed-account-timing">{featured.timing}</p>
          </div>
          <div className="ed-brief-signals">
            {featured.signals.map((signal) => (
              <div key={signal.title}>
                <signal.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                <span>{signal.title}</span>
                <small>{signal.source}</small>
              </div>
            ))}
          </div>
          <div className="ed-brief-rows">
            {riskAccounts.slice(1).map((item, i) => (
              <div className="ed-brief-row" key={item.name}>
                <b>{i + 2}</b>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.signals[0].title}</small>
                </div>
                <span>{item.timing}</span>
              </div>
            ))}
          </div>
          <p className="ed-brief-expansion">
            <TrendingUp size={14} aria-hidden="true" />
            Also today: Northstar is outgrowing its seats. One expansion
            signal.
          </p>
          <div className="ed-next-conversation">
            <span className="ed-micro">
              <CornerDownRight size={14} aria-hidden="true" /> THE CONVERSATION
              TO HAVE NEXT
            </span>
            <p>{featured.action}</p>
            <small>{featured.next}</small>
          </div>
          <p className="ed-dossier-note">Illustrative example</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ed-dossier is-detailed" id="detailed-intelligence">
      <aside className="ed-product-sidebar">
        <span className="ed-product-brand">
          nexaworks<span>EXAMPLE WORKSPACE</span>
        </span>
        <nav aria-label="Example brief views">
          {views.map((item) => (
            <button
              type="button"
              key={item.name}
              aria-pressed={view === item.name}
              onClick={() => setView(item.name)}
            >
              <item.icon size={15} aria-hidden="true" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>
      <div className="ed-dossier-content">
        {view !== "Renewal Radar" && (
          <div className="ed-account-tabs" aria-label="Explore example accounts">
            {accounts.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={selected === i}
                onClick={() => {
                  setSelected(i);
                  setExpanded(null);
                }}
              >
                {item.name}
                <ArrowUpRight size={13} aria-hidden="true" />
              </button>
            ))}
          </div>
        )}

        {view === "Risk Brief" && (
          <>
            <div className="ed-account-sheet ed-brief-sheet">
              <div
                className="ed-sheet-heading"
                aria-live="polite"
                aria-atomic="true"
              >
                <div>
                  <h2>
                    {account.name}
                    <span
                      className={
                        account.kind === "expansion"
                          ? "ed-account-status is-growth"
                          : "ed-account-status"
                      }
                    >
                      <span />
                      {account.status}
                    </span>
                  </h2>
                </div>
                <p className="ed-account-timing">{account.timing}</p>
              </div>
              <div className="ed-evidence-heading">
                <span className="ed-micro">WHAT THE SIGNALS ARE SAYING</span>
              </div>
              <div className="ed-evidence-list">
                {account.signals.map((signal, i) => (
                  <div
                    className="ed-evidence-item"
                    key={`${account.name}-${signal.title}`}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded === i}
                      aria-controls={`${uid}-evidence-${i}`}
                      onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                      <signal.icon
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span>{signal.title}</span>
                      <small>{signal.source}</small>
                      <ChevronDown
                        size={14}
                        className={expanded === i ? "is-open" : ""}
                        aria-hidden="true"
                      />
                    </button>
                    <div id={`${uid}-evidence-${i}`} hidden={expanded !== i}>
                      <p>{signal.detail}</p>
                      <span>{signal.stamp} · Example source evidence</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ed-sheet-foot">
                <span>
                  <Check size={12} aria-hidden="true" /> Source context attached
                </span>
                <span>People make the decision.</span>
              </div>
            </div>
            <div
              className="ed-next-conversation"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="ed-micro">
                <CornerDownRight size={14} aria-hidden="true" /> THE
                CONVERSATION TO HAVE NEXT
              </span>
              <p>{account.action}</p>
              <small>{account.next}</small>
            </div>
          </>
        )}

        {view === "Renewal Radar" && (
          <div className="ed-radar">
            <p className="ed-radar-intro">
              Every renewal in the next 90 days, in the order your team
              should work on them.
            </p>
            <div className="ed-radar-list">
              {radarAccounts.map((item) => (
                <button
                  type="button"
                  className="ed-radar-row"
                  key={item.name}
                  onClick={() => {
                    setSelected(accounts.indexOf(item));
                    setExpanded(null);
                    setView("Risk Brief");
                  }}
                >
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.signals[0].title}</small>
                  </div>
                  <span>{item.days} days left</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === "Drafts" && (
          <div className="ed-draft">
            <div className="ed-draft-paper">
              <p className="ed-draft-subject">
                Subject: {account.draft.subject}
              </p>
              {account.draft.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
              <p className="ed-draft-sign">Prepared for {account.name}</p>
            </div>
            <p className="ed-draft-note">
              A draft is prepared for every account in the brief. The CSM
              approves it before anything is sent. Nothing is ever sent on
              its own.
            </p>
          </div>
        )}

        <p className="ed-dossier-note">Illustrative example</p>
      </div>
    </div>
  );
}
