"use client";

import React, { createContext, useContext, useEffect } from "react";
import { NextIntlClientProvider, type AbstractIntlMessages } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export type Locale = "ar" | "en" | "fr" | "ru";
export type Direction = "rtl" | "ltr";

export const LOCALES: Locale[] = ["ar", "en", "fr", "ru"];

interface LanguageContextType {
  locale: Locale;
  direction: Direction;
  isRtl: boolean;
  dirMultiplier: number;
  setLocale: (newLocale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function IntlProviderWrapper({
  children,
  locale = "ar",
  messages,
}: {
  children: React.ReactNode;
  locale?: Locale;
  messages?: AbstractIntlMessages;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const direction: Direction = locale === "ar" ? "rtl" : "ltr";
  const isRtl = direction === "rtl";
  const dirMultiplier = isRtl ? -1 : 1;

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", direction);
    try {
      localStorage.setItem("magnificent_locale", locale);
    } catch {
      // ignore in private browsing
    }
  }, [locale, direction]);

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    try {
      localStorage.setItem("magnificent_locale", newLocale);
    } catch {
      // ignore
    }

    if (!pathname) {
      router.push(`/${newLocale}`);
      return;
    }

    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
      segments[0] = newLocale;
      router.push("/" + segments.join("/"));
    } else {
      router.push(`/${newLocale}${pathname === "/" ? "" : pathname}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, direction, isRtl, dirMultiplier, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="Africa/Cairo">
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within an IntlProviderWrapper");
  }
  return ctx;
}
