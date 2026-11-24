"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
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

export function TreatmentsSpecialtiesSection() {
  const t = useTranslations("treatmentsPage");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

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

  return (
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
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DFBF57]" />
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
                  href={`/${locale}/clinics?treatment=vip#booking`}
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

        {/* 8 Treatments Grid */}
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
                      href={`/${locale}/clinics#booking`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-body text-[#955904] hover:text-[#0F266A] transition-colors"
                    >
                      <span>{isRtl ? "طلب استشارة" : "Request Visit"}</span>
                      <ArrowIcon className="w-3 h-3" />
                    </Link>

                    {treatment.hasAlignersLink && (
                      <Link
                        href={`/${locale}/aligners`}
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
  );
}
