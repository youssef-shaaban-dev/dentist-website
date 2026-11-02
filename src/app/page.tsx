"use client";

import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { SignatureTreatments } from "@/components/home/SignatureTreatments";
import { SpecialistsSection } from "@/components/home/SpecialistsSection";
import { SmileTransformations } from "@/components/home/SmileTransformations";
import { MagnificentDifference } from "@/components/home/MagnificentDifference";
import { ClinicsSection } from "@/components/home/ClinicsSection";
import { PatientReviews } from "@/components/home/PatientReviews";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { BookConsultationSection } from "@/components/home/BookConsultationSection";
import { HieroglyphicWall } from "@/components/ui/HieroglyphicWall";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Ancient Egyptian Architectural Stone Column with Natural Height & Compact Laser Hover Translations */}
      <HieroglyphicWall />

      {/* 1. Section 01: Hero Section */}
      <HeroSection />

      {/* 2. Section 02: Welcome & Clinical Philosophy */}
      <WelcomeSection />

      {/* 3. Section 03: Signature Treatments */}
      <SignatureTreatments />

      {/* 4. Section 04: Meet Our Specialists */}
      <SpecialistsSection />

      {/* 5. Section 05: Smile Transformations */}
      <SmileTransformations />

      {/* 6. Section 06: The Magnificent Difference */}
      <MagnificentDifference />

      {/* 7. Section 07: Our Clinics */}
      <ClinicsSection />

      {/* 8. Section 08: Patient Reviews */}
      <PatientReviews />

      {/* 9. Section 09: Our Ecosystem */}
      <EcosystemSection />

      {/* 10. Section 10: Book Consultation */}
      <BookConsultationSection />
    </main>
  );
}
