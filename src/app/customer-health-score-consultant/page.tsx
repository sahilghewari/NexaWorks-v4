import { permanentRedirect } from "next/navigation";

// This consulting page sold the retired Blueprint / Pilot ladder. The live
// offer is now Signal Seat.
export default function CustomerHealthScoreConsultantPage() {
  permanentRedirect("/signal-seat");
}
