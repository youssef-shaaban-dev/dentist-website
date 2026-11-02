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

  return (
    <aside
      aria-label="Ancient Egyptian Architectural Stone Pillar"
      className="hidden lg:block absolute top-0 right-0 z-30 select-none pointer-events-auto"
    >
      {/* =================================================================== */}
      {/* ARCHITECTURAL LIMESTONE MONUMENT COLUMN                              */}
      {/* Naturally extends from top through Section 2/3 with start & end bases */}
      {/* =================================================================== */}
      <div className="relative w-24 sm:w-28 xl:w-32 flex flex-col items-center bg-gradient-to-l from-[#DFBF57]/30 via-[#FAF1DD] to-[#F1DFC0] border-l-2 border-[#C8A232]/80 shadow-[-12px_0_35px_rgba(154,95,19,0.22)]">
        
        {/* Ancient Vertical Fluting Lines on Sandstone */}
        <div className="absolute inset-y-0 left-2 w-[1px] bg-[#9A5F13]/20 pointer-events-none" />
        <div className="absolute inset-y-0 right-2 w-[1px] bg-[#9A5F13]/20 pointer-events-none" />

        {/* ================================================================= */}
        {/* 1. TOP STONE CAPITAL (قاعدة بداية العمود في الأعلى)               */}
        {/* Sculpted Papyriform / Hathor lotus crown with golden cornice     */}
        {/* ================================================================= */}
        <div className="w-full pt-8 pb-5 flex flex-col items-center border-b-2 border-[#C8A232]/60 bg-gradient-to-b from-[#EEDBB7] to-[#FAF1DD] relative shadow-xs">
          {/* Lotus Petal Relief Header */}
          <div className="w-10 h-10 rounded-full bg-[#012052] border-2 border-[#DFBF57] text-[#DFBF57] flex items-center justify-center shadow-md mb-2">
            <Crown className="w-5 h-5 text-[#DFBF57]" />
          </div>

          <span className="text-[10px] font-mono font-bold text-[#9A5F13] tracking-widest uppercase block">
            HESY-RA
          </span>
          <span className="text-[8px] font-mono text-[#4A2F08]/75 tracking-wider block mt-0.5">
            SAQQARA 2600 B.C.
          </span>

          {/* Stepped Cornice Trim */}
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C8A232] to-transparent mt-3" />
        </div>

        {/* ================================================================= */}
        {/* 2. SHAFT OF THE COLUMN: COMPLETE CARVED HIEROGLYPHIC BLOCKS        */}
        {/* Multiple glyphs side-by-side in authentic Egyptian cartouche pairs*/}
        {/* ================================================================= */}
        <div className="w-full py-6 px-2 flex flex-col items-center gap-4">
          
          {/* Register I Title Stamp */}
          <div className="flex items-center gap-1 my-1">
            <span className="w-2 h-[1px] bg-[#C8A232]" />
            <span className="text-[9px] font-mono font-bold text-[#9A5F13] uppercase tracking-wider">
              {isRtl ? "إرث حسي رع" : "HESY-RA"}
            </span>
            <span className="w-2 h-[1px] bg-[#C8A232]" />
          </div>

          {/* Inscription Blocks */}
          {HIEROGLYPHIC_LINES.map((line, idx) => {
            const isHovered = hoveredId === line.id;
            const isRegisterBreak = idx === 6; // between Hesy-Ra and Smile Charter

            return (
              <React.Fragment key={line.id}>
                <div
                  onMouseEnter={() => setHoveredId(line.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative w-full py-2 px-1.5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col items-center group hover:bg-[#C8A232]/20 border border-transparent hover:border-[#C8A232]/50"
                >
                  {/* Pair/Triplet Glyphs arranged horizontally with authentic chisel shadow */}
                  <div className="flex items-center justify-center gap-1.5 flex-wrap font-serif text-xl sm:text-2xl text-[#4A2F08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] transition-all group-hover:scale-108 group-hover:text-[#9A5F13]">
                    {line.glyphs.map((glyph, gIdx) => (
                      <span key={gIdx} className="inline-block select-all">
                        {glyph}
                      </span>
                    ))}
                  </div>

                  {/* Optical Laser Active Indicator line on hover */}
                  {isHovered && (
                    <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-[#DFBF57] to-transparent shadow-[0_0_8px_#DFBF57] animate-pulse" />
                  )}

                  {/* ======================================================= */}
                  {/* COMPACT HOVER TRANSLATION TOOLTIP (بشكل صغير وأنيق جمبه) */}
                  {/* ======================================================= */}
                  {isHovered && (
                    <div
                      className="absolute right-full mr-3 top-1/2 -translate-y-1/2 w-64 sm:w-72 p-3 rounded-2xl bg-[#011438]/95 border border-[#DFBF57]/80 text-white shadow-[0_12px_35px_rgba(1,20,56,0.6)] backdrop-blur-xl z-50 pointer-events-none transition-all duration-200 animate-fadeIn"
                      dir="rtl"
                    >
                      {/* Laser Bar on Top of Tooltip */}
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

                      {/* Crisp Concise Arabic Translation */}
                      <p className="text-xs sm:text-[13px] font-bold text-white leading-relaxed font-body">
                        {line.arabic}
                      </p>
                    </div>
                  )}
                </div>

                {/* Register Divider Cartouche Line */}
                {isRegisterBreak && (
                  <div className="w-full my-3 flex flex-col items-center">
                    <div className="w-12 h-[1.5px] bg-[#C8A232]/60" />
                    <div className="flex items-center gap-1 my-2">
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

        {/* ================================================================= */}
        {/* 3. BOTTOM STONE BASE (قاعدة نهاية العمود في الأسفل)                */}
        {/* Authentic Egyptian pedestal plinth with sculpted base molding    */}
        {/* ================================================================= */}
        <div className="w-full pt-6 pb-8 flex flex-col items-center border-t-2 border-[#C8A232]/60 bg-gradient-to-b from-[#FAF1DD] to-[#E8D4AE] relative shadow-inner">
          {/* Stepped Pedestal Molding */}
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#C8A232] to-transparent mb-3" />

          {/* Sacred Base Cartouche Seal */}
          <div className="w-9 h-9 rounded-full bg-[#012052] border-2 border-[#DFBF57]/80 text-[#DFBF57] flex items-center justify-center shadow-md mb-2">
            <BookOpen className="w-4 h-4 text-[#DFBF57]" />
          </div>

          <span className="text-[10px] font-mono font-bold text-[#9A5F13] tracking-widest uppercase block">
            MAGNIFICENT
          </span>
          <span className="text-[8px] font-mono text-[#4A2F08]/75 tracking-wider block mt-0.5">
            DENTAL HERITAGE
          </span>

          {/* Finished Base Footing */}
          <div className="w-full h-2 bg-[#9A5F13]/30 mt-3" />
        </div>

      </div>
    </aside>
  );
}
