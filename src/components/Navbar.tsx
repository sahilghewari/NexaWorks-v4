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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Left: Logo */}
          <Link href="/" className="logo-link" onClick={closeMobileMenu}>
            <Image src="/logo.webp" alt="NexaWorks" width={36} height={36} className="logo-image" style={{ borderRadius: '50%' }} />
            <span className="logo-text">NexaWorks</span>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="navbar-nav-desktop">
            <Link href="/product" className="navbar-link body-md">Product</Link>
            <Link href="/solutions" className="navbar-link body-md">Solutions</Link>
            <Link href="/about" className="navbar-link body-md">About</Link>
            <Link href="/research" className="navbar-link body-md">Research</Link>
          </nav>

          {/* Right: Desktop CTA */}
          <div className="navbar-right">
            <Link href="/contact" className="navbar-contact body-md">Contact</Link>
            <Link href="/contact" className="btn-primary">Get Started</Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="navbar-hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="navbar-mobile-header">
            <Link href="/" className="navbar-logo display-md" onClick={closeMobileMenu}>
              NexaWorks
            </Link>
            <button className="navbar-close" onClick={closeMobileMenu} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <nav className="navbar-mobile-nav">
            <Link href="/product" className="navbar-mobile-link body-md" onClick={closeMobileMenu}>Product</Link>
            <Link href="/solutions" className="navbar-mobile-link body-md" onClick={closeMobileMenu}>Solutions</Link>
            <Link href="/about" className="navbar-mobile-link body-md" onClick={closeMobileMenu}>About</Link>
            <Link href="/research" className="navbar-mobile-link body-md" onClick={closeMobileMenu}>Research</Link>
            <Link href="/contact" className="navbar-mobile-link body-md" onClick={closeMobileMenu}>Contact</Link>
            <Link href="/contact" className="btn-primary navbar-mobile-cta" onClick={closeMobileMenu}>Get Started</Link>
          </nav>
        </div>
      )}
    </>
  );
}
