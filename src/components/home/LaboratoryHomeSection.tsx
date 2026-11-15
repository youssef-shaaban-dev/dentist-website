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
  Cpu,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Scan,
  ShieldCheck,
  Layers,
  Wrench,
  Stethoscope,
  Crown,
} from "lucide-react";

export function LaboratoryHomeSection() {
  const t = useTranslations("labPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      title: isRtl ? "تفريز خماسي المحاور (5-Axis CAD/CAM)" : "5-Axis Robotic Milling",
      desc: isRtl
        ? "روبوتات ألمانية وسويسرية تضمن دقة ميكرونية 0.01 ملم وتطابقاً تاماً مع الأسنان."
        : "Ultra-precise Swiss & German milling ensuring 0.01mm micron-level fit.",
      icon: Cpu,
    },
    {
      title: isRtl ? "خامات E.max وزركونيا سويسرية أصلية" : "Genuine E.max & Zirconia",
      desc: isRtl
        ? "خامات معتمدة دولياً بأعلى درجات الصلابة، والشفافية الطبيعية، والمقاومة للتصبغ."
        : "Certified European ceramics with natural translucency and lifetime durability.",
      icon: Crown,
    },
    {
      title: isRtl ? "إشراف خبير مباشر (م. عبد القادر درغام)" : "Direct Leadership Oversight",
      desc: isRtl
        ? "إشراف دقيق من المدير العام للمعمل ومتابعة فنية مخصصة لكل حالة بالتعاون مع الأطباء."
        : "Guided by Lab Manager Abdulkader Dorgham with customized doctor synergy.",
      icon: ShieldCheck,
    },
    {
      title: isRtl ? "سرعة إنجاز فائقة للأطباء والعيادات" : "Fast Clinical Turnaround",
      desc: isRtl
        ? "تسليم الفينير والتركيبات خلال 24 - 48 ساعة مع شحن آمن لكافة المحافظات."
        : "Rapid 24-48 hr restoration delivery with nationwide secure dispatch.",
      icon: Wrench,
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

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
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
      id="laboratory-preview"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Signature Multi-Line 3D Ribbon Split Background (Variant A) */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/85 backdrop-blur-md shadow-md">
              <Cpu className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                {t("brandName")}
              </span>
            </div>
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-display leading-[1.28] mb-3 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            {t("headline")}
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] text-[#FAF1DD]/90 leading-relaxed max-w-2xl mx-auto font-body drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            {t("websiteCopy")}
          </p>
        </div>

        {/* 2-Column Content Showcase */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Capabilities Grid & Actions (Order 2 on Mobile, 1 on Desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between">
            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF5]/95 border border-[#C8A232]/35 shadow-sm hover:border-[#C8A232] transition-all hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#FAF1DC] border border-[#C8A232]/40 flex items-center justify-center text-[#9A5F13] mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold font-display text-[#0F266A] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#2A3B56] leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs Bar */}
            <div className="flex flex-wrap items-center gap-3 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-sm">
              <Link
                href="/laboratory"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <span>{isRtl ? "استكشف خدمات المعمل بالكامل" : "Explore Dental Laboratory"}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="/for-dentists"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <Stethoscope className="w-4 h-4 text-[#9A5F13]" />
                <span>{isRtl ? "بوابة الأطباء والتعاون" : "For Dentists & Doctors"}</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase (Featured Lab Image Card) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
              <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

              <div className="relative h-72 sm:h-80 md:h-[390px] w-full overflow-hidden select-none bg-[#020B1D]">
                <Image
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"
                  alt="Magnificent Smile Dental Lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Badges on Visual */}
                <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-white text-[11px] font-bold shadow-md backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                    <span>{isRtl ? "معمل رقمي متكامل" : "Fully Digital CAD/CAM Lab"}</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#C8A232]/40 text-center">
                  <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase block">
                    {isRtl ? "دقة وتصنيع رقمي سويسري وألماني" : "SWISS & GERMAN PRECISION"}
                  </span>
                  <span className="text-[11px] text-white/90 font-body">
                    {isRtl
                      ? "إشراف خبير: مستر عبد القادر درغام — المدير العام"
                      : "Directed by Mr. Abdulkader Dorgham — Lab General Manager"}
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
