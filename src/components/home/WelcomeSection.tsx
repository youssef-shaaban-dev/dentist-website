"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { RoyalSmileShowcase } from "./RoyalSmileShowcase";
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
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      // 4. Staggered entrance for 3 Clinical Pillars
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      className="relative pt-10 sm:pt-16 lg:pt-28 pb-10 sm:pb-16 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Split Section Background: Left is Royal Blue | Right is Warm Gold */}
      <SplitSectionBackground />

      {/* 2. SECTION CONTENT: Unified Standard Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* RIGHT COLUMN (Warm Gold / Parchment Side): Balanced 6 Cols on desktop, luxury card on mobile */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
            } p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 lg:pl-10 xl:pl-14 pr-4 sm:pr-6 lg:pr-32 xl:pr-40`}
          >
            {/* Category Kicker Badge */}
            <div ref={badgeRef} className="flex items-center gap-1 sm:gap-2.5 mb-2 sm:mb-4">
              <span className="h-[1px] w-3 sm:w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#9A5F13]" />
                <span className="text-[8px] sm:text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono truncate">
                  {isRtl ? "رؤية العيادة • دقة طبية ومعايير عالمية" : "CLINICAL VISION & MICRON ACCURACY"}
                </span>
              </div>
              <span className="h-[1px] w-3 sm:w-6 bg-[#C8A232]/70" />
            </div>

            {/* Philosophy Headline — Two-Tone Color Scheme */}
            <h2
              ref={titleRef}
              className="text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-bold font-display leading-[1.25] mb-2 sm:mb-4 lg:mb-5 tracking-tight"
            >
              <span className="block text-[#0F266A]">
                {isRtl ? "حيث تلتقي العراقة الطبية الأصيلة" : "Where Clinical Precision"}
              </span>
              <span className="block text-[#9A5F13] mt-0.5 sm:mt-1">
                {isRtl ? "بأحدث علوم طب الأسنان العالمية" : "Meets Modern Dentistry"}
              </span>
            </h2>

            {/* Clinical Philosophy Paragraphs */}
            <p
              ref={desc1Ref}
              className="text-xs sm:text-sm md:text-base lg:text-[17px] text-[#2A3B56] leading-relaxed mb-2 sm:mb-4 font-body line-clamp-3 sm:line-clamp-none"
            >
              {t("desc1")}
            </p>

            <p
              ref={desc2Ref}
              className="text-xs sm:text-sm md:text-base lg:text-[17px] text-[#2A3B56] leading-relaxed mb-3 sm:mb-6 font-body line-clamp-3 sm:line-clamp-none"
            >
              {t("desc2")}
            </p>

            {/* 3 Clinical Excellence Pillars — Stacked Vertically as Requested */}
            <div
              ref={pillarsRef}
              className="flex flex-col gap-2 sm:gap-2.5 pt-2.5 sm:pt-5 border-t border-[#C8A232]/35"
            >
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/95 border border-[#C8A232]/35 shadow-xs flex items-center gap-2.5 group">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display truncate">
                    {isRtl ? "رعاية سريرية معتمدة" : "Certified Clinical Care"}
                  </h3>
                  <p className="text-[9px] sm:text-[11px] text-[#4A5E7B] font-body leading-tight truncate">
                    {isRtl
                      ? "معايير علاجية دقيقة بإشراف استشاريين معتمدين دولياً."
                      : "Strict clinical standards guided by certified senior consultants."}
                  </p>
                </div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/95 border border-[#C8A232]/35 shadow-xs flex items-center gap-2.5 group">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0">
                  <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display truncate">
                    {isRtl ? "دقة رقمية ميكرونية" : "Micron 3D Precision"}
                  </h3>
                  <p className="text-[9px] sm:text-[11px] text-[#4A5E7B] font-body leading-tight truncate">
                    {isRtl
                      ? "ماسحات ضوئية ثلاثية الأبعاد بدقة 0.01 مم بدون قوالب معجون."
                      : "0.01mm 3D optical scanning without traditional impression trays."}
                  </p>
                </div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/95 border border-[#C8A232]/35 shadow-xs flex items-center gap-2.5 group">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display truncate">
                    {isRtl ? "راحة وهدوء سريري" : "Gentle Comfortable Care"}
                  </h3>
                  <p className="text-[9px] sm:text-[11px] text-[#4A5E7B] font-body leading-tight truncate">
                    {isRtl
                      ? "تخدير محوسب ذكي بدون ألم وأجنحة خاصة معزولة تماماً."
                      : "Painless computerized anesthesia in serene acoustic private suites."}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): Sits gracefully in left blue field */}
          <div
            ref={toothColRef}
            className={`lg:col-span-6 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full pt-2 pb-4 lg:py-0 lg:pr-8 xl:pr-10`}
          >
            <div className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px] mx-auto">
              <RoyalSmileShowcase />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
