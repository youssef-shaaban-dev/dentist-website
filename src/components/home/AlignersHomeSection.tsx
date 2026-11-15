"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Layers,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  EyeOff,
  Unlock,
  Plane,
  Smile,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface JourneyStep {
  step: string;
  title: string;
  desc: string;
}

interface AlignerBenefit {
  title: string;
  caption: string;
}

export function AlignersHomeSection() {
  const t = useTranslations("alignersPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Real data from messages / PDF handoff
  const journeySteps: JourneyStep[] = (t.raw("journeySteps") as JourneyStep[]) || [];
  const benefits: AlignerBenefit[] = (t.raw("benefits") as AlignerBenefit[]) || [];

  const benefitIcons = [EyeOff, Unlock, Plane];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (showcaseRef.current) {
        gsap.fromTo(
          showcaseRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: showcaseRef.current,
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
      id="aligners-preview"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Signature Multi-Line 3D Ribbon Split Background (Variant B for distinct visual flow) */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/85 backdrop-blur-md shadow-md">
              <Layers className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                {isRtl ? "منظومة التقويم الشفاف • ماغنيفيسنت" : "THE MAGNIFICENT ALIGNERS"}
              </span>
            </div>
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-display leading-[1.28] mb-3 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            {t("headline")}
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] text-white/95 leading-relaxed max-w-2xl mx-auto font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] font-medium">
            {t("websiteCopy")}
          </p>
        </div>

        {/* 5-Step Treatment Journey Timeline (100% Real from PDF) */}
        {journeySteps.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#011438]/90 border border-[#DFBF57]/50 text-[#DFBF57] text-xs font-mono font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                <span>{t("journeyHeading")}</span>
              </div>
            </div>

            <div
              ref={stepsRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-5 rounded-2xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-sm hover:border-[#DFBF57] hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number Top Badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#DFBF57] text-[#DFBF57] flex items-center justify-center text-xs font-mono font-bold shadow-md group-hover:scale-110 transition-transform">
                        {step.step || `0${idx + 1}`}
                      </span>
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-[#DFBF57]/40 to-transparent mx-2" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold font-display text-[#0F266A] mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#2A3B56] font-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lifestyle Highlights & Patient Visual Showcase */}
        <div
          ref={showcaseRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-8 rounded-3xl bg-[#FCFAF5]/90 border-2 border-[#C8A232]/40 shadow-xl backdrop-blur-md"
        >
          {/* Patient Aligner Visual (Aspect 4:3 with Gold Frame) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-lg aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85"
                alt="The Magnificent Aligners Treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#011438]/85 backdrop-blur-md border border-[#DFBF57]/40 text-center">
                <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase block">
                  {isRtl ? "شفافية كريستالية ١٠٠٪ بدون أسلاك" : "100% CRYSTAL CLEAR & WIRELESS"}
                </span>
              </div>
            </div>
          </div>

          {/* Core Lifestyle Benefits & Booking CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C8A232]/50 text-[#955904] text-xs font-mono font-bold mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
                <span>{t("benefitsHeading")}</span>
              </div>

              {/* 3 Real Lifestyle Benefits from PDF */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {benefits.slice(0, 3).map((b, bIdx) => {
                  const BIcon = benefitIcons[bIdx % benefitIcons.length];
                  return (
                    <div
                      key={bIdx}
                      className="p-3.5 rounded-xl bg-white/95 border border-[#C8A232]/35 shadow-2xs flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FAF1DC] border border-[#C8A232]/40 flex items-center justify-center text-[#9A5F13] mb-2">
                        <BIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display mb-1">
                        {b.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#2A3B56] font-body leading-relaxed">
                        {b.caption}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/clinics?treatment=aligners#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>{t("bookCta")}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/aligners"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <span>{isRtl ? "اكتشف منظومة التقويم بالكامل" : "Explore Full Aligners System"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
