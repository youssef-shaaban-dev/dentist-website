"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { RoyalSmileShowcase } from "./RoyalSmileShowcase";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  HeartHandshake,
} from "lucide-react";

export function WelcomeSection() {
  const t = useTranslations("welcome");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const desc1Ref = useRef<HTMLParagraphElement>(null);
  const desc2Ref = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const toothColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge entrance
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: badgeRef.current,
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

      // 3. Staggered entrance for descriptions
      if (desc1Ref.current && desc2Ref.current) {
        gsap.fromTo(
          [desc1Ref.current, desc2Ref.current],
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: desc1Ref.current,
              start: "top 86%",
              once: true,
            },
          }
        );
      }

      // 4. Staggered entrance for 3 Clinical Pillars
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 25, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 5. Royal Smile Showcase Entrance
      if (toothColRef.current) {
        gsap.fromTo(
          toothColRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: toothColRef.current,
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
      id="welcome"
      className="relative pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-t-2 border-[#C8A232]/40 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Split Section Background: Left is Royal Blue | Right is Warm Gold */}
      <SplitSectionBackground />

      {/* 2. SECTION CONTENT: Unified Standard Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* RIGHT COLUMN (Warm Gold / Parchment Side): Balanced 6 Cols on desktop */}
          {/* Safe buffer: pl-8 xl:pl-10 protects from center wave, pr-32 xl:pr-40 pushes away from hieroglyphic pillar */}
          <div
            className={`lg:col-span-6 flex flex-col ${
              isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
            } pl-0 lg:pl-8 xl:pl-10 pr-0 lg:pr-32 xl:pr-40`}
          >
            {/* Category Kicker Badge */}
            <div ref={badgeRef} className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/80 shadow-xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {isRtl ? "رؤية العيادة • دقة طبية ومعايير عالمية" : "CLINICAL VISION & MICRON ACCURACY"}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Philosophy Headline — Two-Tone Color Scheme */}
            <h2
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-5"
            >
              <span className="block text-[#0F266A]">
                {isRtl ? "حيث تلتقي العراقة الطبية الأصيلة" : "Where Clinical Precision"}
              </span>
              <span className="block text-[#9A5F13] mt-1">
                {isRtl ? "بأحدث علوم طب الأسنان العالمية" : "Meets Modern Dentistry"}
              </span>
            </h2>

            {/* Clinical Philosophy Paragraphs */}
            <p
              ref={desc1Ref}
              className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-4 font-body"
            >
              <SplitTextScrub text={t("desc1")} wordClassName="split-desc1-word" />
            </p>

            <p
              ref={desc2Ref}
              className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-8 font-body"
            >
              <SplitTextScrub text={t("desc2")} wordClassName="split-desc2-word" />
            </p>

            {/* 3 Clinical Excellence Pillars — Directly from the Brochure Approach */}
            <div
              ref={pillarsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 xl:gap-3 pt-6 border-t border-[#C8A232]/35"
            >
              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center transition-transform group-hover:scale-110">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0F266A] font-display">
                  {isRtl ? "رعاية سريرية معتمدة" : "Certified Clinical Care"}
                </h3>
                <p className="text-xs text-[#4A5E7B] font-body leading-relaxed">
                  {isRtl
                    ? "معايير علاجية دقيقة بإشراف استشاريين معتمدين دولياً."
                    : "Strict clinical standards guided by certified senior consultants."}
                </p>
              </div>

              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0F266A] font-display">
                  {isRtl ? "دقة رقمية ميكرونية" : "Micron 3D Precision"}
                </h3>
                <p className="text-xs text-[#4A5E7B] font-body leading-relaxed">
                  {isRtl
                    ? "ماسحات ضوئية ثلاثية الأبعاد بدقة 0.01 مم بدون قوالب معجون."
                    : "0.01mm 3D optical scanning without traditional impression trays."}
                </p>
              </div>

              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center transition-transform group-hover:scale-110">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0F266A] font-display">
                  {isRtl ? "راحة وهدوء سريري" : "Gentle Comfortable Care"}
                </h3>
                <p className="text-xs text-[#4A5E7B] font-body leading-relaxed">
                  {isRtl
                    ? "تخدير محوسب ذكي بدون ألم وأجنحة خاصة معزولة تماماً."
                    : "Painless computerized anesthesia in serene acoustic private suites."}
                </p>
              </div>
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): Balanced 6 Cols on desktop */}
          {/* Centered comfortably inside the Royal Blue half with max-w-[390px], keeping >80px clearance to the ribbon */}
          <div
            ref={toothColRef}
            className={`lg:col-span-6 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              <RoyalSmileShowcase />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
