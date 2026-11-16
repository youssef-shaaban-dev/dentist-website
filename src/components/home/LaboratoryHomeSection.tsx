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
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Services Grid (Top 4 Real Services from PDF) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
              {services.slice(0, 4).map((service, idx) => {
                const Icon = serviceIcons[idx % serviceIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FCFAF5]/95 border border-[#C8A232]/40 shadow-xs hover:border-[#C8A232] hover:shadow-sm transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#FAF1DC] border border-[#C8A232]/40 flex items-center justify-center text-[#9A5F13] mb-2.5 group-hover:bg-[#012052] group-hover:text-[#DFBF57] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold font-display text-[#0F266A] mb-1 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#2A3B56] leading-relaxed font-body">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs Bar */}
            <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-xs">
              <Link
                href="/laboratory"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all font-body cursor-pointer"
              >
                <span>{isRtl ? "استكشف خدمات المعمل بالكامل" : "Explore Dental Laboratory"}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </Link>

              <Link
                href="/for-dentists"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <Stethoscope className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span>{isRtl ? "بوابة الأطباء والتعاون" : "For Dentists & Doctors"}</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase (Featured Lab Director Card — Mr. Abdulkader Dorgham, identical dimensions to SpecialistsSection) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[240px] sm:max-w-[250px] rounded-2xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] group transition-all duration-300 hover:border-[#DFBF57]">
              {/* Gold Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

              {/* Portrait Photo (Aspect 3/4 & dimensions identical to SpecialistsSection) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#020B1D]">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85"
                  alt={t("managerName")}
                  fill
                  sizes="(max-width: 640px) 240px, 250px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className={`absolute top-2.5 ${isRtl ? "left-2.5" : "right-2.5"} z-10`}>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#012052]/90 border border-[#DFBF57] text-[#DFBF57] text-[10px] font-mono font-bold shadow-md backdrop-blur-sm">
                    <Sparkles className="w-2.5 h-2.5 text-[#DFBF57]" />
                    <span>DIRECTOR</span>
                  </span>
                </div>
              </div>

              {/* Info Area (Matching SpecialistsSection typography and height) */}
              <div className="px-4 py-3.5 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <h3 className="text-sm sm:text-base font-bold font-display text-white truncate">
                    {t("managerName")}
                  </h3>
                </div>
                <p className="text-xs text-[#DFBF57] font-body truncate">
                  {t("managerTitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}