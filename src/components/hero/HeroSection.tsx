"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

// Mathematically defined Organic Dental Smile Arch (قوس الابتسامة الملكي)
// 11 interpolated points creating a pure parabolic curve without any mechanical corners
const FLAT_RECT =
  "polygon(0% 0%, 100% 0%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 50% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 100%, 0% 100%)";
const SMILE_ARCH =
  "polygon(0% 0%, 100% 0%, 100% 100%, 90% 97%, 80% 92.5%, 70% 87.5%, 60% 84.5%, 50% 83%, 40% 84.5%, 30% 87.5%, 20% 92.5%, 10% 97%, 0% 100%)";

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

      // 3. Prestigious Dental "Smile Arch" GSAP Morphing on Scroll
      // Replaces mechanical polygons with an organic dental smile curve that seamlessly reveals the next section
      if (clipContainerRef.current && heroRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "55% top", // Completes early in the scroll so the smile arch is immediately prominent
            scrub: 0.8,
          },
        });

        scrollTl
          // A. Morph bottom edge into the organic Dental Smile Arch (قوس الابتسامة)
          // power1.out ensures immediate responsive curve from the very first scroll touch
          .fromTo(
            clipContainerRef.current,
            { clipPath: FLAT_RECT },
            { clipPath: SMILE_ARCH, ease: "power1.out", duration: 1 },
            0
          )
          // B. Gentle cinematic parallax depth zoom inside the video
          .fromTo(
            videoRef.current,
            { yPercent: 0, scale: 1 },
            { yPercent: 10, scale: 1.07, ease: "none", duration: 1 },
            0
          )
          // C. Rapid early fadeout for the bottom scroll prompt
          .to(
            scrollIndicatorRef.current,
            { opacity: 0, y: 15, duration: 0.18, ease: "power2.in" },
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
      className="relative z-10 w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-end items-center overflow-hidden select-none bg-[#FDFBF7]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Master Clipping Canvas with Dynamic Dental Smile Arch Morphing */}
      <div
        ref={clipContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
        style={{
          clipPath: FLAT_RECT,
        }}
      >
        {/* Solid dark base so video never flashes before loading */}
        <div className="absolute inset-0 bg-[#022256]" />

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
