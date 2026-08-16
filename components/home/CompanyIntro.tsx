import Link from "next/link";
import { ShieldCheck, Clock, Globe } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";

interface CompanyIntroProps {
  locale: string;
  dict: Dictionary;
}

export default function CompanyIntro({ locale, dict }: CompanyIntroProps) {
  const isRtl = locale === "ar";

  const facts = [
    { icon: ShieldCheck, label: company.iso, sub: locale === "ar" ? "معيار الجودة" : "Quality Standard" },
    { icon: Clock, label: "24/7", sub: locale === "ar" ? "دعم فني" : "Technical Support" },
    { icon: Globe, label: locale === "ar" ? "4 مناطق" : "4 Regions", sub: locale === "ar" ? "منطقة الخدمة" : "Service Coverage" },
  ];

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container-site">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isRtl ? "lg:grid-flow-dense" : ""}`}>
          {/* Text */}
          <div className={`space-y-5 ${isRtl ? "text-right lg:col-start-2" : ""}`}>
            <span className="section-tag">{dict.company.tag}</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#0c1a2e] leading-tight">
              {dict.company.heading}
            </h2>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
              {dict.company.sub}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {locale === "ar"
                ? "الفلك للمعدات الصناعية — مورد ومخزن رئيسي معتمد بمعيار ISO 9001:2015 للمعدات الهوائية والكهربائية والميكانيكية والهيدروليكية في تطبيقات لوحات التوزيع والأتمتة الصناعية ومحطات معالجة المياه والصناعات البحرية وحقول النفط بالإمارات والشرق الأوسط وآسيا الوسطى وأفريقيا."
                : company.description}
            </p>
            <Link href={`/${locale}/about`} className="btn-secondary inline-flex">
              {dict.company.learnMore}
            </Link>
          </div>

          {/* Facts */}
          <div className={`${isRtl ? "lg:col-start-1" : ""}`}>
            <div className="grid grid-cols-1 gap-4">
              {facts.map((fact, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-5 p-5 bg-[#f0f9ff] border border-[#bae6fd] rounded card-industrial ${isRtl ? "flex-row-reverse text-right" : ""}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-600 rounded flex items-center justify-center">
                    <fact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-[#0c1a2e]">{fact.label}</div>
                    <div className="text-sm text-slate-500">{fact.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage regions */}
            <div className={`mt-4 flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
              {company.coverageRegions.map((r) => (
                <span
                  key={r}
                  className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
