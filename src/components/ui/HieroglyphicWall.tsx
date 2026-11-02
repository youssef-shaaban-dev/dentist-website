"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { gsap } from "gsap";
import {
  Scan,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Crown,
  BookOpen,
} from "lucide-react";

export interface HieroglyphicInscription {
  id: string;
  titleAr: string;
  titleEn: string;
  glyphs: string[];
  arabicText: string;
  englishText: string;
  sourceAr: string;
  sourceEn: string;
}

export const INSCRIPTIONS: HieroglyphicInscription[] = [
  {
    id: "hesy-ra-lineage",
    titleAr: "شفرة سقارة • إرث حسي رع",
    titleEn: "Saqqara Cipher • Lineage of Hesy-Ra",
    glyphs: [
      "𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿 𓄿𓃭𓏏𓃀𓇌𓏏",
      "𓄿𓅓𓏏𓂧𓄿𓂧 𓄿𓃭𓇋𓂋𓍿 𓇌𓃀𓂧𓄿 𓉔𓈖𓄿",
      "𓈖𓎛𓈖 𓄿𓎛𓆑𓄿𓂧 𓎛𓋴𓇌 𓂋𓂝",
      "𓈖𓅱𓄿𓋴𓃭 𓅓𓋴𓇌𓂋𓏏 𓄿𓈎𓂧𓅓 𓏏𓃀𓇌𓃀 𓄿𓋴𓈖𓄿𓈖 𓆑𓇌 𓏏𓄿𓂋𓇌𓐍 𓄿𓃭𓃀𓈙𓂋𓇌𓏏",
      "𓅱𓄿𓃭𓂧𓇌 𓏏𓈙𓉔𓂧 𓂝𓃭𓇌 𓅓𓎡𓄿𓈖𓏏𓉔",
      "𓄿𓃭𓄿𓃭𓅱𓄿𓎛 𓄿𓃭𓐍𓈙𓃀𓇌𓏏 𓄿𓃭𓈖𓄿𓂧𓂋𓏏",
      "𓄿𓃭𓏏𓇌 𓂝ُ𓍿𓂋 𓂝𓃭𓇌𓉔𓄿 𓆑𓇌 𓅓𓈎𓃀𓂋𓏏𓉔 𓃀𓋴𓈎𓄿𓂋𓏏",
    ],
    arabicText:
      "بأحدث ابتكارات التكنولوجيا الطبية، امتداد الإرث يبدأ هنا. نحن أحفاد حسي رع، نواصل مسيرة أقدم طبيب أسنان في تاريخ البشرية، والذي تشهد على مكانته الألواح الخشبية النادرة التي عُثر عليها في مقبرته بسقارة.",
    englishText:
      "With the latest medical technology innovations, the continuity of heritage begins here. We are the descendants of Hesy-Ra, carrying forward the legacy of the earliest documented dentist in human history, whose prestige is witnessed by the rare wooden panels discovered in his tomb at Saqqara.",
    sourceAr: "منقوشة مستلهمة من مقبرة حسي رع في سقارة (٢٦٠٠ ق.م)",
    sourceEn: "Inspired by the Mastaba of Hesy-Ra in Saqqara (2600 BCE)",
  },
  {
    id: "smile-craftsmanship",
    titleAr: "شفرة نحت الابتسامة الفنية",
    titleEn: "Smile Artistry Cipher",
    glyphs: [
      "𓈖𓎛𓈖 𓆑𓇌 𓂝𓇌𓄿𓂧𓏏 𓄿𓃭𓄿𓃀𓏏𓋴𓄿𓅓𓏏 𓄿𓃭𓂋𓄿𓇌𓄿𓂝𓏏",
      "𓃭𓄿 𓈖𓋴𓈖𓂝 𓄿𓃀𓏏𓋴𓄿𓅓𓏏 𓆑𓎛𓋴𓃀",
      "𓃀𓃭 𓈖𓈙𓎡𓃭 𓏏𓎛𓆑𓏏 𓆑𓈖𓇌𓏏",
      "𓏏𓋴𓏏𓎛𓈎 𓄿𓈖 𓏏𓈖𓈎𓈙 𓆑𓇌 𓂧𓄿𓎡𓂋𓏏 𓅓𓈖 𓇌𓂋𓄿𓉔𓄿",
      "𓈖𓂝𓄿𓅓𓃭 𓎡𓃭 𓏏𓆑𓋴𓇌𓃭𓏏",
      "𓎡𓅓𓄿 𓃭𓅱 𓎡𓄿𓈖𓏏 𓏏𓄿𓎼 𓇌𓊃𓇌𓈖 𓅓𓃭𓄿𓅓𓎛𓎡𓅓",
      "𓃭𓏏𓄡𓄿𓂧𓂋𓅱𓄿 𓃀𓄿𓃀𓏏𓋴𓄿𓅓𓏏 𓅓𓏏𓅱𓎼𓏏",
      "𓃀𓆑𓐍𓄿𓅓𓏏 𓄿𓃭𓅓𓃭𓅱𓎡 𓅱𓍿𓈎𓏏 𓃭𓄿 𓏏𓈎𓉔𓂋",
    ],
    arabicText:
      "نحن في عيادة الابتسامة الرائعة لا نصنع ابتسامة فحسب، بل نُشكِّل تحفة فنية تستحق أن تُنقش في ذاكرة من يراها. نُعامل كل تفصيلة كما لو كانت تاجًا يزيّن ملامحكم، لتغادروا بابتسامة متوَّجة بفخامة الملوك وثقة لا تُقهر.",
    englishText:
      "At Magnificent Smile Clinic, we don't merely create a smile—we sculpt a masterpiece worthy of being engraved in the memory of all who behold it. We treat every detail as a crown adorning your features, so you emerge with a smile crowned in majesty and invincible confidence.",
    sourceAr: "ميثاق الجودة ونحت الابتسامة في ماغنيفيسنت سمايل",
    sourceEn: "Artistic Smile Charter at Magnificent Smile Clinic",
  },
];

