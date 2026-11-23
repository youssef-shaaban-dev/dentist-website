"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

export interface SplitSectionLayoutProps {
  id?: string;
  className?: string;
  inverted?: boolean;
  waveVariant?: "A" | "B";
  showDivider?: boolean;
  /**
   * Content to render on the Warm Gold / Parchment side of the split.
   * (RTL: Right half | LTR: Left half)
   */
  parchmentContent: React.ReactNode;
  /**
   * Content to render on the Royal Blue side of the split.
   * (RTL: Left half | LTR: Right half)
   */
  royalBlueContent: React.ReactNode;
  /**
   * When true, offsets the Parchment side to account for the Hieroglyphic Pillar (w-32 / w-36),
   * ensuring the parchment content is mathematically centered between the pillar and the dividing wave.
   */
  hasPillarOffset?: boolean;
  /**
   * Mobile stacking order: "parchment-first" (default) or "royalblue-first" (e.g. video first).
   */
  mobileOrder?: "parchment-first" | "royalblue-first";
  /**
   * Vertical alignment of the two columns on desktop: "center" (default) or "stretch".
   */
  alignItems?: "center" | "stretch";
  /**
   * Optional custom classes for the parchment side container
   */
  parchmentClassName?: string;
  /**
   * Optional custom classes for the royal blue side container
   */
  royalBlueClassName?: string;
  /**
   * Optional overlay elements (e.g. ambient glows, floating badges)
   */
  children?: React.ReactNode;
}

export function SplitSectionLayout({
  id,
  className = "relative w-full py-20 sm:py-28 px-0 overflow-hidden z-20 shadow-2xl",
  inverted,
  waveVariant = "A",
  showDivider = true,
  parchmentContent,
  royalBlueContent,
  hasPillarOffset = false,
  mobileOrder = "parchment-first",
  alignItems = "center",
  parchmentClassName = "",
  royalBlueClassName = "",
  children,
}: SplitSectionLayoutProps) {
  const { isRtl } = useLanguage();
  const effectiveInverted = inverted !== undefined ? inverted : !isRtl;

  const isStretch = alignItems === "stretch";

  // Mobile order logic:
  // In DOM: Parchment column is #1, Royal Blue is #2.
  // In RTL: Col 1 is on the right (Parchment side), Col 2 is on the left (Royal Blue side).
  const parchmentMobileOrder = mobileOrder === "royalblue-first" ? "order-2 lg:order-1" : "order-1";
  const royalBlueMobileOrder = mobileOrder === "royalblue-first" ? "order-1 lg:order-2" : "order-2";

  // Spacing and pillar compensation:
  const parchmentPadding = hasPillarOffset
    ? isRtl
      ? "lg:pr-44 xl:pr-56 2xl:pr-64 lg:pl-8 xl:pl-12 px-4 sm:px-6"
      : "lg:pl-44 xl:pl-56 2xl:pl-64 lg:pr-8 xl:pr-12 px-4 sm:px-6"
    : "px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20";

  const royalBluePadding = "px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20";

  return (
    <section id={id} className={className} dir={isRtl ? "rtl" : "ltr"}>
      {/* Signature Multi-Line 3D Ribbon Split Background */}
      <SplitSectionBackground
        inverted={effectiveInverted}
        waveVariant={waveVariant}
        showDivider={showDivider}
      />

      {/* Main Full-Width Content Grid: Left 50% / Right 50% */}
      <div className="w-full relative z-10">
        <div
          className={`w-full grid grid-cols-1 lg:grid-cols-2 ${
            isStretch ? "items-stretch" : "items-center"
          } min-h-0`}
        >
          {/* 1. Parchment Column (Right side in RTL, Left side in LTR) */}
          <div
            className={`w-full flex justify-center items-center ${parchmentMobileOrder} ${parchmentPadding} ${parchmentClassName}`}
          >
            {parchmentContent}
          </div>

          {/* 2. Royal Blue Column (Left side in RTL, Right side in LTR) */}
          <div
            className={`w-full flex justify-center items-center ${royalBlueMobileOrder} ${royalBluePadding} ${royalBlueClassName}`}
          >
            {royalBlueContent}
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
