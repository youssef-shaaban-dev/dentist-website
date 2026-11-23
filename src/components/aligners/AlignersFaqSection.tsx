"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { ChevronDown } from "lucide-react";

export function AlignersFaqSection() {
  const t = useTranslations("alignersPage");
  const { isRtl } = useLanguage();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
            {t("faqsHeading")}
          </h2>
          <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
            {isRtl
              ? "إجابات شافية ومباشرة حول مدة العلاج، والراحة اليومية، وكيفية العناية بالتقويم الشفاف."
              : "Clear clinical answers regarding treatment duration, daily comfort, and aligner care."}
          </p>
        </div>

        <div className="space-y-3">
          {t.raw("faqs")?.map((faq: { q: string; a: string }, fIdx: number) => {
            const isOpen = openFaq === fIdx;
            return (
              <div
                key={fIdx}
                className="rounded-2xl border border-[#C8A232]/35 bg-white/95 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EE]/60 transition-colors"
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-[#0F266A]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#955904] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#2A3B56]/85 font-body leading-relaxed border-t border-[#C8A232]/15 pt-3"
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
