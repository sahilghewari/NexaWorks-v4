"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/nexaworkss/waitlist";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setEmail("");
      setName("");
    } catch (error) {
      setStatus("error");
    }
  };

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

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: "white", 
                      borderColor: "var(--nw-line-light)",
                      color: "var(--nw-ink)"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: "white", 
                      borderColor: "var(--nw-line-light)",
                      color: "var(--nw-ink)"
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="h-12 w-full rounded-md font-medium text-white transition-colors flex items-center justify-center disabled:opacity-70"
                  style={{ backgroundColor: "var(--nw-ink)" }}
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Get the Guide"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>

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
