"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Crown, BookOpen } from "lucide-react";

interface HieroglyphicLine {
  id: string;
  hieroglyph: string;
  arabic: string;
  category: "hesy-ra" | "smile";
}

const HIEROGLYPHIC_LINES: HieroglyphicLine[] = [
  // ==========================================
  // Register I: شفرة سقارة • إرث حسي رع
  // ==========================================
  {
    id: "h1",
    hieroglyph: "𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿 𓄿𓃭𓏏𓃀𓇌𓏏",
    arabic: "بأحدث ابتكارات التكنولوجيا الطبية",
    category: "hesy-ra",
  },
  {
    id: "h2",
    hieroglyph: "𓄿𓅓𓏏𓂧𓄿𓂧 𓄿𓃭𓇋𓂋𓍿 𓇌𓃀𓂧𓄿 𓉔𓈖𓄿",
    arabic: "امتداد الإرث يبدأ هنا",
    category: "hesy-ra",
  },
  {
    id: "h3",
    hieroglyph: "𓈖𓎛𓈖 𓄿𓎛𓆑𓄿𓂧 𓎛𓋴𓇌 𓂋𓂝",
    arabic: "نحن أحفاد حسي رع",
    category: "hesy-ra",
  },
  {
    id: "h4",
    hieroglyph: "𓈖𓅱𓄿𓋴𓃭 𓅓𓋴𓇌𓂋𓏏 𓄿𓈎𓂧𓅓 𓏏𓃀𓇌𓃀 𓄿𓋴𓈖𓄿𓈖 𓆑𓇌 𓏏𓄿𓂋𓇌𓐍 𓄿𓃭𓃀𓈙𓂋𓇌𓏏",
    arabic: "نواصل مسيرة أقدم طبيب أسنان في تاريخ البشرية",
    category: "hesy-ra",
  },
  {
    id: "h5",
    hieroglyph: "𓅱𓄿𓃭𓂧𓇌 𓏏𓈙𓉔𓂧 𓂝𓃭𓇌 𓅓𓎡𓄿𓈖𓏏𓉔",
    arabic: "والذي تشهد على مكانته",
    category: "hesy-ra",
  },
  {
    id: "h6",
    hieroglyph: "𓄿𓃭𓄿𓃭𓅱𓄿𓎛 𓄿𓃭𓐍𓈙𓃀𓇌𓏏 𓄿𓃭𓈖𓄿𓂧𓂋𓏏",
    arabic: "الألواح الخشبية النادرة",
    category: "hesy-ra",
  },
  {
    id: "h7",
    hieroglyph: "𓄿𓃭𓏏𓇌 𓂝ُ𓍿𓂋 𓂝𓃭𓇌𓉔𓄿 𓆑𓇌 𓅓𓈎𓃀𓂋𓏏𓉔 𓃀𓋴𓈎𓄿𓂋𓏏",
    arabic: "التي عُثر عليها في مقبرته بسقارة",
    category: "hesy-ra",
  },

  // ==========================================
  // Register II: ميثاق نحت الابتسامة الفنية
  // ==========================================
  {
    id: "s1",
    hieroglyph: "𓈖𓎛𓈖 𓆑𓇌 𓂝𓇌𓄿𓂧𓏏 𓄿𓃭𓄿𓃀𓏏𓋴𓄿𓅓𓏏 𓄿𓃭𓂋𓄿𓇌𓄿𓂝𓏏",
    arabic: "نحن في عيادة الابتسامة الرائعة",
    category: "smile",
  },
  {
    id: "s2",
    hieroglyph: "𓃭𓄿 𓈖𓋴𓈖𓂝 𓄿𓃀𓏏𓋴𓄿𓅓𓏏 𓆑𓎛𓋴𓃀",
    arabic: "لا نصنع ابتسامة فحسب",
    category: "smile",
  },
  {
    id: "s3",
    hieroglyph: "𓃀𓃭 𓈖𓈙𓎡𓃭 𓏏𓎛𓆑𓏏 𓆑𓈖𓇌𓏏",
    arabic: "بل نُشكِّل تحفة فنية",
    category: "smile",
  },
  {
    id: "s4",
    hieroglyph: "𓏏𓋴𓏏𓎛𓈎 𓄿𓈖 𓏏𓈖𓈎𓈙 𓆑𓇌 𓂧𓄿𓎡𓂋𓏏 𓅓𓈖 𓇌𓂋𓄿𓉔𓄿",
    arabic: "تستحق أن تُنقش في ذاكرة من يراها",
    category: "smile",
  },
  {
    id: "s5",
    hieroglyph: "𓈖𓂝𓄿𓅓𓃭 𓎡𓃭 𓏏𓆑𓋴𓇌𓃭𓏏",
    arabic: "نُعامل كل تفصيلة",
    category: "smile",
  },
  {
    id: "s6",
    hieroglyph: "𓎡𓅓𓄿 𓃭𓅱 𓎡𓄿𓈖𓏏 𓏏𓄿𓎼 𓇌𓊃𓇌𓈖 𓅓𓃭𓄿𓅓𓎛𓎡𓅓",
    arabic: "كما لو كانت تاجًا يزيّن ملامحكم",
    category: "smile",
  },
  {
    id: "s7",
    hieroglyph: "𓃭𓏏𓄡𓄿𓂧𓂋𓅱𓄿 𓃀𓄿𓃀𓏏𓋴𓄿𓅓𓏏 𓅓𓏏𓅱𓎼𓏏",
    arabic: "لتغادروا بابتسامة متوَّجة",
    category: "smile",
  },
  {
    id: "s8",
    hieroglyph: "𓃀𓆑𓐍𓄿𓅓𓏏 𓄿𓃭𓅓𓃭𓅱𓎡 𓅱𓍿𓈎𓏏 𓃭𓄿 𓏏𓈎𓉔𓂋",
    arabic: "بفخامة الملوك وثقة لا تُقهر",
    category: "smile",
  },
];

