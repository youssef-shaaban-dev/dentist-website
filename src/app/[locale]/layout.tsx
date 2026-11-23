import React from "react";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import { IntlProviderWrapper } from "@/i18n/IntlProviderWrapper";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <IntlProviderWrapper locale={locale as Locale} messages={messages}>
      <SmoothScrollProvider>
        <Navbar />
        <main className="relative min-h-screen bg-ivory text-[#0A1128] selection:bg-[#C8A232] selection:text-ivory overflow-hidden">
          {children}
        </main>
        <Footer />
      </SmoothScrollProvider>
    </IntlProviderWrapper>
  );
}
