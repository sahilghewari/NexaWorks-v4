import Link from "next/link";
import { ArrowDown, Check, X } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ————— HERO — Asymmetric, never centered ————— */}
      <section style={{ backgroundColor: "var(--nw-canvas)" }} className="relative overflow-hidden">
        <div className="container-nw pt-24 pb-20 md:pt-40 md:pb-32">
          {/* Eyebrow */}
          <p className="eyebrow mb-8" style={{ color: "var(--nw-accent)" }}>
            Customer Intelligence — For B2B SaaS Executives
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 style={{ color: "var(--nw-ink)" }} className="mb-8">
                We know why<br className="hidden md:block" /> customers leave.
              </h1>
              <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl" style={{ color: "var(--nw-ink-soft)" }}>
                Scoped, fixed-price intelligence pilots that connect your CRM,
                calls, support, and product signals — so your CS team sees the
                risk before it costs you the renewal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--nw-ink)" }}
                >
                  Book a discovery call
                </Link>
                <Link
                  href="#method"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-sm font-medium transition-colors"
                  style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
                >
                  See the method <ArrowDown size={14} />
                </Link>
              </div>
              <p className="eyebrow flex items-center gap-4" style={{ color: "var(--nw-ink-soft)", fontSize: "11px", letterSpacing: "0.1em" }}>
                <span>Founder-led</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--nw-accent)" }} />
                <span>Fixed scope & price</span>
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--nw-accent)" }} />
                <span>No rip-and-replace</span>
              </p>
            </div>

            {/* Deliverable artifact mockup */}
            <div className="lg:col-span-4 relative hidden lg:flex items-start justify-end">
              <div
                className="w-[320px] rounded-lg bg-white p-6 shadow-2xl"
                style={{ border: "1px solid var(--nw-line-light)", transform: "rotate(2deg) translateY(20px)" }}
              >
                <p className="eyebrow mb-4" style={{ color: "var(--nw-accent)" }}>
                  Meeting Brief · Illustrative Sample
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="eyebrow mb-0.5" style={{ color: "var(--nw-ink)", fontSize: "11px" }}>ACCOUNT</p>
                    <p className="text-sm" style={{ color: "var(--nw-ink)" }}>████████ Corp</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-0.5" style={{ color: "var(--nw-ink)", fontSize: "11px" }}>RISK SIGNAL</p>
                    <p className="text-sm" style={{ color: "var(--nw-amber)" }}>Champion departed · Usage −22% · Open P1 ticket</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-0.5" style={{ color: "var(--nw-ink)", fontSize: "11px" }}>EVIDENCE</p>
                    <p className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>Gong call 09/12, Zendesk #4891, SFDC opp stage unchanged 42d</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-0.5" style={{ color: "var(--nw-accent)", fontSize: "11px" }}>RECOMMENDED ACTION</p>
                    <p className="text-sm" style={{ color: "var(--nw-ink)" }}>Escalate to VP CS. Schedule exec alignment before renewal window.</p>
                  </div>
                </div>
                <p className="eyebrow mt-4" style={{ color: "var(--nw-ink-soft)", fontSize: "9px" }}>
                  ILLUSTRATIVE SAMPLE — NOT A SHIPPED PRODUCT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————— PROBLEM — Dark register with stats ————— */}
      <section className="section-dark sp-section">
        <div className="container-nw">
          <p className="eyebrow mb-12" style={{ color: "var(--nw-accent-glow)" }}>The Problem</p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-7">
              <h2 className="text-white mb-8">
                Your team sees the facts. Nobody sees the pattern.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--nw-dark-soft)" }}>
                The renewal is 60 days out. Usage is down. Your champion went
                quiet two weeks ago. A severity-1 support ticket just opened.
                Implementation is behind. The signals are sitting in Salesforce,
                Zendesk, and Gong — but because they don't live in one place,
                nobody connects the dots until the post-mortem.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center gap-8">
              {[
                { number: "60", unit: "days", label: "Renewal approaching" },
                { number: "−22%", unit: "", label: "Product usage decline" },
                { number: "0", unit: "replies", label: "From your champion this month" },
              ].map((stat) => (
                <div key={stat.label} className="pb-8" style={{ borderBottom: "1px solid var(--nw-line-dark)" }}>
                  <p className="text-white text-4xl md:text-5xl tracking-tight mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                    {stat.number}
                    <span className="text-lg ml-1" style={{ color: "var(--nw-dark-soft)" }}>{stat.unit}</span>
                  </p>
                  <p className="text-sm" style={{ color: "var(--nw-dark-soft)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— METHOD — Branded diagram ————— */}
      <section className="sp-section" id="method" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>The Method</p>
          <h2 className="mb-4 max-w-3xl" style={{ color: "var(--nw-ink)" }}>
            How we build your intelligence workflow
          </h2>
          <p className="text-lg max-w-xl mb-16" style={{ color: "var(--nw-ink-soft)" }}>
            We don't sell software. We sell scoped pilots that prove value on
            your actual data, without a multi-year lock-in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px" style={{ backgroundColor: "var(--nw-line-light)" }} />

            {[
              { num: "01", name: "Diagnose", timeline: "Days 1–2", desc: "Map your current CS workflows. Identify which systems hold the missing context." },
              { num: "02", name: "Connect", timeline: "Days 3–5", desc: "Establish read-only access to 3–5 source systems. Salesforce, Gong, Zendesk — safely." },
              { num: "03", name: "Extract", timeline: "Weeks 2–5", desc: "Weekly intelligence briefs and automated risk signals delivered to Slack or your inbox." },
              { num: "04", name: "Review", timeline: "Week 6", desc: "Pilot results, ROI hypothesis, and a production architecture proposal — delivered." },
            ].map((step, i) => (
              <div
                key={step.num}
                className="relative p-6 md:p-8"
                style={{
                  borderRight: i < 3 ? "1px solid var(--nw-line-light)" : "none",
                  borderBottom: "1px solid var(--nw-line-light)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10 eyebrow"
                  style={{
                    backgroundColor: "var(--nw-canvas)",
                    border: "1px solid var(--nw-line-light)",
                    fontSize: "13px",
                    color: "var(--nw-accent)",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ color: "var(--nw-ink)" }} className="mb-1">{step.name}</h3>
                <p className="eyebrow mb-3" style={{ color: "var(--nw-accent)", fontSize: "11px", letterSpacing: "0.15em" }}>
                  {step.timeline}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— PRICING — Asymmetric cards ————— */}
      <section className="section-dark sp-section" id="pricing">
        <div className="container-nw">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent-glow)" }}>Pricing</p>
          <h2 className="text-white mb-4">Fixed scope. Fixed price.</h2>
          <p className="text-lg mb-16 max-w-xl" style={{ color: "var(--nw-dark-soft)" }}>
            No open-ended retainers. Founding-client pricing for the first teams who work with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Blueprint — narrower */}
            <div className="md:col-span-5 rounded-xl p-8 md:p-10 flex flex-col" style={{ backgroundColor: "var(--nw-dark-mid)", border: "1px solid var(--nw-line-dark)" }}>
              <p className="eyebrow mb-6" style={{ color: "var(--nw-dark-soft)" }}>10 Business Days</p>
              <h3 className="text-white text-2xl mb-1" style={{ fontFamily: "var(--font-display)" }}>Intelligence Blueprint</h3>
              <p className="text-3xl tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--nw-accent-glow)", fontWeight: 400 }}>$3,500</p>
              <p className="eyebrow mb-8" style={{ color: "var(--nw-accent-glow)", fontSize: "11px" }}>Fully credited toward the Pilot</p>
              <ul className="space-y-3 mb-10 flex-1">
                {["Data & workflow map", "5–15 strategic account review", "Prioritized use cases", "Pilot architecture & ROI hypothesis"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--nw-warm-400)" }}>
                    <Check size={16} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} style={{ color: "var(--nw-accent-glow)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/customer-intelligence-blueprint"
                className="flex h-11 items-center justify-center rounded-full text-sm font-medium text-white transition-colors"
                style={{ border: "1px solid var(--nw-line-dark)" }}
              >
                View Blueprint
              </Link>
            </div>

            {/* Pilot — wider, accent border */}
            <div className="md:col-span-7 rounded-xl p-8 md:p-10 flex flex-col relative" style={{ backgroundColor: "var(--nw-dark-mid)", border: "2px solid var(--nw-accent)" }}>
              <span className="absolute -top-3 left-8 px-3 py-0.5 rounded-full text-white eyebrow" style={{ backgroundColor: "var(--nw-accent)", fontSize: "10px" }}>
                MOST COMMON
              </span>
              <p className="eyebrow mb-6" style={{ color: "var(--nw-dark-soft)" }}>4–6 Weeks · Founding-Client Pricing</p>
              <h3 className="text-white text-2xl mb-1" style={{ fontFamily: "var(--font-display)" }}>Intelligence Pilot</h3>
              <p className="text-4xl tracking-tight mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--nw-accent-glow)", fontWeight: 400 }}>$15,000</p>
              <p className="eyebrow mb-8" style={{ color: "var(--nw-dark-soft)", fontSize: "11px" }}>In exchange for feedback & permission to publish a case study</p>
              <ul className="space-y-3 mb-10 flex-1">
                {["One-click meeting briefs", "Chronological account timelines", "Evidence-backed risk & opportunity signals", "Weekly portfolio action lists (Slack/Email)", "Pilot-results report with production proposal"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--nw-warm-400)" }}>
                    <Check size={16} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} style={{ color: "var(--nw-accent-glow)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/customer-intelligence-pilot"
                className="flex h-12 items-center justify-center rounded-full text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "var(--nw-accent)" }}
              >
                View Pilot Details
              </Link>
            </div>
          </div>

          <p className="text-sm mt-8 max-w-xl" style={{ color: "var(--nw-warm-400)" }}>
            Follow-on: Renewal Risk & Expansion Intelligence ($30K–$75K) · Deal-to-Delivery Assurance ($40K–$100K+) · Managed Improvement ($3K–$15K/mo).{" "}
            <Link href="/contact" className="underline" style={{ color: "var(--nw-accent-glow)" }}>Inquire</Link>
          </p>
        </div>
      </section>

      {/* ————— INTELLIGENCE STANDARD ————— */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--nw-canvas)", borderTop: "1px solid var(--nw-line-light)", borderBottom: "1px solid var(--nw-line-light)" }}>
        <div className="container-nw">
          <p className="eyebrow mb-8 text-center" style={{ color: "var(--nw-accent)" }}>
            Every output answers four questions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "01", q: "What changed?" },
              { num: "02", q: "Why does it matter commercially?" },
              { num: "03", q: "What evidence supports it?" },
              { num: "04", q: "What should the team do next?" },
            ].map((item) => (
              <div key={item.num} className="text-center md:text-left">
                <p className="eyebrow mb-2" style={{ color: "var(--nw-accent)", fontSize: "12px" }}>{item.num}</p>
                <p className="font-medium" style={{ color: "var(--nw-ink)" }}>{item.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— HONEST LIMITATIONS ————— */}
      <section className="sp-section" id="services" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>Honesty As Policy</p>
            <h2 className="mb-6" style={{ color: "var(--nw-ink)" }}>What this isn't.</h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>
              We tell every prospect exactly what we don't do. It's not modesty — it's how we build trust with VPs who are tired of vendor overpromises.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            {[
              { title: "Not a Gainsight / Vitally replacement", desc: "We augment your CS platform with unstructured context it can't extract on its own." },
              { title: "No autonomous agents sending emails", desc: "Human-in-the-loop always. We surface the risk; your leaders review and act." },
              { title: "No generic company-wide search", desc: "We build scoped pipelines for specific commercial questions, not a chatbot." },
              { title: "No legal interpretation of contracts", desc: "We read structured and unstructured data — not legal documents." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 pb-6" style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(217, 119, 6, 0.1)" }}>
                  <X size={12} strokeWidth={2} style={{ color: "var(--nw-amber)" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--nw-ink)" }}>{item.title}</p>
                  <p className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— LEAD MAGNET ————— */}
      <section className="section-dark sp-section" id="sample-brief">
        <div className="container-nw text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent-glow)" }}>See What We Deliver</p>
          <h2 className="text-white mb-6">See a sample<br />meeting brief.</h2>
          <p className="mb-10 mx-auto" style={{ color: "var(--nw-dark-soft)" }}>
            Curious what the output looks like? Drop your email and we'll send an illustrative sample of a Customer Intelligence Pilot meeting brief.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Work email"
              required
              className="flex-1 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:ring-1"
              style={{
                backgroundColor: "var(--nw-dark-mid)",
                border: "1px solid var(--nw-line-dark)",
                color: "white",
              }}
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-accent)" }}
            >
              Send sample
            </button>
          </form>
        </div>
      </section>

      {/* ————— MOBILE STICKY CTA ————— */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 backdrop-blur-md"
        style={{ backgroundColor: "rgba(250, 250, 248, 0.9)", borderTop: "1px solid var(--nw-line-light)" }}
      >
        <Link
          href="/contact"
          className="flex h-12 w-full items-center justify-center rounded-full text-sm font-medium text-white"
          style={{ backgroundColor: "var(--nw-ink)" }}
        >
          Book a discovery call
        </Link>
      </div>
    </>
  );
}
