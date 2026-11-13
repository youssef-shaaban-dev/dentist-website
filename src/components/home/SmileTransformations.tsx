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
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
} from "lucide-react";

export function SmileTransformations() {
  const t = useTranslations("transformations");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

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

      // 2. Left Column Entrance (Before/After Slider)
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

  // 3 Clinical Treatment Cases
  const cases = [
    {
      id: "veneers",
      tag: t("cases.0.tag"),
      title: t("cases.0.title"),
      beforeImage: "/transformations/veneers-before.jpg",
      afterImage: "/transformations/veneers-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • تآكل وتصبغات" : "Before: Decayed & Stained",
      afterLabel: isRtl ? "بعد العلاج • ابتسامة ملكية ناصعة" : "After: Pristine Royal Smile",
      specs: [
        t("cases.0.specs.0"),
        t("cases.0.specs.1"),
        t("cases.0.specs.2"),
      ],
    },
    {
      id: "implants",
      tag: t("cases.1.tag"),
      title: t("cases.1.title"),
      beforeImage: "/transformations/implants-before.jpg",
      afterImage: "/transformations/implants-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • تسوس حاد وفقدان أسنان" : "Before: Severe Caries & Missing",
      afterLabel: isRtl ? "بعد العلاج • فك متكامل وأسنان نظيفة" : "After: Fully Restored Arch",
      specs: [
        t("cases.1.specs.0"),
        t("cases.1.specs.1"),
        t("cases.1.specs.2"),
      ],
    },
    {
      id: "aligners",
      tag: t("cases.2.tag"),
      title: t("cases.2.title"),
      beforeImage: "/transformations/aligners-before.jpg",
      afterImage: "/transformations/aligners-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • تزاحم وتصبغات وتآكل" : "Before: Crowded & Discolored",
      afterLabel: isRtl ? "بعد العلاج • اصطفاف مثالي وبياض ملكي" : "After: Perfect Alignment",
      specs: [
        t("cases.2.specs.0"),
        t("cases.2.specs.1"),
        t("cases.2.specs.2"),
      ],
    },
  ];

  const currentCase = cases[activeTab] || cases[0];

  // Clip Path for Before layer
  const beforeClipStyle = isRtl
    ? { clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }
    : { clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` };

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground inverted={!isRtl} />

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* CONTENT COLUMN (Warm Gold / Parchment Side): Order 1 on Desktop */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex flex-col order-2 lg:order-1 p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 ${
              isRtl ? "lg:pr-10 xl:pr-14 lg:pl-6" : "lg:pl-10 xl:pl-14 lg:pr-6"
            }`}
          >
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Sparkles className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {t("badge")}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline according to Developer Handoff */}
            <h2
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-3"
            >
              <span className="block text-[#0F266A]">
                {t("headline")}
              </span>
            </h2>

            {/* Subtitle / Website Copy */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {t("websiteCopy")}
            </p>

            {/* Case Selection Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {cases.map((item, idx) => {
                const isSelected = activeTab === idx;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(idx);
                      setSliderPosition(50);
                    }}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold font-display transition-all duration-300 border cursor-pointer shadow-xs active:scale-95 ${
                      isSelected
                        ? "bg-[#012052] text-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/30 scale-102"
                        : "bg-white/90 text-[#4A5E7B] border-[#C8A232]/35 hover:border-[#C8A232] hover:bg-[#FAF1DC]/50 hover:text-[#012052]"
                    }`}
                  >
                    {item.tag}
                  </button>
                );
              })}
            </div>

            {/* Clinical Specifications Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6">
              <div className="flex items-center justify-between gap-3 flex-wrap mb-3 pb-2.5 border-b border-[#C8A232]/25">
                <span className="text-xs font-bold text-[#9A5F13] tracking-wide">
                  {isRtl ? "المواصفات السريرية المطبقة" : "Applied Clinical Specs"}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#7A6432] bg-[#FAF1DC] px-2.5 py-0.5 rounded-full border border-[#C8A232]/40">
                  <Sparkles className="w-3 h-3 text-[#9A5F13]" />
                  <span>{currentCase.tag}</span>
                </span>
              </div>

              <div className="space-y-2.5">
                {currentCase.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#0F266A]">
                    <div className="w-4 h-4 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs according to Developer Handoff */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/treatments#smile-gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <span>{t("cta")}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </a>

              <a
                href="/clinics#booking"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <CalendarCheck className="w-4 h-4 text-[#9A5F13]" />
                <span>{isRtl ? "احجز استشارة" : "Book a Consultation"}</span>
              </a>
            </div>

          </div>

          {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Desktop */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 w-full ${
              isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
            }`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              
              {/* Interactive Comparison Card with Royal 24K Gold Frame */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Gold Crest Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3" />

                {/* Slider Canvas */}
                <div className="relative h-72 sm:h-80 md:h-[370px] w-full rounded-2xl overflow-hidden select-none border border-[#DFBF57]/40 bg-[#020B1D] shadow-inner">
                  
                  {/* AFTER LAYER (Clean White Teeth) */}
                  <div className="absolute inset-0">
                    <Image
                      src={currentCase.afterImage}
                      alt={currentCase.afterLabel}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-center"
                      priority
                    />

                    {/* Clean Teeth Badge */}
                    <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10 pointer-events-none`}>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57] text-[#FAF1DD] text-[11px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                        <Sparkles className="w-3 h-3 text-[#DFBF57]" />
                        <span>{isRtl ? "بعد العلاج" : "After Treatment"}</span>
                      </div>
                    </div>
                  </div>

                  {/* BEFORE LAYER (Decayed Teeth) */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none transition-[clip-path] duration-75"
                    style={beforeClipStyle}
                  >
                    <Image
                      src={currentCase.beforeImage}
                      alt={currentCase.beforeLabel}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-center"
                      priority
                    />

                    {/* Decayed Teeth Badge */}
                    <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} z-10`}>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A0E04]/90 border border-amber-500/50 text-amber-200 text-[11px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>{isRtl ? "قبل العلاج" : "Before Treatment"}</span>
                      </div>
                    </div>
                  </div>

                  {/* 24K Gold Divider Line & Jewel Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#DFBF57] via-[#C8A232] to-[#9A5F13] pointer-events-none shadow-[0_0_15px_rgba(200,162,50,0.8)] z-20"
                    style={{ [isRtl ? "right" : "left"]: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#DFBF57] via-[#C8A232] to-[#9A5F13] text-white border-2 border-white flex items-center justify-center shadow-xl text-xs font-bold">
                      ↔
                    </div>
                  </div>

                  {/* Range Input for dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                    aria-label="Smile comparison slider"
                  />
                </div>

                {/* Bottom Frame Caption */}
                <div className="mt-3 text-center">
                  <span className="text-[11px] font-mono text-[#DFBF57] tracking-wider uppercase font-semibold">
                    {isRtl ? "اسحب الشريط للمقارنة بين قبل وبعد" : "Drag slider to compare Before & After"}
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
