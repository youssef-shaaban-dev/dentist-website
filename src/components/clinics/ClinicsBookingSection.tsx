"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { MapPin, CheckCircle2, AlertCircle, Crown } from "lucide-react";

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

interface ClinicsBookingSectionProps {
  selectedBranch: string;
  setSelectedBranch: (val: string) => void;
  selectedTreatment: string;
  setSelectedTreatment: (val: string) => void;
}

export function ClinicsBookingSection({
  selectedBranch,
  setSelectedBranch,
  selectedTreatment,
  setSelectedTreatment,
}: ClinicsBookingSectionProps) {
  const { isRtl } = useLanguage();

  return (
    <section className="relative w-full py-20 sm:py-28 px-0 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="w-full relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Booking Form (Parchment Side) */}
          <div className="w-full flex justify-center items-center p-4 sm:p-6 lg:p-0 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="w-full max-w-xl mx-auto">
              <Suspense fallback={<div className="text-center py-10 font-bold text-[#0F266A]">Loading booking form...</div>}>
                <BookingForm
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                  selectedTreatment={selectedTreatment}
                  setSelectedTreatment={setSelectedTreatment}
                />
              </Suspense>
            </div>
          </div>

          {/* Concierge & Clinic Info (Royal Blue Side) */}
          <div className="w-full flex justify-center items-center p-4 sm:p-6 lg:p-0 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-3xl bg-[#03112E]/90 border-2 border-[#C8A232]/60 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md text-white">
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
  );
}
