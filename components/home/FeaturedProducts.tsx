"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Layers } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { featuredProducts, products } from "@/data/products";
import { categories } from "@/data/categories";

interface FeaturedProductsProps {
  locale: string;
  dict: Dictionary;
}

export default function FeaturedProducts({ locale, dict }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const allTab = { id: "all", name: "All Equipment", nameAr: "جميع المعدات" };
  const tabs = [allTab, ...categories];

  const filtered =
    activeCategory === "all"
      ? featuredProducts
      : products.filter((p) => p.category === activeCategory);

  const displayed = filtered.slice(0, 8);

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container-site">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="section-tag">{dict.featured.tag}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0c1a2e] mt-1.5">
              {isRtl ? "أبرز المعدات والأنظمة من كتالوج الفلك" : "Featured Engineering Systems & Spares"}
            </h2>
            <p className="text-slate-600 mt-1 text-sm max-w-xl">
              {isRtl
                ? "معدات أصلية متوفرة في مخازننا في دولة الإمارات مع مواصفات فنية دقيقة وضمان الجودة."
                : "Engineered solutions stocked in UAE warehouses, tested for high performance and durability."}
            </p>
          </div>

          <Link
            href={`/${locale}/products`}
            className={`btn-secondary text-xs sm:text-sm py-2 px-4 shrink-0 inline-flex items-center gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <span>{dict.featured.viewAll}</span>
            <Arrow className="w-4 h-4 rtl-flip" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className={`flex flex-wrap gap-2 mb-8 ${isRtl ? "flex-row-reverse" : ""}`}>
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-all ${
                  isActive
                    ? "bg-[#0284c7] text-white border-[#0284c7] shadow-xs"
                    : "bg-[#f0f9ff] text-slate-700 border-[#bae6fd] hover:bg-[#e0f2fe]"
                }`}
              >
                {isRtl && "nameAr" in tab ? tab.nameAr : tab.name}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((product) => {
            const cat = categories.find((c) => c.id === product.category);
            return (
              <div
                key={product.id}
                className="bg-white border border-[#bae6fd] rounded card-industrial overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="block relative h-48 bg-[#f0f9ff] overflow-hidden border-b border-[#e0f2fe]"
                  >
                    <Image
                      src={product.image}
                      alt={isRtl ? product.nameAr : product.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[#0284c7] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
                      {isRtl ? cat?.nameAr : cat?.name}
                    </span>
                  </Link>

                  {/* Info */}
                  <div className={`p-4 ${isRtl ? "text-right" : "text-left"}`}>
                    <Link href={`/${locale}/products/${product.slug}`}>
                      <h3 className="font-display font-bold text-lg text-[#0c1a2e] group-hover:text-[#0284c7] transition-colors leading-tight mb-1.5">
                        {isRtl ? product.nameAr : product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {isRtl ? product.descriptionAr : product.description}
                    </p>

                    {product.specs && product.specs.length > 0 && (
                      <div className="text-[11px] text-[#0284c7] font-mono bg-[#f0f9ff] px-2 py-0.5 rounded inline-block border border-[#bae6fd]/50 ltr-always" dir="ltr">
                        {product.specs[0].key}: {product.specs[0].value}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className={`p-4 pt-0 flex items-center justify-between gap-2 border-t border-[#f0f9ff] ${isRtl ? "flex-row-reverse" : ""}`}>
                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="text-xs font-semibold text-slate-700 hover:text-[#0284c7] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{isRtl ? "المواصفات" : "Details"}</span>
                    <Arrow className="w-3 h-3 rtl-flip" />
                  </Link>
                  <Link
                    href={`/${locale}/contact?product=${encodeURIComponent(product.name)}`}
                    className="btn-primary text-xs py-1.5 px-3.5"
                  >
                    <span>{isRtl ? "تسعير" : "Enquire"}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
