"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

export function HeroSection() {
  const { isRtl } = useLanguage();
  const tHero = useTranslations("hero");

  const heroRef = useRef<HTMLElement>(null);
  const clipContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // 1. Ensure video plays immediately across all browsers
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play fallback
        });
      }
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 2. Initial Smooth Optical Entrance
      gsap.fromTo(
        videoRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
      );

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.6 }
      );

      // 3. Jaw-Dropping GSAP Scroll-Triggered Clip-Path & Cinematic Closure
      // Morphs the bottom of the hero into an architectural royal vault
      if (clipContainerRef.current && heroRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Dynamic 5-point polygon clip-path closure + subtle scale down
        scrollTl
          .fromTo(
            clipContainerRef.current,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)",
              scale: 1,
              borderRadius: "0px",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 95%, 0% 80%)",
              scale: 0.94,
              borderRadius: "32px",
              ease: "power1.inOut",
            },
            0
          )
          // Parallax depth zoom inside the clipping viewport
          .fromTo(
            videoRef.current,
            { yPercent: 0, scale: 1 },
            { yPercent: 18, scale: 1.14, ease: "none" },
            0
          )
          // Immediate graceful fadeout for the bottom scroll prompt
          .to(
            scrollIndicatorRef.current,
            { opacity: 0, y: 25, duration: 0.25, ease: "power2.in" },
            0
          );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Cinematic Video Showcase"
      className="relative z-10 w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-end items-center overflow-hidden select-none bg-black"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Master Clipping Canvas with Dynamic GSAP Polygon Morphing */}
      <div
        ref={clipContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform shadow-[0_25px_60px_rgba(2,34,86,0.18)]"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)",
        }}
      >
        {/* Cinematic Background Video (Fills 100% of Screen to the Absolute Bottom Edge) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2160&q=85"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none will-change-transform"
        >
          <source src="/videos/hero-dental.mp4?v=teeth" type="video/mp4" />
          <source src="/videos/dentist-teeth-brush-39480.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/39480/39480-720.mp4" type="video/mp4" />
        </video>

        {/* Crisp Light Black Overlay */}
        <div className="absolute inset-0 bg-black/25 z-[1] pointer-events-none" />
      </div>

      {/* 2. Minimalist Floating Scroll Pill (Discreet, Crisp, Non-Intrusive) */}
      <a
        ref={scrollIndicatorRef}
        href="#welcome"
        aria-label="Scroll to Clinic Philosophy"
        className="relative z-20 mb-8 sm:mb-10 inline-flex flex-col items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-white bg-black/45 border border-white/30 px-4 py-1.5 rounded-full shadow-lg font-body group-hover:bg-black/65 group-hover:border-[#DFBF57] transition-all">
          {tHero("scrollPrompt")} ↓
        </span>

        {/* Delicate animated mouse indicator */}
        <div className="w-5 h-8 rounded-full border-2 border-white/60 group-hover:border-[#DFBF57] flex items-start justify-center p-1 bg-black/25 shadow-sm transition-colors">
          <div className="w-1 h-2 rounded-full bg-[#DFBF57] animate-bounce" />
        </div>
      </a>
    </section>
  );
}
