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
    <>
      {/* Ancient Egyptian Architectural Stone Column with Interactive Laser Scanner & Cipher Decoder */}
      <HieroglyphicWall />

      {/* 1. Section 01: Hero Section (Split Design: Queen on Blue | Two-Tone Headline on Gold) */}
      <HeroSection />

      {/* 2. Section 02: Welcome & Clinical Philosophy (Inverted: Text on Gold | Visual on Blue) */}
      <WelcomeSection />

      {/* 3. Section 03: Signature Treatments (Normal: Visual on Blue | Treatments on Gold) */}
      <SignatureTreatments />

      {/* 4. Section 04: Meet Our Specialists (Inverted: Dossier on Gold | Doctor on Blue) */}
      <SpecialistsSection />

      {/* 5. Section 05: Smile Transformations (Normal: Slider on Blue | Cases on Gold) */}
      <SmileTransformations />

      {/* 6. Section 06: The Magnificent Difference (Inverted: 6 Pillars on Gold | Showcase on Blue) */}
      <MagnificentDifference />

      {/* 7. Section 07: Our Clinics (Normal: Branch Showcase on Blue | Details on Gold) */}
      <ClinicsSection />

      {/* 8. Section 08: Patient Reviews (Inverted: Reviews on Gold | 5.0 Star Medallion on Blue) */}
      <PatientReviews />

      {/* 9. Section 09: Our Ecosystem (Normal: Ecosystem on Blue | 3 Pillars on Gold) */}
      <EcosystemSection />

      {/* 10. Section 10: Book Consultation (Inverted: Form on Gold | Concierge on Blue) */}
      <BookConsultationSection />
    </>
  );
}
