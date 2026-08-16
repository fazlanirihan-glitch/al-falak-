import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { categories } from "@/data/categories";

interface ProductCategoriesProps {
  locale: string;
  dict: Dictionary;
}

export default function ProductCategories({ locale, dict }: ProductCategoriesProps) {
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-14 lg:py-20 bg-[#f0f9ff]">
      <div className="container-site">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.categories.tag}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2">
              {dict.categories.heading}
            </h2>
          </div>
          <Link
            href={`/${locale}/products`}
            className={`flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors whitespace-nowrap ${isRtl ? "flex-row-reverse" : ""}`}
          >
            {dict.categories.viewAll}
            <Arrow className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${locale}/products?category=${cat.id}`}
              className="group block card-industrial overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 bg-sky-50 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={locale === "ar" ? cat.nameAr : cat.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition-all duration-300" />
              </div>

              {/* Text */}
              <div className={`p-4 ${isRtl ? "text-right" : ""}`}>
                <h3 className="font-display font-bold text-base text-[#0c1a2e] mb-1 group-hover:text-sky-600 transition-colors">
                  {locale === "ar" ? cat.nameAr : cat.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {locale === "ar" ? cat.descriptionAr : cat.description}
                </p>
                <div className={`mt-3 flex items-center gap-1 text-xs font-semibold text-sky-600 ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
                  {dict.categories.viewProducts}
                  <Arrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
