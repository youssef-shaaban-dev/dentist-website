"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { Stethoscope, Sparkles, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export function DentistsHeroSection() {
  const t = useTranslations("forDentistsPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content (Parchment Side) */}
          <div className="flex flex-col justify-center items-center text-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit mx-auto">
              <Stethoscope className="w-3.5 h-3.5 text-[#955904]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                {isRtl ? "للأطباء والعيادات" : "FOR DENTAL PRACTITIONERS"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4 text-center">
              {t("headline")}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-xl mx-auto text-center">
              {t("websiteCopy")}
            </p>

            <div className="flex justify-center">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{isRtl ? "إرسال استفسار مهني" : "Submit Case Enquiry"}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Highlights Card (Royal Blue Side) */}
          <div className="relative flex justify-center items-center w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#03112E]/90 border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C8A232]/30">
                <div className="w-10 h-10 rounded-xl bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">
                    {isRtl ? "معايير التعاون المهني" : "Clinical B2B Standards"}
                  </h3>
                  <span className="text-[11px] font-mono text-[#DFBF57]">
                    {isRtl ? "دقة ميكرونية • تواصل مباشر" : "Micron Precision • Direct Support"}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  isRtl ? "تواصل مباشر مع مدير المعمل أ. عبد القادر درغام" : "Direct communication with Lab Manager Abdulkader Dorgham",
                  isRtl ? "خامات سويسرية وألمانية معتمدة دولياً (Ivoclar, Bredent)" : "Certified Swiss & German materials (Ivoclar, Bredent)",
                  isRtl ? "استلام ملفات رقمية (STL) ومقاسات تقليدية" : "Support for digital STL scans & conventional impressions",
                  isRtl ? "مواعيد تسليم دقيقة وتوصيل لكافة المحافظات" : "Guaranteed delivery schedules with secure courier dispatch",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2E8F0]">
                    <div className="w-4 h-4 rounded-full bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
