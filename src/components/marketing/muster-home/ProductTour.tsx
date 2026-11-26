"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { AppFrame, ApprovalsScreen, HealthScreen, TodayScreen } from "./screens";

const STEPS = [
  "Muster flagged Brightwell overnight. Click the account.",
  "Every reason links to its record. Click the second one.",
  "That is the proof. Now open the save play Muster drafted.",
  "Read the draft, then approve it.",
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
    // Let the "Sent" state land first, then show the closing card.
    if (n === total) timer.current = window.setTimeout(() => setShowEnd(true), 1100);
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

  return (
    <div className="mh-tour">
      <div className="mh-tour-progress" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <i key={i} className={i < step || step === total ? "is-done" : i === step ? "is-now" : ""} />
        ))}
      </div>
      <div className="mh-shot mh-tour-shot" aria-live="polite">
        {step === 0 && (
          <AppFrame active="Today">
            <TodayScreen hotRow onRow={next} hint={STEPS[0]} step={label} />
          </AppFrame>
        )}
        {(step === 1 || step === 2) && (
          <AppFrame active="Health">
            <HealthScreen
              hotReason={step === 1}
              onReason={next}
              openReason={step === 2}
              hotDraft={step === 2}
              onDraft={next}
              hint={STEPS[step]}
              step={label}
            />
          </AppFrame>
        )}
        {(step === 3 || step === 4) && (
          <AppFrame active="Approvals">
            <ApprovalsScreen
              hotApprove={step === 3}
              onApprove={next}
              approved={step === 4}
              hint={STEPS[3]}
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
                That was one workflow, <em>in four clicks.</em>
              </h3>
              <p>
                This short click-through shows one Muster feature: turning a signal into approved work. The full
                product also runs onboarding, renewals, expansion, QBR prep and Ask AI across every account.
              </p>
              <div className="mh-tour-card-actions">
                <Link href="/contact" className="mh-btn mh-btn-violet">
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
