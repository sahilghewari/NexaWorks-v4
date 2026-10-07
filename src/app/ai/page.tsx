import Link from "next/link";
import { ArrowRight, Check, Eye, Users, Gauge, ListChecks } from "lucide-react";
import SnapshotTypeform from "@/components/marketing/SnapshotTypeform";

export const metadata = {
  title: "Free AI Visibility Snapshot | NexaWorks",
  description:
    "Find out what ChatGPT, Perplexity, Gemini and Claude say about your company when buyers ask who to buy from. Your visibility score, who shows up instead of you, and 3 concrete gaps — free.",
  alternates: { canonical: "/ai" },
};

const inside = [
  {
    icon: Eye,
    title: "Checked across 4 AI engines",
    text: "We run buyer-style prompts on ChatGPT, Perplexity, Gemini and Claude and record exactly where your company appears — and where it doesn't.",
  },
  {
    icon: Gauge,
    title: "Your visibility score",
    text: "One number that tells you how present you are in AI answers in your category, with the per-engine breakdown behind it.",
  },
  {
    icon: Users,
    title: "Who shows up instead of you",
    text: "The competitors the engines name when buyers ask. Most founders are surprised by at least one name on this list.",
  },
  {
    icon: ListChecks,
    title: "3 concrete gaps, shown",
    text: "Three specific, evidenced gaps in your AI presence — the kind you can hand to marketing on Monday. Not a generic checklist.",
  },
];

const steps = [
  {
    title: "Answer 6 quick questions",
    text: "Your email, company, website and top competitors. Sixty seconds, one question at a time.",
  },
  {
    title: "We run the buyer prompts",
    text: "A hand-run panel across the four engines — dated, per-engine observations, not an auto-generated PDF.",
  },
  {
    title: "Your snapshot lands in 3 business days",
    text: "Delivered to your inbox: your score, who shows up instead, and 3 gaps. Free, yours to keep.",
  },
];

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. The snapshot is free and yours to keep — no card, no contract, no catch. If you later want help fixing what it finds, that's a separate engagement scoped to your gaps.",
  },
  {
    q: "What do you need from me?",
    a: "Just the six questions above: your work email, name, company, website and competitors. No logins, no data access, no implementation.",
  },
  {
    q: "Why not just ask ChatGPT myself?",
    a: "You can — one prompt, one engine, one afternoon's anecdote. The snapshot is a structured panel: buyer-style prompts across four engines, scored consistently, with your competitors measured the same way. That's what turns a hunch into evidence.",
  },
  {
    q: "Will you spam me afterward?",
    a: "No. You get your snapshot and one follow-up to make sure it landed. Nothing else unless you ask for it.",
  },
];

export default function AiSnapshotPage() {
  return (
    <>
      {/* Hero + form */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl pt-12">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Free snapshot • No pricing talk • 3 business days
          </p>
          <h1 className="mb-6 text-white">
            Your buyers ask AI who to buy from.
            <br />
            Are you in the answer?
          </h1>
          <p className="text-xl leading-relaxed mb-4" style={{ color: "var(--nw-dark-soft)" }}>
            55% of B2B buyers now use AI to compare vendors before they ever reach your
            site. If your company doesn&apos;t appear in those answers, you&apos;re not
            losing to competitors — you&apos;re invisible to the shortlist itself.
          </p>
          <p className="text-xl leading-relaxed mb-12" style={{ color: "var(--nw-dark-soft)" }}>
            The free AI Visibility Snapshot shows you exactly where you stand.
          </p>
          <div id="get-snapshot" className="pb-20 scroll-mt-24">
            <SnapshotTypeform />
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            What&apos;s inside your snapshot
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Evidence, not vibes. Every claim in the snapshot is backed by a dated,
            per-engine observation you can check yourself.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {inside.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
              >
                <div className="mb-4" style={{ color: "var(--nw-accent)" }}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>
                  {item.title}
                </h4>
                <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-dark)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12 text-white">How it works</h2>
          <div className="space-y-10 mb-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-2xl mb-2 text-white">{step.title}</h4>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--nw-dark-soft)" }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-12" style={{ color: "var(--nw-ink)" }}>
            Questions founders ask us
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
          <div className="flex flex-col sm:flex-row gap-6 pb-24 items-start">
            <a
              href="#get-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "var(--nw-accent)" }}
            >
              Get my free snapshot <ArrowRight size={18} className="ml-2" />
            </a>
            <p className="text-sm self-center" style={{ color: "var(--nw-ink-soft)" }}>
              <Check size={16} className="inline mr-1" /> No card. No contract. Yours to keep.
            </p>
          </div>
          <p className="text-sm pb-8" style={{ color: "var(--nw-ink-soft)" }}>
            Looking for the churn-signal diagnostic instead?{" "}
            <Link href="/account-risk-snapshot" className="underline">
              Account Risk Snapshot
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
