"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setShowIntro(false);
        document.body.style.overflow = "";
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const dismissIntro = () => {
    setShowIntro(false);
    document.body.style.overflow = "";
  };

  return (
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
  );
}