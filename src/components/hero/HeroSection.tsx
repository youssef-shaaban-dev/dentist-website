"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  ArrowRight,
  ArrowLeft,
  Play,
  X,
  CalendarCheck,
  ShieldCheck,
  Building2,
  Crown,
  Maximize2,
  Minimize2,
  Users,
} from "lucide-react";

export function HeroSection() {
  const { isRtl, locale } = useLanguage();
  const t = useTranslations("hero");
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const heroRef = useRef<HTMLElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Prevent background scrolling when video modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoModalOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Right Content Entrance
      if (rightContentRef.current) {
        gsap.fromTo(
          rightContentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.15,
          }
        );
      }

      // 2. Left Visual Entrance
      if (leftVisualRef.current) {
        gsap.fromTo(
          leftVisualRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isRtl]);

  const statsList = [
    {
      val: t("stats.clinicsVal"),
      label: isRtl ? "٣ مراكز طبية متطورة" : "3 Advanced Centers",
      icon: Building2,
    },
    {
      val: t("stats.digitalVal"),
      label: isRtl ? "١٠٠٪ رقمي بالكامل" : "100% In-House CAD/CAM",
      icon: ShieldCheck,
    },
    {
      val: t("stats.patientsVal"),
      label: isRtl ? "+١٥,٠٠٠ حالة ناجحة" : "15,000+ Happy Patients",
      icon: Users,
    },
    {
      val: "0.01 mm",
      label: isRtl ? "دقة مسح ميكرونية" : "Micron Precision",
      icon: Crown,
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Magnificent Smile Dental Center"
      className="relative mt-10 md:mt-0 z-10 w-full min-h-0 lg:min-h-[100dvh] flex flex-col justify-between overflow-x-clip lg:overflow-hidden select-none bg-[#FDFBF7]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Main Stage Container */}
      <div className="relative w-full flex-1 flex flex-col justify-center overflow-x-clip lg:overflow-hidden pt-20 sm:pt-24 lg:pt-36 xl:pt-40 pb-20 sm:pb-24 lg:pb-14">
        {/* 2. Signature Multi-Line 3D Ribbon Split Background */}
        <SplitSectionBackground inverted={!isRtl} />

        {/* 3. Hero Main Content Grid - Full Width Spanning so Left=25vw and Right=75vw */}
        <div className="w-full relative z-10 my-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 min-h-0 lg:min-h-[520px] xl:min-h-[560px]">
            
            {/* CONTENT COLUMN (Warm Gold / Parchment Side): Order 1 on Mobile & Desktop */}
            {/* Dedicated exception for Hero: offsets the Hieroglyphic Pillar (w-32/w-36) so content is centered with generous breathing room */}
            <div
              ref={rightContentRef}
              className={`flex flex-col justify-center items-center text-center order-1 lg:order-1 p-5 sm:p-7 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/40 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none w-full ${
                isRtl
                  ? "lg:pr-44 xl:pr-56 2xl:pr-64 lg:pl-8 xl:pl-12"
                  : "lg:pl-44 xl:pl-56 2xl:pl-64 lg:pr-8 xl:pr-12"
              } px-2 sm:px-4 lg:px-0`}
            >
              <div className="w-full max-w-xl mx-auto flex flex-col items-center">
                {/* Top Kicker Line — Pure Dental Innovation */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-2 sm:mb-4 lg:mb-5">
                  <span className="h-[1px] w-4 sm:w-8 lg:w-12 bg-[#9A5F13]/60" />
                  <span className="text-[9px] sm:text-[11px] lg:text-xs font-mono font-bold tracking-wider uppercase text-[#9A5F13] truncate">
                    {isRtl
                      ? "أحدث ابتكارات التكنولوجيا الطبية في طب وتجميل الأسنان"
                      : "ADVANCED DENTAL TECHNOLOGY & DIGITAL PRECISION"}
                  </span>
                  <span className="h-[1px] w-4 sm:w-8 lg:w-12 bg-[#9A5F13]/60" />
                </div>

                {/* Two-Tone Luxury Headline */}
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[48px] xl:text-[52px] font-bold font-display leading-[1.2] mb-3 sm:mb-4 lg:mb-5 tracking-tight text-center">
                  <span className="block text-[#0F266A]">
                    {isRtl ? "تخصصات مختلفة." : "Different Specialties."}
                  </span>
                  <span className="block text-[#9A5F13] font-display italic mt-0.5 sm:mt-1">
                    {isRtl ? "رؤية واحدة متميزة." : "One Magnificent Vision."}
                  </span>
                </h1>

                {/* Subtitle Paragraph */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2A3B56] font-body leading-relaxed max-w-xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-center">
                  {t("websiteCopy")}
                </p>

                {/* Action Buttons according to Developer Handoff */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                  {/* Primary Button: Book a Consultation -> /clinics#booking */}
                  <a
                    href={`/${locale}/clinics#booking`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 lg:px-7 lg:py-4 rounded-xl bg-[#012052] hover:bg-[#022A6D] text-white font-bold text-xs sm:text-xs lg:text-sm tracking-wider uppercase shadow-md transition-all cursor-pointer border border-[#C8A232]/40"
                  >
                    <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFBF57]" />
                    <span>{t("bookCta")}</span>
                    <ArrowIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFBF57]" />
                  </a>

                  {/* Secondary Button: Explore Our Services -> /#divisions */}
                  <a
                    href="#divisions"
                    className="inline-flex items-center gap-1 sm:gap-2 px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-xl bg-white/90 hover:bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-xs lg:text-sm tracking-wider uppercase transition-all shadow-xs"
                  >
                    <span>{t("exploreCta")}</span>
                  </a>
                </div>

                {/* Quick Clinical Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-[#C8A232]/30 max-w-xl mx-auto w-full">
                  {statsList.map((stat, sIdx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={sIdx} className="flex flex-col items-center text-center min-w-0">
                        <div className="flex items-center justify-center gap-1 mb-0.5 min-w-0">
                          <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9A5F13] shrink-0" />
                          <span className="text-[11px] sm:text-xs lg:text-sm font-bold font-mono text-[#0F266A] truncate">
                            {stat.val}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#5B6782] font-body truncate">
                          {stat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Mobile & Desktop */}
            <div
              ref={leftVisualRef}
              className={`relative flex justify-center items-center order-2 lg:order-2 w-full pt-4 pb-6 lg:py-0 px-4 sm:px-8 lg:px-12 xl:px-16`}
            >
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[370px] xl:max-w-[390px] mx-auto relative group">
                
                {/* Subtle Glow behind Frame */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#C8A232]/20 via-[#DFBF57]/10 to-transparent rounded-full blur-xl sm:blur-2xl pointer-events-none" />

                {/* Luxury Clinical Showcase Frame with 24K Sculpted Gold Trim */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-1.5 sm:border-2 border-[#C8A232]/80 shadow-[0_15px_40px_rgba(0,0,0,0.6)] bg-[#020B1D]">
                  
                  {/* Gold Shimmer Bar on Top */}
                  <div className="h-1 sm:h-1.5 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

                  {/* Real Smile Video / High-Res Fallback Poster Canvas (Click to expand on mobile & desktop) */}
                  <div
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative w-full aspect-[3/4] overflow-hidden bg-[#020B1D] cursor-pointer group/vid select-none"
                    title={isRtl ? "اضغط لتكبير الفيديو" : "Click to enlarge video"}
                  >
                    {/* Background Silent Ambient Video */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/images/hero-real-smile.jpg"
                      className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover/vid:scale-105"
                    >
                      <source src="/videos/dentist-clinic-6592.mp4" type="video/mp4" />
                    </video>

                    {/* Gradient Vignette Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-black/20 to-black/30 pointer-events-none" />

                    {/* Real Clinical Verification Badge */}
                    <div className="absolute top-2 sm:top-3.5 right-2 sm:right-3.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#011438]/90 border border-[#DFBF57]/70 backdrop-blur-md flex items-center gap-1.5 shadow-md pointer-events-none">
                      <ShieldCheck className="w-3 h-3 text-[#DFBF57]" />
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                        {isRtl ? "نتائج سريرية حقيقية" : "AUTHENTIC RESULTS"}
                      </span>
                    </div>

                    {/* Tap to Enlarge Play Button Badge */}
                    <div
                      className="absolute top-2 sm:top-3.5 left-2 sm:left-3.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#011438]/95 hover:bg-[#012052] border border-[#DFBF57] backdrop-blur-md flex items-center gap-1.5 shadow-lg text-[#DFBF57] text-[9px] sm:text-[11px] font-mono font-bold transition-all z-10 hover:scale-105 active:scale-95"
                    >
                      <Maximize2 className="w-3 h-3 text-[#DFBF57]" />
                      <span>{isRtl ? "اضغط للتكبير" : "Tap to Enlarge"}</span>
                    </div>

                    {/* Center Floating Play Button on Hover/Mobile */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-75 group-hover/vid:opacity-100 group-hover/vid:scale-110 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#DFBF57] via-[#C8A232] to-[#9A5F13] text-[#012052] flex items-center justify-center shadow-[0_0_25px_rgba(200,162,50,0.7)] border-2 border-white/80">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#012052] translate-x-0.5 rtl:-translate-x-0.5" />
                      </div>
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-2 sm:bottom-3.5 left-2 sm:left-3.5 right-2 sm:right-3.5 p-2 sm:p-2.5 rounded-xl bg-[#011438]/90 border border-[#DFBF57]/50 backdrop-blur-md shadow-lg text-center">
                      <span className="text-[9px] sm:text-[11px] lg:text-xs font-bold text-white block">
                        {isRtl ? "ابتسامة طبيعية متناسقة • حالات واقعية" : "Natural Smile Design • Verified Clinical Cases"}
                      </span>
                    </div>
                  </div>

                  {/* Footer Bar */}
                  <div className="px-2.5 sm:px-4 py-1.5 sm:py-2.5 bg-[#010F28] border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-[8.5px] sm:text-[11px] font-mono">
                    <span>MAGNIFICENT SMILE</span>
                    <span className="text-white/60">
                      {isRtl ? "عيادات · تقويم · معمل" : "Clinics • Aligners • Lab"}
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 6. CINEMATIC CLINIC TOUR VIDEO MODAL (Expand / Minimize UX)         */}
      {/* =================================================================== */}
      {isVideoModalOpen && (
        <div
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border-2 border-[#C8A232] bg-[#020B1D] shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 bg-[#010E24] border-b border-[#C8A232]/40">
              <div className="flex items-center gap-2 text-white min-w-0">
                <Crown className="w-4 h-4 text-[#DFBF57] shrink-0" />
                <span className="text-xs sm:text-sm font-bold font-display truncate">
                  {isRtl ? "جولة في مراكز ماغنيفيسنت سمايل الطبية" : "Magnificent Smile Dental Centers Tour"}
                </span>
              </div>

              {/* Action Buttons (Minimize + Close) */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold border border-[#DFBF57]/40 transition-all cursor-pointer"
                  title={isRtl ? "تصغير الفيديو" : "Minimize Video"}
                >
                  <Minimize2 className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <span>{isRtl ? "تصغير" : "Minimize"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/videos/dentist-clinic-6592.mp4" type="video/mp4" />
                <source src="/videos/hero-dental.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Modal Footer hint for Mobile */}
            <div className="px-4 py-2 bg-[#010E24] border-t border-[#DFBF57]/20 flex items-center justify-between text-[11px] text-[#CBD5E1]">
              <span className="font-mono text-[#DFBF57]">MAGNIFICENT SMILE CLINIC</span>
              <span className="text-white/60">
                {isRtl ? "اضغط على تصغير أو خارج الفيديو للرجوع" : "Tap minimize or outside to return"}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
