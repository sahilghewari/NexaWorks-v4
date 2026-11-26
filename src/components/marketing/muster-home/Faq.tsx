import { Plus } from "lucide-react";
import { MUSTER_FAQS } from "./faqs";

export default function Faq() {
  return (
    <div className="mh-faq">
      {MUSTER_FAQS.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <Plus size={18} aria-hidden="true" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
