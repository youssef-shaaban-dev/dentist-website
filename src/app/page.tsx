"use client";

import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { SmileTransformations } from "@/components/home/SmileTransformations";
import { SpecialistsSection } from "@/components/home/SpecialistsSection";
import { LocationsBookingSection } from "@/components/home/LocationsBookingSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* 1. Section 01: Hero Section */}
      <HeroSection />

      {/* 2. Section 02: Our Divisions (#divisions) */}
      <DivisionsSection />

      {/* 3. Section 03: Smile Transformations (See the Difference) */}
      <SmileTransformations />

      {/* 4. Section 04: Our Doctors (5 Doctors in exact order) */}
      <SpecialistsSection />

      {/* 5. Section 05: Our Locations and Booking (3 Branches -> /clinics) */}
      <LocationsBookingSection />
    </main>
  );
}
