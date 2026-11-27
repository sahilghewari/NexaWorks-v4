"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";


const FIELDS = [
  { id: "name", label: "Full name", type: "text", auto: "name", placeholder: "Jordan Lee" },
  { id: "email", label: "Work email", type: "email", auto: "email", placeholder: "jordan@company.com" },
  { id: "title", label: "Work title", type: "text", auto: "organization-title", placeholder: "Head of Customer Success" },
  { id: "linkedin", label: "LinkedIn profile", type: "url", auto: "url", placeholder: "linkedin.com/in/jordanlee" },
  { id: "location", label: "Where are you based?", type: "text", auto: "address-level2", placeholder: "City, country" },
  { id: "whatsapp", label: "WhatsApp number", type: "tel", auto: "tel", placeholder: "+91 98765 43210" },
] as const;

type FieldId = (typeof FIELDS)[number]["id"];

export default function CommunityForm() {
  const [values, setValues] = useState<Record<FieldId, string>>({
    name: "",
    email: "",
    title: "",
    linkedin: "",
    location: "",
    whatsapp: "",
  });
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company_site: trap }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    const first = values.name.trim().split(/\s+/)[0];
    return (
      <div className="cm-card cm-thanks" role="status">
        <span className="cm-wa" aria-hidden="true">
          <WhatsAppIcon size={30} />
        </span>
        <h2>Thanks{first ? `, ${first}` : ""}. Your application is in.</h2>
        <p>
          We review every application by hand. Once you are approved, we will add you to the Muster community
          WhatsApp group.
        </p>
      </div>
    );
  }

  return (
    <form className="cm-card cm-form" onSubmit={submit} aria-busy={status === "sending"}>
      {FIELDS.map((f) => (
        <label key={f.id} className="cm-field">
          <span>{f.label}</span>
          <input
            name={f.id}
            type={f.type}
            autoComplete={f.auto}
            placeholder={f.placeholder}
            required
            value={values[f.id]}
            onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
          />
        </label>
      ))}
      <label className="cm-trap" aria-hidden="true">
        Leave this empty
        <input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </label>
      <button type="submit" className="cm-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Apply to join"} {status !== "sending" && <ArrowRight size={16} />}
      </button>
      {status === "error" && (
        <p className="cm-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
