"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  LabHeroSection,
  LabServicesSection,
  LabMaterialsGallerySection,
  LabClosingSection,
} from "@/components/laboratory";

export default function LaboratoryPage() {
  const { isRtl } = useLanguage();

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      {/* SECTION 1: HERO */}
      <LabHeroSection />

      {/* SECTION 2: 7 LAB SERVICES */}
      <LabServicesSection />

      {/* SECTION 3: MATERIALS & GALLERY */}
      <LabMaterialsGallerySection />

      {/* SECTION 4: CLOSING ACTION */}
      <LabClosingSection />
    </main>
  );
}
