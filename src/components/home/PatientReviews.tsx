"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Star,
  MessageSquareQuote,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Award,
} from "lucide-react";

export function PatientReviews() {
  const t = useTranslations("reviews");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const reviews = [0, 1, 2];

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

      // 2. Medallion Entrance
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
      id="reviews"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t-2 border-[#C8A232]/40 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Split Section Background: Left is Royal Blue | Right is Warm Gold */}
      <SplitSectionBackground />

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* RIGHT COLUMN (Warm Gold / Parchment Side): 7 Cols on desktop */}
          {/* Safe buffer pl-16 xl:pl-24 guarantees zero ribbon collision */}
          <div
            ref={rightRef}
            className={`lg:col-span-7 flex flex-col ${
              isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
            } pl-0 lg:pl-16 xl:pl-24`}
          >
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/80 shadow-xs backdrop-blur-xs">
                <MessageSquareQuote className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {isRtl ? "تجارب المرضى والتقييمات الموثقة" : "PATIENT REVIEWS & VERIFIED EXPERIENCES"}
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
                {isRtl ? "ثقة ونتائج حقيقية يتحدث عنها مرضانا" : "Trusted by Thousands of Healthy Smiles"}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {t("subtitle")}
            </p>

            {/* 3 Review Cards */}
            <div className="space-y-3.5">
              {reviews.map((idx) => (
                <div
                  key={idx}
                  className="group p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm hover:shadow-md hover:border-[#C8A232] transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    {/* 5 Golden Stars */}
                    <div className="flex items-center gap-1 text-[#DFBF57]">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-[#DFBF57] text-[#DFBF57]" />
                      ))}
                      <span className="text-xs font-mono font-bold text-[#9A5F13] ml-1.5">
                        {t(`list.${idx}.rating`)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#9A5F13] font-semibold bg-[#FAF1DC] px-2.5 py-0.5 rounded-full border border-[#C8A232]/35">
                      <CheckCircle2 className="w-3 h-3 text-[#9A5F13]" />
                      <span>{isRtl ? "مراجعة موثقة" : "Verified Review"}</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#2A3B56] leading-relaxed mb-3 font-body italic">
                    &ldquo;{t(`list.${idx}.text`)}&rdquo;
                  </p>

                  {/* Author Line */}
                  <div className="pt-2 border-t border-[#C8A232]/20 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display">
                        {t(`list.${idx}.author`)}
                      </h3>
                      <span className="text-[11px] text-[#5B6782] font-body">
                        {t(`list.${idx}.role`)}
                      </span>
                    </div>

                    <Heart className="w-3.5 h-3.5 text-[#C8A232]/50 group-hover:text-[#9A5F13] transition-colors" />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): 5 Cols on desktop */}
          {/* Centered comfortably inside the Royal Blue zone with max-w-[420px], keeping 50-60px clearance to the ribbon */}
          <div
            ref={leftRef}
            className={`lg:col-span-5 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full`}
          >
            <div className="w-full max-w-[390px] xl:max-w-[420px] mx-auto">
              
              {/* Google 5.0 Star Rating Medallion Card */}
              <div className="group relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center overflow-hidden">
                
                {/* Gold Crest Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-6" />

                {/* Award Badge */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#DFBF57] via-[#C8A232] to-[#9A5F13] text-[#020B1D] flex items-center justify-center shadow-lg border-2 border-white/30 mb-4">
                  <Award className="w-8 h-8" />
                </div>

                {/* Score Number */}
                <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight mb-2">
                  5.0 <span className="text-xl sm:text-2xl text-[#DFBF57]">/ 5.0</span>
                </div>

                {/* 5 Big Gold Stars */}
                <div className="flex items-center justify-center gap-1.5 text-[#DFBF57] mb-3">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-5 h-5 fill-[#DFBF57] text-[#DFBF57]" />
                  ))}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm font-bold text-white/90 font-display mb-6">
                  {isRtl ? "التقييم العام على منصة Google لطب الأسنان" : "Google Dental Clinical Excellence"}
                </p>

                {/* 3 Verified Distinction Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-[#DFBF57]/30 text-start">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-lg font-bold font-mono text-[#DFBF57] block">99.8%</span>
                    <span className="text-[10px] text-white/75 font-body">
                      {isRtl ? "نسبة رضا المرضى" : "Satisfaction Rate"}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-lg font-bold font-mono text-[#DFBF57] block">15,000+</span>
                    <span className="text-[10px] text-white/75 font-body">
                      {isRtl ? "ابتسامة ناجحة" : "Treated Smiles"}
                    </span>
                  </div>
                </div>

                {/* Seal Footer */}
                <div className="mt-5 pt-3 border-t border-[#DFBF57]/20 flex items-center justify-center gap-2 text-xs font-mono text-[#DFBF57]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED PATIENT SATISFACTION</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
