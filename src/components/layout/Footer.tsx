import Link from "next/link";
import { MusterLockup } from "@/components/brand/MusterMark";
import { BOOK_DEMO_URL } from "@/lib/booking";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { name: "Inside Muster", href: "/#product" },
      { name: "Live demo", href: "/#tour" },
      { name: "Integrations", href: "/#integrations" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { name: "Book a demo", href: BOOK_DEMO_URL },
      { name: "Watch the film", href: "/#film" },
      { name: "Community", href: "/community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "hello@nexaworks.tech", href: "mailto:hello@nexaworks.tech" },
      { name: "+91 83569 54152", href: "tel:+918356954152" },
    ],
  },
];

// `enterprise` is kept for the shared chrome's signature; the footer is the same on every page.
export default function Footer({}: { enterprise?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-footer">
      <div className="mx-footer-inner">
        <div className="mx-footer-brand">
          <MusterLockup />
          <p>The AI customer success manager.</p>
        </div>
        <div className="mx-footer-cols">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mx-footer-h">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.name}>
                    {l.href.startsWith("http") ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.name}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-footer-base">
        <span>© {year} NexaWorks. Muster AI is a NexaWorks product.</span>
      </div>
    </footer>
  );
}
