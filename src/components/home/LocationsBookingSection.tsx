"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { MapPin, Phone, CalendarCheck, ArrowRight, ArrowLeft, Star } from "lucide-react";

export function LocationsBookingSection() {
  const t = useTranslations("locationsBooking");
  const { isRtl, locale } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaBarRef = useRef<HTMLDivElement>(null);

  const branches = [
    {
      id: "hurghada",
      num: "01",
      name: t("branches.hurghada.name"),
      address: t("branches.hurghada.address"),
      phone: t("branches.hurghada.phone"),
      phoneRaw: "+201122208262",
      href: "/clinics#hurghada",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
      badge: isRtl ? "فرع الغردقة • البحر الأحمر" : "HURGHADA BRANCH",
    },
    {
      id: "sheikh-zayed",
      num: "02",
      name: t("branches.zayed.name"),
      address: t("branches.zayed.address"),
      phone: t("branches.zayed.phone"),
      phoneRaw: "+201114159449",
      href: "/clinics#sheikh-zayed",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      badge: isRtl ? "المقر الرئيسي • بيفرلي هيلز" : "FLAGSHIP BRANCH",
      featured: true,
    },
    {
      id: "giza",
      num: "03",
      name: t("branches.giza.name"),
      address: t("branches.giza.address"),
      phone: t("branches.giza.phone"),
      phoneRaw: "+201124336636",
      href: "/clinics#giza",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
      badge: isRtl ? "فرع الجيزة • شارع الهرم" : "GIZA BRANCH",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate section header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate branch cards
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Animate bottom CTA bar
      if (ctaBarRef.current) {
        gsap.fromTo(
          ctaBarRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaBarRef.current,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRtl]);

  return (
    <section
      ref={sectionRef}
      id="locations"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Signature Split Background */}
      <SplitSectionBackground inverted={!isRtl} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Section Header (centered) ── */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DFBF57]/50 bg-[#011438]/85 backdrop-blur-md shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
                {t("badge")}
              </span>
            </div>
            <span className="h-[1px] w-8 sm:w-12 bg-[#DFBF57]/60" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-display leading-[1.28] mb-3">
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              {t("headline")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-[17px] text-[#FAF1DD]/90 leading-relaxed font-body drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
            {t("websiteCopy")}
          </p>
        </div>

        {/* ── 3-Column Branch Cards Grid ── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {branches.map((branch) => (
            <div
              key={branch.id}
              className={`relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col ${
                branch.featured
                  ? "border-[#C8A232] ring-2 ring-[#C8A232]"
                  : "border-[#C8A232]/70"
              }`}
            >
              {/* Gold Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

              {/* Branch Photo */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden select-none bg-[#020B1D]">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Badge on Photo */}
                <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} z-10`}>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/95 border border-[#DFBF57] text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-md">
                    {branch.featured ? (
                      <Star className="w-3.5 h-3.5 text-[#DFBF57] fill-[#DFBF57]" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-[#DFBF57]" />
                    )}
                    <span>{branch.badge}</span>
                  </div>
                </div>

                {/* Flagship indicator */}
                {branch.featured && (
                  <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} z-10`}>
                    <div className="px-2.5 py-0.5 rounded-full bg-[#C8A232] text-[#020B1D] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-md">
                      {isRtl ? "الرئيسي" : "FLAGSHIP"}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                {/* Branch Name */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-3">
                  {branch.name}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#DFBF57] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#B8C5D9] font-body leading-snug">
                    {branch.address}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 mb-5">
                  <Phone className="w-4 h-4 text-[#DFBF57] shrink-0" />
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className="text-sm font-mono font-bold text-white hover:text-[#DFBF57] transition-colors"
                    dir="ltr"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Spacer to push CTA to bottom */}
                <div className="flex-1" />

                {/* CTA Button */}
                <Link
                  href={branch.href}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:brightness-110 transition-all font-body cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-white" />
                  <span>{t("bookCta")}</span>
                  <ArrowIcon className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Full-width CTA Bar ── */}
        <div
          ref={ctaBarRef}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={`/${locale}/clinics#booking`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:brightness-110 transition-all font-body cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-white" />
            <span>{isRtl ? "احجز في أي فرع الآن" : "Book at Any Branch"}</span>
            <ArrowIcon className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
