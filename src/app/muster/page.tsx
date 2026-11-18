import type { Metadata } from "next";
import MusterLanding from "@/components/marketing/muster/MusterLanding";
import "./muster.css";

export const metadata: Metadata = {
  title: "Muster AI — Your AI Customer Success Manager",
  description:
    "Muster AI is not software for CSMs. It is an AI CSM: it watches every account, drafts the work, and shows its reasons — your team just approves. Live in days, no implementation fee.",
  alternates: { canonical: "/muster" },
  openGraph: {
    title: "Muster AI — Your AI Customer Success Manager | NexaWorks",
    description:
      "An AI CSM that does the work: watches every account, drafts outreach and save plays, preps renewals — every score shows its reasons. Free 2-month pilot.",
    url: "/muster",
    images: ["/muster/poster-endcard.jpg"],
  },
  twitter: {
    title: "Muster AI — Your AI Customer Success Manager",
    description:
      "Not software for CSMs. An AI CSM that does the work — your team approves it.",
    images: ["/muster/poster-endcard.jpg"],
  },
};

export default function MusterPage() {
  return <MusterLanding />;
}
