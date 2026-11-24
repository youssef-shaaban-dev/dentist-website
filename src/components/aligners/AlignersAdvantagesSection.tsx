"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionLayout } from "@/components/ui/SplitSectionLayout";
import {
  EyeOff,
  Unlock,
  Smile,
  CheckCircle,
  Plane,
  LineChart,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function AlignersAdvantagesSection() {
  const t = useTranslations("alignersPage");
  const { isRtl } = useLanguage();

  const benefitIcons = [
    EyeOff,
    Unlock,
    ShieldCheck,
    Smile,
    CheckCircle,
    Plane,
    LineChart,
  ];

  return (
    <SplitSectionLayout
      waveVariant="B"
      parchmentContent={
        <div className="w-full max-w-xl p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
              {isRtl ? "مميزات التقويم الشفاف" : "OUR ALIGNERS ADVANTAGES"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-6">
            {t("benefitsHeading")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.raw("benefits")?.map((b: { title: string; caption: string }, idx: number) => {
              const Icon = benefitIcons[idx] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/90 border border-[#C8A232]/30 shadow-xs flex items-start gap-3.5 hover:border-[#C8A232] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF1DD] border border-[#C8A232]/50 flex items-center justify-center text-[#955904] shrink-0 mt-0.5 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold font-display text-[#0F266A] mb-1">
                      {b.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#2A3B56]/80 font-body leading-relaxed">
                      {b.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }
      royalBlueContent={
        <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
            alt="The Magnificent Aligners Advantages"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/85 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
            <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
              Virtually Invisible • Effortless Daily Living
            </span>
          </div>
        </div>
      }
    />
  );

}
