"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

export function LabMaterialsGallerySection() {
  const t = useTranslations("labPage");
  const { isRtl } = useLanguage();

  const galleryImages = [
    {
      title: isRtl ? "عدسات فينير سويسرية فائقة النحافة" : "Ultra-Thin Aesthetic Veneers",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=85",
    },
    {
      title: isRtl ? "تيجان زركونيا وإيماكس متعددة الطبقات" : "Multilayer Zirconia & E.max Crowns",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=85",
    },
    {
      title: isRtl ? "تعويضات زراعة دقيقة بنظام Titanium Bar" : "Precision Implant Titanium Bar Prosthetics",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#955904] mb-3">
            {t("techHeading")}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            {t.raw("techList")?.map((tech: string, tIdx: number) => (
              <span
                key={tIdx}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs font-mono shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F266A] mb-1">
            {t("galleryHeading")}
          </h3>
          <p className="text-xs sm:text-sm text-[#2A3B56] font-body">
            {t("gallerySub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((item, gIdx) => (
            <div
              key={gIdx}
              className="rounded-3xl overflow-hidden bg-white/95 border border-[#C8A232]/40 shadow-md hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative w-full h-56 bg-[#0A1128]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <span className="text-xs font-bold font-display text-[#0F266A]">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
