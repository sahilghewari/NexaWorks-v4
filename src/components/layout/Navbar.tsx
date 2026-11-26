"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { MusterLockup } from "@/components/brand/MusterMark";
import { BOOK_DEMO_LINK } from "@/lib/booking";

const LINKS = [
  { name: "Product", href: "/#product" },
  { name: "Live demo", href: "/#tour" },
  { name: "Integrations", href: "/#integrations" },
  { name: "FAQ", href: "/#faq" },
];

/**
 * Muster AI site header. On the homepage it floats over the dark hero and turns into
 * light glass once the page scrolls; everywhere else it is light from the start.
 */
export default function Navbar({ enterprise = false }: { enterprise?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!enterprise);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!enterprise) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enterprise]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    // Native modal behaviour keeps focus inside the menu and makes the page inert.
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  const dark = enterprise && !scrolled;

  return (
    <>
      <header
        className={`mx-header ${enterprise ? "is-overlay" : ""} ${dark ? "is-dark" : "is-light"}`}
      >
        <div className="mx-header-inner">
          <Link href="/" aria-label="Muster AI home" className="mx-header-logo">
            <MusterLockup reversed={dark} />
          </Link>

          <nav className="mx-header-nav" aria-label="Main">
            {LINKS.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mx-header-actions">
            <Link {...BOOK_DEMO_LINK} className="mx-header-cta">
              Book a demo
            </Link>
            <button
              className="mx-header-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Main navigation"
        onClose={() => setIsOpen(false)}
        className="mobile-navigation"
      >
        <div className="flex min-h-full flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <MusterLockup />
            <button
              type="button"
              autoFocus
              aria-label="Close menu"
              className="p-3"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="tracking-tight"
                style={{
                  fontFamily: "var(--font-editorial), Georgia, serif",
                  fontSize: "clamp(2rem, 6vw, 3rem)",
                  color: "var(--nw-ink)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4 pb-4 pt-8">
            <Link
              {...BOOK_DEMO_LINK}
              className="flex h-14 items-center justify-center rounded-full text-base font-medium text-white"
              style={{ backgroundColor: "#5B2A7A" }}
              onClick={() => setIsOpen(false)}
            >
              Book a demo
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
