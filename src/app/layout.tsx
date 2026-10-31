import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Montserrat, Cairo, Tajawal, Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import { IntlProviderWrapper } from "@/i18n/IntlProviderWrapper";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Local English Display Font: Zentry with ligature features
const zentry = localFont({
  src: "../../public/fonts/zentry-regular.woff2",
  variable: "--font-zentry",
  display: "swap",
  weight: "400",
  style: "normal",
});

// English Body Font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// Arabic Body Font
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

// Arabic Secondary / Modern Display Font
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

// Arabic Calligraphic Luxury Display Font
const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1128",
};

export const metadata: Metadata = {
  title: "Magnificent Smile | Modern Clinical Luxury & Implantology",
  description:
    "We are the descendants of Hesy-Ra. Magnificent Smile combines timeless Pharaonic heritage with cutting-edge dental implantology, clear aligners, and high-precision CAD/CAM laboratories.",
  keywords: [
    "Magnificent Smile",
    "Dentist",
    "Hesy-Ra",
    "Clinical Luxury",
    "Dental Implants",
    "Clear Aligners",
    "Veneers",
    "Dental Laboratory",
    "طب أسنان فاخر",
    "حسي رع",
    "زراعة أسنان",
    "تقويم شفاف",
  ],
  authors: [{ name: "Magnificent Smile Dental Clinic" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`
        ${zentry.variable} 
        ${montserrat.variable} 
        ${cairo.variable} 
        ${tajawal.variable} 
        ${arefRuqaa.variable} 
        bg-ivory   text-[#0A1128]
      `}
      suppressHydrationWarning
    >
      <body className="font-body bg-ivory text-[#0A1128] antialiased selection:bg-[#C8A232] selection:text-ivory">
        <IntlProviderWrapper>
          <PageTransitionProvider>
            <SmoothScrollProvider>
              <Navbar />
              <main className="relative min-h-screen bg-ivory text-[#0A1128] selection:bg-[#C8A232] selection:text-ivory overflow-hidden">
                {children}
              </main>
              <Footer />
            </SmoothScrollProvider>
          </PageTransitionProvider>
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
