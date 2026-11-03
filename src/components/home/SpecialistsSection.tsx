"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Award,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  Crown,
} from "lucide-react";

interface DoctorItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  credentials: string[];
  image: string;
  fellowshipAr: string;
  fellowshipEn: string;
}

export function SpecialistsSection() {
  const t = useTranslations("doctors");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [activeDoctorIdx, setActiveDoctorIdx] = useState<number>(0);

  const doctorsList: DoctorItem[] = [
    {
      id: "dr-khalil",
      name: t("list.0.name"),
      role: t("list.0.role"),
      experience: t("list.0.experience"),
      credentials: [
        t("list.0.credentials.0"),
        t("list.0.credentials.1"),
        t("list.0.credentials.2"),
      ],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85",
      fellowshipAr: "زمالة الكلية البريطانية للجراحين (RCSEd) • زراعة الأسنان الرقمية",
      fellowshipEn: "Fellow of Royal College of Surgeons (RCSEd) • 3D Guided Implants",
    },
    {
      id: "dr-sarah",
      name: t("list.1.name"),
      role: t("list.1.role"),
      experience: t("list.1.experience"),
      credentials: [
        t("list.1.credentials.0"),
        t("list.1.credentials.1"),
        t("list.1.credentials.2"),
      ],
      image: "https://images.unsplash.com/photo-1594824813576-905786df442a?auto=format&fit=crop&w=1200&q=85",
      fellowshipAr: "ماجستير تجميل الأسنان • جامعة جنيف السويسرية",
      fellowshipEn: "Master of Aesthetic Dentistry • University of Geneva",
    },
    {
      id: "dr-tarek",
      name: t("list.2.name"),
      role: t("list.2.role"),
      experience: t("list.2.experience"),
      credentials: [
        t("list.2.credentials.0"),
        t("list.2.credentials.1"),
        t("list.2.credentials.2"),
      ],
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=85",
      fellowshipAr: "البورد الألماني في تقويم الأسنان الشفاف",
      fellowshipEn: "German Board in Invisible Orthodontics (Aligners)",
    },
  ];

  const currentDoctor = doctorsList[activeDoctorIdx] || doctorsList[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Text Entrance
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

      // 2. Doctor Visual Entrance
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

  const whatsappMessage =
    locale === "ar"
      ? `مرحباً، أود حجز موعد استشارة مع (${currentDoctor.name} - ${currentDoctor.role}) في عيادات ماغنيفيسنت سمايل.`
      : locale === "fr"
      ? `Bonjour, je souhaite réserver une consultation avec (${currentDoctor.name} - ${currentDoctor.role}) chez Magnificent Smile.`
      : locale === "ru"
      ? `Здравствуйте, хочу записаться на консультацию к (${currentDoctor.name} - ${currentDoctor.role}).`
      : `Hello, I would like to book a consultation with (${currentDoctor.name} - ${currentDoctor.role}) at Magnificent Smile Clinics.`;

  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      ref={sectionRef}
      id="doctors"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Split Section Background: Left is Royal Blue | Right is Warm Gold */}
      <SplitSectionBackground />

      {/* 2. Content Grid */}
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
                <Award className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {isRtl ? "فريق الاستشاريين ونخبة الأطباء" : "SENIOR CONSULTANTS & SPECIALISTS"}
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
                {currentDoctor.name}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#4A5E7B] font-body leading-relaxed mb-6">
              {t("subtitle")}
            </p>

            {/* 3 Doctor Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-sm mb-6">
              {doctorsList.map((doc, idx) => {
                const isSelected = activeDoctorIdx === idx;

                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveDoctorIdx(idx)}
                    className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#012052] text-white shadow-md scale-102"
                        : "text-[#4A5E7B] hover:text-[#012052] hover:bg-[#FAF1DC]/50"
                    }`}
                  >
                    <span className="block truncate">{doc.name.split(" ")[1] || doc.name}</span>
                    <span className="text-[10px] opacity-75 font-mono block truncate">{doc.role.split("•")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Doctor Credentials Dossier Card */}
            <div className="p-5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C8A232]/25">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F266A] font-display">
                    {currentDoctor.name}
                  </h3>
                  <span className="text-xs text-[#9A5F13] font-semibold font-body">
                    {currentDoctor.role}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-xs font-bold font-mono text-[#9A5F13]">
                  {currentDoctor.experience}
                </span>
              </div>

              {/* 3 Credentials Bullets */}
              <div className="space-y-2.5 mb-4">
                {currentDoctor.credentials.map((cred, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F266A]">
                    <div className="w-4 h-4 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-2.5 h-2.5" />
                    </div>
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Fellowship Stamp */}
              <div className="pt-3 border-t border-[#C8A232]/20 flex items-center gap-2 text-xs font-mono text-[#9A5F13]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="font-semibold">
                  {isRtl ? currentDoctor.fellowshipAr : currentDoctor.fellowshipEn}
                </span>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>{isRtl ? "احجز موعد كشف مع الاستشاري" : "Book Clinical Consultation"}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </a>

              <a
                href="#clinics"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <span>{isRtl ? "مواعيد العيادات" : "Clinic Schedules"}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-[#9A5F13]" />
              </a>
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): Balanced 6 Cols on desktop */}
          {/* Centered comfortably inside the Royal Blue half with max-w-[380px], keeping >80px clearance to the ribbon */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              
              {/* Doctor Portrait Luxury Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#C8A232]/70 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#011438] group">
                
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-1" />

                {/* Photo Viewport */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#022256]">
                  <Image
                    key={currentDoctor.id}
                    src={currentDoctor.image}
                    alt={currentDoctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010E24] via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[11px] font-mono font-bold text-[#9A5F13] shadow-md backdrop-blur-md">
                      <Stethoscope className="w-3.5 h-3.5 text-[#9A5F13]" />
                      <span>{isRtl ? "استشاري معتمد" : "Senior Consultant"}</span>
                    </span>

                    <span className="text-xs font-mono font-bold text-white bg-[#012052]/90 border border-white/20 px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                      0{activeDoctorIdx + 1}
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold block mb-1">
                      MAGNIFICENT SMILE CLINICS
                    </span>
                    <h3 className="text-lg font-bold font-display text-white leading-snug drop-shadow-sm">
                      {currentDoctor.name}
                    </h3>
                  </div>
                </div>

                {/* Hesy-Ra Seal Footer */}
                <div className="px-4 py-2.5 bg-[#010F28] border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-[11px] font-mono">
                  <span>CLINICAL EXCELLENCE</span>
                  <span className="text-white/60">
                    {currentDoctor.role.split("•")[0]}
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
