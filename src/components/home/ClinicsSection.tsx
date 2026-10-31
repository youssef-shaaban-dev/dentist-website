"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
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
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge & Subtitle Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 2. TextSplit Scrub for Main Headline
      const titleWords = titleRef.current?.querySelectorAll(".split-title-word");
      if (titleWords && titleWords.length > 0) {
        gsap.to(titleWords, {
          y: "0%",
          opacity: 1,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });
      }

      // 3. Clinics Cards Stagger
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clinics"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Royal Ambient Light */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C8A232]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#022256]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-xs mb-3.5">
            <Building className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#012968] mb-3.5 leading-tight"
          >
            <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6782] font-body leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 3 PRESTIGIOUS ARCHITECTURAL BRANCH SHOWCASES                   */}
        {/* ============================================================== */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {branchesData.map((branch, idx) => {
            const branchName = t(`${branch.key}.name`);
            const branchArea = t(`${branch.key}.area`);
            const branchHours = t(`${branch.key}.hours`);
            const branchPhone = t(`${branch.key}.phone`);
            const branchCta = t(`${branch.key}.cta`);

            // Pre-filled WhatsApp direct booking link
            const branchWhatsAppUrl = `https://wa.me/201008901234?text=${encodeURIComponent(
              locale === "ar"
                ? `مرحباً، أود حجز موعد في (${branchName}) في عيادات ماغنيفيسنت سمايل.`
                : locale === "fr"
                ? `Bonjour, je souhaite réserver une consultation dans votre succursale de (${branchName}) chez Magnificent Smile.`
                : locale === "ru"
                ? `Здравствуйте, хочу записаться на приём в филиал (${branchName}) клиники Magnificent Smile.`
                : `Hello, I would like to book an appointment at (${branchName}) at Magnificent Smile Clinics.`
            )}`;

            return (
              <div
                key={branch.key}
                className="group relative rounded-3xl bg-white border-2 border-[#C8A232]/35 hover:border-[#C8A232] overflow-hidden shadow-[0_15px_45px_rgba(2,34,86,0.06)] hover:shadow-[0_25px_65px_rgba(200,162,50,0.18)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#955904] via-[#DFBF57] to-[#955904]" />

                {/* 1. High-Resolution Architectural Photography Header */}
                <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-[#022256]">
                  <Image
                    src={branch.image}
                    alt={branchName}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={idx === 0}
                  />

                  {/* Elegant Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/30 via-transparent to-[#C8A232]/20 pointer-events-none" />

                  {/* Top Badges: Branch Number & Open Now Status */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[10px] sm:text-xs font-mono font-bold text-[#955904] shadow-md backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />
                      <span>{isRtl ? "مفتوح الآن" : "OPEN NOW"}</span>
                    </span>

                    <span className="text-xs font-mono font-bold text-white bg-[#012968]/90 border border-white/20 px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Text Over Image: Branch Name & Prestige Tag */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold block mb-1">
                      {isRtl ? branch.tagAr : branch.tagEn}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-snug drop-shadow-sm">
                      {branchName}
                    </h3>
                  </div>
                </div>

                {/* 2. Branch Logistics & Verified Features */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Address Line with Navigation Map Link */}
                    <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-[#C8A232]/20 mb-3.5">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <MapPin className="w-4 h-4 text-[#955904] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-[#012968] leading-snug">
                          {branchArea}
                        </span>
                      </div>

                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#955904] hover:text-[#012968] shrink-0 hover:underline cursor-pointer"
                        title={isRtl ? "عرض على الخريطة" : "View Map"}
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#C8A232]" />
                        <span>{isRtl ? "الخريطة" : "Map"}</span>
                      </a>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-center gap-2.5 text-xs text-[#5B6782] mb-3 font-body">
                      <Clock className="w-4 h-4 text-[#C8A232] shrink-0" />
                      <span>{branchHours}</span>
                    </div>

                    {/* Direct Telephone Link */}
                    <div className="flex items-center gap-2.5 text-xs text-[#5B6782] mb-5 font-body">
                      <Phone className="w-4 h-4 text-[#C8A232] shrink-0" />
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="font-mono font-bold text-[#012968] hover:text-[#955904] transition-colors"
                        dir="ltr"
                      >
                        {branchPhone}
                      </a>
                    </div>

                    {/* 3 Verified Distinction Highlights for this Branch */}
                    <div className="space-y-2 mb-6 p-3 rounded-2xl bg-[#FAF8F5] border border-[#C8A232]/25">
                      {(isRtl ? branch.perksAr : branch.perksEn).map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#012968]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#955904] shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Action Buttons: Direct WhatsApp Booking + In-Clinic Jump */}
                  <div className="flex flex-col gap-2 pt-2">
                    {/* Primary VIP WhatsApp Booking */}
                    <a
                      href={branchWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(200,162,50,0.3)] hover:shadow-[0_6px_22px_rgba(200,162,50,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{branchCta}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </a>

                    {/* Secondary: Book Online Jump */}
                    <a
                      href="#book"
                      className="w-full py-2.5 rounded-xl border border-[#C8A232]/50 bg-white hover:bg-[#FAF8F5] text-[#012968] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <Building className="w-3.5 h-3.5 text-[#955904]" />
                      <span>{isRtl ? "حجز موعد عبر الاستمارة" : "Book via Web Form"}</span>
                    </a>
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
