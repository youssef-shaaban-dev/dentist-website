"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Play,
  X,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Building2,
  Crown,
} from "lucide-react";

export function HeroSection() {
  const { isRtl } = useLanguage();
  const t = useTranslations("hero");
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const heroRef = useRef<HTMLElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
      icon: Sparkles,
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
      className="relative z-10 w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden select-none bg-[#FDFBF7]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Main Stage Container (Clean, Stable, Zero Video Morphing Distortion) */}
      <div className="relative w-full flex-1 flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16">
        {/* 2. Signature Multi-Line 3D Ribbon Split Background */}
        <SplitSectionBackground />

        {/* 3. Hero Main Content Grid */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[560px] lg:min-h-[620px]">
            
            {/* RIGHT COLUMN (Warm Gold / Parchment Side): Balanced 6 Cols on desktop */}
            {/* Safe buffer pl-10 xl:pl-14 guarantees zero ribbon collision */}
            <div
              ref={rightContentRef}
              className={`lg:col-span-6 flex flex-col justify-center ${
                isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
              } pl-0 lg:pl-10 xl:pl-14`}
            >
              {/* Top Kicker Line — Pure Dental Innovation */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="h-[1px] w-8 sm:w-12 bg-[#9A5F13]/60" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#9A5F13]">
                  {isRtl
                    ? "أحدث ابتكارات التكنولوجيا الطبية في طب وتجميل الأسنان"
                    : "ADVANCED DENTAL TECHNOLOGY & DIGITAL PRECISION"}
                </span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#9A5F13]/60" />
              </div>

              {/* Two-Tone Luxury Headline — Grounded in Dental Precision */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-display leading-[1.18] mb-5 tracking-tight">
                <span className="block text-[#0F266A]">
                  {isRtl ? "ابتسامة صحية وجمال طبيعي." : "A beautiful smile."}
                </span>
                <span className="block text-[#9A5F13] font-display italic mt-1 sm:mt-2">
                  {isRtl ? "مصممة بأعلى معايير الدقة." : "Engineered with precision."}
                </span>
              </h1>

              {/* Subtitle Paragraph — Pure Dental Clinical Scope */}
              <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed max-w-xl mb-8">
                {isRtl
                  ? "نجمع بين المسح الضوئي الرقمي ثلاثي الأبعاد، والتركيبات الخزفية السويسرية فائقة الدقة، والتقويم الشفاف، في بيئة علاجية مجهزة بالكامل لراحتك التامة."
                  : "Advanced digital 3D scanning, ultra-thin Swiss veneers, crystal clear aligners, and personalized clinical care — designed for natural comfort and lasting results."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                {/* Primary Button */}
                <a
                  href="#book"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#012052] hover:bg-[#022A6D] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_6px_25px_rgba(2,34,86,0.35)] hover:shadow-[0_10px_35px_rgba(2,34,86,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-[#C8A232]/40"
                >
                  <CalendarCheck className="w-4 h-4 text-[#DFBF57]" />
                  <span>{isRtl ? "احجز موعد استشارتك" : "BOOK APPOINTMENT"}</span>
                  <ArrowIcon className="w-4 h-4 text-[#DFBF57]" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#clinics"
                  className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white/90 hover:bg-white border border-[#C8A232]/60 hover:border-[#C8A232] text-[#0F266A] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#9A5F13]" />
                  <span>{isRtl ? "فروعنا ومراكزنا" : "OUR CLINICS"}</span>
                  <span className="text-[#9A5F13]">↗</span>
                </a>

                {/* Watch Video Pill Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-[#FAF1DC] border border-[#C8A232]/50 hover:bg-[#F3E4C0] text-[#9A5F13] text-xs font-bold font-mono transition-all cursor-pointer shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-[#9A5F13] text-white flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>{isRtl ? "شاهد جولة العيادات" : "CLINIC TOUR"}</span>
                </button>
              </div>

              {/* 4 Quick Clinical Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-[#C8A232]/30 max-w-xl">
                {statsList.map((stat, sIdx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={sIdx} className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Icon className="w-3.5 h-3.5 text-[#9A5F13]" />
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#0F266A]">
                          {stat.val}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-[#5B6782] font-body line-clamp-1">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* LEFT COLUMN (Deep Royal Blue Side): Balanced 6 Cols on desktop */}
            {/* Centered comfortably inside the Royal Blue half with max-w-[390px], keeping >80px clearance to the ribbon */}
            <div
              ref={leftVisualRef}
              className={`lg:col-span-6 relative flex justify-center items-center ${
                isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
              } w-full`}
            >
              <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto relative group">
                
                {/* Subtle Glow behind Frame */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#C8A232]/20 via-[#DFBF57]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Queen Portrait Frame with 24K Sculpted Gold Trim */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#C8A232]/80 shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-[#020B1D]">
                  
                  {/* Gold Shimmer Bar on Top */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

                  {/* Queen Portrait */}
                  <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#020B1D]">
                    <Image
                      src="/images/hero-queen.jpg"
                      alt="Magnificent Smile — Precision Aesthetic Dentistry"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-103"
                      priority
                    />

                    {/* Royal Blue Atmosphere Vignettes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D] via-transparent to-transparent opacity-80 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1D]/40 via-transparent to-[#DFBF57]/20 pointer-events-none" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57]/50 text-white text-[11px] font-mono font-bold shadow-md backdrop-blur-md">
                        <Crown className="w-3.5 h-3.5 text-[#DFBF57]" />
                        <span>HESY-RA HERITAGE</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => setIsVideoModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 hover:bg-[#012052] border border-white/20 text-white text-[10px] font-mono font-bold shadow-md backdrop-blur-md transition-colors cursor-pointer"
                        title={isRtl ? "تشغيل جولة الفيديو" : "Play Clinic Video"}
                      >
                        <Play className="w-2.5 h-2.5 text-[#DFBF57] fill-current" />
                        <span>{isRtl ? "جولة العيادات" : "TOUR"}</span>
                      </button>
                    </div>

                    {/* Bottom Floating Card: Dental Precision Badge */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-[#012052]/90 border border-[#C8A232]/50 text-white shadow-xl backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#DFBF57] uppercase tracking-wider block">
                            {isRtl ? "معايير الجمال الطبيعي" : "NATURAL AESTHETICS"}
                          </span>
                          <span className="text-xs font-bold font-display text-white">
                            {isRtl ? "تصميم وتجميل الابتسامة الرقمي" : "Digital Smile Architecture"}
                          </span>
                        </div>
                        <Sparkles className="w-4 h-4 text-[#DFBF57]" />
                      </div>
                    </div>

                  </div>

                  {/* Footer Bar */}
                  <div className="px-4 py-2.5 bg-[#010F28] border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-[11px] font-mono">
                    <span>MAGNIFICENT SMILE</span>
                    <span className="text-white/60">
                      {isRtl ? "عيادات · تقويم شفاف · معمل" : "Clinics • Aligners • Lab"}
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* =================================================================== */}
      {/* 6. CINEMATIC CLINIC TOUR VIDEO MODAL                               */}
      {/* =================================================================== */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border-2 border-[#C8A232] bg-black shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-[#010E24] border-b border-[#C8A232]/40">
              <div className="flex items-center gap-2 text-white">
                <Crown className="w-4 h-4 text-[#DFBF57]" />
                <span className="text-sm font-bold font-display">
                  {isRtl ? "جولة في مراكز ماغنيفيسنت سمايل الطبية" : "Magnificent Smile Dental Centers Tour"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/videos/hero-dental.mp4" type="video/mp4" />
                <source src="/videos/dentist-teeth-brush-39480.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
