"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { Smile, Stethoscope, CalendarCheck, ArrowRight, ArrowLeft } from "lucide-react";

export function AlignersClosingSection() {
  const t = useTranslations("alignersPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Patient Card (Parchment Side) */}
        <div
          className={`lg:col-span-6 p-8 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-xl text-center flex flex-col justify-between h-full backdrop-blur-md ${
            isRtl ? "lg:pr-8" : "lg:pl-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[10px] font-mono text-[#955904] border border-[#C8A232]/40 mb-3">
              <Smile className="w-3.5 h-3.5" />
              <span>FOR PATIENTS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F266A] mb-3">
              {isRtl ? "ابدأ رحلة ابتسامتك الجديدة" : "Start Your Smile Journey"}
            </h3>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body mb-6 leading-relaxed">
              {isRtl
                ? "احجز استشارة تقييم سريري مع أخصائي التقويم لتحديد الخطة المناسبة لحالتك بأحدث تقنيات المحاكاة ثلاثية الأبعاد."
                : "Book a clinical assessment consultation to discover the ideal plan for your smile with 3D simulation."}
            </p>
          </div>
          <Link
            href="/clinics?treatment=aligners#booking"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>{t("patientCta")}</span>
            <ArrowIcon className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Professional Card for Dentists (Royal Blue Side) */}
        <div
          className={`lg:col-span-6 p-8 rounded-3xl bg-[#03112E]/90 text-white border-2 border-[#C8A232]/60 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md text-center flex flex-col justify-between h-full ${
            isRtl ? "lg:pl-8" : "lg:pr-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-[#DFBF57] border border-[#DFBF57]/30 mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>FOR DENTAL PROFESSIONALS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
              {t("dentistPrompt")}
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] font-body mb-6 leading-relaxed">
              {isRtl
                ? "منظومة تقويم شفافة مصنعة خصيصاً لعيادتك بخامات معتمدة وتخطيط سريري ومتابعة رقمية مستمرة."
                : "Custom clear aligner manufacturing engineered for your clinic with certified polymers and digital planning."}
            </p>
          </div>
          <Link
            href="/for-dentists?service=aligners#enquiry"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0F266A] hover:bg-[#FAF1DC] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <span>{t("dentistCta")}</span>
            <ArrowIcon className="w-4 h-4 text-[#955904]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
