import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Check,
  Headphones,
  MessageSquareText,
  Network,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const signals = [
  {
    kind: "people",
    icon: Users,
    label: "RELATIONSHIP / −47 DAYS",
    title: "The champion goes quiet.",
    description: "A familiar voice disappears from the conversation.",
  },
  {
    kind: "product",
    icon: Activity,
    label: "PRODUCT / −21 DAYS",
    title: "Adoption begins to fall.",
    description: "Fewer people are getting value from the product.",
  },
  {
    kind: "support",
    icon: Headphones,
    label: "SUPPORT / −04 DAYS",
    title: "A critical issue stays open.",
    description: "An unresolved blocker becomes a commercial concern.",
  },
];

function SignalArtwork({ kind }: { kind: string }) {
  return (
    <div className={`nw-signal-art nw-art-${kind}`} aria-hidden="true">
      <span className="nw-art-coordinate">MERIDIAN / SIGNAL EXCERPT</span>
      {kind === "people" && (
        <div className="nw-relationship-stack">
          <div>
            <span>
              <Users size={15} />
            </span>{" "}
            Account team <small>Call history</small>
          </div>
          <div>
            <span>
              <MessageSquareText size={15} />
            </span>{" "}
            Last three calls <small>No champion</small>
          </div>
          <div>
            <span>
              <Users size={17} />
            </span>
            <strong>Champion engagement</strong>
            <b>
              47<small>days quiet</small>
            </b>
          </div>
        </div>
      )}
      {kind === "product" && (
        <div className="nw-usage-art">
          <div>
            <span>Active users</span>
            <strong>
              −22%
              <Activity size={16} />
            </strong>
          </div>
          <div className="nw-usage-bars">
            {[128, 130, 125, 126, 119, 121, 113, 111, 104, 106, 100].map(
              (n, i) => (
                <i key={i} style={{ height: `${n / 1.5}%` }} />
              ),
            )}
          </div>
          <div className="nw-usage-axis">
            <span>128 · 30 days ago</span>
            <span>100 · Today</span>
          </div>
        </div>
      )}
      {kind === "support" && (
        <div className="nw-support-art">
          <div className="nw-ticket">
            <span>
              <Headphones size={16} /> SUPPORT EVIDENCE
            </span>
            <strong>Critical issue unresolved</strong>
            <div>
              <b>P1 · High priority</b>
              <small>Open 4 days</small>
            </div>
          </div>
          <div className="nw-ticket-context">
            <span>
              <Network size={15} />
            </span>{" "}
            Account context attached <Check size={14} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SignalBento() {
  return (
    <div className="nw-signal-bento">
      {signals.map((signal) => (
        <Card key={signal.kind} className="nw-feature-card">
          <CardContent className="nw-feature-visual">
            <SignalArtwork kind={signal.kind} />
          </CardContent>
          <CardHeader className="nw-feature-copy">
            <span className="nw-feature-label">
              <signal.icon size={13} aria-hidden="true" />
              {signal.label}
            </span>
            <CardTitle>
              <h3>{signal.title}</h3>
            </CardTitle>
            <CardDescription>{signal.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
      <Card className="nw-feature-card nw-score-card">
        <CardContent className="nw-score-art">
          <div className="nw-score-orbit" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="nw-score-dial">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle
                cx="60"
                cy="60"
                r="51"
                fill="none"
                stroke="#e2def5"
                strokeWidth="5"
              />
              <circle
                cx="60"
                cy="60"
                r="51"
                fill="none"
                stroke="#328b7d"
                strokeWidth="5"
                pathLength="100"
                strokeDasharray="82 100"
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <strong>
              82<small>/100</small>
            </strong>
            <span>Healthy</span>
          </div>
        </CardContent>
        <CardHeader className="nw-feature-copy">
          <span className="nw-feature-label">THE RECORDED SCORE</span>
          <CardTitle>
            <h3>One score. Part of the story.</h3>
          </CardTitle>
          <CardDescription>
            Activity looks good. The relationship needs a closer look.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="nw-feature-card nw-pattern-card">
        <CardContent className="nw-pattern-art">
          <div className="nw-context-rail" aria-hidden="true">
            <span>
              <Users size={16} /> People
            </span>
            <span>
              <Activity size={16} /> Product
            </span>
            <span>
              <Headphones size={16} /> Support
            </span>
          </div>
          <div className="nw-joined-insight">
            <span className="nw-insight-icon">
              <Network size={25} aria-hidden="true" />
            </span>
            <div>
              <span>THE CONVERSATION TO HAVE NEXT</span>
              <strong>
                Reconnect on value.
                <br />
                Before you reconnect on renewal.
              </strong>
            </div>
            <span className="nw-evidence-stamp">
              <Check size={13} /> Evidence attached
            </span>
          </div>
        </CardContent>
        <CardHeader className="nw-feature-copy">
          <span className="nw-feature-label">
            THE STORY BETWEEN THE SYSTEMS
          </span>
          <CardTitle>
            <h3>The risk is in the pattern.</h3>
          </CardTitle>
          <CardDescription>
            Bring the signals together. Confirm the renewal owner and a plan for
            the open issue.
          </CardDescription>
          <Link className="nw-bento-link" href="#account-intelligence">
            Explore the account evidence{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </CardHeader>
      </Card>
      <p className="nw-bento-caption">
        ILLUSTRATIVE ACCOUNT DATA / HUMAN-REVIEWED CONTEXT
      </p>
    </div>
  );
}
