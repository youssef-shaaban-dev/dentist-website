"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
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
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FDFBF7] text-[#0A1128] selection:bg-[#C8A232] selection:text-[#FDFBF7] overflow-hidden">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Section 01: Cinematic Hero (Decoded Hieroglyphic & Parallax Hesy-Ra Logo) */}
      <HeroSection />

      {/* 3. Section 02: Welcome & Clinic Philosophy */}
      <WelcomeSection />

      {/* 4. Section 03: Signature Treatments (6 Core Treatments) */}
      <SignatureTreatments />

      {/* 5. Section 04: Meet Our Specialists (Senior Consultants) */}
      <SpecialistsSection />

      {/* 6. Section 05: Smile Transformations (Interactive Before/After Slider) */}
      <SmileTransformations />

      {/* 7. Section 06: The Magnificent Difference (6 Pillars of Clinical Excellence) */}
      <MagnificentDifference />

      {/* 8. Section 07: Our Three Clinics (Sheikh Zayed, New Cairo, Maadi) */}
      <ClinicsSection />

      {/* 9. Section 08: Patient Experiences (Verified Testimonials) */}
      <PatientReviews />

      {/* 10. Section 09: Our Ecosystem (Clinics, Magnificent Aligners, Dental Lab) */}
      <EcosystemSection />

      {/* 11. Section 10: Book Consultation (Interactive Appointment Form) */}
      <BookConsultationSection />

      {/* 12. Royal Luxury Footer */}
      <Footer />
    </main>
  );
}
