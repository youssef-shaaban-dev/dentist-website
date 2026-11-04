"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Crown,
  Scan,
  ShieldCheck,
  SmilePlus,
  FileCheck,
  Sparkles,
  CheckCircle2,
  Shield,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export function MagnificentDifference() {
  const t = useTranslations("difference");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const [activePillarIdx, setActivePillarIdx] = useState<number>(0);

  // 4 Clinical Excellence Pillars directly aligned with the client's "OUR APPROACH" design
  const pillars = [
    {
      id: "01",
      num: "01",
      badgeAr: "الدقة الرقمية",
      badgeEn: "Digital Precision",
      title: isRtl ? "الدقة الرقمية" : "Digital Precision",
      desc: isRtl
        ? "تقنيات رقمية متطورة لتشخيص وتخطيط علاجي فائق الدقة."
        : "Advanced digital technology for accurate diagnosis and planning.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      icon: Scan,
      specs: isRtl
        ? [
            "مسح مقطعي ثلاثي الأبعاد 3D CBCT لتشخيص جراحي متناهي الدقة",
            "محاكاة رقمية مسبقة للابتسامة قبل بدء أي إجراء طبي",
            "دقة ميكرونية 0.01 مم تضمن أعلى نسب النجاح والتطابق",
          ]
        : [
            "3D CBCT volumetric scans for micron surgical diagnostics",
            "Virtual smile simulation before starting any procedure",
            "0.01mm precision guaranteeing optimal clinical outcomes",
          ],
      stamp: isRtl
        ? "تكنولوجيا متطورة • تشخيص دقيق وموثق"
        : "Advanced Digital Technology • Accurate Diagnosis",
      metric: "DIGITAL PRECISION",
    },
    {
      id: "02",
      num: "02",
      badgeAr: "خطة علاجية مخصصة",
      badgeEn: "Personalized Treatment",
      title: isRtl ? "خطة علاجية مخصصة" : "Personalized Treatment",
      desc: isRtl
        ? "حلول علاجية مصممة خصيصاً لتلبي احتياجات ابتسامتك الفردية."
        : "Tailored solutions designed for your unique needs.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      icon: Crown,
      specs: isRtl
        ? [
            "بروتوكولات علاجية فردية تناسب التركيب التشريحي لكل مريض",
            "استشارات متكاملة مع نخبة من الاستشاريين المتخصصين",
            "متابعة دورية مستمرة لضمان ديمومة النتائج واستقرارها",
          ]
        : [
            "Individualized protocols tailored to facial & dental anatomy",
            "Comprehensive consultations with dedicated specialists",
            "Continuous follow-up ensuring lasting stability and health",
          ],
      stamp: isRtl
        ? "حلول مخصصة • رعاية شخصية لكل مريض"
        : "Tailored Solutions • Unique Patient Care",
      metric: "TAILORED CARE",
    },
    {
      id: "03",
      num: "03",
      badgeAr: "جمالية طبيعية",
      badgeEn: "Natural Aesthetics",
      title: isRtl ? "جمالية طبيعية متناسقة" : "Natural Aesthetics",
      desc: isRtl
        ? "نتائج وظيفية وجمالية فائقة تمنحك مظهراً وشعوراً طبيعياً بالكامل."
        : "Beautiful, functional results that look and feel natural.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
      icon: SmilePlus,
      specs: isRtl
        ? [
            "عدسات سويسرية فائقة الشفافية تحاكي بياض الأسنان الطبيعي",
            "تطابق مثالي مع النسب الذهبية لملامح الوجه والابتسامة",
            "استعادة وظائف المضغ والنطق الكاملة بأعلى درجات الراحة",
          ]
        : [
            "Ultra-thin Swiss ceramics mimicking natural enamel translucency",
            "Perfect harmony with facial golden ratios and smile curves",
            "Complete restoration of mastication and speech comfort",
          ],
      stamp: isRtl
        ? "جمال طبيعي • نتائج وظيفية فائقة"
        : "Natural Aesthetics • Lasting Functional Results",
      metric: "NATURAL BEAUTY",
    },
    {
      id: "04",
      num: "04",
      badgeAr: "تجربة مريحة",
      badgeEn: "Comfortable Experience",
      title: isRtl ? "تجربة علاجية مريحة" : "Comfortable Experience",
      desc: isRtl
        ? "بيئة سريرية هادئة ومفعمة بالاهتمام والرعاية في كل زيارة."
        : "A calm and caring environment at every visit.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      icon: ShieldCheck,
      specs: isRtl
        ? [
            "تخدير إلكتروني محوسب بدون أي ألم لراحة المريض التامة",
            "أجنحة خاصة معزولة توفر أقصى درجات الخصوصية والهدوء",
            "فريق تمريض ورعاية فندقية يرافقك طوال مراحل العلاج",
          ]
        : [
            "Computerized painless local anesthesia for zero anxiety",
            "Private acoustic suites ensuring serenity and privacy",
            "Attentive clinical team ensuring a gentle, caring journey",
          ],
      stamp: isRtl
        ? "عناية لطيفة • بيئة هادئة ومريحة"
        : "Gentle Care • Calm & Caring Environment",
      metric: "GENTLE CARE",
    },
  ];

  const currentPillar = pillars[activePillarIdx] || pillars[0];
  const CurrentIcon = currentPillar.icon;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Content Entrance
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

      // 2. Showcase Visual Entrance
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
      id="difference"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Split Section Background: Left is Royal Blue | Right is Warm Gold */}
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
            {/* Category Kicker Badge — From the Brochure: OUR APPROACH */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Crown className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {isRtl ? "نهجنا الطبي • دقة وإتقان دائم" : "OUR APPROACH • WHERE PRECISION MEETS PERFECTION"}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline — Aligned with Brochure */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-3">
              <span className="block text-[#0F266A]">
                {isRtl ? "معايير دقيقة لطب وتجميل الأسنان" : "Where Precision Meets Perfection"}
              </span>
              <span className="block text-[#9A5F13] text-xl sm:text-2xl lg:text-3xl mt-1">
                {isRtl ? "تكنولوجيا متطورة • عناية لطيفة • نتائج دائمة" : "Advanced Technology • Gentle Care • Lasting Results"}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {isRtl
                ? "نلتزم بتقديم حلول علاجية وتجميلية متكاملة مصممة خصيصاً لكل مريض، تجمع بين أحدث ماسحات الـ 3D والمواد السويسرية المعتمدة."
                : "Advanced digital technology, personalized treatment plans, and comfortable patient experience designed for your lasting oral health."}
            </p>

            {/* 6 Pillars in an Elegant 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isSelected = activePillarIdx === idx;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarIdx(idx)}
                    className={`group text-start p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3 relative ${
                      isSelected
                        ? "bg-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/25 scale-101"
                        : "bg-white/85 border-[#C8A232]/35 hover:border-[#C8A232] hover:bg-white shadow-xs"
                    }`}
                  >
                    {/* Gold Circular Icon Seal */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                        isSelected
                          ? "bg-[#012052] text-[#DFBF57] shadow-sm"
                          : "bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h3
                          className={`text-xs sm:text-sm font-bold font-display truncate ${
                            isSelected ? "text-[#0F266A]" : "text-[#2A3B56] group-hover:text-[#0F266A]"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono font-bold text-[#9A5F13] shrink-0">
                          {pillar.num}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#5B6782] line-clamp-1 font-body">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Active Golden Notch */}
                    {isSelected && (
                      <span className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "-left-1" : "-right-1"} w-2 h-2 rounded-full bg-[#9A5F13] shadow-xs`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Specs & Official Stamp */}
            <div className="p-4 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6">
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#C8A232]/25">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF1DC] text-[#9A5F13] flex items-center justify-center">
                    <CurrentIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#0F266A]">
                    {currentPillar.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[10px] font-mono font-bold text-[#9A5F13]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A5F13] animate-ping" />
                  <span>{currentPillar.metric}</span>
                </span>
              </div>

              <div className="space-y-2 mb-3">
                {currentPillar.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#0F266A] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5F13] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-[#C8A232]/20 flex items-center gap-2 text-[11px] font-mono font-bold text-[#9A5F13]">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>{currentPillar.stamp}</span>
              </div>
            </div>

            {/* Direct Booking Jump CTA */}
            <div>
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <span>{isRtl ? "احجز استشارتك الطبية الآن" : "Book Clinical Consultation"}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
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
              
              {/* Clinical Pillar Showcase Card */}
              <div className="group relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3.5" />

                {/* High-Resolution Viewport */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-[#020B1D] border border-[#DFBF57]/30 shadow-inner">
                  <Image
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1D]/40 via-transparent to-[#DFBF57]/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-white bg-[#012052]/90 border border-white/20 px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {currentPillar.num} / 06
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-[#DFBF57]/50 text-[10px] sm:text-xs font-mono font-bold text-[#DFBF57] shadow-md backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF57] animate-ping" />
                      <span>{currentPillar.metric}</span>
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold block mb-1">
                      {isRtl ? currentPillar.badgeAr : currentPillar.badgeEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white leading-snug drop-shadow-sm">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                {/* Quality Standard Footer */}
                <div className="mt-3.5 pt-3 border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>CERTIFIED MEDICAL EXCELLENCE</span>
                  </div>
                  <span className="text-[11px] text-white/70">
                    {isRtl ? "معايير دقيقة معتمدة" : "European Clinical Standard"}
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
