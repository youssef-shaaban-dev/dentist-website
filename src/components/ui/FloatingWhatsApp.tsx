"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
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

export function FloatingWhatsApp() {
  const t = useTranslations("booking");
  const { isRtl, locale } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const defaultInquiryText =
    locale === "ar"
      ? "مرحباً عيادات ماغنيفيسنت سمايل، أود الاستفسار وحجز موعد استشارة ملكية."
      : locale === "fr"
      ? "Bonjour Cliniques Magnificent Smile, je souhaite réserver une consultation privée."
      : locale === "ru"
      ? "Здравствуйте, клиника Magnificent Smile, я хочу записаться на персональный приём."
      : "Hello Magnificent Smile Clinics, I would like to book a royal consultation.";

  const whatsappUrl = `https://wa.me/201008901234?text=${encodeURIComponent(defaultInquiryText)}`;

  return (
    <div
      className={`fixed bottom-6 ${
        isRtl ? "left-6" : "right-6"
      } z-50 flex items-center gap-3 select-none`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Tooltip / Label */}
      <span
        className={`hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#25D366]/40 text-[#0A1128] text-xs font-bold font-mono shadow-lg transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse me-2" />
        {t("floatingWhatsapp")}
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contact Magnificent Smile on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
