"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

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
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path d={WHATSAPP_PATH} fill="currentColor" />
          </svg>
        </span>
        <h2>Thanks{first ? `, ${first}` : ""}. Your application is in.</h2>
        <p>
          We review every application by hand. Once you are approved, we will send your invite to the Muster
          community on WhatsApp.
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
