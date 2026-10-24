"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, Building2, Layers, Cpu, ArrowRight, ArrowLeft } from "lucide-react";

export function EcosystemSection() {
  const t = useTranslations("ecosystem");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="ecosystem"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6A12]" />
            <span className="text-xs font-bold text-[#8C6A12] uppercase tracking-wider font-mono">
              {t("tag")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1128] mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6782] font-body leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Clinics */}
          <div className="group rounded-2xl bg-white border border-[#C8A232]/25 p-8 shadow-[0_8px_30px_rgba(10,17,40,0.04)] hover:shadow-[0_16px_45px_rgba(200,162,50,0.18)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#C8A232]/30 flex items-center justify-center text-[#8C6A12] mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#8C6A12] group-hover:text-white transition-all">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0A1128] mb-3 group-hover:text-[#8C6A12] transition-colors">
                {t("clinicsTitle")}
              </h3>
              <p className="text-sm text-[#5B6782] leading-relaxed mb-6 font-body">
                {t("clinicsDesc")}
              </p>
            </div>
            <a
              href="#clinics"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6A12] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
            >
              <span>{t("clinicsCta")}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 2: Magnificent Aligners */}
          <div className="group relative rounded-2xl bg-gradient-to-b from-white to-[#FAF8F5] border-2 border-[#C8A232]/50 p-8 shadow-[0_12px_35px_rgba(200,162,50,0.15)] hover:shadow-[0_20px_50px_rgba(200,162,50,0.25)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#8C6A12] text-white text-[10px] font-bold uppercase tracking-wider shadow">
              {t("alignersBadge")}
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0A1128] border border-[#C8A232]/50 flex items-center justify-center text-[#DFBF57] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0A1128] mb-3 group-hover:text-[#8C6A12] transition-colors">
                {t("alignersTitle")}
              </h3>
              <p className="text-sm text-[#5B6782] leading-relaxed mb-6 font-body">
                {t("alignersDesc")}
              </p>
            </div>
            <a
              href="#aligners"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6A12] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
            >
              <span>{t("alignersCta")}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 3: High-Precision Dental Lab */}
          <div className="group rounded-2xl bg-white border border-[#C8A232]/25 p-8 shadow-[0_8px_30px_rgba(10,17,40,0.04)] hover:shadow-[0_16px_45px_rgba(200,162,50,0.18)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#C8A232]/30 flex items-center justify-center text-[#8C6A12] mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#8C6A12] group-hover:text-white transition-all">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0A1128] mb-3 group-hover:text-[#8C6A12] transition-colors">
                {t("labTitle")}
              </h3>
              <p className="text-sm text-[#5B6782] leading-relaxed mb-6 font-body">
                {t("labDesc")}
              </p>
            </div>
            <a
              href="#dental-lab"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6A12] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
            >
              <span>{t("labCta")}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
