import { permanentRedirect } from "next/navigation";

// The free Account Risk Snapshot was retired on 13 October 2026 and replaced
// by the Signal Seat 14-day free trial.
export default function AccountRiskSnapshotPage() {
  permanentRedirect("/signal-seat");
}
