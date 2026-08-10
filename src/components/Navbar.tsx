'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Left: Brand Logo */}
          <Link href="/" className="logo-link" onClick={closeMobileMenu}>
            <Image 
              src="/logo.webp" 
              alt="NexaWorks Logo" 
              width={34} 
              height={34} 
              className="logo-image" 
            />
            <span className="logo-text">NexaWorks</span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="navbar-nav-desktop">
            <Link href="/product" className="navbar-link">Product</Link>
            <Link href="/solutions" className="navbar-link">Solutions</Link>
            <Link href="/pricing" className="navbar-link">Pricing</Link>
            <Link href="/about" className="navbar-link">About</Link>
            <Link href="/research" className="navbar-link">Research</Link>
            <Link href="/docs" className="navbar-link">Docs</Link>
          </nav>

          {/* Right: Desktop CTA */}
          <div className="navbar-right">
            <Link href="/contact" className="navbar-contact">Contact</Link>
            <Link href="/contact" className="navbar-cta-btn">Book Review</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="navbar-hamburger" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Luxury Overlay Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="navbar-mobile-overlay" 
          role="dialog" 
          aria-modal="true" 
          aria-label="Navigation menu"
        >
          <div className="navbar-mobile-header">
            <Link href="/" className="logo-link" onClick={closeMobileMenu}>
              <Image 
                src="/logo.webp" 
                alt="NexaWorks Logo" 
                width={32} 
                height={32} 
                className="logo-image" 
              />
              <span className="navbar-mobile-logo">NexaWorks</span>
            </Link>
            <button 
              className="navbar-close" 
              onClick={closeMobileMenu} 
              aria-label="Close navigation menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <nav className="navbar-mobile-nav">
            <Link href="/product" className="navbar-mobile-link" onClick={closeMobileMenu}>
              Product <span className="mobile-arrow">→</span>
            </Link>
            <Link href="/solutions" className="navbar-mobile-link" onClick={closeMobileMenu}>
              Solutions <span className="mobile-arrow">→</span>
            </Link>
            <Link href="/pricing" className="navbar-mobile-link" onClick={closeMobileMenu}>
              Pricing <span className="mobile-arrow">→</span>
            </Link>
            <Link href="/about" className="navbar-mobile-link" onClick={closeMobileMenu}>
              About <span className="mobile-arrow">→</span>
            </Link>
            <Link href="/research" className="navbar-mobile-link" onClick={closeMobileMenu}>
              Research <span className="mobile-arrow">→</span>
            </Link>
            <Link href="/docs" className="navbar-mobile-link" onClick={closeMobileMenu}>
              Documentation <span className="mobile-arrow">→</span>
            </Link>
            <Link href="/contact" className="navbar-mobile-link" onClick={closeMobileMenu}>
              Contact Sales <span className="mobile-arrow">→</span>
            </Link>

            <div className="navbar-mobile-footer">
              <Link 
                href="/contact" 
                className="navbar-mobile-cta" 
                onClick={closeMobileMenu}
              >
                Book Architecture Review
              </Link>
              <div className="navbar-mobile-status">
                <span className="navbar-status-dot"></span>
                SOC2 Type II • EU AI Act Compliant Architecture
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
