"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

// Custom Dedicated Dental SVG Icons for the 4 Clinical Pillars
function ToothSvg({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8.5 2 6 3.5 5 6C4 8.5 4.5 12 5.5 15C6.5 18 7.5 21 8.5 22C9.5 22 10 20.5 10.5 18C11 15.5 11.2 14.5 12 14.5C12.8 14.5 13 15.5 13.5 18C14 20.5 14.5 22 15.5 22C16.5 21 17.5 18 18.5 15C19.5 12 20 8.5 19 6C18 3.5 15.5 2 12 2Z" />
    </svg>
  );
}

function SmileMouthSvg({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 10C5 17 19 17 21 10" />
      <path d="M6.5 10C8.5 13.5 15.5 13.5 17.5 10" />
      <path d="M9 10V11.5M12 10V12M15 10V11.5" />
    </svg>
  );
}

function ImplantSvg({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 3C7 2.2 8.5 1.8 12 1.8C15.5 1.8 17 2.2 17 3C17.5 5 16.8 7 15.5 8H8.5C7.2 7 6.5 5 7 3Z" />
      <path d="M9 9H15L14 11H10L9 9Z" />
      <path d="M9.8 12H14.2L13.6 13.5H10.4L9.8 12Z" />
      <path d="M10.2 14.2H13.8L13.2 15.8H10.8L10.2 14.2Z" />
      <path d="M10.6 16.5H13.4L12.8 18H11.2L10.6 16.5Z" />
      <path d="M11 18.8H13L12 22L11 18.8Z" />
    </svg>
  );
}

function VeneerSvg({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 3.5C10 2.2 14 2.2 17 3.5C20.2 6 20.5 11.5 19 16C17.5 20 14 21.8 12 21.8C10 21.8 6.5 20 5 16C3.5 11.5 3.8 6 7 3.5Z" />
    </svg>
  );
}

// 4 Pure Dental Clinical Sculptures:
// 0: Royal Anatomical Molar (ضرس ملكي تشريحي بجذور مزدوجة)
// 1: Radiant Mouth & Smile Arch (فم وابتسامة ملكية مع قوس الأسنان)
// 2: Precision Dental Implant (غرسة زراعة الأسنان الذهبية مع التاج والدعامة)
// 3: Swiss Ceramic Veneer (عدسة الفينير السويسرية والتقويم الشفاف)
const SHAPES = [
  {
    id: 0,
    nameAr: "الضرس الملكي",
    nameEn: "Royal Molar",
    icon: ToothSvg,
    path: "M 100 32 C 114 20, 136 22, 150 36 C 164 50, 162 82, 153 105 C 145 128, 138 152, 130 174 C 126 180, 116 180, 112 172 C 106 150, 104 130, 100 124 C 96 130, 94 150, 88 172 C 84 180, 74 180, 70 174 C 62 152, 55 128, 47 105 C 38 82, 36 50, 50 36 C 64 22, 86 20, 100 32 Z",
    innerPath: "M 78 48 C 92 40, 108 40, 122 48 C 130 66, 124 92, 100 96 C 76 92, 70 66, 78 48 Z",
    symbol: "𓃀",
    titleAr: "تشريح السن الطبيعي وترميمات الميكروكونسيرفاتيف الفاخرة",
    titleEn: "Natural Dental Anatomy & Micro-Conservative Restorations",
  },
  {
    id: 1,
    nameAr: "الابتسامة والفك",
    nameEn: "Radiant Smile",
    icon: SmileMouthSvg,
    path: "M 100 55 C 116 46, 142 50, 168 78 C 172 84, 168 96, 155 110 C 138 148, 122 165, 100 165 C 78 165, 62 148, 45 110 C 32 96, 28 84, 32 78 C 58 50, 84 46, 100 55 Z",
    innerPath: "M 50 84 C 70 76, 130 76, 150 84 C 144 116, 124 132, 100 132 C 76 132, 56 116, 50 84 Z",
    symbol: "𓎛",
    titleAr: "هندسة الابتسامة الشاملة وتناسق قوس الأسنان اللؤلؤي",
    titleEn: "Complete Smile Architecture & Pearly Dental Arch",
  },
  {
    id: 2,
    nameAr: "زراعة الأسنان",
    nameEn: "Dental Implant",
    icon: ImplantSvg,
    path: "M 78 28 C 90 22, 110 22, 122 28 C 138 36, 144 54, 136 72 C 132 80, 122 84, 120 90 L 125 96 L 115 102 L 124 110 L 115 116 L 122 124 L 114 130 L 120 138 L 112 144 L 118 152 L 108 158 C 105 168, 103 176, 100 176 C 97 176, 95 168, 92 158 L 82 152 L 88 144 L 80 138 L 86 130 L 78 124 L 85 116 L 76 110 L 85 102 L 75 96 L 80 90 C 78 84, 68 80, 64 72 C 56 54, 62 36, 78 28 Z",
    innerPath: "M 82 42 C 92 36, 108 36, 118 42 C 124 55, 120 70, 100 74 C 80 70, 76 55, 82 42 Z",
    symbol: "𓊽",
    titleAr: "غرسات التيتانيوم والزركونيا الموجهة بالكمبيوتر ثلاثي الأبعاد",
    titleEn: "Computer-Guided 3D Titanium & Zirconia Implantology",
  },
  {
    id: 3,
    nameAr: "عدسات الفينير",
    nameEn: "Swiss Veneers",
    icon: VeneerSvg,
    path: "M 72 28 C 88 22, 112 22, 128 28 C 152 38, 164 70, 162 105 C 160 140, 142 172, 120 176 C 108 178, 92 178, 80 176 C 58 172, 40 140, 38 105 C 36 70, 48 38, 72 28 Z",
    innerPath: "M 76 46 C 92 38, 108 38, 124 46 C 138 72, 134 125, 100 148 C 66 125, 62 72, 76 46 Z",
    symbol: "𓌳",
    titleAr: "قشور الفينير السويسرية فائقة الرقة وتقويم ماغنيفيسنت الشفاف",
    titleEn: "Ultra-Thin Swiss Ceramic Veneers & Invisible Aligners",
  },
];

