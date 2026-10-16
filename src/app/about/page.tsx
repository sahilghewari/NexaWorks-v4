import Link from "next/link";

export const metadata = {
  title: "About the Founder",
  description: "Learn about the founder behind NexaWorks and our philosophy on customer intelligence.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-3xl page-intro">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            About NexaWorks
          </p>
          <h1 className="mb-10" style={{ color: "var(--nw-ink)" }}>
            Founder-led.<br />No layers.
          </h1>

          <div className="text-lg leading-relaxed space-y-6" style={{ color: "var(--nw-ink-soft)" }}>
            <div className="border-l-2 pl-5 mb-8" style={{ borderColor: "var(--nw-accent)" }}>
            <p className="font-medium">Sahil · Founder, NexaWorks</p>
            <a href="mailto:hello@nexaworks.tech" className="inline-block mt-2 text-sm underline underline-offset-4">Talk directly with the founder →</a>
          </div>
          <p className="text-xl md:text-2xl" style={{ color: "var(--nw-ink)" }}>
              NexaWorks was built on a simple premise: B2B SaaS companies have enough software. What they lack is a reliable way to make their unstructured data tell the commercial truth.
            </p>

            <p>
              When you hire NexaWorks, you aren&apos;t buying a SaaS platform with a long implementation cycle, and you aren&apos;t dealing with an agency that hands your project down to junior associates. You are working directly with the founder.
            </p>

            <p>
              Over the past year, I&apos;ve seen how CS teams struggle to predict churn because the signals are buried in Gong calls and Zendesk tickets. The solution isn&apos;t another dashboard. The solution is a tailored intelligence pipeline that reads the data, surfaces the risk, and provides the evidence so your team can act.
            </p>
          </div>

          <hr className="my-16 border-t" style={{ borderColor: "var(--nw-line-light)" }} />

          <h2 className="mb-8" style={{ color: "var(--nw-ink)" }}>Our Philosophy</h2>

          <ul className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: "var(--nw-accent)" }} />
              <div>
                <strong style={{ color: "var(--nw-ink)" }}>Honesty over Hype:</strong> AI isn&apos;t magic. It&apos;s a tool for extracting patterns. We don&apos;t overpromise.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: "var(--nw-accent)" }} />
              <div>
                <strong style={{ color: "var(--nw-ink)" }}>Fixed Scope:</strong> We believe in clear, bounded engagements. You should know exactly what you&apos;re paying for.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: "var(--nw-accent)" }} />
              <div>
                <strong style={{ color: "var(--nw-ink)" }}>Human-in-the-Loop:</strong> We don&apos;t believe in autonomous systems making unsupervised commercial decisions. We believe in empowering humans with better context.
              </div>
            </li>
          </ul>

          <div className="mt-16 p-8 md:p-12" style={{ backgroundColor: "var(--nw-warm-100)", border: "1px solid var(--nw-line-light)" }}>
            <h3 className="mb-6" style={{ color: "var(--nw-ink)" }}>Ready to discuss your workflow?</h3>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
