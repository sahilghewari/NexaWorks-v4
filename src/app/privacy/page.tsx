export const metadata = {
  title: "Privacy Policy | NexaWorks",
  description:
    "How NexaWorks collects, uses, and protects your information across nexaworks.tech and our paid engagements.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "1. Who we are",
    p: [
      "NexaWorks (“we”, “us”) is a consulting practice operated by Sahil Sanjay Ghewari, based in Mumbai, India. This policy explains what information we collect through nexaworks.tech and how we use it.",
    ],
  },
  {
    h: "2. Information we collect",
    p: [
      "Information you give us: when you request a snapshot, audit, or other engagement, we collect your name, work email, company name, website, competitors, and any details you include in our forms.",
      "Payment information: payments are processed by Razorpay. We never see, receive, or store your card numbers, UPI IDs, or bank credentials — those go directly to Razorpay under their own privacy policy.",
      "Automatic information: basic, anonymized analytics (pages visited, device type) to understand how the site is used. We do not run cross-site advertising trackers.",
    ],
  },
  {
    h: "3. How we use it",
    p: [
      "To deliver what you asked for: snapshots, audits, reports, and follow-up communication about your engagement.",
      "To notify you about your order status, delivery, and one follow-up to make sure your deliverable landed.",
      "We do not sell your information, and we do not send marketing emails unless you explicitly ask for them.",
    ],
  },
  {
    h: "4. Sharing",
    p: [
      "We share the minimum necessary with service providers who help us operate: Razorpay (payment processing) and our email provider (deliverable fulfillment). We do not share your data with data brokers or advertisers.",
      "We may disclose information if required by law or to protect our legal rights.",
    ],
  },
  {
    h: "5. Retention and your rights",
    p: [
      "We keep engagement records for as long as needed to serve you and meet legal obligations. You may ask us at any time to correct or delete your personal information by writing to hello@nexaworks.tech — we will act on it promptly.",
    ],
  },
  {
    h: "6. Security",
    p: [
      "The site is served over HTTPS. Access to your information is limited to the founder and the systems needed to deliver your engagement. No system is perfectly secure, but we take reasonable steps to protect your data.",
    ],
  },
  {
    h: "7. Changes and contact",
    p: [
      "We may update this policy; the current version will always be posted here with its effective date.",
      "Questions about your privacy: hello@nexaworks.tech or +91 83569 54152.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
      <div className="container-nw max-w-4xl pt-16 pb-24">
        <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
          Legal
        </p>
        <h1 className="mb-4" style={{ color: "var(--nw-ink)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-16" style={{ color: "var(--nw-ink-soft)" }}>
          Last updated: October 8, 2026
        </p>
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.h} className="pb-12" style={{ borderBottom: "1px solid var(--nw-line-light)" }}>
              <h3 className="mb-4 text-2xl" style={{ color: "var(--nw-ink)" }}>
                {s.h}
              </h3>
              {s.p.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed max-w-3xl mb-4" style={{ color: "var(--nw-ink-soft)" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
