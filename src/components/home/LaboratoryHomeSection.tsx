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
  CheckCircle2,
} from "lucide-react";

interface LabService {
  title: string;
  desc: string;
}

export function LaboratoryHomeSection() {
  const t = useTranslations("labPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Real data from messages / PDF handoff
  const services: LabService[] = (t.raw("services") as LabService[]) || [];
  const techList: string[] = (t.raw("techList") as string[]) || [];

  // Match icons with top 4 official services
  const serviceIcons = [Scan, Crown, Layers, ShieldCheck];

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

      if (techRef.current) {
        gsap.fromTo(
          techRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: techRef.current,
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
      {/* Signature S-Curve Multi-Ribbon Split Background (Variant A) */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-12">
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

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-display leading-[1.28] mb-3 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            {t("headline")}
          </h2>

          <p className="text-sm sm:text-base md:text-[17px] text-white/95 leading-relaxed max-w-2xl mx-auto font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] font-medium">
            {t("websiteCopy")}
          </p>
        </div>

        {/* Real Tech & Materials Bar from PDF */}
        {techList.length > 0 && (
          <div
            ref={techRef}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#011438]/90 border border-[#DFBF57]/40 text-[#FAF1DD] text-xs font-mono font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span>{t("techHeading")}:</span>
            </div>
            {techList.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs font-mono shadow-xs backdrop-blur-sm hover:border-[#9A5F13] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* 2-Column Content Showcase */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Services Grid (Top 4 Real Services from PDF) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {services.slice(0, 4).map((service, idx) => {
                const Icon = serviceIcons[idx % serviceIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FCFAF5]/95 border border-[#C8A232]/40 shadow-sm hover:border-[#C8A232] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#FAF1DC] border border-[#C8A232]/40 flex items-center justify-center text-[#9A5F13] mb-3 group-hover:bg-[#012052] group-hover:text-[#DFBF57] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold font-display text-[#0F266A] mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#2A3B56] leading-relaxed font-body">
                        {service.desc}
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

          {/* Visual Showcase (Featured Lab Craft & Director Card) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] h-full flex flex-col justify-between">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden select-none bg-[#020B1D]">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                  alt="Magnificent Smile Dental Lab Restorations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D] via-black/30 to-transparent" />

                {/* Badge on Visual */}
                <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-[#FAF1DD] text-[11px] font-bold shadow-md backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                    <span>{isRtl ? "معمل رقمي متكامل" : "Fully Digital CAD/CAM Lab"}</span>
                  </div>
                </div>
              </div>

              {/* Leadership & Precision Footer inside Card */}
              <div className="p-4 sm:p-5 bg-[#011438]/95 border-t border-[#C8A232]/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#DFBF57] shrink-0" />
                  <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                    {isRtl ? "إشراف هندسي وفني مباشر" : "DIRECT TECHNICAL SUPERVISION"}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold font-display text-white mb-1">
                  {t("managerName")}
                </h4>
                <p className="text-xs text-[#FAF1DD]/80 font-body">
                  {t("managerTitle")} — {isRtl ? "دقة ميكرونية 0.01 ملم وخامات معتمدة سويسرياً" : "0.01mm Precision & Swiss Certified"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}