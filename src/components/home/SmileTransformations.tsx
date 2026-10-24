"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { Sparkles, SlidersHorizontal, CheckCircle2 } from "lucide-react";

export function SmileTransformations() {
  const t = useTranslations("transformations");
  const { isRtl } = useLanguage();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const cases = [
    {
      title: t("case1Title"),
      tag: "Veneers & Aesthetics",
      beforeLabel: t("before"),
      afterLabel: t("after"),
      specs: ["خامات E.max الأصلية", "دقة ميكرونية", "جلسات بدون ألم"],
    },
    {
      title: t("case2Title"),
      tag: "All-on-6 Implants",
      beforeLabel: t("before"),
      afterLabel: t("after"),
      specs: ["زركونيا Prettau", "تحميل فوري ٤٨ ساعة", "تثبيت دائم"],
    },
    {
      title: t("case3Title"),
      tag: "Magnificent Aligners",
      beforeLabel: t("before"),
      afterLabel: t("after"),
      specs: ["قوالب ذكية غير مرئية", "مدة ٨ شهور", "متابعة رقمية"],
    },
  ];

  const currentCase = cases[activeTab];

  return (
    <section
      id="transformations"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] border-t border-[#C8A232]/25"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6A12]" />
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

        {/* Case Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {cases.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                activeTab === idx
                  ? "bg-[#0A1128] text-white border border-[#C8A232] shadow-md"
                  : "bg-white text-[#5B6782] border border-[#C8A232]/30 hover:border-[#C8A232] hover:text-[#0A1128]"
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#C8A232]/35 p-6 sm:p-10 shadow-[0_20px_50px_rgba(10,17,40,0.08)]">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0A1128] mb-1">
                {currentCase.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-[#5B6782] mt-2">
                {currentCase.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6A12]" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C6A12] bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#C8A232]/30">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t("sliderHint")}</span>
            </div>
          </div>

          {/* Before/After Split Viewer Canvas */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden select-none shadow-inner border border-[#C8A232]/20">
            {/* After Image Layer (Background) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDFBF7] via-[#FFF9ED] to-[#FAF6EE] flex items-center justify-center p-8">
              <div className="text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#8C6A12] text-white text-xs font-bold uppercase mb-4 shadow">
                  {currentCase.afterLabel}
                </div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-[#0A1128] mb-2">
                  ابتسامة متناسقة ناصعة البياض
                </div>
                <p className="text-xs sm:text-sm text-[#5B6782] max-w-md mx-auto">
                  محاذاة كاملة للأسنان مع إغلاق الفراغات بنسب الجمال الإغريقي والمصري القديم
                </p>
              </div>
            </div>

            {/* Before Image Layer (Clipped Foreground) */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-tr from-[#EFEBE2] via-[#EAE5DA] to-[#DFD9CD] flex items-center justify-center p-8 overflow-hidden transition-all duration-75"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="text-center min-w-[320px] sm:min-w-[480px]">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase mb-4 shadow">
                  {currentCase.beforeLabel}
                </div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-[#5B6782] mb-2 opacity-85">
                  حالة تآكل وتصبغ متقدمة
                </div>
                <p className="text-xs sm:text-sm text-[#5B6782] max-w-md mx-auto">
                  فراغات غير متناسقة وتصبغات ناتجة عن عوامل وراثية وتآكل المينا
                </p>
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#8C6A12] cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_rgba(140,106,18,0.5)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#8C6A12] text-white border-2 border-white flex items-center justify-center shadow-lg text-xs font-bold">
                ↔
              </div>
            </div>

            {/* Transparent Range Input Slider on Top */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Comparison slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
