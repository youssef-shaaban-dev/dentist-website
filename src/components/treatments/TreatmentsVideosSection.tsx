"use client";

import React from "react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { PatientVideoCard } from "@/components/ui/PatientVideoCard";
import { Video } from "lucide-react";

export function TreatmentsVideosSection() {
  const { isRtl, locale } = useLanguage();

  return (
    <section id="video-testimonials" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs mb-3">
            <Video className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#955904] font-mono">
              {isRtl ? "شهادات حية وموثقة" : "AUTHENTIC VIDEO STORIES"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-3">
            {isRtl ? "مرضانا يتحدثون عن تجربتهم الحقيقية" : "Hear Directly from Our Patients"}
          </h2>

          <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
            {isRtl
              ? "شاهد بالفيديو شهادات حقيقية لمرضى عياداتنا، يروون تفاصيل تجربتهم السريرية ونتائج ابتسامتهم قبل وبعد العلاج."
              : "Watch real patient testimonials discussing their smile journey, clinical experience, and before & after results."}
          </p>
        </div>

        {/* The 2 Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Video 1 */}
          <PatientVideoCard
            src="/1.mp4"
            title={
              isRtl
                ? "تجربة إعادة بناء كامل الفك والزراعة الرقمية"
                : "Full Arch Dental Rehabilitation Experience"
            }
            description={
              isRtl
                ? "مريضنا يتحدث عن تجربته السريرية واستعادة الابتسامة ووظيفة الفك بالكامل بعد سنوات من المعاناة مع الأسنان."
                : "Our patient shares his personal journey of restoring complete chewing function and confident smile after severe tooth wear."
            }
            patientTag={isRtl ? "مريض حقيقي • زراعة الفكين" : "Verified Patient • Full Arch"}
            treatmentType="All-on-6 Rehabilitation"
            highlights={[
              isRtl ? "استعادة القدرة على تناول الطعام بدون أي ألم" : "Restored full pain-free chewing ability",
              isRtl ? "تركيبة زركونيا سويسرية بمظهر طبيعي تماماً" : "100% natural looking Swiss Prettau zirconia",
              isRtl ? "متابعة طبية مستمرة ورعاية فائقة" : "Attentive post-procedure clinical care",
            ]}
          />

          {/* Video 2 */}
          <PatientVideoCard
            src="/2.mp4"
            title={
              locale === "ar"
                ? "تجربة ابتسامة هوليوود وتصميم الابتسامة الملكية"
                : locale === "fr"
                ? "Expérience Hollywood Smile & Facettes E.max Royales"
                : locale === "ru"
                ? "Голливудская улыбка и королевские виниры E.max"
                : "Royal Hollywood Smile & E.max Veneers Experience"
            }
            description={
              locale === "ar"
                ? "قصة نجاح مريضنا في الحصول على ابتسامة متناسقة وطبيعية من خلال عدسات الفينير الرقمية بمعملنا الحصري."
                : locale === "fr"
                ? "Témoignage patient célébrant un sourire éclatant et naturel grâce aux facettes numériques de notre laboratoire exclusif."
                : locale === "ru"
                ? "Реальная история пациента: гармоничная и естественная улыбка с цифровыми винирами из нашей собственной лаборатории."
                : "An authentic patient testimonial celebrating a symmetrical, radiant Hollywood smile crafted with digital precision in our in-house lab."
            }
            patientTag={
              locale === "ar"
                ? "مريضة حقيقية • ابتسامة هوليوود"
                : locale === "fr"
                ? "Patiente Réelle • Hollywood Smile"
                : locale === "ru"
                ? "Реальный пациент • Голливудская улыбка"
                : "Verified Patient • Hollywood Smile"
            }
            treatmentType="E.max Veneers"
            highlights={[
              locale === "ar"
                ? "عدسات ايماكس مصممة خصيصاً لتناسب ملامح الوجه"
                : locale === "fr"
                ? "Facettes E.max sur mesure adaptées aux traits du visage"
                : locale === "ru"
                ? "Виниры E.max, созданные с учетом черт лица"
                : "Custom E.max veneers matched to facial aesthetics",
              locale === "ar"
                ? "جلسات علاج مريحة دون أي تحسس أو ألم"
                : locale === "fr"
                ? "Séances confortables sans aucune sensibilité ni douleur"
                : locale === "ru"
                ? "Комфортные приемы без чувствительности и боли"
                : "Zero sensitivity with painless appointments",
              locale === "ar"
                ? "نتائج فاقت التوقعات وثقة لا حدود لها"
                : locale === "fr"
                ? "Des résultats au-delà des attentes et une confiance retrouvée"
                : locale === "ru"
                ? "Результат превзошел ожидания и подарил уверенность"
                : "Exceeded expectations with unmatched confidence",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
