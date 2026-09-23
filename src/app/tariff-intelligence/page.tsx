import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tariff Intelligence for US Importers | NexaWorks",
  description: "Specialized intelligence services for US importers navigating tariff complexities.",
};

export default function TariffIntelligencePage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Specialized Practice
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>Tariff Intelligence for US Importers</h1>
          
          <p className="text-xl leading-relaxed mb-16" style={{ color: "var(--nw-ink-soft)" }}>
            Beyond our SaaS practices, we offer specialized intelligence and data-structuring services for US importers dealing with complex tariff classifications, supply chain risks, and compliance tracking.
          </p>

          <div className="p-10 mb-16" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
            <h2 className="text-2xl mb-4" style={{ color: "var(--nw-ink)" }}>The Challenge</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
              US importers face rapidly changing tariff schedules, exception rulings, and compliance documentation. The data is often unstructured, living in PDFs, supplier emails, and government portals.
            </p>
            
            <h2 className="text-2xl mb-4" style={{ color: "var(--nw-ink)" }}>Our Approach</h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
              We build custom extraction pipelines that monitor regulatory changes, structure supplier documentation, and map products to current tariff codes, saving hours of manual compliance work and reducing penalty risks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pb-24">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ backgroundColor: "var(--nw-ink)", color: "white" }}
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
