"use client";

import { useState } from "react";

const DATA_SOURCES = [
  "CRM (Salesforce / HubSpot)",
  "Call transcripts (Gong, etc.)",
  "Support tickets (Zendesk, etc.)",
  "Slack",
  "Product usage data",
];

export default function SnapshotIntakeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [sources, setSources] = useState<string[]>([]);
  const [referrer, setReferrer] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  // Stable idempotency key for this form instance: retries of the same attempt
  // reuse it, so a duplicate submit is recognizable server-side and in the CRM.
  const [submissionId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`
  );

  const toggleSource = (s: string) =>
    setSources((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          source: "account-risk-snapshot",
          dataSources: sources,
          referrer,
          submissionId,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setRole("");
      setSources([]);
      setReferrer("");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: "white",
    borderColor: "var(--nw-line-light)",
    color: "var(--nw-ink)",
  };

  return (
    <form aria-busy={status === "loading"} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="snap-name" className="form-label">Name (required)</label>
          <input
            type="text"
            id="snap-name" autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="snap-email" className="form-label">Work email (required)</label>
          <input
            type="email"
            id="snap-email" autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="snap-company" className="form-label">Company (required)</label>
          <input
            type="text"
            id="snap-company" autoComplete="organization"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="snap-role" className="form-label">Role (optional)</label>
          <input
            type="text"
            id="snap-role" autoComplete="organization-title"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Your role (optional)"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
        </div>
      </div>
      <fieldset>
        <legend className="text-sm mb-3 font-medium" style={{ color: "var(--nw-ink)" }}>
          Which data sources could you share? (read-only access or exports — pick any)
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {DATA_SOURCES.map((s) => (
            <label
              key={s}
              className="flex items-center gap-3 px-4 py-3 rounded-md border cursor-pointer"
              style={{ backgroundColor: "white", borderColor: "var(--nw-line-light)" }}
            >
              <input
                type="checkbox"
                checked={sources.includes(s)}
                onChange={() => toggleSource(s)}
                className="h-4 w-4 accent-black"
              />
              <span className="text-sm" style={{ color: "var(--nw-ink)" }}>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="snap-referrer" className="form-label">How did you hear about us? (optional)</label>
        <input
          type="text"
          id="snap-referrer"
          value={referrer}
          onChange={(e) => setReferrer(e.target.value)}
          placeholder="How did you hear about us? (optional)"
          className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
          style={inputStyle}
        />
      </div>
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            className="h-4 w-4 mt-1 accent-black"
          />
          <span className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>
            I agree to be contacted about my Snapshot request.
          </span>
        </label>
      </div>
      <p className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>No data access is granted by this form. We will discuss access or exports with you after your request. <a href="/privacy" className="underline">Privacy policy</a></p>
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="h-14 w-full rounded-full font-medium text-white transition-colors flex items-center justify-center disabled:opacity-70 text-sm"
        style={{ backgroundColor: "var(--nw-ink)" }}
      >
        {status === "loading" ? "Sending..." : status === "success" ? "Request received!" : "Request your Snapshot"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-red-700 text-sm text-center mt-2">Something went wrong. Please try again.</p>
      )}
      {status === "success" && (
        <p role="status" className="text-sm text-center mt-2" style={{ color: "var(--nw-ink)" }}>
          Got it — we will reply within one business day about data access. Your Snapshot lands within five business days.
        </p>
      )}
    </form>
  );
}
