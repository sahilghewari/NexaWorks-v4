"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
  );
}
