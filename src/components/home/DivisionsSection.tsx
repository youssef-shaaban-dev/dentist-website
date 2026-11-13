"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState<number>(0);

  const divisions = [
    {
      id: "clinics",
      num: "01",
      icon: Building2,
      badge: isRtl ? "عيادات الأسنان التخصصية" : "DENTAL CLINICS",
      title: t("clinics.title"),
      copy: t("clinics.copy"),
      cta: t("clinics.cta"),
      href: "/treatments",
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
      href: "/aligners",
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
      href: "/laboratory",
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

  const current = divisions[activeIdx] || divisions[0];
  const CurrentIcon = current.icon;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
      id="divisions"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {t("badge")}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-3">
              <span className="block text-[#0F266A]">
                {t("headline")}
              </span>
              <span className="block text-[#9A5F13] text-xl sm:text-2xl lg:text-3xl mt-1">
                {current.title}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {current.copy}
            </p>

            {/* Division Selection Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {divisions.map((div, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold font-display transition-all duration-300 border cursor-pointer shadow-xs active:scale-95 ${
                      isSelected
                        ? "bg-[#012052] text-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/30 scale-102"
                        : "bg-white/90 text-[#4A5E7B] border-[#C8A232]/35 hover:border-[#C8A232] hover:bg-[#FAF1DC]/50 hover:text-[#012052]"
                    }`}
                  >
                    <span>{div.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Division Specs Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6">
              <div className="space-y-2.5">
                {current.perks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#0F266A]">
                    <div className="w-4 h-4 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <span>{current.cta}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Desktop */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 w-full ${
              isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
            }`}
          >
            <div className="w-full max-w-[420px] xl:max-w-[440px] mx-auto">
              {/* Luxury Gold Framed Showcase Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Gold Crest Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3" />

                {/* Photo Canvas */}
                <div className="relative h-72 sm:h-80 md:h-[370px] w-full rounded-2xl overflow-hidden select-none border border-[#DFBF57]/40 bg-[#020B1D] shadow-inner">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover object-center transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                      <CurrentIcon className="w-3.5 h-3.5 text-[#DFBF57]" />
                      <span>{current.badge}</span>
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/65 backdrop-blur-md border border-[#C8A232]/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#DFBF57] block">MAGNIFICENT SMILE</span>
                      <span className="text-xs font-bold text-white">{current.title}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-white/80">{current.num}</span>
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
