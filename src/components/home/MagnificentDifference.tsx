"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
import {
  Crown,
  Scan,
  ShieldCheck,
  SmilePlus,
  FileCheck,
  Sparkles,
  CheckCircle2,
  Shield,
} from "lucide-react";

export function MagnificentDifference() {
  const t = useTranslations("difference");
  const { isRtl } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      id: "01",
      num: "01",
      badgeAr: "المنظومة المتكاملة",
      badgeEn: "Integrated Ecosystem",
      title: t("items.0.title"),
      desc: t("items.0.desc"),
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      icon: Crown,
      specs: isRtl
        ? [
            "عيادات الجراحة والتجميل في نفس الصرح الطبي",
            "معمل التقويم الشفاف الرقمي المعتمد",
            "معمل التعويضات والزركونيا ثلاثي الأبعاد CAD/CAM",
          ]
        : [
            "Surgical & aesthetic suites under one roof",
            "Certified in-house digital clear aligners lab",
            "Monolithic 3D CAD/CAM zirconia milling lab",
          ],
      stamp: isRtl
        ? "تصنيع داخلي بنسبة 100% وسرعة تسليم خلال 48 ساعة"
        : "100% In-House Production with 48-Hour Delivery",
      metric: "100% IN-HOUSE",
    },
    {
      id: "02",
      num: "02",
      badgeAr: "التشخيص الرقمي",
      badgeEn: "Digital Diagnostics",
      title: t("items.1.title"),
      desc: t("items.1.desc"),
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      icon: Scan,
      specs: isRtl
        ? [
            "مسح مقطعي ثلاثي الأبعاد فائق الدقة 0.01 ملم",
            "جرعة إشعاعية منخفضة بنسبة 80% عن الأشعة العادية",
            "محاكاة جراحية افتراضية مسبقة لضمان دقة الزرع 99.8%",
          ]
        : [
            "0.01mm ultra-precision 3D volumetric scanning",
            "80% lower radiation dose than conventional CT",
            "Virtual computer-guided surgical planning",
          ],
      stamp: isRtl
        ? "تشخيص ميكروني آمن ومعتمد من المعايير الدولية"
        : "Ultra-Safe Micron Diagnostics Certified Globally",
      metric: "0.01mm PRECISION",
    },
    {
      id: "03",
      num: "03",
      badgeAr: "الأمان السريري",
      badgeEn: "Clinical Safety",
      title: t("items.2.title"),
      desc: t("items.2.desc"),
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
      icon: ShieldCheck,
      specs: isRtl
        ? [
            "أجهزة أوتوكلاف طبية فئة B معتمدة أوروبياً",
            "تغليف مفرغ من الهواء وتتبع إلكتروني لكل أداة",
            "اختبارات بيولوجية دورية للرقابة الصارمة على التعقيم",
          ]
        : [
            "European Class-B fractional vacuum autoclaves",
            "Hermetic vacuum sealing & digital batch tracking",
            "Continuous biological spore testing verification",
          ],
      stamp: isRtl
        ? "مطابق لأعلى معايير مستشفيات جراحة الوجه والفكين"
        : "Compliant with European Maxillofacial Hospital Standards",
      metric: "100% STERILE",
    },
    {
      id: "04",
      num: "04",
      badgeAr: "الراحة المطلقة",
      badgeEn: "Absolute Comfort",
      title: t("items.3.title"),
      desc: t("items.3.desc"),
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      icon: SmilePlus,
      specs: isRtl
        ? [
            "نظام The Wand للتخدير المحوسب الذكي بدون وخز",
            "تحكم ديناميكي في تدفق المخدر لتجنب تنميل الوجه",
            "أجنحة خاصة معزولة صوتياً ومجهزة لأقصى سبل الراحة",
          ]
        : [
            "The Wand computerized injection-free anesthesia",
            "Micro-flow regulation eliminating facial numbness",
            "Private soundproof suites designed for relaxation",
          ],
      stamp: isRtl
        ? "بروتوكول راحة سريرية متقدم يزيل قلق الأسنان تماماً"
        : "Advanced Zero-Anxiety Comfort Protocol for Gentle Care",
      metric: "0% PAIN PROTOCOL",
    },
    {
      id: "05",
      num: "05",
      badgeAr: "الضمان والاعتماد",
      badgeEn: "Certified Guarantee",
      title: t("items.4.title"),
      desc: t("items.4.desc"),
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
      icon: FileCheck,
      specs: isRtl
        ? [
            "شهادة توثيق سويسرية رسمية مع الرقم التسلسلي للزرعة",
            "قشور E.max الأصلية مختومة بشهادة المصنع السويسري",
            "برنامج فحص ومتابعة مجاني كل 6 أشهر لصحة الابتسامة",
          ]
        : [
            "Official Swiss passport & serial number for each implant",
            "Genuine Swiss E.max certificates with authenticity seals",
            "Complimentary bi-annual clinical checkups for life",
          ],
      stamp: isRtl
        ? "ضمان موثق مدى الحياة على الغرسات والتركيبات"
        : "Documented Lifetime Written Guarantee on Restorations",
      metric: "LIFETIME WARRANTY",
    },
    {
      id: "06",
      num: "06",
      badgeAr: "الضيافة الملكية",
      badgeEn: "Royal Hospitality",
      title: t("items.5.title"),
      desc: t("items.5.desc"),
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
      icon: Sparkles,
      specs: isRtl
        ? [
            "استقبال مباشر بسيارة خاصة وسائق VIP من مطار القاهرة",
            "مساعد رعاية شخصي مخصص على مدار الساعة طوال رحلتك",
            "أجنحة ضيافة فندقية خاصة لمرضى السياحة العلاجية والخليج",
          ]
        : [
            "Chauffeured VIP airport transfer from Cairo International",
            "Dedicated 24/7 personal care coordinator throughout visit",
            "Private luxury hotel suites for international patients",
          ],
      stamp: isRtl
        ? "رعاية فندقية ملكية شاملة مصممة لنخبة المرضى والزوار"
        : "Comprehensive 5-Star Medical Concierge for Discerning Guests",
      metric: "24/7 VIP ESCORT",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Badge & Subtitle entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // 2. TextSplit Scrub for Main Headline
      const titleWords = titleRef.current?.querySelectorAll(".split-title-word");
      if (titleWords && titleWords.length > 0) {
        gsap.to(titleWords, {
          y: "0%",
          opacity: 1,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });
      }

      // 3. 2-Card Pairs Staggered Entrance
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="difference"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] border-t border-[#C8A232]/25 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Soft Royal Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#C8A232]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#022256]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C8A232]/40 bg-white shadow-xs mb-3.5">
            <Crown className="w-3.5 h-3.5 text-[#955904]" />
            <span className="text-xs font-bold text-[#955904] uppercase tracking-wider font-mono">
              {t("badge")}
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#012968] mb-3 leading-tight"
          >
            <SplitTextScrub text={t("title")} wordClassName="split-title-word" />
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5B6782] font-body leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2 CARDS SIDE-BY-SIDE (3 Balanced Rows • Half the Scroll Length) */}
        {/* ============================================================== */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={pillar.id}
                className="group relative rounded-3xl bg-white border-2 border-[#C8A232]/30 hover:border-[#C8A232] shadow-[0_12px_40px_rgba(2,34,86,0.06)] hover:shadow-[0_22px_55px_rgba(200,162,50,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Thin Top Gold Shimmer Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#955904] via-[#DFBF57] to-[#955904]" />

                {/* Top Photo with Luxury Vignette and Floating Badges */}
                <div className="relative w-full h-[200px] sm:h-[225px] overflow-hidden bg-[#022256]">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/30 via-transparent to-[#C8A232]/15 pointer-events-none" />

                  {/* Top Row Badges: Number Pill & Pillar Icon */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white bg-[#012968]/90 border border-white/20 px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {pillar.num} / 06
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-[#012968]/95 border border-[#DFBF57]/50 text-[#DFBF57] flex items-center justify-center shadow-lg backdrop-blur-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Row: Signature Metric & Badge Tag */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/25 text-[10px] sm:text-[11px] font-mono font-bold text-white shadow-md backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF57] animate-ping" />
                      <span>{pillar.metric}</span>
                    </span>

                    <span className="text-[11px] font-mono font-bold text-white/80 drop-shadow">
                      {isRtl ? pillar.badgeAr : pillar.badgeEn}
                    </span>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#012968] mb-2 leading-snug group-hover:text-[#955904] transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-[#5B6782] font-body leading-relaxed mb-5">
                      {pillar.desc}
                    </p>

                    {/* 3 Verified Clinical Bullets */}
                    <div className="space-y-2.5 mb-6">
                      {pillar.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#012968] text-[#DFBF57] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-[#012968] leading-tight">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official Verified Stamp Line */}
                  <div className="pt-3.5 border-t border-[#C8A232]/25 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#955904] shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold text-[#955904] font-mono truncate">
                      {pillar.stamp}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
