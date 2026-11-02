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
      {/* 1. DESKTOP SVG: Left Royal Blue + Multi-Line 3D Ribbon + Right Gold */}
      {/* Wave Curve mathematically sculpted from user's reference image      */}
      {/* Top convex arch (y:140) -> Middle waist (y:360) -> Deep belly (y:650) */}
      {/* =================================================================== */}
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        className="hidden lg:block w-full h-full"
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

        {/* Warm Antique Parchment Gold along the Exact Reference Wave Contour */}
        {/* Sculpted so the line stays well clear of the right content in the lower half (max x <= 461) */}
        <path
          d="M 490,0 C 465,80 425,220 410,340 C 400,420 415,520 440,600 C 465,670 468,730 450,770 C 440,790 435,798 430,800 L 1000,800 L 1000,0 Z"
          fill={`url(#${goldGradId})`}
        />

        {showDivider && (
          <>
            {/* 1. Base Atmosphere Drop Shadow on Blue Side */}
            <path
              d="M 476,0 C 451,80 411,220 396,340 C 386,420 401,520 426,600 C 451,670 454,730 436,770 C 426,790 421,798 416,800"
              fill="none"
              stroke="#010A1A"
              strokeWidth="24"
              strokeOpacity="0.6"
              vectorEffect="non-scaling-stroke"
            />

            {/* 2. Outer 24K Sculpted Gold Ridge (Facing Blue) */}
            <path
              d="M 476,0 C 451,80 411,220 396,340 C 386,420 401,520 426,600 C 451,670 454,730 436,770 C 426,790 421,798 416,800"
              fill="none"
              stroke={`url(#${ribbonGoldId})`}
              strokeWidth="5"
              filter={`url(#${shadowFilterId})`}
              vectorEffect="non-scaling-stroke"
            />

            {/* 3. Deep Royal Blue Inlay Enamel Channel */}
            <path
              d="M 483,0 C 458,80 418,220 403,340 C 393,420 408,520 433,600 C 458,670 461,730 443,770 C 433,790 428,798 423,800"
              fill="none"
              stroke={`url(#${ribbonBlueId})`}
              strokeWidth="9"
              vectorEffect="non-scaling-stroke"
            />

            {/* 4. Inner 24K Polished Gold Ribbon (Facing Parchment) */}
            <path
              d="M 490,0 C 465,80 425,220 410,340 C 400,420 415,520 440,600 C 465,670 468,730 450,770 C 440,790 435,798 430,800"
              fill="none"
              stroke={`url(#${ribbonGoldId})`}
              strokeWidth="8"
              filter={`url(#${shadowFilterId})`}
              vectorEffect="non-scaling-stroke"
            />

            {/* 5. Razor Specular Glint Highlight along the Inner Gold Edge */}
            <path
              d="M 490,0 C 465,80 425,220 410,340 C 400,420 415,520 440,600 C 465,670 468,730 450,770 C 440,790 435,798 430,800"
              fill="none"
              stroke="#FFFDF5"
              strokeWidth="1.8"
              strokeOpacity="0.95"
              vectorEffect="non-scaling-stroke"
            />

            {/* 6. Delicate Gold Echo Filament along Parchment Horizon */}
            <path
              d="M 498,0 C 473,80 433,220 418,340 C 408,420 423,520 448,600 C 473,670 476,730 458,770 C 448,790 443,798 438,800"
              fill="none"
              stroke={`url(#${ribbonTracerId})`}
              strokeWidth="2.2"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>

      {/* Ambient Royal Blue Glow on Left */}
      <div
        className={`hidden lg:block absolute top-1/3 ${
          inverted ? "right-10" : "left-10"
        } w-[420px] h-[420px] bg-[#1355AB]/20 rounded-full blur-[140px] pointer-events-none`}
      />

      {/* Ambient Warm Golden Sheen on Right */}
      <div
        className={`hidden lg:block absolute bottom-10 ${
          inverted ? "left-10" : "right-10"
        } w-[450px] h-[450px] bg-[#C8A232]/12 rounded-full blur-[150px] pointer-events-none`}
      />

      {/* Far Right Egyptian Column Relief Shadow (As in Reference Image) */}
      <div
        className={`hidden lg:block absolute top-0 ${
          inverted ? "left-0" : "right-0"
        } bottom-0 w-32 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_${
          inverted ? "left" : "right"
        },_rgba(154,95,19,0.4)_0%,_transparent_75%)]`}
      />

      {/* =================================================================== */}
      {/* 2. MOBILE RESPONSIVE BACKGROUND (< lg)                             */}
      {/* =================================================================== */}
      <div className={`lg:hidden flex ${inverted ? "flex-col-reverse" : "flex-col"} w-full h-full`}>
        {/* Mobile Top: Royal Blue */}
        <div className="w-full h-[440px] bg-gradient-to-b from-[#020B1D] via-[#0B1E48] to-[#020B1D]" />

        {/* Mobile Horizontal Wavy Ribbon */}
        {showDivider && (
          <div className="relative w-full h-8 -my-4 z-10 overflow-hidden">
            <svg
              viewBox="0 0 400 32"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Blue accent stripe */}
              <path
                d="M 0,14 C 100,5 180,24 260,10 C 330,0 370,22 400,14"
                fill="none"
                stroke={`url(#${ribbonBlueId})`}
                strokeWidth="6"
              />
              {/* Main gold ribbon */}
              <path
                d="M 0,18 C 100,9 180,28 260,14 C 330,4 370,26 400,18"
                fill="none"
                stroke={`url(#${ribbonGoldId})`}
                strokeWidth="8"
              />
              {/* Specular glint */}
              <path
                d="M 0,18 C 100,9 180,28 260,14 C 330,4 370,26 400,18"
                fill="none"
                stroke="#FFFDF5"
                strokeWidth="1.8"
                strokeOpacity="0.9"
              />
            </svg>
          </div>
        )}

        {/* Mobile Bottom: Warm Royal Parchment Gold */}
        <div className="w-full flex-1 bg-gradient-to-b from-[#FAF1DC] to-[#FCF7EB]" />
      </div>
    </div>
  );
}
