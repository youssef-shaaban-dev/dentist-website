"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [activeDoctorIdx, setActiveDoctorIdx] = useState<number>(0);

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

  const currentDoctor = doctors[activeDoctorIdx] || doctors[0];

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
      id="doctors"
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
                <Award className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {t("badge")}
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
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {t("subtitle")}
            </p>

            {/* Compact Doctor Cards List (5 Doctors in exact order) */}
            <div className="space-y-2 mb-6">
              {doctors.map((doc, idx) => {
                const isSelected = activeDoctorIdx === idx;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveDoctorIdx(idx)}
                    className={`w-full p-3 sm:p-3.5 rounded-2xl flex items-center justify-between transition-all duration-300 border text-left cursor-pointer ${
                      isSelected
                        ? "bg-[#012052] text-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/30 scale-[1.01]"
                        : "bg-white/90 text-[#012968] border-[#C8A232]/30 hover:border-[#C8A232] hover:bg-[#FAF1DC]/50"
                    }`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#C8A232]/50 bg-[#0A1128]">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className={`text-sm sm:text-base font-bold font-display ${
                          isSelected ? "text-white" : "text-[#012968]"
                        }`}>
                          {doc.name}
                        </h3>
                        <p className={`text-xs ${
                          isSelected ? "text-[#DFBF57]" : "text-[#2A3B56]/75"
                        } font-body truncate`}>
                          {doc.role}
                        </p>
                      </div>
                    </div>

                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? "bg-[#DFBF57]/20 text-[#DFBF57]" : "text-[#9A5F13]"
                    }`}>
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* VISUAL COLUMN (Deep Royal Blue Side): Order 2 on Desktop */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 w-full ${
              isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
            }`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              {/* Doctor Featured Portrait Card with 24K Gold Frame */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Gold Crest Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3" />

                {/* Portrait Canvas */}
                <div className="relative h-80 sm:h-96 md:h-[400px] w-full rounded-2xl overflow-hidden select-none border border-[#DFBF57]/40 bg-[#020B1D] shadow-inner">
                  <Image
                    src={currentDoctor.image}
                    alt={currentDoctor.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#DFBF57]" />
                      <span>{currentDoctor.name}</span>
                    </div>
                  </div>

                  {/* Bottom Info Strip */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-[#C8A232]/40 text-center">
                    <h3 className="text-base font-bold font-display text-white mb-0.5">
                      {currentDoctor.name}
                    </h3>
                    <p className="text-xs text-[#DFBF57] font-body">
                      {currentDoctor.role}
                    </p>
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
