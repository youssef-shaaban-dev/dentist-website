"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { useLenis } from "lenis/react";
import { SplitTextScrub } from "@/components/ui/SplitTextScrub";
import {
  Sparkles,
  AlertCircle,
  CalendarCheck,
  Phone,
  ArrowRight,
  ArrowLeft,
  ChevronUp,
  Layers,
  ShieldCheck,
  Stethoscope,
  Smile,
  Activity,
  Zap,
  Eye,
  Scissors,
  Baby,
  SmilePlus,
  Crown,
  CheckCircle2,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface TreatmentService {
  id: string;
  num: string;
  shortNameAr: string;
  shortNameEn: string;
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  badgeEn: string;
  image: string;
  icon: React.ElementType;
  whatIsAr: string;
  whatIsEn: string;
  problemAr: string;
  problemEn: string;
  suitabilityAr: string;
  suitabilityEn: string;
  clinicalNoteAr: string;
  clinicalNoteEn: string;
  nextStepAr: string;
  nextStepEn: string;
  ctaTextAr: string;
  ctaTextEn: string;
  hasAlignersBanner?: boolean;
}

const treatmentsData: TreatmentService[] = [
  {
    id: "implants",
    num: "01",
    shortNameAr: "زرعات الأسنان",
    shortNameEn: "Dental Implants",
    titleAr: "زرعات الأسنان الموجهة بالحاسوب (Dental Implants)",
    titleEn: "Computer-Guided Dental Implants",
    badgeAr: "زراعة تعويضية متطورة",
    badgeEn: "Precision Implantology",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    icon: ShieldCheck,
    whatIsAr: "غرسات تيتانيوم حيوية نقية (Grade-4 Titanium) يتم تثبيتها في عظم الفك جراحياً لتلعب دور الجذر الطبيعي، وفوقها يُثبت تاج من الزركونيا السويسرية ليحاكي السن الطبيعي قوةً ومظهراً بنسبة ١٠٠٪.",
    whatIsEn: "Pure biocompatible Grade-4 titanium implants surgically positioned into the jawbone to act as natural roots, topped with custom Swiss zirconia crowns that replicate natural tooth function and aesthetics 100%.",
    problemAr: "فقدان سن أو أكثر نتيجة التسوس العميق أو الكسور أو أمراض اللثة، وما يتبعه من ضمور في عظم الفك وانحراف الأسنان المجاورة وضعف كفاءة المضغ.",
    problemEn: "Missing one or multiple teeth due to trauma, deep decay, or periodontitis, which leads to progressive jawbone resorption, tooth shifting, and compromised masticatory function.",
    suitabilityAr: "تناسب البالغين الذين اكتمل نمو عظام الفك لديهم ولديهم كثافة عظمية مناسبة أو مؤهلين لإجراء زراعة عظم تمهيدية، والراغبين في حل دائم وثابت يتفوق تماماً على التركيبات المتحركة.",
    suitabilityEn: "Ideal for adults with complete jaw development and adequate bone density (or candidates for bone grafting) seeking a permanent, non-removable solution that prevents adjacent tooth wear.",
    clinicalNoteAr: "تنبيه طبي معتمد: تحديد ملاءمة الزرعة وعمقها وزاويتها يتطلب فحصاً مقطعياً ثلاثي الأبعاد (3D CBCT) وتقييماً دقيقاً للمسافة مع الجيوب الأنفية والأعصاب الحيوية.",
    clinicalNoteEn: "Clinical Notice: Exact implant candidacy, angle, and depth require in-house 3D CBCT volumetric imaging and nerve/sinus anatomy verification.",
    nextStepAr: "إجراء تصوير مقطعي ثلاثي الأبعاد واستشارة جراحية مخصصة لوضع خطة رقمية توضح موقع الزرعة بدقة ميكرونية قبل بدء الإجراء.",
    nextStepEn: "Schedule a 3D CBCT digital scan and private consultation with our senior implantologist for virtual computer-guided planning.",
    ctaTextAr: "حجز كشف زراعة الأسنان",
    ctaTextEn: "Book Implant Consultation",
  },
  {
    id: "implant-maintenance",
    num: "02",
    shortNameAr: "صيانة وإصلاح الزرعات",
    shortNameEn: "Implant Maintenance",
    titleAr: "متابعة وصيانة وإصلاح تعويضات الزرعات (Maintenance & Repair)",
    titleEn: "Implant Maintenance & Restoration Repair",
    badgeAr: "رعاية ما بعد الجراحة",
    badgeEn: "Post-Surgical Care",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    icon: Stethoscope,
    whatIsAr: "بروتوكول سريري متخصص لفحص ثبات الزرعات القديمة، تنظيف الأنسجة المحيطة بها بأجهزة الألتراسونيك غير الكاشطة، ومعالجة أي تخلخل في البراغي التعويضية أو استبدال التيجان المتضررة.",
    whatIsEn: "A specialized clinical maintenance protocol inspecting implant stability, deplaquing peri-implant tissues with non-abrasive ultrasonic scalers, and servicing abutment screws or worn crowns.",
    problemAr: "التهاب الأنسجة واللثة حول الزرعة (Peri-implantitis)، تراكم التكلسات الجيرية الميكرونية، تخلخل برغي التاج التعويضي، أو حدوث كسر سطحي في الخزف بعد سنوات من الاستخدام.",
    problemEn: "Peri-implant mucositis or peri-implantitis, subgingival bacterial biofilm, loose retention screws, or ceramic chipping after years of heavy bite force.",
    suitabilityAr: "لكل مريض لديه زرعات سابقة سواء تم إجراؤها في عياداتنا أو في مراكز خارجية، ويشعر بنزف باللثة عند التنظيف، ألم خفيف، حركة في السن المركب، أو يرغب في الفحص الدوري الوقائي السنوي.",
    suitabilityEn: "Patients with existing implants (performed in-house or elsewhere) experiencing gum bleeding, discomfort, crown looseness, or seeking annual preventive verification.",
    clinicalNoteAr: "تنبيه طبي معتمد: الكشف المبكر عن بكتيريا الزرعات يمنع تآكل العظم المحيط وينقذ الزرعة من الفشل المبكر؛ ويجب أن يتم الفحص بمجسات بلاستيكية خاصة لحماية سطح التيتانيوم.",
    clinicalNoteEn: "Clinical Notice: Early diagnosis of peri-implant inflammation halts bone loss; examinations must use specialized non-metallic carbon probes.",
    nextStepAr: "جلسة فحص سريري وتنظيف ليزري مجهري للزرعة مع تقييم عزم ربط البراغي بالأجهزة العيارية الدقيقة.",
    nextStepEn: "Book a microscopic peri-implant assessment and ultrasonic gentle maintenance session.",
    ctaTextAr: "حجز كشف صيانة الزرعات",
    ctaTextEn: "Book Maintenance Session",
  },
  {
    id: "all-on-arch",
    num: "03",
    shortNameAr: "All-on-4 / All-on-6",
    shortNameEn: "Full-Arch All-on-X",
    titleAr: "تعويض كامل القوس All-on-4 / All-on-6 (Full Arch Reconstruction)",
    titleEn: "Full-Arch All-on-4 / All-on-6 Reconstruction",
    badgeAr: "إعادة بناء كاملة للفك",
    badgeEn: "Full Arch Rehabilitation",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    icon: Activity,
    whatIsAr: "تقنية جراحية هندسية متقدمة تُعيد تأهيل فك كامل مفقود الأسنان عبر تثبيت ٤ أو ٦ غرسات تيتانيوم بزوايا مدروسة، وتركيب جسر زركونيا ثابت ودائم خلال ٤٨ ساعة بدون الحاجة لزراعة عظم معقدة.",
    whatIsEn: "An advanced surgical-prosthetic technique restoring a completely edentulous arch with 4 or 6 strategically angled titanium implants, supporting a fixed monolithic zirconia bridge within 48 hours.",
    problemAr: "فقدان جميع أسنان الفك، التخلخل العنيف نتيجة تآكل عظمي شديد، صعوبة مضغ الطعام، وعدم استقرار أطقم الأسنان المتحركة التقليدية وسقوطها المتكرر أثناء التحدث.",
    problemEn: "Complete terminal dentition, severe periodontitis with tooth mobility, inability to chew nutrition properly, and frustration with ill-fitting removable dentures.",
    suitabilityAr: "لحالات فقدان الأسنان الكلي أو المرضى المعرضين لفقدان أسنانهم المتبقية، والذين يبحثون عن استعادة فورية لابتسامة ثابتة ١٠٠٪ واستعادة قوة المضغ الطبيعية دون إجراءات زراعة عظم طويلة.",
    suitabilityEn: "Candidates with complete tooth loss or failing terminal teeth wanting an immediate fixed restoration without lengthy sinus lift procedures.",
    clinicalNoteAr: "تنبيه طبي معتمد: نجاح هذه المنظومة يعتمد على التوزيع الميكانيكي الدقيق للغرسات وتصميم جسر الزركونيا بتقنية CAD/CAM لتفادي إجهاد العظم وضمان استقراره مدى الحياة.",
    clinicalNoteEn: "Clinical Notice: Success hinges on biophysical load distribution calculated on 3D virtual models and custom in-house monolithic zirconia milling.",
    nextStepAr: "استشارة شاملة مع استشاري جراحة الفم وفحص مقطعي ثلاثي الأبعاد لتصميم محاكاة الابتسامة الجديدة قبل العملية.",
    nextStepEn: "Schedule a comprehensive full-arch diagnostic session and digital smile pre-visualization.",
    ctaTextAr: "حجز استشارة الفك الكامل",
    ctaTextEn: "Book Full Arch Assessment",
  },
  {
    id: "crowns-bridges",
    num: "04",
    shortNameAr: "التيجان والجسور",
    shortNameEn: "Crowns & Bridges",
    titleAr: "التيجان والجسور الخزفية الميكرونية (Crowns & Bridges)",
    titleEn: "Precision Ceramic Crowns & Bridges",
    badgeAr: "استعادة وظيفية وجمالية",
    badgeEn: "Restorative Excellence",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
    icon: Smile,
    whatIsAr: "أغطية خزفية فائقة المتانة تُصنع في معملنا الرقمي من الزركونيا الألمانية Prettau وخزف E.max عالي النقاء، لحماية الأسنان الضعيفة أو تعويض فراغ سن مفقود بالاستناد على الأسنان المجاورة.",
    whatIsEn: "Ultra-resilient ceramic restorations milled from German Prettau Zirconia and IPS E.max porcelain to encapsulate weakened teeth or bridge single missing units seamlessly.",
    problemAr: "الأسنان المتهدمة بعد علاج العصب، الكسور الكبيرة الناتجة عن الصدمات، تآكل الحشوات القديمة، أو وجود فجوة فردية تعيق المضغ وتسبب ميلان الأسنان المحيطة.",
    problemEn: "Teeth compromised after endodontic therapy, extensive coronal fractures, failing legacy restorations, or single missing units causing occlusal collapse.",
    suitabilityAr: "لمن يحتاج إلى دعم هيكلي قوي لسن طبيعي مع الحفاظ على مظهره الحيوي ودرجة شفافيته الطبيعية، بعد التأكد من سلامة الجذور وخلوها من الالتهابات.",
    suitabilityEn: "Patients requiring structural reinforcement for damaged teeth while demanding authentic light translucency and natural anatomical color matching.",
    clinicalNoteAr: "تنبيه طبي معتمد: الإعداد الميكروني المحافظ للسن تحت التكبير الجراحي يحمي لب السن ويضمن انطباق حواف التاج بنسبة خطأ أقل من ٠.٠١ ملم لمنع التسوس الثانوي.",
    clinicalNoteEn: "Clinical Notice: Conservative microscopic preparation preserves tooth vitality and delivers margin adaptation under 0.01mm to eliminate secondary caries.",
    nextStepAr: "أخذ بصمة رقمية بصرية ثلاثية الأبعاد (3D Optical Scan) وتصنيع التاج داخل معملنا وتسليمه خلال ٢٤ إلى ٤٨ ساعة.",
    nextStepEn: "Get an in-chair 3D optical scan and receive your custom-milled crown within 24-48 hours.",
    ctaTextAr: "حجز كشف التيجان والجسور",
    ctaTextEn: "Book Crown Consultation",
  },
  {
    id: "veneers",
    num: "05",
    shortNameAr: "قشور الفينير",
    shortNameEn: "Porcelain Veneers",
    titleAr: "قشور الفينير التجميلية وعدسات الابتسامة (Porcelain Veneers)",
    titleEn: "Artisanal Porcelain E.max Veneers",
    badgeAr: "تجميل الأسنان الميكروني",
    badgeEn: "Aesthetic Dentistry",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    icon: Sparkles,
    whatIsAr: "عدسات خزفية بالغة الرقة (سماكة ٠.٣ إلى ٠.٥ ملم) تُصنع يدوياً ورقمياً من سيراميك E.max السويسري، وتُثبت على الواجهة الأمامية للأسنان لترميم الابتسامة بدرجات بياض ملكية طبيعية.",
    whatIsEn: "Ultra-thin ceramic contact lenses (0.3 - 0.5mm) sculpted from Swiss IPS E.max porcelain, bonded permanently to front enamel surfaces to achieve balanced Royal Smile symmetry.",
    problemAr: "التصبغات الدوائية والوراثية العميقة المستعصية على التبييض، تآكل حواف الأسنان وقصر طولها، الفراغات غير المتناسقة، والاعوجاجات السطحية البسيطة.",
    problemEn: "Severe intrinsic tetracycline discoloration resistant to whitening, chipped enamel edges, uneven smile arc, and noticeable diastemas (interdental gaps).",
    suitabilityAr: "للراغبين في ابتسامة هوليوود المتناسقة ناصعة البياض مع الحفاظ على الأنسجة السنية، بشرط وجود طبقة مينا كافية واستقرار العضة وعدم وجود صرير أسنان حاد غير معالج.",
    suitabilityEn: "Individuals seeking aesthetic harmony and enduring shade enhancement, subject to healthy enamel availability and balanced occlusal forces.",
    clinicalNoteAr: "تنبيه طبي معتمد: تصميم الفينير في عياداتنا يتبع المعايير الذهبية (Golden Proportion) مع جلسة تجربة الابتسامة المسبقة (Digital Mock-Up) في فمك قبل برد أي جزء ميكروني من الأسنان.",
    clinicalNoteEn: "Clinical Notice: Veneer design follows facial Golden Proportions with an in-mouth trial mock-up session before any conservative enamel conditioning.",
    nextStepAr: "جلسة تصميم الابتسامة الرقمي (DSD) واختيار درجة البياض المناسبة للون بشرتك وملامح وجهك.",
    nextStepEn: "Book a Digital Smile Design (DSD) consultation and preview your customized smile mock-up.",
    ctaTextAr: "حجز كشف الفينير وتصميم الابتسامة",
    ctaTextEn: "Book Veneers Consultation",
  },
  {
    id: "aligners-ortho",
    num: "06",
    shortNameAr: "التقويم الشفاف الذكي",
    shortNameEn: "Clear Aligners",
    titleAr: "التقويم الشفاف الذكي وتقويم الأسنان (Invisalign & Orthodontics)",
    titleEn: "Magnificent Clear Aligners & Orthodontics",
    badgeAr: "تقويم ذكي غير مرئي",
    badgeEn: "Smart Orthodontics",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
    icon: Layers,
    whatIsAr: "منظومة علاجية ذكية تعتمد على سلسلة قوالب طبية شفافة غير مرئية تماماً، تُبدل دورياً لتحريك الأسنان بدقة ميكرونية محسوبة حاسوبياً حتى الوصول للموضع المثالي بدون أسلاك معدنية.",
    whatIsEn: "A progressive orthodontic series of crystal-clear, removable biomedical aligners designed to move teeth with sub-millimeter precision without uncomfortable metal wires or brackets.",
    problemAr: "تزاحم وتراكب الأسنان، الفراغات بين الأسنان، العضة المفتوحة أو العميقة، وصعوبة تنظيف الأسنان المتداخلة وما ينتج عنها من تراكم الجير وأمراض اللثة.",
    problemEn: "Crowding, rotation of anterior teeth, spacing, open bite, deep overbite, and difficulties in interdental hygiene causing chronic gingivitis.",
    suitabilityAr: "يناسب المراهقين والبالغين ورجال الأعمال الباحثين عن تقويم أسنان مريح وغير ملحوظ إطلاقاً في الاجتماعات والمناسبات، مع سهولة نزعه عند تناول الطعام وتنظيف الأسنان.",
    suitabilityEn: "Teens and adult professionals seeking invisible, discreet orthodontic correction that fits their active executive lifestyle with removable convenience during meals.",
    clinicalNoteAr: "تنبيه طبي معتمد: دراسة خطة التقويم تتطلب تحليلاً رقمياً للفك والرأس (Cephalometric Analysis) لضمان حركة الجذور داخل العظم بأمان ودون التأثير على مفصل الفك TMJ.",
    clinicalNoteEn: "Clinical Notice: Complete treatment planning relies on 3D digital cephalometric analysis to guarantee biological root movement within the alveolar cortical bone.",
    nextStepAr: "مسح فموي ثلاثي الأبعاد بالماسح الضوئي لعرض محاكاة فيديو كاملة لحركة أسنانك والنتيجة النهائية قبل البدء.",
    nextStepEn: "Schedule a 3D digital intraoral scan and view your virtual week-by-week tooth movement simulation.",
    ctaTextAr: "حجز كشف التقويم الشفاف",
    ctaTextEn: "Book Aligner Consultation",
    hasAlignersBanner: true,
  },
  {
    id: "root-canal",
    num: "07",
    shortNameAr: "علاج الجذور المجهري",
    shortNameEn: "Root Canal Therapy",
    titleAr: "علاج جذور الأسنان المجهري بدون ألم (Microscopic Root Canal)",
    titleEn: "Microscopic Pain-Free Endodontics",
    badgeAr: "إنقاذ السن الطبيعي",
    badgeEn: "Tooth Preservation",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=85",
    icon: Eye,
    whatIsAr: "إجراء علاجي فائق الدقة يتم تحت ميكروسكوب جراحي كهروبصري Zeiss لتطهير القنوات العصبية المجهرية الدقيقة، إزالة النسيج المصاب، وحشو القنوات بحبيبات بيولوجية تمنع عودة البكتيريا تماماً.",
    whatIsEn: "An ultra-precision microsurgical procedure performed under Carl Zeiss surgical magnification to thoroughly sanitize micro-canals, extirpate infected pulp, and hermetically seal root apices.",
    problemAr: "التهاب عصب السن الحاد نتيجة التسوس المهمل، الآلام النبضية الليلية الشديدة، حساسية الأسنان الشديدة للمشروبات الساخنة والباردة، أو تكون خراج وصديد تحت جذر السن.",
    problemEn: "Irreversible pulpitis caused by deep caries, severe nocturnal throbbing pain, thermal sensitivity, or periapical abscesses threatening systemic health.",
    suitabilityAr: "للأسنان الطبيعية المصابة بعصب ملتهب أو ميت حيث يكون خيار علاج الجذور هو الحل الوحيد لإنقاذ السن ومنع خلعه، مما يحافظ على عظم الفك الطبيعي ووظيفة المضغ.",
    suitabilityEn: "Patients with vital or necrotic infected dental pulp where endodontic therapy represents the proven pathway to save the natural tooth and prevent extraction.",
    clinicalNoteAr: "تنبيه طبي معتمد: استخدام الميكروسكوب الجراحي يرفع نسبة نجاح علاج الجذور إلى أكثر من ٩٩٪ باكتشاف القنوات الإضافية الدقيقة التي تعجز العين المجردة عن رؤيتها في العلاج التقليدي.",
    clinicalNoteEn: "Clinical Notice: High-power surgical microscopes elevate treatment success above 99% by illuminating micro-canals and isthmuses invisible to the naked eye.",
    nextStepAr: "جلسة واحدة مجهرية مريحة وخالية من أي ألم تحت تخدير محوسب ذكي لإنقاذ السن وإزالة مصدر الألم فوراً.",
    nextStepEn: "Book an emergency pain-relief or microscopic root canal evaluation in a serene, stress-free operatory.",
    ctaTextAr: "حجز علاج الجذور المجهري",
    ctaTextEn: "Book Root Canal Session",
  },
  {
    id: "oral-surgery",
    num: "08",
    shortNameAr: "جراحة الفم والفكين",
    shortNameEn: "Oral Surgery",
    titleAr: "جراحة الفم والفكين وزراعة العظم (Oral & Maxillofacial Surgery)",
    titleEn: "Oral & Maxillofacial Surgery",
    badgeAr: "تدخل جراحي ميكروني",
    badgeEn: "Surgical Mastery",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    icon: Scissors,
    whatIsAr: "إجراءات جراحية دقيقة تُجرى بأحدث أجهزة الـ Piezosurgery بالموجات فوق الصوتية لقص العظم دون إيذاء الأنسجة الرخوة، وتشمل خلع ضروس العقل المطمورة، رفع الجيب الفكي، وزراعة العظم التجديدي.",
    whatIsEn: "Specialized microsurgical procedures utilizing ultrasound Piezosurgery units to manipulate bone safely without soft-tissue damage, encompassing impacted third-molar surgery and sinus augmentation.",
    problemAr: "ضروس العقل المنحشرة التي تضغط على الأعصاب والأسنان المجاورة، أكياس الفك العظمية، ضمور العظم الذي يمنع زراعة الأسنان، والتشوهات الناتجة عن الصدمات.",
    problemEn: "Impacted wisdom teeth pressing on adjacent roots and the inferior alveolar nerve, maxillary sinus pneumatization, localized alveolar bone resorption, and traumatic cysts.",
    suitabilityAr: "للحالات التي تتطلب تدخلاً جراحياً تصحيحياً قبل زراعة الأسنان أو لإزالة مصادر الالتهاب والضغط العصبي المزمن في الفك، مع بروتوكولات تعافي سريعة بدون تورمات شديدة.",
    suitabilityEn: "Patients requiring pre-implant ridge expansion, sinus floor elevation, or safe extraction of complex impacted third molars with accelerated biological healing.",
    clinicalNoteAr: "تنبيه طبي معتمد: التخطيط بالأشعة المقطعية ثلاثية الأبعاد يُحدد بدقة متناهية مسار العصب الفكي السفلي وقاع الجيب الأنفي لضمان أعلى درجات الأمان الجراحي دون أي مضاعفات.",
    clinicalNoteEn: "Clinical Notice: Volumetric CT navigation plots the exact 3D path of the mandibular canal and sinus membrane to ensure absolute surgical safety.",
    nextStepAr: "تقييم جراحي ثلاثي الأبعاد مع استشاري جراحة الفم والوجه والفكين ووضع خطة تخدير آمنة تضمن راحتك التامة.",
    nextStepEn: "Schedule a comprehensive 3D surgical consultation with our maxillofacial consultant.",
    ctaTextAr: "حجز كشف جراحة الفم",
    ctaTextEn: "Book Surgical Consultation",
  },
  {
    id: "whitening",
    num: "09",
    shortNameAr: "تبييض الأسنان الطبي",
    shortNameEn: "Teeth Whitening",
    titleAr: "تبييض الأسنان بالليزر الملكي البارد (Cold Laser Teeth Whitening)",
    titleEn: "Royal Cold Laser Teeth Whitening",
    badgeAr: "إشراقة ملكية فورية",
    badgeEn: "Aesthetic Radiance",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    icon: Zap,
    whatIsAr: "بروتوكول تبييض متطور يعتمد على هلام أكسجيني طبي منشط بأشعة الليزر البارد الفوتونا (Fotona Cold Laser) لتفتيت التصبغات العميقة داخل بنية المينا دون رفع حرارة السن أو إيذاء العصب.",
    whatIsEn: "An advanced in-office brightening protocol utilizing medical photo-activated hydrogen gel energized by Fotona cold laser wavelengths, dissolving deep chromatic stains without enamel overheating.",
    problemAr: "اصفرار الأسنان الناجم عن تناول القهوة والشاي والتدخين وعوامل التقدم بالعمر، أو الرغبة في الحصول على ابتسامة مشرقة وناصعة تفيض بالثقة قبل المناسبات الكبرى.",
    problemEn: "Extrinsic and intrinsic tooth yellowing caused by coffee, tea, tobacco, red wine, and natural aging, as well as smile dullness before major social or professional events.",
    suitabilityAr: "يناسب الأسنان الطبيعية السليمة الخالية من التسوس النشط أو أمراض اللثة، للراغبين في تفتيح ملحوظ يتراوح بين ٦ إلى ٨ درجات بأمان تام في جلسة واحدة مدتها ٤٥ دقيقة.",
    suitabilityEn: "Adults with intact natural dentition free of untreated cavities or active periodontitis, wanting 6 to 8 shades of safe brightening in a single 45-minute appointment.",
    clinicalNoteAr: "تنبيه طبي معتمد: التبييض الطبي بالليزر البارد مصمم خصيصاً ليمنع الحساسية المفرطة الشائعة في التبييض التقليدي، مع تطبيق مصل إعادة التمعدن الطبيعي الغني بالفلورايد عقب الجلسة مباشرة.",
    clinicalNoteEn: "Clinical Notice: Cold laser activation prevents post-whitening pulpal hypersensitivity, followed immediately by biological remineralizing desensitizing serum.",
    nextStepAr: "جلسة تبييض ملكية واحدة بالعيادة تشمل تنظيفاً وتلميعاً مسبقاً مع كيت متابعة منزلي للحفاظ على النتائج لسنوات.",
    nextStepEn: "Book your 45-minute Royal Laser Whitening session and receive your personalized home maintenance kit.",
    ctaTextAr: "حجز جلسة التبييض الملكي",
    ctaTextEn: "Book Laser Whitening",
  },
  {
    id: "pediatric",
    num: "10",
    shortNameAr: "طب أسنان الأطفال",
    shortNameEn: "Pediatric Dentistry",
    titleAr: "طب ورعاية أسنان الأطفال التخصصي (Pediatric Dental Sanctuary)",
    titleEn: "Specialized Pediatric Dental Care",
    badgeAr: "بيئة مرحة بدون خوف",
    badgeEn: "Child-Friendly Care",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=85",
    icon: Baby,
    whatIsAr: "رعاية وقائية وعلاجية شاملة لأسنان الأطفال اللبنية والدائمة، تُقدم في بيئة ترفيهية دافئة خالية من الرهبة الطبية مع أحدث أساليب التهدئة السلوكية والغاز الضاحك عند الحاجة.",
    whatIsEn: "Comprehensive preventive and curative dental care for infant, primary, and young permanent teeth, delivered in an engaging, anxiety-free sanctuary with behavioral guidance techniques.",
    problemAr: "تسوس أسنان الطفولة المبكر (Early Childhood Caries)، التهاب أعصاب الأسنان اللبنية، العادات الفموية الخاطئة كمص الإبهام، وفقدان الأسنان اللبنية المبكر الذي يهدد استقامة الأسنان الدائمة.",
    problemEn: "Early childhood bottle caries, premature primary tooth loss causing space collapse, pacifier/thumb-sucking habits, and dental dental trauma during sports and play.",
    suitabilityAr: "للأطفال واليافعين من عمر سنة واحدة حتى سن المراهقة، مع التركيز على بناء تجربة نفسية إيجابية تمنح الطفل ثقة دائمة وتزيل عقدة الخوف من طبيب الأسنان للأبد.",
    suitabilityEn: "Infants, children, and adolescents from age one through teenage years, prioritizing stress-free positive psychological conditioning and long-term oral health habits.",
    clinicalNoteAr: "تنبيه طبي معتمد: الحفاظ على الأسنان اللبنية حتى موعد سقوطها الطبيعي ضروري للغاية لأنها تعمل كدليل طبيعي لنمو وتوجيه الأسنان الدائمة وتمنع الحاجة لتقويم معقد مستقبلاً.",
    clinicalNoteEn: "Clinical Notice: Preserving primary teeth until natural shedding is vital as they serve as biological space maintainers guiding permanent erupting dentition.",
    nextStepAr: "حجز كشف كشفي ترفيهي واستشاري أول للطفل مع تطبيق واقيات الفلورايد المقوية للمينا وجلسة إرشادية للوالدين.",
    nextStepEn: "Book a friendly introductory checkup and protective fluoride application in our pediatric suite.",
    ctaTextAr: "حجز كشف أسنان الأطفال",
    ctaTextEn: "Book Pediatric Checkup",
  },
  {
    id: "general-dentistry",
    num: "11",
    shortNameAr: "طب الأسنان العام",
    shortNameEn: "General Dentistry",
    titleAr: "الفحوصات الدورية والعناية الوقائية العامة (Comprehensive General Dentistry)",
    titleEn: "General & Preventive Dental Care",
    badgeAr: "الفحص الدوري والوقاية",
    badgeEn: "Preventive Health",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
    icon: SmilePlus,
    whatIsAr: "منظومة العناية السريرية المتكاملة التي تشمل الفحص الشامل بكاميرات التصوير الفموي الدقيقة، إزالة الرواسب الجيرية العميقة بالألتراسونيك، وحشوات الكومبوزيت التجميلية المطابقة للون الأسنان.",
    whatIsEn: "Foundational oral healthcare encompassing high-definition intraoral camera diagnostics, ultrasonic periodontal scaling, tooth-colored composite restorations, and preventive enamel varnishing.",
    problemAr: "تراكم الجير المسبب لرائحة الفم ونزيف اللثة، النخور والتسوسات الأولية الصغيرة غير المرئية، تآكل الحشوات القديمة، والتحسس السني عند شرب السوائل.",
    problemEn: "Subgingival calculus, bad breath (halitosis), early micro-cavities, marginal breakdown of aged amalgam restorations, and thermal enamel erosion.",
    suitabilityAr: "لكافة أفراد العائلة بشكل دوري كل ٦ أشهر للحفاظ على استقرار صحة الفم واللثة، واكتشاف أي مشكلات ميكروسكوبية في بدايتها قبل تفاقمها إلى علاجات عصب أو خلع مكلف.",
    suitabilityEn: "All family members biannually to maintain optimal oral homeostasis and intercept microscopic decay before progressing into complicated root canals or extractions.",
    clinicalNoteAr: "تنبيه طبي معتمد: الفحص الدوري نصف السنوي يضمن الكشف المبكر عن تآكل اللثة والتسوس الخفي بين الأسنان باستخدام أشعة البايتوينج الرقمية منخفضة الإشعاع بنسبة ٨٠٪.",
    clinicalNoteEn: "Clinical Notice: Biannual routine cleanings and low-dose bitewing imaging detect interproximal caries before clinical pain symptoms emerge.",
    nextStepAr: "حجز جلسة فحص دوري شامل وتنظيف أسنان مجهري بالموجات الصوتية وصقل المينا لإحساس فوري بالانتعاش والنظافة.",
    nextStepEn: "Schedule a comprehensive dental wellness examination and ultrasonic dental hygiene prophylaxis.",
    ctaTextAr: "حجز الفحص الدوري العام",
    ctaTextEn: "Book Wellness Checkup",
  },
];

export default function TreatmentsPage() {
  const { isRtl } = useLanguage();
  const lenis = useLenis();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeNavId, setActiveNavId] = useState<string>("implants");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const navScrollRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position with GSAP Observer & Lenis for active navigation pill highlight
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      setShowScrollTop(window.scrollY > 450);

      // Detect current active section
      for (let i = treatmentsData.length - 1; i >= 0; i--) {
        const item = treatmentsData[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNavId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. TextSplit Scrub for Hero Main Headline
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

      // 2. Staggered Service Cards entrance (triggered once)
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".treatment-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Butter-Smooth In-Page Anchor Gliding via Lenis
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -130, // accounts for fixed navbar + sticky pill bar
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const yOffset = -130;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FDFBF7] text-[#012968] min-h-screen pb-24" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* Background Soft Royal Ambient Glows */}
      <div className="absolute top-96 left-0 w-[500px] h-[500px] bg-[#C8A232]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-[#022256]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* ================================================================ */}
      {/* 1. GRAND CINEMATIC HERO BANNER (صورة معمارية فاخرة برأس الصفحة)   */}
      {/* ================================================================ */}
      <header
        ref={heroRef}
        className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-[#01183E]"
      >
        {/* High-Resolution Architectural Photography Background */}
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=85"
          alt="Magnificent Smile Clinical Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />

       

        {/* Ambient Center Glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#C8A232]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono font-bold text-[#DFBF57] mb-5">
            <Link href="/" className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
              <span>{isRtl ? "الرئيسية" : "Home"}</span>
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white drop-shadow-sm">{isRtl ? "الدليل الطبي للعلاجات" : "Treatments Guide"}</span>
          </nav>

          {/* Prestige Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A232]/50 bg-[#012968]/80 backdrop-blur-md shadow-lg mb-4">
            <Crown className="w-3.5 h-3.5 text-[#DFBF57]" />
            <span className="text-xs font-bold text-[#DFBF57] uppercase tracking-wider font-mono">
              OUR DENTAL EXPERTISE • {isRtl ? "منظومة الرعاية التخصصية الشاملة" : "Comprehensive Clinical Care"}
            </span>
          </div>

          {/* Main Headline with SplitTextScrub */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-5 leading-tight drop-shadow-md"
          >
            <SplitTextScrub
              text={
                isRtl
                  ? "العلاجات المتخصصة — الهندسة الطبية لابتسامتك"
                  : "Specialized Treatments — Medical Artistry For Your Smile"
              }
              wordClassName="split-title-word"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-body leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-sm">
            {isRtl
              ? "جميع الخدمات التخصصية في صرح طبي واحد، بتقسيم يسهل التصفح والمقارنة من الجوال أو الحاسوب، مع قائمة انتقال مباشر للأقسام وشرح مبسط لكل علاج وفق البروتوكولات الإكلينيكية المعتمدة."
              : "All 11 specialized clinical disciplines unified in one guide, optimized for effortless mobile navigation with quick-jump section bookmarks and transparent treatment protocols."}
          </p>

          {/* 3 Royal Glass Metric Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#DFBF57]" />
              <span className="text-xs font-bold font-mono">{isRtl ? "١١ علاجاً تخصصياً متكاملاً" : "11 Integrated Specialties"}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#DFBF57]" />
              <span className="text-xs font-bold font-mono">{isRtl ? "معمل وأشعة 3D CBCT ملحقة" : "In-House Lab & 3D CBCT"}</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#DFBF57]" />
              <span className="text-xs font-bold font-mono">{isRtl ? "نخبة الاستشاريين الدوليين" : "Board-Certified Faculty"}</span>
            </div>
          </div>

        </div>
      </header>

      {/* ================================================================ */}
      {/* 2. STICKY IN-PAGE QUICK-JUMP NAVIGATION MENU (قائمة انتقال داخلي) */}
      {/* ================================================================ */}
      <nav
        aria-label="Treatments Quick Navigation"
        className="sticky top-[64px] sm:top-[72px] z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b-2 border-[#C8A232]/35 shadow-[0_6px_25px_rgba(2,34,86,0.06)] py-2.5 sm:py-3.5 mb-10 sm:mb-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={navScrollRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 snap-x"
          >
            {treatmentsData.map((item) => {
              const isActive = activeNavId === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 snap-start cursor-pointer border ${
                    isActive
                      ? "bg-[#012968] text-white border-[#C8A232] shadow-md ring-2 ring-[#C8A232]/30 scale-102"
                      : "bg-white text-[#5B6782] border-[#C8A232]/30 hover:border-[#C8A232] hover:text-[#012968] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#DFBF57] text-[#012968]" : "bg-[#FAF8F5] text-[#955904]"
                    }`}
                  >
                    {item.num}
                  </span>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isRtl ? item.shortNameAr : item.shortNameEn}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* 3. THE 11 DETAILED TREATMENT CARDS (A - B - C Template)         */}
      {/* ================================================================ */}
      <main ref={cardsContainerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {treatmentsData.map((service, sIdx) => {
          const ServiceIcon = service.icon;
          const isAligners = service.hasAlignersBanner;

          const whatsappMessage = encodeURIComponent(
            isRtl
              ? `مرحباً، أود حجز موعد استشارة بخصوص علاج (${service.titleAr}) في عيادات ماغنيفيسنت سمايل.`
              : `Hello, I would like to book a consultation regarding (${service.titleEn}) at Magnificent Smile Clinics.`
          );

          const whatsappUrl = `https://wa.me/201008901234?text=${whatsappMessage}`;

          return (
            <article
              id={service.id}
              key={service.id}
              className="treatment-card group relative rounded-3xl bg-white border-2 border-[#C8A232]/35 hover:border-[#C8A232] overflow-hidden shadow-[0_12px_45px_rgba(2,34,86,0.06)] hover:shadow-[0_20px_60px_rgba(200,162,50,0.18)] transition-all duration-300 scroll-mt-36"
            >
              {/* Top 24K Gold Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#955904] via-[#DFBF57] to-[#955904]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Column (5 Cols): High-Resolution Clinical Photography */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-[#022256]">
                  <Image
                    src={service.image}
                    alt={isRtl ? service.titleAr : service.titleEn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={sIdx < 2}
                  />

                  {/* Gradient Vignette Over Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#022256]/30 via-transparent to-[#C8A232]/25 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C8A232]/50 text-xs font-mono font-bold text-[#955904] shadow-md backdrop-blur-md">
                      <ServiceIcon className="w-3.5 h-3.5 text-[#955904]" />
                      <span>{isRtl ? service.badgeAr : service.badgeEn}</span>
                    </span>

                    <span className="text-xs font-mono font-bold text-white bg-[#012968]/90 border border-white/20 px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {service.num} / 11
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono text-[#DFBF57] font-bold block mb-1 uppercase tracking-wider">
                      {isRtl ? service.shortNameAr : service.shortNameEn}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug drop-shadow-sm">
                      {isRtl ? service.titleAr : service.titleEn}
                    </h2>
                  </div>
                </div>

                {/* Content Column (7 Cols): Standardized A - B - C Template */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  
                  <div className="space-y-6">
                    
                    {/* SECTION A: العلاج باختصار (In Brief) */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#C8A232]/25">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-[#012968] text-white flex items-center justify-center text-xs font-mono font-bold">
                          A
                        </span>
                        <h3 className="text-sm sm:text-base font-bold font-display text-[#012968]">
                          {isRtl ? "العلاج باختصار • ما هو العلاج؟ والمشكلة المستهدفة" : "Treatment in Brief • Definition & Target Problem"}
                        </h3>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-[#3D4866] font-body leading-relaxed">
                        <p>
                          <strong className="text-[#012968] font-semibold">{isRtl ? "ماهية العلاج: " : "What it is: "}</strong>
                          {isRtl ? service.whatIsAr : service.whatIsEn}
                        </p>
                        <p>
                          <strong className="text-[#955904] font-semibold">{isRtl ? "المشكلة التي يستهدفها: " : "Target Problem: "}</strong>
                          {isRtl ? service.problemAr : service.problemEn}
                        </p>
                      </div>
                    </div>

                    {/* SECTION B: لمن يناسب؟ (Who is it for?) */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#C8A232]/35 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-[#955904] text-white flex items-center justify-center text-xs font-mono font-bold">
                          B
                        </span>
                        <h3 className="text-sm sm:text-base font-bold font-display text-[#012968]">
                          {isRtl ? "لمن يناسب هذا العلاج؟" : "Who is this treatment for?"}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5B6782] font-body leading-relaxed mb-3">
                        {isRtl ? service.suitabilityAr : service.suitabilityEn}
                      </p>

                      {/* Official Clinical Diagnosis Notice */}
                      <div className="flex items-start gap-2 text-[11px] sm:text-xs text-[#955904] bg-[#FAF8F5] p-3 rounded-xl border border-[#C8A232]/25 font-semibold leading-relaxed">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#955904]" />
                        <span>{isRtl ? service.clinicalNoteAr : service.clinicalNoteEn}</span>
                      </div>
                    </div>

                    {/* SPECIAL HIGHLIGHTED BANNER FOR SECTION 06 (ALIGNERS) */}
                    {isAligners && (
                      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#012052] to-[#012968] text-white border-2 border-[#C8A232] shadow-md relative overflow-hidden">
                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#DFBF57]/20 border border-[#DFBF57]/40 text-[#DFBF57] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                              <Sparkles className="w-3 h-3 text-[#DFBF57]" />
                              <span>{isRtl ? "المنظومة الحصرية المعتمدة" : "Proprietary Certified System"}</span>
                            </div>
                            <h4 className="text-base sm:text-lg font-bold font-display text-white mb-1">
                              Magnificent Aligners™
                            </h4>
                            <p className="text-xs text-white/80 font-body leading-relaxed">
                              {isRtl
                                ? "تصنيع محلي مباشر ثلاثي الأبعاد بقوالب بوليمر ألماني ذكي عالي الشفافية مع محاكاة فورية بالذكاء الاصطناعي — بدون انتظار وسيط خارجي."
                                : "Direct in-house 3D production with multilayer biomedical polymer and AI simulation — zero external third-party shipping delays."}
                            </p>
                          </div>

                          <Link
                            href="/#ecosystem"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
                          >
                            <span>{isRtl ? "اكتشف المنظومة" : "Explore Aligners"}</span>
                            <ArrowIcon className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* SECTION C: الخطوة التالية (Next Step & CTA) */}
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-[#C8A232] text-[#012968] flex items-center justify-center text-xs font-mono font-bold">
                          C
                        </span>
                        <h3 className="text-sm sm:text-base font-bold font-display text-[#012968]">
                          {isRtl ? "الخطوة التالية • استشارة مخصصة ودعوة للحجز" : "Next Step • Personalized Consultation"}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5B6782] font-body leading-relaxed mb-4">
                        {isRtl ? service.nextStepAr : service.nextStepEn}
                      </p>

                      {/* Dual Action CTA Buttons */}
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(200,162,50,0.3)] hover:shadow-[0_6px_22px_rgba(200,162,50,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-white" />
                          <span>{isRtl ? service.ctaTextAr : service.ctaTextEn}</span>
                          <ArrowIcon className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href="tel:+201008901234"
                          className="w-full sm:w-auto py-3 px-5 rounded-xl border border-[#C8A232]/50 bg-white hover:bg-[#FAF8F5] text-[#012968] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#955904]" />
                          <span>{isRtl ? "اتصال فوري" : "Call Clinic"}</span>
                        </a>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </main>

      {/* ================================================================ */}
      {/* 4. BOTTOM APPOINTMENT BANNER                                     */}
      {/* ================================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#012052] via-[#012968] to-[#01183E] text-white p-8 sm:p-12 text-center border-2 border-[#C8A232]/50 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFBF57]/15 border border-[#DFBF57]/30 text-[#DFBF57] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <CalendarCheck className="w-3.5 h-3.5 text-[#DFBF57]" />
              <span>{isRtl ? "تقييم سريري شامل" : "Comprehensive Clinical Assessment"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-4 leading-tight">
              {isRtl
                ? "لست متأكداً أي علاج هو الأنسب لحالتك؟"
                : "Unsure Which Treatment Fits Your Smile?"}
            </h2>

            <p className="text-sm sm:text-base text-white/80 font-body mb-8 leading-relaxed">
              {isRtl
                ? "احجز جلسة استشارة تشخيصية شاملة تشمل تصوير الـ 3D والفحص المجهري لوضع خطة علاجية مخصصة تناسب أهدافك وميزانيتك."
                : "Book a diagnostic consultation with in-house 3D imaging to craft an individualized treatment plan matching your clinical needs."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/201008901234?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D8%B4%D8%AE%D9%8A%D8%B5%D9%8A%D8%A9%20%D8%B4%D8%A7%D9%85%D9%84%D8%A9%20%D9%81%D9%8A%20%D8%B9%D9%8A%D8%A7%D8%AF%D8%A7%D8%AA%20%D9%85%D8%A7%D8%BA%D9%86%D9%8A%D9%81%D9%8A%D8%B3%D9%86%D8%AA%20%D8%B3%D9%85%D8%A7%D9%8A%D9%84."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-gradient-to-r from-[#955904] via-[#C8A232] to-[#955904] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{isRtl ? "احجز استشارتك التشخيصية الآن" : "Book Diagnostic Consultation"}</span>
              </a>

              <Link
                href="/#clinics"
                className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all"
              >
                {isRtl ? "فروع العيادات ومواعيد العمل" : "View Clinic Locations"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. FLOATING QUICK JUMP-TO-TOP BUTTON (MOBILE CONVENIENCE)         */}
      {/* ================================================================ */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#012968] text-[#DFBF57] border-2 border-[#C8A232] shadow-xl hover:bg-[#955904] hover:text-white transition-all transform hover:scale-110 cursor-pointer animate-in fade-in duration-300"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
