import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SignalStackAudit from "@/components/Calculators/SignalStackAudit";

export const metadata = {
  title: "Customer Signal Stack Audit | NexaWorks",
  description:
    "Where are your churn signals hiding — and which ones are you blind to? Answer 15 questions about your CS data stack and get your signal map in 3 minutes. Free, runs entirely in your browser.",
  alternates: { canonical: "/tools/signal-stack-audit" },
};

const faqs = [
  {
    q: "What does the audit actually measure?",
    a: "Coverage across the six sources where churn, renewal, and expansion signals live: CRM, call transcripts, support tickets, product usage, billing, and the relationship layer. Each question maps to real detection logic — the same logic in our signal library.",
  },
  {
    q: "Is my data uploaded anywhere?",
    a: "No. The entire audit runs in your browser. Nothing is sent to any server — close the tab and it is gone.",
  },
  {
    q: "What do I do with the results?",
    a: "The three blind spots are ordered by impact, each linked to the signal guide for that source with concrete detection logic. If you want the full version — us reviewing your actual stack instead of a questionnaire — that's the $1,500 Signal Stack Audit engagement, delivered in 3 business days.",
  },
  {
    q: "How honest should I be?",
    a: "Completely. 'Partially' means it exists but nobody trusts it, or it covers some accounts but not others. The audit only works if the answers reflect reality, not the roadmap.",
  },
];

export default function SignalStackAuditPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Free Tool
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            The Customer Signal Stack Audit.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Fifteen questions about your CS data stack. Three minutes. At the end you get
            your signal map: which sources you&apos;re reading, which ones you&apos;re blind
            to, and where the cheapest wins are.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;There is no single place where those signals come together.&rdquo;</em>{" "}
            Start by finding out how many places yours are scattered across.
          </p>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <SignalStackAudit />
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-10" style={{ color: "var(--nw-ink)" }}>
            Questions, answered honestly.
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="pb-8" style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
                <h3 className="text-xl mb-3" style={{ color: "var(--nw-ink)" }}>{faq.q}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Get the free Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
