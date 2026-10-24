export type Language = 'ar' | 'en' | 'fr' | 'ru';
export type Direction = 'rtl' | 'ltr';

export interface Translations {
  direction: Direction;
  brand: {
    name: string;
    subname: string;
    heritage: string;
  };
  nav: {
    home: string;
    treatments: string;
    doctors: string;
    clinics: string;
    aligners: string;
    dentalLab: string;
    labPartners: string;
    bookAppointment: string;
  };
  hero: {
    badge: string;
    hieroglyphics: string;
    headline: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    decoderHint: string;
    stats: {
      clinics: { val: string; label: string };
      digital: { val: string; label: string };
      patients: { val: string; label: string };
      heritage: { val: string; label: string };
    };
    scrollPrompt: string;
  };
  ecosystem: {
    tag: string;
    title: string;
    subtitle: string;
    clinicsCard: {
      title: string;
      desc: string;
      cta: string;
    };
    alignersCard: {
      title: string;
      desc: string;
      cta: string;
    };
    labCard: {
      title: string;
      desc: string;
      cta: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    direction: 'rtl',
    brand: {
      name: 'ماغنيفيسنت سمايل',
      subname: 'طب وتجميل وزراعة الأسنان الفاخرة',
      heritage: 'امتداد إرث حسي رع — أول طبيب أسنان في التاريخ',
    },
    nav: {
      home: 'الرئيسية',
      treatments: 'العلاجات',
      doctors: 'فريق الأطباء',
      clinics: 'فروعنا',
      aligners: 'التقويم الشفاف',
      dentalLab: 'معمل الأسنان',
      labPartners: 'شركاء المعمل',
      bookAppointment: 'احجز استشارتك',
    },
    hero: {
      badge: 'إرث حسي رع — أول رئيس أطباء أسنان في تاريخ البشرية (٢٦٠٠ ق.م)',
      hieroglyphics: '𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿',
      headline: 'نحن أحفاد حسي رع... نواصل مسيرة أقدم طبيب أسنان في تاريخ البشرية.',
      tagline: 'بأحدث ابتكارات التكنولوجيا الطبية... امتداد الإرث يبدأ هنا.',
      primaryCta: 'احجز استشارتك الملكية',
      secondaryCta: 'اكتشف المنظومة الثلاثية',
      decoderHint: 'فك الشفرة الفرعونية الملكية',
      stats: {
        clinics: { val: '٣ عيادات فاخرة', label: 'تجهيزات عالمية بأعلى مقاييس الفخامة السريرية' },
        digital: { val: '١٠٠٪ رقمي بالكامل', label: 'معمل أسنان متطور وشركة تقويم شفاف متكاملة' },
        patients: { val: '+١٥,٠٠٠', label: 'ابتسامة تم تصميمها بدقة هندسية وجمالية' },
        heritage: { val: '٢٦٠٠ ق.م', label: 'أول توثيق تاريخي لطب الأسنان في الحضارة المصرية' },
      },
      scrollPrompt: 'انتقل لاستكشاف الفخامة والعلوم السريرية',
    },
    ecosystem: {
      tag: 'منظومة واحدة · ثلاث كيانات متكاملة',
      title: 'الهندسة الطبية تلتقي بالفخامة الخالدة',
      subtitle: 'تكامل فريد يجمع بين أرقى العيادات السريرية، وتصنيع التقويم الشفاف، ومعمل الأسنان الرقمي المتخصص.',
      clinicsCard: {
        title: 'عيادات ماغنيفيسنت',
        desc: 'رعاية تخصصية لزرع وتجميل الأسنان بأحدث التقنيات وأيدي نخبة الاستشاريين.',
        cta: 'استكشف العيادات',
      },
      alignersCard: {
        title: 'تقويم ماغنيفيسنت الشفاف',
        desc: 'حلول تقويمية ذكية خفية ومصممة بأدق برمجيات الذكاء الاصطناعي والتصنيع ثلاثي الأبعاد.',
        cta: 'اكتشف التقويم',
      },
      labCard: {
        title: 'معمل الأسنان الرقمي',
        desc: 'صناعة تيجان وزرعات الزركونيا والـ E.max بأعلى دقة ميكرونية بالتعاون مع كبار الأطباء.',
        cta: 'بوابة الأطباء والمعمل',
      },
    },
  },
  en: {
    direction: 'ltr',
    brand: {
      name: 'MAGNIFICENT SMILE',
      subname: 'Modern Clinical Luxury & Implantology',
      heritage: 'Continuing the Legacy of Hesy-Ra — The Dawn of Dentistry',
    },
    nav: {
      home: 'Home',
      treatments: 'Treatments',
      doctors: 'Our Specialists',
      clinics: 'Our Clinics',
      aligners: 'Magnificent Aligners',
      dentalLab: 'Dental Laboratory',
      labPartners: 'Lab Partners',
      bookAppointment: 'Book Consultation',
    },
    hero: {
      badge: 'THE LEGACY OF HESY-RA — CHIEF OF DENTISTS (2600 BCE)',
      hieroglyphics: '𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿',
      headline: 'Descendants of Hesy-Ra... Continuing the legacy of humanity’s first dentist.',
      tagline: 'With cutting-edge medical innovations... the continuation of this timeless heritage begins here.',
      primaryCta: 'Book Your Consultation',
      secondaryCta: 'Explore The Ecosystem',
      decoderHint: 'Decipher Royal Hieroglyphic Inscription',
      stats: {
        clinics: { val: '3 Prime Clinics', label: 'Unrivaled clinical privacy and architectural luxury' },
        digital: { val: '100% Fully Digital', label: 'Integrated CAD/CAM lab & proprietary clear aligners' },
        patients: { val: '15,000+', label: 'Masterpiece smiles sculpted with anatomical precision' },
        heritage: { val: '2600 BCE', label: 'The earliest recorded dental practice in human history' },
      },
      scrollPrompt: 'Scroll to explore modern clinical luxury',
    },
    ecosystem: {
      tag: 'ONE BRAND · THREE BUSINESSES',
      title: 'Medical Artistry Meets Timeless Prestige',
      subtitle: 'A unified luxury dental experience connecting world-class clinics, proprietary aligners, and an advanced digital laboratory.',
      clinicsCard: {
        title: 'Magnificent Smile Clinics',
        desc: 'Specialized oral surgery, veneers, and full-arch rehabilitation in sanctuary-like suites.',
        cta: 'Explore Clinics',
      },
      alignersCard: {
        title: 'Magnificent Aligners',
        desc: 'Advanced clear aligner systems driven by AI diagnostics and precision biomedical polymer engineering.',
        cta: 'Discover Aligners',
      },
      labCard: {
        title: 'High-Precision Dental Lab',
        desc: 'Ultra-thin E.max veneers, titanium implant abutments, and robotic 5-axis milling for elite practitioners.',
        cta: 'Partner Portal',
      },
    },
  },
  fr: {
    direction: 'ltr',
    brand: {
      name: 'MAGNIFICENT SMILE',
      subname: 'Luxe Clinique Moderne & Implantologie',
      heritage: 'L’Héritage d’Hésy-Rê — Le Premier Dentiste de l’Histoire',
    },
    nav: {
      home: 'Accueil',
      treatments: 'Traitements',
      doctors: 'Nos Praticiens',
      clinics: 'Nos Cliniques',
      aligners: 'Aligneurs Magnifiques',
      dentalLab: 'Laboratoire Dentaire',
      labPartners: 'Partenaires Lab',
      bookAppointment: 'Prendre Rendez-vous',
    },
    hero: {
      badge: 'L’HÉRITAGE D’HÉSY-RÊ — MAÎTRE DES DENTISTES (2600 AV. J.-C.)',
      hieroglyphics: '𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿',
      headline: 'Héritiers d’Hésy-Rê... Nous perpétuons l’art du tout premier dentiste de l’humanité.',
      tagline: 'Grâce aux technologies médicales les plus avancées... la grandeur d’un savoir millénaire continue.',
      primaryCta: 'Réserver une Consultation',
      secondaryCta: 'Découvrir l’Écosystème',
      decoderHint: 'Déchiffrer l’inscription hiéroglyphique royale',
      stats: {
        clinics: { val: '3 Cliniques de Prestige', label: 'Espaces exclusifs et protocoles médicaux d’élite' },
        digital: { val: '100% Numérique', label: 'Laboratoire de haute précision et aligneurs transparents' },
        patients: { val: '+15 000', label: 'Sourires d’exception façonnés sur mesure' },
        heritage: { val: '2600 av. J.-C.', label: 'Origine historique de la science dentaire' },
      },
      scrollPrompt: 'Défiler pour explorer le luxe clinique',
    },
    ecosystem: {
      tag: 'UNE MARQUE · TROIS PÔLES D’EXCELLENCE',
      title: 'L’Art Dentaire Rencontre la Majesté Éternelle',
      subtitle: 'Une synergie d’exception entre cliniques de luxe, aligneurs sur-mesure et laboratoire de prothèse numérique.',
      clinicsCard: {
        title: 'Cliniques Magnificent',
        desc: 'Chirurgie implantaire guidée et facettes esthétiques dans un cadre raffiné et serein.',
        cta: 'Voir les Cliniques',
      },
      alignersCard: {
        title: 'Magnificent Aligners',
        desc: 'Systèmes d’alignement invisibles assistés par modélisation prédictive 3D.',
        cta: 'Découvrir les Aligneurs',
      },
      labCard: {
        title: 'Laboratoire de Précision',
        desc: 'Usinage robotique Zircone & E.max au micron près au service des praticiens exigeants.',
        cta: 'Portail Professionnel',
      },
    },
  },
  ru: {
    direction: 'ltr',
    brand: {
      name: 'MAGNIFICENT SMILE',
      subname: 'Премиальная Стоматология и Имплантология',
      heritage: 'Наследие Хеси-Ра — Первого Стоматолога в Истории',
    },
    nav: {
      home: 'Главная',
      treatments: 'Процедуры',
      doctors: 'Наши Врачи',
      clinics: 'Клиники',
      aligners: 'Элайнеры',
      dentalLab: 'Лаборатория',
      labPartners: 'Партнёрам',
      bookAppointment: 'Записаться',
    },
    hero: {
      badge: 'НАСЛЕДИЕ ХЕСИ-РА — ГЛАВНОГО СТОМАТОЛОГА ФАРАОНОВ (2600 ДО Н.Э.)',
      hieroglyphics: '𓃀𓄿𓎛𓂧𓍿 𓄿𓃀𓏏𓎡𓄿𓂋𓄿𓏏 𓄿𓃭𓏏𓎡𓈖𓅱𓃭𓅱𓎼𓇌𓄿',
      headline: 'Мы — наследники Хеси-Ра... Продолжая миссию первого стоматолога в истории человечества.',
      tagline: 'Передовые достижения медицинских технологий... бессмертное наследие начинается здесь.',
      primaryCta: 'Записаться на Приём',
      secondaryCta: 'Исследовать Экосистему',
      decoderHint: 'Расшифровать царские иероглифы',
      stats: {
        clinics: { val: '3 Премиальные Клиники', label: 'Безупречный комфорт и медицина высшего класса' },
        digital: { val: '100% Цифровой Процесс', label: 'Собственная CAD/CAM лаборатория и прозрачные элайнеры' },
        patients: { val: '15 000+', label: 'Идеальных преображений улыбок' },
        heritage: { val: '2600 до н.э.', label: 'Истоки врачевания зубов в древнеегипетской цивилизации' },
      },
      scrollPrompt: 'Прокрутите для погружения в мир клинической роскоши',
    },
    ecosystem: {
      tag: 'ОДИН БРЕНД · ТРИ НАПРАВЛЕНИЯ',
      title: 'Медицинское Искусство и Царственное Величие',
      subtitle: 'Синтез клинического мастерства, собственных прозрачных элайнеров и сверхточной цифровой зуботехнической лаборатории.',
      clinicsCard: {
        title: 'Клиники Magnificent Smile',
        desc: 'Имплантация, премиальные виниры и эстетическая реконструкция улыбки.',
        cta: 'О клиниках',
      },
      alignersCard: {
        title: 'Элайнеры Magnificent',
        desc: 'Инновационные прозрачные капы с компьютерным 3D-моделированием результатов.',
        cta: 'Об элайнерах',
      },
      labCard: {
        title: 'Цифровая Лаборатория',
        desc: 'Высокоточные реставрации из диоксида циркония и E.max для ведущих специалистов.',
        cta: 'Портал для врачей',
      },
    },
  },
};
