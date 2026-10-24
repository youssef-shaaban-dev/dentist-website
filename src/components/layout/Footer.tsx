"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { MapPin, Phone, Mail, Sparkles, ShieldCheck } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tBrand = useTranslations("brand");
  const tNav = useTranslations("nav");
  const tClinics = useTranslations("clinics");
  const { isRtl } = useLanguage();

  return (
    <footer
      className="relative bg-[#0A1128] text-white pt-20 pb-12 border-t-2 border-[#C8A232]/40 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Decorative Gold Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A232]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C8A232]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C8A232]/20">
          
          {/* Brand Manifesto Col (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="#home" className="flex items-center gap-3.5 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 border-2 border-[#C8A232] bg-[#0A1128] shadow-md">
                <Image
                  src="/logo.png"
                  alt="Magnificent Smile Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-white">
                  {tBrand("name")}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#F3E5AB]">
                  {tBrand("subname")}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed mb-6 font-body">
              {t("manifesto")}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#F3E5AB] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#C8A232]" />
              <span>{tBrand("heritage")}</span>
            </div>
          </div>

          {/* Quick Sitemap Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A232]" />
              <span>{t("quickLinks")}</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FDFBF7]/75 font-body">
              <li><a href="#home" className="hover:text-[#C8A232] transition-colors">{tNav("home")}</a></li>
              <li><a href="#welcome" className="hover:text-[#C8A232] transition-colors">{tNav("welcome")}</a></li>
              <li><a href="#treatments" className="hover:text-[#C8A232] transition-colors">{tNav("treatments")}</a></li>
              <li><a href="#doctors" className="hover:text-[#C8A232] transition-colors">{tNav("doctors")}</a></li>
              <li><a href="#transformations" className="hover:text-[#C8A232] transition-colors">{tNav("transformations")}</a></li>
              <li><a href="#difference" className="hover:text-[#C8A232] transition-colors">{tNav("difference")}</a></li>
              <li><a href="#clinics" className="hover:text-[#C8A232] transition-colors">{tNav("clinics")}</a></li>
              <li><a href="#ecosystem" className="hover:text-[#C8A232] transition-colors">{tNav("aligners")}</a></li>
            </ul>
          </div>

          {/* Branches & Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C8A232]" />
              <span>{t("branches")}</span>
            </h4>

            <div className="space-y-4 text-xs text-[#FDFBF7]/80 font-body">
              <div className="p-3.5 rounded-xl bg-white/5 border border-[#C8A232]/20">
                <span className="font-bold text-[#F3E5AB] block mb-1">{tClinics("branch1.name")}</span>
                <span className="text-[11px] block text-[#FDFBF7]/60">{tClinics("branch1.area")}</span>
                <span className="text-[11px] block text-[#C8A232] mt-1">{tClinics("branch1.hours")}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-[#C8A232]/20">
                <span className="font-bold text-[#F3E5AB] block mb-1">{tClinics("branch2.name")}</span>
                <span className="text-[11px] block text-[#FDFBF7]/60">{tClinics("branch2.area")}</span>
                <span className="text-[11px] block text-[#C8A232] mt-1">{tClinics("branch2.hours")}</span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-6 text-xs text-[#FDFBF7]/70 font-mono">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A232]" />
                <span dir="ltr">+20 100 890 1234</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A232]" />
                <span>concierge@magnificentsmile.com</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFBF7]/50 font-body">
          <p>{t("legal")}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#C8A232] transition-colors">{t("privacy")}</a>
            <span>·</span>
            <a href="#terms" className="hover:text-[#C8A232] transition-colors">{t("terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
