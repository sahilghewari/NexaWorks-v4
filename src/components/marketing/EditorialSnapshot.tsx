"use client";

import { useId, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CornerDownRight,
  Database,
  Headphones,
  MessageSquareText,
  LayoutDashboard,
  Users,
  Activity,
} from "lucide-react";

const accounts = [
  {
    name: "Meridian",
    timing: "Renewal in 60 days",
    status: "Review now",
    metric: "−22%",
    metricLabel: "Active users · 30 days",
    rising: false,
    health: 82,
    values: [128, 130, 125, 126, 119, 121, 113, 111, 104, 106, 100],
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
    health: 86,
    values: [84, 86, 85, 91, 90, 97, 98, 102, 104, 108, 110],
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

export default function EditorialSnapshot({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [point, setPoint] = useState(10);
  const [view, setView] = useState("Overview");
  const gradientId = useId();
  const account = accounts[selected];
  const points = account.values
    .map((value, i) => `${32 + i * 26},${124 - (value / 150) * 104}`)
    .join(" ");

  return (
    <div
      className={`ed-dossier ${detailed ? "is-detailed" : "is-preview"}`}
      id={detailed ? "detailed-intelligence" : "intelligence-demo"}
    >
      {detailed && (
        <aside className="ed-product-sidebar">
          <span className="ed-product-brand">
            nexaworks<span>EXAMPLE WORKSPACE</span>
          </span>
          <nav aria-label="Example signal views">
            {[
              { name: "Overview", icon: LayoutDashboard, source: "" },
              { name: "People", icon: Users, source: "Call history" },
              { name: "Product", icon: Activity, source: "Product data" },
              { name: "Support", icon: Headphones, source: "Support" },
            ].map((item) => (
              <button
                type="button"
                key={item.name}
                aria-pressed={view === item.name}
                onClick={() => {
                  setView(item.name);
                  const index = account.signals.findIndex(
                    (signal) => signal.source === item.source,
                  );
                  setExpanded(index >= 0 ? index : null);
                }}
              >
                <item.icon size={15} aria-hidden="true" />
                {item.name}
              </button>
            ))}
          </nav>
        </aside>
      )}
      <div className="ed-dossier-content">
        <div className="ed-account-tabs" aria-label="Explore example accounts">
          {accounts.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={selected === i}
              onClick={() => {
                setSelected(i);
                setExpanded(null);
                setPoint(10);
                setView("Overview");
              }}
            >
              {item.name}
              <ArrowUpRight size={13} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="ed-account-sheet">
          <div
            className="ed-sheet-heading"
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <p className="ed-micro">ACCOUNT OVERVIEW</p>
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
          <div className="ed-health-summary">
            <span className="ed-health-value">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="var(--glass-line)"
                  strokeWidth="3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="var(--glass-positive)"
                  strokeWidth="3"
                  key={account.name}
                  className="ed-health-progress"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset={100 - account.health}
                  transform="rotate(-90 50 50)"
                  strokeLinecap="round"
                />
              </svg>
              <i />
              {account.health}
              <small>/100</small>
            </span>
            <div>
              <strong>Recorded health score</strong>
              <span>
                {account.rising
                  ? "Healthy · growth worth validating"
                  : "Healthy · relationship needs review"}
              </span>
            </div>
            <span className="ed-health-caption">CRM / EXAMPLE</span>
          </div>
          <div
            className={`ed-account-chart ${account.rising ? "is-growth" : ""}`}
          >
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
              <div className="ed-plot-canvas">
                <div className="ed-y-axis" aria-hidden="true">
                  <span>150</span>
                  <span>75</span>
                  <span>0</span>
                </div>
                <svg
                  preserveAspectRatio="none"
                  viewBox="32 20 260 104"
                  role="img"
                  aria-label={`Illustrative weekly active users over 30 days: ${account.values[0]} to ${account.values[10]}. Vertical axis: 0 to 150 users.`}
                >
                  <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity=".18"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  {[0, 75, 150].map((value) => (
                    <g key={value}>
                      <line
                        x1="32"
                        x2="292"
                        y1={124 - (value / 150) * 104}
                        y2={124 - (value / 150) * 104}
                        stroke="currentColor"
                        strokeOpacity=".14"
                      />
                    </g>
                  ))}
                  <polygon
                    points={`32,124 ${points} 292,124`}
                    fill={`url(#${gradientId})`}
                  />
                  <polyline
                    key={account.name}
                    className="ed-chart-line"
                    pathLength="1"
                    points={points}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  {account.values.map((value, i) => (
                    <circle
                      key={i}
                      cx={32 + i * 26}
                      cy={124 - (value / 150) * 104}
                      r={point === i ? 4 : 2}
                      fill="currentColor"
                      onPointerEnter={() => setPoint(i)}
                    >
                      <title>{`${i === 10 ? "Today" : `${30 - i * 3} days ago`}: ${value} active users`}</title>
                    </circle>
                  ))}
                </svg>
              </div>
              <div
                className="ed-chart-controls"
                aria-label="Inspect active-user data"
              >
                {[0, 5, 10].map((i) => (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={point === i}
                    onClick={() => setPoint(i)}
                    onFocus={() => setPoint(i)}
                  >
                    {i === 10 ? "Today" : `${30 - i * 3} days ago`}
                  </button>
                ))}
              </div>
              <output className="ed-chart-tooltip" aria-live="polite">
                {point === 10 ? "Today" : `${30 - point * 3} days ago`} ·{" "}
                <strong>{account.values[point]} active users</strong>
              </output>
            </div>
          </div>
          <details className="ed-chart-data">
            <summary>View chart data</summary>
            <table>
              <caption>
                Illustrative weekly active users · {account.name}
              </caption>
              <thead>
                <tr>
                  <th scope="col">Relative date</th>
                  <th scope="col">Active users</th>
                </tr>
              </thead>
              <tbody>
                {account.values.map((value, i) => (
                  <tr key={i}>
                    <td>{i === 10 ? "Today" : `${30 - i * 3} days ago`}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
          <div className="ed-evidence-heading">
            <span className="ed-micro">
              {view === "Overview"
                ? "WHAT THE SIGNALS ARE SAYING"
                : `${view.toUpperCase()} / SOURCE EVIDENCE`}
            </span>
            <span>SELECT TO EXPLORE</span>
          </div>
          <div className="ed-evidence-list">
            {account.signals.map((signal, i) => (
              <div
                className="ed-evidence-item"
                key={`${account.name}-${signal.source}`}
                hidden={
                  detailed &&
                  view !== "Overview" &&
                  signal.source !==
                    (
                      {
                        People: "Call history",
                        Product: "Product data",
                        Support: "Support",
                      } as Record<string, string>
                    )[view]
                }
              >
                <button
                  type="button"
                  aria-expanded={expanded === i}
                  aria-controls={`${gradientId}-evidence-${i}`}
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
                <div id={`${gradientId}-evidence-${i}`} hidden={expanded !== i}>
                  <p>{signal.detail}</p>
                  <span>{signal.stamp} · Example source evidence</span>
                </div>
              </div>
            ))}
            {detailed &&
              view === "Support" &&
              !account.signals.some(
                (signal) => signal.source === "Support",
              ) && (
                <p className="ed-empty-evidence">
                  No support signal is included in this illustrative account.
                  Review People or Product for the available evidence.
                </p>
              )}
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
        <p className="ed-dossier-note">Illustrative example</p>
      </div>
    </div>
  );
}
