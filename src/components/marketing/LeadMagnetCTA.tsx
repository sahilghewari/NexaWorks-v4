"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadMagnetCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    
    // Simulate API call to email capture service
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  };

  return (
    <div className="rounded-2xl bg-white border border-border-light p-8 md:p-12 shadow-sm text-center max-w-3xl mx-auto">
      <h3 className="font-display font-semibold text-2xl mb-4 text-ink-navy">
        See a sample meeting brief
      </h3>
      <p className="text-slate mb-8 max-w-lg mx-auto">
        Curious what our output looks like? Drop your email and we'll send you an illustrative sample of a Customer Intelligence Pilot meeting brief.
      </p>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-4 text-signal-teal">
          <CheckCircle2 size={48} className="text-signal-teal" />
          <p className="font-medium text-lg text-ink-navy">Sample sent to your inbox!</p>
          <p className="text-sm text-slate">You should receive it within 5 minutes.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Work email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-border-light px-4 py-3 text-base placeholder:text-slate/50 focus:border-signal-teal focus:outline-none focus:ring-1 focus:ring-signal-teal bg-paper"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-12 items-center justify-center space-x-2 rounded-md bg-ink-navy px-6 text-sm font-medium text-white transition-colors hover:bg-slate disabled:opacity-50"
          >
            <span>{status === "loading" ? "Sending..." : "Send sample"}</span>
            <ArrowRight size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
