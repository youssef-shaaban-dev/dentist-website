"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, RefreshCw } from "lucide-react";

const HIEROGLYPH_CHARS = [
  "𓃀", "𓄿", "𓎛", "𓂧", "𓍿", "𓏏", "𓎡", "𓂋", 
  "𓃭", "𓈖", "𓅱", "𓎼", "𓇌", "𓋹", "𓁹", "𓊹", 
  "𓊖", "𓏤", "𓌳", "𓂝", "𓇋", "𓏛", "𓋴"
];

interface HieroglyphicDecoderProps {
  hieroglyphSource?: string;
  className?: string;
}

export function HieroglyphicDecoder({
  hieroglyphSource = "𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿",
  className = "",
}: HieroglyphicDecoderProps) {
  const { locale, isRtl } = useLanguage();
  const tHero = useTranslations("hero");
  const targetText = tHero("headline");

  const [isDecoding, setIsDecoding] = useState<boolean>(true);
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const getRandomGlyph = () => {
    const randomIndex = Math.floor(Math.random() * HIEROGLYPH_CHARS.length);
    return HIEROGLYPH_CHARS[randomIndex];
  };

  const startDecodingAnimation = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Reset direct DOM text node to hieroglyphic source without triggering a React re-render cycle
    if (textRef.current) {
      textRef.current.textContent = hieroglyphSource;
    }

    const targetLength = targetText.length;
    const progressObj = { progress: 0 };

    const tl = gsap.timeline({
      onStart: () => {
        setIsDecoding(true);
      },
      onComplete: () => {
        if (textRef.current) {
          textRef.current.textContent = targetText;
        }
        setIsDecoding(false);
      },
    });

    timelineRef.current = tl;

    // Small atmospheric delay
    tl.to({}, { duration: 0.35 });

    // GSAP tween that drives character-by-character deciphering
    tl.to(progressObj, {
      progress: 1,
      duration: 3.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentProgress = progressObj.progress;
        const revealedCount = Math.floor(currentProgress * targetLength);

        // Build deciphered string with leading hieroglyphs / scramble characters
        let result = "";
        for (let i = 0; i < targetLength; i++) {
          if (i < revealedCount) {
            // Already resolved character
            result += targetText[i];
          } else if (i < revealedCount + 4) {
            // Active decipher frontier - rapidly scrambling glyphs
            result += getRandomGlyph();
          } else {
            // Unresolved - hieroglyph or space
            if (targetText[i] === " " || targetText[i] === ".") {
              result += targetText[i];
            } else {
              const glyphIndex = i % hieroglyphSource.length;
              result += hieroglyphSource[glyphIndex] || getRandomGlyph();
            }
          }
        }

        if (textRef.current) {
          textRef.current.textContent = result;
        }
      },
    });

    // Subtle scale & glow pulse on container
    if (containerRef.current) {
      tl.fromTo(
        containerRef.current,
        { filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))" },
        {
          filter: "drop-shadow(0 0 35px rgba(212, 175, 55, 0.75))",
          duration: 1.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        0.5
      );
    }
  }, [targetText, hieroglyphSource]);

  // Synchronize with external GSAP animation system without synchronous setState in effect body
  useEffect(() => {
    startDecodingAnimation();
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [startDecodingAnimation, locale]);

  const handleManualReplay = () => {
    setIsDecoding(true);
    startDecodingAnimation();
  };

  return (
    <div className={`relative flex flex-col items-center lg:items-start ${className}`}>
      {/* Decorative Royal Inscription Pill */}
      <div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0E1838]/60 backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#F3E5AB]">
          {isDecoding ? tHero("decoding") : tHero("resolved")}
        </span>
        <button
          type="button"
          onClick={handleManualReplay}
          disabled={isDecoding}
          className="ml-1 p-1 hover:text-[#D4AF37] text-[#FDFBF7]/60 transition-transform active:rotate-180 disabled:opacity-40"
          title={tHero("decoderHint")}
          aria-label={tHero("decoderHint")}
        >
          <RefreshCw className={`w-3 h-3 ${isDecoding ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* Main Headline Display with Hieroglyph Decoding */}
      <div
        ref={containerRef}
        className="relative px-1 py-1 max-w-3xl text-center lg:text-start select-none"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <h1
          className={`
            text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.25] tracking-tight
            ${locale === "en" ? "font-display-en" : "font-display"}
            transition-all duration-300
          `}
        >
          <span
            ref={textRef}
            className={`
              inline-block transition-all duration-200
              ${isDecoding ? "text-[#F3E5AB] tracking-widest font-serif" : "gold-text-gradient"}
            `}
          >
            {hieroglyphSource}
          </span>
        </h1>

        {/* Ambient scanning light bar traversing horizontally */}
        {isDecoding && (
          <div
            className={`
              absolute -bottom-2 left-0 right-0 h-[2px] 
              bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent 
              animate-pulse opacity-85
            `}
          />
        )}
      </div>

      {/* Hieroglyphic original inscription reference */}
      <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#D4AF37]/75 font-mono tracking-widest opacity-80">
        <span className="text-[10px] uppercase text-[#FDFBF7]/40">{tHero("originalPapyrus")}</span>
        <span className="text-sm tracking-wider text-[#F3E5AB] border-b border-[#D4AF37]/30 pb-0.5">
          {hieroglyphSource}
        </span>
      </div>
    </div>
  );
}
