"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage, Locale } from "@/i18n/IntlProviderWrapper";
import { Globe, Calendar, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const { locale, setLocale, isRtl } = useLanguage();
  const tNav = useTranslations("nav");
  const tBrand = useTranslations("brand");

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages: { code: Locale; label: string }[] = [
    { code: "ar", label: "العربية" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ru", label: "Русский" },
  ];

  const navLinks = [
    { href: "#home", label: tNav("home") },
    { href: "#welcome", label: tNav("welcome") },
    { href: "#treatments", label: tNav("treatments") },
    { href: "#doctors", label: tNav("doctors") },
    { href: "#transformations", label: tNav("transformations") },
    { href: "#difference", label: tNav("difference") },
    { href: "#clinics", label: tNav("clinics") },
    { href: "#ecosystem", label: tNav("aligners") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#C8A232]/25 py-3 shadow-[0_4px_30px_rgba(10,17,40,0.06)]"
          : "bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/75 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Magnificent Smile Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 border-2 border-[#C8A232] shadow-[0_0_15px_rgba(200,162,50,0.25)] transition-transform duration-300 group-hover:scale-105 bg-[#0A1128]">
              <Image
                src="/logo.png"
                alt="Magnificent Smile - Hesy-Ra Emblem"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#0A1128] group-hover:text-[#8C6A12] transition-colors">
                {tBrand("name")}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#5B6782] flex items-center gap-1 font-body">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8A232] animate-pulse" />
                {tBrand("badge")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (From Sitemap) */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs tracking-wider uppercase text-[#0A1128]/80 hover:text-[#8C6A12] font-semibold transition-colors py-1 group font-body whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8A232] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher & Book Consultation CTA */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8A232]/40 bg-white/80 hover:bg-white text-xs font-semibold text-[#0A1128] shadow-sm transition-all focus:outline-none"
                aria-expanded={langMenuOpen}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#8C6A12]" />
                <span className="uppercase font-medium">{locale}</span>
                <span className="text-[10px] text-[#8C6A12]">▼</span>
              </button>

              {langMenuOpen && (
                <div
                  className={`absolute top-full mt-2 w-36 rounded-xl border border-[#C8A232]/30 bg-white/95 backdrop-blur-xl p-1.5 shadow-[0_15px_35px_rgba(10,17,40,0.12)] z-50 ${
                    isRtl ? "left-0" : "right-0"
                  }`}
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setLocale(item.code);
                        setLangMenuOpen(false);
                      }}
                      onClick={() => {
                        setLocale(item.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
                        locale === item.code
                          ? "bg-[#C8A232]/15 text-[#8C6A12] font-bold"
                          : "text-[#0A1128]/85 hover:bg-[#F7F4EE] hover:text-[#8C6A12]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] uppercase font-mono font-bold text-[#8C6A12]">
                        {item.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Booking Button */}
            <a
              href="#book"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#C8A232] bg-gradient-to-r from-[#C8A232] via-[#DFBF57] to-[#8C6A12] text-[#0A1128] font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.3)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0A1128]" />
              <span>{tNav("bookAppointment")}</span>
              <span className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => {
                const nextLocale: Locale =
                  locale === "ar" ? "en" : locale === "en" ? "fr" : locale === "fr" ? "ru" : "ar";
                setLocale(nextLocale);
              }}
              className="px-2.5 py-1 rounded-full border border-[#C8A232]/50 bg-white text-[11px] font-bold text-[#8C6A12] uppercase flex items-center gap-1 shadow-sm"
            >
              <Globe className="w-3 h-3" />
              {locale}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#C8A232]/40 text-[#0A1128] bg-white/80 hover:bg-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-6 border border-[#C8A232]/25 bg-white/95 backdrop-blur-2xl rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#0A1128] hover:text-[#8C6A12] hover:bg-[#F7F4EE] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#C8A232]/20 flex flex-col gap-3">
                <a
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-gradient-to-r from-[#C8A232] to-[#8C6A12] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  {tNav("bookAppointment")}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
