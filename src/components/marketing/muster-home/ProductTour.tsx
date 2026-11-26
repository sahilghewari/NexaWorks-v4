"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
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
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));

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
        {step === total && (
          <div className="mh-tour-done">
            <p>From signal to sent in four clicks. Muster tracks what happens next.</p>
            <button type="button" className="mh-btn mh-btn-ghost-dark" onClick={() => setStep(0)}>
              <RotateCcw size={14} /> Replay
            </button>
          </div>
        )}
      </div>
      <div className="mh-tour-foot">
        <span>{step === total ? "Tour complete" : `Step ${label}`}</span>
        {step > 0 && step < total && (
          <button type="button" onClick={() => setStep(0)}>
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
