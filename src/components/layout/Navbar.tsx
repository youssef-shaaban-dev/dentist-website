"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage, Locale } from "@/i18n/IntlProviderWrapper";
import { Globe, Menu, X } from "lucide-react";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Navbar() {
  const { locale, setLocale, isRtl } = useLanguage();
  const tNav = useTranslations("nav");
  const tBrand = useTranslations("brand");

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const whatsappMessage =
    locale === "ar"
      ? "مرحباً، أود حجز موعد استشارة في عيادات ماغنيفيسنت سمايل."
      : locale === "fr"
      ? "Bonjour, je souhaite réserver une consultation chez Magnificent Smile."
      : locale === "ru"
      ? "Здравствуйте, я хочу записаться на приём в клинику Magnificent Smile."
      : "Hello, I would like to book a consultation at Magnificent Smile Clinics.";

  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
          ? "bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#C8A232]/30 py-3 shadow-[0_4px_30px_rgba(2,34,86,0.08)]"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 sm:py-5"
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
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 border-2 border-[#C8A232] shadow-[0_0_15px_rgba(200,162,50,0.35)] transition-transform duration-300 group-hover:scale-105 bg-[#022256]">
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
              <span
                className={`font-display text-lg sm:text-xl font-bold tracking-wider transition-colors drop-shadow-sm ${
                  scrolled
                    ? "text-[#012968] group-hover:text-[#955904]"
                    : "text-white group-hover:text-[#DFBF57]"
                }`}
              >
                {tBrand("name")}
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase flex items-center gap-1 font-body transition-colors ${
                  scrolled ? "text-[#5B6782]" : "text-[#F9EDD7]/90"
                }`}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#DFBF57] animate-pulse" />
                {tBrand("badge")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-wider uppercase font-semibold transition-colors py-1 group font-body whitespace-nowrap drop-shadow-sm ${
                  scrolled
                    ? "text-[#012968]/85 hover:text-[#955904]"
                    : "text-white/90 hover:text-[#DFBF57]"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DFBF57] transition-all duration-300 group-hover:w-full" />
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
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm transition-all focus:outline-none cursor-pointer ${
                  scrolled
                    ? "border-[#C8A232]/40 bg-white/90 hover:bg-white text-[#012968]"
                    : "border-white/30 bg-black/30 hover:bg-black/45 text-white backdrop-blur-md"
                }`}
                aria-expanded={langMenuOpen}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#DFBF57]" />
                <span className="uppercase font-medium">{locale}</span>
                <span className="text-[10px] text-[#DFBF57]">▼</span>
              </button>

              {langMenuOpen && (
                <div
                  className={`absolute top-full mt-2 w-36 rounded-xl border border-[#C8A232]/30 bg-white/95 backdrop-blur-xl p-1.5 shadow-[0_15px_35px_rgba(2,34,86,0.15)] z-50 ${
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
                          ? "bg-[#C8A232]/15 text-[#955904] font-bold"
                          : "text-[#012968]/85 hover:bg-[#F9EDD7] hover:text-[#955904]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] uppercase font-mono font-bold text-[#955904]">
                        {item.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Booking Button -> Direct WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#C8A232]/80 bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>{tNav("bookAppointment")}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Mobile Lang Button */}
            <button
              type="button"
              onClick={() => {
                const nextLocale =
                  locale === "ar" ? "en" : locale === "en" ? "fr" : locale === "fr" ? "ru" : "ar";
                setLocale(nextLocale);
              }}
              className={`px-2.5 py-1 rounded-full border text-[11px] font-bold uppercase transition-colors ${
                scrolled
                  ? "border-[#C8A232]/50 text-[#012968] bg-white/80"
                  : "border-white/30 text-white bg-black/30 backdrop-blur-md"
              }`}
            >
              {locale} 🌐
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled
                  ? "text-[#012968] hover:bg-[#F9EDD7]"
                  : "text-white hover:bg-white/20 bg-black/25 backdrop-blur-md"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FDFBF7]/98 backdrop-blur-2xl border-b border-[#C8A232]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#012968] hover:text-[#955904] py-2 border-b border-[#C8A232]/15 font-body flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#955904]">←</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{tNav("bookAppointment")}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
