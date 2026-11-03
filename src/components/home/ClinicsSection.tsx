"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ArrowLeft,
  Building,
  Navigation,
  CheckCircle2,
} from "lucide-react";

interface BranchData {
  key: string;
  tagAr: string;
  tagEn: string;
  image: string;
  mapsUrl: string;
  phoneRaw: string;
  perksAr: string[];
  perksEn: string[];
}

const branchesData: BranchData[] = [
  {
    key: "branch1",
    tagAr: "المقر الرئيسي • صرح جراحي ومعمل متكامل",
    tagEn: "Main Flagship & Surgical Lab",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    mapsUrl: "https://maps.google.com/?q=Palm+Hills+Beverly+Hills+Sheikh+Zayed+Egypt",
    phoneRaw: "+201008901234",
    perksAr: ["مواقف سيارات VIP خاصة", "معمل رقمي ثلاثي الأبعاد ملحق", "أجنحة إفاقة فندقية خاصة"],
    perksEn: ["Private VIP Valet Parking", "In-House 3D Digital Lab", "Private Recovery Suites"],
  },
  {
    key: "branch2",
    tagAr: "مركز تجميل الأسنان • أجنحة DSD الرقمية",
    tagEn: "Aesthetic Center & Digital DSD",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    mapsUrl: "https://maps.google.com/?q=North+90th+Street+New+Cairo+Egypt",
    phoneRaw: "+201008905678",
    perksAr: ["تصميم الابتسامة الرقمي DSD", "خدمة سريعة لرجال الأعمال", "أحدث ماسحات ضوئية ميكرونية"],
    perksEn: ["Digital Smile Design (DSD)", "Executive Fast-Track Care", "Micron 3D Optical Scanners"],
  },
  {
    key: "branch3",
    tagAr: "الفرع الدبلوماسي • خصوصية واستشارات VIP",
    tagEn: "Diplomatic Quarter & VIP Privacy",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
    mapsUrl: "https://maps.google.com/?q=Street+250+Degla+Maadi+Cairo+Egypt",
    phoneRaw: "+201008909012",
    perksAr: ["خصوصية دبلوماسية مطلقة", "مساعد شخصي متعدد اللغات", "عيادة عائلية متكاملة"],
    perksEn: ["Complete Diplomatic Privacy", "Multilingual Patient Host", "Comprehensive Family Clinic"],
  },
];

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ClinicsSection() {
  const t = useTranslations("clinics");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [activeBranchIdx, setActiveBranchIdx] = useState<number>(0);
  const currentBranch = branchesData[activeBranchIdx] || branchesData[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Right Column Entrance
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Left Column Entrance
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRtl]);

  const currentBranchName = t(`${currentBranch.key}.name`);
  const currentBranchArea = t(`${currentBranch.key}.area`);
  const currentBranchHours = t(`${currentBranch.key}.hours`);
  const currentBranchPhone = t(`${currentBranch.key}.phone`);
  const currentBranchCta = t(`${currentBranch.key}.cta`);

  const branchWhatsAppUrl = `https://wa.me/201008901234?text=${encodeURIComponent(
    locale === "ar"
      ? `مرحباً، أود حجز موعد في (${currentBranchName}) في عيادات ماغنيفيسنت سمايل.`
      : locale === "fr"
      ? `Bonjour, je souhaite réserver une consultation dans votre succursale de (${currentBranchName}) chez Magnificent Smile.`
      : locale === "ru"
      ? `Здравствуйте, хочу записаться на приём в филиал (${currentBranchName}) клиники Magnificent Smile.`
      : `Hello, I would like to book an appointment at (${currentBranchName}) at Magnificent Smile Clinics.`
  )}`;

  return (
    <section
      ref={sectionRef}
      id="clinics"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground inverted={!isRtl} />

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* CONTENT COLUMN (Warm Gold / Parchment Side): Order 1 on Desktop */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex flex-col order-2 lg:order-1 p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 ${
              isRtl ? "lg:pr-10 xl:pr-14 lg:pl-6" : "lg:pl-10 xl:pl-14 lg:pr-6"
            }`}
          >
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Building className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {t("badge")}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-3">
              <span className="block text-[#0F266A]">
                {t("title")}
              </span>
              <span className="block text-[#9A5F13] text-xl sm:text-2xl lg:text-3xl mt-1">
                {currentBranchName}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {t("subtitle")}
            </p>

            {/* 3 Branch Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-sm mb-6 max-w-xl">
              {branchesData.map((branch, idx) => {
                const isSelected = activeBranchIdx === idx;
                const name = t(`${branch.key}.name`);

                return (
                  <button
                    key={branch.key}
                    type="button"
                    onClick={() => setActiveBranchIdx(idx)}
                    className={`py-2.5 px-2 text-center rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? "bg-[#012052] text-white shadow-md scale-102"
                        : "text-[#4A5E7B] hover:text-[#012052] hover:bg-[#FAF1DC]/50"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#DFBF57]">0{idx + 1}</span>
                    <span className="truncate max-w-full">{name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Branch Details Card */}
            <div className="p-5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6 max-w-xl">
              {/* Address & Map */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#C8A232]/20 mb-3.5">
                <div className="flex items-start gap-2.5 min-w-0">
                  <MapPin className="w-4 h-4 text-[#9A5F13] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-[#0F266A] leading-snug">
                    {currentBranchArea}
                  </span>
                </div>

                <a
                  href={currentBranch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#9A5F13] hover:text-[#0F266A] shrink-0 hover:underline cursor-pointer"
                  title={isRtl ? "عرض على الخريطة" : "View Map"}
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C8A232]" />
                  <span>{isRtl ? "الخريطة" : "Map"}</span>
                </a>
              </div>

              {/* Working Hours & Direct Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="flex items-center gap-2 text-[#5B6782]">
                  <Clock className="w-4 h-4 text-[#C8A232] shrink-0" />
                  <span>{currentBranchHours}</span>
                </div>

                <div className="flex items-center gap-2 text-[#5B6782]">
                  <Phone className="w-4 h-4 text-[#C8A232] shrink-0" />
                  <a
                    href={`tel:${currentBranch.phoneRaw}`}
                    className="font-mono font-bold text-[#0F266A] hover:text-[#9A5F13] transition-colors"
                    dir="ltr"
                  >
                    {currentBranchPhone}
                  </a>
                </div>
              </div>

              {/* 3 Distinction Highlights for this Branch */}
              <div className="space-y-2 p-3 rounded-xl bg-[#FCFAF5] border border-[#C8A232]/25">
                {(isRtl ? currentBranch.perksAr : currentBranch.perksEn).map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs font-bold text-[#0F266A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5F13] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={branchWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{currentBranchCta}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </a>

              <a
                href="#book"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <Building className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span>{isRtl ? "حجز موعد عبر الاستمارة" : "Book via Web Form"}</span>
              </a>
            </div>

          </div>

          {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Desktop */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 w-full ${
              isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
            }`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              
              {/* Luxury Architectural Frame */}
              <div className="group relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3.5" />

                {/* High-Resolution Architectural Photography Header */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-[#020B1D] border border-[#DFBF57]/30 shadow-inner">
                  <Image
                    src={currentBranch.image}
                    alt={currentBranchName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1D]/40 via-transparent to-[#DFBF57]/20 pointer-events-none" />

                  {/* Top Badges: Branch Number & Open Now Status */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[10px] sm:text-xs font-mono font-bold text-[#9A5F13] shadow-md backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />
                      <span>{isRtl ? "مفتوح الآن" : "OPEN NOW"}</span>
                    </span>

                    <span className="text-xs font-mono font-bold text-white bg-[#012052]/90 border border-white/20 px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                      0{activeBranchIdx + 1}
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold block mb-1">
                      {isRtl ? currentBranch.tagAr : currentBranch.tagEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white leading-snug drop-shadow-sm">
                      {currentBranchName}
                    </h3>
                  </div>
                </div>

                {/* Hesy-Ra Clinic Seal Footer */}
                <div className="mt-3.5 pt-3 border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>HESY-RA SANCTUARY</span>
                  </div>
                  <span className="text-[11px] text-white/70">
                    {isRtl ? "ضيافة ملكية خاصة" : "VIP Concierge Care"}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
