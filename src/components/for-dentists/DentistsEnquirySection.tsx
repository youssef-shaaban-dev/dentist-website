"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { Stethoscope, CheckCircle2, AlertCircle, Send, Cpu } from "lucide-react";

function DentistEnquiryForm() {
  const t = useTranslations("forDentistsPage");
  const { isRtl } = useLanguage();
  const searchParams = useSearchParams();

  const serviceParam = searchParams.get("service");
  const isAligner = Boolean(serviceParam && serviceParam.toLowerCase().includes("aligner"));
  const defaultService = isAligner
    ? (isRtl ? "تقويم شفاف" : "Clear Aligners")
    : (isRtl ? "فينير وعدسات إيماكس (E.max)" : "E.max Veneers");

  const [dentistName, setDentistName] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [cityCountry, setCityCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [requiredService, setRequiredService] = useState(defaultService);
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dentistName.trim() || !clinicName.trim() || !cityCountry.trim() || !phone.trim() || !requiredService) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setDentistName("");
      setClinicName("");
      setCityCountry("");
      setPhone("");
      setEmail("");
      setDetails("");
    }, 800);
  };

  return (
    <div
      id="enquiry"
      className="p-6 sm:p-10 rounded-3xl bg-white border border-[#C8A232]/40 shadow-xl max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EE] text-[10px] font-mono font-bold text-[#955904] mb-2 border border-[#C8A232]/30">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>B2B CLINICAL ENQUIRY</span>
        </div>
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
            <p className="font-bold mb-1">{isRtl ? "تم إرسال الاستفسار بنجاح" : "Enquiry Sent"}</p>
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
        {/* Row 1: Dentist Name & Clinic Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("dentistName")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={dentistName}
              onChange={(e) => setDentistName(e.target.value)}
              placeholder={isRtl ? "د. فلان الفلاني" : "Dr. Full Name"}
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("clinicName")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              placeholder={isRtl ? "اسم العيادة / المركز" : "Clinic or Center Name"}
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
            />
          </div>
        </div>

        {/* Row 2: City / Country & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("cityCountry")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={cityCountry}
              onChange={(e) => setCityCountry(e.target.value)}
              placeholder={isRtl ? "القاهرة، مصر" : "City, Country"}
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("phone")} <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+20 1XX XXX XXXX"
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body text-left"
              dir="ltr"
            />
          </div>
        </div>

        {/* Row 3: Required Service & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("requiredService")} <span className="text-rose-500">*</span>
            </label>
            <select
              required
              value={requiredService}
              onChange={(e) => setRequiredService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body"
            >
              {t.raw("serviceOptions")?.map((opt: string) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
              {t("email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@clinic.com"
              className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body text-left"
              dir="ltr"
            />
          </div>
        </div>

        {/* Enquiry Details */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#012968] mb-1.5">
            {t("enquiryDetails")}
          </label>
          <textarea
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={isRtl ? "تفاصيل الحالة أو المتطلبات الخاصة..." : "Case details, materials, or specific requirements..."}
            className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/40 focus:border-[#012968] focus:ring-2 focus:ring-[#C8A232]/30 outline-none text-xs sm:text-sm bg-[#FAF8F5]/50 transition-all font-body resize-none"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] hover:shadow-lg text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-white" />
            <span>{status === "loading" ? t("submitting") : t("submitButton")}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export function DentistsEnquirySection() {
  const { isRtl } = useLanguage();

  return (
    <section id="enquiry" className="relative w-full py-20 sm:py-28 px-0 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

      <div className="w-full relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Enquiry Form (Parchment Side) */}
          <div className="w-full flex justify-center items-center p-4 sm:p-6 lg:p-0 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="w-full max-w-xl mx-auto">
              <Suspense fallback={<div className="text-center py-10 font-bold text-[#0F266A]">Loading enquiry form...</div>}>
                <DentistEnquiryForm />
              </Suspense>
            </div>
          </div>

          {/* Partnership Reassurance (Royal Blue Side) */}
          <div className="w-full flex justify-center items-center p-4 sm:p-6 lg:p-0 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-3xl bg-[#03112E]/90 border-2 border-[#C8A232]/60 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md text-white">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C8A232]/30">
                <div className="w-10 h-10 rounded-xl bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-white">
                    {isRtl ? "شراكة مهنية موثوقة" : "Trusted Laboratory Partnership"}
                  </h3>
                  <span className="text-[11px] font-mono text-[#DFBF57]">
                    {isRtl ? "دقة سريرية • تسليم دقيق" : "Clinical Precision • Reliable Dispatch"}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  isRtl ? "تواصل مباشر مع مدير المعمل أ. عبد القادر درغام" : "Direct line to Lab Manager Abdulkader Dorgham",
                  isRtl ? "معاينة ومحاكاة رقمية قبل التصنيع النهائي" : "Digital preview and shade simulation prior to milling",
                  isRtl ? "خامات Swiss E.max وخزف زركونيا معتمد دولياً" : "Swiss E.max & German certified zirconia materials",
                  isRtl ? "توصيل سريع لكافة المحافظات مع شحن آمن" : "Secure nationwide courier dispatch across all governates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2E8F0]">
                    <div className="w-4 h-4 rounded-full bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#DFBF57]/10 border border-[#DFBF57]/30 text-[11px] text-[#E2E8F0] leading-relaxed">
                {isRtl
                  ? "يتم الرد على استفسارات الأطباء ومناقشة تفاصيل الحالات خلال ساعات العمل عبر الإدارة الفنية للمعمل."
                  : "Doctor enquiries and case details are reviewed promptly during clinic hours by our technical team."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
