"use client";

import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarClock,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  HeartPulse,
  RefreshCcw,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { MusterMark } from "@/components/brand/MusterMark";

/* Illustrative product screens with sample data. Shared by the product tabs and the live demo. */

export type ScreenName = "Today" | "Approvals" | "Health" | "Renewals" | "Ask AI";

const NAV: { name: ScreenName; icon: typeof Clock3; badge?: number }[] = [
  { name: "Today", icon: Clock3 },
  { name: "Approvals", icon: ClipboardCheck, badge: 4 },
  { name: "Health", icon: HeartPulse },
  { name: "Renewals", icon: RefreshCcw },
  { name: "Ask AI", icon: Sparkles },
];

export function AppFrame({
  active,
  children,
  onNav,
}: {
  active: ScreenName;
  children: ReactNode;
  onNav?: (name: ScreenName) => void;
}) {
  return (
    <div className="mh-app">
      <aside className="mh-app-side">
        <div className="mh-app-brand">
          <MusterMark height={16} />
          <span>Muster AI</span>
        </div>
        <p className="mh-app-ws">Larkspur Analytics</p>
        <nav>
          {NAV.map((item) => (
            <button
              type="button"
              key={item.name}
              className={item.name === active ? "is-active" : ""}
              onClick={onNav ? () => onNav(item.name) : undefined}
              tabIndex={onNav ? 0 : -1}
            >
              <item.icon size={14} strokeWidth={1.8} />
              {item.name}
              {item.badge ? <b>{item.badge}</b> : null}
            </button>
          ))}
        </nav>
      </aside>
      <div className="mh-app-main">
        <div className="mh-app-top">
          <span>
            Larkspur Analytics <i>/</i> <strong>{active}</strong>
          </span>
          <span className="mh-app-sources">
            <em>CRM</em>
            <em>Support</em>
            <em>Billing</em>
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

export const TODAY_ROWS = [
  { name: "Brightwell Logistics", why: "Champion left · usage down 38%", arr: "$84K", tone: "risk" },
  { name: "Halden Retail", why: "Escalated ticket open 6 days", arr: "$46K", tone: "watch" },
  { name: "Northgate Freight", why: "Renewal in 41 days · plan drafted", arr: "$120K", tone: "watch" },
] as const;

export function TodayScreen({ hotRow, onRow, hint, step }: { hotRow?: boolean; onRow?: () => void; hint?: string; step?: string }) {
  return (
    <>
      <h4 className="mh-app-h">Good morning, Dana</h4>
      <p className="mh-app-sub">Your accounts, ranked by value and urgency</p>
      <div className="mh-stats">
        {[
          { label: "Approvals waiting", value: "4", icon: ClipboardCheck },
          { label: "Accounts at risk", value: "3", icon: TriangleAlert },
          { label: "Renewals in 90 days", value: "7", icon: CalendarClock },
          { label: "ARR at risk", value: "$212K", icon: CircleDollarSign },
        ].map((s) => (
          <div key={s.label} className="mh-stat">
            <span>
              {s.label} <s.icon size={13} />
            </span>
            <strong>{s.value}</strong>
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
  hint,
  step,
}: {
  hotReason?: boolean;
  onReason?: () => void;
  openReason?: boolean;
  hotDraft?: boolean;
  onDraft?: () => void;
  hint?: string;
  step?: string;
}) {
  return (
    <div className="mh-health">
      <div className="mh-health-score">
        <p>Brightwell Logistics</p>
        <div className="mh-ring" style={{ ["--v" as string]: 41 }}>
          <strong>41</strong>
          <small>of 100</small>
        </div>
        <span className="mh-pill is-risk">At risk</span>
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
            Open drafted save play <ArrowUpRight size={13} />
          </span>
        </Hot>
      </div>
    </div>
  );
}

export function ApprovalsScreen({
  hotApprove,
  onApprove,
  approved,
  hint,
  step,
}: {
  hotApprove?: boolean;
  onApprove?: () => void;
  approved?: boolean;
  hint?: string;
  step?: string;
}) {
  return (
    <>
      <h4 className="mh-app-h">
        Approvals <span className="mh-pill">{approved ? "3 waiting" : "4 waiting"}</span>
      </h4>
      <p className="mh-app-sub">Nothing reaches a customer until a person approves it.</p>
      <div className={`mh-draft ${approved ? "is-sent" : ""}`}>
        <div className="mh-draft-head">
          <span>Save play · Brightwell Logistics</span>
          <em>Drafted from 3 signals</em>
        </div>
        <p className="mh-draft-to">To Ben Okafor, Director of Finance</p>
        <p>Hi Ben, I noticed scheduled report usage has dipped over the last few weeks, and I would like to help your team get back on track. Do you have 20 minutes this week?</p>
        <div className="mh-draft-actions">
          {approved ? (
            <span className="mh-sent">
              <Check size={14} /> Sent · outcome tracked at 7, 30 and 90 days
            </span>
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

export function RenewalsScreen() {
  const rows = [
    { name: "Northgate Freight", date: "Jan 6", arr: "$120K", conf: 58 },
    { name: "Brightwell Logistics", date: "Jan 17", arr: "$84K", conf: 31 },
    { name: "Copperleaf Studio", date: "Feb 2", arr: "$38K", conf: 86 },
    { name: "Pinecrest Health", date: "Feb 20", arr: "$64K", conf: 74 },
  ];
  return (
    <>
      <h4 className="mh-app-h">Renewals</h4>
      <p className="mh-app-sub">Next 90 days, ranked by confidence</p>
      <div className="mh-table">
        {rows.map((r) => (
          <div key={r.name} className="mh-trow">
            <span className="mh-row-name">{r.name}</span>
            <span>{r.date}</span>
            <span>{r.arr}</span>
            <span className="mh-bar">
              <i
                style={{ width: `${r.conf}%` }}
                className={r.conf < 50 ? "is-risk" : r.conf < 75 ? "is-watch" : "is-ok"}
              />
            </span>
            <span className="mh-conf">{r.conf}%</span>
          </div>
        ))}
      </div>
    </>
  );
}

export function AskScreen() {
  return (
    <div className="mh-ask">
      <p className="mh-ask-q">Which renewals are at risk this quarter?</p>
      <div className="mh-ask-a">
        <p>
          <Sparkles size={14} /> Two renewals are at risk. <strong>Brightwell Logistics</strong> ($84K, Jan 17): champion
          left and usage fell 38%. <strong>Northgate Freight</strong> ($120K, Jan 6): no exec meeting in 74 days.
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
