"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { PatientVideoCard } from "@/components/ui/PatientVideoCard";

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
  Video,
  Play,
  Crown,
  Clock,
  Users,
  Building2,
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
  const { isRtl, locale } = useLanguage();
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
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
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
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
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
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
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

  // Real Verified Clinical Cases from the Doctor
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

              <div className="flex flex-wrap items-center gap-4">
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
                  loading="eager"
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

          {/* ======================================================== */}
          {/* VIP EXECUTIVE EXPERIENCE CARD (Standout, Luxe & Chic)    */}
          {/* ======================================================== */}
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-[#020B1D] via-[#051538] to-[#0A255C] border-2 border-[#DFBF57] shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(223,191,87,0.22)] p-6 sm:p-8 lg:p-10 relative overflow-hidden backdrop-blur-xl group hover:border-[#F6E29F] transition-all duration-500">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#DFBF57]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0F266A]/40 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Visual Showcase (5 Cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0A1128] border-2 border-[#DFBF57]/80 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85"
                    alt={t("vipService.title")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-[#020B1D]/20 to-transparent" />

                  {/* Top VIP Badge on Image */}
                  <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} z-10`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#020B1D]/90 border border-[#DFBF57] text-[#DFBF57] text-xs font-mono font-black shadow-lg backdrop-blur-md">
                      <Crown className="w-3.5 h-3.5 fill-[#DFBF57]" />
                      <span>VIP SUITE</span>
                    </span>
                  </div>

                  {/* Bottom Express Pill on Image */}
                  <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-[#020B1D]/85 backdrop-blur-md border border-[#DFBF57]/50 text-center shadow-lg">
                    <span className="text-xs font-mono font-bold text-[#DFBF57] flex items-center justify-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#DFBF57]" />
                      <span>{t("vipService.tag")}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Content & 3 VIP Pillars (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#DFBF57] via-[#F6E29F] to-[#DFBF57] text-[#020B1D] font-mono font-black text-xs shadow-md">
                    <Crown className="w-4 h-4 fill-[#020B1D]" />
                    <span>{t("vipService.badge")}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57]/60 text-[#DFBF57] font-mono font-bold text-xs shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                    <span>{t("vipService.availability")}</span>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-display text-white mb-2 leading-tight">
                  {t("vipService.title")}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-[#FAF1DD]/85 font-body leading-relaxed mb-6">
                  {t("vipService.subtitle")}
                </p>

                {/* 3 VIP Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                  {/* Pillar 1: Multidisciplinary Team */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-[#DFBF57]/30 hover:border-[#DFBF57] transition-all backdrop-blur-xs flex flex-col justify-between group/pillar">
                    <div className="w-8 h-8 rounded-xl bg-[#DFBF57]/15 border border-[#DFBF57]/40 flex items-center justify-center mb-2.5 text-[#DFBF57] group-hover/pillar:scale-110 transition-transform">
                      <Users className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold font-display text-white mb-1 group-hover/pillar:text-[#DFBF57] transition-colors">
                      {t("vipService.features.team.title")}
                    </h4>
                    <p className="text-[11px] text-[#FAF1DD]/70 font-body leading-relaxed">
                      {t("vipService.features.team.desc")}
                    </p>
                  </div>

                  {/* Pillar 2: Private Independent Suite */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-[#DFBF57]/30 hover:border-[#DFBF57] transition-all backdrop-blur-xs flex flex-col justify-between group/pillar">
                    <div className="w-8 h-8 rounded-xl bg-[#DFBF57]/15 border border-[#DFBF57]/40 flex items-center justify-center mb-2.5 text-[#DFBF57] group-hover/pillar:scale-110 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold font-display text-white mb-1 group-hover/pillar:text-[#DFBF57] transition-colors">
                      {t("vipService.features.room.title")}
                    </h4>
                    <p className="text-[11px] text-[#FAF1DD]/70 font-body leading-relaxed">
                      {t("vipService.features.room.desc")}
                    </p>
                  </div>

                  {/* Pillar 3: Prosthetics in 24 Hours */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-[#DFBF57]/30 hover:border-[#DFBF57] transition-all backdrop-blur-xs flex flex-col justify-between group/pillar">
                    <div className="w-8 h-8 rounded-xl bg-[#DFBF57]/15 border border-[#DFBF57]/40 flex items-center justify-center mb-2.5 text-[#DFBF57] group-hover/pillar:scale-110 transition-transform">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold font-display text-white mb-1 group-hover/pillar:text-[#DFBF57] transition-colors">
                      {t("vipService.features.speed.title")}
                    </h4>
                    <p className="text-[11px] text-[#FAF1DD]/70 font-body leading-relaxed">
                      {t("vipService.features.speed.desc")}
                    </p>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#DFBF57]/25">
                  <Link
                    href="/clinics?treatment=vip#booking"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#DFBF57] via-[#F6E29F] to-[#DFBF57] text-[#020B1D] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(223,191,87,0.4)] hover:shadow-[0_6px_35px_rgba(223,191,87,0.6)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  >
                    <Crown className="w-4 h-4 fill-[#020B1D]" />
                    <span>{t("vipService.cta")}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
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

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold font-display text-[#0F266A] mb-2 group-hover:text-[#955904] transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs text-[#2A3B56] font-body leading-relaxed mb-4">
                        {desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#C8A232]/25 flex items-center justify-between">
                      <Link
                        href="/clinics#booking"
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-body text-[#955904] hover:text-[#0F266A] transition-colors"
                      >
                        <span>{isRtl ? "طلب استشارة" : "Request Visit"}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </Link>

                      {treatment.hasAlignersLink && (
                        <Link
                          href="/aligners"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#0F266A] hover:text-[#955904] transition-colors bg-[#FAF1DC] px-2 py-0.5 rounded-full border border-[#C8A232]/35"
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

      {/* ======================================================== */}
      {/* SECTION 4: REAL PATIENT VIDEO STORIES (Full Width S-Curve) */}
      {/* ======================================================== */}
      <section id="video-testimonials" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs mb-3">
              <Video className="w-3.5 h-3.5 text-[#955904]" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                {isRtl ? "شهادات حية وموثقة" : "AUTHENTIC VIDEO STORIES"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-3">
              {isRtl ? "مرضانا يتحدثون عن تجربتهم الحقيقية" : "Hear Directly from Our Patients"}
            </h2>

            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "شاهد بالفيديو شهادات حقيقية لمرضى عياداتنا، يروون تفاصيل تجربتهم السريرية ونتائج ابتسامتهم قبل وبعد العلاج."
                : "Watch real patient testimonials discussing their smile journey, clinical experience, and before & after results."}
            </p>
          </div>

          {/* The 2 Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Video 1 */}
            <PatientVideoCard
              src="/1.mp4"
              title={
                isRtl
                  ? "تجربة إعادة بناء كامل الفك والزراعة الرقمية"
                  : "Full Arch Dental Rehabilitation Experience"
              }
              description={
                isRtl
                  ? "مريضنا يتحدث عن تجربته السريرية واستعادة الابتسامة ووظيفة الفك بالكامل بعد سنوات من المعاناة مع الأسنان."
                  : "Our patient shares his personal journey of restoring complete chewing function and confident smile after severe tooth wear."
              }
              patientTag={isRtl ? "مريض حقيقي • زراعة الفكين" : "Verified Patient • Full Arch"}
              treatmentType="All-on-6 Rehabilitation"
              highlights={[
                isRtl ? "استعادة القدرة على تناول الطعام بدون أي ألم" : "Restored full pain-free chewing ability",
                isRtl ? "تركيبة زركونيا سويسرية بمظهر طبيعي تماماً" : "100% natural looking Swiss Prettau zirconia",
                isRtl ? "متابعة طبية مستمرة ورعاية فائقة" : "Attentive post-procedure clinical care",
              ]}
            />

            {/* Video 2 */}
            <PatientVideoCard
              src="/2.mp4"
              title={
                isRtl
                  ? "تجربة ابتسامة هوليوود وتصميم الابتسامة الملكية"
                  : "Royal Hollywood Smile & Porcelain Veneers Experience"
              }
              description={
                isRtl
                  ? "قصة نجاح مريضنا في الحصول على ابتسامة متناسقة وطبيعية من خلال عدسات الفينير الرقمية بمعملنا الحصري."
                  : "An authentic patient testimonial celebrating a symmetrical, radiant Hollywood smile crafted with digital precision."
              }
              patientTag={isRtl ? "مريضة حقيقية • ابتسامة هوليوود" : "Verified Patient • Hollywood Smile"}
              treatmentType="E.max Porcelain Veneers"
              highlights={[
                isRtl ? "عدسات خزفية مصممة خصيصاً لتناسب ملامح الوجه" : "Custom veneers matched to facial aesthetics",
                isRtl ? "جلسات علاج مريحة دون أي تحسس أو ألم" : "Zero sensitivity with painless appointments",
                isRtl ? "نتائج فاقت التوقعات وثقة لا حدود لها" : "Exceeded expectations with unmatched confidence",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: CONSULTATION ACTION (Full Width S-Curve)      */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

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
