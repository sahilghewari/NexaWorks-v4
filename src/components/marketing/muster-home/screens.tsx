"use client";

import type { ReactNode } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  CalendarClock,
  Check,
  CheckSquare,
  ChevronRight,
  CircleDollarSign,
  Compass,
  FileCheck,
  Home,
  Inbox,
  LogOut,
  PlayCircle,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Video,
} from "lucide-react";
import { MusterMark } from "@/components/brand/MusterMark";

/*
 * Illustrative product screens with sample data, laid out like the real Muster app
 * (MUSTER-AI: src/app/(app)/layout.tsx nav groups, Accounts table, Account 360, Revenue).
 * Shared by the "Inside Muster" tabs and the click-through demo.
 */

export type ScreenName =
  | "Today"
  | "Approvals"
  | "Accounts"
  | "Health"
  | "Renewals"
  | "Revenue"
  | "Ask AI";

const NAV_GROUPS: { title: string; items: { name: string; icon: typeof Home }[] }[] = [
  {
    title: "Work",
    items: [
      { name: "Home", icon: Home },
      { name: "Today", icon: CalendarCheck },
      { name: "Approvals", icon: FileCheck },
      { name: "Tasks", icon: CheckSquare },
      { name: "Meetings & QBRs", icon: Video },
    ],
  },
  {
    title: "Portfolio",
    items: [
      { name: "Accounts", icon: Building2 },
      { name: "Health", icon: Activity },
      { name: "Onboarding", icon: Compass },
      { name: "Renewals", icon: RefreshCw },
      { name: "Expansion", icon: TrendingUp },
      { name: "Revenue", icon: CircleDollarSign },
    ],
  },
  {
    title: "Automation",
    items: [
      { name: "Plays", icon: PlayCircle },
      { name: "Inbox", icon: Inbox },
      { name: "Promises", icon: ShieldCheck },
    ],
  },
  {
    title: "Insight",
    items: [
      { name: "Reports", icon: BarChart3 },
      { name: "Ask AI", icon: Sparkles },
    ],
  },
];

const NAVIGABLE: string[] = ["Today", "Approvals", "Accounts", "Health", "Renewals", "Revenue", "Ask AI"];

export function AppFrame({
  active,
  crumb,
  children,
  onNav,
  approvals = 4,
}: {
  active: ScreenName;
  /** Extra breadcrumb level, e.g. an account name. */
  crumb?: string;
  children: ReactNode;
  onNav?: (name: ScreenName) => void;
  approvals?: number;
}) {
  return (
    <div className="mh-app">
      <aside className="mh-app-side">
        <div className="mh-app-ws">
          <span className="mh-app-ws-badge">L</span>
          <span>
            <strong>Larkspur Analytics</strong>
            <small>
              <MusterMark height={9} /> Muster AI
            </small>
          </span>
        </div>
        <nav aria-label="Product navigation (demo)">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="mh-app-group">
              <p>{group.title}</p>
              {group.items.map((item) => {
                const can = !!onNav && NAVIGABLE.includes(item.name);
                return (
                  <button
                    type="button"
                    key={item.name}
                    className={item.name === active ? "is-active" : ""}
                    onClick={can ? () => onNav(item.name as ScreenName) : undefined}
                    tabIndex={can ? 0 : -1}
                    data-nav={can ? "" : undefined}
                  >
                    <item.icon size={14} strokeWidth={1.8} />
                    <span>{item.name}</span>
                    {item.name === "Approvals" && approvals > 0 ? <b>{approvals}</b> : null}
                  </button>
                );
              })}
            </div>
          ))}
          <div className="mh-app-group">
            <button type="button" tabIndex={-1}>
              <Settings size={14} strokeWidth={1.8} />
              <span>Settings</span>
            </button>
          </div>
        </nav>
        <div className="mh-app-user">
          <span>DW</span>
          <div>
            <strong>Dana Whitfield</strong>
            <small>CS Leader</small>
          </div>
          <LogOut size={13} />
        </div>
      </aside>
      <div className="mh-app-main">
        <div className="mh-app-top">
          <span className="mh-app-crumb">
            Larkspur Analytics <ChevronRight size={12} />
            <strong className={crumb ? "is-mid" : ""}>{active}</strong>
            {crumb && (
              <>
                <ChevronRight size={12} />
                <strong>{crumb}</strong>
              </>
            )}
          </span>
          <span className="mh-app-search">
            <Search size={12} /> Search accounts, plays… <kbd>⌘K</kbd>
          </span>
          <span className="mh-app-me">
            <span className="mh-app-bell">
              <Bell size={14} />
              <i>6</i>
            </span>
            <span className="mh-app-name">Dana Whitfield</span>
          </span>
        </div>
        <div className="mh-app-body">{children}</div>
      </div>
    </div>
  );
}

