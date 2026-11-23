"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

export function DentistsCollaborationSection() {
  const t = useTranslations("forDentistsPage");
  const { isRtl } = useLanguage();

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
            {t("collaborationHeading")}
          </h2>
          <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
            {isRtl
              ? "أربع خطوات واضحة ومباشرة تضمن لك تسليم التعويضات بأعلى درجات الدقة والتطابق السريري."
              : "Four straightforward stages ensuring precision fit and smooth clinical workflow."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.raw("steps")?.map((step: { num: string; title: string; desc: string }, sIdx: number) => (
            <div
              key={sIdx}
              className="relative p-6 sm:p-7 rounded-3xl bg-white/95 border border-[#C8A232]/35 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-[#955904] mb-2 block">
                  {step.num}
                </span>
                <h3 className="text-base font-bold font-display text-[#0F266A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2A3B56]/80 font-body leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
