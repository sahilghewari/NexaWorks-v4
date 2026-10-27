import { permanentRedirect } from "next/navigation";

// The Intelligence Blueprint is no longer sold as a front-door engagement.
// Signal Seat proves itself live in a 14-day free trial instead.
export default function BlueprintPage() {
  permanentRedirect("/signal-seat");
}
