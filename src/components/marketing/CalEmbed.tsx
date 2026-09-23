"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export default function CalEmbed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-xl border border-border-light bg-paper/50 animate-pulse">
        <div className="flex flex-col items-center space-y-4 text-slate">
          <Calendar size={32} className="opacity-50" />
          <p className="text-sm font-medium">Loading calendar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border-light bg-white shadow-sm h-[600px] flex items-center justify-center">
      {/* 
        In production, this would be the actual cal.com embed.
        Using a placeholder for the static build until the cal.com link is provided.
      */}
      <div className="text-center p-8">
        <h3 className="font-display font-semibold text-xl mb-4 text-ink-navy">Book a Discovery Call</h3>
        <p className="text-slate mb-8 max-w-sm mx-auto">
          Choose a time below to discuss your CS workflows with the founder.
        </p>
        <button 
          className="inline-flex h-10 items-center justify-center rounded-md bg-signal-teal px-6 py-2 text-sm font-medium text-white shadow-sm"
          onClick={() => alert("Calendar embed will render here.")}
        >
          Select Time Slot
        </button>
      </div>
    </div>
  );
}