export function HieroglyphicWall() {
  const { isRtl } = useLanguage();
  const t = useTranslations("pharaonicPillar.glyphs");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Flatten glyphs safely for the mobile horizontal stone frieze using Array.from (handles surrogate pairs)
  const allMobileGlyphs = HIEROGLYPHIC_LINES.flatMap((line) =>
    Array.from(line.hieroglyph.replace(/\s/g, ""))
  );

  return (
    <>
      {/* =================================================================== */}
      {/* 1. DESKTOP ARCHITECTURAL LIMESTONE MONUMENT COLUMN (>= lg)          */}
      {/* Fully visible overflow allows the tooltip to fly out on the left   */}
      {/* =================================================================== */}
      <aside
        aria-label="Ancient Egyptian Architectural Stone Pillar"
        className={`hidden lg:flex flex-col absolute top-0 ${
          isRtl ? "right-0" : "left-0"
        } bottom-0 z-30 select-none pointer-events-auto`}
      >
        <div
          className={`relative w-28 sm:w-32 xl:w-36 h-full flex flex-col items-center ${
            isRtl
              ? "bg-gradient-to-l from-[#DFBF57]/35 via-[#FAF1DD] to-[#F1DFC0] border-l-2 border-[#C8A232]/80 shadow-[-12px_0_35px_rgba(154,95,19,0.22)]"
              : "bg-gradient-to-r from-[#DFBF57]/35 via-[#FAF1DD] to-[#F1DFC0] border-r-2 border-[#C8A232]/80 shadow-[12px_0_35px_rgba(154,95,19,0.22)]"
          }`}
        >
          {/* Ancient Vertical Fluting Lines on Sandstone */}
          <div className="absolute inset-y-0 left-1.5 w-[1px] bg-[#9A5F13]/25 pointer-events-none" />
          <div className="absolute inset-y-0 right-1.5 w-[1px] bg-[#9A5F13]/25 pointer-events-none" />

          {/* ================================================================= */}
          {/* 1. TOP STONE CAPITAL                                              */}
          {/* ================================================================= */}
          <div className="shrink-0 w-full pt-6 pb-2.5 flex flex-col items-center border-b-2 border-[#C8A232]/60 bg-gradient-to-b from-[#EEDBB7] to-[#FAF1DD] relative shadow-xs">
            <div className="w-9 h-9 rounded-full bg-[#012052] border-2 border-[#DFBF57] text-[#DFBF57] flex items-center justify-center shadow-md mb-1.5">
              <Crown className="w-4.5 h-4.5 text-[#DFBF57]" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#9A5F13] tracking-widest uppercase block text-center leading-none">
              HESY-RA
            </span>
            <span className="text-[8px] font-mono text-[#4A2F08]/75 tracking-wider block mt-0.5 text-center leading-none">
              SAQQARA 2600 B.C.
            </span>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A232] to-transparent mt-2" />
          </div>

          {/* ================================================================= */}
          {/* 2. SHAFT: HIEROGLYPHIC INSCRIPTIONS FILLING THE COLUMN SPACE       */}
          {/* Large, vivid hieroglyphs filling the column without empty gaps    */}
          {/* Arabic translation tooltip appears on hover directly on the left   */}
          {/* ================================================================= */}
          <div className="flex-1 min-h-0 w-full py-1.5 px-1.5 flex flex-col justify-evenly items-center">

            {/* Register I Title */}
            <div className="flex items-center gap-1 shrink-0 my-0.5">
              <span className="w-2.5 h-[1px] bg-[#C8A232]" />
              <span className="text-[8px] font-mono font-bold text-[#9A5F13] uppercase tracking-wider">
                {isRtl ? "شفرة سقارة" : "SAQQARA"}
              </span>
              <span className="w-2.5 h-[1px] bg-[#C8A232]" />
            </div>

            {HIEROGLYPHIC_LINES.map((line) => {
              const isRegisterBreak = line.id === "h7";
              const isHovered = hoveredId === line.id;

              return (
                <React.Fragment key={line.id}>
                  <div
                    onMouseEnter={() => setHoveredId(line.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative w-full flex items-center justify-center transition-all duration-200 cursor-pointer rounded-lg px-1 py-0.5 ${
                      isHovered
                        ? "bg-[#012052] shadow-xl ring-2 ring-[#DFBF57] scale-[1.04] z-40"
                        : "hover:bg-[#C8A232]/25"
                    }`}
                  >
                    {/* Full Hieroglyphic Inscription — large font filling column width */}
                    <p
                      className={`font-serif text-center break-all select-none transition-colors duration-200 leading-tight ${
                        isHovered
                          ? "text-[#DFBF57] drop-shadow-[0_0_8px_rgba(223,191,87,0.9)]"
                          : "text-[#3D2504] drop-shadow-[0_1px_0_rgba(255,255,255,0.85)] font-bold"
                      }`}
                      style={{ fontSize: "21px", letterSpacing: "-0.01em", wordSpacing: "1px" }}
                    >
                      {line.hieroglyph}
                    </p>

                    {/* ===================================================== */}
                    {/* HOVER TOOLTIP — DYNAMIC MULTILINGUAL TRANSLATION      */}
                    {/* ===================================================== */}
                    {isHovered && (
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 ${
                          isRtl ? "right-full mr-4" : "left-full ml-4"
                        } w-72 sm:w-80 p-4 rounded-2xl bg-[#011438] border-2 border-[#DFBF57] shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl z-50 pointer-events-none animate-fadeIn`}
                        style={{ minWidth: "260px" }}
                      >
                        <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-[#DFBF57]/30">
                          <Crown className="w-3.5 h-3.5 text-[#DFBF57] shrink-0" />
                          <span className="text-[11px] font-mono text-[#DFBF57] font-bold">
                            {line.category === "hesy-ra" ? t("reg1Title") : t("reg2Title")}
                          </span>
                        </div>

                        {/* Hieroglyphic text inside tooltip */}
                        <div
                          className="font-serif text-sm text-[#DFBF57] leading-relaxed text-center select-all bg-black/40 p-2 rounded-lg border border-[#DFBF57]/30 mb-2"
                          dir="ltr"
                        >
                          {line.hieroglyph}
                        </div>

                        {/* Localized translation matching active site language */}
                        <p
                          className={`text-[13px] sm:text-[14px] font-bold text-white leading-relaxed font-body ${
                            isRtl ? "text-right" : "text-left"
                          }`}
                          dir={isRtl ? "rtl" : "ltr"}
                        >
                          {t(line.id)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Register Divider between Register I and Register II */}
                  {isRegisterBreak && (
                    <div className="w-full flex flex-col items-center shrink-0 my-1">
                      <div className="w-12 h-[1px] bg-[#C8A232]/70" />
                      <div className="flex items-center gap-1 my-0.5">
                        <span className="w-2 h-[1px] bg-[#C8A232]" />
                        <span className="text-[8px] font-mono font-bold text-[#9A5F13] uppercase tracking-wider">
                          {t("registerDivider")}
                        </span>
                        <span className="w-2 h-[1px] bg-[#C8A232]" />
                      </div>
                      <div className="w-12 h-[1px] bg-[#C8A232]/70" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ================================================================= */}
          {/* 3. BOTTOM STONE BASE — cleanly terminates at Section 2 bottom     */}
          {/* ================================================================= */}
          <div className="shrink-0 w-full pt-3 pb-4 flex flex-col items-center border-t-2 border-[#C8A232]/60 bg-gradient-to-b from-[#FAF1DD] to-[#E8D4AE] relative shadow-inner">
            <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C8A232] to-transparent mb-2" />
            <div className="w-8 h-8 rounded-full bg-[#012052] border-2 border-[#DFBF57]/80 text-[#DFBF57] flex items-center justify-center shadow-md mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#DFBF57]" />
            </div>
            <span className="text-[9px] font-mono font-bold text-[#9A5F13] tracking-widest uppercase block text-center leading-none">
              MAGNIFICENT
            </span>
            <span className="text-[7px] font-mono text-[#4A2F08]/75 tracking-wider block mt-0.5 text-center leading-none">
              DENTAL HERITAGE
            </span>
            <div className="w-full h-1 bg-[#9A5F13]/40 mt-2" />
          </div>
        </div>
      </aside>

      {/* =================================================================== */}
      {/* 2. MOBILE HORIZONTAL ARCHITECTURAL STONE FRIEZE (< lg)              */}
      {/* Fixed aesthetic Egyptian sandstone strip at the bottom of screen    */}
      {/* =================================================================== */}
      <div
        aria-label="Ancient Egyptian Mobile Heritage Frieze"
        className="block lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none select-none bg-gradient-to-r from-[#DFBF57]/40 via-[#FAF1DD] to-[#DFBF57]/40 border-t-2 border-[#C8A232] shadow-[0_-5px_20px_rgba(154,95,19,0.35)]"
      >
        <div className="w-full h-[1px] bg-[#9A5F13]/30" />
        <div className="h-10 px-3 flex items-center justify-between overflow-hidden">
          {/* Left Cartouche Seal */}
          <div className="shrink-0 flex items-center gap-1.5 pl-1.5 pr-2.5 py-0.5 rounded-full bg-[#012052] border border-[#DFBF57] shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#DFBF57]" />
            <span className="text-[9px] font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
              HESY-RA
            </span>
          </div>

          {/* Horizontal Carved Hieroglyphic Relief Glyphs */}
          <div className="flex-1 flex items-center justify-around px-2 overflow-hidden">
            {allMobileGlyphs.slice(0, 16).map((glyph, gIdx) => (
              <span
                key={gIdx}
                className="font-serif text-xl text-[#3D2504] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)] inline-block select-none"
              >
                {glyph}
              </span>
            ))}
          </div>

          {/* Right Heritage Stamp */}
          <div className="shrink-0 flex items-center gap-1 text-[#9A5F13] font-mono text-[9px] font-bold">
            <BookOpen className="w-3.5 h-3.5 text-[#9A5F13]" />
            <span>٢٦٠٠ ق.م</span>
          </div>
        </div>
        <div className="w-full h-[1.5px] bg-[#9A5F13]/40" />
      </div>
    </>
  );
}
