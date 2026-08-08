"use client";

import { useState } from "react";

export default function Trailer() {
  const [playerScale, setPlayerScale] = useState(1);

  const trailerBars = Array.from({ length: 50 }).map((_, i) => {
    const pseudoRandom = Math.abs(Math.sin(i * 12.34)) * 0.3; 
    const h = Math.sin(i * 0.4) * 0.3 + 0.5 + pseudoRandom;
    return { h: h.toFixed(2), delay: `-${i * 0.06}s` };
  });

  const handlePlayerClick = () => {
    setPlayerScale(0.985);
    setTimeout(() => setPlayerScale(1), 200);
  };

  return (
    <section id="trailer">
      <div className="eyebrow reveal">How it&apos;s made</div>
      <h2 className="section-title reveal" style={{ marginBottom: "56px" }}>See how an episode actually comes together.</h2>
      <div className="trailer-wrap reveal">
        <div className="player" id="player" onClick={handlePlayerClick} style={{ transform: `scale(${playerScale})`, transition: "transform .2s ease" }}>
          <div className="player-label">OpenbookTalks — SEASON TRAILER</div>
          <div className="player-bars">
            {trailerBars.map((bar, i) => (
              <span key={i} style={{ "--h": bar.h, height: `${parseFloat(bar.h) * 100}%`, animationDelay: bar.delay } as React.CSSProperties}></span>
            ))}
          </div>
          <div className="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></div>
          <div className="player-time">01:42</div>
        </div>
        <div className="steps">
          <div className="step"><div className="step-num">01</div><div><h4>Pre-interview</h4><p>A 20-minute unrecorded call to find the real story, not the press-kit version.</p></div></div>
          <div className="step"><div className="step-num">02</div><div><h4>The recording</h4><p>90 minutes in Studio B, two cameras, one continuous take, minimal retakes.</p></div></div>
          <div className="step"><div className="step-num">03</div><div><h4>Edit &amp; score</h4><p>A tight pass for clarity — never for polish that changes what was said.</p></div></div>
          <div className="step"><div className="step-num">04</div><div><h4>Release</h4><p>Out everywhere every other Thursday, 6am IST, clips follow within 48 hours.</p></div></div>
        </div>
      </div>
    </section>
  );
}