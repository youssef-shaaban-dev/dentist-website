"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Calendar, CheckCircle2, Sparkles, MapPin, Stethoscope, User, Clock, Phone } from "lucide-react";

export function BookConsultationSection() {
  const t = useTranslations("booking");
  const tClinics = useTranslations("clinics");
  const tTreatments = useTranslations("treatments");
  const tDoctors = useTranslations("doctors");
  const { isRtl } = useLanguage();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    branch: "branch1",
    treatment: "implants",
    doctor: "any",
    name: "",
    phone: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="book"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#8C6A12]" />
            <span className="text-xs font-bold text-[#8C6A12] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1128] mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[#5B6782] font-body leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl border-2 border-[#C8A232]/35 p-8 sm:p-12 shadow-[0_25px_60px_rgba(10,17,40,0.08)]">
          {submitted ? (
            <div className="text-center py-12 animate-in fade-in duration-500">
              <div className="w-20 h-20 rounded-full bg-[#FAF8F5] border-2 border-[#C8A232] flex items-center justify-center text-[#8C6A12] mx-auto mb-6 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0A1128] mb-3">
                تم استلام طلب حجزك الملكي بنجاح
              </h3>
              <p className="text-sm text-[#5B6782] max-w-md mx-auto mb-8 font-body">
                سيتواصل معك المساعد الشخصي خلال ٣٠ دقيقة لتأكيد موعد الجلسة والموقع بدقة.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-full border border-[#C8A232] text-xs font-bold text-[#0A1128] uppercase hover:bg-[#FAF8F5] transition-colors"
              >
                حجز موعد آخر
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Branch Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-2 font-mono flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6A12]" />
                    <span>{t("branchLabel")}</span>
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/30 bg-[#FAF8F5] text-xs font-medium text-[#0A1128] focus:outline-none focus:border-[#C8A232] transition-colors"
                    required
                  >
                    <option value="branch1">{tClinics("branch1.name")}</option>
                    <option value="branch2">{tClinics("branch2.name")}</option>
                    <option value="branch3">{tClinics("branch3.name")}</option>
                  </select>
                </div>

                {/* Treatment Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-2 font-mono flex items-center gap-2">
                    <Stethoscope className="w-3.5 h-3.5 text-[#8C6A12]" />
                    <span>{t("treatmentLabel")}</span>
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/30 bg-[#FAF8F5] text-xs font-medium text-[#0A1128] focus:outline-none focus:border-[#C8A232] transition-colors"
                    required
                  >
                    <option value="implants">{tTreatments("items.implants.title")}</option>
                    <option value="veneers">{tTreatments("items.veneers.title")}</option>
                    <option value="allon4">{tTreatments("items.allon4.title")}</option>
                    <option value="aligners">{tTreatments("items.aligners.title")}</option>
                    <option value="whitening">{tTreatments("items.whitening.title")}</option>
                    <option value="rootCanal">{tTreatments("items.rootCanal.title")}</option>
                  </select>
                </div>

                {/* Preferred Doctor */}
                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-2 font-mono flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#8C6A12]" />
                    <span>{t("doctorLabel")}</span>
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/30 bg-[#FAF8F5] text-xs font-medium text-[#0A1128] focus:outline-none focus:border-[#C8A232] transition-colors"
                  >
                    <option value="any">{t("anyDoctor")}</option>
                    <option value="doc1">{tDoctors("list.0.name")}</option>
                    <option value="doc2">{tDoctors("list.1.name")}</option>
                    <option value="doc3">{tDoctors("list.2.name")}</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-2 font-mono flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#8C6A12]" />
                    <span>{t("dateLabel")}</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/30 bg-[#FAF8F5] text-xs font-medium text-[#0A1128] focus:outline-none focus:border-[#C8A232] transition-colors"
                    required
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-2 font-mono">
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isRtl ? "مثال: م. أحمد الشاذلي" : "e.g. John Doe"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/30 bg-[#FAF8F5] text-xs font-medium text-[#0A1128] focus:outline-none focus:border-[#C8A232] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-[#0A1128] mb-2 font-mono flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#8C6A12]" />
                    <span>{t("phoneLabel")}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+20 100 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C8A232]/30 bg-[#FAF8F5] text-xs font-medium text-[#0A1128] focus:outline-none focus:border-[#C8A232] transition-colors"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-full border border-[#C8A232] bg-gradient-to-r from-[#C8A232] via-[#DFBF57] to-[#8C6A12] text-[#0A1128] font-bold text-xs uppercase tracking-wider shadow-[0_6px_25px_rgba(200,162,50,0.35)] hover:shadow-[0_10px_35px_rgba(200,162,50,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {t("submitBtn")}
                </button>
                <p className="text-[11px] text-[#5B6782] mt-3 flex items-center justify-center gap-1.5 font-body">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C6A12]" />
                  <span>{t("instantNote")}</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
