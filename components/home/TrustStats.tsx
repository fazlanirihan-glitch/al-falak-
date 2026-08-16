import { Users, Building2, Award, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";

interface TrustStatsProps {
  locale: string;
  dict: Dictionary;
}

const statIcons = [Users, Building2, Award, ShieldCheck];

export default function TrustStats({ locale, dict }: TrustStatsProps) {
  const isRtl = locale === "ar";

  return (
    <section className="relative bg-[#f0f9ff] border-y border-[#bae6fd] py-12 lg:py-16">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {company.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={idx}
                className="bg-white border border-[#bae6fd] rounded p-5 lg:p-6 card-industrial flex flex-col justify-between"
              >
                <div className={`flex items-center justify-between mb-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <span className="w-10 h-10 rounded bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {isRtl ? "مؤشر موثق" : "Verified Fact"}
                  </span>
                </div>

                <div className={isRtl ? "text-right" : "text-left"}>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c1a2e] tracking-tight ltr-always">
                    {stat.value}
                  </div>
                  <div className="font-display font-semibold text-base sm:text-lg text-[#0284c7] mt-1">
                    {isRtl ? stat.labelAr : stat.label}
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {isRtl ? stat.descriptionAr : stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
