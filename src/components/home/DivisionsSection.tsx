"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Building2,
  Layers,
  Cpu,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function DivisionsSection() {
  const t = useTranslations("divisions");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const divisions = [
    {
      id: "clinics",
      num: "01",
      icon: Building2,
      badge: isRtl ? "عيادات الأسنان التخصصية" : "DENTAL CLINICS",
      title: t("clinics.title"),
      copy: t("clinics.copy"),
      cta: t("clinics.cta"),
      href: `/${locale}/treatments`,
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      perks: isRtl
        ? [
            "٣ فروع في الغردقة، الشيخ زايد، وشارع الأهرام بالجيزة",
            "٨ تخصصات طبية دقيقة بإشراف نخبة من الاستشاريين",
            "أحدث أجهزة التشخيص والمسح الرقمي ثلاثي الأبعاد",
          ]
        : [
            "3 Premier clinics in Hurghada, Sheikh Zayed & Giza",
            "8 Dedicated dental specialties guided by top consultants",
            "State-of-the-art 3D CBCT diagnostic imaging",
          ],
    },
    {
      id: "aligners",
      num: "02",
      icon: Layers,
      badge: isRtl ? "منظومة التقويم الشفاف" : "THE MAGNIFICENT ALIGNERS",
      title: t("aligners.title"),
      copy: t("aligners.copy"),
      cta: t("aligners.cta"),
      href: `/${locale}/aligners`,
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
      perks: isRtl
        ? [
            "تقويم شفاف بالكامل بدون أي أسلاك معدنية ظاهرة",
            "قابل للإزالة بسهولة عند تناول الطعام والعناية اليومية",
            "تصميم رقمي ثلاثي الأبعاد مخصص لكل مريض",
          ]
        : [
            "100% Crystal clear aligners without visible wires",
            "Fully removable for meals and daily oral hygiene",
            "Custom digital 3D planning tailored to your bite",
          ],
    },
    {
      id: "lab",
      num: "03",
      icon: Cpu,
      badge: isRtl ? "معمل الأسنان الرقمي" : "MAGNIFICENT SMILE LAB",
      title: t("lab.title"),
      copy: t("lab.copy"),
      cta: t("lab.cta"),
      href: `/${locale}/laboratory`,
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
      perks: isRtl
        ? [
            "روبوتات تفريز ألمانية وسويسرية خماسية المحاور 5-Axis",
            "خامات زركونيا فائقة الصلابة وعدسات فينير E.max الأصلية",
            "تصميم وتعويضات رقمية سريعة بالتعاون مع الأطباء",
          ]
        : [
            "5-Axis Swiss & German robotic CAD/CAM milling units",
            "Ultra-thin Swiss veneers & authentic multilayer E.max",
            "Direct digital synergy and fast turnaround for clinicians",
          ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="divisions"
      className={`relative py-20 sm:py-28 px-4 sm:px-6 ${
        isRtl ? "lg:pr-32 xl:pr-36 lg:pl-12" : "lg:pl-32 xl:pl-36 lg:pr-12"
      } overflow-hidden z-20 shadow-2xl`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      {/* 2. Content */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          {/* Category Kicker Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/85 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                {t("badge")}
              </span>
            </div>
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-display leading-[1.28] mb-3">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t("headline")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#FAF1DD]/90 leading-relaxed max-w-2xl mx-auto font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            {t("subheadline")}
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {divisions.map((div) => {
            const DivIcon = div.icon;
            return (
              <div
                key={div.id}
                className="rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
              >
                {/* Gold Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

                {/* Image Frame */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden select-none border-b border-[#DFBF57]/40 bg-[#020B1D]">
                  <Image
                    src={div.image}
                    alt={div.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Badge overlay */}
                  <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                      <DivIcon className="w-3.5 h-3.5 text-[#DFBF57]" />
                      <span>{div.badge}</span>
                    </div>
                  </div>

                  {/* Number overlay */}
                  <div className={`absolute bottom-3 ${isRtl ? "left-3" : "right-3"}`}>
                    <span className="text-xs font-mono font-bold text-white/80">{div.num}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="bg-[#FCFAF5] rounded-b-2xl p-5 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 flex items-center justify-center shrink-0">
                      <DivIcon className="w-4 h-4 text-[#9A5F13]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0F266A]">
                      {div.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#2A3B56] leading-relaxed mb-4 font-body">
                    {div.copy}
                  </p>

                  {/* Perks List */}
                  <div className="space-y-2.5 mb-5 flex-1">
                    {div.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#0F266A]">
                        <div className="w-4 h-4 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={div.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer w-full"
                  >
                    <span>{div.cta}</span>
                    <ArrowIcon className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
