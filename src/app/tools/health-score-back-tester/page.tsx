import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HealthScoreBacktester from "@/components/Calculators/HealthScoreBacktester";

export const metadata = {
  title: "Health Score Back-tester | NexaWorks",
  description:
    "Would your health score have caught your churn? Paste your score history and find out in 30 seconds. Free, runs entirely in your browser — your data never leaves the page.",
  alternates: { canonical: "/tools/health-score-back-tester" },
};

const faqs = [
  {
    q: "What exactly does a back-test prove?",
    a: "Whether your score would have flagged the accounts that actually churned — before they churned. A score is a prediction; a back-test grades the prediction against history. If it cannot predict your past churn, it will not predict your future churn.",
  },
  {
    q: "What data do I need?",
    a: "Three columns: account, health score (0–100, or red/yellow/green), and status (churned or active). Use each score as it stood roughly 90 days before the outcome. A dozen churned accounts is enough for a meaningful read; more history is better.",
  },
  {
    q: "Is my data uploaded anywhere?",
    a: "No. The entire test runs in your browser. Nothing is sent to any server — close the tab and it is gone.",
  },
  {
    q: "What is a good catch rate?",
    a: "In a 2026 poll of CS leaders, 82% said their health score caught less than half of churn — so anything above 50% already beats most teams. Above 75% is strong. Below 50% means the score is measuring the wrong things, usually activity instead of value.",
  },
  {
    q: "My score failed the test. Now what?",
    a: "That is the normal outcome — and the fixable one. We design and back-test replacement scores on your stack as a fixed-price engagement.",
  },
];

export default function BacktesterPage() {
  return (
    <>
      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Free tool • 30 seconds • Your data never leaves the page
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Health Score Back-tester
          </h1>
          <p className="text-xl leading-relaxed mb-4" style={{ color: "var(--nw-ink-soft)" }}>
            Would your health score have caught your churn? Paste your score history and
            get the answer in 30 seconds: your catch rate, your false alarm rate, and an
            honest read on whether your CSMs should trust the number.
          </p>
          <p className="text-xl leading-relaxed mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            A score is a prediction. This grades the prediction.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-24" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <HealthScoreBacktester />
        </div>
      </section>

      {/* How to read it */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12 text-white">How to read your result</h2>
          <div className="space-y-8">
            {[
              {
                title: "Catch rate is the only number that matters",
                text: "Of the accounts that churned, what share did your score flag in time? Everything else — model sophistication, number of inputs, dashboard polish — is decoration if this number is low.",
              },
              {
                title: "False alarms are why CSMs stop looking",
                text: "A score that cries wolf trains your team to ignore it. The threshold slider shows the trade-off directly: every score buys catch rate with false alarms. The art is spending that budget where churn actually lives.",
              },
              {
                title: "The misses are the roadmap",
                text: "Pull the list of churned accounts your score missed and ask what they had in common — quiet champions, stalled onboarding, sponsor changes. Those patterns are the inputs your next score needs.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="text-xl mb-2 text-white">{item.title}</h4>
                <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            Questions
          </h2>
          <div className="space-y-10 mb-16">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h4 className="text-xl mb-3" style={{ color: "var(--nw-ink)" }}>
                  {faq.q}
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-6 pb-24">
            <Link
              href="/customer-health-score-consultant"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Get a score that passes <ArrowRight size={18} className="ml-2" />
            </Link>
            <p className="text-sm self-center" style={{ color: "var(--nw-ink-soft)" }}>
              Fixed scope. Fixed price. Built on your stack.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
