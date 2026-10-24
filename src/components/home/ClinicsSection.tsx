"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft, Building } from "lucide-react";

export function ClinicsSection() {
  const t = useTranslations("clinics");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const branches = [
    { key: "branch1" },
    { key: "branch2" },
    { key: "branch3" },
  ];

  return (
    <section
      id="clinics"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Building className="w-3.5 h-3.5 text-[#8C6A12]" />
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

        {/* 3 Clinics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map(({ key }) => (
            <div
              key={key}
              className="group rounded-2xl bg-white border border-[#C8A232]/25 overflow-hidden shadow-[0_8px_30px_rgba(10,17,40,0.05)] hover:shadow-[0_18px_50px_rgba(200,162,50,0.18)] hover:border-[#C8A232] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Branch Header Graphic */}
              <div className="h-44 bg-gradient-to-br from-[#0A1128] to-[#162447] p-6 flex flex-col justify-between relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A232]/10 rounded-full blur-xl pointer-events-none" />
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-[#C8A232]/40 flex items-center justify-center text-[#C8A232]">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3E5AB]">
                    MAGNIFICENT SUITE
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-1">
                    {t(`${key}.name`)}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-xs text-[#3D4866]">
                    <MapPin className="w-4 h-4 text-[#8C6A12] shrink-0 mt-0.5" />
                    <span className="font-medium">{t(`${key}.area`)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#3D4866]">
                    <Clock className="w-4 h-4 text-[#8C6A12] shrink-0 mt-0.5" />
                    <span>{t(`${key}.hours`)}</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#3D4866]">
                    <Phone className="w-4 h-4 text-[#8C6A12] shrink-0 mt-0.5" />
                    <span className="font-mono font-bold" dir="ltr">{t(`${key}.phone`)}</span>
                  </div>
                </div>

                <a
                  href="#book"
                  className="w-full py-3.5 rounded-xl border border-[#C8A232] bg-[#FAF8F5] hover:bg-[#8C6A12] hover:text-white text-[#0A1128] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>{t(`${key}.cta`)}</span>
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
