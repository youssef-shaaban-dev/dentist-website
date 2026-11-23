"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

import {
  MapPin,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Crown,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BookingForm({
  selectedBranch,
  setSelectedBranch,
  selectedTreatment,
  setSelectedTreatment,
}: {
  selectedBranch: string;
  setSelectedBranch: (val: string) => void;
  selectedTreatment: string;
  setSelectedTreatment: (val: string) => void;
}) {
  const t = useTranslations("clinicsPage");
  const { isRtl } = useLanguage();
  const searchParams = useSearchParams();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const branchParam = searchParams.get("branch");
    const treatmentParam = searchParams.get("treatment");

    if (branchParam) {
      if (branchParam === "hurghada") setSelectedBranch("hurghada");
      else if (branchParam === "sheikh-zayed" || branchParam === "zayed") setSelectedBranch("sheikh-zayed");
      else if (branchParam === "giza") setSelectedBranch("giza");
    }

    if (treatmentParam) {
      const match = t.raw("treatmentOptions")?.find((opt: string) =>
        opt.toLowerCase().includes(treatmentParam.toLowerCase())
      );
      if (match) setSelectedTreatment(match);
    }
  }, [searchParams, setSelectedBranch, setSelectedTreatment, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !selectedBranch || !selectedTreatment) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFullName("");
      setPhone("");
      setDateTime("");
      setMessage("");
    }, 800);
  };

  return (
    <div
      id="booking"
      className="p-6 sm:p-10 rounded-3xl bg-white border border-[#C8A232]/40 shadow-xl max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#012968] mb-2">
          {t("formHeading")}
        </h2>
        <p className="text-xs sm:text-sm text-[#2A3B56]/75 font-body">
          {t("formNotice")}
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold mb-1">{isRtl ? "تم استلام طلبك بنجاح" : "Request Received"}</p>
            <p>{t("success")}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p>{t("error")}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
            {t("fullName")} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={isRtl ? "الاسم الكامل" : "Enter your full name"}
            className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
            {t("phone")} <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={isRtl ? "01XXXXXXXXX" : "+20 1XX XXX XXXX"}
            className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body text-left"
            dir="ltr"
          />
        </div>

        {/* Branch & Treatment Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("preferredBranch")} <span className="text-rose-500">*</span>
            </label>
            <select
              required
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
            >
              <option value="sheikh-zayed">Beverly Hills — Sheikh Zayed</option>
              <option value="giza">Pyramids Road — Giza</option>
              <option value="hurghada">Hurghada</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("treatmentOfInterest")} <span className="text-rose-500">*</span>
            </label>
            <select
              required
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
            >
              {t.raw("treatmentOptions")?.map((opt: string) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            {selectedTreatment?.toLowerCase().includes("vip") && (
              <div className="mt-2.5 p-3 rounded-xl bg-gradient-to-r from-[#020B1D] via-[#051538] to-[#0A255C] border border-[#DFBF57] text-[#DFBF57] text-xs font-mono flex items-center gap-2 shadow-md">
                <Crown className="w-4 h-4 fill-[#DFBF57] shrink-0" />
                <span>
                  {isRtl
                    ? "باقة كبار الشخصيات VIP: تشمل غرفة خاصة مستقلة، طاقم طبي استشاري، وتسليم التركيبات في خلال 24 ساعة فقط."
                    : "VIP Executive Package: Includes private suite, dedicated consultant team, and 24h prosthetics delivery."}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Preferred Date/Time */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
            {t("preferredDateTime")}
          </label>
          <input
            type="text"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            placeholder={isRtl ? "مثال: مساء الأحد أو 5 مساءً" : "e.g., Sunday afternoon or 5:00 PM"}
            className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
            {t("message")}
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={isRtl ? "أي استفسار إضافي أو ملاحظات..." : "Any additional notes or questions..."}
            className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body resize-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] hover:shadow-lg text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
          >
            {status === "loading" ? t("submitting") : t("submitButton")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ClinicsPage() {
  const t = useTranslations("clinicsPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedBranch, setSelectedBranch] = useState("sheikh-zayed");
  const [selectedTreatment, setSelectedTreatment] = useState("Clear Aligners");

  const branches = [
    {
      id: "hurghada",
      anchor: "hurghada",
      name: "Hurghada",
      nameAr: "الغردقة",
      address: "Al Kawthar, Metro St., Hurghada, Red Sea",
      addressAr: "الكوثر، شارع مترو، الغردقة، البحر الأحمر",
      phone: "01122208262",
      phoneRaw: "+201122208262",
      mapUrl: "https://maps.google.com/?q=Al+Kawthar+Metro+Street+Hurghada+Egypt",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "sheikh-zayed",
      anchor: "sheikh-zayed",
      name: "Beverly Hills — Sheikh Zayed",
      nameAr: "بيفرلي هيلز — الشيخ زايد",
      address: "Icon Mall, Gate 9, Beverly Hills, Sheikh Zayed",
      addressAr: "آيكون مول، بوابة ٩، بيفرلي هيلز، الشيخ زايد",
      phone: "01114159449",
      phoneRaw: "+201114159449",
      mapUrl: "https://maps.google.com/?q=Icon+Mall+Gate+9+Beverly+Hills+Sheikh+Zayed+Egypt",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      featured: true,
    },
    {
      id: "giza",
      anchor: "giza",
      name: "Pyramids Road — Giza",
      nameAr: "طريق الأهرامات — الجيزة",
      address: "El Taawun, Haram St., Giza",
      addressAr: "التعاون، شارع الهرم، الجيزة",
      phone: "01124336636",
      phoneRaw: "+201124336636",
      mapUrl: "https://maps.google.com/?q=El+Taawun+Haram+Street+Giza+Egypt",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <main className="relative w-full overflow-x-hidden pt-20 sm:pt-24" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* ======================================================== */}
      {/* SECTION 1: HERO / INTRO (Full Width S-Curve Split)       */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content (Parchment Side) */}
            <div
              className={`lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none ${
                isRtl ? "lg:pr-8 xl:pr-14 lg:pl-6" : "lg:pl-8 xl:pl-14 lg:pr-6"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/60 bg-white/90 shadow-xs mb-4 w-fit">
                <MapPin className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {isRtl ? "فروع العيادات والحجز" : "OUR CLINICS & BOOKING"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4">
                {t("headline")}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-xl">
                {t("websiteCopy")}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{isRtl ? "احجز موعدك الآن" : "Book Your Appointment"}</span>
                  <ArrowIcon className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#branches"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#C8A232]/60 text-[#0F266A] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#FAF1DC]/50 transition-all cursor-pointer shadow-xs"
                >
                  <span>{isRtl ? "استكشف الفروع الثلاثة" : "Explore Branches"}</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase (Royal Blue Side) */}
            <div
              className={`lg:col-span-5 relative flex justify-center items-center ${
                isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
              }`}
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0A1128] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)]">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85"
                  alt="Magnificent Smile Dental Clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#020B1D]/85 backdrop-blur-md border border-[#C8A232]/40 text-center shadow-lg">
                  <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase">
                    3 Premier Clinics • Hurghada • Zayed • Giza
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 2: 3 CLINIC BRANCHES (Full Width S-Curve)        */}
      {/* ======================================================== */}
      <section id="branches" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-3">
              {isRtl ? "عياداتنا في الغردقة، الشيخ زايد، والجيزة" : "Our Premier Clinical Locations"}
            </h2>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "مجهزة بأحدث تقنيات طب الأسنان الرقمي وغرف تعقيم بمعايير أوروبية لتوفير أعلى مستويات الراحة والأمان."
                : "Equipped with the latest in digital dentistry and European standard sterilization protocols."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {branches.map((branch) => {
              const whatsappBranchUrl = `https://wa.me/${branch.phoneRaw.replace(
                /[^0-9]/g,
                ""
              )}?text=${encodeURIComponent(
                isRtl
                  ? `مرحباً، أود الاستفسار عن المواعيد في فرع (${branch.nameAr}) في عيادات ماغنيفيسنت سمايل.`
                  : `Hello, I would like to enquire about appointments at the ${branch.name} branch of Magnificent Smile.`
              )}`;

              return (
                <div
                  key={branch.id}
                  id={branch.anchor}
                  className={`group rounded-3xl overflow-hidden bg-white/95 border transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-2xl backdrop-blur-xs ${
                    branch.featured
                      ? "border-[#C8A232] shadow-[0_8px_30px_rgba(200,162,50,0.25)] ring-2 ring-[#C8A232]/30"
                      : "border-[#C8A232]/35 hover:border-[#C8A232]"
                  }`}
                >
                  {/* Branch Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-[#0A1128]">
                    <Image
                      src={branch.image}
                      alt={isRtl ? branch.nameAr : branch.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Featured Stamp */}
                    {branch.featured && (
                      <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#012052] border border-[#DFBF57] text-[#DFBF57] text-[10px] font-mono font-bold shadow-md">
                        {isRtl ? "الفرع الرئيسي" : "FLAGSHIP"}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase block mb-0.5">
                        {isRtl ? "عيادة متخصصة" : "CLINICAL BRANCH"}
                      </span>
                      <h2 className="text-lg font-bold font-display text-white">
                        {isRtl ? branch.nameAr : branch.name}
                      </h2>
                    </div>
                  </div>

                  {/* Branch Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4 mb-6">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#955904] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
                          {isRtl ? branch.addressAr : branch.address}
                        </p>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center gap-3">
                        <PhoneCall className="w-4 h-4 text-[#955904] shrink-0" />
                        <a
                          href={`tel:${branch.phoneRaw}`}
                          className="text-xs sm:text-sm font-mono font-bold text-[#0F266A] hover:underline"
                          dir="ltr"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-[#C8A232]/25">
                      <div className="grid grid-cols-2 gap-2">
                        {/* Call Button */}
                        <a
                          href={`tel:${branch.phoneRaw}`}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#012052] hover:bg-[#022A6D] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-xs"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#DFBF57]" />
                          <span>{t("call")}</span>
                        </a>

                        {/* WhatsApp Button */}
                        <a
                          href={whatsappBranchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-bold tracking-wide transition-colors border border-[#25D366]/40"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>{t("whatsapp")}</span>
                        </a>
                      </div>

                      {/* Directions Link */}
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 text-[11px] text-[#955904] hover:underline font-mono pt-1"
                      >
                        <span>{isRtl ? "عرض الموقع والاتجاهات على الخريطة" : "View Map & Directions"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 3: APPOINTMENT REQUEST FORM (Full Width S-Curve) */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Booking Form (Parchment Side) */}
            <div
              className={`lg:col-span-7 ${
                isRtl ? "lg:pr-4" : "lg:pl-4"
              }`}
            >
              <Suspense fallback={<div className="text-center py-10 font-bold text-[#0F266A]">Loading booking form...</div>}>
                <BookingForm
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                  selectedTreatment={selectedTreatment}
                  setSelectedTreatment={setSelectedTreatment}
                />
              </Suspense>
            </div>

            {/* Concierge & Clinic Info (Royal Blue Side) */}
            <div
              className={`lg:col-span-5 flex flex-col justify-center ${
                isRtl ? "lg:pl-4" : "lg:pr-4"
              }`}
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#03112E]/90 border-2 border-[#C8A232]/60 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md text-white">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C8A232]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white">
                      {isRtl ? "خدمة المرضى والحجوزات" : "Patient Care Concierge"}
                    </h3>
                    <span className="text-[11px] font-mono text-[#DFBF57]">
                      {isRtl ? "خطوط مباشرة لكافة الفروع" : "Direct Branch Hotlines"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    {
                      branch: isRtl ? "فرع الغردقة (البحر الأحمر)" : "Hurghada Branch",
                      phone: "01122208262",
                      raw: "+201122208262",
                    },
                    {
                      branch: isRtl ? "فرع بيفرلي هيلز (الشيخ زايد)" : "Sheikh Zayed (Beverly Hills)",
                      phone: "01114159449",
                      raw: "+201114159449",
                    },
                    {
                      branch: isRtl ? "فرع شارع الهرم (الجيزة)" : "Giza (Pyramids Road)",
                      phone: "01124336636",
                      raw: "+201124336636",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-[#C8A232]/25 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">{item.branch}</p>
                        <a
                          href={`tel:${item.raw}`}
                          className="text-xs font-mono text-[#DFBF57] hover:underline"
                          dir="ltr"
                        >
                          {item.phone}
                        </a>
                      </div>
                      <a
                        href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 transition-all"
                      >
                        WhatsApp
                      </a>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#DFBF57]/10 border border-[#DFBF57]/30 text-[11px] text-[#E2E8F0] leading-relaxed">
                  {isRtl
                    ? "يتم تأكيد جميع المواعيد فورياً عبر الهاتف أو الواتساب من فريق خدمة المرضى."
                    : "All appointment requests are promptly verified via telephone or WhatsApp by our clinic team."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
