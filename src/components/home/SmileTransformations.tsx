"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
import {
  Sparkles,
  SlidersHorizontal,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export function SmileTransformations() {
  const t = useTranslations("transformations");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge & subtitle entrance
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3 Clinical Treatment Cases with real authentic Before (Decayed) and After (Clean) photographs
  const cases = [
    {
      id: "veneers",
      tag: t("cases.0.tag"),
      title: t("cases.0.title"),
      beforeImage: "/transformations/veneers-before.jpg",
      afterImage: "/transformations/veneers-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • أسنان مسوسة وتصبغات" : "Before: Decayed & Stained Teeth",
      afterLabel: isRtl ? "بعد العلاج • أسنان نظيفة ناصعة" : "After: Clean & Pristine Smile",
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
      beforeLabel: isRtl ? "قبل العلاج • تسوس حاد وتآكل جذري" : "Before: Severe Caries & Missing Teeth",
      afterLabel: isRtl ? "بعد العلاج • فك متكامل وأسنان نظيفة" : "After: Clean Restored Dental Arch",
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
      beforeLabel: isRtl ? "قبل العلاج • تزاحم وتصبغات وتآكل" : "Before: Crowded & Discolored Teeth",
      afterLabel: isRtl ? "بعد العلاج • اصطفاف مثالي وبياض ملكي" : "After: Perfect Alignment & Clean Smile",
      specs: [
        t("cases.2.specs.0"),
        t("cases.2.specs.1"),
        t("cases.2.specs.2"),
      ],
    },
  ];

  const currentCase = cases[activeTab] || cases[0];

  // Clip Path for the Before layer (Decayed Teeth)
  const beforeClipStyle = isRtl
    ? { clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }
    : { clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` };

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Royal Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C8A232]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#022256]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-xs mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#012968] mb-3"
          >
            <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
          </h2>

          <p className="text-sm sm:text-base text-[#5B6782] font-body leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Case Selection Tabs - Fully Translated */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
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
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-display transition-all duration-300 border cursor-pointer shadow-xs active:scale-95 ${
                  isSelected
                    ? "bg-[#012968] text-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/30 scale-102"
                    : "bg-white text-[#5B6782] border-[#C8A232]/30 hover:border-[#C8A232] hover:bg-[#FAF8F5] hover:text-[#012968]"
                }`}
              >
                {item.tag}
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Stage Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#C8A232]/35 p-5 sm:p-8 shadow-[0_20px_50px_rgba(2,34,86,0.08)]">
          
          {/* Card Header: Title, Specs & Slider Hint */}
          <div className="mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold font-display text-[#012968] mb-1.5">
                {currentCase.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#5B6782]">
                {currentCase.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="flex items-center gap-1.5 font-medium text-[#012968]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#955904]" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#955904] bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 shadow-xs shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8A232]" />
              <span>{t("sliderHint")}</span>
            </div>
          </div>

          {/* Before/After Split Viewer Canvas */}
          <div className="relative h-80 sm:h-96 md:h-[440px] w-full rounded-2xl overflow-hidden select-none shadow-inner border border-[#C8A232]/30 bg-[#022256]">
            
            {/* ========================================================= */}
            {/* 1. AFTER LAYER (BACKGROUND): أسنان نظيفة ناصعة بيضاء         */}
            {/* Real high-res photograph of sparkling clean white teeth   */}
            {/* ========================================================= */}
            <div className="absolute inset-0">
              <Image
                src={currentCase.afterImage}
                alt={currentCase.afterLabel}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
                priority
              />

              {/* Clean Teeth Badge */}
              <div className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} z-10 pointer-events-none`}>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#012968]/95 border border-[#DFBF57] text-white text-xs font-bold shadow-md backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <span>{currentCase.afterLabel}</span>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* 2. BEFORE LAYER (CLIPPED FOREGROUND): أسنان مسوسة وصفراء   */}
            {/* Real high-res photograph of decayed, yellowed teeth       */}
            {/* ========================================================= */}
            <div
              className="absolute inset-0 z-10 pointer-events-none transition-[clip-path] duration-75"
              style={beforeClipStyle}
            >
              <Image
                src={currentCase.beforeImage}
                alt={currentCase.beforeLabel}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
                priority
              />

              {/* Decayed Teeth Badge */}
              <div className={`absolute top-4 ${isRtl ? "right-4" : "left-4"} z-10`}>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2B1705]/95 border border-[#DFBF57]/50 text-white text-xs font-bold shadow-md backdrop-blur-md">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <span>{currentCase.beforeLabel}</span>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* 3. 24K GOLD DRAGGABLE DIVIDER BAR & JEWEL HANDLE          */}
            {/* ========================================================= */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#DFBF57] via-[#C8A232] to-[#955904] pointer-events-none shadow-[0_0_15px_rgba(200,162,50,0.8)] z-20"
              style={{ [isRtl ? "right" : "left"]: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-[#DFBF57] via-[#C8A232] to-[#955904] text-white border-2 border-white flex items-center justify-center shadow-xl text-xs font-bold">
                ↔
              </div>
            </div>

            {/* Native Full-Area Range Input for effortless mouse & touch dragging */}
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

        </div>

      </div>
    </section>
  );
}
