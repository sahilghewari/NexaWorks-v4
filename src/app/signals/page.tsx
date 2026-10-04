import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import SignalMatrix from "@/components/signals/SignalMatrix";
import { signalSources, signals } from "@/data/signals";

export const metadata = {
  title: "Customer Signal Library: 40 Churn, Renewal & Expansion Signals | NexaWorks",
  description:
    "40 churn, renewal, and expansion signals organized by data source — each with a definition, concrete detection logic, and honest false-positive notes. The citable reference for B2B SaaS CS teams.",
  alternates: { canonical: "/signals" },
};

export default function SignalsHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            The Customer Signal Library
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            40 churn, renewal, and expansion signals, organized by where they hide.
          </h1>
          <p className="text-xl leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            Every signal below ships with three things most signal lists skip: a
            precise definition, concrete detection logic you can implement as a
            query or rule, and honest notes on when it lies to you. Because a
            signal without false-positive notes is just a superstition with a
            dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="#matrix"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Browse the matrix <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              <BookOpen size={18} className="mr-2" /> Ask about the Signal Stack Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Signal vs metric */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            What a signal is — and what it isn't
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            <p>
              A <strong style={{ color: "var(--nw-ink)" }}>metric</strong> tells you what
              happened. A <strong style={{ color: "var(--nw-ink)" }}>signal</strong> tells
              you what to do before it happens. Most CS teams drown in the first
              and starve for the second: their dashboards report the past in
              exquisite detail while the future walks out the door unnoticed.
            </p>
            <p>
              “NPS is 32” is a metric. “The champion's reply latency doubled over
              60 days” is a signal. The difference isn't sophistication — it's
              actionability. A signal points at a specific account, a specific
              change, and a specific next step. A metric points at a slide.
            </p>
            <p>
              Every entry in this library passes three tests before it earns the
              name:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10 mb-6">
            {[
              {
                n: "1",
                t: "It leads the outcome",
                d: "The change is observable weeks or months before the renewal, downgrade, or churn — not concurrently with it. Lagging indicators are autopsies.",
              },
              {
                n: "2",
                t: "It has detection logic",
                d: "You can write it as a query, a rule, or a report — against systems you already own. If it requires a feeling, it's an intuition, not a signal.",
              },
              {
                n: "3",
                t: "It names its false positives",
                d: "Every signal misfires in known ways. We document them, because a signal you can't argue with is a signal you'll eventually ignore.",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <p className="eyebrow mb-4" style={{ color: "var(--nw-accent)" }}>
                  Test {c.n}
                </p>
                <h3 className="text-xl mb-3" style={{ color: "var(--nw-ink)" }}>
                  {c.t}
                </h3>
                <p style={{ color: "var(--nw-ink-soft)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section id="matrix" className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-6xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            The signal matrix
          </h2>
          <p className="text-lg mb-10 max-w-3xl" style={{ color: "var(--nw-ink-soft)" }}>
            All {signals.length} signals, filterable by source. Lead time is how
            far in advance the signal typically appears; false-positive risk is
            how often it cries wolf. Full definitions live on the source pages.
          </p>
          <SignalMatrix />
        </div>
      </section>

      {/* Browse by source */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-6xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            Browse by source
          </h2>
          <p className="text-lg mb-10 max-w-3xl" style={{ color: "var(--nw-ink-soft)" }}>
            Signals hide in six places. Each source page covers why that source
            matters, every signal in it with detection logic and false
            positives, how to instrument it, and the pitfalls that burn teams.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signalSources.map((src) => {
              const count = signals.filter((s) => s.source === src.slug).length;
              return (
                <Link
                  key={src.slug}
                  href={`/signals/${src.page}`}
                  className="p-8 rounded-2xl transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
                >
                  <p className="eyebrow mb-4" style={{ color: "var(--nw-accent)" }}>
                    {count} signals
                  </p>
                  <h3 className="text-2xl mb-3" style={{ color: "var(--nw-ink)" }}>
                    {src.label}
                  </h3>
                  <p className="mb-6" style={{ color: "var(--nw-ink-soft)" }}>
                    {src.blurb}
                  </p>
                  <span
                    className="inline-flex items-center text-sm font-medium"
                    style={{ color: "var(--nw-ink)" }}
                  >
                    Explore the signals <ArrowRight size={16} className="ml-2" />
                  </span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/signals/salesforce"
            className="mt-6 p-8 rounded-2xl transition-transform hover:-translate-y-1 block"
            style={{ backgroundColor: "var(--nw-dark)", border: "1px solid var(--nw-line-dark)" }}
          >
            <p className="eyebrow mb-4" style={{ color: "var(--nw-accent-glow)" }}>
              Deep dive
            </p>
            <h3 className="text-2xl mb-3 text-white">
              Churn signals hiding in Salesforce
            </h3>
            <p className="mb-6" style={{ color: "var(--nw-warm-400)" }}>
              Five queries that surface renewal risk from the system you already
              own — close-date pushes, champion quiet periods, stakeholder
              changes — with honest notes on where Salesforce data lies.
            </p>
            <span className="inline-flex items-center text-sm font-medium text-white">
              Read the deep dive <ArrowRight size={16} className="ml-2" />
            </span>
          </Link>
        </div>
      </section>

      {/* Method */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-8" style={{ color: "var(--nw-ink)" }}>
            How this library was built
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            <p>
              These 40 signals were assembled from churn post-mortems, CS
              practitioner interviews, and thousands of buyer conversations in
              public CS communities — then filtered hard. For every ten
              candidate signals we considered, roughly six were cut: too vague
              to implement, too lagging to matter, or indistinguishable from a
              metric wearing a costume.
            </p>
            <p>
              What survived had to be <strong style={{ color: "var(--nw-ink)" }}>observable
              in a real system</strong> your team already owns — Salesforce,
              Gong, Zendesk, Mixpanel, Stripe, Gmail. Nothing here requires new
              software. That constraint is deliberate: we work alongside the CS
              platform you already own, and so should your signal layer.
            </p>
            <p>
              A note on honesty: lead times are practitioner-observed typical
              ranges, not research findings and not guarantees. Your segments
              will differ — enterprise cycles run longer, SMB cycles shorter.
              Calibrate every signal against your own history before trusting
              it. The library is versioned below; when we learn a signal
              misfires more than documented, we update the entry and log it.
            </p>
          </div>
          <div
            className="mt-10 p-8 rounded-2xl"
            style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
          >
            <p className="eyebrow mb-4" style={{ color: "var(--nw-accent)" }}>
              Update log
            </p>
            <ul className="space-y-3" style={{ color: "var(--nw-ink-soft)" }}>
              <li>
                <strong style={{ color: "var(--nw-ink)" }}>v1.0 — October 2026:</strong>{" "}
                Initial release. 40 signals across 6 sources, each with
                definition, detection logic, and false-positive notes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section section-dark" style={{ backgroundColor: "var(--nw-ink)" }}>
        <div className="container-nw max-w-4xl text-center">
          <h2 className="text-3xl mb-6 text-white">
            Want these signals running on your accounts?
          </h2>
          <p className="text-lg mb-10" style={{ color: "var(--nw-dark-soft)" }}>
            The Signal Stack Audit maps which of these 40 signals your stack can
            already detect, which data you're missing, and where your blind
            spots are. Three business days, $1,500, async.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
            >
              Get your free Account Risk Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium"
              style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white" }}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
