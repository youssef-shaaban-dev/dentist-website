"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Phone, CalendarCheck } from "lucide-react";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function BookConsultationSection() {
  const t = useTranslations("booking");
  const { isRtl, locale } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const defaultMessage =
    locale === "ar"
      ? "مرحباً، أود حجز موعد استشارة في عيادات ماغنيفيسنت سمايل."
      : locale === "fr"
      ? "Bonjour, je souhaite réserver une consultation chez Magnificent Smile."
      : locale === "ru"
      ? "Здравствуйте, я хочу записаться на приём в клинику Magnificent Smile."
      : "Hello, I would like to book a consultation at Magnificent Smile Clinics.";

  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(defaultMessage)}`;
  const cleanPhone = t("hotline").replace(/\s+/g, "");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge & subtitle entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 2. TextSplit Scrub for Main Headline
      const titleWords = titleRef.current?.querySelectorAll(".split-title-word");
      if (titleWords && titleWords.length > 0) {
        gsap.to(titleWords, {
          y: "0%",
          opacity: 1,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });
      }

      // 3. CTA Buttons entrance
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 25, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="book"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/20 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Subtle Category Badge */}
        <div ref={headerRef} className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-xs">
            <CalendarCheck className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-[11px] font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>
        </div>

        {/* Clean, Modern Title with SplitTextScrub */}
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#012968] mb-4"
        >
          <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
        </h2>

        {/* Calm Subtitle */}
        <p className="text-base sm:text-lg text-[#5B6782] font-body max-w-xl mx-auto mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Clean, Premium WhatsApp & Phone Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm tracking-wide shadow-[0_6px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
            <span>{t("whatsappBtn")}</span>
          </a>

          <a
            href={`tel:${cleanPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full border border-[#C8A232]/40 bg-white hover:bg-[#FAF8F5] text-[#012968] font-bold text-sm transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#955904] shrink-0" />
            <span>{t("phoneLabel")}</span>
            <span className="font-mono text-xs text-[#5B6782]" dir="ltr">
              {t("hotline")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