export function HieroglyphicWall() {
  const { isRtl } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const laserRef = useRef<HTMLDivElement>(null);
  const currentInscription = INSCRIPTIONS[activeIdx];

  const handleScanClick = () => {
    setIsScanning(true);
    setIsOpen(true);

    if (laserRef.current) {
      gsap.fromTo(
        laserRef.current,
        { top: "0%", opacity: 1 },
        {
          top: "100%",
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            setIsScanning(false);
          },
        }
      );
    } else {
      setTimeout(() => setIsScanning(false), 800);
    }
  };

  return (
    <>
      {/* =================================================================== */}
      {/* 1. FIXED RIGHT ARCHITECTURAL HIEROGLYPHIC COLUMN (Desktop lg+)     */}
      {/* Exactly matching the stone relief column in the reference images    */}
      {/* =================================================================== */}
      <aside
        aria-label="Ancient Egyptian Hieroglyphic Wall"
        className="hidden xl:flex fixed top-24 bottom-6 right-2 w-14 z-30 flex-col items-center justify-between py-4 select-none pointer-events-auto rounded-full bg-gradient-to-b from-[#EEDAB7]/90 via-[#FAF1DC]/80 to-[#E5CCA0]/90 border border-[#9A5F13]/40 shadow-[0_10px_30px_rgba(154,95,19,0.2)] backdrop-blur-md transition-all duration-300 hover:w-16 hover:shadow-[0_15px_40px_rgba(154,95,19,0.35)] group cursor-pointer"
        onClick={handleScanClick}
      >
        {/* Top Stone Capital Carving Accent */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <Crown className="w-4 h-4 text-[#9A5F13] group-hover:scale-110 transition-transform" />
          <span className="w-6 h-[1.5px] bg-[#9A5F13]/50" />
        </div>

        {/* Vertical Hieroglyphic Glyphs Carved along the Stone */}
        <div className="flex-1 flex flex-col items-center justify-around py-3 overflow-hidden text-base select-none leading-none opacity-80 group-hover:opacity-100 transition-opacity">
          {currentInscription.glyphs.slice(0, 7).map((line, idx) => (
            <span
              key={idx}
              className="text-[#543102] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] hover:text-[#9A5F13] transition-colors"
              title={isRtl ? "انقر للمسح وفك الشفرة" : "Click to scan inscription"}
            >
              {line.slice(0, 2)}
            </span>
          ))}
        </div>

        {/* Bottom Scanner Action Trigger */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <span className="w-6 h-[1.5px] bg-[#9A5F13]/50" />
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#012052] text-[#DFBF57] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
            aria-label="Scan Hieroglyphic Inscription"
          >
            <Scan className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Tooltip Pill */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "left-full ml-2" : "right-full mr-2"
            } hidden group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#012052] text-white text-xs font-mono font-bold shadow-xl border border-[#DFBF57]/50 whitespace-nowrap pointer-events-none z-40`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFBF57] animate-spin" />
          <span>{isRtl ? "انقر لمسح الرموز وفك الشفرة" : "Click to scan cipher"}</span>
        </div>
      </aside>

      {/* Floating Trigger for Mobile & Tablets (< xl) */}
      <button
        type="button"
        onClick={handleScanClick}
        aria-label="Scan Hieroglyphs"
        className="xl:hidden fixed bottom-6 right-5 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#012052] text-[#DFBF57] border border-[#C8A232] shadow-[0_8px_25px_rgba(1,32,82,0.4)] backdrop-blur-md active:scale-95 transition-all cursor-pointer font-mono text-xs font-bold"
      >
        <Scan className="w-4 h-4 animate-pulse" />
        <span>{isRtl ? "شفرة حسي رع" : "Hesy-Ra Cipher"}</span>
      </button>

      {/* =================================================================== */}
      {/* 2. OPTICAL SCANNER MODAL & DECODER INTERFACE                       */}
      {/* =================================================================== */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden border-2 border-[#C8A232] bg-gradient-to-b from-[#FAF1DC] via-[#FCF7EB] to-[#FAF1DC] shadow-[0_25px_70px_rgba(0,0,0,0.6)] text-[#0F266A]"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {/* Top 24K Gold Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 bg-[#012052] text-white border-b border-[#C8A232]/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF1DC] text-[#9A5F13] flex items-center justify-center">
                  <Scan className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">
                    {isRtl ? "ماسح النقوش الهيروغليفية التاريخية" : "Historical Hieroglyphic Inscription Scanner"}
                  </h3>
                  <span className="text-[11px] font-mono text-[#DFBF57]">
                    {currentInscription.sourceAr}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Inscription Selector Switcher */}
            <div className="px-5 pt-4 flex items-center justify-between border-b border-[#C8A232]/25 pb-3">
              <div className="flex items-center gap-2">
                {INSCRIPTIONS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${activeIdx === idx
                      ? "bg-[#012052] text-white shadow-xs"
                      : "bg-white/80 text-[#543102] border border-[#C8A232]/40 hover:bg-white"
                      }`}
                  >
                    0{idx + 1}. {isRtl ? item.titleAr : item.titleEn}
                  </button>
                ))}
              </div>

              <span className="text-[11px] font-mono font-bold text-[#9A5F13]">
                {activeIdx + 1} / {INSCRIPTIONS.length}
              </span>
            </div>

            {/* Main Scanner Stage */}
            <div className="p-6 relative overflow-hidden">
              {/* Laser Scanning Beam Line */}
              <div
                ref={laserRef}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFBF57] to-transparent shadow-[0_0_15px_#DFBF57] z-20 pointer-events-none opacity-0"
              />

              {/* 1. Hieroglyphic Carved Inscription Canvas */}
              <div className="relative p-5 rounded-2xl bg-white/70 border-2 border-[#C8A232]/40 shadow-inner mb-5">
                <div className="text-center font-serif text-lg sm:text-xl leading-relaxed tracking-wider text-[#543102] select-all space-y-1">
                  {currentInscription.glyphs.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className="transition-colors hover:text-[#9A5F13] cursor-default"
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* Corner Ancient Stamps */}
                <span className="absolute top-2 left-2 text-[10px] font-mono text-[#9A5F13]/60">
                  𓋴𓈎𓄿𓂋𓏏
                </span>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#9A5F13]/60">
                  𓎛𓋴𓇌 𓂋𓂝
                </span>
              </div>

              {/* 2. Decoded Translation Block */}
              <div className="p-5 rounded-2xl bg-[#012052] text-white shadow-lg border border-[#C8A232]/50">
                <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/15">
                  <BookOpen className="w-4 h-4 text-[#DFBF57]" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#DFBF57]">
                    {isRtl ? "الترجمة والنص العربي الموثق" : "Decoded Meaning & Context"}
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-relaxed font-body text-white/95">
                  {isRtl ? currentInscription.arabicText : currentInscription.englishText}
                </p>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="px-6 py-4 bg-white/70 border-t border-[#C8A232]/30 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev > 0 ? prev - 1 : INSCRIPTIONS.length - 1))
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#C8A232]/40 text-xs font-bold text-[#0F266A] hover:bg-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                <span>{isRtl ? "الشفرة السابقة" : "Previous"}</span>
              </button>

              <button
                type="button"
                onClick={handleScanClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Scan className="w-3.5 h-3.5" />
                <span>{isRtl ? "إعادة الفحص الميكروني" : "Rescan Inscription"}</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev < INSCRIPTIONS.length - 1 ? prev + 1 : 0))
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#C8A232]/40 text-xs font-bold text-[#0F266A] hover:bg-white transition-colors cursor-pointer"
              >
                <span>{isRtl ? "الشفرة التالية" : "Next"}</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

