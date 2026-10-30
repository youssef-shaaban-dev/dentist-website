"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, ShieldCheck, ScanLine, Compass, CheckCircle2 } from "lucide-react";

interface ShowcaseMode {
  id: "smile" | "dsd" | "veneer";
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  badgeEn: string;
  metricAr: string;
  metricEn: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
}

export function RoyalSmileShowcase() {
  const { isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<"smile" | "dsd" | "veneer">("smile");
  const [showArchOverlay, setShowArchOverlay] = useState<boolean>(true);

  const modes: ShowcaseMode[] = [
    {
      id: "smile",
      titleAr: "قوس الابتسامة الملكي الطبيعي",
      titleEn: "Royal Natural Smile Arc",
      badgeAr: "تناغم حيوي 100%",
      badgeEn: "100% Bio-Harmonious",
      metricAr: "نسبة الجمال الذهبي Φ 1.618",
      metricEn: "Golden Ratio Φ 1.618",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      descriptionAr: "تصميم متناسق يطابق انحناء الشفاه الطبيعي مع شفافية المينا البيولوجية.",
      descriptionEn: "Harmonious curvature contouring the natural lip line with biological enamel translucency.",
    },
    {
      id: "dsd",
      titleAr: "التصميم الرقمي الميكروني (DSD)",
      titleEn: "Digital Smile Design (DSD)",
      badgeAr: "دقة 0.01 مم",
      badgeEn: "0.01mm Micro-Precision",
      metricAr: "محاكاة ثلاثية الأبعاد فورية",
      metricEn: "Instant 3D Facial Simulation",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      descriptionAr: "مسح بصري ثلاثي الأبعاد بالأشعة غير المؤلمة مع حساب دقيق لزوايا انعكاس الضوء.",
      descriptionEn: "Optical 3D scanning calculating light reflection angles with zero messy impressions.",
    },
    {
      id: "veneer",
      titleAr: "خزف E-Max السويسري فائق النقاء",
      titleEn: "Swiss E-Max Ceramic Mastery",
      badgeAr: "مقاومة فائقة",
      badgeEn: "Supreme Durability",
      metricAr: "سماكة ميكرونية 0.3 مم",
      metricEn: "0.3mm Ultra-Thin Veneers",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
      descriptionAr: "عدسات بورسلين متبلورة تعكس الضوء كالمينا الطبيعية دون أي تصبغ أو تغير لوني.",
      descriptionEn: "Crystallized porcelain reflecting light identically to natural enamel with zero discoloration.",
    },
  ];

  const currentMode = modes.find((m) => m.id === activeTab) || modes[0];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none">
      
      {/* 1. Main Luxury Glass Frame Card */}
      <div className="relative w-full rounded-3xl overflow-hidden border-2 border-[#C8A232]/35 bg-gradient-to-b from-white/95 via-[#FDFBF7]/90 to-[#FAF8F5]/95 shadow-[0_20px_50px_rgba(2,34,86,0.10)] p-3 sm:p-4 backdrop-blur-xl group">
        
        {/* Visual Viewport with Interactive Hover Scale */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden bg-[#022256]/10 border border-[#C8A232]/25 shadow-inner">
          <Image
            src={currentMode.image}
            alt={isRtl ? currentMode.titleAr : currentMode.titleEn}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />

          {/* Delicate Vignette & Golden Ambient Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/20 via-transparent to-[#C8A232]/15 pointer-events-none" />

          {/* Golden Smile Arc Geometric Overlay (Golden Ratio Curve) */}
          {showArchOverlay && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 opacity-80"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Natural Smile Arc Parabolic Curve */}
              <path
                d="M 50 170 Q 200 240 350 170"
                stroke="#DFBF57"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
              {/* Central Incisor Golden Axis */}
              <line x1="200" y1="90" x2="200" y2="245" stroke="#DFBF57" strokeWidth="1.5" strokeOpacity="0.5" />
              {/* Facial Midline Axis Anchor Ring */}
              <circle cx="200" cy="205" r="5" fill="#C8A232" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="210" y="210" fill="#FFF8F0" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Φ 1.618
              </text>
            </svg>
          )}

          {/* Floating Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
            {/* Metric Tag 1 */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/40 text-[11px] font-mono font-bold text-[#955904] shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-ping" />
              <span>{isRtl ? currentMode.badgeAr : currentMode.badgeEn}</span>
            </div>

            {/* Metric Tag 2 */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#022256]/90 text-white text-[11px] font-mono font-bold shadow-md border border-white/20">
              <Sparkles className="w-3 h-3 text-[#DFBF57]" />
              <span>{isRtl ? currentMode.metricAr : currentMode.metricEn}</span>
            </div>
          </div>

          {/* Bottom Title & Smile Arc Toggle */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex flex-col text-white drop-shadow">
              <span className="text-xs sm:text-sm font-bold font-display tracking-wide text-white">
                {isRtl ? currentMode.titleAr : currentMode.titleEn}
              </span>
              <span className="text-[10px] text-[#F9EDD7] font-body line-clamp-1">
                {isRtl ? currentMode.descriptionAr : currentMode.descriptionEn}
              </span>
            </div>

            {/* Overlay Toggle Button */}
            <button
              type="button"
              onClick={() => setShowArchOverlay(!showArchOverlay)}
              className="px-2.5 py-1 rounded-full bg-black/45 hover:bg-black/70 border border-white/30 text-white text-[10px] font-mono font-semibold transition-all cursor-pointer backdrop-blur-md shrink-0 flex items-center gap-1"
              aria-label="Toggle Smile Arc Geometry"
            >
              <Compass className="w-3 h-3 text-[#DFBF57]" />
              <span>{showArchOverlay ? (isRtl ? "إخفاء القوس" : "Hide Arc") : (isRtl ? "قوس الابتسامة" : "Smile Arc")}</span>
            </button>
          </div>
        </div>

        {/* Clinical Excellence Guarantee Footer */}
        <div className="mt-3 pt-3 border-t border-[#C8A232]/25 flex items-center justify-between text-xs text-[#5B6782] px-1 font-body">
          <div className="flex items-center gap-1.5 font-bold text-[#012968]">
            <CheckCircle2 className="w-4 h-4 text-[#955904]" />
            <span>{isRtl ? "معايير الجمال الطبيعي الملكي" : "Natural Esthetics Standard"}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-[#955904]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HESY-RA 2600 B.C.</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Feature Switcher Tabs (Touch-Friendly on Mobile) */}
      <div className="mt-4 flex items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#C8A232]/35 shadow-sm w-full max-w-md">
        {modes.map((mode) => {
          const isActive = activeTab === mode.id;

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveTab(mode.id)}
              className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                isActive
                  ? "bg-[#012968] text-white shadow-md scale-102"
                  : "text-[#5B6782] hover:text-[#012968] hover:bg-[#FAF8F5]"
              }`}
            >
              {mode.id === "smile" && <Sparkles className={`w-3.5 h-3.5 ${isActive ? "text-[#DFBF57]" : "text-[#955904]"}`} />}
              {mode.id === "dsd" && <ScanLine className={`w-3.5 h-3.5 ${isActive ? "text-[#DFBF57]" : "text-[#955904]"}`} />}
              {mode.id === "veneer" && <ShieldCheck className={`w-3.5 h-3.5 ${isActive ? "text-[#DFBF57]" : "text-[#955904]"}`} />}
              <span>{isRtl ? (mode.id === "smile" ? "الابتسامة الطبيعية" : mode.id === "dsd" ? "المسح الميكروني" : "خزف E-Max") : (mode.id === "smile" ? "Natural Smile" : mode.id === "dsd" ? "Digital Scan" : "E-Max Veneers")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

