"use client";

import { useEffect } from "react";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Guests from "@/components/Guests";
import Trailer from "@/components/Trailer";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function Home() {
  
  // Single global intersection observer for all reveal animations
  useEffect(() => {
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

    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Intro />
      <Header />
      <Hero />
      <Team />
      <Guests />
      <Trailer />
      <Blogs />
      <Footer />
    </main>
  );
}