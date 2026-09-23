import Image from "next/image";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark" style={{ borderTop: "1px solid var(--nw-line-dark)" }}>
      {/* Giant closing CTA */}
      <div className="container-nw pt-20 pb-16 md:pt-32 md:pb-24">
        <h2 className="text-white mb-8 max-w-4xl">
          One workflow.<br />
          3–5 systems.<br />
          4–6 weeks.
        </h2>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: "var(--nw-accent)" }}
        >
          Book a discovery call
        </Link>
        <p className="eyebrow mt-4" style={{ color: "var(--nw-dark-soft)", fontSize: "12px" }}>
          Founder replies within one business day.
        </p>
      </div>

      {/* Sitemap */}
      <div className="container-nw py-12" style={{ borderTop: "1px solid var(--nw-line-dark)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--nw-dark-soft)" }}>Services</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/customer-intelligence-blueprint" className="transition-colors" style={{ color: "var(--nw-warm-400)" }}>Intelligence Blueprint</Link></li>
              <li><Link href="/customer-intelligence-pilot" className="transition-colors" style={{ color: "var(--nw-warm-400)" }}>Intelligence Pilot</Link></li>
              <li><Link href="/tariff-intelligence" className="transition-colors" style={{ color: "var(--nw-warm-400)" }}>Tariff Intelligence</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--nw-dark-soft)" }}>Company</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="transition-colors" style={{ color: "var(--nw-warm-400)" }}>About</Link></li>
              <li><Link href="/faq" className="transition-colors" style={{ color: "var(--nw-warm-400)" }}>FAQ</Link></li>
              <li><Link href="/contact" className="transition-colors" style={{ color: "var(--nw-warm-400)" }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--nw-dark-soft)" }}>Contact</p>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:+918356954152" style={{ color: "var(--nw-warm-400)" }}>+91 83569 54152</a></li>
              <li><a href="mailto:hello@nexaworks.tech" style={{ color: "var(--nw-warm-400)" }}>hello@nexaworks.tech</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4" style={{ color: "var(--nw-dark-soft)" }}>Status</p>
            <ul className="space-y-3 text-sm" style={{ color: "var(--nw-warm-400)" }}>
              <li className="eyebrow" style={{ fontSize: "12px" }}>Booking Q4 2026</li>
              <li className="eyebrow" style={{ fontSize: "12px" }}>Founding-client pricing active</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 text-xs" style={{ borderTop: "1px solid var(--nw-line-dark)", color: "var(--nw-warm-400)" }}>
          <div className="flex items-center gap-2.5 font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "16px" }}>
            <Image src="/logo.png" alt="NexaWorks" width={28} height={28} style={{ objectFit: "contain" }} />
            nexaworks
          </div>
          <p>© {year} NexaWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
