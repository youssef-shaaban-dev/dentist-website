"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

import {
  Cpu,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Scan,
  ShieldCheck,
  Layers,
  Wrench,
  Smile,
  Crown,
} from "lucide-react";

export default function LaboratoryPage() {
  const t = useTranslations("labPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const serviceIcons = [
    Scan,
    Crown,
    Layers,
    ShieldCheck,
    Wrench,
    Smile,
    Sparkles,
  ];

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
      title: isRtl ? "تعويضات زراعة دقيقة بنظام Visio.lign" : "Precision Implant Prosthetics",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=85",
    },
  ];

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
                <Cpu className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {t("brandName")}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4">
                {t("headline")}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-xl">
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

      

      {/* ======================================================== */}
      {/* SECTION 2: LAB LEADERSHIP (Full Width S-Curve Split)     */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DFBF57]/60 bg-[#011438]/85 backdrop-blur-md shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#DFBF57] font-mono">
                {isRtl ? "القيادة والإشراف الفني • LABORATORY LEADERSHIP" : "LABORATORY LEADERSHIP"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {isRtl ? "إشراف نخبة من كبار خبراء التعويضات السنية" : "Executive Master Technical Leadership"}
            </h2>
            <p className="text-sm sm:text-base text-white/95 font-body leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] font-medium">
              {isRtl
                ? "يجمع معملنا بين الفن البشري والتقنيات الرقمية فائقة الدقة تحت إشراف قيادة فنية متخصصة لضمان أعلى معايير الجودة السويسرية."
                : "Combining artisanal mastery and digital high-precision milling under expert technical leadership."}
            </p>
          </div>

          {/* Leadership Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            {/* Doctor / Manager Card — Identical to SpecialistsSection on Home Page */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-2xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/80 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all duration-300 hover:border-[#DFBF57] hover:shadow-[0_25px_60px_rgba(200,162,50,0.3)]">
                {/* Gold Accent Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

                {/* Portrait Photo (Identical aspect-[3/4] & styling to SpecialistsSection) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#020B1D]">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85"
                    alt={t("managerName")}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    priority
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57] text-[#DFBF57] text-xs font-mono font-bold shadow-md backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 text-[#DFBF57]" />
                      <span>DIRECTOR</span>
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#DFBF57]" />
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                      {t("managerName")}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#DFBF57] font-body font-medium">
                    {t("managerTitle")}
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Highlights & Credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-xl backdrop-blur-md">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8A232]/50 text-[#955904] text-xs font-mono font-bold mb-4 shadow-xs">
                  <Crown className="w-3.5 h-3.5 text-[#955904]" />
                  <span>{isRtl ? "معايير الجودة والإتقان" : "EXCELLENCE & ARTISTRY"}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F266A] mb-3">
                  {isRtl ? "دقة رقمية متناهية ولمسة فنية حية" : "Sub-Millimeter Digital Precision with Artisanal Touch"}
                </h3>

                <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed mb-6">
                  {isRtl
                    ? "تحت إشراف مستر عبد القادر درغام، يُدار المعمل بنظام الجودة السويسرية الصارمة، حيث يتم فحص واختبار كل تركيبة وعدسة فينير عبر أجهزة المسح والميكروسكوب الرقمي لضمان تطابق تام مع خطة العلاج وراحة المريض."
                    : "Under the direct supervision of Mr. Abdulkader Dorgham, our dental lab operates with stringent Swiss quality standards, inspecting every veneer and crown to ensure flawless fit and natural beauty."}
                </p>

                {/* Highlights List */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-[#012052] flex items-center justify-center text-[#DFBF57] shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display">
                        {isRtl ? "فحص الجودة والمطابقة الميكرونية" : "Microscopic Quality Inspection"}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#2A3B56] font-body">
                        {isRtl ? "مطابقة حواف متناهية الدقة لتفادي أي فراغات وحماية اللثة والأسنان الداعمة." : "Precise marginal fit to safeguard gingival health and tooth longevity."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-[#012052] flex items-center justify-center text-[#DFBF57] shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F266A] font-display">
                        {isRtl ? "تدرج لوني متعدد الطبقات (Multi-Layering)" : "Aesthetic Multi-Layer Shading"}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#2A3B56] font-body">
                        {isRtl ? "محاكاة شفافة وديناميكية لتفاصيل السن الطبيعي ببريق حي غير مصطنع." : "Dynamic translucency mimicking natural enamel vitality and shine."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 3: 7 LAB SERVICES (Full Width S-Curve Split)     */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Services List (Parchment Side) */}
            <div
              className={`lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none ${
                isRtl ? "lg:pr-8 xl:pr-14 lg:pl-6" : "lg:pl-8 xl:pl-14 lg:pr-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {isRtl ? "خدمات المعمل الرقمي" : "OUR LAB SERVICES"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
                {t("servicesHeading")}
              </h2>
              <p className="text-xs sm:text-sm text-[#955904] font-mono mb-6 uppercase tracking-wider">
                {isRtl ? "صنعت بدقة • صممت للتميز" : "Crafted with Precision. Designed for Excellence."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.raw("services")?.map((service: { title: string; desc: string }, idx: number) => {
                  const Icon = serviceIcons[idx] || Sparkles;
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
                          {service.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#2A3B56]/80 font-body leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                  alt="Swiss Dental Veneers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
                  <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                    Ultra-Thin Swiss Veneers • High-End Aesthetics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 4: MATERIALS & GALLERY (Full Width S-Curve Split) */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

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

      

      {/* ======================================================== */}
      {/* SECTION 5: CLOSING ACTION (Full Width S-Curve Split)     */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-xl backdrop-blur-md">
            <p className="text-base sm:text-xl md:text-2xl font-bold text-[#0F266A] font-display mb-6">
              {t("closingCopy")}
            </p>

            <Link
              href="/for-dentists#enquiry"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t("closingCta")}</span>
              <ArrowIcon className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
