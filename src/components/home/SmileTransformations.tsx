"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { PatientVideoCard } from "@/components/ui/PatientVideoCard";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  Video,
  Sliders,
  Play,
} from "lucide-react";

export function SmileTransformations() {
  const t = useTranslations("transformations");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // View mode: 'slider' (interactive before & after) or 'videos' (patient video testimonials)
  const [viewMode, setViewMode] = useState<"slider" | "videos">("slider");
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

  // Real Clinical Cases from Doctor
  const cases = [
    {
      id: "implants",
      tag: isRtl ? "زراعة كامل الفك All-on-6" : "All-on-6 Full Arch",
      title: isRtl
        ? "زراعة القوس الكامل All-on-6 وتثبيت جسر زركونيا دائم"
        : "Full Arch All-on-6 Rehabilitation with Prettau Zirconia",
      beforeImage: "/cases/case-1-before.jpg",
      afterImage: "/cases/case-1-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • تسوس حاد وفقدان أسنان" : "Before: Severe Decay & Missing Teeth",
      afterLabel: isRtl ? "بعد العلاج • فك متكامل وأسنان نظيفة" : "After: Fully Restored Arch",
      specs: [
        isRtl ? "زركونيا Prettau السويسرية فائقة الصلابة" : "Genuine Swiss Prettau Zirconia",
        isRtl ? "تحميل فوري وتثبيت خلال ٤٨ ساعة" : "48-Hour Immediate Loading",
        isRtl ? "ضمان مدى الحياة ومتابعة دورية" : "Lifetime Guarantee & Follow-up",
      ],
    },
    {
      id: "veneers",
      tag: isRtl ? "فينير وعدسات E.max" : "E.max Veneers",
      title: isRtl
        ? "ترميم كامل الابتسامة بعدسات إيماكس (E.max)"
        : "Smile Restoration with Handcrafted E.max Veneers",
      beforeImage: "/cases/case-2-before.jpg",
      afterImage: "/cases/case-2-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • تآكل وكسور بالقواطع" : "Before: Broken & Worn Incisors",
      afterLabel: isRtl ? "بعد العلاج • ابتسامة ملكية ناصعة" : "After: Pristine Royal Smile",
      specs: [
        isRtl ? "خامات E.max الأصلية فائقة النقاء" : "Genuine Swiss E.max Materials",
        isRtl ? "دقة ميكرونية مطابقة لملامح الوجه" : "Micron-level Precision Fit",
        isRtl ? "جلسات سريعة ونتائج دائمة" : "Fast Turnaround with Lasting Results",
      ],
    },
    {
      id: "gingival",
      tag: isRtl ? "تجميل اللثة والفينير" : "Gingival Aesthetics & Veneers",
      title: isRtl
        ? "تجميل الابتسامة اللثوية وإعادة هندسة حواف الأسنان"
        : "Gingival Smile Recontouring & E.max Veneers",
      beforeImage: "/cases/case-7-before.jpg",
      afterImage: "/cases/case-7-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • عدم تناسق لثوي وتصبغات" : "Before: Gummy & Uneven Alignment",
      afterLabel: isRtl ? "بعد العلاج • تناسق لثوي وبياض كريستالي" : "After: Symmetrical Crystal Smile",
      specs: [
        isRtl ? "إعادة هندسة الحواف اللثوية بالليزر بدون ألم" : "Painless Laser Gingival Contouring",
        isRtl ? "عدسات فينير ميكرونية بدون برد جائر" : "Minimal-prep Micron Ceramic Veneers",
        isRtl ? "بياض ناصع وشفافية طبيعية متناسقة" : "Natural Luster & Crystal Translucency",
      ],
    },
    {
      id: "hollywood",
      tag: isRtl ? "ابتسامة هوليوود الملكية" : "Hollywood Smile Redesign",
      title: isRtl
        ? "تصميم ابتسامة هوليوود الرقمية المتكاملة"
        : "Complete 3D Digital Hollywood Smile Makeover",
      beforeImage: "/cases/case-8-before.jpg",
      afterImage: "/cases/case-8-after.jpg",
      beforeLabel: isRtl ? "قبل العلاج • تفاوت في الاصطفاف واصفرار" : "Before: Misaligned & Stained",
      afterLabel: isRtl ? "بعد العلاج • ابتسامة بيضاء مشرقة ومتوازنة" : "After: Radiant Symmetrical Smile",
      specs: [
        isRtl ? "تصميم رقمي ثلاثي الأبعاد DSD" : "3D Digital Smile Design (DSD)",
        isRtl ? "بياض ملكي مشرق درجة BL1" : "Diamond-bright BL1 Royal Shade",
        isRtl ? "تناغم تام مع الشفاه وحركة الابتسامة" : "Perfect Harmony with Facial Features",
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
      className="relative py-20 sm:py-28 px-0 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background (Continuity waveVariant A) */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      {/* 2. Top Header & View Mode Switcher */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mb-10 pb-6 border-b border-[#C8A232]/25 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-7xl mx-auto">
          <div>
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/85 backdrop-blur-md shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                  {t("badge")}
                </span>
              </div>
              <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
            </div>

            {/* Headline */}
            <h2
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
            >
              <span>{t("headline")}</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FAF1DD]/90 font-body mt-2 max-w-2xl leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
              {t("websiteCopy")}
            </p>
          </div>

          {/* Luxury Switcher: Before/After Slider vs Real Patient Videos */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/95 border-2 border-[#C8A232]/60 shadow-lg backdrop-blur-md self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-display transition-all duration-300 cursor-pointer ${
                viewMode === "slider"
                  ? "bg-gradient-to-r from-[#012052] to-[#0A2E6E] text-white shadow-md ring-1 ring-[#C8A232]"
                  : "text-[#0F266A] hover:text-[#9A5F13] hover:bg-[#FAF1DC]/50"
              }`}
            >
              <Sliders className="w-4 h-4 text-[#DFBF57]" />
              <span>{isRtl ? "مقارنة الحالات (قبل وبعد)" : "Before & After Slider"}</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("videos")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-display transition-all duration-300 cursor-pointer relative ${
                viewMode === "videos"
                  ? "bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white shadow-md"
                  : "text-[#0F266A] hover:text-[#9A5F13] hover:bg-[#FAF1DC]/50"
              }`}
            >
              <Video className="w-4 h-4 text-white" />
              <span>{isRtl ? "تجارب المرضى بالفيديو" : "Patient Video Stories"}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* VIEW 1: BEFORE & AFTER INTERACTIVE SLIDER                */}
      {/* Perfectly centered in 50% left & 50% right halves        */}
      {/* ======================================================== */}
      {viewMode === "slider" && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 min-h-0">
          
          {/* CONTENT COLUMN (Warm Gold / Parchment Side): Order 1 on Desktop */}
          <div
            ref={rightRef}
            className={`w-full flex items-center justify-center order-2 lg:order-1 p-4 sm:p-6 lg:p-0 ${
              isRtl ? "lg:pe-16 xl:pe-24 lg:ps-12 xl:ps-20" : "lg:ps-16 xl:ps-24 lg:pe-12 xl:pe-20"
            }`}
          >
            <div className="w-full max-w-xl mx-auto flex flex-col rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none p-4 sm:p-6 lg:p-0">
              {/* Case Selection Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
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

              {/* Case Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F266A] mb-4">
                {currentCase.title}
              </h3>

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

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/${locale}/treatments#smile-gallery`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
                >
                  <span>{t("cta")}</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-white" />
                </Link>

                <Link
                  href={`/${locale}/clinics#booking`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
                >
                  <CalendarCheck className="w-4 h-4 text-[#9A5F13]" />
                  <span>{isRtl ? "احجز استشارة" : "Book a Consultation"}</span>
                </Link>

                {/* Quick Video Trigger Link */}
                <button
                  type="button"
                  onClick={() => setViewMode("videos")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9A5F13] hover:text-[#012052] transition-colors py-2 px-3 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRtl ? "شاهد تجارب المرضى بالفيديو ➔" : "Watch Patient Video Stories ➔"}</span>
                </button>
              </div>

            </div>
          </div>

          {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Desktop */}
          <div
            ref={leftRef}
            className="w-full flex items-center justify-center order-1 lg:order-2 p-4 sm:p-6 lg:p-0 px-4 sm:px-8 lg:px-12 xl:px-20"
          >
            <div className="w-full max-w-[420px] xl:max-w-[460px] mx-auto">
              
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
                        sizes="(max-width: 1024px) 100vw, 440px"
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
                        sizes="(max-width: 1024px) 100vw, 440px"
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
        )}

        {/* ======================================================== */}
        {/* VIEW 2: REAL PATIENT VIDEO STORIES (1.mp4 & 2.mp4)       */}
        {/* ======================================================== */}
        {viewMode === "videos" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Video 1 */}
              <PatientVideoCard
                src="/1.mp4"
                title={
                  isRtl
                    ? "تجربة إعادة بناء كامل الفك والزراعة الرقمية"
                    : "Full Arch Dental Rehabilitation Experience"
                }
                description={
                  isRtl
                    ? "مريضنا يروي قصة استعادة ابتسامته ووظيفة المضغ براحة تامة بعد سنوات من تآكل الأسنان وصعوبة الأكل."
                    : "Our patient shares his personal journey of restoring complete chewing function and confident smile after severe tooth wear."
                }
                patientTag={isRtl ? "مريض حقيقي • زراعة الفكين" : "Verified Patient • Full Arch"}
                treatmentType="All-on-6 Rehabilitation"
                highlights={[
                  isRtl ? "استعادة القدرة على تناول الطعام بدون أي ألم" : "Restored full pain-free chewing ability",
                  isRtl ? "تركيبة زركونيا سويسرية بمظهر طبيعي تماماً" : "100% natural looking Swiss Prettau zirconia",
                  isRtl ? "متابعة طبية مستمرة ورعاية فائقة" : "Attentive post-procedure clinical care",
                ]}
              />

              {/* Video 2 */}
              <PatientVideoCard
                src="/2.mp4"
                title={
                  locale === "ar"
                    ? "تجربة ابتسامة هوليوود وتصميم الابتسامة الملكية"
                    : locale === "fr"
                    ? "Expérience Hollywood Smile & Facettes E.max Royales"
                    : locale === "ru"
                    ? "Голливудская улыбка и королевские виниры E.max"
                    : "Royal Hollywood Smile & E.max Veneers Experience"
                }
                description={
                  locale === "ar"
                    ? "قصة نجاح مريضنا في الحصول على ابتسامة متناسقة وطبيعية من خلال عدسات الفينير الرقمية بمعملنا الحصري."
                    : locale === "fr"
                    ? "Témoignage patient célébrant un sourire éclatant et naturel grâce aux facettes numériques de notre laboratoire exclusif."
                    : locale === "ru"
                    ? "Реальная история пациента: гармоничная и естественная улыбка с цифровыми винирами из нашей собственной лаборатории."
                    : "An authentic patient testimonial celebrating a symmetrical, radiant Hollywood smile crafted with digital precision in our in-house lab."
                }
                patientTag={
                  locale === "ar"
                    ? "مريضة حقيقية • ابتسامة هوليوود"
                    : locale === "fr"
                    ? "Patiente Réelle • Hollywood Smile"
                    : locale === "ru"
                    ? "Реальный пациент • Голливудская улыбка"
                    : "Verified Patient • Hollywood Smile"
                }
                treatmentType="E.max Veneers"
                highlights={[
                  locale === "ar"
                    ? "عدسات ايماكس مصممة خصيصاً لتناسب ملامح الوجه"
                    : locale === "fr"
                    ? "Facettes E.max sur mesure adaptées aux traits du visage"
                    : locale === "ru"
                    ? "Виниры E.max, созданные с учетом черт лица"
                    : "Custom E.max veneers matched to facial aesthetics",
                  locale === "ar"
                    ? "جلسات علاج مريحة دون أي تحسس أو ألم"
                    : locale === "fr"
                    ? "Séances confortables sans aucune sensibilité ni douleur"
                    : locale === "ru"
                    ? "Комфортные приемы без чувствительности и боли"
                    : "Zero sensitivity with painless appointments",
                  locale === "ar"
                    ? "نتائج فاقت التوقعات وثقة لا حدود لها"
                    : locale === "fr"
                    ? "Des résultats au-delà des attentes et une confiance retrouvée"
                    : locale === "ru"
                    ? "Результат превзошел ожидания и подарил уверенность"
                    : "Exceeded expectations with unmatched confidence",
                ]}
              />
            </div>

            {/* Bottom Callout Bar */}
            <div className="p-6 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/50 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DFBF57] to-[#9A5F13] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-[#0F266A]">
                    {isRtl ? "هل ترغب في الحصول على استشارة خاصة بحالتك؟" : "Ready for your personalized clinical consultation?"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2A3B56] font-body">
                    {isRtl ? "استشاريونا جاهزون لتشخيص حالتك ووضع خطة علاجية مخصصة رقمياً." : "Our senior consultants are ready to design your 3D digital treatment plan."}
                  </p>
                </div>
              </div>

              <Link
                href={`/${locale}/clinics#booking`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all shrink-0"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>{isRtl ? "احجز كشفك الآن" : "Book Your Visit Now"}</span>
              </Link>
            </div>
          </div>
        )}
    </section>
  );
}