export function HeroMorphTooth() {
  const { isRtl } = useLanguage();
  const [activeShape, setActiveShape] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const card3DRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const innerPathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const astrolabeRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through the 4 dental shapes every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveShape((prev) => (prev + 1) % SHAPES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animate path morphing when activeShape changes
  useEffect(() => {
    const current = SHAPES[activeShape];

    if (pathRef.current && innerPathRef.current) {
      // Morph outer path with luxury elastic ease
      gsap.to(pathRef.current, {
        attr: { d: current.path },
        duration: 1.1,
        ease: "power3.inOut",
      });

      // Morph inner facet highlight
      gsap.to(innerPathRef.current, {
        attr: { d: current.innerPath },
        duration: 1.1,
        ease: "power3.inOut",
      });

      // Shimmer flash effect on the golden glow
      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0.85, scale: 1.15 },
          { opacity: 0.35, scale: 1, duration: 1.4, ease: "power2.out" }
        );
      }
    }
  }, [activeShape]);

  // 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!card3DRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 22;
    const rotateY = (x / rect.width) * 22;

    gsap.to(card3DRef.current, {
      rotateX,
      rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!card3DRef.current) return;
    gsap.to(card3DRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center select-none w-full max-w-lg"
    >
      {/* 3D Interactive Card Canvas */}
      <div
        ref={card3DRef}
        className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] flex items-center justify-center [transform-style:preserve-3d] cursor-pointer"
        onClick={() => setActiveShape((prev) => (prev + 1) % SHAPES.length)}
      >
        {/* Ambient Golden Torchlight Halo */}
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#955904]/35 via-[#DFBF57]/40 to-transparent blur-[80px] pointer-events-none transition-transform"
        />

        {/* Rotating Pharaonic Astrolabe Ring with Hieroglyphic Accents */}
        <div
          ref={astrolabeRef}
          className="absolute inset-0 rounded-full border-2 border-[#C8A232]/35 border-dashed pointer-events-none flex items-center justify-center animate-[spin_40s_linear_infinite]"
        >
          {/* Inner ring */}
          <div className="w-[88%] h-[88%] rounded-full border border-[#C8A232]/30 border-dotted" />

          {/* 4 Cardinal Golden Glyphs */}
          <span className="absolute top-1 text-[11px] font-serif text-[#C8A232]">𓋹</span>
          <span className="absolute bottom-1 text-[11px] font-serif text-[#C8A232]">𓁹</span>
          <span className="absolute left-1 text-[11px] font-serif text-[#C8A232]">𓊽</span>
          <span className="absolute right-1 text-[11px] font-serif text-[#C8A232]">𓍶</span>
        </div>

        {/* The 3D Medallion Shell with Royal Sapphire Silk (#022256 -> #012968) & Gold Bezel */}
        <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full p-3 shadow-[0_25px_60px_rgba(2,34,86,0.38)] border-2 border-[#C8A232] bg-gradient-to-tr from-[#022256] via-[#012968] to-[#083075] flex items-center justify-center [transform:translateZ(30px)]">
          
          {/* Subtle Golden Rim Reflection */}
          <div className="absolute inset-1 rounded-full ring-1 ring-inset ring-[#DFBF57]/50 pointer-events-none" />

          {/* Master Morphing SVG Dental Sculpture */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full filter drop-shadow-[0_12px_28px_rgba(200,162,50,0.45)]"
          >
            <defs>
              {/* Rich Egyptian 24K Gold Linear Gradient */}
              <linearGradient id="goldSculptGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9F1D8" />
                <stop offset="25%" stopColor="#DFBF57" />
                <stop offset="50%" stopColor="#C8A232" />
                <stop offset="75%" stopColor="#955904" />
                <stop offset="100%" stopColor="#5C4105" />
              </linearGradient>

              {/* Specular Inner Facet Gradient */}
              <linearGradient id="innerFacetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#DFBF57" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#955904" stopOpacity="0.15" />
              </linearGradient>

              {/* Radial Core Radiance with Sapphire Depth */}
              <radialGradient id="coreGlowGradient" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#FFF2B2" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#C8A232" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#022256" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Radiant Core Glow */}
            <circle cx="100" cy="100" r="70" fill="url(#coreGlowGradient)" />

            {/* Primary Morphing Sculpture Body */}
            <path
              ref={pathRef}
              d={SHAPES[0].path}
              fill="url(#goldSculptGradient)"
              stroke="#F3E5AB"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />

            {/* Internal Facet / Natural Tooth & Smile Anatomy Highlight */}
            <path
              ref={innerPathRef}
              d={SHAPES[0].innerPath}
              fill="url(#innerFacetGradient)"
              className="mix-blend-overlay"
            />

            {/* Sacred Hieroglyphic Cartouche Stamp at the base of the sculpture */}
            <text
              x="100"
              y="110"
              textAnchor="middle"
              className="font-serif text-sm fill-[#012968]/70 select-none pointer-events-none"
            >
              {SHAPES[activeShape].symbol}
            </text>
          </svg>

          {/* Interactive Click Shimmer Pill */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#022256]/95 backdrop-blur-md border border-[#C8A232] text-[10px] font-mono text-[#F3E5AB] font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3 h-3 text-[#DFBF57]" />
            <span>{isRtl ? SHAPES[activeShape].nameAr : SHAPES[activeShape].nameEn}</span>
          </div>
        </div>
      </div>

      {/* Interactive Shape Selector Tabs (The 4 Pure Dental Pillars) */}
      <div className="mt-7 flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-xl border border-[#C8A232]/35 shadow-sm max-w-full">
        {SHAPES.map((item) => {
          const isCurrent = activeShape === item.id;
          const IconComp = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveShape(item.id)}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-body transition-all duration-300 cursor-pointer ${
                isCurrent
                  ? "bg-gradient-to-r from-[#C8A232] to-[#955904] text-white shadow-md scale-105"
                  : "text-[#012968]/75 hover:text-[#012968] hover:bg-[#F9EDD7]"
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isCurrent ? "text-white" : "text-[#955904]"}`} />
              <span>{isRtl ? item.nameAr : item.nameEn}</span>
            </button>
          );
        })}
      </div>

      {/* Explanatory Subtitle for the active dental sculpture */}
      <p className="text-xs text-[#955904] font-medium mt-3 tracking-wide text-center max-w-sm font-body leading-relaxed min-h-[32px] flex items-center justify-center">
        {isRtl ? SHAPES[activeShape].titleAr : SHAPES[activeShape].titleEn}
      </p>
    </div>
  );
}