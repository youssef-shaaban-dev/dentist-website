"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Crown, Sparkles, BookOpen } from "lucide-react";

interface HieroglyphicLine {
  id: string;
  glyphs: string[];
  arabic: string;
  category: "hesy-ra" | "smile";
}

const HIEROGLYPHIC_LINES: HieroglyphicLine[] = [
  // ==========================================
  // Register I: شفرة سقارة • إرث حسي رع
  // ==========================================
  {
    id: "h1",
    glyphs: ["𓃀", "𓄿", "𓎛", "𓂧", "𓍿"],
    arabic: "بأحدث ابتكارات التكنولوجيا الطبية",
    category: "hesy-ra",
  },
  {
    id: "h2",
    glyphs: ["𓄿", "𓃀", "𓏏", "𓎡", "𓄿", "𓂋"],
    arabic: "امتداد الإرث الطبي يبدأ هنا",
    category: "hesy-ra",
  },
  {
    id: "h3",
    glyphs: ["𓈖", "𓎛", "𓈖", "𓄿", "𓎛", "𓆑"],
    arabic: "نحن أحفاد حسي رع — كبير أطباء الأسنان",
    category: "hesy-ra",
  },
  {
    id: "h4",
    glyphs: ["𓈖", "𓅱", "𓄿", "𓋴", "𓃭", "𓅓"],
    arabic: "نواصل مسيرة أقدم طبيب أسنان في التاريخ",
    category: "hesy-ra",
  },
  {
    id: "h5",
    glyphs: ["𓅱", "𓄿", "𓃭", "𓂧", "𓇌", "𓏏"],
    arabic: "والذي تشهد على مكانته الرفيعة",
    category: "hesy-ra",
  },
  {
    id: "h6",
    glyphs: ["𓄿", "𓃭", "𓄿", "𓃭", "𓅱", "𓄿"],
    arabic: "الألواح الخشبية النادرة المنقوشة",
    category: "hesy-ra",
  },
  {
    id: "h7",
    glyphs: ["𓄿", "𓃭", "𓏏", "𓇌", "𓂝", "𓍿"],
    arabic: "التي عُثر عليها في مقبرته بسقارة (٢٦٠٠ ق.م)",
    category: "hesy-ra",
  },

  // ==========================================
  // Register II: ميثاق نحت الابتسامة الفنية
  // ==========================================
  {
    id: "s1",
    glyphs: ["𓈖", "𓎛", "𓈖", "𓆑", "𓇌", "𓂝"],
    arabic: "نحن في عيادة الابتسامة الرائعة",
    category: "smile",
  },
  {
    id: "s2",
    glyphs: ["𓃭", "𓄿", "𓈖", "𓋴", "𓈖", "𓂝"],
    arabic: "لا نصنع ابتسامة فحسب",
    category: "smile",
  },
  {
    id: "s3",
    glyphs: ["𓃀", "𓃭", "𓈖", "𓈙", "𓎡", "𓃭"],
    arabic: "بل نُشكِّل تحفة فنية تستحق الخلود",
    category: "smile",
  },
  {
    id: "s4",
    glyphs: ["𓏏", "𓋴", "𓏏", "𓎛", "𓈎", "𓄿"],
    arabic: "تستحق أن تُنقش في ذاكرة من يراها",
    category: "smile",
  },
  {
    id: "s5",
    glyphs: ["𓈖", "𓂝", "𓄿", "𓅓", "𓃭", "𓎡"],
    arabic: "نُعامل كل تفصيلة بدقة متناهية",
    category: "smile",
  },
  {
    id: "s6",
    glyphs: ["𓎡", "𓅓", "𓄿", "𓃭", "𓅱", "𓎡"],
    arabic: "كما لو كانت تاجًا يزيّن ملامحكم",
    category: "smile",
  },
  {
    id: "s7",
    glyphs: ["𓃭", "𓏏", "𓄡", "𓄿", "𓂧", "𓂋"],
    arabic: "لتغادروا بابتسامة متوَّجة بالجمال",
    category: "smile",
  },
  {
    id: "s8",
    glyphs: ["𓃀", "𓆑", "𓐍", "𓄿", "𓅓", "𓏏"],
    arabic: "بفخامة الملوك وثقة لا تُقهر",
    category: "smile",
  },
];

