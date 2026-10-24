"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { HieroglyphicDecoder } from "./HieroglyphicDecoder";
import { Calendar, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

export function HeroSection() {
  const { isRtl, dirMultiplier } = useLanguage();
  const tHero = useTranslations("hero");

  const heroRef = useRef<HTMLElement>(null);
  const bgClipRef = useRef<HTMLDivElement>(null);
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
      // 1. Initial Entrance Animation (Solid, no fading text)
      const entranceTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      entranceTl
        .fromTo(
          medallionRef.current,
          { scale: 0.85, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "expo.out" }
        )
        .fromTo(
          ringRef.current,
          { rotation: isRtl ? 45 : -45, scale: 0.9, opacity: 0 },
          { rotation: 0, scale: 1, opacity: 0.7, duration: 1.6, ease: "expo.out" },
          "-=1.1"
        )
        .fromTo(
          contentColRef.current,
          { opacity: 0, x: isRtl ? 30 : -30 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" },
          "-=1.3"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        );

      // 2. Elegant, Non-Destructive Clip-Path on Hero Background Bottom Edge
      if (bgClipRef.current && heroRef.current) {
        gsap.fromTo(
          bgClipRef.current,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          {
            clipPath: isRtl
              ? "polygon(0% 0%, 100% 0%, 100% 92%, 0% 98%)"
              : "polygon(0% 0%, 100% 0%, 100% 98%, 0% 92%)",
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // 3. Smooth Logo Parallax & Astrolabe Spin (Without fading out text)
      if (medallionRef.current && heroRef.current) {
        gsap.to(medallionRef.current, {
          yPercent: 35,
          scale: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (ringRef.current && heroRef.current) {
        gsap.to(ringRef.current, {
          rotation: isRtl ? -120 : 120,
          yPercent: 45,
          scale: 1.1,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      if (haloRef.current && heroRef.current) {
        gsap.to(haloRef.current, {
          scale: 1.3,
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

      // 4. Subtle Hieroglyphic Glyphs Floating Parallax
      if (particlesRef.current && heroRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((child, index) => {
          const speed = ((index % 3) + 1) * 25;
          const dirX = (index % 2 === 0 ? 1 : -1) * 15 * dirMultiplier;
          gsap.to(child, {
            y: -speed * 2,
            x: dirX,
            opacity: 0.2,
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
    }, heroRef);

    return () => ctx.revert();
  }, [isRtl, dirMultiplier]);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-transparent"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Background Atmosphere Layer with Scroll Clip-Path */}
      <div
        ref={bgClipRef}
        className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5F0E6] overflow-hidden z-0"
      >
        {/* Subtle Golden Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_0%,rgba(200,162,50,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#8C6A12_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        {/* Floating Egyptian Hieroglyph Glyphs (Parallax) */}
        <div
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        >
          <span className="absolute top-[16%] left-[6%] text-3xl text-[#8C6A12]/15 font-serif">𓃀</span>
          <span className="absolute top-[24%] right-[8%] text-4xl text-[#8C6A12]/20 font-serif">𓎛</span>
          <span className="absolute top-[50%] left-[10%] text-2xl text-[#8C6A12]/15 font-serif">𓄿</span>
          <span className="absolute top-[68%] right-[12%] text-3xl text-[#8C6A12]/15 font-serif">𓍿</span>
          <span className="absolute top-[38%] left-[20%] text-2xl text-[#8C6A12]/10 font-serif">𓋹</span>
          <span className="absolute top-[78%] left-[5%] text-3xl text-[#8C6A12]/15 font-serif">𓁹</span>
          <span className="absolute top-[82%] right-[6%] text-4xl text-[#8C6A12]/20 font-serif">𓏏</span>
        </div>
      </div>

      {/* 2. Main Hero Container: 2-Column Balanced Luxury Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column (7 Cols on desktop): Badges, Decoding Headline, Tagline, CTAs */}
          <div
            ref={contentColRef}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start order-2 lg:order-1"
          >
            {/* Royal Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C8A232]/40 bg-white/95 shadow-sm backdrop-blur-xl mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C8A232] shadow-[0_0_8px_#C8A232] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-[#8C6A12]">
                {tHero("badge")}
              </span>
            </div>

            {/* Hieroglyphic Decoding Headline */}
            <HieroglyphicDecoder
              hieroglyphSource="𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿"
              className="w-full !items-center lg:!items-start mb-6"
            />

            {/* Subtitle / Tagline */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#3D4866] font-normal leading-relaxed mb-8 tracking-wide font-body">
              {tHero("tagline")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full max-w-md sm:max-w-none">
              {/* Primary Luxury CTA: Direct WhatsApp Royal Consultation */}
              <a
                href={`https://wa.me/201008901234?text=${encodeURIComponent(
                  isRtl
                    ? "مرحباً، أود حجز موعد استشارة ملكية في عيادات ماغنيفيسنت سمايل."
                    : "Hello, I would like to book a royal consultation at Magnificent Smile Clinics."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full border border-[#C8A232] bg-gradient-to-r from-[#C8A232] via-[#DFBF57] to-[#8C6A12] text-[#0A1128] font-bold text-sm tracking-wider uppercase shadow-[0_6px_25px_rgba(200,162,50,0.35)] hover:shadow-[0_10px_35px_rgba(200,162,50,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0A1128]" />
                <span>{tHero("primaryCta")}</span>
                <ArrowIcon className="w-4 h-4 text-[#0A1128] transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                <span className="absolute inset-0 bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </a>

              {/* Secondary CTA: Explore Ecosystem */}
              <a
                href="#ecosystem"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#C8A232]/45 bg-white/90 hover:bg-white text-[#0A1128] font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group shadow-sm hover:shadow-[0_4px_20px_rgba(200,162,50,0.2)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8C6A12] transition-transform group-hover:rotate-45" />
                <span>{tHero("secondaryCta")}</span>
              </a>
            </div>
          </div>

          {/* Visual Masterpiece Column (5 Cols on desktop): The Hesy-Ra Medallion & Celestial Astrolabe */}
          <div
            ref={visualColRef}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 relative z-10"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Golden Ambient Halo */}
              <div
                ref={haloRef}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C8A232]/25 via-[#F3E5AB]/35 to-transparent blur-[80px] pointer-events-none"
              />

              {/* Rotating Pharaonic Astrolabe Sacred Geometry Ring */}
              <div
                ref={ringRef}
                className="absolute inset-0 rounded-full border-2 border-[#C8A232]/40 border-dashed pointer-events-none flex items-center justify-center opacity-70 shadow-[0_0_40px_rgba(200,162,50,0.15)]"
              >
                {/* Secondary inner ring */}
                <div className="w-[90%] h-[90%] rounded-full border border-[#C8A232]/30 border-dotted" />
                
                {/* 4 Cardinal Sacred Markers */}
                <div className="absolute top-0 w-3 h-3 bg-[#C8A232] rounded-full shadow-[0_0_10px_#C8A232]" />
                <div className="absolute bottom-0 w-3 h-3 bg-[#C8A232] rounded-full shadow-[0_0_10px_#C8A232]" />
                <div className="absolute left-0 w-3 h-3 bg-[#C8A232] rounded-full shadow-[0_0_10px_#C8A232]" />
                <div className="absolute right-0 w-3 h-3 bg-[#C8A232] rounded-full shadow-[0_0_10px_#C8A232]" />
              </div>

              {/* The Hesy-Ra Medallion Logo (Centerpiece) */}
              <div
                ref={medallionRef}
                className="relative w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] md:w-[360px] md:h-[360px] rounded-full p-2.5 shadow-[0_20px_60px_rgba(10,17,40,0.18)] border-2 border-[#C8A232] bg-white group cursor-pointer transition-shadow duration-500"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0E1838] to-[#0A1128] flex items-center justify-center p-3 shadow-inner">
                  <Image
                    src="/logo.png"
                    alt="Hesy-Ra Ancient Chief of Dentists and Physicians Emblem"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 420px"
                    className="object-contain p-2 filter drop-shadow-[0_8px_20px_rgba(200,162,50,0.4)]"
                  />
                  {/* Subtle inner gold rim lighting */}
                  <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-[#C8A232]/40 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Section: Luxury Trust Indicators Bar with Exact Translation Keys */}
      <div
        ref={statsRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4"
      >
        <div className="border border-[#C8A232]/30 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-[0_10px_35px_rgba(10,17,40,0.06)] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
          {/* Stat 1: Clinics */}
          <div className="border-e border-[#C8A232]/25 last:border-none pe-2">
            <span className="block text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#8C6A12]">
              {tHero("stats.clinicsVal")}
            </span>
            <span className="text-xs sm:text-sm text-[#3D4866] font-medium mt-1 block font-body">
              {tHero("stats.clinicsLabel")}
            </span>
          </div>

          {/* Stat 2: Digital Lab */}
          <div className="border-e border-[#C8A232]/25 last:border-none pe-2">
            <span className="block text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#8C6A12]">
              {tHero("stats.digitalVal")}
            </span>
            <span className="text-xs sm:text-sm text-[#3D4866] font-medium mt-1 block font-body">
              {tHero("stats.digitalLabel")}
            </span>
          </div>

          {/* Stat 3: Patients */}
          <div className="border-e border-[#C8A232]/25 last:border-none pe-2">
            <span className="block text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#8C6A12]">
              {tHero("stats.patientsVal")}
            </span>
            <span className="text-xs sm:text-sm text-[#3D4866] font-medium mt-1 block font-body">
              {tHero("stats.patientsLabel")}
            </span>
          </div>

          {/* Stat 4: Heritage */}
          <div>
            <span className="block text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#8C6A12]">
              {tHero("stats.heritageVal")}
            </span>
            <span className="text-xs sm:text-sm text-[#3D4866] font-medium mt-1 block font-body">
              {tHero("stats.heritageLabel")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
