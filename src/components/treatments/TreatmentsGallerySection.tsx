"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { Sparkles, CalendarCheck, ArrowRight, ArrowLeft } from "lucide-react";

export function TreatmentsGallerySection() {
  const t = useTranslations("treatmentsPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const galleryCases = [
    {
      id: "case-allon6",
      category: "implants",
      label: isRtl ? "زراعة وترميم كامل الفك All-on-6" : "All-on-6 Full Arch Reconstruction",
      beforeImg: "/cases/case-1-before.jpg",
      afterImg: "/cases/case-1-after.jpg",
      clinicalTag: isRtl ? "تعويض فكي كامل" : "Full Mouth Rehab",
    },
    {
      id: "case-veneers-incisors",
      category: "veneers",
      label: isRtl ? "ترميم القواطع وعدسات فينير E.max" : "Incisor Restoration & E.max Veneers",
      beforeImg: "/cases/case-2-before.jpg",
      afterImg: "/cases/case-2-after.jpg",
      clinicalTag: isRtl ? "فينير E.max" : "E.max Veneers",
    },
    {
      id: "case-gingival",
      category: "aesthetic",
      label: isRtl ? "تجميل الابتسامة اللثوية وعدسات E.max" : "Gingival Smile Recontouring",
      beforeImg: "/cases/case-7-before.jpg",
      afterImg: "/cases/case-7-after.jpg",
      clinicalTag: isRtl ? "تجميل لثوي" : "Gingival Design",
    },
    {
      id: "case-hollywood",
      category: "aesthetic",
      label: isRtl ? "تصميم ابتسامة هوليوود المتكاملة" : "Hollywood Smile Makeover",
      beforeImg: "/cases/case-8-before.jpg",
      afterImg: "/cases/case-8-after.jpg",
      clinicalTag: isRtl ? "ابتسامة هوليوود" : "Hollywood Smile",
    },
    {
      id: "case-men-veneers",
      category: "veneers",
      label: isRtl ? "ابتسامة هوليوود وتبييض الأسنان للرجال" : "Men's Aesthetic Veneers",
      beforeImg: "/cases/case-3-before.jpg",
      afterImg: "/cases/case-3-after.jpg",
      clinicalTag: isRtl ? "تجميل أسنان" : "Aesthetic Smile",
    },
    {
      id: "case-enamel-restoration",
      category: "veneers",
      label: isRtl ? "إعادة تأهيل وتجميل الأسنان المتهالكة" : "Enamel Restoration & Whitening",
      beforeImg: "/cases/case-4-before.jpg",
      afterImg: "/cases/case-4-after.jpg",
      clinicalTag: isRtl ? "قشور خزفية" : "Ceramic Veneers",
    },
    {
      id: "case-friend-1",
      category: "veneers",
      label: isRtl ? "عدسات فينير رقمية ميكرونية" : "Precision Digital Veneers",
      beforeImg: "/cases/case-5-before.jpg",
      afterImg: "/cases/case-5-after.jpg",
      clinicalTag: isRtl ? "فينير رقمي" : "Digital Veneers",
    },
    {
      id: "case-friend-2",
      category: "veneers",
      label: isRtl ? "تصميم الابتسامة وتعديل العضة" : "Bite Correction & Smile Design",
      beforeImg: "/cases/case-6-before.jpg",
      afterImg: "/cases/case-6-after.jpg",
      clinicalTag: isRtl ? "تصميم ابتسامة" : "Smile Design",
    },
    {
      id: "case-duo",
      category: "aesthetic",
      label: isRtl ? "قصة نجاح مشتركة لصديقين بابتسامة متألقة" : "Shared Patient Success Story",
      isDuo: true,
      image: "/cases/case-duo-friends.jpg",
      clinicalTag: isRtl ? "توثيق سريري" : "Clinical Proof",
    },
  ];

  const filteredCases =
    activeFilter === "all"
      ? galleryCases
      : galleryCases.filter((c) => c.category === activeFilter);

  return (
    <section id="smile-gallery" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Gallery Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#C8A232]/25">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                {isRtl ? "معرض الحالات السريرية الحقيقية" : "REAL CLINICAL SMILE GALLERY"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
              {t("galleryHeadline")}
            </h2>

            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed max-w-2xl">
              {isRtl
                ? "توثيق فوتوغرافي عالي الدقة لحالات سريرية حقيقية لمرضى عياداتنا، خضعت لخطط علاجية شاملة من زراعة الأسنان، الفينير، وتصميم الابتسامة بمعملنا الرقمي الحصري."
                : "High-resolution photographic documentation of real patient cases performed at our clinics, utilizing Swiss materials and digital precision."}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {[
              { id: "all", label: isRtl ? "الكل (جميع الحالات)" : "All Cases" },
              { id: "implants", label: isRtl ? "زراعة كامل الفك" : "All-on-6" },
              { id: "veneers", label: isRtl ? "عدسات وفينير E.max" : "Veneers" },
              { id: "aesthetic", label: isRtl ? "ابتسامة هوليوود وتجميل اللثة" : "Hollywood & Gum" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold font-display transition-all duration-300 border cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-[#012052] text-white border-[#C8A232] shadow-md ring-1 ring-[#C8A232]"
                    : "bg-white/90 text-[#4A5E7B] border-[#C8A232]/35 hover:bg-[#FAF1DC]/50 hover:text-[#012052]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => {
            if (item.isDuo) {
              return (
                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#03112E] to-[#01091A] border-2 border-[#DFBF57] p-4 flex flex-col justify-between shadow-[0_12px_30px_rgba(1,32,82,0.6)] backdrop-blur-md sm:col-span-2 lg:col-span-1"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-[#DFBF57]/50">
                    <Image
                      src={item.image!}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57] text-[10px] font-mono font-bold text-[#DFBF57] shadow-md">
                      {item.clinicalTag}
                    </div>
                  </div>

                  <div className="pt-3 text-center">
                    <h3 className="text-sm font-bold font-display text-white mb-1">
                      {item.label}
                    </h3>
                    <p className="text-[11px] text-[#FAF1DD]/80 font-body">
                      {isRtl
                        ? "ابتسامة متناسقة مفعمة بالثقة تجمع صديقين بعد إتمام خطتهما العلاجية."
                        : "Two friends celebrating their radiant new Hollywood smiles."}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="rounded-3xl overflow-hidden bg-[#03112E]/90 border-2 border-[#C8A232]/60 hover:border-[#DFBF57] p-4 flex flex-col gap-3 shadow-[0_12px_30px_rgba(1,32,82,0.6)] backdrop-blur-md transition-all duration-300"
              >
                {/* Before & After Dual Images */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Before */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/50 border border-amber-500/40">
                    <Image
                      src={item.beforeImg!}
                      alt={`${item.label} - Before`}
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-cover object-center"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/85 text-[10px] font-mono text-amber-200 border border-amber-500/50 shadow-xs">
                      {isRtl ? "قبل العلاج" : "Before"}
                    </span>
                  </div>

                  {/* After */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/50 border border-[#DFBF57]/60">
                    <Image
                      src={item.afterImg!}
                      alt={`${item.label} - After`}
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-cover object-center"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#012052]/90 text-[10px] font-mono text-[#DFBF57] border border-[#DFBF57]/70 shadow-xs">
                      {isRtl ? "بعد العلاج" : "After"}
                    </span>
                  </div>
                </div>

                {/* Caption & Category */}
                <div className="flex items-center justify-between pt-1">
                  <h3 className="text-xs sm:text-sm font-bold font-display text-white">
                    {item.label}
                  </h3>
                  <span className="text-[10px] font-mono text-[#DFBF57] bg-white/10 px-2 py-0.5 rounded-md border border-white/15">
                    {item.clinicalTag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Book Consultation Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/clinics#booking"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>{isRtl ? "احجز كشفك لمعاينة وتصميم ابتسامتك" : "Schedule Your Smile Consultation"}</span>
            <ArrowIcon className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
