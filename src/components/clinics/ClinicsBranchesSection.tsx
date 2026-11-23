"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/i18n/IntlProviderWrapper";
import { SplitSectionBackground } from "@/components/ui/SplitSectionBackground";
import { MapPin, PhoneCall, ExternalLink } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export interface ClinicBranch {
  id: string;
  anchor: string;
  name: string;
  nameAr: string;
  address: string;
  addressAr: string;
  phone: string;
  phoneRaw: string;
  mapUrl: string;
  image: string;
  featured?: boolean;
}

interface ClinicsBranchesSectionProps {
  branches: ClinicBranch[];
  onSelectBranch: (branchId: string) => void;
}

export function ClinicsBranchesSection({ branches, onSelectBranch }: ClinicsBranchesSectionProps) {
  const t = useTranslations("clinicsPage");
  const { isRtl } = useLanguage();

  return (
    <section id="branches" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-20 shadow-2xl">
      <SplitSectionBackground inverted={!isRtl} waveVariant="B" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 p-6 rounded-3xl bg-[#FCFAF5]/90 border border-[#C8A232]/35 shadow-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0F266A] tracking-tight mb-3">
            {isRtl ? "عياداتنا في الغردقة، الشيخ زايد، والجيزة" : "Our Premier Clinical Locations"}
          </h2>
          <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
            {isRtl
              ? "مجهزة بأحدث تقنيات طب الأسنان الرقمي وغرف تعقيم بمعايير أوروبية لتوفير أعلى مستويات الراحة والأمان."
              : "Equipped with the latest in digital dentistry and European standard sterilization protocols."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {branches.map((branch) => {
            const whatsappBranchUrl = `https://wa.me/${branch.phoneRaw.replace(
              /[^0-9]/g,
              ""
            )}?text=${encodeURIComponent(
              isRtl
                ? `مرحباً، أود الاستفسار عن المواعيد في فرع (${branch.nameAr}) في عيادات ماغنيفيسنت سمايل.`
                : `Hello, I would like to enquire about appointments at the ${branch.name} branch of Magnificent Smile.`
            )}`;

            return (
              <div
                key={branch.id}
                id={branch.anchor}
                className={`group rounded-3xl overflow-hidden bg-white/95 border transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-2xl backdrop-blur-xs ${
                  branch.featured
                    ? "border-[#C8A232] shadow-[0_8px_30px_rgba(200,162,50,0.25)] ring-2 ring-[#C8A232]/30"
                    : "border-[#C8A232]/35 hover:border-[#C8A232]"
                }`}
              >
                {/* Branch Image */}
                <div className="relative w-full h-56 overflow-hidden bg-[#0A1128]">
                  <Image
                    src={branch.image}
                    alt={isRtl ? branch.nameAr : branch.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  {/* Featured Stamp */}
                  {branch.featured && (
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#012052] border border-[#DFBF57] text-[#DFBF57] text-[10px] font-mono font-bold shadow-md">
                      {isRtl ? "الفرع الرئيسي" : "FLAGSHIP"}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-mono font-bold text-[#DFBF57] tracking-wider uppercase block mb-0.5">
                      {isRtl ? "عيادة متخصصة" : "CLINICAL BRANCH"}
                    </span>
                    <h2 className="text-lg font-bold font-display text-white">
                      {isRtl ? branch.nameAr : branch.name}
                    </h2>
                  </div>
                </div>

                {/* Branch Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#955904] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#2A3B56] font-body leading-relaxed">
                        {isRtl ? branch.addressAr : branch.address}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <PhoneCall className="w-4 h-4 text-[#955904] shrink-0" />
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="text-xs sm:text-sm font-mono font-bold text-[#0F266A] hover:underline"
                        dir="ltr"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-[#C8A232]/25">
                    <div className="grid grid-cols-2 gap-2">
                      {/* Call Button */}
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#012052] hover:bg-[#022A6D] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#DFBF57]" />
                        <span>{t("call")}</span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href={whatsappBranchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-bold tracking-wide transition-colors border border-[#25D366]/40"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>{t("whatsapp")}</span>
                      </a>
                    </div>

                    {/* Google Maps link */}
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 text-[11px] font-mono text-[#955904] hover:underline py-1"
                    >
                      <span>{isRtl ? "عرض الموقع والاتجاهات على الخريطة" : "View Map & Directions"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {/* Select for Booking */}
                    <button
                      type="button"
                      onClick={() => onSelectBranch(branch.id)}
                      className="w-full py-2.5 rounded-xl bg-white border border-[#C8A232]/50 hover:bg-[#FAF1DC]/50 text-[#0F266A] text-xs font-bold font-display transition-colors text-center cursor-pointer shadow-2xs"
                    >
                      {isRtl ? "احجز في هذا الفرع" : "Book at this Branch"}
                    </button>
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
