"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { Award, Sparkles } from "lucide-react";

interface DoctorItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

export function SpecialistsSection() {
  const t = useTranslations("doctors");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Exact 5 doctors in the exact approved order
  const doctors: DoctorItem[] = [
    {
      id: "amr-khaled",
      name: t("list.0.name"),
      role: t("list.0.role"),
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "sally-mosallam",
      name: t("list.1.name"),
      role: t("list.1.role"),
      image:
        "https://images.unsplash.com/photo-1594824813581-2292f72535d4?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "mohamed-hamdy",
      name: t("list.2.name"),
      role: t("list.2.role"),
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "ahmed-magdy",
      name: t("list.3.name"),
      role: t("list.3.role"),
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "ahmed-abdel-halim",
      name: t("list.4.name"),
      role: t("list.4.role"),
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate header
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

      // Animate cards grid
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="doctors"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      {/* 2. Content */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header — centered */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          {/* Category Kicker Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/85 backdrop-blur-md shadow-md">
              <Award className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                {t("badge")}
              </span>
            </div>
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
          </div>

          {/* Two-Tone Luxury Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-display leading-[1.28] mb-3 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#FAF1DD]/90 leading-relaxed max-w-2xl mx-auto font-body drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            {t("subtitle")}
          </p>
        </div>

        {/* Doctor Cards Grid — all 5 visible */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6"
        >
          {doctors.map((doc, idx) => (
            <div
              key={doc.id}
              className="rounded-2xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] group"
            >
              {/* Gold Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

              {/* Portrait Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#020B1D]">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Number Badge */}
                <div className={`absolute top-2.5 ${isRtl ? "left-2.5" : "right-2.5"} z-10`}>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#012052]/90 border border-[#DFBF57] text-[#DFBF57] text-xs font-mono font-bold shadow-md backdrop-blur-sm">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <h3 className="text-sm sm:text-base font-bold font-display text-white truncate">
                    {doc.name}
                  </h3>
                </div>
                <p className="text-xs text-[#DFBF57] font-body truncate">
                  {doc.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