/** A tour hotspot: pulsing outline plus a hint bubble. Renders children plainly when inactive. */
export function Hot({
  on,
  hint,
  step,
  onClick,
  children,
  place = "bottom",
}: {
  on: boolean;
  hint?: string;
  step?: string;
  onClick?: () => void;
  children: ReactNode;
  place?: "bottom" | "top" | "left";
}) {
  if (!on) return <>{children}</>;
  return (
    <div className="mh-hot" data-place={place}>
      <div
        role="button"
        tabIndex={0}
        className="mh-hot-target"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.();
          }
        }}
        aria-label={hint}
      >
        {children}
      </div>
      {hint && (
        <span className="mh-hot-tip" role="status">
          {step && <small>{step}</small>}
          {hint}
        </span>
      )}
    </div>
  );
}

type TourProps = { hint?: string; step?: string };

function Pill({ tone, children }: { tone: "risk" | "watch" | "ok" | "plain"; children: ReactNode }) {
  return <span className={`mh-pill is-${tone}`}>{children}</span>;
}

function Avatar({ name, tone = 0 }: { name: string; tone?: number }) {
  const initials = name
    .split(/\s|&/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return <span className={`mh-avatar t${tone % 5}`}>{initials}</span>;
}

/* ---------------- Today ---------------- */

export const TODAY_ROWS = [
  { name: "Brightwell Logistics", why: "Champion left · usage down 38%", arr: "$186K", tone: "risk" },
  { name: "Halden Retail", why: "Escalated ticket open 6 days", arr: "$44K", tone: "watch" },
  { name: "Northgate Freight", why: "Renewal in 41 days · plan drafted", arr: "$142K", tone: "watch" },
] as const;

export function TodayScreen({ hotRow, onRow, hint, step }: { hotRow?: boolean; onRow?: () => void } & TourProps) {
  return (
    <>
      <h4 className="mh-app-h">Good morning, Dana</h4>
      <p className="mh-app-sub">Thursday, Nov 26 · Your accounts only, ranked by account value × urgency.</p>
      <div className="mh-stats">
        {[
          { label: "Approvals waiting", value: "4", icon: FileCheck, note: "Pending your decision" },
          { label: "Accounts at risk", value: "3", icon: TriangleAlert, note: "In your assigned book" },
          { label: "Renewals in 90 days", value: "7", icon: CalendarClock, note: "On your own accounts" },
          { label: "ARR at risk", value: "$372K", icon: CircleDollarSign, note: "At-risk contract value" },
        ].map((s) => (
          <div key={s.label} className="mh-stat">
            <span>
              {s.label} <s.icon size={13} />
            </span>
            <strong>{s.value}</strong>
            <small>{s.note}</small>
          </div>
        ))}
      </div>
      <div className="mh-list">
        <p className="mh-list-h">Needs you today</p>
        {TODAY_ROWS.map((row, i) => {
          const content = (
            <div className="mh-row">
              <span className={`mh-dot is-${row.tone}`} />
              <span className="mh-row-name">{row.name}</span>
              <span className="mh-row-why">{row.why}</span>
              <span className="mh-row-arr">{row.arr}</span>
            </div>
          );
          return i === 0 ? (
            <Hot key={row.name} on={!!hotRow} onClick={onRow} hint={hint} step={step}>
              {content}
            </Hot>
          ) : (
            <div key={row.name}>{content}</div>
          );
        })}
      </div>
    </>
  );
}

/* ---------------- Accounts ---------------- */

const ACCOUNTS = [
  { name: "Aspenwood Fitness", domain: "aspenwood-fitness.test", score: 93, band: "ok", pulse: "Actually fine", tier: "High-touch", stage: "Renewing", owner: "Leo Marsh", arr: "$201,000", renew: "Dec 11" },
  { name: "Brightwell Logistics", domain: "brightwell-logistics.test", score: 41, band: "risk", pulse: "Worried", tier: "High-touch", stage: "Mature", owner: "Leo Marsh", arr: "$186,000", renew: "Jan 17" },
  { name: "Copperleaf Studios", domain: "copperleaf-studios.test", score: 99, band: "ok", pulse: "Actually fine", tier: "Mid-touch", stage: "Adopting", owner: "Aisha Bello", arr: "$36,000", renew: "Feb 22" },
  { name: "Halden Retail", domain: "halden-retail.test", score: 71, band: "watch", pulse: "Worried", tier: "Mid-touch", stage: "Mature", owner: "Leo Marsh", arr: "$44,000", renew: "Mar 10" },
  { name: "Marlow & Finch", domain: "marlow-finch.test", score: 97, band: "ok", pulse: "Actually fine", tier: "High-touch", stage: "Mature", owner: "Leo Marsh", arr: "$98,000", renew: "Apr 26" },
  { name: "Northgate Freight", domain: "northgate-freight.test", score: 58, band: "watch", pulse: "Worried", tier: "High-touch", stage: "Renewing", owner: "Leo Marsh", arr: "$142,000", renew: "Jan 6" },
] as const;

const BAND_LABEL = { ok: "Healthy", watch: "Watch", risk: "At risk" } as const;

export function AccountsScreen({ hotRow, onRow, hint, step }: { hotRow?: boolean; onRow?: () => void } & TourProps) {
  return (
    <>
      <h4 className="mh-app-h">Accounts</h4>
      <p className="mh-app-sub">Portfolio accounts across health, lifecycle stages, and commercial owners.</p>
      <div className="mh-filters">
        <span className="mh-input">
          <Search size={12} /> Name or domain
        </span>
        <span className="mh-select">All tiers</span>
        <span className="mh-select">Any health</span>
        <span className="mh-select">Anyone</span>
      </div>
      <div className="mh-acct-table">
        <div className="mh-acct-row is-head">
          <span>Name</span>
          <span>Health</span>
          <span className="c-pulse">CSM Pulse</span>
          <span className="c-tier">Tier</span>
          <span className="c-stage">Stage</span>
          <span className="c-owner">Owner</span>
          <span className="c-arr">ARR</span>
          <span className="c-renew">Renewal</span>
        </div>
        {ACCOUNTS.map((a, i) => {
          const row = (
            <div className="mh-acct-row">
              <span className="mh-acct-name">
                <Avatar name={a.name} tone={i} />
                <span>
                  <strong>{a.name}</strong>
                  <small>{a.domain}</small>
                </span>
              </span>
              <span className="mh-acct-health">
                <b>{a.score}</b>
                <Pill tone={a.band}>{BAND_LABEL[a.band]}</Pill>
              </span>
              <span className="c-pulse">
                <em className={a.pulse === "Worried" ? "is-on" : ""}>{a.pulse}</em>
              </span>
              <span className="c-tier">{a.tier}</span>
              <span className="c-stage">{a.stage}</span>
              <span className="c-owner">{a.owner}</span>
              <span className="c-arr">{a.arr}</span>
              <span className="c-renew">{a.renew}</span>
            </div>
          );
          return a.name === "Brightwell Logistics" ? (
            <Hot key={a.name} on={!!hotRow} onClick={onRow} hint={hint} step={step}>
              {row}
            </Hot>
          ) : (
            <div key={a.name}>{row}</div>
          );
        })}
      </div>
    </>
  );
}

/* ---------------- Account 360 ---------------- */

export function Account360Screen({
  hotTab,
  onTab,
  hint,
  step,
}: { hotTab?: boolean; onTab?: () => void } & TourProps) {
  const tabs = ["Overview", "Health", "Renewal", "Signals", "People", "Usage", "Tickets"];
  return (
    <>
      <div className="mh-a360-head">
        <span className="mh-avatar is-lg t1">BL</span>
        <div className="mh-a360-title">
          <h4 className="mh-app-h">Brightwell Logistics</h4>
          <small>brightwell-logistics.test</small>
          <div className="mh-chips">
            <span>High-touch</span>
            <span>Mature</span>
            <span>Owner: Leo Marsh</span>
            <span className="is-plan">Enterprise</span>
          </div>
        </div>
        <div className="mh-a360-score">
          <span className="mh-ring is-sm" style={{ ["--v" as string]: 41 }}>
            <strong>41</strong>
          </span>
          <span>
            <Pill tone="risk">At risk</Pill>
            <small>Health score</small>
          </span>
        </div>
      </div>
      <div className="mh-a360-tabs">
        {tabs.map((t) =>
          t === "Health" ? (
            <Hot key={t} on={!!hotTab} onClick={onTab} hint={hint} step={step}>
              <span>{t}</span>
            </Hot>
          ) : (
            <span key={t} className={t === "Overview" ? "is-active" : ""}>
              {t}
            </span>
          ),
        )}
      </div>
      <div className="mh-a360-cards">
        <div className="mh-card">
          <p className="mh-card-h">Account</p>
          <dl>
            {[
              ["Tier", "High-touch (set by ARR rule)"],
              ["Stage", "Mature"],
              ["ARR", "$186,000"],
              ["Plan", "Enterprise"],
              ["Renewal", "Jan 17, 2027"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mh-card">
          <p className="mh-card-h">Key people</p>
          <div className="mh-person">
            <span className="mh-avatar t2">BO</span>
            <span>
              <strong>Ben Okafor</strong>
              <small>Decision maker · Director of Finance</small>
            </span>
          </div>
          <div className="mh-person">
            <span className="mh-avatar t3">MO</span>
            <span>
              <strong>Maya Ortiz</strong>
              <small>Champion · Former employee</small>
            </span>
            <Pill tone="risk">Email bounced</Pill>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- Health ---------------- */

export const REASONS = [
  { title: "Usage down 38% this month", source: "Product usage · active users 212 → 131 · Nov 1 to 17" },
  { title: "Champion left the company", source: "CRM · Maya Ortiz · title changed to Former employee · Nov 12" },
  { title: "Support tickets spiking", source: "Support · 9 tickets in 14 days, 3 about exports" },
];

export function HealthScreen({
  hotReason,
  onReason,
  openReason,
  hotDraft,
  onDraft,
  draftLabel = "Open drafted save play",
  hint,
  step,
}: {
  hotReason?: boolean;
  onReason?: () => void;
  openReason?: boolean;
  hotDraft?: boolean;
  onDraft?: () => void;
  draftLabel?: string;
} & TourProps) {
  return (
    <div className="mh-health">
      <div className="mh-health-score">
        <p>Brightwell Logistics</p>
        <div className="mh-ring" style={{ ["--v" as string]: 41 }}>
          <strong>41</strong>
          <small>of 100</small>
        </div>
        <Pill tone="risk">At risk</Pill>
      </div>
      <div className="mh-health-why">
        <p className="mh-list-h">Why this score</p>
        {REASONS.map((r, i) => {
          const body = (
            <div className={`mh-reason ${openReason && i === 1 ? "is-open" : ""}`}>
              <b>{i + 1}</b>
              <div>
                <strong>{r.title}</strong>
                <span>{r.source}</span>
              </div>
            </div>
          );
          return i === 1 ? (
            <Hot key={r.title} on={!!hotReason} onClick={onReason} hint={hint} step={step}>
              {body}
            </Hot>
          ) : (
            <div key={r.title}>{body}</div>
          );
        })}
        {openReason && (
          <div className="mh-record">
            <p className="mh-list-h">Source record · HubSpot contact</p>
            <dl>
              <div>
                <dt>Contact</dt>
                <dd>Maya Ortiz</dd>
              </div>
              <div>
                <dt>Job title</dt>
                <dd>
                  <s>Head of Operations</s> Former employee
                </dd>
              </div>
              <div>
                <dt>Changed</dt>
                <dd>Nov 12, 09:14</dd>
              </div>
            </dl>
          </div>
        )}
        <Hot on={!!hotDraft} onClick={onDraft} hint={hotDraft ? hint : undefined} step={step} place="left">
          <span className="mh-btn-ghost">
            {draftLabel} <ArrowUpRight size={13} />
          </span>
        </Hot>
      </div>
    </div>
  );
}

/* ---------------- Approvals ---------------- */

export function ApprovalsScreen({
  hotApprove,
  onApprove,
  approved,
  hotRevenue,
  onRevenue,
  hint,
  step,
}: {
  hotApprove?: boolean;
  onApprove?: () => void;
  approved?: boolean;
  hotRevenue?: boolean;
  onRevenue?: () => void;
} & TourProps) {
  return (
    <>
      <h4 className="mh-app-h">
        Approvals <span className="mh-pill is-plain">{approved ? "3 waiting" : "4 waiting"}</span>
      </h4>
      <p className="mh-app-sub">Nothing reaches a customer until a person approves it.</p>
      <div className={`mh-draft ${approved ? "is-sent" : ""}`}>
        <div className="mh-draft-head">
          <span>Save play · Brightwell Logistics</span>
          <em>Drafted from 3 signals</em>
        </div>
        <p className="mh-draft-to">To Ben Okafor, Director of Finance</p>
        <p>
          Hi Ben, I noticed scheduled report usage has dipped over the last few weeks, and I would like to help your
          team get back on track. Do you have 20 minutes this week?
        </p>
        <div className="mh-draft-actions">
          {approved ? (
            <>
              <span className="mh-sent">
                <Check size={14} /> Sent · outcome tracked at 7, 30 and 90 days
              </span>
              {onRevenue && (
                <Hot on={!!hotRevenue} onClick={onRevenue} hint={hotRevenue ? hint : undefined} step={step} place="top">
                  <span className="mh-btn-ghost">
                    See it in Revenue <ArrowUpRight size={13} />
                  </span>
                </Hot>
              )}
            </>
          ) : (
            <>
              <span className="mh-btn-ghost">Edit</span>
              <Hot on={!!hotApprove} onClick={onApprove} hint={hint} step={step} place="top">
                <span className="mh-btn-primary">Approve and send</span>
              </Hot>
            </>
          )}
        </div>
      </div>
      <div className="mh-queue">
        <span>Halden Retail · reply to escalated ticket</span>
        <span>Northgate Freight · renewal plan</span>
      </div>
    </>
  );
}

/* ---------------- Renewals ---------------- */

const RENEWALS = [
  { name: "Brightwell Logistics", owner: "Leo Marsh", date: "Jan 17", when: "in 52 days, notice by Dec 18", conf: 31, band: "risk", arr: "$186,000", cat: "At risk", tone: 1 },
  { name: "Northgate Freight", owner: "Leo Marsh", date: "Jan 6", when: "in 41 days, notice by Dec 7", conf: 58, band: "watch", arr: "$142,000", cat: "Best case", tone: 5 },
  { name: "Halden Retail", owner: "Leo Marsh", date: "Mar 10", when: "in 104 days, no notice period on file", conf: 64, band: "watch", arr: "$44,000", cat: "Not categorised", tone: 3 },
  { name: "Copperleaf Studios", owner: "Aisha Bello", date: "Feb 22", when: "in 88 days, notice by Jan 23", conf: 86, band: "ok", arr: "$36,000", cat: "Commit", tone: 2 },
  { name: "Aspenwood Fitness", owner: "Leo Marsh", date: "Dec 11", when: "in 15 days, notice by Nov 11", conf: 92, band: "ok", arr: "$201,000", cat: "Commit", tone: 0 },
] as const;

const CONF_LABEL = { ok: "High", watch: "Medium", risk: "Low" } as const;

export function RenewalsScreen({ hotRow, onRow, hint, step }: { hotRow?: boolean; onRow?: () => void } & TourProps) {
  return (
    <>
      <h4 className="mh-app-h">Renewals</h4>
      <p className="mh-app-sub">Open renewals renewing within 120 days, lowest confidence first.</p>
      <div className="mh-stats mh-ren-forecast">
        <div className="mh-stat">
          <span>Renewing in window</span>
          <strong>$609K</strong>
          <small>5 renewals</small>
        </div>
        <div className="mh-stat">
          <span>Commit</span>
          <strong>$237K</strong>
          <small>2 renewals</small>
        </div>
        <div className="mh-stat">
          <span>Best case</span>
          <strong>$142K</strong>
          <small>1 renewal</small>
        </div>
        <div className="mh-stat is-risk">
          <span>At risk</span>
          <strong>$186K</strong>
          <small>1 renewal</small>
        </div>
      </div>
      <div className="mh-acct-table">
        <div className="mh-ren-row is-head">
          <span>Account</span>
          <span className="c-renews">Renews</span>
          <span>Confidence</span>
          <span className="c-arr">ARR</span>
          <span className="c-cat">Forecast category</span>
        </div>
        {RENEWALS.map((r) => {
          const row = (
            <div className="mh-ren-row">
              <span className="mh-acct-name">
                <Avatar name={r.name} tone={r.tone} />
                <span>
                  <strong>{r.name}</strong>
                  <small>
                    <u>Renewal brief</u> · {r.owner}
                  </small>
                </span>
              </span>
              <span className="c-renews mh-ren-when">
                <strong>{r.date}</strong>
                <small>{r.when}</small>
              </span>
              <span className="mh-acct-health">
                <b>{r.conf}%</b>
                <Pill tone={r.band}>{CONF_LABEL[r.band]}</Pill>
              </span>
              <span className="c-arr">{r.arr}</span>
              <span className="c-cat">
                <em className={`mh-cat ${r.cat === "At risk" ? "is-risk" : ""}`}>{r.cat}</em>
              </span>
            </div>
          );
          return r.name === "Brightwell Logistics" ? (
            <Hot key={r.name} on={!!hotRow} onClick={onRow} hint={hint} step={step}>
              {row}
            </Hot>
          ) : (
            <div key={r.name}>{row}</div>
          );
        })}
      </div>
    </>
  );
}

const PLAN_STEPS = [
  { title: "Meet Ben Okafor, the new decision maker", note: "Intro email drafted · due Nov 29" },
  { title: "Fix the export issue behind 3 open tickets", note: "Linked to Support · due Dec 6" },
  { title: "Exec sponsor check-in before the notice date", note: "QBR prep drafted · due Dec 12" },
];

export function RenewalBriefScreen({
  hotAdopt,
  onAdopt,
  adopted,
  hotRevenue,
  onRevenue,
  hint,
  step,
}: {
  hotAdopt?: boolean;
  onAdopt?: () => void;
  adopted?: boolean;
  hotRevenue?: boolean;
  onRevenue?: () => void;
} & TourProps) {
  return (
    <>
      <div className="mh-ren-head">
        <div>
          <h4 className="mh-app-h">Renewal brief</h4>
          <p className="mh-app-sub">Brightwell Logistics · renews Jan 17, in 52 days · notice by Dec 18</p>
        </div>
        <span className="mh-chips">
          <Pill tone="risk">At risk</Pill>
          <Pill tone="plain">$186,000 ARR</Pill>
        </span>
      </div>
      <div className="mh-ren-brief">
        <div className="mh-card mh-ren-conf">
          <p className="mh-list-h">Confidence</p>
          <div className="mh-ren-drop">
            <s>72%</s>
            <ChevronRight size={16} />
            <strong>31%</strong>
          </div>
          <small>Since Nov 1, rebuilt from the records</small>
          <ul>
            <li>Health 41, At risk</li>
            <li>Champion left the company</li>
            <li>9 support tickets in 14 days</li>
          </ul>
        </div>
        <div className={`mh-draft mh-ren-plan ${adopted ? "is-sent" : ""}`}>
          <div className="mh-draft-head">
            <span>Proposed plan · 3 steps</span>
            <em>Drafted by Muster from 3 signals</em>
          </div>
          <ol>
            {PLAN_STEPS.map((p, i) => (
              <li key={p.title}>
                <b>{adopted ? <Check size={13} /> : i + 1}</b>
                <span>
                  <strong>{p.title}</strong>
                  <small>{p.note}</small>
                </span>
              </li>
            ))}
          </ol>
          <div className="mh-draft-actions">
            {adopted ? (
              <>
                <span className="mh-sent">
                  <Check size={14} /> Plan adopted · tracked to the renewal
                </span>
                {onRevenue && (
                  <Hot on={!!hotRevenue} onClick={onRevenue} hint={hotRevenue ? hint : undefined} step={step}>
                    <span className="mh-btn-ghost">
                      See it in Revenue <ArrowUpRight size={13} />
                    </span>
                  </Hot>
                )}
              </>
            ) : (
              <>
                <span className="mh-btn-ghost">Edit steps</span>
                <Hot on={!!hotAdopt} onClick={onAdopt} hint={hint} step={step}>
                  <span className="mh-btn-primary">Adopt plan into renewal</span>
                </Hot>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- Revenue ---------------- */

const BILLING = [
  { m: "Dec", v: 118 },
  { m: "Jan", v: 62 },
  { m: "Feb", v: 304 },
  { m: "Mar", v: 38 },
  { m: "Apr", v: 92 },
  { m: "May", v: 112 },
];
const BILLING_MAX = Math.max(...BILLING.map((b) => b.v));
const BILLING_TOTAL = BILLING.reduce((sum, b) => sum + b.v, 0);
const billingX = (i: number) => 8 + i * (84 / (BILLING.length - 1));
/** Running-total line across the six months, as SVG polyline points. */
const RUNNING_POINTS = BILLING.map((b, i) => {
  const running = BILLING.slice(0, i + 1).reduce((sum, x) => sum + x.v, 0);
  return `${billingX(i)},${92 - (running / BILLING_TOTAL) * 78}`;
}).join(" ");

export function RevenueScreen({
  hotSave,
  onSave,
  saveActive,
  activeLabel = "Save play sent today",
  hint,
  step,
}: { hotSave?: boolean; onSave?: () => void; saveActive?: boolean; activeLabel?: string } & TourProps) {
  const save = (
    <div className="mh-rev-row">
      <span className="mh-avatar t1">BL</span>
      <span className="mh-rev-name">
        <strong>Brightwell Logistics</strong>
        <small>At risk · renewal Jan 17</small>
      </span>
      <Pill tone={saveActive ? "ok" : "risk"}>{saveActive ? activeLabel : "No action yet"}</Pill>
      <span className="mh-rev-amt">$186,000 ARR at risk</span>
    </div>
  );
  return (
    <>
      <div className="mh-rev-top">
        <div>
          <h4 className="mh-app-h">Revenue</h4>
          <p className="mh-app-sub">Every figure is traced to the records behind it.</p>
        </div>
        <span className="mh-seg">
          <span>Renewals</span>
          <span className="is-on">Revenue</span>
        </span>
      </div>
      <div className="mh-card mh-rev-card">
        <div>
          <p className="mh-list-h">Expected billing · next 6 months</p>
          <strong className="mh-rev-total">$834,548</strong>
          <small>Dec to May, from subscriptions on record</small>
        </div>
        <div className="mh-rev-chart-wrap">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mh-rev-chart" aria-hidden="true">
            {BILLING.map((b, i) => {
              const h = (b.v / BILLING_MAX) * 60;
              return <rect key={b.m} x={billingX(i) - 4} y={92 - h} width="8" height={h} rx="1.5" className="bar" />;
            })}
            <polyline points={RUNNING_POINTS} className="line" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="mh-rev-months">
            {BILLING.map((b) => (
              <span key={b.m}>{b.m}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mh-rev-list">
        <Hot on={!!hotSave} onClick={onSave} hint={hint} step={step}>
          {save}
        </Hot>
        <div className="mh-rev-row">
          <span className="mh-avatar t4">CS</span>
          <span className="mh-rev-name">
            <strong>Copperleaf Studios</strong>
            <small>40 seats bought · 52 in use</small>
          </span>
          <Pill tone="ok">Expansion spotted · +12 seats</Pill>
          <span className="mh-rev-amt is-up">+$10,800 ARR (estimate)</span>
        </div>
      </div>
    </>
  );
}

/* ---------------- Ask AI ---------------- */

export function AskScreen() {
  return (
    <div className="mh-ask">
      <p className="mh-ask-q">Which renewals are at risk this quarter?</p>
      <div className="mh-ask-a">
        <p>
          <Sparkles size={14} /> Two renewals are at risk. <strong>Brightwell Logistics</strong> ($186K, Jan 17):
          champion left and usage fell 38%. <strong>Northgate Freight</strong> ($142K, Jan 6): no exec meeting in 74
          days.
        </p>
        <div className="mh-cites">
          <span>CRM · contact change</span>
          <span>Usage · Nov 1 to 17</span>
          <span>Contract · NGF-2024</span>
          <span>Calendar · last QBR</span>
        </div>
      </div>
    </div>
  );
}
