"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { MapPin, Phone, Globe, ShieldCheck } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const tBrand = useTranslations("brand");
  const tNav = useTranslations("nav");
  const { isRtl, locale } = useLanguage();

  return (
    <footer
      className="relative bg-[#020B1D] text-white pt-16 pb-12 border-t border-[#C8A232]/40 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Subtle Gold Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A232]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#012968]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C8A232]/20">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href={`/${locale}`} className="flex items-center gap-3.5 mb-4 group">
              <div className="relative h-14 sm:h-16 aspect-[6/5]">
                <Image
                  src="/logo.png"
                  alt="Magnificent Smile"
                  fill
                  sizes="96px"
                  className="object-contain drop-shadow-[0_2px_10px_rgba(200,162,50,0.35)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider text-white">
                  {tBrand("name")}
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#DFBF57]">
                  {t("tagline")}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed mb-4 max-w-md font-body">
              {t("manifesto")}
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold font-display text-white uppercase tracking-wider mb-4 text-[#DFBF57]">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FDFBF7]/80 font-body">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#DFBF57] transition-colors">
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/treatments`} className="hover:text-[#DFBF57] transition-colors">
                  {tNav("treatments")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/clinics`} className="hover:text-[#DFBF57] transition-colors">
                  {t("links.clinics")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/aligners`} className="hover:text-[#DFBF57] transition-colors">
                  {tNav("aligners")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/laboratory`} className="hover:text-[#DFBF57] transition-colors">
                  {tNav("ourLab")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/for-dentists`} className="hover:text-[#DFBF57] transition-colors">
                  {t("links.forDentists")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Hotline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs font-bold font-display text-white uppercase tracking-wider mb-4 text-[#DFBF57] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C8A232]" />
              <span>{t("branches")}</span>
            </h4>

            <div className="space-y-2.5 text-xs text-[#FDFBF7]/85 font-body">
              <div className="p-2.5 rounded-lg bg-white/5 border border-[#C8A232]/20 flex items-center justify-between">
                <div>
                  <span className="font-semibold block text-white">Hurghada</span>
                  <span className="text-[11px] text-[#FDFBF7]/65">Al Kawthar, Metro St.</span>
                </div>
                <a
                  href="tel:+201122208262"
                  className="text-xs font-mono font-bold text-[#DFBF57] hover:underline"
                >
                  01122208262
                </a>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-[#C8A232]/20 flex items-center justify-between">
                <div>
                  <span className="font-semibold block text-white">Beverly Hills — Sheikh Zayed</span>
                  <span className="text-[11px] text-[#FDFBF7]/65">Icon Mall, Gate 9</span>
                </div>
                <a
                  href="tel:+201114159449"
                  className="text-xs font-mono font-bold text-[#DFBF57] hover:underline"
                >
                  01114159449
                </a>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-[#C8A232]/20 flex items-center justify-between">
                <div>
                  <span className="font-semibold block text-white">Pyramids Road — Giza</span>
                  <span className="text-[11px] text-[#FDFBF7]/65">El Taawun, Haram St.</span>
                </div>
                <a
                  href="tel:+201124336636"
                  className="text-xs font-mono font-bold text-[#DFBF57] hover:underline"
                >
                  01124336636
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FDFBF7]/60 font-body">
          <p>© 2026 Magnificent Smile. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/clinics`} className="hover:text-[#DFBF57] transition-colors">
              {t("links.clinics")}
            </Link>
            <Link href={`/${locale}/for-dentists`} className="hover:text-[#DFBF57] transition-colors">
              {t("links.forDentists")}
            </Link>
            <span className="text-[#FDFBF7]/30">|</span>
            <span className="hover:text-[#DFBF57] transition-colors cursor-pointer">
              {t("links.privacy")}
            </span>
            <span className="hover:text-[#DFBF57] transition-colors cursor-pointer">
              {t("links.terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
