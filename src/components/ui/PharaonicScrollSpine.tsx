"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GlyphItem {
  id: string;
  char: string;
  transcription: string;
  tooltipKey?: string;
  isSpecial?: boolean;
}

// Base sacred glyph set for Right Ribbon (Health, Healing, Hesy-Ra) - 14 glyphs
const RIGHT_SINGLE: GlyphItem[] = [
  { id: "r1", char: "𓋹", transcription: "ˁnḫ", tooltipKey: "ankh", isSpecial: true },
  { id: "r2", char: "𓎛", transcription: "ḥ" },
  { id: "r3", char: "𓂝", transcription: "ˁ", tooltipKey: "hesyra", isSpecial: true },
  { id: "r4", char: "𓋴", transcription: "s" },
  { id: "r5", char: "𓁹", transcription: "wḏꜢt", tooltipKey: "horus", isSpecial: true },
  { id: "r6", char: "𓃀", transcription: "b" },
  { id: "r7", char: "𓂋", transcription: "r" },
  { id: "r8", char: "𓏏", transcription: "t" },
  { id: "r9", char: "𓊽", transcription: "ḏd" },
  { id: "r10", char: "𓍶", transcription: "šn" },
  { id: "r11", char: "𓅃", transcription: "ḥr" },
  { id: "r12", char: "𓈖", transcription: "n" },
  { id: "r13", char: "𓎡", transcription: "k" },
  { id: "r14", char: "𓌢", transcription: "sn" },
];

// Base sacred glyph set for Left Ribbon (Renewal, Lotus, Divine Balance) - 14 glyphs
const LEFT_SINGLE: GlyphItem[] = [
  { id: "l1", char: "𓊪", transcription: "p", tooltipKey: "lotus", isSpecial: true },
  { id: "l2", char: "𓌳", transcription: "mꜢˁ" },
  { id: "l3", char: "𓍶", transcription: "šn" },
  { id: "l4", char: "𓅃", transcription: "ḥr" },
  { id: "l5", char: "𓍿", transcription: "ṯ" },
  { id: "l6", char: "𓄿", transcription: "Ꜣ" },
  { id: "l7", char: "𓈖", transcription: "n" },
  { id: "l8", char: "𓎡", transcription: "k" },
  { id: "l9", char: "𓌢", transcription: "sn" },
  { id: "l10", char: "𓊪", transcription: "p", tooltipKey: "lotus", isSpecial: true },
  { id: "l11", char: "𓌳", transcription: "mꜢˁ" },
  { id: "l12", char: "𓋹", transcription: "ˁnḫ", tooltipKey: "ankh", isSpecial: true },
  { id: "l13", char: "𓎛", transcription: "ḥ" },
  { id: "l14", char: "𓁹", transcription: "wḏꜢt", tooltipKey: "horus", isSpecial: true },
];

// Exactly 2 identical halves (50% + 50%) for 100% seamless mathematical loop in GSAP
const RIGHT_GLYPHS = [...RIGHT_SINGLE, ...RIGHT_SINGLE];
const LEFT_GLYPHS = [...LEFT_SINGLE, ...LEFT_SINGLE];

// Rich 30 sacred glyph set repeated to ensure 100% gapless continuous marquee
const SACRED_SYMBOLS = [
  "𓋹", "𓎛", "𓁹", "𓊪", "𓌳", "𓊽", "𓍶", "𓅃", "𓂝", "𓃀",
  "𓏏", "𓋴", "𓇋", "𓂋", "𓍿", "𓄿", "𓈖", "𓎡", "𓌢", "𓊪",
  "𓂧", "𓆓", "𓅓", "𓏤", "𓌻", "𓆑", "𓊃", "𓌙", "𓋹", "𓁹"
];

// 60 items per half (~2,600px wide each) — guarantees ZERO empty gaps on any screen width
const MOBILE_FRIEZE_HALF = [...SACRED_SYMBOLS, ...SACRED_SYMBOLS];

