"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, ScrollText } from "lucide-react";

interface HieroglyphicDecoderProps {
  hieroglyphSource?: string;
  className?: string;
}

export function HieroglyphicDecoder({
  hieroglyphSource = "𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿",
  className = "",
}: HieroglyphicDecoderProps) {
  const { locale, isRtl } = useLanguage();

  const cartoucheRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Smooth Royal Cartouche Entrance
      tl.fromTo(
        cartoucheRef.current,
        { opacity: 0, y: -15, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9 }
      );

      // 2. Soft Golden Sheen Traversing the Hieroglyphs
      if (sheenRef.current) {
        tl.fromTo(
          sheenRef.current,
          { xPercent: isRtl ? 150 : -150, opacity: 0 },
          { xPercent: isRtl ? -150 : 150, opacity: 0.85, duration: 1.6, ease: "power2.inOut" },
          "-=0.5"
        );
      }

      // 3. Calm, Majestic Typographic Line Reveals (Zero Jitter / Zero Shaking)
      tl.fromTo(
        [line1Ref.current, line2Ref.current],
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.16,
          ease: "expo.out",
        },
        "-=1.0"
      );
    });

    return () => ctx.revert();
  }, [locale, isRtl]);

  // Formatted Headline with highlighted royal name
  const renderFormattedHeadline = () => {
    if (locale === "ar") {
      return (
        <>
          <span ref={line1Ref} className="block text-[#0A1128] mb-1">
            نحن أحفاد{" "}
            <span className="gold-text-gradient font-black underline decoration-[#C8A232]/40 decoration-2 underline-offset-8">
              حسي رع
            </span>
            ...
          </span>
          <span ref={line2Ref} className="block text-[#0A1128]/95 font-bold">
            نواصل مسيرة أقدم طبيب أسنان في تاريخ البشرية.
          </span>
        </>
      );
    }

    if (locale === "en") {
      return (
        <>
          <span ref={line1Ref} className="block text-[#0A1128] mb-1">
            Descendants of{" "}
            <span className="gold-text-gradient font-black underline decoration-[#C8A232]/40 decoration-2 underline-offset-8">
              Hesy-Ra
            </span>
            ...
          </span>
          <span ref={line2Ref} className="block text-[#0A1128]/95 font-bold text-3xl sm:text-4xl md:text-5xl">
            Continuing the legacy of humanity’s first dentist.
          </span>
        </>
      );
    }

    if (locale === "fr") {
      return (
        <>
          <span ref={line1Ref} className="block text-[#0A1128] mb-1">
            Héritiers d’
            <span className="gold-text-gradient font-black underline decoration-[#C8A232]/40 decoration-2 underline-offset-8">
              Hésy-Rê
            </span>
            ...
          </span>
          <span ref={line2Ref} className="block text-[#0A1128]/95 font-bold text-3xl sm:text-4xl md:text-5xl">
            L&apos;art du tout premier dentiste de l&apos;humanité.
          </span>
        </>
      );
    }

    return (
      <>
        <span ref={line1Ref} className="block text-[#0A1128] mb-1">
          Мы — наследники{" "}
          <span className="gold-text-gradient font-black underline decoration-[#C8A232]/40 decoration-2 underline-offset-8">
            Хеси-Ра
          </span>
          ...
        </span>
        <span ref={line2Ref} className="block text-[#0A1128]/95 font-bold text-3xl sm:text-4xl md:text-5xl">
          Продолжая миссию первого стоматолога в истории.
        </span>
      </>
    );
  };

  return (
    <div className={`relative flex flex-col items-center lg:items-start ${className}`}>
      
      {/* 1. Royal Pharaonic Cartouche Ribbon (Calm, Golden, Ancient Artifact) */}
      <div
        ref={cartoucheRef}
        className="relative overflow-hidden inline-flex items-center gap-3 px-4 py-2 rounded-2xl border-2 border-[#C8A232]/50 bg-gradient-to-r from-white via-[#FAF8F5] to-white shadow-sm mb-5 group"
      >
        {/* Animated Golden Sheen Light Ray */}
        <div
          ref={sheenRef}
          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#DFBF57]/50 to-transparent pointer-events-none transform -skew-x-20"
        />

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#FAF6EE] border border-[#C8A232]/40 flex items-center justify-center text-[#8C6A12] shadow-xs">
            <ScrollText className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#8C6A12]">
            {locale === "ar" ? "بردية حسي رع الملكية" : "PAPYRUS OF HESY-RA"}
          </span>
        </div>

        <div className="h-4 w-[1px] bg-[#C8A232]/40" />

        {/* Crisp, Static, Beautiful Hieroglyphic Glyphs */}
        <span
          className="text-base sm:text-lg text-[#8C6A12] font-serif tracking-widest select-none drop-shadow-[0_1px_2px_rgba(200,162,50,0.3)]"
          title={hieroglyphSource}
        >
          {hieroglyphSource}
        </span>

        <Sparkles className="w-3.5 h-3.5 text-[#C8A232] animate-pulse" />
      </div>

      {/* 2. Main Headline (Calm, Elegant Typographic Grandeur - Zero Jitter) */}
      <div
        className="relative max-w-3xl text-center lg:text-start select-none"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <h1
          className={`
            text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.28] tracking-tight
            ${locale === "en" ? "font-display-en" : "font-display"}
          `}
        >
          {renderFormattedHeadline()}
        </h1>
      </div>

    </div>
  );
}
