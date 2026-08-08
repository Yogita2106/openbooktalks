"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={closeMenu}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <Link href="#team" onClick={closeMenu}>The Team</Link>
        <Link href="#guests" onClick={closeMenu}>Guests</Link>
        <Link href="#blogs" onClick={closeMenu}>Blogs</Link>
        <Link href="#episodes" onClick={closeMenu}>Episodes</Link>
        <Link href="#contact" onClick={closeMenu}>Contact</Link>
      </div>

      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <Link href="#hero" className="logo">
          <span className="dot"></span>OpenbookTalks
        </Link>
        <nav className="main-nav">
          <Link href="#team">featured team</Link>
          <Link href="#guests">guests</Link>
          <Link href="#blogs">blogs</Link>
          <Link href="#episodes">episodes</Link>
        </nav>
        <Link href="#episodes" className="nav-cta">Listen Now</Link>
        <button className="burger" aria-label="menu" onClick={() => setMenuOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </header>
    </>
  );
}