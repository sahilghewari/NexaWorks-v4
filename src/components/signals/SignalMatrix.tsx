"use client";

import { useState } from "react";
import { signals, signalSources } from "@/data/signals";

const fpColor: Record<string, string> = {
  Low: "var(--nw-accent)",
  Medium: "#b7791f",
  High: "#b34434",
};

export default function SignalMatrix() {
  const [filter, setFilter] = useState<string>("all");
  const rows = signals.filter((s) => filter === "all" || s.source === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setFilter("all")}
          className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
          style={{
            backgroundColor: filter === "all" ? "var(--nw-ink)" : "transparent",
            color: filter === "all" ? "white" : "var(--nw-ink)",
            border: "1px solid var(--nw-line-light)",
          }}
        >
          All sources ({signals.length})
        </button>
        {signalSources.map((src) => {
          const count = signals.filter((s) => s.source === src.slug).length;
          const active = filter === src.slug;
          return (
            <button
              key={src.slug}
              onClick={() => setFilter(src.slug)}
              className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: active ? "var(--nw-ink)" : "transparent",
                color: active ? "white" : "var(--nw-ink)",
                border: "1px solid var(--nw-line-light)",
              }}
            >
              {src.label} ({count})
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--nw-line-light)" }}>
        <table className="w-full text-left" style={{ minWidth: "760px" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--nw-ink)" }}>
              <th className="px-6 py-4 text-sm font-semibold text-white">Signal</th>
              <th className="px-6 py-4 text-sm font-semibold text-white">Source</th>
              <th className="px-6 py-4 text-sm font-semibold text-white">Typical lead time</th>
              <th className="px-6 py-4 text-sm font-semibold text-white">False-positive risk</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s, i) => (
              <tr
                key={s.slug}
                style={{
                  backgroundColor: i % 2 === 0 ? "white" : "var(--nw-canvas)",
                  borderTop: "1px solid var(--nw-line-light)",
                }}
              >
                <td className="px-6 py-4 font-medium" style={{ color: "var(--nw-ink)" }}>
                  {s.name}
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: "var(--nw-ink-soft)" }}>
                  {s.sourceLabel}
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: "var(--nw-ink-soft)" }}>
                  {s.leadTime}
                </td>
                <td className="px-6 py-4 text-sm font-medium" style={{ color: fpColor[s.fpRisk] }}>
                  {s.fpRisk}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm mt-4" style={{ color: "var(--nw-ink-soft)" }}>
        Lead times are practitioner-observed typical ranges, not guarantees. Every
        signal's definition, detection logic, and false positives are documented on
        its source page below.
      </p>
    </div>
  );
}
