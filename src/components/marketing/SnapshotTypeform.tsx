"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const TOTAL_QUESTIONS = 6;

const ROLES = ["Founder", "Marketing", "Growth", "Sales", "Customer Success", "Other"];

function normalizeUrl(v: string) {
  let u = v.trim();
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  return u;
}

function isValidUrl(v: string) {
  try {
    const u = new URL(normalizeUrl(v));
    return u.hostname.includes(".");
  } catch {
    return false;
  }
}

export default function SnapshotTypeform() {
  const [step, setStep] = useState(0); // 0 = welcome, 1..6 = questions, 7 = success
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({
    email: "",
    name: "",
    company: "",
    website: "",
    competitors: "",
    role: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function validate(s: number): string {
    if (s === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return "Enter a valid work email.";
    if (s === 2 && form.name.trim().length < 2) return "Tell us your first name.";
    if (s === 3 && form.company.trim().length < 2) return "What company is this for?";
    if (s === 4 && !isValidUrl(form.website)) return "Enter a valid website URL.";
    if (s === 5 && form.competitors.trim().length < 2)
      return "Name at least one competitor — or write \"not sure\".";
    if (s === 6 && !form.role) return "Pick the closest one.";
    return "";
  }

  function next() {
    const err = validate(step);
    if (err) {
      setFieldError(err);
      return;
    }
    setFieldError("");
    setDirection(1);
    if (step === 6) {
      submit();
    } else {
      setStep(step + 1);
    }
  }

  function back() {
    setFieldError("");
    setDirection(-1);
    setStep(step - 1);
  }

  async function submit() {
    // Spam trap: pretend success, send nothing.
    if (honeypot) {
      setStatus("success");
      setStep(7);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          source: "ai-visibility-snapshot",
          company: form.company.trim(),
          website: normalizeUrl(form.website),
          competitors: form.competitors.trim(),
          role: form.role,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setDirection(1);
      setStep(7);
    } catch {
      setStatus("error");
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (status !== "loading") next();
    }
  }

  const inputClass =
    "w-full bg-transparent text-2xl md:text-3xl font-medium placeholder:text-white/25 focus:outline-none border-b-2 pb-3 transition-colors";
  const inputStyle = { borderColor: "rgba(255,255,255,0.15)", color: "white" };

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 md:p-12 min-h-[480px] flex flex-col"
      style={{ backgroundColor: "var(--nw-dark-mid)", border: "1px solid var(--nw-line-dark)" }}
    >
      {/* Progress */}
      {step >= 1 && step <= 6 && (
        <div className="mb-8">
          <div className="flex justify-between text-xs mb-2" style={{ color: "var(--nw-dark-soft)" }}>
            <span>
              Question {step} of {TOTAL_QUESTIONS}
            </span>
            <span>{Math.round((step / TOTAL_QUESTIONS) * 100)}%</span>
          </div>
          <div className="h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            <motion.div
              className="h-1 rounded-full"
              style={{ backgroundColor: "var(--nw-accent)" }}
              animate={{ width: `${(step / TOTAL_QUESTIONS) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
        aria-hidden="true"
      />

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: 48 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 * direction }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && (
              <div>
                <p className="eyebrow mb-6" style={{ color: "var(--nw-accent)" }}>
                  Free snapshot
                </p>
                <h3 className="text-3xl md:text-4xl mb-4 text-white leading-tight">
                  See what AI says about you when buyers ask.
                </h3>
                <p className="text-lg mb-8" style={{ color: "var(--nw-dark-soft)" }}>
                  Six quick questions. We run buyer prompts across ChatGPT, Perplexity,
                  Gemini and Claude — and send you your visibility score, who shows up
                  instead of you, and 3 concrete gaps. Free, yours to keep.
                </p>
                <button
                  onClick={() => {
                    setDirection(1);
                    setStep(1);
                  }}
                  className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--nw-accent)" }}
                >
                  Start <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <label className="block text-xl md:text-2xl text-white mb-6">
                  What&apos;s your work email?
                  <span className="block text-sm mt-2 font-normal" style={{ color: "var(--nw-dark-soft)" }}>
                    Your snapshot gets delivered here.
                  </span>
                </label>
                <input
                  type="email"
                  autoFocus
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="you@company.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            )}

            {step === 2 && (
              <div>
                <label className="block text-xl md:text-2xl text-white mb-6">
                  What&apos;s your first name?
                </label>
                <input
                  type="text"
                  autoFocus
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ada"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            )}

            {step === 3 && (
              <div>
                <label className="block text-xl md:text-2xl text-white mb-6">
                  Which company is this snapshot for?
                </label>
                <input
                  type="text"
                  autoFocus
                  value={form.company}
                  onChange={(e) => set("company")(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Acme Inc."
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            )}

            {step === 4 && (
              <div>
                <label className="block text-xl md:text-2xl text-white mb-6">
                  Your company website?
                  <span className="block text-sm mt-2 font-normal" style={{ color: "var(--nw-dark-soft)" }}>
                    We check what the AI engines can actually read on it.
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="url"
                  autoFocus
                  value={form.website}
                  onChange={(e) => set("website")(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="acme.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            )}

            {step === 5 && (
              <div>
                <label className="block text-xl md:text-2xl text-white mb-6">
                  Who are your top 3 competitors?
                  <span className="block text-sm mt-2 font-normal" style={{ color: "var(--nw-dark-soft)" }}>
                    We measure your share of voice against them. Comma-separated is fine.
                  </span>
                </label>
                <input
                  type="text"
                  autoFocus
                  value={form.competitors}
                  onChange={(e) => set("competitors")(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Gainsight, Planhat, ChurnZero"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            )}

            {step === 6 && (
              <div>
                <p className="text-xl md:text-2xl text-white mb-6">What&apos;s your role?</p>
                <div className="flex flex-wrap gap-3">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => {
                        set("role")(r);
                        setFieldError("");
                        setTimeout(() => {
                          setDirection(1);
                          submit();
                        }, 180);
                      }}
                      className="px-6 py-3 rounded-full text-sm font-medium transition-all"
                      style={
                        form.role === r
                          ? { backgroundColor: "var(--nw-accent)", color: "white" }
                          : {
                              backgroundColor: "rgba(255,255,255,0.06)",
                              color: "white",
                              border: "1px solid rgba(255,255,255,0.15)",
                            }
                      }
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="text-center py-8">
                <div
                  className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--nw-accent)" }}
                >
                  <Check size={32} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="text-3xl text-white mb-4">Your snapshot is being prepared.</h3>
                <p className="text-lg mb-2" style={{ color: "var(--nw-dark-soft)" }}>
                  We&apos;ll deliver it to <span className="text-white">{form.email}</span> within
                  3 business days.
                </p>
                <p className="text-sm" style={{ color: "var(--nw-dark-soft)" }}>
                  Your score, who shows up instead of you, and 3 concrete gaps. No spam, ever.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      {step >= 1 && step <= 6 && (
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={back}
            className="inline-flex items-center text-sm"
            style={{ color: "var(--nw-dark-soft)" }}
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </button>
          <div className="flex items-center gap-4">
            {fieldError && <p className="text-sm text-red-400">{fieldError}</p>}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Try again.</p>
            )}
            <button
              onClick={next}
              disabled={status === "loading"}
              className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
              style={{ backgroundColor: "var(--nw-accent)" }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" /> Sending…
                </>
              ) : step === 6 ? (
                "Get my snapshot"
              ) : (
                <>
                  Continue <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
      {step >= 1 && step <= 6 && (
        <p className="mt-4 text-xs text-center" style={{ color: "var(--nw-dark-soft)" }}>
          Press Enter ↵ to continue
        </p>
      )}
    </div>
  );
}
