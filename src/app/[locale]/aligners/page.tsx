"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  AlignersHeroSection,
  AlignersAdvantagesSection,
  AlignersJourneySection,
  AlignersFaqSection,
  AlignersClosingSection,
} from "@/components/aligners";

export default function AlignersPage() {
  const { isRtl } = useLanguage();

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. Hero / Intro */}
      <AlignersHeroSection />

      {/* 2. 7 Advantages */}
      <AlignersAdvantagesSection />

      {/* 3. Treatment Journey */}
      <AlignersJourneySection />

      {/* 4. Frequently Asked Questions */}
      <AlignersFaqSection />

      {/* 5. Closing Consultation Actions */}
      <AlignersClosingSection />
    </main>
  );
}
