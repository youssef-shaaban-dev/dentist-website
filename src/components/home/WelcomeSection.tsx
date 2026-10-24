"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, Shield, Cpu, HeartHandshake, CheckCircle2 } from "lucide-react";

export function WelcomeSection() {
  const t = useTranslations("welcome");
  const { isRtl } = useLanguage();

  return (
    <section
      id="welcome"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] overflow-hidden border-t border-[#C8A232]/20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C8A232]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C8A232]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Royal Hesy-Ra Artifact Frame */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden p-3 bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#C8A232]/35 shadow-[0_20px_50px_rgba(10,17,40,0.08)]">
              {/* Inner Decorative Bezel */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A1128] flex flex-col items-center justify-center p-6 text-center">
                {/* Ancient Emblem Backdrop */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
                  <Image
                    src="/logo.png"
                    alt="Hesy-Ra Egyptian Dental Heritage"
                    fill
                    sizes="250px"
                    className="object-contain filter drop-shadow-[0_10px_25px_rgba(200,162,50,0.5)]"
                  />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#F3E5AB]">
                  FIRST RECORDED DENTIST · 2600 BCE
                </span>
                <span className="text-sm font-display text-white font-bold mt-1">
                  حسي رع — كبير أطباء الأسنان والكتبة
                </span>
                <p className="text-[11px] text-[#FDFBF7]/70 mt-2 max-w-xs font-body">
                  أول من سجل له التاريخ علاج وحفظ الأسنان في الحضارة المصرية القديمة
                </p>
              </div>

              {/* Floating Floating Accent Badge */}
              <div className="absolute -bottom-4 -right-4 sm:right-6 bg-white border border-[#C8A232] rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] flex items-center justify-center text-[#8C6A12]">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-start">
                  <span className="text-xs font-bold text-[#0A1128]">أعلى معايير السريرية</span>
                  <span className="text-[10px] text-[#5B6782]">رعاية ملكية معتمدة دولياً</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column: Philosophy, Story, 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A232]" />
              <span className="text-xs font-bold text-[#8C6A12] uppercase tracking-wider font-mono">
                {t("badge")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1128] leading-[1.25] mb-6">
              {t("title")}
            </h2>

            <p className="text-base sm:text-lg text-[#3D4866] leading-relaxed mb-4 font-body">
              {t("desc1")}
            </p>

            <p className="text-base sm:text-lg text-[#3D4866] leading-relaxed mb-8 font-body">
              {t("desc2")}
            </p>

            {/* 3 Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C8A232]/25">
              <div className="p-4 rounded-xl bg-white border border-[#C8A232]/20 shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#8C6A12] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0A1128] font-display">{t("points.p1Title")}</h3>
                <p className="text-xs text-[#5B6782] font-body leading-relaxed">{t("points.p1Desc")}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C8A232]/20 shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#8C6A12] flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0A1128] font-display">{t("points.p2Title")}</h3>
                <p className="text-xs text-[#5B6782] font-body leading-relaxed">{t("points.p2Desc")}</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C8A232]/20 shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#8C6A12] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0A1128] font-display">{t("points.p3Title")}</h3>
                <p className="text-xs text-[#5B6782] font-body leading-relaxed">{t("points.p3Desc")}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
