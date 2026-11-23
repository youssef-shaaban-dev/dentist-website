"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionLayout } from "@/components/ui/SplitSectionLayout";
import { Sparkles, ArrowRight, ArrowLeft, CalendarCheck, Video } from "lucide-react";

export function TreatmentsHeroSection() {
  const t = useTranslations("treatmentsPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <SplitSectionLayout
      waveVariant="A"
      parchmentContent={
        <div className="w-full max-w-xl mx-auto flex flex-col justify-center items-center text-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
              {isRtl ? "العلاجات المتخصصة" : "SPECIALIZED TREATMENTS"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4 text-center">
            {t("headline")}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-xl mx-auto text-center">
            {t("websiteCopy")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/clinics#booking"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>{isRtl ? "احجز استشارة" : "Book a Consultation"}</span>
              <ArrowIcon className="w-4 h-4 text-white" />
            </Link>
            <a
              href="#smile-gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#FAF1DC]/50 transition-all cursor-pointer shadow-xs"
            >
              <span>{isRtl ? "معرض الحالات الحقيقية" : "Smile Gallery"}</span>
            </a>
            <a
              href="#video-testimonials"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FAF1DC] border border-[#C8A232]/60 text-[#9A5F13] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white transition-all cursor-pointer shadow-xs"
            >
              <Video className="w-4 h-4 text-[#9A5F13]" />
              <span>{isRtl ? "تجارب بالفيديو" : "Video Stories"}</span>
            </a>
          </div>
        </div>
      }
      royalBlueContent={
        <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
            alt="Specialized Dental Care"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
            <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
              Comprehensive Specialty Care • 8 Disciplines
            </span>
          </div>
        </div>
      }
    />
  );
}
