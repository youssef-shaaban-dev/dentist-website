"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Phone,
  CalendarCheck,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
} from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function BookConsultationSection() {
  const t = useTranslations("booking");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const defaultMessage =
    locale === "ar"
      ? "مرحباً، أود حجز موعد استشارة في عيادات ماغنيفيسنت سمايل."
      : locale === "fr"
      ? "Bonjour, je souhaite réserver une consultation chez Magnificent Smile."
      : locale === "ru"
      ? "Здравствуйте, я хочу записаться на приём в клинику Magnificent Smile."
      : "Hello, I would like to book a consultation at Magnificent Smile Clinics.";

  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(defaultMessage)}`;
  const cleanPhone = t("hotline").replace(/\s+/g, "");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Content Entrance
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

      // 2. Concierge Entrance
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

  return (
    <section
      ref={sectionRef}
      id="book"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t-2 border-[#C8A232]/40 overflow-hidden z-20 shadow-2xl"
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
            } p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md pl-4 sm:pl-6 lg:pl-10 xl:pl-14`}
          >
            {/* Category Kicker Badge */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/80 shadow-xs backdrop-blur-xs">
                <CalendarCheck className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {isRtl ? "حجز موعد استشارة طبية" : "SCHEDULE YOUR CONSULTATION"}
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
                {isRtl ? "استشارة مخصصة وراحة سريرية تامة" : "Personalized Care & Transparent Planning"}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-8 font-body">
              {t("subtitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                <span>{t("whatsappBtn")}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </a>

              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-[#C8A232]/50 bg-white hover:bg-[#FAF1DC]/60 text-[#0F266A] font-bold text-xs uppercase tracking-wider transition-all shadow-sm font-body"
              >
                <Phone className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <span>{t("phoneLabel")}</span>
                <span className="font-mono text-xs text-[#9A5F13]" dir="ltr">
                  {t("hotline")}
                </span>
              </a>
            </div>

            {/* 3 Quick VIP Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-[#C8A232]/35">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F266A]">
                <Clock className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <span>{isRtl ? "رد فوري خلال ٥ دقائق" : "5-Min Fast Reply"}</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F266A]">
                <ShieldCheck className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <span>{isRtl ? "تقييم أولي مع الاستشاري" : "Consultant Review"}</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F266A]">
                <Building className="w-4 h-4 text-[#9A5F13] shrink-0" />
                <span>{isRtl ? "أجنحة خاصة لراحة المرضى" : "Private Patient Suites"}</span>
              </div>
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
              
              {/* Medical Coordination Desk Card */}
              <div className="group relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden text-center">
                
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-6" />

                {/* Badge Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#DFBF57] via-[#C8A232] to-[#9A5F13] text-[#020B1D] flex items-center justify-center shadow-lg border-2 border-white/30 mb-4">
                  <CalendarCheck className="w-8 h-8" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
                  {isRtl ? "مكتب التنسيق الطبي وحجز المواعيد" : "Medical Coordination & Booking Desk"}
                </h3>

                <p className="text-xs text-white/75 font-body mb-5">
                  {isRtl
                    ? "فريق طبي وإداري مخصص لتنسيق مواعيدك والرد على كافة استفساراتك العلاجية بكل دقة وسرية."
                    : "Dedicated clinical coordinators to arrange your visit and answer all treatment questions."}
                </p>

                {/* Direct Phone Highlight */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-5">
                  <span className="text-[10px] font-mono text-[#DFBF57] tracking-wider uppercase block mb-1">
                    {isRtl ? "الخط الساخن المباشر للمراكز" : "Direct Center Hotline"}
                  </span>
                  <a
                    href={`tel:${cleanPhone}`}
                    className="text-lg sm:text-xl font-bold font-mono text-white hover:text-[#DFBF57] transition-colors"
                    dir="ltr"
                  >
                    {t("hotline")}
                  </a>
                </div>

                {/* 3 Perks */}
                <div className="space-y-2 text-start pt-4 border-t border-[#DFBF57]/25">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBF57] shrink-0" />
                    <span>{isRtl ? "مواقف سيارات خاصة وخدمة مساعدة الزوار" : "Convenient Valet & Parking"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBF57] shrink-0" />
                    <span>{isRtl ? "أجنحة خاصة لراحة المرضى والعائلات" : "Private Patient Waiting Suites"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBF57] shrink-0" />
                    <span>{isRtl ? "خدمة استشارية سريعة لرجال الأعمال والمغتربين" : "Executive Fast-Track Scheduling"}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
