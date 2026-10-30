"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Disable GSAP lag smoothing to ensure 1:1 butter-smooth sync with Lenis
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once DOM and fonts are ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075, // Ultra-luxurious butter-smooth inertial gliding damping
        smoothWheel: true,
        wheelMultiplier: 0.85, // Softer step per notch to prevent sudden jumps
        touchMultiplier: 1.2,
        infinite: false,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
