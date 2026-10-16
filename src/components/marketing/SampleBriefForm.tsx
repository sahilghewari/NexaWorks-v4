"use client";

import { useState } from "react";

export default function SampleBriefForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Sample brief request",
          email,
          source: "Homepage sample brief",
          asset: "brief",
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p role="status" className="text-white text-lg max-w-md mx-auto">
        You&apos;re in — we&apos;ll send the sample brief to {email}.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto" aria-busy={status === "loading"}>
      <label htmlFor="sample-email" className="text-sm text-left text-white">Work email (required)</label>
      <div className="flex flex-col sm:flex-row gap-3">
      <input
        id="sample-email"
        autoComplete="email"
        type="email"
        placeholder="Work email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="min-w-0 flex-1 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:ring-1 disabled:opacity-60"
        style={{
          backgroundColor: "var(--nw-dark-mid)",
          border: "1px solid var(--nw-line-dark)",
          color: "white",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full px-6 py-3 text-sm font-medium text-white transition-colors disabled:opacity-60"
        style={{ backgroundColor: "var(--nw-accent)" }}
      >
        {status === "loading" ? "Sending..." : "Send sample"}
      </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm w-full" style={{ color: "#f87171" }}>
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
