"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Zap, Smile, Activity, Eye, Stethoscope } from "lucide-react";

export function SignatureTreatments() {
  const t = useTranslations("treatments");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const treatmentKeys = [
    { key: "implants", icon: ShieldCheck },
    { key: "veneers", icon: Smile },
    { key: "allon4", icon: Activity },
    { key: "aligners", icon: Sparkles },
    { key: "whitening", icon: Zap },
    { key: "rootCanal", icon: Eye },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. 6 Cards Staggered Cascade
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="treatments"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-[#8C6A12]" />
            <span className="text-xs font-bold text-[#8C6A12] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1128] mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6782] font-body leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* 6 Signature Treatments Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatmentKeys.map(({ key, icon: IconComponent }) => (
            <div
              key={key}
              className="group relative rounded-2xl bg-white border border-[#C8A232]/25 p-7 shadow-[0_8px_30px_rgba(10,17,40,0.04)] hover:shadow-[0_16px_45px_rgba(200,162,50,0.18)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Badge Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/30 flex items-center justify-center text-[#8C6A12] shadow-sm group-hover:scale-110 group-hover:bg-[#8C6A12] group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-[#FAF8F5] text-[#8C6A12] border border-[#C8A232]/30">
                  {t(`items.${key}.tag`)}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display text-[#0A1128] mb-3 group-hover:text-[#8C6A12] transition-colors">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm text-[#5B6782] leading-relaxed mb-6 font-body">
                  {t(`items.${key}.desc`)}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F4EE] flex items-center justify-between">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6A12] group-hover:text-[#0A1128] transition-colors"
                >
                  <span>{t("bookBtn")}</span>
                  <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments CTA */}
        <div className="mt-12 text-center">
          <a
            href="#treatments"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#C8A232] bg-white text-[#0A1128] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:bg-[#FAF8F5] transition-all"
          >
            <span>{t("viewAll")}</span>
            <ArrowIcon className="w-4 h-4 text-[#8C6A12]" />
          </a>
        </div>
      </div>
    </section>
  );
}
