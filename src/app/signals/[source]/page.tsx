import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { signalSources, signals } from "@/data/signals";
import type { Metadata } from "next";

export function generateStaticParams() {
  return signalSources.map((s) => ({ source: s.page }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ source: string }>;
}): Promise<Metadata> {
  const { source } = await params;
  const info = signalSources.find((s) => s.page === source);
  if (!info) return { title: "Signals | NexaWorks" };
  const count = signals.filter((s) => s.source === info.slug).length;
  return {
    title: `${info.label} Churn Signals: ${count} Early-Warning Signals | NexaWorks`,
    description: `The ${count} churn, renewal, and expansion signals hiding in ${info.label} — each with definition, detection logic, and false-positive notes. ${info.blurb}`,
    alternates: { canonical: `/signals/${info.page}` },
  };
}

const fpColor: Record<string, string> = {
  Low: "var(--nw-accent)",
  Medium: "#b7791f",
  High: "#b34434",
};

export default async function SignalSourcePage({
  params,
}: {
  params: Promise<{ source: string }>;
}) {
  const { source } = await params;
  const info = signalSources.find((s) => s.page === source);
  if (!info) {
    return (
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <h1 style={{ color: "var(--nw-ink)" }}>Source not found</h1>
          <Link href="/signals" className="underline" style={{ color: "var(--nw-accent)" }}>
            Back to the signal library
          </Link>
        </div>
      </section>
    );
  }
  const list = signals.filter((s) => s.source === info.slug);
  const others = signalSources.filter((s) => s.page !== source);

  return (
    <>
      {/* Hero */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <Link
            href="/signals"
            className="inline-flex items-center text-sm mb-8"
            style={{ color: "var(--nw-ink-soft)" }}
          >
            <ArrowLeft size={16} className="mr-2" /> Signal library
          </Link>
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Signals in {info.label} · {list.length} signals
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            The churn signals hiding in {info.label.toLowerCase()}.
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            {info.blurb}
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-6" style={{ color: "var(--nw-ink)" }}>
            Why this source matters
          </h2>
          <p className="text-lg leading-relaxed mb-14" style={{ color: "var(--nw-ink-soft)" }}>
            {info.why}
          </p>

          <div className="space-y-8">
            {list.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="p-8 md:p-10 rounded-2xl"
                style={{ backgroundColor: "var(--nw-canvas)", border: "1px solid var(--nw-line-light)" }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="eyebrow"
                    style={{ color: "var(--nw-accent)", fontSize: "12px" }}
                  >
                    {s.sourceLabel}
                  </span>
                  <span className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>
                    Typical lead time: <strong style={{ color: "var(--nw-ink)" }}>{s.leadTime}</strong>
                  </span>
                  <span className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>
                    False-positive risk:{" "}
                    <strong style={{ color: fpColor[s.fpRisk] }}>{s.fpRisk}</strong>
                  </span>
                </div>
                <h3 className="text-2xl mb-4" style={{ color: "var(--nw-ink)" }}>
                  {s.name}
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
                  {s.definition}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
                  >
                    <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)", fontSize: "12px" }}>
                      Detection logic
                    </p>
                    <p style={{ color: "var(--nw-ink-soft)" }}>{s.detection}</p>
                  </div>
                  <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
                  >
                    <p className="eyebrow mb-3" style={{ color: "#b34434", fontSize: "12px" }}>
                      When it lies to you
                    </p>
                    <p style={{ color: "var(--nw-ink-soft)" }}>{s.falsePositives}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instrument + pitfalls */}
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
            >
              <h3 className="text-xl mb-4" style={{ color: "var(--nw-ink)" }}>
                How to instrument it
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                {info.instrument}
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}
            >
              <h3 className="text-xl mb-4" style={{ color: "var(--nw-ink)" }}>
                Common pitfalls
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
                {info.pitfalls}
              </p>
            </div>
          </div>

          <h3 className="text-2xl mb-6" style={{ color: "var(--nw-ink)" }}>
            Signals in the other sources
          </h3>
          <div className="flex flex-wrap gap-3 mb-14">
            {others.map((o) => (
              <Link
                key={o.page}
                href={`/signals/${o.page}`}
                className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
                style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
              >
                {o.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Get your free Account Risk Snapshot <ArrowRight size={18} className="ml-2" />
            </Link>
            <p className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>
              We run signals like these against your 20 riskiest accounts — before
              you sign anything.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
