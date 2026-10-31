"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";

export function PatientReviews() {
  const t = useTranslations("reviews");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const reviews = [0, 1, 2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge & Subtitle entrance
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

      // 3. Reviews Cards Stagger
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
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
      id="reviews"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/20 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-xs mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#012968] mb-4"
          >
            <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
          </h2>

          <p className="text-base sm:text-lg text-[#5B6782] font-body leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Reviews 3-Card Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-white border border-[#C8A232]/25 shadow-[0_8px_30px_rgba(10,17,40,0.04)] hover:shadow-[0_16px_45px_rgba(200,162,50,0.16)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-5 text-[#C8A232]">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#C8A232]" />
                  ))}
                  <span className="text-xs font-bold text-[#955904] ml-2 font-mono">
                    {t(`list.${idx}.rating`)}
                  </span>
                </div>

                <p className="text-sm text-[#3D4866] leading-relaxed mb-6 font-body italic">
                  &ldquo;{t(`list.${idx}.text`)}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F4EE] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#012968] font-display">
                    {t(`list.${idx}.author`)}
                  </h3>
                  <span className="text-[11px] text-[#5B6782]">
                    {t(`list.${idx}.role`)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#955904] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>موثق</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
