"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { NextIntlClientProvider } from "next-intl";
import arMessages from "../../messages/ar.json";
import enMessages from "../../messages/en.json";
import frMessages from "../../messages/fr.json";
import ruMessages from "../../messages/ru.json";

export type Locale = "ar" | "en" | "fr" | "ru";
export type Direction = "rtl" | "ltr";

const messagesMap: Record<Locale, typeof arMessages> = {
  ar: arMessages,
  en: enMessages,
  fr: frMessages,
  ru: ruMessages,
};

interface LanguageContextType {
  locale: Locale;
  direction: Direction;
  isRtl: boolean;
  dirMultiplier: number;
  setLocale: (newLocale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = "magnificent_locale";
const LOCALE_CHANGE_EVENT = "magnificent_locale_change";

function subscribeToLocale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LOCALE_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LOCALE_CHANGE_EVENT, callback);
  };
}

function getLocaleSnapshot(): Locale {
  if (typeof window === "undefined") return "ar";
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
  if (saved && (saved === "ar" || saved === "en" || saved === "fr" || saved === "ru")) {
    return saved;
  }
  return "ar";
}

function getServerLocaleSnapshot(): Locale {
  return "ar";
}

export function IntlProviderWrapper({ children }: { children: React.ReactNode }) {
  // Use useSyncExternalStore to subscribe to external localStorage without setState in useEffect
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  );

  const direction: Direction = locale === "ar" ? "rtl" : "ltr";
  const isRtl = direction === "rtl";
  const dirMultiplier = isRtl ? -1 : 1;

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", direction);
  }, [locale, direction]);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
    } catch {
      // ignore in restricted private browsing
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, direction, isRtl, dirMultiplier, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesMap[locale]}
        timeZone="Africa/Cairo"
      >
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
