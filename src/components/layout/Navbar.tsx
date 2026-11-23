"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLanguage, Locale } from "@/i18n/IntlProviderWrapper";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { Globe, Menu, X, ChevronDown, CalendarCheck } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, isRtl } = useLanguage();
  const lenis = useLenis();

  const tNav = useTranslations("nav");

  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [labDropdownOpen, setLabDropdownOpen] = useState(false);
  const labDropdownRef = useRef<HTMLDivElement>(null);
  const labCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLabMouseEnter = () => {
    if (labCloseTimeoutRef.current) {
      clearTimeout(labCloseTimeoutRef.current);
      labCloseTimeoutRef.current = null;
    }
    setLabDropdownOpen(true);
  };

  const handleLabMouseLeave = () => {
    if (labCloseTimeoutRef.current) {
      clearTimeout(labCloseTimeoutRef.current);
    }
    labCloseTimeoutRef.current = setTimeout(() => {
      setLabDropdownOpen(false);
    }, 250);
  };

  const isHome = pathname === `/${locale}` || pathname === "/";
  const effectiveScrolled = scrolled || !isHome;

  // GSAP Observer: Smart direction & velocity detection for navbar hide/show
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer);

    const obs = Observer.create({
      target: window,
      type: "wheel,touch,scroll",
      onChangeY: (self) => {
        const top = window.scrollY;
        if (top > 160 && self.deltaY > 15) {
          setNavVisible(false);
        } else if (self.deltaY < -8 || top < 80) {
          setNavVisible(true);
        }
      },
    });

    return () => obs.kill();
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = window.scrollY;
          setScrolled((prev) => {
            if (!prev && top > 50) return true;
            if (prev && top < 15) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        labDropdownRef.current &&
        !labDropdownRef.current.contains(event.target as Node)
      ) {
        setLabDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Locale; label: string }[] = [
    { code: "ar", label: "العربية" },
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ru", label: "Русский" },
  ];

  // Approved 6 Pages Navigation Map with Locale Prefixes
  const navLinks = [
    { href: `/${locale}`, label: tNav("home"), isCurrent: isHome },
    { href: `/${locale}/treatments`, label: tNav("treatments"), isCurrent: pathname === `/${locale}/treatments` },
    { href: `/${locale}/clinics`, label: tNav("clinics"), isCurrent: pathname === `/${locale}/clinics` },
    { href: `/${locale}/aligners`, label: tNav("aligners"), isCurrent: pathname === `/${locale}/aligners` },
  ];

  const labLinks = [
    { href: `/${locale}/laboratory`, label: tNav("ourLab"), isCurrent: pathname === `/${locale}/laboratory` },
    { href: `/${locale}/for-dentists`, label: tNav("forDentists"), isCurrent: pathname === `/${locale}/for-dentists` },
  ];

  const isLabActive = pathname === `/${locale}/laboratory` || pathname === `/${locale}/for-dentists`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    setLabDropdownOpen(false);

    if (href === pathname) {
      if (!href.includes("#")) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(0, { duration: 1 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Background Layer 1: Elegant Deep Navy Glass (Unscrolled State) */}
      <div
        className={`absolute inset-0 bg-[#020B1D]/90 backdrop-blur-md lg:backdrop-blur-none border-b border-[#C8A232]/30 shadow-md transition-opacity duration-300 pointer-events-none -z-10 ${
          effectiveScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Background Layer 2: Antique Warm Parchment Glass (Scrolled State) */}
      <div
        className={`absolute inset-0 bg-[#FAF1DC]/98 backdrop-blur-md lg:backdrop-blur-none border-b border-[#C8A232]/40 shadow-[0_4px_30px_rgba(2,34,86,0.08)] transition-opacity duration-300 pointer-events-none -z-10 ${
          effectiveScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href={`/${locale}`}
            onClick={(e) => handleLinkClick(e, `/${locale}`)}
            className="flex items-center group focus:outline-none cursor-pointer py-0.5"
            aria-label="Magnificent Smile"
          >
            <div className="relative h-16 sm:h-20 md:h-24 w-28 sm:w-36 md:w-44 transition-all duration-300 group-hover:scale-105">
              {/* Variant 1: Golden letters with glowing gold halo for deep navy dark header */}
              <Image
                src="/logo-clean.png"
                alt="Magnificent Smile Dental Clinic"
                fill
                sizes="(max-width: 640px) 140px, 200px"
                className={`object-contain transition-opacity duration-300 drop-shadow-[0_4px_20px_rgba(223,191,87,0.75)] brightness-105 ${
                  effectiveScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                priority
              />

              {/* Variant 2: Crisp Deep Navy lettering for light/scrolled header — 100% readable! */}
              <Image
                src="/logo-dark.png"
                alt="Magnificent Smile Dental Clinic"
                fill
                sizes="(max-width: 640px) 140px, 200px"
                className={`object-contain transition-opacity duration-300 drop-shadow-[0_2px_12px_rgba(1,32,82,0.18)] ${
                  effectiveScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.isCurrent;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-xs tracking-wider uppercase font-semibold transition-colors py-1 group font-body whitespace-nowrap drop-shadow-sm cursor-pointer ${
                    isActive
                      ? "text-[#955904] font-bold"
                      : effectiveScrolled
                      ? "text-[#012968]/85 hover:text-[#955904]"
                      : "text-white/90 hover:text-[#DFBF57]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#DFBF57] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Dental Laboratory Dropdown */}
            <div
              ref={labDropdownRef}
              className="relative py-2"
              onMouseEnter={handleLabMouseEnter}
              onMouseLeave={handleLabMouseLeave}
            >
              <button
                type="button"
                onClick={() => setLabDropdownOpen((prev) => !prev)}
                className={`relative flex items-center gap-1.5 text-xs tracking-wider uppercase font-semibold transition-colors py-1 font-body whitespace-nowrap drop-shadow-sm cursor-pointer ${
                  isLabActive
                    ? "text-[#955904] font-bold"
                    : effectiveScrolled
                    ? "text-[#012968]/85 hover:text-[#955904]"
                    : "text-white/90 hover:text-[#DFBF57]"
                }`}
                aria-expanded={labDropdownOpen}
              >
                <span>{tNav("dentalLab")}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    labDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#DFBF57] transition-all duration-300 ${
                    isLabActive ? "w-full" : "w-0"
                  }`}
                />
              </button>

              {labDropdownOpen && (
                <div
                  className={`absolute top-full -mt-0.5 w-52 rounded-xl border border-[#C8A232]/40 bg-white/98 backdrop-blur-xl p-2 shadow-[0_15px_35px_rgba(2,34,86,0.22)] z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150 ${
                    isRtl ? "right-0" : "left-0"
                  }`}
                  onMouseEnter={handleLabMouseEnter}
                  onMouseLeave={handleLabMouseLeave}
                >
                  {/* Invisible bridge to prevent mouse leave gap */}
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  {labLinks.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      onClick={(e) => handleLinkClick(e, sublink.href)}
                      className={`block px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                        sublink.isCurrent
                          ? "bg-[#C8A232]/15 text-[#955904] font-bold"
                          : "text-[#012968]/85 hover:bg-[#F9EDD7] hover:text-[#955904]"
                      }`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Actions: Language Switcher & Book Consultation CTA */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-sm transition-all focus:outline-none cursor-pointer ${
                  effectiveScrolled
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

            {/* Primary Header Button -> /clinics#booking */}
            <Link
              href={`/${locale}/clinics#booking`}
              className="relative group overflow-hidden px-4 py-2 2xl:px-5 2xl:py-2.5 rounded-full border border-[#C8A232]/80 bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{tNav("bookConsultation")}</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Quick Lang Switch */}
            <button
              type="button"
              onClick={() => {
                const nextLocale =
                  locale === "ar" ? "en" : locale === "en" ? "fr" : locale === "fr" ? "ru" : "ar";
                setLocale(nextLocale);
              }}
              className={`px-2.5 py-1 rounded-full border text-[11px] font-bold uppercase transition-colors ${
                effectiveScrolled
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
                effectiveScrolled
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
          <nav className="flex flex-col gap-2">
            {/* Language Bar in Drawer */}
            <div className="grid grid-cols-4 gap-1.5 pb-3 mb-2 border-b border-[#C8A232]/20">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLocale(item.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-1.5 text-center text-xs rounded-lg font-bold transition-colors ${
                    locale === item.code
                      ? "bg-[#012968] text-[#DFBF57] shadow-sm"
                      : "bg-white/80 text-[#012968] hover:bg-[#FAF8F5] border border-[#C8A232]/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold py-2.5 border-b border-[#C8A232]/15 font-body flex items-center justify-between cursor-pointer transition-colors ${
                  link.isCurrent
                    ? "text-[#955904] font-bold"
                    : "text-[#012968] hover:text-[#955904]"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#955904]">{isRtl ? "←" : "→"}</span>
              </Link>
            ))}

            {/* Dental Laboratory Section in Mobile Menu */}
            <div className="py-2 border-b border-[#C8A232]/15">
              <div className="text-xs font-bold uppercase tracking-wider text-[#955904] mb-1.5">
                {tNav("dentalLab")}
              </div>
              <div className="flex flex-col gap-1.5 pl-3 pr-3">
                {labLinks.map((sublink) => (
                  <Link
                    key={sublink.href}
                    href={sublink.href}
                    onClick={(e) => handleLinkClick(e, sublink.href)}
                    className={`text-sm py-1.5 flex items-center justify-between cursor-pointer transition-colors ${
                      sublink.isCurrent
                        ? "text-[#955904] font-bold"
                        : "text-[#012968]/85 hover:text-[#955904]"
                    }`}
                  >
                    <span>• {sublink.label}</span>
                    <span className="text-xs text-[#955904]">{isRtl ? "←" : "→"}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Booking CTA Button */}
            <div className="pt-3">
              <Link
                href={`/${locale}/clinics#booking`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>{tNav("bookConsultation")}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
