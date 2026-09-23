export type Section = {
  id: string;
  index: string;
  label: string;
};

/** The zones of the ZeroDay journey. Order matches the page layout. */
export const SECTIONS: Section[] = [
  { id: "hero", index: "01", label: "Day Zero" },
  { id: "identity", index: "02", label: "Identity" },
  { id: "what", index: "03", label: "The System" },
  { id: "evolution", index: "04", label: "Evolution" },
  { id: "crucible", index: "05", label: "The Crucible" },
  { id: "manifesto", index: "06", label: "Manifesto" },
  { id: "timeline", index: "07", label: "Journey" },
  { id: "zones", index: "08", label: "Experience" },
  { id: "participants", index: "09", label: "The People" },
  { id: "archive", index: "10", label: "Archive" },
  { id: "sponsors", index: "11", label: "Partners" },
  { id: "waitlist", index: "12", label: "Access" },
];
