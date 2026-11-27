import Link from "next/link";
import Image from "next/image";
import { Home, MessageCircle } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Magnificent Smile Dental Clinic",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020B1D] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C8A232] selection:text-white">
      {/* Background Decorative Gold & Sapphire Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A232]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#012968]/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Hieroglyphic Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "radial-gradient(#DFBF57 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        {/* Brand Logo & Royal Cartouche */}
        <Link href="/en" className="relative h-20 w-24 mb-6 block transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="Magnificent Smile"
            fill
            sizes="96px"
            className="object-contain drop-shadow-[0_4px_20px_rgba(200,162,50,0.4)]"
            priority
          />
        </Link>

        {/* 404 Number Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C8A232]/30 mb-4 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#DFBF57] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#DFBF57] uppercase">
            Error 404 • Not Found
          </span>
        </div>

        {/* Big Stylized 404 */}
        <h1 className="text-7xl sm:text-8xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#DFBF57] to-[#955904] drop-shadow-[0_4px_30px_rgba(200,162,50,0.3)] mb-3">
          404
        </h1>

        {/* Headings */}
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-sm font-body text-[#DFBF57] mb-3">
          الصفحة المطلوبة غير موجودة
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#FDFBF7]/70 font-body leading-relaxed max-w-md mb-8">
          The requested page may have been moved, renamed, or is temporarily unavailable. 
          Please return to the main clinic experience or reach out to our concierge desk.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm">
          <Link
            href="/en"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#DFBF57] to-[#C8A232] hover:from-[#F3E5AB] hover:to-[#DFBF57] text-[#012052] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(200,162,50,0.35)] active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <a
            href="https://wa.me/201122208262"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-[#25D366]/15 border border-[#C8A232]/30 hover:border-[#25D366]/50 text-white hover:text-[#25D366] font-display font-bold text-xs tracking-wider transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Quick Branch Telephones */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full flex items-center justify-center gap-4 text-[11px] text-[#FDFBF7]/60 font-mono">
          <a href="tel:+201122208262" className="hover:text-[#DFBF57] transition-colors">
            Hurghada: 01122208262
          </a>
          <span>•</span>
          <a href="tel:+201114159449" className="hover:text-[#DFBF57] transition-colors">
            Zayed: 01114159449
          </a>
        </div>
      </div>
    </div>
  );
}
