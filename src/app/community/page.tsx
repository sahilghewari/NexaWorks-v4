import CommunityForm from "./CommunityForm";
import "./community.css";

export const metadata = {
  title: "Community",
  description: "Apply to join the Muster AI community for customer success leaders and CSMs.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <main className="cm-page">
      <div className="cm-wrap">
        <p className="cm-eyebrow">Muster community</p>
        <h1>
          Where customer success people <em>compare notes.</em>
        </h1>
        <p className="cm-sub">
          A small, invite-only group for CS leaders and CSMs. Tell us a little about you and we will review your
          application.
        </p>
        <CommunityForm />
      </div>
    </main>
  );
}
