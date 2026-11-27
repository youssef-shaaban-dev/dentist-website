"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { MapPin, Phone } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tBrand = useTranslations("brand");
  const tNav = useTranslations("nav");
  const { isRtl, locale } = useLanguage();

  const branches = [
    {
      id: "hurghada",
      name: "Hurghada",
      nameAr: "الغردقة",
      address: "Al Kawthar, Metro St.",
      addressAr: "الكوثر، شارع مترو",
      phone: "01122208262",
      tel: "+201122208262",
      wa: "https://wa.me/201122208262",
    },
    {
      id: "zayed",
      name: "Beverly Hills — Sheikh Zayed",
      nameAr: "بيفرلي هيلز — الشيخ زايد",
      address: "Icon Mall, Gate 9",
      addressAr: "أيكون مول، بوابة 9",
      phone: "01114159449",
      tel: "+201114159449",
      wa: "https://wa.me/201114159449",
    },
    {
      id: "giza",
      name: "Pyramids Road — Giza",
      nameAr: "طريق الأهرامات — الجيزة",
      address: "El Taawun, Haram St.",
      addressAr: "التعاون، شارع الهرم",
      phone: "01124336636",
      tel: "+201124336636",
      wa: "https://wa.me/201124336636",
    },
  ];

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
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-[#C8A232]/20 hover:border-[#C8A232]/40 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold block text-white truncate">
                      {isRtl ? branch.nameAr : branch.name}
                    </span>
                    <span className="text-[11px] text-[#FDFBF7]/65 block truncate">
                      {isRtl ? branch.addressAr : branch.address}
                    </span>
                    <a
                      href={`tel:${branch.tel}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#DFBF57] hover:text-[#F3E5AB] transition-colors mt-1"
                      dir="ltr"
                    >
                      <Phone className="w-3 h-3 text-[#C8A232] shrink-0" />
                      <span>{branch.phone}</span>
                    </a>
                  </div>

                  <a
                    href={branch.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 hover:border-[#25D366]/70 text-[#25D366] hover:text-white transition-all text-xs font-bold shrink-0 shadow-xs active:scale-95 group"
                    title={isRtl ? `تواصل واتساب مع فرع ${branch.nameAr}` : `Chat on WhatsApp - ${branch.name}`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#25D366] group-hover:text-white transition-colors" />
                    <span>{isRtl ? "واتساب" : "WhatsApp"}</span>
                  </a>
                </div>
              ))}
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
