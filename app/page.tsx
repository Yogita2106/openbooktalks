"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [playerScale, setPlayerScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const trailerBars = Array.from({ length: 50 }).map((_, i) => {
    const pseudoRandom = Math.abs(Math.sin(i * 12.34)) * 0.3; 
    const h = Math.sin(i * 0.4) * 0.3 + 0.5 + pseudoRandom;
    return { h: h.toFixed(2), delay: `-${i * 0.06}s` };
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));

    if (showIntro) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        dismissIntro();
      }, 4200);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
    };
  }, [showIntro, menuOpen]);

  const dismissIntro = () => {
    setShowIntro(false);
    document.body.style.overflow = "";
  };

  const handlePlayerClick = () => {
    setPlayerScale(0.985);
    setTimeout(() => {
      setPlayerScale(1);
    }, 200);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* INTRO */}
      <div id="intro" className={showIntro ? "" : "hide"}>
        <div className="intro-wave">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <div className="intro-title">OpenbookTalks</div>
        <div className="intro-sub">The podcast — behind the mic</div>
        <div className="intro-bar">
          <div className="intro-bar-fill"></div>
        </div>
        <button id="skip-intro" onClick={dismissIntro}>
          Skip intro
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 4l10 8-10 8V4zM19 5v14" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU (3 Lines Logic) */}
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

      {/* NAV */}
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
        <Link href="#episodes" className="nav-cta">
          Listen Now
        </Link>
        <button className="burger" aria-label="menu" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Better conversations,<span className="hi">बिना स्क्रिप्ट के।</span>
            </h1>
            <p className="hero-copy">
              OpenbookTalks is where the guard comes down. Long-form, unscripted conversations with builders, artists and thinkers — recorded exactly as they happened, cuts kept to a minimum.
            </p>
            <div className="hero-actions">
              <Link href="#trailer" className="btn-primary">
                Watch the trailer
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="#episodes" className="btn-ghost">
                <span className="play-mini">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Latest episode
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-chip">
              <span className="live-dot"></span>
              <span>NOW RECORDING — S04E12</span>
            </div>
            <div className="hero-photo">
              <div className="badge">
                <div>
                  <div className="num">128</div>
                  <div className="lbl">Episodes</div>
                </div>
                <div>
                  <div className="num">94</div>
                  <div className="lbl">Guests</div>
                </div>
                <div>
                  <div className="num">2.4M</div>
                  <div className="lbl">Listens</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TEAM */}
      <section id="team">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Featured team</div>
            <h2 className="section-title">The people behind every recording.</h2>
          </div>
        </div>

        <div className="team-feature reveal">
          <div className="team-feature-media" style={{ background: "linear-gradient(150deg,#e7c98a,#c1603c)" }}>
            <div className="avatar-big" style={{ background: "linear-gradient(135deg,#2f4b3c,#1c2f25)" }}>AK</div>
          </div>
          <div className="team-feature-body">
            <div className="role">Host &amp; Creator</div>
            <h3>Arjun Kapoor</h3>
            <p>Started OpenbookTalks in a spare bedroom four years ago with a borrowed mic — now runs the whole show, top to bottom.</p>
          </div>
        </div>

        {/* Join the Team Form */}
        <div className="apply-box reveal">
          <div>
            <h3>Join the Crew</h3>
            <p>Passionate about podcasting? We are always looking for editors, producers, and creatives. Drop your details below.</p>
          </div>
          <div>
            <div className="form-field-light"><input type="text" placeholder="Your Name" /></div>
            <div className="form-field-light"><input type="email" placeholder="Email Address" /></div>
            <div className="form-field-light"><input type="text" placeholder="Role you are applying for (e.g. Editor)" /></div>
            <button className="form-submit-light">Submit Application</button>
          </div>
        </div>
      </section>

      {/* FEATURED GUESTS */}
      <section id="guests">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Featured guests</div>
            <h2 className="section-title">Sat across the mic this season.</h2>
          </div>
        </div>
        
        <div className="guest-grid reveal">
          <div className="guest-card">
            <div className="guest-media" style={{ background: "linear-gradient(150deg,#e7c98a,#c1603c)" }}>
              <div className="avatar" style={{ background: "#2f4b3c" }}>MR</div>
            </div>
            <div className="guest-body">
              <div className="guest-ep">Episode 47</div>
              <h4>Maya Reyes</h4>
              <p className="guest-quote">&quot;Slow isn&apos;t the opposite of ambitious.&quot;</p>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-media" style={{ background: "linear-gradient(150deg,#a9c2b3,#2f4b3c)" }}>
              <div className="avatar" style={{ background: "#c1603c" }}>DC</div>
            </div>
            <div className="guest-body">
              <div className="guest-ep">Episode 44</div>
              <h4>Daniel Cho</h4>
              <p className="guest-quote">&quot;I write the silence around scenes.&quot;</p>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-media" style={{ background: "linear-gradient(150deg,#e7c98a,#b8863b)" }}>
              <div className="avatar" style={{ background: "#2f4b3c" }}>IL</div>
            </div>
            <div className="guest-body">
              <div className="guest-ep">Episode 41</div>
              <h4>Isha Lamba</h4>
              <p className="guest-quote">&quot;The best question is the unplanned one.&quot;</p>
            </div>
          </div>
          <div className="guest-card">
            <div className="guest-media" style={{ background: "linear-gradient(150deg,#c9b6e0,#6a4f9e)" }}>
              <div className="avatar" style={{ background: "#2f4b3c" }}>TO</div>
            </div>
            <div className="guest-body">
              <div className="guest-ep">Episode 38</div>
              <h4>Tomas Oduya</h4>
              <p className="guest-quote">&quot;Buildings negotiate with light.&quot;</p>
            </div>
          </div>
        </div>

        {/* Apply as a Guest Form */}
        <div className="apply-box reveal">
          <div>
            <h3>Become a Guest</h3>
            <p>Have a unique story or expertise? We love unscripted, raw conversations. Tell us what you want to talk about.</p>
          </div>
          <div>
            <div className="form-field-light"><input type="text" placeholder="Your Name" /></div>
            <div className="form-field-light"><input type="email" placeholder="Email Address" /></div>
            <div className="form-field-light">
              <textarea placeholder="Describe yourself and the topics you'd like to discuss..."></textarea>
            </div>
            <button className="form-submit-light">Apply as Guest</button>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section id="blogs">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Our Writings</div>
            <h2 className="section-title">Thoughts beyond the mic.</h2>
          </div>
        </div>
        
        <div className="blog-grid reveal">
          <div className="blog-card">
            <div className="blog-img">Blog 01</div>
            <div className="blog-body">
              <div className="blog-meta">Aug 14, 2026 • 5 min read</div>
              <h4 className="blog-title">Why Unscripted Conversations Matter</h4>
              <p className="blog-excerpt">In a world full of rehearsed PR answers, genuine human connection relies on spontaneity.</p>
              <Link href="#" className="blog-read">Read Article →</Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img" style={{ background: "linear-gradient(150deg,#a9c2b3,#2f4b3c)" }}>Blog 02</div>
            <div className="blog-body">
              <div className="blog-meta">Aug 02, 2026 • 8 min read</div>
              <h4 className="blog-title">The Art of Active Listening</h4>
              <p className="blog-excerpt">How taking a step back and truly listening can completely change the direction of an interview.</p>
              <Link href="#" className="blog-read">Read Article →</Link>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-img" style={{ background: "linear-gradient(150deg,#c9b6e0,#6a4f9e)" }}>Blog 03</div>
            <div className="blog-body">
              <div className="blog-meta">Jul 19, 2026 • 4 min read</div>
              <h4 className="blog-title">Setting Up a Home Studio</h4>
              <p className="blog-excerpt">Our essential gear list for creating broadcast-quality audio without breaking the bank.</p>
              <Link href="#" className="blog-read">Read Article →</Link>
            </div>
          </div>
        </div>

        {/* Submit a Blog Form */}
        <div className="apply-box reveal">
          <div>
            <h3>Write for Us</h3>
            <p>Got an interesting perspective on media, conversations, or culture? Submit your guest post and get featured.</p>
          </div>
          <div>
            <div className="form-field-light"><input type="text" placeholder="Your Name" /></div>
            <div className="form-field-light"><input type="text" placeholder="Proposed Blog Title" /></div>
            <div className="form-field-light">
              <textarea placeholder="Paste your article content or a Google Doc link here..."></textarea>
            </div>
            <button className="form-submit-light">Submit Post</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="reveal">
        <div className="contact-grid">
          <div>
            <div className="eyebrow">Let&apos;s connect</div>
            <h2 className="section-title">Want to work with us?</h2>
            <p className="section-desc">
              Reach us at{" "}
              <a href="mailto:openbooktalksalwar@gmail.com" style={{ color: "#e7c98a", borderBottom: "1px solid rgba(231,201,138,.4)" }}>
                openbooktalksalwar@gmail.com
              </a>
            </p>
            <div className="office">
              <h5>Studio office</h5>
              <p>
                601, Precious Mall, Moti Doongri Road,
                <br />
                Adarsh Nagar, Jaipur, Rajasthan 302004
              </p>
              <h5>Business enquiries</h5>
              <p>openbooktalksalwar@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="form-field"><input type="text" placeholder="Enter your name" /></div>
            <div className="form-field"><input type="email" placeholder="Enter your email" /></div>
            <div className="form-field"><textarea placeholder="Message"></textarea></div>
            <button className="form-submit">Submit</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="logo" style={{ fontSize: "17px" }}>
            <span className="dot"></span>OpenbookTalks
          </div>
          <div className="footer-links">
            <Link href="#team">Team</Link>
            <Link href="#guests">Guests</Link>
            <Link href="#blogs">Blogs</Link>
          </div>
          <div className="footer-social">
             <Link href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8.75h4.2V23H.4V8.75zM8.7 8.75h4v2h.06c.56-1 1.9-2.06 3.9-2.06 4.18 0 4.95 2.75 4.95 6.3V23h-4.15v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V23H8.7V8.75z" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="footer-fine" style={{ textAlign: "center", marginTop: "32px" }}>
          © 2026 OpenbookTalks Studios. All rights reserved.
        </p>
      </footer>
    </>
  );
}