import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tariff Intelligence (Paused) | NexaWorks",
  description:
    "NexaWorks' Tariff Intelligence practice is currently paused while we focus on customer signal work for B2B SaaS teams.",
  alternates: { canonical: "/tariff-intelligence" },
  robots: { index: false, follow: true },
};

export default function TariffIntelligencePage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Practice status: paused
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Tariff Intelligence is on pause.
          </h1>
          <p className="text-xl leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            We have parked our tariff work to focus entirely on customer signal
            intelligence for B2B SaaS teams — finding the churn, renewal, and
            expansion signals hiding across CRM, calls, tickets, and product
            data. If tariff intelligence returns, it will be announced here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-24">
            <Link
              href="/"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              See what we are building now <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/signals"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Browse the Signal Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
