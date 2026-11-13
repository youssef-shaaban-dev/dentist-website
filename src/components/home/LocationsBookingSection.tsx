"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { MapPin, CalendarCheck, ArrowRight, ArrowLeft } from "lucide-react";

export function LocationsBookingSection() {
  const t = useTranslations("locationsBooking");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [activeBranchIdx, setActiveBranchIdx] = useState<number>(1); // Zayed by default

  const branches = [
    {
      id: "hurghada",
      num: "01",
      name: t("branches.hurghada.name"),
      address: t("branches.hurghada.address"),
      phone: t("branches.hurghada.phone"),
      phoneRaw: "+201122208262",
      href: "/clinics#hurghada",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
      badge: isRtl ? "فرع الغردقة • البحر الأحمر" : "HURGHADA BRANCH",
    },
    {
      id: "sheikh-zayed",
      num: "02",
      name: t("branches.zayed.name"),
      address: t("branches.zayed.address"),
      phone: t("branches.zayed.phone"),
      phoneRaw: "+201114159449",
      href: "/clinics#sheikh-zayed",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      badge: isRtl ? "المقر الرئيسي • بيفرلي هيلز" : "FLAGSHIP BRANCH",
      featured: true,
    },
    {
      id: "giza",
      num: "03",
      name: t("branches.giza.name"),
      address: t("branches.giza.address"),
      phone: t("branches.giza.phone"),
      phoneRaw: "+201124336636",
      href: "/clinics#giza",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      badge: isRtl ? "فرع الجيزة • شارع الهرم" : "GIZA BRANCH",
    },
  ];

  const currentBranch = branches[activeBranchIdx] || branches[0];

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
      id="locations"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground inverted={!isRtl} />

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
                <MapPin className="w-3.5 h-3.5 text-[#9A5F13]" />
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
                {currentBranch.name}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {t("websiteCopy")}
            </p>

            {/* Branch Selection List */}
            <div className="space-y-2.5 mb-6">
              {branches.map((branch, idx) => {
                const isSelected = activeBranchIdx === idx;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => setActiveBranchIdx(idx)}
                    className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all duration-300 border text-left cursor-pointer ${
                      isSelected
                        ? "bg-[#012052] text-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/30 scale-[1.01]"
                        : "bg-white/90 text-[#012968] border-[#C8A232]/30 hover:border-[#C8A232] hover:bg-[#FAF1DC]/50"
                    }`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    <div>
                      <h3 className={`text-sm sm:text-base font-bold font-display ${
                        isSelected ? "text-white" : "text-[#012968]"
                      }`}>
                        {branch.name}
                      </h3>
                      <p className={`text-xs ${
                        isSelected ? "text-[#DFBF57]" : "text-[#2A3B56]/75"
                      } font-body mt-0.5`}>
                        {branch.address}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className={`text-xs font-mono font-bold block ${
                        isSelected ? "text-white" : "text-[#9A5F13]"
                      }`}>
                        {branch.phone}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/clinics#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>{t("bookCta")}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </Link>

              <Link
                href={currentBranch.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C8A232]/50 text-[#0F266A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF1DC]/60 transition-all font-body"
              >
                <span>{isRtl ? "تفاصيل الفرع والموقع" : "Branch Details & Map"}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-[#9A5F13]" />
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
                    src={currentBranch.image}
                    alt={currentBranch.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover object-center transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                      <MapPin className="w-3.5 h-3.5 text-[#DFBF57]" />
                      <span>{currentBranch.badge}</span>
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-[#C8A232]/35 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#DFBF57] block">{currentBranch.name}</span>
                      <a href={`tel:${currentBranch.phoneRaw}`} className="text-xs font-mono font-bold text-white hover:underline">
                        {currentBranch.phone}
                      </a>
                    </div>
                    <Link
                      href={currentBranch.href}
                      className="px-3 py-1.5 rounded-lg bg-[#C8A232]/20 hover:bg-[#C8A232]/30 text-[#DFBF57] text-[11px] font-bold transition-colors flex items-center gap-1"
                    >
                      <span>{isRtl ? "زيارة" : "Visit"}</span>
                      <ArrowIcon className="w-3 h-3" />
                    </Link>
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
