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
      className="relative z-10 w-full min-h-0 lg:min-h-[100dvh] flex flex-col justify-between overflow-hidden select-none bg-[#FDFBF7]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Main Stage Container */}
      <div className="relative w-full flex-1 flex flex-col justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-36 xl:pt-40 pb-8 sm:pb-12 lg:pb-14">
        {/* 2. Signature Multi-Line 3D Ribbon Split Background */}
        <SplitSectionBackground inverted={!isRtl} />

        {/* 3. Hero Main Content Grid */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-0 lg:min-h-[520px] xl:min-h-[560px]">
            
            {/* CONTENT COLUMN (Warm Gold / Parchment Side): Order 1 on Desktop */}
            <div
              ref={rightContentRef}
              className={`lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 ${
                isRtl ? "lg:pl-10 xl:pl-14 lg:pr-32 xl:pr-40" : "lg:pr-10 xl:pr-14 lg:pl-32 xl:pl-40"
              } pr-4 sm:pr-6`}
            >
              {/* Top Kicker Line — Pure Dental Innovation */}
              <div className="flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-4 lg:mb-5">
                <span className="h-[1px] w-4 sm:w-8 lg:w-12 bg-[#9A5F13]/60" />
                <span className="text-[9px] sm:text-[11px] lg:text-xs font-mono font-bold tracking-wider uppercase text-[#9A5F13] truncate">
                  {isRtl
                    ? "أحدث ابتكارات التكنولوجيا الطبية في طب وتجميل الأسنان"
                    : "ADVANCED DENTAL TECHNOLOGY & DIGITAL PRECISION"}
                </span>
                <span className="h-[1px] w-4 sm:w-8 lg:w-12 bg-[#9A5F13]/60" />
              </div>

              {/* Two-Tone Luxury Headline — Grounded in Dental Precision */}
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-[52px] font-bold font-display leading-[1.25] mb-2 sm:mb-4 lg:mb-5 tracking-tight">
                <span className="block text-[#0F266A]">
                  {isRtl ? "ابتسامة صحية وجمال طبيعي." : "A beautiful smile."}
                </span>
                <span className="block text-[#9A5F13] font-display italic mt-0.5 sm:mt-1">
                  {isRtl ? "مصممة بأعلى معايير الدقة." : "Engineered with precision."}
                </span>
              </h1>

              {/* Subtitle Paragraph — Pure Dental Clinical Scope */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#2A3B56] font-body leading-relaxed max-w-xl mb-4 sm:mb-6 lg:mb-8">
                {isRtl
                  ? "نجمع بين المسح الضوئي الرقمي ثلاثي الأبعاد، والتركيبات الخزفية السويسرية فائقة الدقة، والتقويم الشفاف، لراحتك التامة."
                  : "Advanced digital 3D scanning, ultra-thin Swiss veneers, crystal clear aligners, and personalized clinical care."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                {/* Primary Button */}
                <a
                  href="#book"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 lg:px-8 lg:py-4 rounded-xl bg-[#012052] hover:bg-[#022A6D] text-white font-bold text-xs sm:text-xs lg:text-sm tracking-wider uppercase shadow-md transition-all cursor-pointer border border-[#C8A232]/40"
                >
                  <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFBF57]" />
                  <span>{isRtl ? "احجز استشارتك" : "BOOK"}</span>
                  <ArrowIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFBF57]" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#clinics"
                  className="inline-flex items-center gap-1 sm:gap-2 px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-xl bg-white/90 hover:bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-xs lg:text-sm tracking-wider uppercase transition-all shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9A5F13]" />
                  <span>{isRtl ? "فروعنا" : "CLINICS"}</span>
                </a>
              </div>

              {/* Quick Clinical Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-[#C8A232]/30 max-w-xl">
                {statsList.map((stat, sIdx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={sIdx} className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1 mb-0.5 min-w-0">
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

            {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Desktop */}
            <div
              ref={leftVisualRef}
              className={`lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 w-full pt-2 pb-4 lg:py-0 ${
                isRtl ? "lg:pl-8 xl:pl-10" : "lg:pr-8 xl:pr-10"
              }`}
            >
              <div className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[400px] mx-auto relative group">
                
                {/* Subtle Glow behind Frame */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#C8A232]/20 via-[#DFBF57]/10 to-transparent rounded-full blur-xl sm:blur-2xl pointer-events-none" />

                {/* Queen Portrait Frame with 24K Sculpted Gold Trim */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-1.5 sm:border-2 border-[#C8A232]/80 shadow-[0_15px_40px_rgba(0,0,0,0.6)] bg-[#020B1D]">
                  
                  {/* Gold Shimmer Bar on Top */}
                  <div className="h-1 sm:h-1.5 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

                  {/* Queen Portrait */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#020B1D]">
                    <Image
                      src="/images/hero-queen.jpg"
                      alt={isRtl ? "ابتسامة ملكية متألقة" : "Queen of Magnificent Smile"}
                      fill
                      className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      priority
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 300px, 420px"
                    />

                    {/* Gradient Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Royal Badge Stamp on Image */}
                    <div className="absolute top-2 sm:top-3.5 right-2 sm:right-3.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#011438]/85 border border-[#DFBF57]/60 backdrop-blur-md flex items-center gap-1 shadow-md">
                      <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#DFBF57]" />
                      <span className="text-[7.5px] sm:text-[9px] font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                        HESY-RA
                      </span>
                    </div>

                    {/* Clinic Tour Play Button */}
                    <button
                      type="button"
                      onClick={() => setIsVideoModalOpen(true)}
                      className="absolute top-2 sm:top-3.5 left-2 sm:left-3.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#011438]/85 hover:bg-[#012052] border border-[#DFBF57]/60 backdrop-blur-md flex items-center gap-1 shadow-md text-[#DFBF57] text-[7.5px] sm:text-[9px] font-mono font-bold transition-colors cursor-pointer z-10"
                      title={isRtl ? "تشغيل جولة الفيديو" : "Play Clinic Video"}
                    >
                      <Play className="w-2.5 h-2.5 text-[#DFBF57] fill-current" />
                      <span>{isRtl ? "جولة العيادات" : "TOUR"}</span>
                    </button>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-2 sm:bottom-3.5 left-2 sm:left-3.5 right-2 sm:right-3.5 p-1.5 sm:p-2.5 rounded-xl bg-[#011438]/90 border border-[#DFBF57]/40 backdrop-blur-md shadow-lg text-center">
                      <span className="text-[8px] sm:text-[10px] lg:text-xs font-bold text-white block">
                        {isRtl ? "تصميم وتجميل الابتسامة الرقمي" : "Digital Smile Architecture"}
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
