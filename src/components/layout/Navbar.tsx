"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  enterprise = false,
}: {
  enterprise?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    // Native modal behavior keeps focus inside the menu and makes the page inert.
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

  const links = [
    { name: "Services", href: "/#services" },
    { name: "Method", href: "/#method" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full ${enterprise ? "ed-site-header" : ""}`}
        style={{
          backgroundColor: enterprise
            ? "rgba(248, 248, 255, 0.86)"
            : "var(--nw-canvas)",
          backdropFilter: enterprise ? "blur(16px)" : undefined,
          WebkitBackdropFilter: enterprise ? "blur(16px)" : undefined,
          borderBottom: "1px solid var(--nw-line-light)",
        }}
      >
        <div className="container-nw flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href={enterprise ? "/#top" : "/"}
            className={`flex items-center gap-2.5 text-lg font-semibold tracking-tight ${enterprise ? "ed-wordmark" : ""}`}
            style={{
              color: "var(--nw-ink)",
              fontFamily: "var(--font-display)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-lg shadow-sm"
              style={{
                backgroundColor: "#0A0A0C",
                width: "32px",
                height: "32px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src="/logo.png"
                alt=""
                width={26}
                height={26}
                style={{ objectFit: "contain" }}
              />
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
                style={{
                  color: "var(--nw-ink-soft)",
                  transitionDuration: "var(--nw-dur-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--nw-ink)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--nw-ink-soft)")
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full px-5 text-[13px] font-medium text-white transition-colors"
              style={{
                backgroundColor: "var(--nw-ink)",
                transitionDuration: "var(--nw-dur-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--nw-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--nw-ink)")
              }
            >
              Book a discovery call
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-3"
            style={{ color: "var(--nw-ink)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
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
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-semibold">nexaworks</span>
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
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 6vw, 3rem)",
                  color: "var(--nw-ink)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-auto pt-8 pb-4">
            <Link
              href="/contact"
              className="flex h-14 items-center justify-center rounded-full text-base font-medium text-white"
              style={{ backgroundColor: "var(--nw-ink)" }}
              onClick={() => setIsOpen(false)}
            >
              Book a discovery call
            </Link>
            <a
              href="tel:+918356954152"
              className="text-center text-sm"
              style={{ color: "var(--nw-ink-soft)" }}
            >
              +91 83569 54152
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
