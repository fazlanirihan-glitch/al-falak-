import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { brands } from "@/data/brands";

interface BrandMarqueeProps {
  locale: string;
  dict: Dictionary;
}

export default function BrandMarquee({ locale, dict }: BrandMarqueeProps) {
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  // Filter only verified brands with genuine logos for marquee
  const logoBrands = brands.filter((b) => Boolean(b.logo));
  // Create seamless double array for infinite loop
  const marqueeBrands = [...logoBrands, ...logoBrands];

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-[#bae6fd] overflow-hidden">
      <div className="container-site mb-8">
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.brands.tag}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-1">
              {isRtl ? "شركاؤنا من كبار المصنعين العالميين" : "Authorized & Verified Global Brands"}
            </h2>
            <p className="text-slate-600 mt-1.5 text-sm max-w-xl">
              {isRtl
                ? "نوفر معدات أصلية من 25+ علامة تجارية صناعية رائدة في أوروبا واليابان والولايات المتحدة."
                : "Genuine industrial components sourced from 25+ global engineering leaders across Europe, Japan, and the USA."}
            </p>
          </div>

          <Link
            href={`/${locale}/brands`}
            className={`btn-secondary text-xs sm:text-sm py-2 px-4 shrink-0 inline-flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <span>{isRtl ? "تصفح جميع العلامات التجارية (25+)" : "View All Brands (25+)"}</span>
            <Arrow className="w-4 h-4 rtl-flip" />
          </Link>
        </div>
      </div>

      {/* Marquee Strip with Soft Gradient Fade */}
      <div className="marquee-container relative py-2">
        <div
          className={`absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none ${
            isRtl ? "left-auto right-0 from-transparent to-white bg-gradient-to-l" : ""
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none ${
            isRtl ? "right-auto left-0 from-transparent to-white bg-gradient-to-r" : ""
          }`}
        />

        <div className="marquee-track flex items-center">
          {marqueeBrands.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex-shrink-0 mx-4 sm:mx-6 px-4 py-3 bg-[#f0f9ff] border border-[#bae6fd] rounded card-industrial flex items-center justify-center group"
              style={{ width: "160px", height: "72px" }}
            >
              {brand.logo ? (
                <div className="relative w-full h-10">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    sizes="160px"
                  />
                </div>
              ) : (
                <span className="font-display font-bold text-sm text-[#0c1a2e] text-center">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
