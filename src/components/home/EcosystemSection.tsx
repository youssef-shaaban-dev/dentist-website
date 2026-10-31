"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
import {
  Sparkles,
  Building2,
  Layers,
  Cpu,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Crown,
} from "lucide-react";

interface PillarData {
  id: string;
  serial: string;
  titleKey: string;
  descKey: string;
  ctaKey: string;
  badgeKey: string;
  metricKey: string;
  href: string;
  image: string;
  icon: React.ElementType;
  perksAr: string[];
  perksEn: string[];
  featured?: boolean;
}

const pillars: PillarData[] = [
  {
    id: "clinics",
    serial: "01",
    titleKey: "clinicsTitle",
    descKey: "clinicsDesc",
    ctaKey: "clinicsCta",
    badgeKey: "clinicsBadge",
    metricKey: "clinicsMetric",
    href: "#clinics",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85",
    icon: Building2,
    perksAr: [
      "٣ صروح طبية متطورة (الشيخ زايد • التجمع • المعادي)",
      "أجنحة خاصة مجهزة بأحدث ماسحات الـ 3D CBCT الميكرونية",
      "رعاية نخبة الاستشاريين وأساتذة الجامعات الدولية",
    ],
    perksEn: [
      "3 Flagship Medical Sanctuaries (Zayed • New Cairo • Maadi)",
      "Private Suites with In-Room 3D CBCT Micron Scanners",
      "Care by European & Fellowship-Trained Consultants",
    ],
    featured: false,
  },
  {
    id: "aligners",
    serial: "02",
    titleKey: "alignersTitle",
    descKey: "alignersDesc",
    ctaKey: "alignersCta",
    badgeKey: "alignersBadge",
    metricKey: "alignersMetric",
    href: "#treatments",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
    icon: Layers,
    perksAr: [
      "بوليمر طبي ألماني معتمد متعدد الطبقات فائق الشفافية",
      "محاكاة رقمية ثلاثية الأبعاد للابتسامة قبل بدء العلاج",
      "تصنيع وتسليم محلي فوري بدون انتظار شحن خارجي",
    ],
    perksEn: [
      "German Multilayer Biomedical Polymer (100% Invisible)",
      "Predictive AI 3D Treatment Simulation Pre-Treatment",
      "In-House Direct Production with Zero Shipping Delays",
    ],
    featured: true,
  },
  {
    id: "lab",
    serial: "03",
    titleKey: "labTitle",
    descKey: "labDesc",
    ctaKey: "labCta",
    badgeKey: "labBadge",
    metricKey: "labMetric",
    href: "#book",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=85",
    icon: Cpu,
    perksAr: [
      "روبوتات تفريز ألمانية خماسية المحاور 5-Axis CAD/CAM",
      "خامات زركونيا Prettau السويسرية وفينير E.max الأصلي",
      "تعديلات ميكرونية فورية بجانب الطبيب خلال نفس الجلسة",
    ],
    perksEn: [
      "German 5-Axis Robotic CAD/CAM Milling Units",
      "Swiss Prettau Zirconia & Authentic E.max Porcelain",
      "Chairside Micro-Adjustments within the Same Session",
    ],
    featured: false,
  },
];

export function EcosystemSection() {
  const t = useTranslations("ecosystem");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge & Subtitle entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 2. TextSplit Scrub for Main Headline
      const titleWords = titleRef.current?.querySelectorAll(".split-title-word");
      if (titleWords && titleWords.length > 0) {
        gsap.to(titleWords, {
          y: "0%",
          opacity: 1,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });
      }

      // 3. Pillars cards entrance
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Royal Ambient Light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C8A232]/7 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#022256]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER                                                */}
        {/* ============================================================== */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-xs mb-3.5">
            <Crown className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("tag")}
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#012968] mb-3.5 leading-tight"
          >
            <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6782] font-body leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 3 PRESTIGIOUS ECOSYSTEM PILLARS                                */}
        {/* ============================================================== */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isFeatured = pillar.featured;

            return (
              <div
                key={pillar.id}
                className={`group relative rounded-3xl bg-white overflow-hidden shadow-[0_15px_45px_rgba(2,34,86,0.06)] hover:shadow-[0_25px_65px_rgba(200,162,50,0.2)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between ${
                  isFeatured
                    ? "border-2 border-[#C8A232] ring-4 ring-[#C8A232]/10"
                    : "border-2 border-[#C8A232]/35 hover:border-[#C8A232]"
                }`}
              >
                {/* Top 24K Gold Bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${
                    isFeatured
                      ? "from-[#955904] via-[#DFBF57] to-[#955904]"
                      : "from-[#C8A232]/60 via-[#DFBF57]/80 to-[#C8A232]/60"
                  }`}
                />

                {/* 1. High-Resolution Visual Header */}
                <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-[#022256]">
                  <Image
                    src={pillar.image}
                    alt={t(pillar.titleKey)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={isFeatured}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/25 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/40 via-transparent to-[#C8A232]/25 pointer-events-none" />

                  {/* Top Badges: Serial Number & Entity Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[10px] sm:text-xs font-mono font-bold text-[#955904] shadow-md backdrop-blur-md">
                      {isFeatured && <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />}
                      <span>{t(pillar.badgeKey)}</span>
                    </span>

                    <span className="text-xs font-mono font-bold text-white bg-[#012968]/90 border border-white/20 px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                      {pillar.serial} / 03
                    </span>
                  </div>

                  {/* Bottom Text Over Image: Icon + Entity Title */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[#C8A232] text-[#012968] flex items-center justify-center shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold">
                        {pillar.id.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug drop-shadow-sm">
                      {t(pillar.titleKey)}
                    </h3>
                  </div>
                </div>

                {/* 2. Entity Body & Clinical Proof Points */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Entity Description */}
                    <p className="text-xs sm:text-sm text-[#5B6782] font-body leading-relaxed mb-4">
                      {t(pillar.descKey)}
                    </p>

                    {/* Metric Chip */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#012968]/5 border border-[#012968]/15 text-[#012968] font-mono font-bold text-xs mb-5">
                      <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
                      <span>{t(pillar.metricKey)}</span>
                    </div>

                    {/* 3 Verified Distinction Perks */}
                    <div className="space-y-2 mb-6 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#C8A232]/25">
                      {(isRtl ? pillar.perksAr : pillar.perksEn).map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-[11px] sm:text-xs font-bold text-[#012968] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#955904] shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Action CTA Button */}
                  <div className="pt-2">
                    <a
                      href={pillar.href}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white shadow-[0_4px_16px_rgba(200,162,50,0.3)] hover:shadow-[0_6px_22px_rgba(200,162,50,0.5)] transform hover:-translate-y-0.5"
                          : "border-2 border-[#C8A232]/50 bg-white hover:bg-[#FAF8F5] text-[#012968] hover:border-[#C8A232]"
                      }`}
                    >
                      <span>{t(pillar.ctaKey)}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
