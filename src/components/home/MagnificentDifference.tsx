"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import {
  Crown,
  Scan,
  ShieldCheck,
  SmilePlus,
  FileCheck,
  Sparkles,
  CheckCircle2,
  Shield,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export function MagnificentDifference() {
  const t = useTranslations("difference");
  const { isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const [activePillarIdx, setActivePillarIdx] = useState<number>(0);

  // 6 Clinical Excellence Pillars directly aligned with the brochure
  const pillars = [
    {
      id: "01",
      num: "01",
      badgeAr: "المنظومة الرقمية المتكاملة",
      badgeEn: "Integrated Digital Ecosystem",
      title: isRtl ? "منظومة علاجية متكاملة تحت سقف واحد" : "Integrated Ecosystem Under One Roof",
      desc: isRtl
        ? "تكامل مباشر بين العيادات الجراحية ومعمل التقويم ومعمل التعويضات لسرعة الإنجاز."
        : "Direct synergy between surgical suites, clear aligners lab, and 3D milling lab.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      icon: Crown,
      specs: isRtl
        ? [
            "عيادات جراحة وتجميل الأسنان في نفس الصرح الطبي",
            "معمل رقمي متخصص للتقويم الشفاف بدون وسيط",
            "معمل CAD/CAM لتصنيع الزركونيا والإيماكس خلال 48 ساعة",
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
      badgeAr: "التشخيص الرقمي الميكروني",
      badgeEn: "Digital Precision Diagnostics",
      title: isRtl ? "دقة تشخيصية ميكرونية 0.01 مم" : "Digital Precision & Accurate Planning",
      desc: isRtl
        ? "أجهزة مسح مقطعي ثلاثي الأبعاد CBCT لتخطيط علاج وزراعة الأسنان بدقة جراحية."
        : "3D volumetric CBCT scanning for virtual-guided surgical implant placement.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
      icon: Scan,
      specs: isRtl
        ? [
            "مسح مقطعي ثلاثي الأبعاد فائق الدقة 0.01 ملم",
            "جرعة إشعاعية منخفضة بنسبة 80% عن الأشعة التقليدية",
            "محاكاة رقمية افتراضية مسبقة لضمان دقة الزرع 99.8%",
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
      badgeAr: "التعقيم والأمان السريري",
      badgeEn: "Hospital-Grade Sterilization",
      title: isRtl ? "أعلى معايير الأمان والتعقيم الأوروبي" : "Rigorous Clinical Safety & Sterilization",
      desc: isRtl
        ? "بروتوكولات تعقيم صارمة بأجهزة فئة B معتمدة عالمياً لضمان سلامة كل مريض."
        : "European Class-B autoclaves with digital spore tracking for zero contamination.",
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
      badgeAr: "العناية اللطيفة والراحة",
      badgeEn: "Gentle Care & Absolute Comfort",
      title: isRtl ? "تجربة علاجية مريحة وتخدير لطيف" : "Comfortable Experience & Pain-Free Protocol",
      desc: isRtl
        ? "نظام التخدير المحوسب الذكي بدون وخز لتجربة هادئة خالية تماماً من الألم."
        : "Computerized injection-free anesthesia delivering micro-flow gentle care.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      icon: SmilePlus,
      specs: isRtl
        ? [
            "نظام The Wand للتخدير المحوسب الذكي بدون وخز إبرة",
            "تحكم ديناميكي في تدفق المخدر لتجنب تنميل الوجه المزعج",
            "أجنحة خاصة معزولة صوتياً ومجهزة لأقصى سبل الراحة والهدوء",
          ]
        : [
            "The Wand computerized injection-free anesthesia",
            "Micro-flow regulation eliminating facial numbness",
            "Private soundproof suites designed for relaxation",
          ],
      stamp: isRtl
        ? "بروتوكول راحة سريرية متقدم يزيل قلق وخوف الأسنان"
        : "Advanced Zero-Anxiety Comfort Protocol for Gentle Care",
      metric: "0% PAIN PROTOCOL",
    },
    {
      id: "05",
      num: "05",
      badgeAr: "الضمان والجودة السويسرية",
      badgeEn: "Swiss Quality & Written Guarantee",
      title: isRtl ? "شهادات اعتماد وضمان موثق" : "Certified Guarantee & Authentic Materials",
      desc: isRtl
        ? "غرسات سويسرية وألمانية أصلية برقم تسلسلي موثق مع شهادة ضمان معتمدة."
        : "Original Swiss & German restorations backed by official serial passports.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
      icon: FileCheck,
      specs: isRtl
        ? [
            "شهادة توثيق سويسرية رسمية مع الرقم التسلسلي لكل زرعة",
            "خامات E.max الأصلية مختومة بشهادة الجودة المعتمدة",
            "برنامج فحص ومتابعة دوري مجاني كل 6 أشهر لصحة الأسنان",
          ]
        : [
            "Official Swiss passport & serial number for each implant",
            "Genuine Swiss E.max certificates with authenticity seals",
            "Complimentary bi-annual clinical checkups for life",
          ],
      stamp: isRtl
        ? "ضمان موثق وشامل على الغرسات والتركيبات"
        : "Documented Lifetime Written Guarantee on Restorations",
      metric: "LIFETIME WARRANTY",
    },
    {
      id: "06",
      num: "06",
      badgeAr: "خدمة المرضى الفندقية",
      badgeEn: "Executive Patient Concierge",
      title: isRtl ? "خدمة استثنائية لكافة المرضى والزوار" : "Executive Concierge & VIP Care",
      desc: isRtl
        ? "مساعد رعاية شخصي لتنسيق المواعيد وخدمات الاستقبال الفندقي لضيوف المركز."
        : "Dedicated patient coordinators ensuring smooth appointments and VIP care.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
      icon: Sparkles,
      specs: isRtl
        ? [
            "تنسيق مواعيد فوري بدون انتظار مع متابعة مستمرة",
            "مساعد رعاية شخصي مخصص على مدار الساعة للإجابة على استفساراتك",
            "أجنحة خاصة مجهزة لراحة المرضى والعائلات الزائرة",
          ]
        : [
            "Fast-track appointments with zero waiting time",
            "Dedicated 24/7 personal care coordinator throughout visit",
            "Private suites designed for family comfort and privacy",
          ],
      stamp: isRtl
        ? "رعاية متكاملة مصممة لتجربة استثنائية ومريحة"
        : "Comprehensive High-End Medical Concierge for All Guests",
      metric: "24/7 COORDINATION",
    },
  ];

  const currentPillar = pillars[activePillarIdx] || pillars[0];
  const CurrentIcon = currentPillar.icon;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Content Entrance
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 2. Showcase Visual Entrance
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRtl]);

  return (
    <section
      ref={sectionRef}
      id="difference"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* 1. Split Section Background: Left is Royal Blue | Right is Warm Gold */}
      <SplitSectionBackground />

      {/* 2. Content Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* RIGHT COLUMN (Warm Gold / Parchment Side): Balanced 6 Cols on desktop */}
          {/* On mobile, wrapped in a luxury parchment card so dark blue text never bleeds into dark blue background */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex flex-col ${
              isRtl ? "order-2 lg:order-1" : "order-2 lg:order-2"
            } p-4 sm:p-6 lg:p-0 rounded-3xl lg:rounded-none bg-[#FCFAF5]/95 lg:bg-transparent border border-[#C8A232]/35 lg:border-0 shadow-xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none pl-4 sm:pl-6 lg:pl-10 xl:pl-14`}
          >
            {/* Category Kicker Badge — From the Brochure: OUR APPROACH */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A232]/50 bg-white/90 shadow-xs backdrop-blur-xs lg:backdrop-blur-none">
                <Crown className="w-3.5 h-3.5 text-[#9A5F13]" />
                <span className="text-xs font-bold text-[#9A5F13] uppercase tracking-wider font-mono">
                  {isRtl ? "نهجنا الطبي • دقة وإتقان دائم" : "OUR APPROACH • WHERE PRECISION MEETS PERFECTION"}
                </span>
              </div>
              <span className="h-[1px] w-6 bg-[#C8A232]/70" />
            </div>

            {/* Two-Tone Luxury Headline — Aligned with Brochure */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-display leading-[1.28] mb-3">
              <span className="block text-[#0F266A]">
                {isRtl ? "معايير دقيقة لطب وتجميل الأسنان" : "Where Precision Meets Perfection"}
              </span>
              <span className="block text-[#9A5F13] text-xl sm:text-2xl lg:text-3xl mt-1">
                {isRtl ? "تكنولوجيا متطورة • عناية لطيفة • نتائج دائمة" : "Advanced Technology • Gentle Care • Lasting Results"}
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#2A3B56] leading-relaxed mb-6 font-body">
              {isRtl
                ? "نلتزم بتقديم حلول علاجية وتجميلية متكاملة مصممة خصيصاً لكل مريض، تجمع بين أحدث ماسحات الـ 3D والمواد السويسرية المعتمدة."
                : "Advanced digital technology, personalized treatment plans, and comfortable patient experience designed for your lasting oral health."}
            </p>

            {/* 6 Pillars in an Elegant 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isSelected = activePillarIdx === idx;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillarIdx(idx)}
                    className={`group text-start p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3 relative ${
                      isSelected
                        ? "bg-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/25 scale-101"
                        : "bg-white/85 border-[#C8A232]/35 hover:border-[#C8A232] hover:bg-white shadow-xs"
                    }`}
                  >
                    {/* Gold Circular Icon Seal */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                        isSelected
                          ? "bg-[#012052] text-[#DFBF57] shadow-sm"
                          : "bg-[#FAF1DC] border border-[#C8A232]/40 text-[#9A5F13]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h3
                          className={`text-xs sm:text-sm font-bold font-display truncate ${
                            isSelected ? "text-[#0F266A]" : "text-[#2A3B56] group-hover:text-[#0F266A]"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono font-bold text-[#9A5F13] shrink-0">
                          {pillar.num}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#5B6782] line-clamp-1 font-body">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Active Golden Notch */}
                    {isSelected && (
                      <span className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "-left-1" : "-right-1"} w-2 h-2 rounded-full bg-[#9A5F13] shadow-xs`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Specs & Official Stamp */}
            <div className="p-4 rounded-2xl bg-white/95 border border-[#C8A232]/35 shadow-sm mb-6">
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#C8A232]/25">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#FAF1DC] text-[#9A5F13] flex items-center justify-center">
                    <CurrentIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#0F266A]">
                    {currentPillar.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF1DC] border border-[#C8A232]/40 text-[10px] font-mono font-bold text-[#9A5F13]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A5F13] animate-ping" />
                  <span>{currentPillar.metric}</span>
                </span>
              </div>

              <div className="space-y-2 mb-3">
                {currentPillar.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#0F266A] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5F13] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-[#C8A232]/20 flex items-center gap-2 text-[11px] font-mono font-bold text-[#9A5F13]">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>{currentPillar.stamp}</span>
              </div>
            </div>

            {/* Direct Booking Jump CTA */}
            <div>
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#9A5F13] via-[#C8A232] to-[#9A5F13] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-body cursor-pointer"
              >
                <span>{isRtl ? "احجز استشارتك الطبية الآن" : "Book Clinical Consultation"}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

          </div>

          {/* LEFT COLUMN (Deep Royal Blue Side): Balanced 6 Cols on desktop */}
          {/* Centered comfortably inside the Royal Blue half with max-w-[380px], keeping >80px clearance to the ribbon */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 relative flex justify-center items-center ${
              isRtl ? "order-1 lg:order-2" : "order-1 lg:order-1"
            } w-full`}
          >
            <div className="w-full max-w-[380px] xl:max-w-[400px] mx-auto">
              
              {/* Clinical Pillar Showcase Card */}
              <div className="group relative rounded-3xl bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                
                {/* Thin Top 24K Gold Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13] rounded-full mb-3.5" />

                {/* High-Resolution Viewport */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-[#020B1D] border border-[#DFBF57]/30 shadow-inner">
                  <Image
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />

                  {/* Gradient Vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1D]/40 via-transparent to-[#DFBF57]/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-white bg-[#012052]/90 border border-white/20 px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {currentPillar.num} / 06
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-[#DFBF57]/50 text-[10px] sm:text-xs font-mono font-bold text-[#DFBF57] shadow-md backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DFBF57] animate-ping" />
                      <span>{currentPillar.metric}</span>
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#DFBF57] font-bold block mb-1">
                      {isRtl ? currentPillar.badgeAr : currentPillar.badgeEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white leading-snug drop-shadow-sm">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                {/* Quality Standard Footer */}
                <div className="mt-3.5 pt-3 border-t border-[#DFBF57]/30 flex items-center justify-between text-[#DFBF57] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>CERTIFIED MEDICAL EXCELLENCE</span>
                  </div>
                  <span className="text-[11px] text-white/70">
                    {isRtl ? "معايير دقيقة معتمدة" : "European Clinical Standard"}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
