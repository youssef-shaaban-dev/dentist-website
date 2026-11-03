"use client";

import React, { useId } from "react";

interface SplitSectionBackgroundProps {
  className?: string;
  showDivider?: boolean;
  inverted?: boolean;
}

export function SplitSectionBackground({
  className = "",
  showDivider = true,
  inverted = false,
}: SplitSectionBackgroundProps) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const blueGradId = `splitBlueGrad-${id}`;
  const goldGradId = `splitGoldGrad-${id}`;
  const ribbonBlueId = `splitRibbonBlue-${id}`;
  const ribbonGoldId = `splitRibbonGold-${id}`;
  const ribbonTracerId = `splitRibbonTracer-${id}`;
  const shadowFilterId = `splitShadow-${id}`;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden ${className}`}
    >
      {/* =================================================================== */}
      {/* 3D S-CURVE VERTICAL BACKGROUND (Unified across Desktop & Mobile)     */}
      {/* Left Royal Blue + Multi-Line 3D Ribbon + Right Warm Antique Gold    */}
      {/* Continuous C1-smooth luxury S-curve identical across all viewports  */}
      {/* =================================================================== */}
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={inverted ? { transform: "scaleX(-1)", transformOrigin: "center" } : undefined}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Royal Blue Gradient (Left Side) */}
          <linearGradient id={blueGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020B1D" />
            <stop offset="30%" stopColor="#061B44" />
            <stop offset="65%" stopColor="#0B275C" />
            <stop offset="100%" stopColor="#020E26" />
          </linearGradient>

          {/* Antique Warm Gold / Parchment Gradient (Right Side) */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBF7EE" />
            <stop offset="35%" stopColor="#FAF1DD" />
            <stop offset="70%" stopColor="#F6E8CA" />
            <stop offset="100%" stopColor="#EED9B4" />
          </linearGradient>

          {/* Line 1: Royal Blue Metallic Ribbon Stripe */}
          <linearGradient id={ribbonBlueId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082A63" />
            <stop offset="25%" stopColor="#1756BD" />
            <stop offset="50%" stopColor="#3C7DD9" />
            <stop offset="75%" stopColor="#0F4599" />
            <stop offset="100%" stopColor="#051C47" />
          </linearGradient>

          {/* Line 2: Main 24K Sculpted Metallic Gold Ribbon */}
          <linearGradient id={ribbonGoldId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E4002" />
            <stop offset="12%" stopColor="#C8A232" />
            <stop offset="26%" stopColor="#FFF9E6" />
            <stop offset="45%" stopColor="#DFBF57" />
            <stop offset="68%" stopColor="#8A5811" />
            <stop offset="85%" stopColor="#E5C768" />
            <stop offset="100%" stopColor="#543102" />
          </linearGradient>

          {/* Line 3: Outer Gold Echo Tracer Filament */}
          <linearGradient id={ribbonTracerId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A232" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#DFBF57" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#FFEDB3" stopOpacity="1" />
            <stop offset="100%" stopColor="#8A5811" stopOpacity="0.3" />
          </linearGradient>

          {/* Realistic 3D Ribbon Drop Shadow */}
          <filter id={shadowFilterId} x="-30%" y="-15%" width="160%" height="130%">
            <feDropShadow dx="-4" dy="5" stdDeviation="6" floodColor="#020B1D" floodOpacity="0.65" />
            <feDropShadow dx="3" dy="4" stdDeviation="5" floodColor="#C8A232" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Base: Deep Royal Blue (Left Half) */}
        <rect width="1000" height="800" fill={`url(#${blueGradId})`} />

        {/* Warm Antique Parchment Gold along the Continuous C1-smooth S-curve */}
        <path
          d="M 500,0 C 500,100 470,180 470,260 C 470,360 530,440 530,540 C 530,640 500,720 500,800 L 1000,800 L 1000,0 Z"
          fill={`url(#${goldGradId})`}
        />

        {showDivider && (
          <>
            {/* 1. Base Atmosphere Drop Shadow on Blue Side */}
            <path
              d="M 488,0 C 488,100 458,180 458,260 C 458,360 518,440 518,540 C 518,640 488,720 488,800"
              fill="none"
              stroke="#010A1A"
              strokeWidth="24"
              strokeOpacity="0.8"
              filter={`url(#${shadowFilterId})`}
              vectorEffect="non-scaling-stroke"
            />

            {/* 2. Outer 24K Sculpted Gold Ridge (Facing Blue) */}
            <path
              d="M 488,0 C 488,100 458,180 458,260 C 458,360 518,440 518,540 C 518,640 488,720 488,800"
              fill="none"
              stroke={`url(#${ribbonGoldId})`}
              strokeWidth="5"
              filter={`url(#${shadowFilterId})`}
              vectorEffect="non-scaling-stroke"
            />

            {/* 3. Deep Royal Blue Inlay Enamel Channel */}
            <path
              d="M 494,0 C 494,100 464,180 464,260 C 464,360 524,440 524,540 C 524,640 494,720 494,800"
              fill="none"
              stroke={`url(#${ribbonBlueId})`}
              strokeWidth="9"
              vectorEffect="non-scaling-stroke"
            />

            {/* 4. Inner 24K Polished Gold Ribbon (Facing Parchment) */}
            <path
              d="M 500,0 C 500,100 470,180 470,260 C 470,360 530,440 530,540 C 530,640 500,720 500,800"
              fill="none"
              stroke={`url(#${ribbonGoldId})`}
              strokeWidth="8"
              filter={`url(#${shadowFilterId})`}
              vectorEffect="non-scaling-stroke"
            />

            {/* 5. Razor Specular Glint Highlight along the Inner Gold Edge */}
            <path
              d="M 500,0 C 500,100 470,180 470,260 C 470,360 530,440 530,540 C 530,640 500,720 500,800"
              fill="none"
              stroke="#FFFDF5"
              strokeWidth="1.8"
              strokeOpacity="0.95"
              vectorEffect="non-scaling-stroke"
            />

            {/* 6. Delicate Gold Echo Filament along Parchment Horizon */}
            <path
              d="M 508,0 C 508,100 478,180 478,260 C 478,360 538,440 538,540 C 538,640 508,720 508,800"
              fill="none"
              stroke={`url(#${ribbonTracerId})`}
              strokeWidth="2.2"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>

      {/* Ambient Royal Blue Glow on Left (Mobile only) */}
      <div
        className={`lg:hidden absolute top-1/3 ${
          inverted ? "right-2" : "left-2"
        } w-[200px] h-[200px] bg-[#1355AB]/20 rounded-full blur-[70px] pointer-events-none`}
      />

      {/* Ambient Warm Golden Sheen on Right (Mobile only) */}
      <div
        className={`lg:hidden absolute bottom-10 ${
          inverted ? "left-2" : "right-2"
        } w-[220px] h-[220px] bg-[#C8A232]/12 rounded-full blur-[75px] pointer-events-none`}
      />

      {/* Far Right Egyptian Column Relief Shadow (Desktop only) */}
      <div
        className={`hidden lg:block absolute top-0 ${
          inverted ? "left-0" : "right-0"
        } bottom-0 w-24 sm:w-28 lg:w-32 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_${
          inverted ? "left" : "right"
        },_rgba(154,95,19,0.4)_0%,_transparent_75%)]`}
      />
    </div>
  );
}
