"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  TreatmentsHeroSection,
  TreatmentsSpecialtiesSection,
  TreatmentsGallerySection,
  TreatmentsVideosSection,
  TreatmentsClosingSection,
} from "@/components/treatments";

export default function TreatmentsPage() {
  const { isRtl } = useLanguage();

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      {/* SECTION 1: HERO */}
      <TreatmentsHeroSection />

      {/* SECTION 2: 8 SPECIALIZED TREATMENTS + VIP EXPERIENCE CARD */}
      <TreatmentsSpecialtiesSection />

      {/* SECTION 3: CLINICAL SMILE GALLERY */}
      <TreatmentsGallerySection />

      {/* SECTION 4: REAL PATIENT VIDEO STORIES */}
      <TreatmentsVideosSection />

      {/* SECTION 5: CONSULTATION ACTION */}
      <TreatmentsClosingSection />
    </main>
  );
}
