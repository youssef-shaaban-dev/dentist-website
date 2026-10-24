"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { HieroglyphicDecoder } from "./HieroglyphicDecoder";
import { Calendar, ChevronDown, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

export function HeroSection() {
  const { isRtl, dirMultiplier } = useLanguage();
  const tHero = useTranslations("hero");

  const heroRef = useRef<HTMLElement>(null);
  const visualColRef = useRef<HTMLDivElement>(null);
  const medallionRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Direction-Aware Initial Entrance Timeline
      const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      entranceTl
        .fromTo(
          medallionRef.current,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 1.6, ease: "expo.out" }
        )
        .fromTo(
          ringRef.current,
          { rotation: isRtl ? 60 : -60, scale: 0.85, opacity: 0 },
          { rotation: 0, scale: 1, opacity: 0.6, duration: 2, ease: "expo.out" },
          "-=1.3"
        )
        .fromTo(
          contentColRef.current,
          { opacity: 0, x: isRtl ? 40 : -40 },
          { opacity: 1, x: 0, duration: 1.4, ease: "power2.out" },
          "-=1.5"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "-=0.9"
        );

      // 2. Parallax Effect on Scroll for Hesy-Ra Logo & Astrolabe
      if (heroRef.current && medallionRef.current && ringRef.current) {
        // Logo Medallion Scroll Parallax
        gsap.to(medallionRef.current, {
          yPercent: 30,
          scale: 0.92,
          rotation: isRtl ? -8 : 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Golden Astrolabe Ring Rotation on Scroll
        gsap.to(ringRef.current, {
          rotation: isRtl ? -120 : 120,
          yPercent: 45,
          scale: 1.1,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });

        // Background Halo Glow
        if (haloRef.current) {
          gsap.to(haloRef.current, {
            scale: 1.4,
            opacity: 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Floating Micro-Hieroglyphs Multi-speed Parallax
        if (particlesRef.current) {
          const particles = particlesRef.current.children;
          Array.from(particles).forEach((child, index) => {
            const speed = ((index % 3) + 1) * 40;
            const dirX = (index % 2 === 0 ? 1 : -1) * 25 * dirMultiplier;
            gsap.to(child, {
              y: -speed * 2,
              x: dirX,
              opacity: 0.15,
              ease: "none",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1 + index * 0.2,
              },
            });
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isRtl, dirMultiplier]);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0A1128]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Starfield & Subtle Golden Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(212,175,55,0.18),rgba(10,17,40,0.95)_65%,#050914_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Background Floating Egyptian Hieroglyph Glyphs (Parallax) */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-[1] select-none overflow-hidden"
      >
        <span className="absolute top-[16%] left-[6%] text-3xl text-[#D4AF37]/20 font-serif">𓃀</span>
        <span className="absolute top-[24%] right-[8%] text-4xl text-[#D4AF37]/25 font-serif">𓎛</span>
        <span className="absolute top-[50%] left-[10%] text-2xl text-[#D4AF37]/20 font-serif">𓄿</span>
        <span className="absolute top-[68%] right-[12%] text-3xl text-[#D4AF37]/20 font-serif">𓍿</span>
        <span className="absolute top-[38%] left-[20%] text-2xl text-[#D4AF37]/15 font-serif">𓋹</span>
        <span className="absolute top-[78%] left-[5%] text-3xl text-[#D4AF37]/20 font-serif">𓁹</span>
        <span className="absolute top-[82%] right-[6%] text-4xl text-[#D4AF37]/25 font-serif">𓏏</span>
      </div>

      {/* Main Hero Container: 2-Column Luxury Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column (7 Cols on desktop): Badges, Decoding Headline, Tagline, CTAs */}
          <div
            ref={contentColRef}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1"
          >
            {/* Royal Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0E1838]/85 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F3E5AB]">
                {tHero("badge")}
              </span>
            </div>

            {/* Feature 1: Hieroglyphic Decoding Headline */}
            <HieroglyphicDecoder
              hieroglyphSource="𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿"
              className="w-full !items-center lg:!items-start mb-6"
            />

            {/* Subtitle / Tagline */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#FDFBF7]/85 font-light leading-relaxed mb-8 tracking-wide font-body">
              {tHero("tagline")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full max-w-md sm:max-w-none">
              {/* Primary Luxury CTA: Book Consultation */}
              <a
                href="#book"
                className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full border border-[#D4AF37] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA820A] text-[#0A1128] font-bold text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(212,175,55,0.35)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Calendar className="w-4 h-4 text-[#0A1128]" />
                <span>{tHero("primaryCta")}</span>
                <ArrowIcon className="w-4 h-4 text-[#0A1128] transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </a>

              {/* Secondary CTA: Explore Ecosystem */}
              <a
                href="#ecosystem"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#D4AF37]/50 bg-[#0E1838]/70 hover:bg-[#0E1838] hover:border-[#D4AF37] text-[#FDFBF7] font-semibold text-sm tracking-wide transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:rotate-45" />
                <span>{tHero("secondaryCta")}</span>
              </a>
            </div>
          </div>

          {/* Visual Masterpiece Column (5 Cols on desktop): The Hesy-Ra Medallion & Celestial Astrolabe */}
          <div
            ref={visualColRef}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Golden Ambient Halo */}
              <div
                ref={haloRef}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/30 via-[#F3E5AB]/20 to-transparent blur-[80px] pointer-events-none"
              />

              {/* Feature 2: Rotating Pharaonic Astrolabe Sacred Geometry Ring */}
              <div
                ref={ringRef}
                className="absolute inset-0 rounded-full border border-[#D4AF37]/40 border-dashed pointer-events-none flex items-center justify-center opacity-60 shadow-[0_0_60px_rgba(212,175,55,0.2)]"
              >
                {/* Secondary inner ring */}
                <div className="w-[90%] h-[90%] rounded-full border border-[#D4AF37]/25 border-dotted" />
                
                {/* 4 Cardinal Sacred Markers */}
                <div className="absolute top-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_12px_#D4AF37]" />
                <div className="absolute bottom-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_12px_#D4AF37]" />
                <div className="absolute left-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_12px_#D4AF37]" />
                <div className="absolute right-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_12px_#D4AF37]" />
              </div>

              {/* The Hesy-Ra Medallion Logo (Centerpiece) */}
              <div
                ref={medallionRef}
                className="relative w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] md:w-[360px] md:h-[360px] rounded-full p-2 shadow-[0_25px_80px_rgba(0,0,0,0.85)] border-2 border-[#D4AF37]/60 backdrop-blur-md group cursor-pointer transition-transform duration-500 hover:scale-105"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0E1838] to-[#050914] flex items-center justify-center p-3">
                  <Image
                    src="/logo.png"
                    alt="Hesy-Ra Ancient Chief of Dentists and Physicians Emblem"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 420px"
                    className="object-contain p-2 filter drop-shadow-[0_12px_28px_rgba(212,175,55,0.35)]"
                  />
                  {/* Subtle inner gold rim lighting */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#D4AF37]/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: Luxury Trust Indicators Bar & Scroll Prompt */}
      <div
        ref={statsRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 px-6 sm:px-8 rounded-2xl border border-[#D4AF37]/25 bg-[#0E1838]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(5,9,20,0.7)]">
          {/* Stat 1: 3 Clinics */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-start border-b sm:border-b-0 sm:border-r border-[#D4AF37]/20 pb-4 sm:pb-0 px-2">
            <span className="text-xl sm:text-2xl font-bold font-display gold-text-gradient">
              {tHero("stats.clinicsVal")}
            </span>
            <span className="text-xs text-[#FDFBF7]/70 mt-1 font-body">
              {tHero("stats.clinicsLabel")}
            </span>
          </div>

          {/* Stat 2: 100% Digital */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-start border-b sm:border-b-0 sm:border-r border-[#D4AF37]/20 pb-4 sm:pb-0 px-2">
            <span className="text-xl sm:text-2xl font-bold font-display gold-text-gradient">
              {tHero("stats.digitalVal")}
            </span>
            <span className="text-xs text-[#FDFBF7]/70 mt-1 font-body">
              {tHero("stats.digitalLabel")}
            </span>
          </div>

          {/* Stat 3: 15,000+ Smiles */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-start border-r-0 md:border-r border-[#D4AF37]/20 px-2">
            <span className="text-xl sm:text-2xl font-bold font-display gold-text-gradient">
              {tHero("stats.patientsVal")}
            </span>
            <span className="text-xs text-[#FDFBF7]/70 mt-1 font-body">
              {tHero("stats.patientsLabel")}
            </span>
          </div>

          {/* Stat 4: 2600 BCE Heritage */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-start px-2">
            <span className="text-xl sm:text-2xl font-bold font-display gold-text-gradient">
              {tHero("stats.heritageVal")}
            </span>
            <span className="text-xs text-[#FDFBF7]/70 mt-1 font-body">
              {tHero("stats.heritageLabel")}
            </span>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-8 flex flex-col items-center justify-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[11px] tracking-widest uppercase font-mono text-[#D4AF37]">
            {tHero("scrollPrompt")}
          </span>
          <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
