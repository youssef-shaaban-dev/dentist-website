"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export function PatientReviews() {
  const t = useTranslations("reviews");
  const { isRtl } = useLanguage();

  const reviews = [0, 1, 2];

  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#8C6A12]" />
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

        {/* Reviews 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <span className="text-xs font-bold text-[#8C6A12] ml-2 font-mono">
                    {t(`list.${idx}.rating`)}
                  </span>
                </div>

                <p className="text-sm text-[#3D4866] leading-relaxed mb-6 font-body italic">
                  &ldquo;{t(`list.${idx}.text`)}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F4EE] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0A1128] font-display">
                    {t(`list.${idx}.author`)}
                  </h3>
                  <span className="text-[11px] text-[#5B6782]">
                    {t(`list.${idx}.role`)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#8C6A12] font-semibold">
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
