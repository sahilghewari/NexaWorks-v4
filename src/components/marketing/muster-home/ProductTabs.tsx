"use client";

import { useState } from "react";
import {
  AppFrame,
  ApprovalsScreen,
  AskScreen,
  HealthScreen,
  RenewalsScreen,
  TodayScreen,
  type ScreenName,
} from "./screens";

const TABS: { name: ScreenName; line: string }[] = [
  { name: "Today", line: "Start the day with the accounts that need you." },
  { name: "Approvals", line: "Drafted work, waiting for a yes." },
  { name: "Health", line: "Every score shows its reasons." },
  { name: "Renewals", line: "The next 90 days, ranked by confidence." },
  { name: "Ask AI", line: "Ask anything. Every answer cites its records." },
];

function Screen({ name }: { name: ScreenName }) {
  switch (name) {
    case "Today":
      return <TodayScreen />;
    case "Approvals":
      return <ApprovalsScreen />;
    case "Health":
      return <HealthScreen />;
    case "Renewals":
      return <RenewalsScreen />;
    case "Ask AI":
      return <AskScreen />;
  }
}

export default function ProductTabs() {
  const [active, setActive] = useState<ScreenName>("Today");
  const tab = TABS.find((t) => t.name === active)!;
  return (
    <div className="mh-tabs">
      <div className="mh-tablist" role="tablist" aria-label="Product screens">
        {TABS.map((t) => (
          <button
            key={t.name}
            role="tab"
            type="button"
            aria-selected={t.name === active}
            className={t.name === active ? "is-active" : ""}
            onClick={() => setActive(t.name)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <p className="mh-tab-line">{tab.line}</p>
      <div role="tabpanel" aria-label={active} className="mh-shot">
        <AppFrame active={active} onNav={setActive}>
          <Screen name={active} />
        </AppFrame>
      </div>
      <p className="mh-note">Illustrative example with sample data</p>
    </div>
  );
}
