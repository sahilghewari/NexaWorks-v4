import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "NexaWorks for Gainsight Customers | NexaWorks",
  description:
    "Already on Gainsight? NexaWorks works alongside it — back-tested health scores, evidence-backed account briefs, and signal-layer intelligence delivered into the platform you own. No rip-and-replace.",
  alternates: { canonical: "/platforms/gainsight" },
};

const offerings = [
  {
    title: "Back-tested health scores, inside Gainsight",
    text: "We rebuild your score design from your renewal history and validate it against 12+ months of outcomes — then implement it in your Gainsight instance. Same platform, a score your CSMs finally trust.",
  },
  {
    title: "Evidence-backed briefs, delivered where CSMs work",
    text: "Weekly account briefs and ranked risk lists written into Gainsight as notes, custom fields, or timeline entries — or delivered via Slack and email. The intelligence lands in the workflow; nobody learns a new tool.",
  },
  {
    title: "Signal coverage for what Gainsight doesn't see",
    text: "Call transcripts, ticket sentiment, email responsiveness — the sources outside the platform's native reach. We instrument them and join them to your Gainsight data, so the account view is finally complete.",
  },
];

const faqs = [
  {
    q: "Do you compete with Gainsight?",
    a: "No — we work alongside it. Gainsight is the system of record and workflow engine; we're the intelligence layer that makes its scores trustworthy and its CSMs faster. We have no interest in replacing a platform you've already implemented.",
  },
  {
    q: "Do you need admin access to our Gainsight instance?",
    a: "For score rebuilds, yes — scoped admin for the implementation period, with everything documented. For briefs and risk lists, we can deliver via API, email, or Slack with much lighter access. Scopes are agreed up front, read-only wherever possible.",
  },
  {
    q: "We're mid-implementation. Can you help now?",
    a: "Yes — the signal work runs in parallel and usually de-risks the implementation: we find the data gaps before the platform starts scoring them. You'll also have working intelligence months before the implementation's first trusted output.",
  },
  {
    q: "What about ChurnZero, Vitally, or Totango?",
    a: "Same approach, different API. The signal layer is platform-agnostic by design — if your CS platform has an API or accepts notes and custom fields, we work with it.",
  },
];

export default function GainsightPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            For Gainsight Customers
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Already on Gainsight? Keep it. We&apos;ll make it smarter.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            You&apos;ve done the hard part — the implementation, the admin, the adoption.
            But if the health scores still aren&apos;t trusted and CSMs still prep QBRs by
            hand, the platform gave you workflow without intelligence. That&apos;s the gap
            we fill, inside the Gainsight you own.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            No rip-and-replace. No competing platform. A signal layer on top of your
            investment — back-tested scores, evidence-backed briefs, and the sources
            Gainsight doesn&apos;t natively see.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              See what we&apos;d find <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/customer-success-ai/health-score"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              How score rebuilds work
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            Three ways we work with your Gainsight.
          </h2>
          <div className="space-y-6">
            {offerings.map((o, i) => (
              <div
                key={o.title}
                className="rounded-xl p-6 md:p-8"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)" }}>
                  {i + 1}
                </p>
                <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{o.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8 text-white">Why this works.</h2>
          <ul className="space-y-4">
            {[
              "Your implementation investment is protected — everything builds on it, nothing replaces it.",
              "Scores get back-tested against your history before your CSMs see them — trust is earned, not assumed.",
              "Intelligence arrives where CSMs already work — in Gainsight, Slack, or email. No new tabs.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-lg" style={{ color: "var(--nw-warm-400)" }}>
                <Check size={20} className="mt-1 flex-shrink-0" strokeWidth={2} style={{ color: "var(--nw-accent-glow)" }} />
                {item}
              </li>
            ))}
          </ul>
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
