import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { brands } from "@/data/brands";

interface BrandMarqueeProps {
  locale: string;
  dict: Dictionary;
}

export default function BrandMarquee({ locale, dict }: BrandMarqueeProps) {
  const isRtl = locale === "ar";
  // Duplicate brands for seamless loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-sky-100 overflow-hidden">
      <div className="container-site mb-8">
        <div className={`text-center`}>
          <span className="section-tag">{dict.brands.tag}</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2">
            {dict.brands.heading}
          </h2>
          <p className="text-slate-600 mt-2 text-sm">{dict.brands.sub}</p>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className={`absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none ${isRtl ? "left-auto right-0 from-transparent to-white bg-gradient-to-l" : ""}`} />
        <div className={`absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none ${isRtl ? "right-auto left-0 from-transparent to-white bg-gradient-to-r" : ""}`} />

        <div className="marquee-track">
          {marqueeBrands.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
              style={{ width: "140px", height: "64px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  sizes="140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="container-site mt-8 text-center">
        <Link
          href={`/${locale}/brands`}
          className="btn-secondary inline-flex text-sm"
        >
          {dict.brands.viewAll}
        </Link>
      </div>
    </section>
  );
}
