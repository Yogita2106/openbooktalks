import Link from "next/link";

export default function Hero() {
  return (
    <>
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
                <span className="play-mini"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></span>
                Latest episode
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-chip"><span className="live-dot"></span><span>NOW RECORDING — S04E12</span></div>
            <div className="hero-photo">
              <div className="badge">
                <div><div className="num">128</div><div className="lbl">Episodes</div></div>
                {/* Yahan par class ki jagah className kar diya gaya hai */}
                <div><div className="num">94</div><div className="lbl">Guests</div></div>
                <div><div className="num">2.4M</div><div className="lbl">Listens</div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="reason-strip reveal">
          <div className="reason"><div className="rn">01</div><h4>Why long-form works</h4><p>Ninety minutes gives people room to disagree with themselves — that&apos;s usually where the real answer shows up.</p></div>
          <div className="reason"><div className="rn">02</div><h4>Why unscripted matters</h4><p>No pre-approved talking points. Guests answer the question we actually asked, not the one they rehearsed for.</p></div>
          <div className="reason"><div className="rn">03</div><h4>Why we keep it raw</h4><p>Minimal cuts, honest room tone. If it&apos;s a little messy, that&apos;s usually the part worth keeping in.</p></div>
        </div>
      </section>

      <section id="testimonial-card">
        <div className="quote-card reveal">
          <div className="quote-avatar">CW</div>
          <div className="quote-body">
            <p className="q">&quot;OpenbookTalks is the rare podcast that feels like eavesdropping on a good conversation, not sitting through an interview.&quot;</p>
            <div className="by">The Culture Weekly</div>
          </div>
        </div>
      </section>

      <section className="stats-block">
        <div className="stats-head reveal">
          <div className="eyebrow">Our reach</div>
          <h2 className="section-title">Numbers that keep the mic on.</h2>
        </div>
        <div className="stats-strip reveal">
          <div className="stat"><div className="num">128</div><div className="lbl">Episodes released</div></div>
          <div className="stat"><div className="num">2.4M</div><div className="lbl">Monthly listens</div></div>
          <div className="stat"><div className="num">94</div><div className="lbl">Guests hosted</div></div>
          <div className="stat"><div className="num">31</div><div className="lbl">Countries reached</div></div>
        </div>
      </section>
    </>
  );
}