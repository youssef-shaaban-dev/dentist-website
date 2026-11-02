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
import { SectionWavyDivider } from "@/components/ui/SectionWavyDivider";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden pb-10 lg:pb-0">
      {/* Heritage Entrance Enclosure: Hero & Welcome framed by Architectural Stone Pillar */}
      <div className="relative w-full">
        {/* Ancient Egyptian Architectural Stone Column — perfectly bounded from Hero top to Welcome bottom */}
        <HieroglyphicWall />

        {/* 1. Section 01: Hero Section */}
        <HeroSection />

        {/* 3D Horizontal Wavy Ribbon Divider: Hero -> Welcome */}
        <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
          <SectionWavyDivider />
        </div>

        {/* 2. Section 02: Welcome & Clinical Philosophy */}
        <WelcomeSection />
      </div>

      {/* 3D Horizontal Wavy Ribbon Divider: Welcome -> Signature Treatments */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider inverted />
      </div>

      {/* 3. Section 03: Signature Treatments (Clean - Zero Column Overflow) */}
      <SignatureTreatments />

      {/* 3D Horizontal Wavy Ribbon Divider: Treatments -> Specialists */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider />
      </div>

      {/* 4. Section 04: Meet Our Specialists */}
      <SpecialistsSection />

      {/* 3D Horizontal Wavy Ribbon Divider: Specialists -> Transformations */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider inverted />
      </div>

      {/* 5. Section 05: Smile Transformations */}
      <SmileTransformations />

      {/* 3D Horizontal Wavy Ribbon Divider: Transformations -> Difference */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider />
      </div>

      {/* 6. Section 06: The Magnificent Difference */}
      <MagnificentDifference />

      {/* 3D Horizontal Wavy Ribbon Divider: Difference -> Clinics */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider inverted />
      </div>

      {/* 7. Section 07: Our Clinics */}
      <ClinicsSection />

      {/* 3D Horizontal Wavy Ribbon Divider: Clinics -> Reviews */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider />
      </div>

      {/* 8. Section 08: Patient Reviews */}
      <PatientReviews />

      {/* 3D Horizontal Wavy Ribbon Divider: Reviews -> Ecosystem */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider inverted />
      </div>

      {/* 9. Section 09: Our Ecosystem */}
      <EcosystemSection />

      {/* 3D Horizontal Wavy Ribbon Divider: Ecosystem -> Book Consultation */}
      <div className="relative w-full z-25 -my-4 sm:-my-5 pointer-events-none select-none">
        <SectionWavyDivider />
      </div>

      {/* 10. Section 10: Book Consultation */}
      <BookConsultationSection />
    </main>
  );
}
