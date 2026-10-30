"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Smile,
  Activity,
  Eye,
  Stethoscope,
  Clock,
  Cpu,
  Award,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface TreatmentSpec {
  durationAr: string;
  durationEn: string;
  techAr: string;
  techEn: string;
  warrantyAr: string;
  warrantyEn: string;
  image: string;
}

const treatmentSpecs: Record<string, TreatmentSpec> = {
  implants: {
    durationAr: "جلسة جراحية واحدة (تحميل فوري)",
    durationEn: "Single Session (Immediate Load)",
    techAr: "مسح ثلاثي الأبعاد 3D CBCT",
    techEn: "3D CBCT Computer-Guided Surgery",
    warrantyAr: "ضمان مدى الحياة موثق",
    warrantyEn: "Documented Lifetime Warranty",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
  },
  veneers: {
    durationAr: "جلستان (تصميم رقمي وتركيب نهائي)",
    durationEn: "2 Sessions (Digital Design & Bonding)",
    techAr: "سيراميك E-Max السويسري 0.3 مم",
    techEn: "Swiss E-Max Ceramic (0.3mm)",
    warrantyAr: "ضمان ثبات اللون ١٠ سنوات",
    warrantyEn: "10-Year Color Fidelity Guarantee",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
  },
  allon4: {
    durationAr: "٤٨ ساعة لفك ثابت كامل",
    durationEn: "48 Hours to Full Fixed Arch",
    techAr: "زركونيا Prettau الألمانية الموحدة",
    techEn: "German Prettau Monolithic Zirconia",
    warrantyAr: "استعادة كاملة لقوة المضغ ١٠٠٪",
    warrantyEn: "100% Masticatory Force Restoration",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
  },
  aligners: {
    durationAr: "٦ إلى ١٢ شهراً في المتوسط",
    durationEn: "6 to 12 Months Average",
    techAr: "معملنا الرقمي CAD/CAM المتكامل",
    techEn: "Proprietary In-House CAD/CAM Lab",
    warrantyAr: "متابعة رقمية ذكية مستمرة",
    warrantyEn: "Continuous Digital Progress Tracking",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=85",
  },
  whitening: {
    durationAr: "٤٥ دقيقة بتقنية الليزر البارد",
    durationEn: "45 Minutes Cold Laser Protocol",
    techAr: "ليزر فوتونا الطبي غير المؤلم",
    techEn: "Fotona Cold Medical Laser (Zero Sensitivity)",
    warrantyAr: "تفتيح يصل إلى ٨ درجات بأمان",
    warrantyEn: "Up to 8 Shades Safe Brightening",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
  },
  rootCanal: {
    durationAr: "جلسة واحدة مجهرية بدون ألم",
    durationEn: "Single Pain-Free Microscopic Session",
    techAr: "ميكروسكوب جراحي كهروبصري Zeiss",
    techEn: "Carl Zeiss Optical Surgical Microscope",
    warrantyAr: "نسبة نجاح سريرية تتجاوز ٩٩٪",
    warrantyEn: ">99% Clinical Success Rate",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1400&q=85",
  },
};

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SignatureTreatments() {
  const t = useTranslations("treatments");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const treatmentKeys = [
    { key: "implants", num: "01", icon: ShieldCheck },
    { key: "veneers", num: "02", icon: Smile },
    { key: "allon4", num: "03", icon: Activity },
    { key: "aligners", num: "04", icon: Sparkles },
    { key: "whitening", num: "05", icon: Zap },
    { key: "rootCanal", num: "06", icon: Eye },
  ];

  const [activeKey, setActiveKey] = useState<string>("implants");
  const activeIndex = treatmentKeys.findIndex((item) => item.key === activeKey);
  const activeItem = treatmentKeys[activeIndex] || treatmentKeys[0];
  const activeSpec = treatmentSpecs[activeItem.key];

  const activeTitle = t(`items.${activeItem.key}.title`);
  const activeDesc = t(`items.${activeItem.key}.desc`);
  const activeTag = t(`items.${activeItem.key}.tag`);

  // WhatsApp Pre-filled message tailored to the chosen treatment
  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(
    locale === "ar"
      ? `مرحباً، أود حجز موعد استشارة بخصوص علاج (${activeTitle}) في عيادات ماغنيفيسنت سمايل.`
      : locale === "fr"
      ? `Bonjour, je souhaite réserver une consultation pour le traitement (${activeTitle}) chez Magnificent Smile.`
      : locale === "ru"
      ? `Здравствуйте, я хочу записаться на приём по лечению (${activeTitle}) в клинику Magnificent Smile.`
      : `Hello, I would like to book a consultation regarding (${activeTitle}) at Magnificent Smile Clinics.`
  )}`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Stage Entrance
      if (stageRef.current) {
        gsap.fromTo(
          stageRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stageRef.current,
              start: "top 82%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % treatmentKeys.length;
    setActiveKey(treatmentKeys[nextIndex].key);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + treatmentKeys.length) % treatmentKeys.length;
    setActiveKey(treatmentKeys[prevIndex].key);
  };

  return (
    <section
      ref={sectionRef}
      id="treatments"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/25 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Royal Ambient Light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C8A232]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#022256]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Stethoscope className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#012968] mb-4">
            {t("title")}
          </h2>

          <p className="text-base sm:text-lg text-[#5B6782] font-body leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE HORIZONTAL SELECTOR PILLS (Fast & Intuitive on Phones) */}
        {/* ============================================================== */}
        <div className="lg:hidden mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
          {treatmentKeys.map((item) => {
            const isCurrent = item.key === activeKey;
            const itemTitle = t(`items.${item.key}.title`);

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveKey(item.key)}
                className={`snap-start shrink-0 px-4 py-2 rounded-full text-xs font-bold font-display transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                  isCurrent
                    ? "bg-[#012968] text-white border-[#C8A232] shadow-md scale-102"
                    : "bg-white text-[#5B6782] border-[#C8A232]/30 hover:bg-[#FAF8F5]"
                }`}
              >
                <span className={`font-mono text-[11px] ${isCurrent ? "text-[#DFBF57]" : "text-[#955904]"}`}>
                  {item.num}
                </span>
                <span>{itemTitle}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* THE ROYAL TREATMENT ATELIER (Desktop Split / Mobile Showcase) */}
        {/* ============================================================== */}
        <div
          ref={stageRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl border-2 border-[#C8A232]/35 p-4 sm:p-7 shadow-[0_25px_60px_rgba(2,34,86,0.08)] backdrop-blur-xl"
        >
          {/* A. The Left/Center Cinematic Stage Viewport (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Visual Cinematic Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#C8A232]/25 group">
              <Image
                src={activeSpec.image}
                alt={activeTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Cinematic Ambient Dark & Gold Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/30 via-transparent to-[#C8A232]/15 pointer-events-none" />

              {/* Floating Top Clinical Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#C8A232]/50 text-xs font-mono font-bold text-[#955904] shadow-md backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />
                  <span>{activeTag}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#022256]/90 text-white text-xs font-mono font-bold shadow-md border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <span>{activeItem.num} / 06</span>
                </span>
              </div>

              {/* Floating Bottom Metadata Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
                <span className="text-xs uppercase tracking-widest font-mono text-[#DFBF57] font-semibold mb-1 block">
                  MAGNIFICENT CLINICAL STANDARD
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display leading-tight text-white mb-2">
                  {activeTitle}
                </h3>
              </div>

              {/* Mobile Swipe Buttons overlaid on image */}
              <div className="lg:hidden absolute bottom-4 right-4 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/30 backdrop-blur-md cursor-pointer"
                  aria-label="Previous Treatment"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/30 backdrop-blur-md cursor-pointer"
                  aria-label="Next Treatment"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description & Clinical Specs Box */}
            <div className="mt-6 flex flex-col justify-between flex-grow">
              <p className="text-sm sm:text-base text-[#3D5A80] font-body leading-relaxed mb-5">
                {activeDesc}
              </p>

              {/* 3 Key Clinical Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#C8A232]/25 mb-6">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/20">
                  <Clock className="w-4 h-4 text-[#955904] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#5B6782] font-mono">المدة السريرية</span>
                    <span className="text-xs font-bold text-[#012968] line-clamp-1">
                      {isRtl ? activeSpec.durationAr : activeSpec.durationEn}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/20">
                  <Cpu className="w-4 h-4 text-[#955904] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#5B6782] font-mono">التقنية المعتمدة</span>
                    <span className="text-xs font-bold text-[#012968] line-clamp-1">
                      {isRtl ? activeSpec.techAr : activeSpec.techEn}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/20">
                  <Award className="w-4 h-4 text-[#955904] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#5B6782] font-mono">الضمان الملكي</span>
                    <span className="text-xs font-bold text-[#012968] line-clamp-1">
                      {isRtl ? activeSpec.warrantyAr : activeSpec.warrantyEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Action Hub (WhatsApp + On-page Book Jump) */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {/* 1. Primary Direct WhatsApp Consultation */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t("bookBtn")}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </a>

                {/* 2. On-Page Booking Form Jump */}
                <a
                  href="#book"
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#C8A232]/60 bg-white hover:bg-[#FAF8F5] text-[#012968] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>استشارة الطبيب بالعيادة</span>
                  <span className="text-[#955904]">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* B. The Right Interactive 6-Item Navigator (5 Cols on desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-2.5 border-s border-[#C8A232]/20 ps-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-[#955904] tracking-wider uppercase">
                فهرس العلاجات الملكية
              </span>
              <span className="text-xs font-mono text-[#5B6782]">اختر للاستعراض ✦</span>
            </div>

            {treatmentKeys.map((item) => {
              const isSelected = item.key === activeKey;
              const title = t(`items.${item.key}.title`);
              const tag = t(`items.${item.key}.tag`);
              const IconComp = item.icon;

              return (
                <div
                  key={item.key}
                  onClick={() => setActiveKey(item.key)}
                  onMouseEnter={() => setActiveKey(item.key)}
                  className={`group relative p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#FAF8F5] border-[#C8A232] shadow-md scale-102"
                      : "bg-white/70 border-transparent hover:border-[#C8A232]/30 hover:bg-[#FAF8F5]/60"
                  }`}
                >
                  {/* Left Side: Number, Icon & Title */}
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-sm font-bold font-mono transition-colors ${
                        isSelected ? "text-[#955904]" : "text-[#5B6782]"
                      }`}
                    >
                      {item.num}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#012968] text-[#DFBF57] shadow-sm"
                          : "bg-[#FAF8F5] text-[#5B6782] group-hover:text-[#955904]"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col">
                      <h4
                        className={`text-sm font-bold font-display transition-colors ${
                          isSelected ? "text-[#012968]" : "text-[#5B6782] group-hover:text-[#012968]"
                        }`}
                      >
                        {title}
                      </h4>
                      <span className="text-[11px] text-[#955904] font-mono">{tag}</span>
                    </div>
                  </div>

                  {/* Right Side: Active Arrow Indicator */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[#C8A232] text-white scale-110 shadow-sm"
                        : "text-[#5B6782]/40 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* View All Treatments CTA */}
        <div className="mt-14 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#C8A232] bg-white text-[#012968] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md hover:bg-[#FAF8F5] transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-[#955904]" />
            <span>{t("viewAll")}</span>
            <ArrowIcon className="w-4 h-4 text-[#955904]" />
          </a>
        </div>

      </div>
    </section>
  );
}
