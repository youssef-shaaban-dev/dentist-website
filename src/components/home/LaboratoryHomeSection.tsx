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
  Crown,
  Stethoscope,
} from "lucide-react";

interface LabService {
  title: string;
  desc: string;
}

export function LaboratoryHomeSection() {
  const t = useTranslations("labPage");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Real data from messages / PDF handoff
  const services: LabService[] = (t.raw("services") as LabService[]) || [];
  const techList: string[] = (t.raw("techList") as string[]) || [];

  const rawCopy = t("websiteCopy") || "";
  const copyLines = rawCopy.split("\n").map((l) => l.trim()).filter(Boolean);

  // Match icons with top 4 official services
  const serviceIcons = [Scan, Crown, Layers, ShieldCheck];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
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

      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
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
        {/* Section Header with Executive Obsidian Glass Backdrop for Perfect Readability */}
        <div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 rounded-3xl bg-gradient-to-b from-[#06193E]/95 via-[#03112E]/95 to-[#01091A]/95 border-2 border-[#C8A232]/70 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Top Gold Shimmer Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#DFBF57] to-transparent" />

          {/* Category Kicker Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[1px] w-6 sm:w-10 bg-[#DFBF57]/50" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/90 backdrop-blur-md shadow-md">
              <Cpu className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                {t("brandName")}
              </span>
            </div>
            <span className="h-[1px] w-6 sm:w-10 bg-[#DFBF57]/50" />
          </div>

          {/* Main Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display leading-[1.3] mb-5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {t("headline")}
          </h2>

          {/* Semantic, High-Contrast Description Content */}
          <div className="max-w-3xl mx-auto space-y-3 font-body text-center">
            {copyLines.map((line, idx) => {
              if (idx === 0) {
                // Hook / Tagline
                return (
                  <p
                    key={idx}
                    className="text-base sm:text-lg font-bold text-[#DFBF57] font-display tracking-wide"
                  >
                    {line}
                  </p>
                );
              }
              if (idx === copyLines.length - 1) {
                // Closing Signature
                return (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm md:text-base font-bold text-[#F6E29F] pt-3 border-t border-[#DFBF57]/20 tracking-wide"
                  >
                    {line}
                  </p>
                );
              }
              // Body paragraphs
              return (
                <p
                  key={idx}
                  className="text-xs sm:text-sm md:text-[15px] text-[#E2E8F0] leading-relaxed font-normal"
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* EXECUTIVE DIRECTOR SPOTLIGHT BANNER (Chic, Balanced & Clear) */}
        {/* ======================================================== */}
        <div
          ref={bannerRef}
          className="max-w-5xl mx-auto mb-8 sm:mb-10 rounded-3xl bg-gradient-to-r from-[#0B2456]/95 via-[#07193D]/95 to-[#020B1D]/95 border-2 border-[#C8A232]/80 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 group hover:border-[#DFBF57] transition-all duration-300"
        >
          {/* Framed Photo Container (Elegant tall portrait proportion) */}
          <div className="relative w-62 h-78 sm:w-60 sm:h-72 md:w-76 md:h-100 rounded-2xl overflow-hidden bg-[#020B1D] border-2 border-[#DFBF57] shadow-xl shrink-0">
            <Image
              src="/images/doctors/abdulkader-dorgham.webp"
              alt={t("managerName")}
              fill
              sizes="(max-width: 768px) 224px, 260px"
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
              priority
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          </div>

          {/* Director Credentials & Tech Integration */}
          <div className="flex-1 text-center md:text-start flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57]/50 text-[#DFBF57] text-xs font-mono font-bold mb-2.5 w-fit mx-auto md:mx-0 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span>{isRtl ? "القيادة والإشراف الفني المباشر" : "DIRECT TECHNICAL SUPERVISION"}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold font-display text-white mb-1 leading-snug">
              {t("managerName")}
            </h3>

            <p className="text-sm sm:text-base text-[#DFBF57] font-body font-medium mb-3">
              {t("managerTitle")}
            </p>

            <p className="text-xs sm:text-sm text-[#FAF1DD]/85 font-body leading-relaxed mb-4 max-w-xl">
              {isRtl
                ? "إشراف هندسي وفني دقيق على تفريز الزيركونيا والفينير السويسري بنظام CAD/CAM لضمان مطابقة ميكرونية 0.01 ملم وتطابق لوني حيوي طبيعي."
                : "Direct expert oversight ensuring 0.01mm micro-precision CAD/CAM milling and natural vital aesthetics."}
            </p>

            {/* Integrated Materials & Tech Chips */}
            {techList.length > 0 && (
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 pt-1 border-t border-[#DFBF57]/20">
                <span className="text-[11px] font-mono font-bold text-[#DFBF57] hidden sm:inline-block">
                  {t("techHeading")}:
                </span>
                {techList.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-[#020B1D]/80 border border-[#C8A232]/50 text-[#FAF1DD] text-[11px] font-mono font-bold shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4 CORE LAB SERVICES (Sleek 4-Column Horizontal Grid)     */}
        {/* ======================================================== */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8"
        >
          {services.slice(0, 4).map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FCFAF5]/95 border border-[#C8A232]/40 shadow-xs hover:border-[#DFBF57] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#FAF1DC] border border-[#C8A232]/40 flex items-center justify-center text-[#9A5F13] mb-3 group-hover:bg-[#012052] group-hover:text-[#DFBF57] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold font-display text-[#0F266A] mb-1.5 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs text-[#2A3B56] leading-relaxed font-body">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* CTAs Bar (Centered, Balanced & Inviting)                 */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-[#C8A232]/35 shadow-sm max-w-xl mx-auto">
          <Link
            href={`/${locale}/laboratory`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
          >
            <span>{isRtl ? "استكشف خدمات المعمل بالكامل" : "Explore Dental Laboratory"}</span>
            <ArrowIcon className="w-4 h-4 text-white" />
          </Link>

          <Link
            href={`/${locale}/for-dentists`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
          >
            <Stethoscope className="w-4 h-4 text-[#9A5F13]" />
            <span>{isRtl ? "بوابة الأطباء والتعاون" : "For Dentists & Doctors"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
