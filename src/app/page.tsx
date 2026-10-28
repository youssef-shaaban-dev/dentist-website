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
import { PharaonicScrollSpine } from "@/components/ui/PharaonicScrollSpine";

export default function Home() {
  return (
    <>
      {/* Interactive Pharaonic Temple Ribbons (Desktop Gutters + Mobile Fixed Bottom) */}
      <PharaonicScrollSpine />

      {/* 1. Section 01: Cinematic Hero (Decoded Hieroglyphic & 3D Morphing Golden Tooth) */}
      <HeroSection />

      {/* 2. Section 02: Welcome & Clinic Philosophy */}
      <WelcomeSection />

      {/* 3. Section 03: Signature Treatments (6 Core Treatments) */}
      <SignatureTreatments />

      {/* 4. Section 04: Meet Our Specialists (Senior Consultants) */}
      <SpecialistsSection />

      {/* 5. Section 05: Smile Transformations (Interactive Before/After Slider) */}
      <SmileTransformations />

      {/* 6. Section 06: The Magnificent Difference (6 Pillars of Clinical Excellence) */}
      <MagnificentDifference />

      {/* 7. Section 07: Our Three Clinics (Sheikh Zayed, New Cairo, Maadi) */}
      <ClinicsSection />

      {/* 8. Section 08: Patient Experiences (Verified Testimonials) */}
      <PatientReviews />

      {/* 9. Section 09: Our Ecosystem (Clinics, Magnificent Aligners, Dental Lab) */}
      <EcosystemSection />

      {/* 10. Section 10: Book Consultation (Interactive Appointment Form) */}
      <BookConsultationSection />
    </>
  );
}
