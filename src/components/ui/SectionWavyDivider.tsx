"use client";

import React, { useId } from "react";

interface SectionWavyDividerProps {
  className?: string;
  inverted?: boolean;
}

export function SectionWavyDivider({
  className = "",
  inverted = false,
}: SectionWavyDividerProps) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const goldGradId = `wavyDividerGold-${id}`;
  const blueGradId = `wavyDividerBlue-${id}`;
  const tracerGradId = `wavyDividerTracer-${id}`;
  const shadowFilterId = `wavyDividerShadow-${id}`;

  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-8 sm:h-10 lg:h-12 overflow-hidden pointer-events-none select-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={inverted ? { transform: "scaleX(-1)", transformOrigin: "center" } : undefined}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main 24K Sculpted Metallic Gold Gradient */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E4002" />
            <stop offset="14%" stopColor="#C8A232" />
            <stop offset="28%" stopColor="#FFF9E6" />
            <stop offset="46%" stopColor="#DFBF57" />
            <stop offset="68%" stopColor="#8A5811" />
            <stop offset="85%" stopColor="#E5C768" />
            <stop offset="100%" stopColor="#543102" />
          </linearGradient>

          {/* Deep Royal Blue Metallic Accent Line */}
          <linearGradient id={blueGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082A63" />
            <stop offset="30%" stopColor="#1756BD" />
            <stop offset="60%" stopColor="#3C7DD9" />
            <stop offset="85%" stopColor="#0F4599" />
            <stop offset="100%" stopColor="#051C47" />
          </linearGradient>

          {/* Outer Gold Echo Tracer Filament */}
          <linearGradient id={tracerGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A232" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#DFBF57" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#FFEDB3" stopOpacity="1" />
            <stop offset="100%" stopColor="#8A5811" stopOpacity="0.3" />
          </linearGradient>

          {/* 3D Wave Drop Shadow */}
          <filter id={shadowFilterId} x="-10%" y="-40%" width="120%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#020B1D" floodOpacity="0.55" />
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#C8A232" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Layer 1: Realistic 3D Ribbon Drop Shadow */}
        <path
          d="M 0,24 C 240,6 480,42 720,22 C 960,4 1200,40 1440,24"
          fill="none"
          stroke="#020B1D"
          strokeWidth="11"
          strokeOpacity="0.4"
          filter={`url(#${shadowFilterId})`}
        />

        {/* Layer 2: Deep Royal Blue Enamel Channel */}
        <path
          d="M 0,24 C 240,6 480,42 720,22 C 960,4 1200,40 1440,24"
          fill="none"
          stroke={`url(#${blueGradId})`}
          strokeWidth="8"
        />

        {/* Layer 3: Main 24K Sculpted Gold Ribbon */}
        <path
          d="M 0,24.5 C 240,6.5 480,42.5 720,22.5 C 960,4.5 1200,40.5 1440,24.5"
          fill="none"
          stroke={`url(#${goldGradId})`}
          strokeWidth="9"
        />

        {/* Layer 4: Specular Glint Highlight Filament */}
        <path
          d="M 0,24 C 240,6 480,42 720,22 C 960,4 1200,40 1440,24"
          fill="none"
          stroke="#FFFDF5"
          strokeWidth="1.8"
          strokeOpacity="0.95"
        />

        {/* Layer 5: Gold Echo Tracer Filament */}
        <path
          d="M 0,29 C 240,11 480,47 720,27 C 960,9 1200,45 1440,29"
          fill="none"
          stroke={`url(#${tracerGradId})`}
          strokeWidth="2.2"
        />
      </svg>
    </div>
  );
}