export function HieroglyphicWall() {
  const { isRtl } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Flatten all glyphs for the mobile horizontal stone frieze
  const allMobileGlyphs = HIEROGLYPHIC_LINES.flatMap((line) => line.glyphs);

  return (
    <>
      {/* =================================================================== */}
      {/* 1. DESKTOP ARCHITECTURAL LIMESTONE MONUMENT COLUMN (>= lg)          */}
      {/* Naturally extends from top through Section 2 with start & end bases */}
      {/* =================================================================== */}
      <aside
        aria-label="Ancient Egyptian Architectural Stone Pillar"
        className="hidden lg:flex flex-col absolute top-0 right-0 bottom-0 z-30 select-none pointer-events-auto"
      >
        <div className="relative w-24 sm:w-28 xl:w-32 h-full flex flex-col justify-between items-center bg-gradient-to-l from-[#DFBF57]/30 via-[#FAF1DD] to-[#F1DFC0] border-l-2 border-[#C8A232]/80 shadow-[-12px_0_35px_rgba(154,95,19,0.22)]">
          
          {/* Ancient Vertical Fluting Lines on Sandstone */}
          <div className="absolute inset-y-0 left-2 w-[1px] bg-[#9A5F13]/20 pointer-events-none" />
          <div className="absolute inset-y-0 right-2 w-[1px] bg-[#9A5F13]/20 pointer-events-none" />

          {/* TOP STONE CAPITAL */}
          <div className="shrink-0 w-full pt-8 pb-4 flex flex-col items-center border-b-2 border-[#C8A232]/60 bg-gradient-to-b from-[#EEDBB7] to-[#FAF1DD] relative shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#012052] border-2 border-[#DFBF57] text-[#DFBF57] flex items-center justify-center shadow-md mb-2">
              <Crown className="w-5 h-5 text-[#DFBF57]" />
            </div>

            <span className="text-[10px] font-mono font-bold text-[#9A5F13] tracking-widest uppercase block">
              HESY-RA
            </span>
            <span className="text-[8px] font-mono text-[#4A2F08]/75 tracking-wider block mt-0.5">
              SAQQARA 2600 B.C.
            </span>

            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C8A232] to-transparent mt-3" />
          </div>

          {/* SHAFT: CARVED HIEROGLYPHIC BLOCKS */}
          <div className="flex-1 w-full py-4 px-2 flex flex-col justify-evenly items-center">
            
            {/* Register I Title Stamp */}
            <div className="flex items-center gap-1 my-1">
              <span className="w-2 h-[1px] bg-[#C8A232]" />
              <span className="text-[9px] font-mono font-bold text-[#9A5F13] uppercase tracking-wider">
                {isRtl ? "إرث حسي رع" : "HESY-RA"}
              </span>
              <span className="w-2 h-[1px] bg-[#C8A232]" />
            </div>

            {HIEROGLYPHIC_LINES.map((line, idx) => {
              const isHovered = hoveredId === line.id;
              const isRegisterBreak = idx === 6;

              return (
                <React.Fragment key={line.id}>
                  <div
                    onMouseEnter={() => setHoveredId(line.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative w-full py-1.5 px-1.5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center group hover:bg-[#C8A232]/20 border border-transparent hover:border-[#C8A232]/50"
                  >
                    <div className="flex items-center justify-center gap-1.5 flex-wrap font-serif text-xl sm:text-2xl text-[#4A2F08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] transition-all group-hover:scale-108 group-hover:text-[#9A5F13]">
                      {line.glyphs.map((glyph, gIdx) => (
                        <span key={gIdx} className="inline-block select-all">
                          {glyph}
                        </span>
                      ))}
                    </div>

                    {isHovered && (
                      <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#DFBF57] to-transparent shadow-[0_0_8px_#DFBF57] animate-pulse" />
                    )}

                    {/* COMPACT HOVER TRANSLATION TOOLTIP */}
                    {isHovered && (
                      <div
                        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 w-64 sm:w-72 p-3 rounded-2xl bg-[#011438]/95 border border-[#DFBF57]/80 text-white shadow-[0_12px_35px_rgba(1,20,56,0.6)] backdrop-blur-xl z-50 pointer-events-none transition-all duration-200 animate-fadeIn"
                        dir="rtl"
                      >
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#DFBF57] to-transparent mb-2" />

                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono text-[#DFBF57] font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#DFBF57]" />
                            <span>
                              {line.category === "hesy-ra" ? "شفرة سقارة" : "ميثاق الابتسامة"}
                            </span>
                          </span>
                          <span className="text-[9px] font-mono text-white/50">
                            {line.glyphs.join("")}
                          </span>
                        </div>

                        <p className="text-xs sm:text-[13px] font-bold text-white leading-relaxed font-body">
                          {line.arabic}
                        </p>
                      </div>
                    )}
                  </div>

                  {isRegisterBreak && (
                    <div className="w-full my-2 flex flex-col items-center">
                      <div className="w-12 h-[1.5px] bg-[#C8A232]/60" />
                      <div className="flex items-center gap-1 my-1">
                        <span className="w-2 h-[1px] bg-[#C8A232]" />
                        <span className="text-[9px] font-mono font-bold text-[#9A5F13] uppercase tracking-wider">
                          {isRtl ? "ميثاق الابتسامة" : "CHARTER"}
                        </span>
                        <span className="w-2 h-[1px] bg-[#C8A232]" />
                      </div>
                      <div className="w-12 h-[1.5px] bg-[#C8A232]/60" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}

          </div>

          {/* BOTTOM STONE BASE */}
          <div className="shrink-0 w-full pt-4 pb-6 flex flex-col items-center border-t-2 border-[#C8A232]/60 bg-gradient-to-b from-[#FAF1DD] to-[#E8D4AE] relative shadow-inner">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C8A232] to-transparent mb-3" />

            <div className="w-9 h-9 rounded-full bg-[#012052] border-2 border-[#DFBF57]/80 text-[#DFBF57] flex items-center justify-center shadow-md mb-2">
              <BookOpen className="w-4 h-4 text-[#DFBF57]" />
            </div>

            <span className="text-[10px] font-mono font-bold text-[#9A5F13] tracking-widest uppercase block">
              MAGNIFICENT
            </span>
            <span className="text-[8px] font-mono text-[#4A2F08]/75 tracking-wider block mt-0.5">
              DENTAL HERITAGE
            </span>

            <div className="w-full h-1.5 bg-[#9A5F13]/40 mt-3" />
          </div>

        </div>
      </aside>

      {/* =================================================================== */}
      {/* 2. MOBILE HORIZONTAL ARCHITECTURAL STONE FRIEZE (< lg)              */}
      {/* Fixed aesthetic sandstone relief strip along the bottom of screen   */}
      {/* Purely decorative Egyptian hieroglyphs — zero intrusive popups      */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="block lg:hidden fixed bottom-0 left-0 right-0 z-40 pointer-events-none select-none bg-gradient-to-r from-[#DFBF57]/35 via-[#FAF1DD] to-[#DFBF57]/35 border-t-2 border-[#C8A232]/90 shadow-[0_-5px_20px_rgba(154,95,19,0.28)]"
      >
        {/* Ancient Stone Fluting Groove */}
        <div className="w-full h-[1px] bg-[#9A5F13]/25" />

        <div className="h-9 px-3 flex items-center justify-between overflow-hidden">
          {/* Left Cartouche Seal */}
          <div className="shrink-0 flex items-center gap-1.5 pl-1 pr-2 py-0.5 rounded-full bg-[#012052] border border-[#DFBF57] shadow-xs">
            <Crown className="w-3 h-3 text-[#DFBF57]" />
            <span className="text-[9px] font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
              HESY-RA
            </span>
          </div>

          {/* Horizontal Carved Hieroglyphic Relief Glyphs */}
          <div className="flex-1 flex items-center justify-around px-2 overflow-hidden">
            {allMobileGlyphs.slice(0, 14).map((glyph, gIdx) => (
              <span
                key={gIdx}
                className="font-serif text-lg text-[#4A2F08] drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] inline-block select-none transform hover:scale-110 transition-transform"
              >
                {glyph}
              </span>
            ))}
          </div>

          {/* Right Heritage Stamp */}
          <div className="shrink-0 flex items-center gap-1 text-[#9A5F13] font-mono text-[9px] font-bold">
            <BookOpen className="w-3 h-3 text-[#9A5F13]" />
            <span>٢٦٠٠ ق.م</span>
          </div>
        </div>

        {/* Bottom Stone Footing Edge */}
        <div className="w-full h-[1.5px] bg-[#9A5F13]/35" />
      </div>
    </>
  );
}
