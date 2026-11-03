"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
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
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [activeKey, setActiveKey] = useState<string>("implants");

  const treatmentKeys = [
    { key: "implants", num: "01", icon: ShieldCheck },
    { key: "veneers", num: "02", icon: Sparkles },
    { key: "allon4", num: "03", icon: Zap },
    { key: "aligners", num: "04", icon: Smile },
    { key: "whitening", num: "05", icon: Eye },
    { key: "rootCanal", num: "06", icon: Activity },
  ];

  const activeSpec = treatmentSpecs[activeKey] || treatmentSpecs["implants"];
  const activeTitle = t(`items.${activeKey}.title`);
  const activeDesc = t(`items.${activeKey}.desc`);
  const activeTag = t(`items.${activeKey}.tag`);
  const activeItem = treatmentKeys.find((k) => k.key === activeKey) || treatmentKeys[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: isRtl ? 35 : -35 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRtl]);

  const whatsappMessage =
    locale === "ar"
      ? `مرحباً، أود حجز موعد استشارة بخصوص علاج (${activeTitle}) في عيادات ماغنيفيسنت سمايل.`
      : locale === "fr"
      ? `Bonjour, je souhaite réserver une consultation concernant (${activeTitle}) chez Magnificent Smile.`
      : locale === "ru"
      ? `Здравствуйте, хочу проконсультироваться по поводу (${activeTitle}) в клинике Magnificent Smile.`
      : `Hello, I would like to book a consultation regarding (${activeTitle}) at Magnificent Smile Clinics.`;

  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      ref={sectionRef}
      id="treatments"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground />

      {/* 2. Content Grid: Perfectly Aligned to Prevent Overlap */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* RIGHT COLUMN (Warm Gold / Parchment Side): Balanced 6 Cols on desktop */}
          {/* On mobile, wrapped in a luxury parchment card so dark blue text never bleeds into dark blue background */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex flex-col ${
              isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
            } p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 lg:pl-10 xl:pl-14`}
          >
            
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Stethoscope className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {t("badge")}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-4">
              <span className="block text-[#0F266A]">
                {t("title")}
              </span>
              <span className="block text-[#9A5F13] text-xl sm:text-2xl lg:text-3xl mt-1">
                {activeTitle}
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {activeDesc}
            </p>

            {/* 6 Interactive Treatment Selector Tabs in 2 Rows */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-sm mb-6">
              {treatmentKeys.map((item) => {
                const isSelected = item.key === activeKey;
                const Icon = item.icon;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveKey(item.key)}
                    className={`py-2 px-1 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? "bg-[#012052] text-white shadow-md scale-102"
                        : "text-[#4A5E7B] hover:text-[#012052] hover:bg-[#FAF1DC]/50"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#DFBF57]" : "text-[#9A5F13]"}`} />
                    <span className="truncate max-w-full font-mono">{item.num}</span>
                  </button>
                );
              })}
            </div>

            {/* 3 Clinical Guarantees for the Active Treatment */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-[#FCFAF5] border border-[#C8A232]/35">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#718096] font-mono block">المدة السريرية</span>
                  <span className="text-xs font-bold text-[#0F266A]">
                    {isRtl ? activeSpec.durationAr : activeSpec.durationEn}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#718096] font-mono block">التقنية المعتمدة</span>
                  <span className="text-xs font-bold text-[#0F266A]">
                    {isRtl ? activeSpec.techAr : activeSpec.techEn}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#718096] font-mono block">الضمان السريري</span>
                  <span className="text-xs font-bold text-[#0F266A]">
                    {isRtl ? activeSpec.warrantyAr : activeSpec.warrantyEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{t("bookBtn")}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </a>

              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <span>{t("viewAll")}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-[#9A5F13]" />
              </Link>
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): Balanced 6 Cols on desktop */}
          {/* Centered with max-w-[380px], keeping a >80px safe buffer away from the ribbon */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto rounded-3xl overflow-hidden border-2 border-[#DFBF57]/60 shadow-[0_20px_50px_rgba(0,0,0,0.65)] bg-[#011438] group">
              
              {/* Photo Viewport */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#022256]">
                <Image
                  key={activeKey}
                  src={activeSpec.image}
                  alt={activeTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010E24] via-black/40 to-transparent pointer-events-none" />

                {/* Floating Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[11px] font-mono font-bold text-[#9A5F13] shadow-md backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />
                    <span>{activeTag}</span>
                  </span>

                  <span className="text-xs font-mono font-bold text-white bg-[#011438]/90 border border-white/20 px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                    {activeItem.num} / 06
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#DFBF57] font-semibold block mb-0.5">
                    MAGNIFICENT CLINICAL STANDARD
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-tight">
                    {activeTitle}
                  </h3>
                </div>
              </div>

              {/* Card Bottom Meta Footer */}
              <div className="p-3.5 bg-[#010E24] border-t border-[#DFBF57]/30 flex items-center justify-between text-xs text-white/80">
                <span className="font-mono text-[#DFBF57] font-bold">100% DIGITAL WORKFLOW</span>
                <span className="text-[11px] text-white/60">SWISS & GERMAN MATERIALS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
