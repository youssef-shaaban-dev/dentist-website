"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

import {
  Sparkles,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  Smile,
  ShieldCheck,
  Layers,
  Activity,
  Zap,
  Scissors,
  Baby,
  SmilePlus,
} from "lucide-react";

interface TreatmentItem {
  id: string;
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
  image: string;
  hasAlignersLink?: boolean;
}

export default function TreatmentsPage() {
  const t = useTranslations("treatmentsPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeFilter, setActiveFilter] = useState<string>("all");

  // 8 Approved Treatment Cards
  const treatments: TreatmentItem[] = [
    {
      id: "cosmetic",
      icon: SmilePlus,
      titleKey: "cards.0.title",
      descKey: "cards.0.desc",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "implants",
      icon: ShieldCheck,
      titleKey: "cards.1.title",
      descKey: "cards.1.desc",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "orthodontics",
      icon: Layers,
      titleKey: "cards.2.title",
      descKey: "cards.2.desc",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      hasAlignersLink: true,
    },
    {
      id: "crowns",
      icon: Smile,
      titleKey: "cards.3.title",
      descKey: "cards.3.desc",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "endodontics",
      icon: Zap,
      titleKey: "cards.4.title",
      descKey: "cards.4.desc",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "periodontics",
      icon: Scissors,
      titleKey: "cards.5.title",
      descKey: "cards.5.desc",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "pediatric",
      icon: Baby,
      titleKey: "cards.6.title",
      descKey: "cards.6.desc",
      image:
        "https://images.unsplash.com/photo-1594824813581-2292f72535d4?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "general",
      icon: Activity,
      titleKey: "cards.7.title",
      descKey: "cards.7.desc",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  // Cases for the Smile Gallery with verified labels
  const galleryCases = [
    {
      id: "case-1",
      category: "cosmetic",
      label: isRtl ? "تصميم الابتسامة وعدسات الفينير" : "Smile Design & Veneers",
      beforeImg:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=85",
      afterImg:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "case-2",
      category: "implants",
      label: isRtl ? "زراعة الأسنان والتركيبات التعويضية" : "Implant Restorations",
      beforeImg:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=85",
      afterImg:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const filteredCases =
    activeFilter === "all"
      ? galleryCases
      : galleryCases.filter((c) => c.category === activeFilter);

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* ======================================================== */}
      {/* SECTION 1: HERO / INTRO (Full Width S-Curve Split)       */}
      {/* ======================================================== */}
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
                <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {isRtl ? "العلاجات المتخصصة" : "SPECIALIZED TREATMENTS"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4">
                {t("headline")}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-xl">
                {t("websiteCopy")}
              </p>

              <div className="flex flex-wrap items-center gap-3">
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
                  <span>{isRtl ? "معرض الحالات" : "Smile Gallery"}</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase (Royal Blue Side) */}
            <div
              className={`lg:col-span-5 relative flex justify-center items-center ${
                isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
              }`}
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)]">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Specialized Dental Care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
                  <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                    8 Dedicated Dental Specialties • Consultant Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 2: 8 SPECIALIZED TREATMENTS (Full Width S-Curve) */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-3">
              {isRtl ? "منظومة العلاجات المتخصصة في عياداتنا" : "Our Comprehensive Treatment Offerings"}
            </h2>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "رعاية سريرية دقيقة بإشراف نخبة من كبار الاستشاريين، وباستخدام أحدث تقنيات التشخيص الرقمي ثلاثي الأبعاد."
                : "Exceptional clinical care guided by dedicated specialists with advanced 3D digital diagnosis."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {treatments.map((treatment) => {
              const Icon = treatment.icon;
              const title = t(treatment.titleKey);
              const desc = t(treatment.descKey);

              return (
                <div
                  key={treatment.id}
                  className="group relative rounded-3xl overflow-hidden bg-white/95 border border-[#C8A232]/40 hover:border-[#C8A232] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-xs"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-[#0A1128]">
                    <Image
                      src={treatment.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Icon */}
                    <div className="absolute bottom-3.5 left-3.5 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-[#C8A232]/40">
                      <Icon className="w-5 h-5 text-[#955904]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold font-display text-[#0F266A] mb-2 group-hover:text-[#955904] transition-colors">
                        {title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed mb-6">
                        {desc}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-[#C8A232]/25">
                      <Link
                        href={`/clinics?treatment=${treatment.id}#booking`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#012052] hover:bg-[#022A6D] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-xs"
                      >
                        <span className="flex items-center gap-1.5">
                          <CalendarCheck className="w-3.5 h-3.5 text-[#DFBF57]" />
                          <span>{t("bookCta")}</span>
                        </span>
                        <ArrowIcon className="w-3.5 h-3.5 text-[#DFBF57]" />
                      </Link>

                      {treatment.hasAlignersLink && (
                        <Link
                          href="/aligners"
                          className="inline-flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#FAF1DD] hover:bg-[#F3E2BD] text-[#955904] text-xs font-semibold tracking-wide transition-colors border border-[#C8A232]/40"
                        >
                          <span>{t("discoverAligners")}</span>
                          <ArrowIcon className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 3: CLINICAL SMILE GALLERY (Full Width S-Curve)    */}
      {/* ======================================================== */}
      <section id="smile-gallery" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Gallery Info (Parchment Side) */}
            <div
              className={`lg:col-span-5 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none ${
                isRtl ? "lg:pr-8 xl:pr-12 lg:pl-6" : "lg:pl-8 xl:pl-12 lg:pr-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs mb-3 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {isRtl ? "معرض الحالات السريرية" : "CLINICAL SMILE GALLERY"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-4">
                {t("galleryHeadline")}
              </h2>

              <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed mb-6">
                {isRtl
                  ? "توثيق فوتوغرافي عالي الدقة لحالات سريرية خضعت لخطط علاجية شاملة من تصميم الابتسامة وزراعة الأسنان، بتقنيات معملنا الرقمي الحصري."
                  : "High-resolution photographic documentation of comprehensive smile transformations performed with Swiss materials and digital precision."}
              </p>

              <div className="space-y-3 mb-8">
                {[
                  isRtl ? "نتائج طبيعية متناغمة مع ملامح الوجه" : "Natural aesthetics harmonized with facial features",
                  isRtl ? "خامات E.max وزركونيا سويسرية فائقة النقاء" : "Ultra-pure Swiss E.max and Zirconia materials",
                  isRtl ? "ضمان طويل الأمد ومتابعة دورية مستمرة" : "Long-term guarantee with ongoing periodic follow-up",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#0F266A]">
                    <span className="w-2 h-2 rounded-full bg-[#C8A232]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="/clinics#booking"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <CalendarCheck className="w-4 h-4 text-white" />
                  <span>{isRtl ? "ابدأ رحلة ابتسامتك" : "Start Your Smile Journey"}</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>

            {/* Gallery Case Pairs (Royal Blue Side) */}
            <div
              className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 ${
                isRtl ? "lg:pl-6" : "lg:pr-6"
              }`}
            >
              {filteredCases.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-[#03112E]/90 border-2 border-[#C8A232]/60 p-4 flex flex-col gap-3 shadow-[0_12px_30px_rgba(1,32,82,0.6)] backdrop-blur-md"
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="relative h-40 rounded-xl overflow-hidden bg-black/50 border border-[#C8A232]/25">
                      <Image
                        src={item.beforeImg}
                        alt="Before"
                        fill
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/80 text-[10px] font-mono text-amber-200 border border-amber-500/40">
                        {isRtl ? "قبل" : "Before"}
                      </span>
                    </div>
                    <div className="relative h-40 rounded-xl overflow-hidden bg-black/50 border border-[#DFBF57]/50">
                      <Image
                        src={item.afterImg}
                        alt="After"
                        fill
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#012052]/90 text-[10px] font-mono text-[#DFBF57] border border-[#DFBF57]/60">
                        {isRtl ? "بعد" : "After"}
                      </span>
                    </div>
                  </div>

                  <div className="text-center pt-1">
                    <h3 className="text-xs sm:text-sm font-bold font-display text-white">
                      {item.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 4: CONSULTATION ACTION (Full Width S-Curve)      */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-xl backdrop-blur-md">
            <p className="text-base sm:text-xl md:text-2xl font-bold text-[#0F266A] font-display mb-6">
              {t("closingCopy")}
            </p>

            <Link
              href="/clinics#booking"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>{t("closingCta")}</span>
              <ArrowIcon className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
