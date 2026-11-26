"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import {
  Account360Screen,
  AccountsScreen,
  AppFrame,
  HealthScreen,
  RenewalBriefScreen,
  RenewalsScreen,
  RevenueScreen,
} from "./screens";
import { BOOK_DEMO_LINK } from "@/lib/booking";

/** One hint per click. The last entry is the finished state. */
const STEPS = [
  "Every customer, one list. Brightwell dropped to At risk overnight. Open it.",
  "The champion's email bounced. Open Health to see why the score fell.",
  "Every reason links to its record. Click the second one.",
  "That is the proof. Now see what it does to the renewal.",
  "Renewals, lowest confidence first. Brightwell renews in 52 days. Open its brief.",
  "Muster drafted a plan to save it. Adopt it into the renewal.",
  "Adopted. Now see what is at stake in Revenue.",
  "$186K is now covered by an active renewal plan, tracked to the outcome. Click to finish.",
  "Done",
];

/** A click-through product demo: the visitor clicks the highlighted spot to move on. */
export default function ProductTour() {
  const [step, setStep] = useState(0);
  const total = STEPS.length - 1;
  const label = `${Math.min(step + 1, total)} of ${total}`;
  const [showEnd, setShowEnd] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  const next = () => {
    const n = Math.min(step + 1, total);
    setStep(n);
    // Let the last state land first, then show the closing card.
    if (n === total) timer.current = window.setTimeout(() => setShowEnd(true), 700);
  };
  const restart = () => {
    window.clearTimeout(timer.current);
    setShowEnd(false);
    setStep(0);
  };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    if (showEnd) endRef.current?.focus();
  }, [showEnd]);

  const hint = STEPS[Math.min(step, total - 1)];

  return (
    <div className="mh-tour">
      <div className="mh-tour-progress" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <i key={i} className={i < step || step === total ? "is-done" : i === step ? "is-now" : ""} />
        ))}
      </div>
      <div className="mh-shot mh-tour-shot" aria-live="polite">
        {step === 0 && (
          <AppFrame active="Accounts">
            <AccountsScreen hotRow onRow={next} hint={hint} step={label} />
          </AppFrame>
        )}
        {step === 1 && (
          <AppFrame active="Accounts" crumb="Brightwell Logistics">
            <Account360Screen hotTab onTab={next} hint={hint} step={label} />
          </AppFrame>
        )}
        {(step === 2 || step === 3) && (
          <AppFrame active="Accounts" crumb="Brightwell Logistics">
            <HealthScreen
              hotReason={step === 2}
              onReason={next}
              openReason={step === 3}
              hotDraft={step === 3}
              onDraft={next}
              draftLabel="See the renewal it puts at risk"
              hint={hint}
              step={label}
            />
          </AppFrame>
        )}
        {step === 4 && (
          <AppFrame active="Renewals">
            <RenewalsScreen hotRow onRow={next} hint={hint} step={label} />
          </AppFrame>
        )}
        {(step === 5 || step === 6) && (
          <AppFrame active="Renewals" crumb="Brightwell Logistics">
            <RenewalBriefScreen
              hotAdopt={step === 5}
              onAdopt={next}
              adopted={step === 6}
              hotRevenue={step === 6}
              onRevenue={next}
              hint={hint}
              step={label}
            />
          </AppFrame>
        )}
        {step >= 7 && (
          <AppFrame active="Revenue">
            <RevenueScreen
              saveActive
              activeLabel="Renewal plan adopted today"
              hotSave={step === 7}
              onSave={next}
              hint={hint}
              step={label}
            />
          </AppFrame>
        )}
        {showEnd && (
          <div className="mh-tour-end">
            <div
              className="mh-tour-card"
              ref={endRef}
              tabIndex={-1}
              role="dialog"
              aria-labelledby="mh-tour-end-title"
            >
              <p className="mh-eyebrow">Demo complete</p>
              <h3 id="mh-tour-end-title">
                That was one workflow, <em>in eight clicks.</em>
              </h3>
              <p>
                This short click-through follows one account from a risk signal to a renewal plan and the revenue it
                protects. The full product also runs onboarding, approvals, expansion, QBR prep and Ask AI across every
                account.
              </p>
              <div className="mh-tour-card-actions">
                <Link {...BOOK_DEMO_LINK} className="mh-btn mh-btn-violet">
                  Book a demo <ArrowUpRight size={16} />
                </Link>
                <button type="button" className="mh-btn mh-btn-ghost-dark" onClick={restart}>
                  <RotateCcw size={14} /> Replay
                </button>
              </div>
              <small>See Muster on your own accounts, with your own data.</small>
            </div>
          </div>
        )}
      </div>
      <div className="mh-tour-foot">
        <span>{step === total ? "Tour complete" : `Step ${label}`}</span>
        {step > 0 && step < total && (
          <button type="button" onClick={restart}>
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
