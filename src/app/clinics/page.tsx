"use client";

import React, { useState } from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import {
  ClinicsHeroSection,
  ClinicsBranchesSection,
  ClinicsBookingSection,
  type ClinicBranch,
} from "@/components/clinics";

const CLINIC_BRANCHES: ClinicBranch[] = [
  {
    id: "hurghada",
    anchor: "hurghada",
    name: "Hurghada",
    nameAr: "الغردقة",
    address: "Al Kawthar, Metro St., Hurghada, Red Sea",
    addressAr: "الكوثر، شارع مترو، الغردقة، البحر الأحمر",
    phone: "01122208262",
    phoneRaw: "+201122208262",
    mapUrl: "https://maps.google.com/?q=Al+Kawthar+Metro+Street+Hurghada+Egypt",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "sheikh-zayed",
    anchor: "sheikh-zayed",
    name: "Beverly Hills — Sheikh Zayed",
    nameAr: "بيفرلي هيلز — الشيخ زايد",
    address: "Icon Mall, Gate 9, Beverly Hills, Sheikh Zayed",
    addressAr: "آيكون مول، بوابة ٩، بيفرلي هيلز، الشيخ زايد",
    phone: "01114159449",
    phoneRaw: "+201114159449",
    mapUrl: "https://maps.google.com/?q=Icon+Mall+Gate+9+Beverly+Hills+Sheikh+Zayed+Egypt",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: "giza",
    anchor: "giza",
    name: "Pyramids Road — Giza",
    nameAr: "طريق الأهرامات — الجيزة",
    address: "El Taawun, Haram St., Giza",
    addressAr: "التعاون، شارع الهرم، الجيزة",
    phone: "01124336636",
    phoneRaw: "+201124336636",
    mapUrl: "https://maps.google.com/?q=El+Taawun+Haram+Street+Giza+Egypt",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ClinicsPage() {
  const { isRtl } = useLanguage();
  const [selectedBranch, setSelectedBranch] = useState("sheikh-zayed");
  const [selectedTreatment, setSelectedTreatment] = useState("Clear Aligners");

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      {/* SECTION 1: HERO */}
      <ClinicsHeroSection />

      {/* SECTION 2: 3 CLINIC BRANCHES */}
      <ClinicsBranchesSection
        branches={CLINIC_BRANCHES}
        onSelectBranch={(branchId) => setSelectedBranch(branchId)}
      />

      {/* SECTION 3: APPOINTMENT REQUEST FORM */}
      <ClinicsBookingSection
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        selectedTreatment={selectedTreatment}
        setSelectedTreatment={setSelectedTreatment}
      />
    </main>
  );
}
