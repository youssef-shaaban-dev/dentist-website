"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function LabClosingSection() {
  const t = useTranslations("labPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-xl backdrop-blur-md">
          <p className="text-base sm:text-xl md:text-2xl font-bold text-[#0F266A] font-display mb-6">
            {t("closingCopy")}
          </p>

          <Link
            href="/for-dentists#enquiry"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t("closingCta")}</span>
            <ArrowIcon className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
