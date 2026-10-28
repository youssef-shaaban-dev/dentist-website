"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Award, UserCheck, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

export function SpecialistsSection() {
  const t = useTranslations("doctors");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const doctors = [
    {
      name: t("list.0.name"),
      role: t("list.0.role"),
      credentials: t("list.0.credentials"),
      experience: t("list.0.experience"),
      initials: "HM",
    },
    {
      name: t("list.1.name"),
      role: t("list.1.role"),
      credentials: t("list.1.credentials"),
      experience: t("list.1.experience"),
      initials: "RM",
    },
    {
      name: t("list.2.name"),
      role: t("list.2.role"),
      credentials: t("list.2.credentials"),
      experience: t("list.2.experience"),
      initials: "KS",
    },
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

      // 2. Doctors Cards Staggered Pop
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 45, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.15,
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
      id="doctors"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Award className="w-3.5 h-3.5 text-[#8C6A12]" />
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

        {/* 3 Doctors Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-[#C8A232]/25 overflow-hidden shadow-[0_8px_30px_rgba(10,17,40,0.05)] hover:shadow-[0_16px_45px_rgba(200,162,50,0.18)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Doctor Portrait Placeholder / Royal Monogram */}
              <div className="relative h-64 bg-gradient-to-b from-[#FAF8F5] via-[#F7F4EE] to-[#EFEBE2] flex items-center justify-center border-b border-[#C8A232]/20">
                {/* Monogram Seal */}
                <div className="relative w-28 h-28 rounded-full border-2 border-[#C8A232] bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <span className="font-display text-2xl font-bold text-[#8C6A12]">
                    {doc.initials}
                  </span>
                  <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#0A1128] text-white text-[10px] font-bold font-mono">
                    VERIFIED
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-[#C8A232]/30 px-3 py-1 rounded-full text-[11px] font-bold text-[#8C6A12] shadow-sm flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>{doc.experience}</span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold font-display text-[#0A1128] mb-1.5 group-hover:text-[#8C6A12] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-bold text-[#8C6A12] mb-4 font-mono">
                    {doc.role}
                  </p>
                  <p className="text-xs text-[#5B6782] leading-relaxed mb-6 font-body">
                    {doc.credentials}
                  </p>
                </div>

                <a
                  href="#book"
                  className="w-full py-3 rounded-xl border border-[#C8A232]/40 bg-[#FAF8F5] hover:bg-[#8C6A12] hover:text-white text-[#0A1128] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#8C6A12] group-hover/btn:text-white" />
                  <span>{t("cta")}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
