import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Why 'Healthy' Accounts Churn | NexaWorks",
  description:
    "Green health score. Strong adoption. Plenty of engagement. The account churned anyway. A post-mortem framework for the churns your dashboards said were impossible.",
  alternates: { canonical: "/guides/green-then-gone" },
};

const autopsy = [
  {
    title: "Reconstruct the people timeline, not the usage timeline",
    text: "Pull every stakeholder change in the 6 months before the churn: title changes, departures, new faces on calls, the champion's last meaningful activity. In most green-then-gone cases, the people story explains what the usage story couldn't — the product was fine, the relationship wasn't.",
  },
  {
    title: "Read the last 90 days of tickets for tone, not volume",
    text: "Volume was probably normal — that's why the score stayed green. Read for tone: when did 'thanks!' become 'per my last email'? When did the questions shift from how-to to workaround? Sentiment turns are visible in writing months before they show up in any metric.",
  },
  {
    title: "Find the meeting that stopped happening",
    text: "Which recurring touch went quiet first — the QBR, the cadence call, the Slack check-in? Absence is the signal teams systematically underweight because no system alerts on something not happening. Calendar history is a churn dataset most teams never query.",
  },
  {
    title: "Ask what the score measured — and what it didn't",
    text: "Write down every input to the health score at the time. Then write down what the post-mortem found. The gap between those two lists is your score redesign spec: it's almost always people signals the score never included.",
  },
  {
    title: "Write the one-paragraph lesson",
    text: "Not a 20-slide deck — one paragraph: what we missed, when we could have caught it, what changes now. File it where the next CSM will find it. Post-mortems that don't change the score or the process are theater.",
  },
];

const faqs = [
  {
    q: "Our leadership doesn't want post-mortems — they want forward motion. How do we justify this?",
    a: "Frame it as score improvement, not blame: every post-mortem produces one concrete change to what gets measured. Three post-mortems usually reveal the same 2–3 missing signals — that's a redesign spec, not a ritual. Forward motion built on an untested score is just faster theater.",
  },
  {
    q: "How do we prevent the next green-then-gone?",
    a: "Back-test your score against this churn: would the current formula have flagged it, and when? If not, the score needs the signals the post-mortem found — usually champion engagement, sentiment, or stakeholder changes. Then back-test the new design against 12 months of history before trusting it.",
  },
  {
    q: "Isn't some churn just unpredictable?",
    a: "Some — acquisitions, bankruptcies, strategy pivots. But 'unpredictable' is doing a lot of work in most post-mortems. Before accepting it, check: was there really no signal, or was there no one reading the signals together? The honest answer is usually the second.",
  },
];

export default function GreenThenGonePage() {
  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-4xl pt-16">
          <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
            Guide · Post-mortem framework
          </p>
          <h1 className="mb-6" style={{ color: "var(--nw-ink)" }}>
            Why &ldquo;healthy&rdquo; accounts churn.
          </h1>
          <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--nw-ink-soft)" }}>
            Green health score. Strong adoption. Plenty of engagement. The account churned
            anyway — and the post-mortem found signals everywhere. This is the framework
            for conducting that post-mortem properly, so the next one doesn&apos;t happen.
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--nw-ink-soft)" }}>
            <em>&ldquo;The customer was happy on every call, then they churned.&rdquo;</em> —{" "}
            CSM, r/CustomerSuccess, 2026. <em>&ldquo;They kept saying &lsquo;we&apos;ll
            manage&rsquo; and &lsquo;it&apos;s not a blocker&apos;… Super polite, but
            clearly not happy.&rdquo;</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pb-4">
            <Link
              href="/tools/health-score-back-tester"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--nw-ink)" }}
            >
              Test your score <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/guides/customer-health-score"
              className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--nw-line-light)", color: "var(--nw-ink)" }}
            >
              Build a score that works
            </Link>
          </div>
        </div>
      </section>

      <section className="sp-section" style={{ backgroundColor: "white" }}>
        <div className="container-nw max-w-4xl">
          <h2 className="text-3xl mb-4" style={{ color: "var(--nw-ink)" }}>
            The five-step post-mortem.
          </h2>
          <p className="text-lg mb-12" style={{ color: "var(--nw-ink-soft)" }}>
            Run it within two weeks of the churn, while memories and data are fresh.
          </p>
          <div className="space-y-10">
            {autopsy.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: "var(--nw-accent)", color: "white" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: "var(--nw-ink)" }}>{step.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--nw-ink-soft)" }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
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