export function PharaonicScrollSpine() {
  const t = useTranslations("pharaonicPillar");
  const { isRtl } = useLanguage();

  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);

  const [activeTooltip, setActiveTooltip] = useState<{
    text: string;
    y: number;
    side: "left" | "right";
  } | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Desktop Left Ribbon: Continuous upward infinite loop (0% to -50%)
    const leftTl = gsap.fromTo(
      leftTrackRef.current,
      { yPercent: 0 },
      {
        yPercent: -50,
        ease: "none",
        duration: 22,
        repeat: -1,
      }
    );

    // 2. Desktop Right Ribbon: Continuous downward infinite loop (-50% to 0%)
    // Starting at -50% ensures the top is ALWAYS pre-filled with zero gaps
    const rightTl = gsap.fromTo(
      rightTrackRef.current,
      { yPercent: -50 },
      {
        yPercent: 0,
        ease: "none",
        duration: 22,
        repeat: -1,
      }
    );

    // Scroll Parallax reaction on desktop
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const vel = Math.abs(self.getVelocity() / 400);
        const targetScale = Math.min(1 + vel, 3);
        gsap.to(leftTl, { timeScale: targetScale, duration: 0.3, overwrite: "auto" });
        gsap.to(rightTl, { timeScale: targetScale, duration: 0.3, overwrite: "auto" });
      },
    });

    return () => {
      leftTl.kill();
      rightTl.kill();
      st.kill();
    };
  }, []);

  const renderDesktopRibbon = (
    side: "left" | "right",
    glyphs: GlyphItem[],
    trackRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const isLeftSide = side === "left";

    return (
      <aside
        aria-label={`Pharaonic Desktop ${side} Hieroglyphic Ribbon`}
        className={`fixed top-1/2 -translate-y-1/2 ${
          isLeftSide ? "left-3 xl:left-5" : "right-3 xl:right-5"
        } z-20 hidden xl:flex flex-col items-center w-8 xl:w-9 h-[44vh] max-h-[440px] rounded-full border border-[#C8A232]/50 bg-[#F9EDD7]/90 hover:bg-[#F9EDD7] backdrop-blur-md shadow-[0_4px_20px_rgba(149,89,4,0.15)] hover:border-[#C8A232] hover:shadow-[0_8px_30px_rgba(200,162,50,0.3)] transition-all duration-300 overflow-hidden group select-none pointer-events-auto`}
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/* Subtle Cardinal Gold Finial Accent Beads */}
        <div className="absolute top-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A232] shadow-[0_0_6px_#DFBF57] z-10" />
        <div className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A232] shadow-[0_0_6px_#DFBF57] z-10" />

        {/* Sliding Glyphs Container - 100% Packed, Gapless & Infinite */}
        <div
          ref={trackRef}
          className="flex flex-col items-center gap-3.5 py-2 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        >
          {glyphs.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              type="button"
              onMouseEnter={(e) => {
                if (item.tooltipKey) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setActiveTooltip({
                    text: t(item.tooltipKey),
                    y: rect.top + rect.height / 2,
                    side,
                  });
                }
              }}
              onMouseLeave={() => setActiveTooltip(null)}
              className="relative flex items-center justify-center w-6 h-6 rounded-full cursor-pointer hover:scale-130 transition-transform duration-200 shrink-0"
            >
              <span
                className={`font-serif text-base xl:text-lg transition-colors duration-200 select-none ${
                  item.isSpecial
                    ? "text-[#955904] font-bold drop-shadow-[0_1px_3px_rgba(200,162,50,0.5)]"
                    : "text-[#955904]/90 group-hover:text-[#955904]"
                }`}
              >
                {item.char}
              </span>

              {/* Indicator Dot for Special Cartouche Glyphs */}
              {item.isSpecial && (
                <span className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full bg-[#C8A232] animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </aside>
    );
  };

  return (
    <>
      {/* 1. Desktop Left Balanced Ribbon (Gutters only - Hidden on mobile & tablet) */}
      {renderDesktopRibbon("left", LEFT_GLYPHS, leftTrackRef)}

      {/* 2. Desktop Right Balanced Ribbon (Gutters only - Hidden on mobile & tablet) */}
      {renderDesktopRibbon("right", RIGHT_GLYPHS, rightTrackRef)}

      {/* 3. Floating Micro-Cartouche Tooltip (Desktop only) */}
      {activeTooltip && (
        <div
          className={`fixed ${
            activeTooltip.side === "left"
              ? "left-14 xl:left-16"
              : "right-14 xl:right-16"
          } z-50 pointer-events-none transition-all duration-200 transform -translate-y-1/2 animate-in fade-in zoom-in-95 hidden xl:block`}
          style={{ top: `${activeTooltip.y}px` }}
        >
          <div className="px-3 py-1.5 rounded-xl bg-[#022256]/95 backdrop-blur-xl border border-[#C8A232] text-white text-[11px] font-body shadow-[0_10px_30px_rgba(2,34,86,0.35)] max-w-[220px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A90E2] shadow-[0_0_6px_#4A90E2] shrink-0 animate-ping" />
            <span className="leading-snug font-medium">{activeTooltip.text}</span>
          </div>
        </div>
      )}

      {/* 4. Mobile & Tablet Only: 100% Gapless Seamless Infinite Bottom Frieze */}
      <div
        aria-label="Mobile Pharaonic Bottom Frieze"
        dir={isRtl ? "rtl" : "ltr"}
        className="fixed bottom-0 left-0 right-0 z-40 xl:hidden h-7 sm:h-8 overflow-hidden border-t border-[#C8A232]/50 bg-[#F9EDD7]/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(2,34,86,0.12)] select-none pointer-events-none pb-[env(safe-area-inset-bottom)] flex items-center"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={`${
            isRtl ? "animate-marquee-infinite-rtl" : "animate-marquee-infinite"
          } flex items-center`}
        >
          {/* Half 1: 60 Items (~2,600px wide) */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0 px-3 sm:px-4">
            {MOBILE_FRIEZE_HALF.map((glyph, idx) => (
              <div key={`m1-${idx}`} className="flex items-center gap-5 sm:gap-6 shrink-0">
                <span className="font-serif text-sm sm:text-base text-[#955904] font-bold drop-shadow-[0_1px_2px_rgba(200,162,50,0.4)]">
                  {glyph}
                </span>
                <span className="text-[7px] text-[#C8A232] font-mono">✦</span>
              </div>
            ))}
          </div>

          {/* Half 2: Identical 60 Items (~2,600px wide, Mathematical Infinite Loop) */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0 px-3 sm:px-4">
            {MOBILE_FRIEZE_HALF.map((glyph, idx) => (
              <div key={`m2-${idx}`} className="flex items-center gap-5 sm:gap-6 shrink-0">
                <span className="font-serif text-sm sm:text-base text-[#955904] font-bold drop-shadow-[0_1px_2px_rgba(200,162,50,0.4)]">
                  {glyph}
                </span>
                <span className="text-[7px] text-[#C8A232] font-mono">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}