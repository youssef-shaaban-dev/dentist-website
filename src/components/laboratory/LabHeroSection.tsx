"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { Cpu, ArrowRight, ArrowLeft } from "lucide-react";

export function LabHeroSection() {
  const t = useTranslations("labPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Content (Parchment Side) */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none ${
              isRtl ? "lg:pr-8 xl:pr-14 lg:pl-6" : "lg:pl-8 xl:pl-14 lg:pr-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit">
              <Cpu className="w-3.5 h-3.5 text-[#955904]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                {t("brandName")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4">
              {t("headline")}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-2xl whitespace-pre-line">
              {t("websiteCopy")}
            </p>

            <div>
              <Link
                href="/for-dentists#enquiry"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t("closingCta")}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Asset Image (Royal Blue Side) */}
          <div
            className={`lg:col-span-5 relative flex justify-center items-center ${
              isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
            }`}
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)]">
              <Image
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"
                alt="Magnificent Smile Dental Lab"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
                <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                  5-Axis High Precision Robotic CAD/CAM Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
