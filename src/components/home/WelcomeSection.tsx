"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { HeroMorphTooth } from "@/components/hero/HeroMorphTooth";
import {
  Sparkles,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  ScanLine,
  Compass,
  Smile,
} from "lucide-react";

export function WelcomeSection() {
  const t = useTranslations("welcome");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const desc1Ref = useRef<HTMLParagraphElement>(null);
  const desc2Ref = useRef<HTMLParagraphElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const toothColRef = useRef<HTMLDivElement>(null);
  const journeyHeaderRef = useRef<HTMLDivElement>(null);
  const journeyCardsRef = useRef<HTMLDivElement>(null);

  const journeySteps = [
    {
      step: t("journey.0.step"),
      title: t("journey.0.title"),
      desc: t("journey.0.desc"),
      icon: ScanLine,
    },
    {
      step: t("journey.1.step"),
      title: t("journey.1.title"),
      desc: t("journey.1.desc"),
      icon: Compass,
    },
    {
      step: t("journey.2.step"),
      title: t("journey.2.title"),
      desc: t("journey.2.desc"),
      icon: Sparkles,
    },
    {
      step: t("journey.3.step"),
      title: t("journey.3.title"),
      desc: t("journey.3.desc"),
      icon: Smile,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Philosophy Content Stagger (Badge -> Title -> Descriptions)
      // Bidirectional toggleActions ensure animations trigger smoothly when scrolling down AND up
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });

      textTl
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          [desc1Ref.current, desc2Ref.current],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power2.out" },
          "-=0.6"
        );

      // 2. Pillars Cards Stagger (Elastic subtle pop)
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. 3D Tooth Sculpture Entrance & Smooth Continuous Parallax
      if (toothColRef.current) {
        gsap.fromTo(
          toothColRef.current,
          { opacity: 0, scale: 0.88, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: toothColRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Continuous smooth parallax drift while user scrolls through the section
        gsap.to(toothColRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 4. Patient Journey Header Entrance
      if (journeyHeaderRef.current) {
        gsap.fromTo(
          journeyHeaderRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: journeyHeaderRef.current,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 5. Patient Journey 4 Cards Cascade
      if (journeyCardsRef.current) {
        gsap.fromTo(
          journeyCardsRef.current.children,
          { opacity: 0, y: 45, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: journeyCardsRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
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
      id="welcome"
      className="relative pt-20 sm:pt-28 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] overflow-hidden z-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A232]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#022256]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Part 1: Clinic Philosophy & The 3D Dental Sculpture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Content Column (7 Cols on desktop): Story, Philosophy & 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col order-2 lg:order-1">
            {/* Royal Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm w-fit mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
              <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
                {t("badge")}
              </span>
            </div>

            {/* Philosophy Headline */}
            <h2
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#012968] leading-[1.25] mb-6"
            >
              {t("title")}
            </h2>

            {/* Philosophy Paragraphs */}
            <p
              ref={desc1Ref}
              className="text-base sm:text-lg text-[#3D5A80] leading-relaxed mb-4 font-body"
            >
              {t("desc1")}
            </p>

            <p
              ref={desc2Ref}
              className="text-base sm:text-lg text-[#3D5A80] leading-relaxed mb-8 font-body"
            >
              {t("desc2")}
            </p>

            {/* 3 Clinical Excellence Pillars */}
            <div
              ref={pillarsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#C8A232]/25"
            >
              <div className="p-4 rounded-xl bg-white border border-[#C8A232]/25 shadow-sm flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#955904] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#012968] font-display">{t("points.p1Title")}</h3>
                <p className="text-xs text-[#5B6782] font-body leading-relaxed">{t("points.p1Desc")}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C8A232]/25 shadow-sm flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#955904] flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#012968] font-display">{t("points.p2Title")}</h3>
                <p className="text-xs text-[#5B6782] font-body leading-relaxed">{t("points.p2Desc")}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C8A232]/25 shadow-sm flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#955904] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#012968] font-display">{t("points.p3Title")}</h3>
                <p className="text-xs text-[#5B6782] font-body leading-relaxed">{t("points.p3Desc")}</p>
              </div>
            </div>
          </div>

          {/* Visual Column (5 Cols on desktop): The 3D Morphing Dental Sculpture */}
          <div
            ref={toothColRef}
            className="lg:col-span-5 relative flex justify-center order-1 lg:order-2"
          >
            <HeroMorphTooth />
          </div>

        </div>

        {/* Part 2: The Royal Patient Journey (رحلة المريض الملكية) */}
        <div className="pt-16 border-t-2 border-[#C8A232]/30">
          {/* Header */}
          <div ref={journeyHeaderRef} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#955904]" />
              <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
                {t("journeyBadge")}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#012968] mb-3">
              {t("journeyTitle")}
            </h3>
            <p className="text-sm sm:text-base text-[#5B6782] font-body leading-relaxed">
              {t("journeySubtitle")}
            </p>
          </div>

          {/* 4 Progressive Journey Cards */}
          <div ref={journeyCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, idx) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white border border-[#C8A232]/30 shadow-[0_6px_25px_rgba(2,34,86,0.04)] hover:shadow-[0_12px_35px_rgba(200,162,50,0.18)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Top Step Number Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-bold font-mono text-[#955904] bg-[#F9EDD7] px-3 py-1 rounded-lg">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#022256] to-[#012968] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <StepIcon className="w-5 h-5 text-[#DFBF57]" />
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-display text-[#012968] mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5B6782] font-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Golden Line Accent */}
                  <div className="mt-6 pt-4 border-t border-[#C8A232]/20 flex items-center justify-between text-[11px] font-mono text-[#955904]">
                    <span>MAGNIFICENT CARE</span>
                    <span className="text-[#C8A232]">✦</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
