"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  Award,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface DoctorData {
  id: number;
  initials: string;
  image: string;
  fellowshipAr: string;
  fellowshipEn: string;
  subspecialtyAr: string;
  subspecialtyEn: string;
}

const doctorMetadata: DoctorData[] = [
  {
    id: 0,
    initials: "HM",
    // Dr. Hazem El-Minshawi - Verified Consultant Maxillofacial & Implant Surgeon
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85",
    fellowshipAr: "زمالة كلية الجراحين الملكية بلندن (FRCS)",
    fellowshipEn: "Fellow of Royal College of Surgeons London (FRCS)",
    subspecialtyAr: "جراحات الزرع الموجهة بالحاسوب وإعادة بناء عظام الفك",
    subspecialtyEn: "Computer-Guided Implantology & Bone Grafting Mastery",
  },
  {
    id: 1,
    initials: "RM",
    // Dr. Reem El-Mahdy - Verified Working Unsplash URL (Female Cosmetic Dentist & Veneers Specialist)
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
    fellowshipAr: "عضو الأكاديمية الأمريكية لتجميل الأسنان (AACD)",
    fellowshipEn: "Member of American Academy of Cosmetic Dentistry (AACD)",
    subspecialtyAr: "قشور E-Max الخزفية وتناغم الابتسامة مع قياسات الوجه",
    subspecialtyEn: "Micro-Thin E.max Veneers & Facial Harmony Architecture",
  },
  {
    id: 2,
    initials: "KS",
    // Dr. Karim El-Sherbini - Verified Consultant Orthodontics & Clear Aligners
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85",
    fellowshipAr: "زمالة تقويم الأسنان الملكية بإدنبرة (MOrth RCS)",
    fellowshipEn: "Royal College of Surgeons Edinburgh Orthodontics (MOrth)",
    subspecialtyAr: "التقويم الشفاف الذكي وتصحيح العضات المعقدة بدون جراحة",
    subspecialtyEn: "Digital Clear Aligners & Complex Non-Surgical Bite Correction",
  },
];

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SpecialistsSection() {
  const t = useTranslations("doctors");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const [activeDoctorIdx, setActiveDoctorIdx] = useState<number>(0);

  const doctorsList = [
    {
      ...doctorMetadata[0],
      name: t("list.0.name"),
      role: t("list.0.role"),
      credentials: t("list.0.credentials"),
      experience: t("list.0.experience"),
    },
    {
      ...doctorMetadata[1],
      name: t("list.1.name"),
      role: t("list.1.role"),
      credentials: t("list.1.credentials"),
      experience: t("list.1.experience"),
    },
    {
      ...doctorMetadata[2],
      name: t("list.2.name"),
      role: t("list.2.role"),
      credentials: t("list.2.credentials"),
      experience: t("list.2.experience"),
    },
  ];

  const currentDoctor = doctorsList[activeDoctorIdx] || doctorsList[0];

  // Pre-filled WhatsApp link with the specific doctor's title
  const doctorWhatsAppUrl = `https://wa.me/201008901234?text=${encodeURIComponent(
    locale === "ar"
      ? `مرحباً، أود حجز موعد استشارة مع (${currentDoctor.name} - ${currentDoctor.role}) في عيادات ماغنيفيسنت سمايل.`
      : locale === "fr"
      ? `Bonjour, je souhaite réserver une consultation avec (${currentDoctor.name} - ${currentDoctor.role}) chez Magnificent Smile.`
      : locale === "ru"
      ? `Здравствуйте, я хочу записаться на консультацию к (${currentDoctor.name} - ${currentDoctor.role}) в клинику Magnificent Smile.`
      : `Hello, I would like to book a consultation with (${currentDoctor.name} - ${currentDoctor.role}) at Magnificent Smile Clinics.`
  )}`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Showcase Container Entrance
      if (showcaseRef.current) {
        gsap.fromTo(
          showcaseRef.current,
          { opacity: 0, y: 30, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setActiveDoctorIdx((prev) => (prev + 1) % doctorsList.length);
  };

  const handlePrev = () => {
    setActiveDoctorIdx((prev) => (prev - 1 + doctorsList.length) % doctorsList.length);
  };

  return (
    <section
      ref={sectionRef}
      id="doctors"
      className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/25 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Royal Ambient Light */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#C8A232]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#022256]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header - Compact and Elegant */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A232]/40 bg-white shadow-xs mb-2.5">
            <Award className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-[11px] font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#012968] mb-2 leading-tight">
            {t("title")}
          </h2>

          <p className="text-xs sm:text-sm text-[#5B6782] font-body leading-relaxed line-clamp-2">
            {t("subtitle")}
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE DOCTOR SELECTOR TABS (Intuitive Thumb Navigation) */}
        {/* ============================================================== */}
        <div className="lg:hidden mb-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
          {doctorsList.map((doc, idx) => {
            const isSelected = idx === activeDoctorIdx;

            return (
              <button
                key={doc.id}
                type="button"
                onClick={() => setActiveDoctorIdx(idx)}
                className={`snap-start shrink-0 px-3.5 py-2 rounded-full text-xs font-bold font-display transition-all duration-300 border cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#012968] text-white border-[#C8A232] shadow-sm"
                    : "bg-white text-[#5B6782] border-[#C8A232]/30 hover:bg-[#FAF8F5]"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-[#DFBF57]" : "bg-[#C8A232]"}`} />
                <span>{doc.name}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* THE ROYAL MEDICAL FACULTY SHOWCASE (Desktop Spotlight Suite) */}
        {/* ============================================================== */}
        <div
          ref={showcaseRef}
          className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#C8A232]/35 p-4 sm:p-5 lg:p-6 shadow-[0_20px_50px_rgba(2,34,86,0.06)] backdrop-blur-xl"
        >
          {/* Main Interactive Stage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            
            {/* 1. Refined Doctor Portrait - Proportional Compact Height (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#C8A232]/40 bg-[#022256] group">
                <div
                  key={currentDoctor.id}
                  className="relative w-full h-full animate-in fade-in zoom-in-95 duration-400"
                >
                  <Image
                    src={currentDoctor.image}
                    alt={currentDoctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Elegant Gradient Shadowing */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/30 via-transparent to-[#C8A232]/15 pointer-events-none" />

                  {/* Golden Beam Wipe Animation on doctor change */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DFBF57]/30 to-transparent pointer-events-none animate-in slide-in-from-left duration-700" />

                  {/* Verified Clinical Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[10px] sm:text-xs font-mono font-bold text-[#955904] shadow-sm backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF57] animate-ping" />
                      <span>VERIFIED SENIOR CONSULTANT</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#022256]/90 text-white text-[10px] sm:text-xs font-mono font-bold shadow-sm border border-white/20">
                      <ShieldCheck className="w-3 h-3 text-[#DFBF57]" />
                      <span>{currentDoctor.initials}</span>
                    </span>
                  </div>

                  {/* Floating Experience Ribbon on Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white drop-shadow">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 border border-white/25 text-[11px] font-bold backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-[#DFBF57]" />
                      <span>{currentDoctor.experience}</span>
                    </div>

                    {/* Mobile Navigation Arrows */}
                    <div className="lg:hidden flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/30 backdrop-blur-md cursor-pointer active:scale-90 transition-transform"
                        aria-label="Previous Doctor"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/30 backdrop-blur-md cursor-pointer active:scale-90 transition-transform"
                        aria-label="Next Doctor"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Doctor Dossier & Clinical Authority (7 Cols) */}
            <div
              key={`bio-${currentDoctor.id}`}
              className="lg:col-span-7 flex flex-col justify-between animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div>
                {/* Prestige Sub-heading */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-[2px] bg-[#C8A232]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#955904]">
                    ROYAL CLINICAL FACULTY
                  </span>
                </div>

                {/* Doctor Name & Role */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[#012968] mb-0.5 leading-snug">
                  {currentDoctor.name}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-[#955904] font-mono mb-3.5">
                  {currentDoctor.role}
                </p>

                {/* 3 Pillars of Doctor's Authority - Sleek Compact Cards */}
                <div className="space-y-2 mb-4">
                  {/* Academic Credentials */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/25 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#012968] text-[#DFBF57] flex items-center justify-center shrink-0 shadow-xs">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#5B6782] font-semibold leading-tight">المؤهل الأكاديمي والزمالات</span>
                      <span className="text-xs sm:text-sm font-bold text-[#012968] leading-tight truncate">
                        {currentDoctor.credentials}
                      </span>
                    </div>
                  </div>

                  {/* International Fellowship */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/25 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#955904] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#5B6782] font-semibold leading-tight">الاعتماد الدولي الموثق</span>
                      <span className="text-xs sm:text-sm font-bold text-[#012968] leading-tight truncate">
                        {isRtl ? currentDoctor.fellowshipAr : currentDoctor.fellowshipEn}
                      </span>
                    </div>
                  </div>

                  {/* Core Clinical Focus */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#FAF8F5] border border-[#C8A232]/25 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#022256] text-[#DFBF57] flex items-center justify-center shrink-0 shadow-xs">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#5B6782] font-semibold leading-tight">التخصص الدقيق ومجال التميز</span>
                      <span className="text-xs sm:text-sm font-bold text-[#012968] leading-tight truncate">
                        {isRtl ? currentDoctor.subspecialtyAr : currentDoctor.subspecialtyEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Direct WhatsApp Consultation + On-page Book Jump */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-3 border-t border-[#C8A232]/25">
                {/* 1. Direct WhatsApp VIP Doctor Booking */}
                <a
                  href={doctorWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-2.5 sm:py-3 px-5 rounded-full bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(200,162,50,0.3)] hover:shadow-[0_6px_22px_rgba(200,162,50,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t("cta")}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </a>

                {/* 2. On-page Booking Form */}
                <a
                  href="#book"
                  className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full border border-[#C8A232]/60 bg-white hover:bg-[#FAF8F5] text-[#012968] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#955904]" />
                  <span>تأكيد موعد بالعيادة</span>
                </a>
              </div>
            </div>

          </div>

          {/* Desktop 3-Doctor Quick Switcher Deck (Bottom Row - Ultra Slim) */}
          <div className="hidden lg:grid grid-cols-3 gap-3 mt-4 pt-3.5 border-t border-[#C8A232]/20">
            {doctorsList.map((doc, idx) => {
              const isSelected = idx === activeDoctorIdx;

              return (
                <div
                  key={doc.id}
                  onClick={() => setActiveDoctorIdx(idx)}
                  className={`group p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-3 active:scale-98 ${
                    isSelected
                      ? "bg-[#FAF8F5] border-[#C8A232] shadow-xs ring-2 ring-[#C8A232]/40 scale-101"
                      : "bg-white/80 border-[#C8A232]/20 hover:border-[#C8A232]/50 hover:bg-[#FAF8F5]/60"
                  }`}
                >
                  {/* Doctor Thumbnail */}
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-[#C8A232]/40 shadow-xs">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="44px"
                      className={`object-cover object-top transition-all duration-300 ${
                        isSelected ? "grayscale-0 scale-105" : "grayscale-[40%] group-hover:grayscale-0"
                      }`}
                    />
                  </div>

                  {/* Doctor Quick Bio */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold text-[#955904]">{doc.initials}</span>
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-[#955904]" />}
                    </div>
                    <h4 className="text-xs font-bold font-display text-[#012968] truncate group-hover:text-[#955904] transition-colors">
                      {doc.name}
                    </h4>
                    <span className="text-[10px] text-[#5B6782] truncate font-body">
                      {doc.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
