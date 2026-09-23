"use client";

import Image from "next/image";


import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "/#services" },
    { name: "Method", href: "/#method" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        backgroundColor: "rgba(250, 250, 248, 0.8)",
        borderBottom: "1px solid var(--nw-line-light)",
      }}
    >
      <div className="container-nw flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight" style={{ color: "var(--nw-ink)", fontFamily: "var(--font-display)" }}>
          <div className="flex items-center justify-center rounded-lg shadow-sm" style={{ backgroundColor: "#0A0A0C", width: "32px", height: "32px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Image src="/logo.png" alt="NexaWorks" width={26} height={26} style={{ objectFit: "contain" }} />
          </div>
          nexaworks
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium transition-colors"
              style={{ color: "var(--nw-ink-soft)", transitionDuration: "var(--nw-dur-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nw-ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nw-ink-soft)")}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-full px-5 text-[13px] font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--nw-ink)", transitionDuration: "var(--nw-dur-fast)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--nw-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--nw-ink)")}
          >
            Book a discovery call
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" style={{ color: "var(--nw-ink)" }} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-14 z-50 flex flex-col justify-between p-8 md:hidden" style={{ backgroundColor: "var(--nw-canvas)" }}>
          <nav className="flex flex-col gap-6 mt-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 6vw, 3rem)", color: "var(--nw-ink)" }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pb-8">
            <Link
              href="/contact"
              className="flex h-14 items-center justify-center rounded-full text-base font-medium text-white"
              style={{ backgroundColor: "var(--nw-ink)" }}
              onClick={() => setIsOpen(false)}
            >
              Book a discovery call
            </Link>
            <a href="tel:+918356954152" className="text-center text-sm" style={{ color: "var(--nw-ink-soft)" }}>
              +91 83569 54152
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
