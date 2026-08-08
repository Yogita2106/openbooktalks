import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="platform-strip reveal">
        <span>Spotify</span><span>Apple Podcasts</span><span>YouTube</span><span>Amazon Music</span><span>Google Podcasts</span>
      </div>

      <section id="contact" className="reveal">
        <div className="contact-grid">
          <div>
            <div className="eyebrow">Let&apos;s connect</div>
            <h2 className="section-title">Want to work with us?</h2>
            <p className="section-desc">Reach us at <a href="mailto:openbooktalksalwar@gmail.com" style={{ color: "#e7c98a", borderBottom: "1px solid rgba(231,201,138,.4)" }}>openbooktalksalwar@gmail.com</a></p>
            <div className="office">
              <h5>Studio office</h5>
              <p>601, Precious Mall, Moti Doongri Road,<br />Adarsh Nagar, Jaipur, Rajasthan 302004</p>
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

      <footer>
        <div className="footer-grid">
          <div className="logo" style={{ fontSize: "17px" }}><span className="dot"></span>OpenbookTalks</div>
          <div className="footer-links">
            <Link href="#team">Team</Link><Link href="#guests">Guests</Link><Link href="#blogs">Blogs</Link>
          </div>
          <div className="footer-social">
            <Link href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8.75h4.2V23H.4V8.75zM8.7 8.75h4v2h.06c.56-1 1.9-2.06 3.9-2.06 4.18 0 4.95 2.75 4.95 6.3V23h-4.15v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V23H8.7V8.75z" /></svg>
            </Link>
          </div>
        </div>
        <p className="footer-fine" style={{ textAlign: "center", marginTop: "32px" }}>© 2026 OpenbookTalks Studios. All rights reserved.</p>
      </footer>
    </>
  );
}