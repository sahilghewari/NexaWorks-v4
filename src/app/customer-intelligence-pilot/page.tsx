import { permanentRedirect } from "next/navigation";

// The Intelligence Pilot is no longer sold as a front-door engagement.
// Signal Seat proves itself live in a 14-day free trial instead.
export default function PilotPage() {
  permanentRedirect("/signal-seat");
}
