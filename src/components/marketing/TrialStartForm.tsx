"use client";

import { useState } from "react";

const CURRENT_TOOLS = [
  "HubSpot",
  "Salesforce",
  "Slack",
  "Zendesk",
  "Intercom / Freshdesk",
  "Gong / call transcripts",
  "Product usage data",
  "CSV exports",
];

export default function TrialStartForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [csmSeats, setCsmSeats] = useState("5");
  const [tools, setTools] = useState<string[]>([]);
  const [referrer, setReferrer] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submissionId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`
  );

  const toggleTool = (tool: string) =>
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((item) => item !== tool) : [...prev, tool]
    );

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
          csmSeats,
          source: "signal-seat-trial",
          dataSources: tools,
          referrer,
          submissionId,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setCsmSeats("5");
      setTools([]);
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
          <label htmlFor="trial-name" className="form-label">Name (required)</label>
          <input
            type="text"
            id="trial-name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="trial-email" className="form-label">Work email (required)</label>
          <input
            type="email"
            id="trial-email"
            autoComplete="email"
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
          <label htmlFor="trial-company" className="form-label">Company (required)</label>
          <input
            type="text"
            id="trial-company"
            autoComplete="organization"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="trial-seats" className="form-label">How many CSMs? (required)</label>
          <input
            type="number"
            id="trial-seats"
            min={3}
            max={500}
            step={1}
            required
            value={csmSeats}
            onChange={(e) => setCsmSeats(e.target.value)}
            placeholder="5"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
            style={inputStyle}
          />
          <p className="mt-2 text-xs" style={{ color: "var(--nw-ink-soft)" }}>
            Founding terms start at 3 seats.
          </p>
        </div>
      </div>

      <fieldset>
        <legend className="text-sm mb-3 font-medium" style={{ color: "var(--nw-ink)" }}>
          What does your team use today? (pick any)
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CURRENT_TOOLS.map((tool) => (
            <label
              key={tool}
              className="flex items-center gap-3 px-4 py-3 rounded-md border cursor-pointer"
              style={{ backgroundColor: "white", borderColor: "var(--nw-line-light)" }}
            >
              <input
                type="checkbox"
                checked={tools.includes(tool)}
                onChange={() => toggleTool(tool)}
                className="h-4 w-4 accent-black"
              />
              <span className="text-sm" style={{ color: "var(--nw-ink)" }}>{tool}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="trial-referrer" className="form-label">How did you hear about us? (optional)</label>
        <input
          type="text"
          id="trial-referrer"
          value={referrer}
          onChange={(e) => setReferrer(e.target.value)}
          placeholder="How did you hear about us? (optional)"
          className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2"
          style={inputStyle}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="h-4 w-4 mt-1 accent-black" />
          <span className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>
            I agree to be contacted about starting my Signal Seat trial.
          </span>
        </label>
      </div>

      <p className="text-sm" style={{ color: "var(--nw-ink-soft)" }}>
        No card and no data access are required by this form. We will discuss read-only access or a CSV start after your request. <a href="/privacy" className="underline">Privacy policy</a>
      </p>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="h-14 w-full rounded-full font-medium text-white transition-colors flex items-center justify-center disabled:opacity-70 text-sm"
        style={{ backgroundColor: "var(--nw-ink)" }}
      >
        {status === "loading"
          ? "Sending..."
          : status === "success"
            ? "Trial request received!"
            : "Start my 14 free days"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-red-700 text-sm text-center mt-2">
          Something went wrong. Please try again.
        </p>
      )}
      {status === "success" && (
        <p role="status" className="text-sm text-center mt-2" style={{ color: "var(--nw-ink)" }}>
          Got it — we will reply within one business day. Once access or a CSV is in place, your first Risk Brief can land within 48 hours.
        </p>
      )}
    </form>
  );
}
