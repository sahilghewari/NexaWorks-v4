import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NexaWorks",
  description: "Schedule a technical discovery call with our engineering team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
