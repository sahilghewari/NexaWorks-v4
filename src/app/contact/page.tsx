import Script from "next/script";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata = {
  title: "Contact Us & Discovery Call",
  description: "Schedule a discovery call with the founder or get our Customer Intelligence architecture guide.",
};

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/nexaworkss/waitlist";

  return (
    <>
      <section className="sp-section" style={{ backgroundColor: "var(--nw-canvas)" }}>
        <div className="container-nw max-w-5xl pt-16">
          <p className="eyebrow mb-6 text-center" style={{ color: "var(--nw-accent)" }}>
            Discovery
          </p>
          <h1 className="mb-4 text-center" style={{ color: "var(--nw-ink)" }}>Let's talk about your data.</h1>
          <p className="text-xl text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--nw-ink-soft)" }}>
            Every lead goes directly to a discovery call with the founder. No SDRs. No forced demos. Just a conversation about your CS workflows.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendly Column */}
            <div className="p-2 rounded-2xl shadow-sm" style={{ backgroundColor: "white", border: "1px solid var(--nw-line-light)" }}>
              <div 
                className="calendly-inline-widget w-full h-[600px] rounded-xl overflow-hidden" 
                data-url={`${calendlyUrl}?hide_gdpr_banner=1`}
              ></div>
              <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            </div>

            {/* Lead Form Column */}
            <div className="flex flex-col justify-center p-8 md:p-12 rounded-2xl" style={{ backgroundColor: "var(--nw-warm-100)", border: "1px solid var(--nw-line-light)" }}>
              <h3 className="mb-4 text-2xl" style={{ color: "var(--nw-ink)" }}>Not ready for a call?</h3>
              <p className="mb-8" style={{ color: "var(--nw-ink-soft)" }}>
                Leave your email and we'll send you our Customer Intelligence architecture guide. No spam, ever.
              </p>

              <ContactForm />

              <p className="mt-8 text-sm text-center" style={{ color: "var(--nw-ink-soft)" }}>
                Or reach out directly at <a href="mailto:hello@nexaworks.tech" style={{ color: "var(--nw-accent)" }}>hello@nexaworks.tech</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
