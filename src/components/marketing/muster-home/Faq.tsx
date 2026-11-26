"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { MUSTER_FAQS } from "./faqs";

/** Accordion that opens and closes smoothly (height via grid rows, plus a fade). One open at a time. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <div className="mh-faq">
      {MUSTER_FAQS.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-q-${i}`;
        return (
          <div key={f.q} className={`mh-faq-item ${isOpen ? "is-open" : ""}`}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {f.q}
                <Plus size={18} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="mh-faq-panel" inert={!isOpen}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
