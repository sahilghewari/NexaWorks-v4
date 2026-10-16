"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CornerDownRight,
  Database,
  Headphones,
  MessageSquareText,
} from "lucide-react";

const accounts = [
  {
    name: "Meridian",
    timing: "Renewal in 60 days",
    status: "Review now",
    metric: "−22%",
    metricLabel: "Active users · 30 days",
    rising: false,
    points:
      "0,16 28,12 56,26 84,22 112,39 140,35 168,57 196,61 224,76 252,72 280,92",
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
  },
  {
    name: "Northstar",
    timing: "Review in 14 days",
    status: "Explore growth",
    metric: "+31%",
    metricLabel: "Active users · 30 days",
    rising: true,
    points:
      "0,92 28,85 56,88 84,68 112,72 140,52 168,47 196,33 224,34 252,20 280,12",
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
  },
];

export default function EditorialSnapshot() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const account = accounts[selected];

  return (
    <div className="ed-dossier" id="intelligence-demo">
      <div className="ed-dossier-folio">
        <span>AN ACCOUNT, IN PERSPECTIVE</span>
        <span>ILLUSTRATIVE DATA / 0{selected + 1}</span>
      </div>
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
      <div className="ed-account-sheet">
        <div className="ed-sheet-heading" aria-live="polite" aria-atomic="true">
          <div>
            <p className="ed-micro">THE RELATIONSHIP BEHIND THE RENEWAL</p>
            <h2>
              {account.name}
              <span
                className={
                  account.rising
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
        <div className="ed-account-chart">
          <div>
            <strong>
              {account.metric}
              {account.rising ? (
                <ArrowUpRight size={23} aria-hidden="true" />
              ) : (
                <ArrowDownRight size={23} aria-hidden="true" />
              )}
            </strong>
            <span>{account.metricLabel}</span>
          </div>
          <div className="ed-chart-plot">
            <svg
              viewBox="0 0 280 110"
              role="img"
              aria-label={`Illustrative trend: active users ${account.rising ? "increased 31%" : "declined 22%"} over 30 days`}
            >
              <defs>
                <linearGradient id="ed-chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="currentColor"
                    stopOpacity=".14"
                  />
                  <stop
                    offset="100%"
                    stopColor="currentColor"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d="M0 20H280M0 55H280M0 90H280"
                stroke="currentColor"
                strokeOpacity=".14"
                fill="none"
              />
              <polygon
                points={`0,110 ${account.points} 280,110`}
                fill="url(#ed-chart-fill)"
              />
              <polyline
                key={account.name}
                className="ed-chart-line"
                points={account.points}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div>
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </div>
        </div>
        <div className="ed-evidence-heading">
          <span className="ed-micro">WHAT THE SIGNALS ARE SAYING</span>
          <span>SELECT TO EXPLORE</span>
        </div>
        <div className="ed-evidence-list">
          {account.signals.map((signal, i) => (
            <div
              className="ed-evidence-item"
              key={`${account.name}-${signal.source}`}
            >
              <button
                type="button"
                aria-expanded={expanded === i}
                aria-controls={`ed-evidence-${i}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <signal.icon size={16} strokeWidth={1.5} aria-hidden="true" />
                <span>{signal.title}</span>
                <small>{signal.source}</small>
                <ChevronDown
                  size={14}
                  className={expanded === i ? "is-open" : ""}
                  aria-hidden="true"
                />
              </button>
              <div id={`ed-evidence-${i}`} hidden={expanded !== i}>
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
          <CornerDownRight size={14} aria-hidden="true" /> THE CONVERSATION TO
          HAVE NEXT
        </span>
        <p>{account.action}</p>
        <small>{account.next}</small>
      </div>
      <p className="ed-dossier-note">
        An example of the intelligence we deliver. A service built around your
        stack.
      </p>
    </div>
  );
}
