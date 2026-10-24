"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, ArrowRight, ArrowLeft, Building2, Layers, Cpu } from "lucide-react";

export default function Home() {
  const { isRtl } = useLanguage();
  const tEco = useTranslations("ecosystem");
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main className="relative min-h-screen bg-[#0A1128] text-[#FDFBF7] selection:bg-[#D4AF37] selection:text-[#0A1128] overflow-hidden">
      {/* Top Luxury Navigation */}
      <Navbar />

      {/* Hero Section with Hesy-Ra Decoding & Scroll Parallax */}
      <HeroSection />

      {/* Ecosystem Section: Experience the Smooth Parallax Transition */}
      <section
        id="ecosystem"
        className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20 bg-gradient-to-b from-[#0A1128] via-[#0E1838] to-[#050914]"
      >
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#0E1838]/80 text-[#F3E5AB] text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{tEco("tag")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display gold-text-gradient mb-5">
              {tEco("title")}
            </h2>
            <p className="text-base sm:text-lg text-[#FDFBF7]/75 font-body leading-relaxed">
              {tEco("subtitle")}
            </p>
          </div>

          {/* 3 Pillars Grid (Sitemap Blueprint) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Clinics */}
            <div className="group relative rounded-2xl border border-[#D4AF37]/25 bg-[#0A1128]/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_15px_40px_rgba(212,175,55,0.18)] hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl border border-[#D4AF37]/40 bg-[#0E1838] flex items-center justify-center text-[#D4AF37] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#FDFBF7] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {tEco("clinicsTitle")}
                </h3>
                <p className="text-sm text-[#FDFBF7]/70 font-body leading-relaxed mb-6">
                  {tEco("clinicsDesc")}
                </p>
              </div>
              <a
                href="#clinics"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
              >
                <span>{tEco("clinicsCta")}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pillar 2: Magnificent Aligners */}
            <div className="group relative rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#0E1838]/90 to-[#0A1128]/90 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] hover:-translate-y-1.5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#D4AF37] text-[#0A1128] text-[10px] font-bold uppercase tracking-wider shadow">
                {tEco("alignersBadge")}
              </div>
              <div>
                <div className="w-14 h-14 rounded-xl border border-[#D4AF37]/40 bg-[#162447] flex items-center justify-center text-[#D4AF37] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#FDFBF7] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {tEco("alignersTitle")}
                </h3>
                <p className="text-sm text-[#FDFBF7]/70 font-body leading-relaxed mb-6">
                  {tEco("alignersDesc")}
                </p>
              </div>
              <a
                href="#aligners"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
              >
                <span>{tEco("alignersCta")}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pillar 3: High-Precision Dental Lab */}
            <div className="group relative rounded-2xl border border-[#D4AF37]/25 bg-[#0A1128]/70 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_15px_40px_rgba(212,175,55,0.18)] hover:-translate-y-1.5 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl border border-[#D4AF37]/40 bg-[#0E1838] flex items-center justify-center text-[#D4AF37] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#FDFBF7] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {tEco("labTitle")}
                </h3>
                <p className="text-sm text-[#FDFBF7]/70 font-body leading-relaxed mb-6">
                  {tEco("labDesc")}
                </p>
              </div>
              <a
                href="#dental-lab"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] tracking-wider uppercase group-hover:translate-x-1 transition-transform"
              >
                <span>{tEco("labCta")}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
