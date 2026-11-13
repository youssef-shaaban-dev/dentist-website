"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

import {
  Layers,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  ArrowLeft,
  EyeOff,
  Unlock,
  Sparkle,
  Smile,
  CheckCircle,
  Plane,
  LineChart,
  ChevronDown,
  Stethoscope,
} from "lucide-react";

export default function AlignersPage() {
  const t = useTranslations("alignersPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const benefitIcons = [
    EyeOff,
    Unlock,
    Sparkle,
    Smile,
    CheckCircle,
    Plane,
    LineChart,
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
              className={`lg:col-span-6 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none ${
                isRtl ? "lg:pr-8 xl:pr-14 lg:pl-6" : "lg:pl-8 xl:pl-14 lg:pr-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit">
                <Layers className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  THE MAGNIFICENT ALIGNERS
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
                  href="/clinics?treatment=aligners#booking"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-white" />
                  <span>{t("bookCta")}</span>
                  <ArrowIcon className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="/for-dentists#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#FAF1DC]/50 transition-all shadow-xs"
                >
                  <Stethoscope className="w-4 h-4 text-[#955904]" />
                  <span>{isRtl ? "بوابة الأطباء" : "For Doctors"}</span>
                </Link>
              </div>
            </div>

            {/* Asset Column: Product Image (Royal Blue Side) */}
            <div
              className={`lg:col-span-6 relative flex justify-center items-center ${
                isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
              }`}
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)]">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
                  alt="The Magnificent Aligners"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
                  <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                    Crystal Clear • Advanced Polymer Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 2: 7 ADVANTAGES (Full Width S-Curve Split)       */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* 7 Advantages (Parchment Side) */}
            <div
              className={`lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none ${
                isRtl ? "lg:pr-8 xl:pr-14 lg:pl-6" : "lg:pl-8 xl:pl-14 lg:pr-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {isRtl ? "مميزات التقويم الشفاف" : "OUR ALIGNERS ADVANTAGES"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-6">
                {t("benefitsHeading")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.raw("benefits")?.map((b: { title: string; caption: string }, idx: number) => {
                  const Icon = benefitIcons[idx] || Sparkles;
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

            {/* Visual Product Showcase (Royal Blue Side) */}
            <div
              className={`lg:col-span-5 relative flex justify-center items-center ${
                isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
              }`}
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)]">
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
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 3: TREATMENT JOURNEY (Full Width S-Curve Split)  */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
              {t("journeyHeading")}
            </h2>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "خمس مراحل دقيقة ومدروسة رقمياً من التشخيص ثلاثي الأبعاد وحتى الحصول على الابتسامة المكتملة."
                : "Five precise, digitally planned milestones from 3D diagnostic scan to your complete smile."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {t.raw("journeySteps")?.map((step: { step: string; title: string; desc: string }, sIdx: number) => (
              <div
                key={sIdx}
                className="relative p-6 rounded-3xl bg-white/95 border border-[#C8A232]/35 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-mono text-[#955904] mb-2 block">
                    0{sIdx + 1}
                  </span>
                  <h3 className="text-sm font-bold font-display text-[#0F266A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#2A3B56]/80 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS (Full Width Split) */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
              {t("faqsHeading")}
            </h2>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "إجابات شافية ومباشرة حول مدة العلاج، والراحة اليومية، وكيفية العناية بالتقويم الشفاف."
                : "Clear clinical answers regarding treatment duration, daily comfort, and aligner care."}
            </p>
          </div>

          <div className="space-y-3">
            {t.raw("faqs")?.map((faq: { q: string; a: string }, fIdx: number) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-[#C8A232]/35 bg-white/95 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EE]/60 transition-colors"
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    <span className="text-sm sm:text-base font-bold font-display text-[#0F266A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#955904] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#2A3B56]/85 font-body leading-relaxed border-t border-[#C8A232]/15 pt-3"
                      dir={isRtl ? "rtl" : "ltr"}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 5: CLOSING ACTIONS (Full Width S-Curve Split)    */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Patient Card (Parchment Side) */}
          <div
            className={`lg:col-span-6 p-8 rounded-3xl bg-[#FCFAF5]/95 border-2 border-[#C8A232]/45 shadow-xl text-center flex flex-col justify-between h-full backdrop-blur-md ${
              isRtl ? "lg:pr-8" : "lg:pl-8"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[10px] font-mono text-[#955904] border border-[#C8A232]/40 mb-3">
                <Smile className="w-3.5 h-3.5" />
                <span>FOR PATIENTS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F266A] mb-3">
                {isRtl ? "ابدأ رحلة ابتسامتك الجديدة" : "Start Your Smile Journey"}
              </h3>
              <p className="text-xs sm:text-sm text-[#2A3B56] font-body mb-6 leading-relaxed">
                {isRtl
                  ? "احجز استشارة تقييم سريري مع أخصائي التقويم لتحديد الخطة المناسبة لحالتك بأحدث تقنيات المحاكاة ثلاثية الأبعاد."
                  : "Book a clinical assessment consultation to discover the ideal plan for your smile with 3D simulation."}
              </p>
            </div>
            <Link
              href="/clinics?treatment=aligners#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>{t("patientCta")}</span>
              <ArrowIcon className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Professional Card for Dentists (Royal Blue Side) */}
          <div
            className={`lg:col-span-6 p-8 rounded-3xl bg-[#03112E]/90 text-white border-2 border-[#C8A232]/60 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md text-center flex flex-col justify-between h-full ${
              isRtl ? "lg:pl-8" : "lg:pr-8"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-[#DFBF57] border border-[#DFBF57]/30 mb-3">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>FOR DENTAL PROFESSIONALS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                {t("dentistPrompt")}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] font-body mb-6 leading-relaxed">
                {isRtl
                  ? "منظومة تقويم شفافة مصنعة خصيصاً لعيادتك بخامات معتمدة وتخطيط سريري ومتابعة رقمية مستمرة."
                  : "Custom clear aligner manufacturing engineered for your clinic with certified polymers and digital planning."}
              </p>
            </div>
            <Link
              href="/for-dentists?service=aligners#enquiry"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0F266A] hover:bg-[#FAF1DC] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>{t("dentistCta")}</span>
              <ArrowIcon className="w-4 h-4 text-[#955904]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
