import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { industries } from "@/data/industries";

interface IndustriesProps {
  locale: string;
  dict: Dictionary;
}

export default function Industries({ locale, dict }: IndustriesProps) {
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container-site">
        {/* Header */}
        <div className={`text-center mb-10`}>
          <span className="section-tag">{dict.industries.tag}</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2">
            {dict.industries.heading}
          </h2>
          <p className="text-slate-600 mt-2 max-w-lg mx-auto">{dict.industries.sub}</p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <div key={ind.id} className="group card-industrial overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-sky-50 overflow-hidden">
                <Image
                  src={ind.image}
                  alt={locale === "ar" ? ind.nameAr : ind.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/60 to-transparent" />
                <div className={`absolute bottom-0 ${isRtl ? "right-0" : "left-0"} p-4`}>
                  <h3 className="font-display font-bold text-lg text-white">
                    {locale === "ar" ? ind.nameAr : ind.name}
                  </h3>
                </div>
              </div>

              {/* Text */}
              <div className={`p-4 ${isRtl ? "text-right" : ""}`}>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {locale === "ar" ? ind.descriptionAr : ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/industries`}
            className="btn-secondary inline-flex"
          >
            {dict.industries.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
