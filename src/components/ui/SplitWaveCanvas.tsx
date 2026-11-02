"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

interface SplitWaveCanvasProps {
  id?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  bottomStrip?: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  leftColSpan?: string; // e.g. "lg:col-span-5"
  rightColSpan?: string; // e.g. "lg:col-span-7"
  reversed?: boolean; // Flip left/right on desktop
}

export function SplitWaveCanvas({
  id,
  leftContent,
  rightContent,
  bottomStrip,
  className = "",
  leftClassName = "",
  rightClassName = "",
  leftColSpan = "lg:col-span-5 xl:col-span-5",
  rightColSpan = "lg:col-span-7 xl:col-span-7",
  reversed = false,
}: SplitWaveCanvasProps) {
  const { isRtl } = useLanguage();

  return (
    <section
      id={id}
      dir={isRtl ? "rtl" : "ltr"}
      className={`relative w-full overflow-hidden border-y border-[#C8A232]/35 shadow-2xl ${className}`}
    >
      {/* =================================================================== */}
      {/* 1. DESKTOP BACKGROUND CANVAS: Royal Blue Left + S-Curve Gold Ribbon + Ivory Right */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block -z-10 overflow-hidden">
        <svg
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Royal Blue Metallic Gradient */}
            <linearGradient id="splitRoyalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#01122E" />
              <stop offset="45%" stopColor="#012052" />
              <stop offset="100%" stopColor="#000E24" />
            </linearGradient>

            {/* Warm Luxury Ivory / Parchment Gradient */}
            <linearGradient id="splitWarmIvory" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDFBF7" />
              <stop offset="60%" stopColor="#FAF6EE" />
              <stop offset="100%" stopColor="#F5EFE3" />
            </linearGradient>

            {/* 24K Multi-stop Metallic Gold Gradient for Ribbon */}
            <linearGradient id="goldRibbon3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C6A12" />
              <stop offset="15%" stopColor="#C8A232" />
              <stop offset="35%" stopColor="#FFEDB3" />
              <stop offset="55%" stopColor="#DFBF57" />
              <stop offset="75%" stopColor="#955904" />
              <stop offset="90%" stopColor="#DFBF57" />
              <stop offset="100%" stopColor="#7A4D02" />
            </linearGradient>

            {/* Realistic 3D Ribbon Drop Shadow */}
            <filter id="ribbonGlowShadow" x="-25%" y="-15%" width="150%" height="130%">
              <feDropShadow dx="3" dy="5" stdDeviation="5" floodColor="#01122E" floodOpacity="0.4" />
              <feDropShadow dx="-2" dy="2" stdDeviation="4" floodColor="#C8A232" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Base Layer: 100% Deep Royal Blue */}
          <rect width="1000" height="800" fill="url(#splitRoyalBlue)" />

          {/* Right Half: Warm Ivory filling along the S-Curve contour */}
          <path
            d="M 480,0 C 545,170 565,270 505,400 C 445,530 435,630 495,800 L 1000,800 L 1000,0 Z"
            fill="url(#splitWarmIvory)"
          />

          {/* 3D Sculpted Ribbon Layer 1: Dark Blue Outer Cast Shadow */}
          <path
            d="M 480,0 C 545,170 565,270 505,400 C 445,530 435,630 495,800"
            fill="none"
            stroke="#01122E"
            strokeWidth="16"
            strokeOpacity="0.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3D Sculpted Ribbon Layer 2: Main 24K Gleaming Gold Band */}
          <path
            d="M 480,0 C 545,170 565,270 505,400 C 445,530 435,630 495,800"
            fill="none"
            stroke="url(#goldRibbon3D)"
            strokeWidth="11"
            filter="url(#ribbonGlowShadow)"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3D Sculpted Ribbon Layer 3: Razor Specular Light Glint Line */}
          <path
            d="M 480,0 C 545,170 565,270 505,400 C 445,530 435,630 495,800"
            fill="none"
            stroke="#FFFBEA"
            strokeWidth="2.5"
            strokeOpacity="0.85"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Ambient Royal Gold Glow on Blue Side */}
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#C8A232]/12 rounded-full blur-[140px] pointer-events-none" />
        {/* Soft Warm Radial Sheen on Ivory Side */}
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C8A232]/6 rounded-full blur-[160px] pointer-events-none" />

        {/* Antique Egyptian Pillar Hieroglyphic Relief Watermark on far right */}
        <div className="absolute top-0 right-0 bottom-0 w-24 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_right,_rgba(200,162,50,0.4)_0%,_transparent_75%)]" />
      </div>

      {/* =================================================================== */}
      {/* 2. MOBILE BACKGROUND CANVAS: Top Blue + Wavy Gold Ribbon + Bottom Ivory */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none lg:hidden -z-10 flex flex-col">
        {/* Mobile Top: Royal Blue */}
        <div className="relative w-full h-[380px] sm:h-[440px] bg-gradient-to-b from-[#01122E] via-[#012052] to-[#000E26] overflow-hidden">
          <div className="absolute inset-0 bg-[#C8A232]/8 rounded-full blur-[100px]" />
        </div>

        {/* Mobile Middle: Horizontal Wavy 3D Gold Ribbon Divider */}
        <div className="relative w-full h-8 -mt-4 -mb-4 z-10 overflow-hidden">
          <svg
            viewBox="0 0 400 32"
            preserveAspectRatio="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,16 Q 100,28 200,16 T 400,16"
              fill="none"
              stroke="#01122E"
              strokeWidth="8"
              strokeOpacity="0.5"
            />
            <path
              d="M 0,16 Q 100,28 200,16 T 400,16"
              fill="none"
              stroke="url(#goldRibbon3D)"
              strokeWidth="5"
            />
            <path
              d="M 0,16 Q 100,28 200,16 T 400,16"
              fill="none"
              stroke="#FFFBEA"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
          </svg>
        </div>

        {/* Mobile Bottom: Warm Royal Ivory */}
        <div className="relative flex-1 w-full bg-gradient-to-b from-[#FAF6EE] to-[#FDFBF7]" />
      </div>

      {/* =================================================================== */}
      {/* 3. SECTION CONTENT GRID: Perfectly Positioned across the Split */}
      {/* =================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Royal Blue side on desktop) */}
          <div
            className={`${leftColSpan} ${
              reversed ? "lg:order-2" : "lg:order-1"
            } flex flex-col justify-center items-center text-white ${leftClassName}`}
          >
            {leftContent}
          </div>

          {/* Right Column (Warm Ivory side on desktop) */}
          <div
            className={`${rightColSpan} ${
              reversed ? "lg:order-1" : "lg:order-2"
            } flex flex-col justify-center text-[#012052] ${rightClassName}`}
          >
            {rightContent}
          </div>

        </div>
      </div>

      {/* =================================================================== */}
      {/* 4. SIGNATURE ROYAL NAVY BOTTOM STATUS STRIP (As in Image 1)       */}
      {/* =================================================================== */}
      {bottomStrip && (
        <div className="relative z-20 w-full bg-[#011438] border-t border-[#C8A232]/40 py-3.5 px-4 sm:px-6 shadow-inner text-white">
          {bottomStrip}
        </div>
      )}
    </section>
  );
}

