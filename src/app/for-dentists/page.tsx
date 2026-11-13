"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";

import {
  Stethoscope,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  FileText,
  Send,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Cpu,
} from "lucide-react";

function DentistEnquiryForm() {
  const t = useTranslations("forDentistsPage");
  const { isRtl } = useLanguage();
  const searchParams = useSearchParams();

  const serviceParam = searchParams.get("service");
  const isAligner = Boolean(serviceParam && serviceParam.toLowerCase().includes("aligner"));
  const defaultService = isAligner
    ? (isRtl ? "تقويم شفاف" : "Clear Aligners")
    : (isRtl ? "فينير وقشور خزفية" : "Veneers");

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

export default function ForDentistsPage() {
  const t = useTranslations("forDentistsPage");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [caseReqOpen, setCaseReqOpen] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
                <Stethoscope className="w-3.5 h-3.5 text-[#955904]" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#955904] font-mono">
                  {isRtl ? "للأطباء والعيادات" : "FOR DENTAL PRACTITIONERS"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold font-display text-[#0F266A] leading-[1.2] mb-4">
                {t("headline")}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#2A3B56] font-body leading-relaxed mb-8 max-w-xl">
                {t("websiteCopy")}
              </p>

              <div>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(200,162,50,0.35)] hover:shadow-[0_8px_30px_rgba(200,162,50,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{isRtl ? "إرسال استفسار مهني" : "Submit Case Enquiry"}</span>
                  <ArrowIcon className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Highlights Card (Royal Blue Side) */}
            <div
              className={`lg:col-span-5 relative flex justify-center items-center ${
                isRtl ? "lg:pl-6 xl:pl-8" : "lg:pr-6 xl:pr-8"
              }`}
            >
              <div className="w-full p-6 sm:p-8 rounded-3xl bg-[#03112E]/90 border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C8A232]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white">
                      {isRtl ? "معايير التعاون المهني" : "Clinical B2B Standards"}
                    </h3>
                    <span className="text-[11px] font-mono text-[#DFBF57]">
                      {isRtl ? "دقة ميكرونية • تواصل مباشر" : "Micron Precision • Direct Support"}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    isRtl ? "تواصل مباشر مع مدير المعمل أ. عبد القادر درغام" : "Direct communication with Lab Manager Abdulkader Dorgham",
                    isRtl ? "خامات سويسرية وألمانية معتمدة دولياً (Ivoclar, Bredent)" : "Certified Swiss & German materials (Ivoclar, Bredent)",
                    isRtl ? "استلام ملفات رقمية (STL) ومقاسات تقليدية" : "Support for digital STL scans & conventional impressions",
                    isRtl ? "مواعيد تسليم دقيقة وتوصيل لكافة المحافظات" : "Guaranteed delivery schedules with secure courier dispatch",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2E8F0]">
                      <div className="w-4 h-4 rounded-full bg-[#DFBF57]/20 border border-[#DFBF57] text-[#DFBF57] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 2: 4 STEPS COLLABORATION (Full Width S-Curve)    */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
              {t("collaborationHeading")}
            </h2>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "أربع خطوات واضحة ومباشرة تضمن لك تسليم التعويضات بأعلى درجات الدقة والتطابق السريري."
                : "Four straightforward stages ensuring precision fit and smooth clinical workflow."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.raw("steps")?.map((step: { num: string; title: string; desc: string }, sIdx: number) => (
              <div
                key={sIdx}
                className="relative p-6 sm:p-7 rounded-3xl bg-white/95 border border-[#C8A232]/35 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-mono text-[#955904] mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold font-display text-[#0F266A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A3B56]/80 font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 3: CASE REQUIREMENTS (Full Width S-Curve Split)  */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="rounded-3xl border-2 border-[#C8A232]/45 bg-[#FCFAF5]/95 overflow-hidden shadow-xl backdrop-blur-md">
            <button
              type="button"
              onClick={() => setCaseReqOpen(!caseReqOpen)}
              className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF1DC]/50 transition-colors"
              dir={isRtl ? "rtl" : "ltr"}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#955904]" />
                <h2 className="text-lg sm:text-xl font-bold font-display text-[#0F266A]">
                  {t("caseRequirementsHeading")}
                </h2>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#955904] transition-transform duration-200 ${
                  caseReqOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {caseReqOpen && (
              <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 border-t border-[#C8A232]/25" dir={isRtl ? "rtl" : "ltr"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.raw("caseRequirements")?.map((req: string, rIdx: number) => (
                    <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F266A] font-bold">
                      <div className="w-4 h-4 rounded-full bg-[#FAF1DC] border border-[#C8A232]/50 text-[#955904] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 4: DENTIST FAQS (Full Width S-Curve Split)       */}
      {/* ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F266A] tracking-tight mb-2">
              {t("faqsHeading")}
            </h2>
            <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
              {isRtl
                ? "إجابات عملية حول بروتوكولات الشحن، والتوافق الرقمي مع ماسحات العيادات المختلفة."
                : "Operational insights on courier dispatch and scanner compatibility."}
            </p>
          </div>

          <div className="space-y-3">
            {t.raw("faqs")?.map((faq: { q: string; a: string }, fIdx: number) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-[#C8A232]/35 bg-white/95 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EE]/60 transition-colors"
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    <span className="text-sm sm:text-base font-bold font-display text-[#0F266A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#955904] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#2A3B56]/85 font-body leading-relaxed border-t border-[#C8A232]/15 pt-3"
                      dir={isRtl ? "rtl" : "ltr"}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ======================================================== */}
      {/* SECTION 5: B2B ENQUIRY FORM (Full Width S-Curve Split)   */}
      {/* ======================================================== */}
      <section id="enquiry" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
        <SplitSectionBackground inverted={!isRtl} waveVariant="A" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Enquiry Form (Parchment Side) */}
            <div
              className={`lg:col-span-7 ${
                isRtl ? "lg:pr-4" : "lg:pl-4"
              }`}
            >
              <Suspense fallback={<div className="text-center py-10 font-bold text-[#0F266A]">Loading enquiry form...</div>}>
                <DentistEnquiryForm />
              </Suspense>
            </div>

            {/* Partnership Reassurance (Royal Blue Side) */}
            <div
              className={`lg:col-span-5 flex flex-col justify-center ${
                isRtl ? "lg:pl-4" : "lg:pr-4"
              }`}
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#03112E]/90 border-2 border-[#C8A232]/60 shadow-[0_16px_45px_rgba(1,32,82,0.65)] backdrop-blur-md text-white">
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
    </main>
  );
}
