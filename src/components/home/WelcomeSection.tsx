"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { RoyalSmileShowcase } from "@/components/home/RoyalSmileShowcase";
import {
  Sparkles,
  Cpu,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

// Reusable Helper Component for TextSplit masked line/word scrub reveal
function SplitTextScrub({
  text,
  className = "",
  wordClassName = "",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top pb-1 mr-[0.25em] rtl:mr-0 rtl:ml-[0.25em]"
        >
          <span
            className={`inline-block will-change-transform ${wordClassName}`}
            style={{ transform: "translateY(115%)", opacity: 0 }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Royal Badge Entrance
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: badgeRef.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. TextSplit Scrub for Main Headline (Line-by-line masked emergence)
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

      // 3. TextSplit Scrub for Philosophy Paragraphs
      const desc1Words = desc1Ref.current?.querySelectorAll(".split-desc1-word");
      if (desc1Words && desc1Words.length > 0) {
        gsap.to(desc1Words, {
          y: "0%",
          opacity: 1,
          stagger: 0.015,
          ease: "power1.out",
          scrollTrigger: {
            trigger: desc1Ref.current,
            start: "top 85%",
            end: "bottom 58%",
            scrub: 0.8,
          },
        });
      }

      const desc2Words = desc2Ref.current?.querySelectorAll(".split-desc2-word");
      if (desc2Words && desc2Words.length > 0) {
        gsap.to(desc2Words, {
          y: "0%",
          opacity: 1,
          stagger: 0.015,
          ease: "power1.out",
          scrollTrigger: {
            trigger: desc2Ref.current,
            start: "top 85%",
            end: "bottom 58%",
            scrub: 0.8,
          },
        });
      }

      // 4. Pillars Cards Stagger
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

      // 5. Royal Smile Showcase Entrance
      if (toothColRef.current) {
        gsap.fromTo(
          toothColRef.current,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: toothColRef.current,
              start: "top 85%",
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
      className="relative pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] overflow-hidden z-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A232]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#022256]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clinic Philosophy & The Royal Smile Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column (7 Cols on desktop): Story, Philosophy with TextSplit & 3 Pillars */}
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

            {/* Philosophy Headline with Line-by-Line Scrub Reveal */}
            <h2
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#012968] leading-[1.3] mb-6"
            >
              <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
            </h2>

            {/* Philosophy Paragraphs with TextSplit Scrub */}
            <p
              ref={desc1Ref}
              className="text-base sm:text-lg text-[#3D5A80] leading-relaxed mb-4 font-body"
            >
              <SplitTextScrub text={t("desc1")} wordClassName="split-desc1-word" />
            </p>

            <p
              ref={desc2Ref}
              className="text-base sm:text-lg text-[#3D5A80] leading-relaxed mb-8 font-body"
            >
              <SplitTextScrub text={t("desc2")} wordClassName="split-desc2-word" />
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

          {/* Visual Column (5 Cols on desktop): Royal Smile Showcase Glass Card */}
          <div
            ref={toothColRef}
            className="lg:col-span-5 relative flex justify-center order-1 lg:order-2"
          >
            <RoyalSmileShowcase />
          </div>

        </div>

      </div>
    </section>
  );
}
