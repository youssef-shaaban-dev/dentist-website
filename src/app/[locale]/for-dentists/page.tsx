"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  DentistsHeroSection,
  DentistsCollaborationSection,
  DentistsFaqSection,
  DentistsEnquirySection,
} from "@/components/for-dentists";

export default function ForDentistsPage() {
  const { isRtl } = useLanguage();

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      {/* SECTION 1: HERO */}
      <DentistsHeroSection />

      {/* SECTION 2: 4 STEPS COLLABORATION */}
      <DentistsCollaborationSection />

      {/* SECTION 3: DENTIST FAQS */}
      <DentistsFaqSection />

      {/* SECTION 4: B2B ENQUIRY FORM */}
      <DentistsEnquirySection />
    </main>
  );
}
