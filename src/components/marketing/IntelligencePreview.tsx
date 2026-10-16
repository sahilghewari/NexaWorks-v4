"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  CircleDot,
  FileText,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const examples = [
  {
    name: "Meridian",
    initials: "M",
    category: "Renewal risk",
    status: "Needs attention",
    tone: "risk",
    date: "Renewal in 60 days",
    metric: "−22%",
    metricLabel: "Active users · past 30 days",
    points:
      "8,17 38,13 68,24 98,22 128,38 158,33 188,51 218,57 248,69 278,66 308,82",
    summary: "Three signals. One account that needs a conversation.",
    evidence: [
      {
        source: "Gong",
        text: "Champion absent from the last 3 calls",
        time: "12 days ago",
      },
      {
        source: "Product",
        text: "Weekly active users fell from 128 to 100",
        time: "Past 30 days",
      },
      {
        source: "Zendesk",
        text: "P1 issue remains unresolved",
        time: "4 days open",
      },
    ],
    action: "Schedule an executive alignment call before the renewal window.",
  },
  {
    name: "Northstar",
    initials: "N",
    category: "Expansion signal",
    status: "Explore opportunity",
    tone: "growth",
    date: "Review in 14 days",
    metric: "+31%",
    metricLabel: "Active users · past 30 days",
    points:
      "8,82 38,76 68,77 98,60 128,63 158,46 188,43 218,30 248,29 278,19 308,10",
    summary: "Adoption is growing beyond the original team.",
    evidence: [
      {
        source: "Product",
        text: "Active users grew from 84 to 110",
        time: "Past 30 days",
      },
      {
        source: "Gong",
        text: "Champion mentioned a second department",
        time: "Last call",
      },
      {
        source: "CRM",
        text: "Seat utilization approaching capacity",
        time: "Latest export",
      },
    ],
    action:
      "Validate the second team’s goals with your champion before proposing more seats.",
  },
  {
    name: "Vertex",
    initials: "V",
    category: "Meeting preparation",
    status: "Review before QBR",
    tone: "review",
    date: "QBR in 3 days",
    metric: "3",
    metricLabel: "Sources brought into one meeting brief",
    points:
      "8,65 38,58 68,61 98,47 128,49 158,36 188,41 218,27 248,31 278,20 308,24",
    summary: "Walk into the QBR with the whole account story.",
    evidence: [
      {
        source: "CRM",
        text: "Original goal: reduce reporting time",
        time: "Success plan",
      },
      {
        source: "Zendesk",
        text: "Reporting issue resolved last week",
        time: "7 days ago",
      },
      {
        source: "Gong",
        text: "Sponsor asked for evidence of value",
        time: "Last call",
      },
    ],
    action:
      "Lead with the reporting outcome, confirm value delivered, and agree the next success milestone.",
  },
];

export default function IntelligencePreview() {
  const [selected, setSelected] = useState(0);
  const account = examples[selected];
  return (
    <div className="intel-shell" id="intelligence-demo">
      <div className="intel-topbar">
        <span className="intel-brand">
          <Layers3 size={16} /> nexaworks <span>/</span> Account intelligence
        </span>
        <span className="intel-sample">EXAMPLE DATA</span>
      </div>
      <div className="intel-body">
        <aside className="intel-sidebar" aria-label="Example accounts">
          <p className="intel-label">ACCOUNT EXAMPLES</p>
          <div className="intel-account-list">
            {examples.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className={`intel-account ${i === selected ? "is-selected" : ""}`}
                aria-pressed={i === selected}
                onClick={() => setSelected(i)}
              >
                <span className={`intel-avatar tone-${item.tone}`}>
                  {item.initials}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </span>
                <ChevronRight size={13} />
              </button>
            ))}
          </div>
          <div className="intel-sidebar-note">
            <ShieldCheck size={16} />
            <span>
              Evidence attached.
              <br />
              People decide.
            </span>
          </div>
        </aside>
        <div className="intel-detail" aria-live="polite" aria-atomic="true">
          <div className="intel-detail-heading">
            <div>
              <p className="intel-label">ACCOUNT OVERVIEW</p>
              <h2>
                {account.name}
                <span className={`intel-tag tone-${account.tone}`}>
                  {account.status}
                </span>
              </h2>
            </div>
            <span className="intel-date">{account.date}</span>
          </div>
          <div className="intel-chart-card">
            <div>
              <p className="intel-label">{account.metricLabel}</p>
              <strong className={`intel-metric tone-${account.tone}`}>
                {account.metric}
                {selected === 0 ? (
                  <ArrowDownRight size={20} />
                ) : selected === 1 ? (
                  <ArrowUpRight size={20} />
                ) : (
                  <FileText size={20} />
                )}
              </strong>
            </div>
            <div className="intel-chart">
              <svg
                viewBox="0 0 320 100"
                role="img"
                aria-label={
                  selected === 2
                    ? "Illustrative account activity trend"
                    : `Illustrative active-user trend: ${account.metric} over 30 days`
                }
              >
                <path
                  d="M0 20H320 M0 50H320 M0 80H320"
                  stroke="#e9eeec"
                  strokeWidth="1"
                  fill="none"
                />
                <polyline
                  points={account.points}
                  fill="none"
                  stroke={selected === 0 ? "#b05d3b" : "#087768"}
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div>
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </div>
          </div>
          <p className="intel-summary">{account.summary}</p>
          <div className="intel-evidence">
            {account.evidence.map((item) => (
              <div key={item.source}>
                <span className="intel-source">{item.source}</span>
                <p>{item.text}</p>
                <small>{item.time}</small>
              </div>
            ))}
          </div>
          <div className="intel-action">
            <CircleDot size={17} />
            <div>
              <span>RECOMMENDED NEXT STEP</span>
              <p>{account.action}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intel-caption">
        <span className="intel-dot" /> Explore an account above
        <span>Illustrative workflow · not a shipped platform</span>
      </div>
    </div>
  );
}
