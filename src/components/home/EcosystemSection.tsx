"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
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
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [activePillarIdx, setActivePillarIdx] = useState<number>(1);
  const currentPillar = pillars[activePillarIdx] || pillars[1];
  const CurrentIcon = currentPillar.icon;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Right Column Entrance
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Left Column Entrance
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRtl]);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground />

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* RIGHT COLUMN (Warm Gold / Parchment Side): Balanced 6 Cols on desktop */}
          {/* On mobile, wrapped in a luxury parchment card so dark blue text never bleeds into dark blue background */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex flex-col ${
              isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
            } p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 lg:pl-10 xl:pl-14`}
          >
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Crown className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {t("tag")}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-3">
              <span className="block text-[#0F266A]">
                {t("title")}
              </span>
              <span className="block text-[#9A5F13] text-xl sm:text-2xl lg:text-3xl mt-1">
                {t(currentPillar.titleKey)}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {t("subtitle")}
            </p>

            {/* 3 Pillar Selector Cards */}
            <div className="space-y-3 mb-6 max-w-xl">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillarIdx === idx;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarIdx(idx)}
                    className={`w-full text-start p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/25 scale-101"
                        : "bg-white/85 border-[#C8A232]/35 hover:border-[#C8A232] hover:bg-white shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isSelected
                            ? "bg-[#012052] text-[#DFBF57] shadow-sm"
                            : "bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono font-bold text-[#9A5F13]">
                            {pillar.serial} / 03
                          </span>
                          <span className="text-xs font-bold text-[#0F266A] font-display truncate">
                            {t(pillar.titleKey)}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5B6782] line-clamp-1 font-body">
                          {t(pillar.descKey)}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF1DC] border border-[#C8A232]/35 text-[10px] font-mono font-bold text-[#9A5F13] shrink-0">
                      <span>{t(pillar.metricKey)}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Distinction Perks */}
            <div className="p-4 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6 max-w-xl">
              <span className="text-xs font-mono font-bold text-[#9A5F13] uppercase tracking-wider block mb-2.5">
                {isRtl ? "مزايا وتكامل هذا الصرح" : "Integrated Pillar Advantages"}
              </span>

              <div className="space-y-2">
                {(isRtl ? currentPillar.perksAr : currentPillar.perksEn).map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#0F266A] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5F13] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href={currentPillar.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <span>{t(currentPillar.ctaKey)}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): Balanced 6 Cols on desktop */}
          {/* Centered comfortably inside the Royal Blue half with max-w-[390px], keeping >80px clearance to the ribbon */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              
              {/* Luxury Spotlight Card */}
              <div className="group relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3.5" />

                {/* Viewport Photo */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-[#020B1D] border border-[#DFBF57]/30 shadow-inner">
                  <Image
                    src={currentPillar.image}
                    alt={t(currentPillar.titleKey)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1D]/40 via-transparent to-[#DFBF57]/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-white bg-[#012052]/90 border border-white/20 px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {currentPillar.serial} / 03
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[10px] sm:text-xs font-mono font-bold text-[#9A5F13] shadow-md backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-[#DFBF57]" />
                      <span>{t(currentPillar.badgeKey)}</span>
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-[#DFBF57] text-[#012052] flex items-center justify-center shadow-md">
                        <CurrentIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold">
                        {currentPillar.id.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-display text-white leading-snug drop-shadow-sm">
                      {t(currentPillar.titleKey)}
                    </h3>
                  </div>
                </div>

                {/* Hesy-Ra Ecosystem Triad Seal Footer */}
                <div className="mt-3.5 pt-3 border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    <span>HESY-RA TRIAD</span>
                  </div>
                  <span className="text-[11px] text-white/70">
                    {isRtl ? "منظومة علاجية مغلقة" : "Closed-Loop Synergy"}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
