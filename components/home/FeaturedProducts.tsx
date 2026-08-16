"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
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

  const allTab = { id: "all", name: "All", nameAr: "الكل" };
  const tabs = [allTab, ...categories];

  const filtered =
    activeCategory === "all"
      ? featuredProducts
      : products.filter((p) => p.category === activeCategory && p.featured).concat(
          products.filter((p) => p.category === activeCategory && !p.featured).slice(0, 2)
        );

  const displayed = filtered.slice(0, 8);

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container-site">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.featured.tag}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2">
              {dict.featured.heading}
            </h2>
          </div>
          <Link
            href={`/${locale}/products`}
            className={`flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors whitespace-nowrap ${isRtl ? "flex-row-reverse" : ""}`}
          >
            {dict.featured.viewAll}
            <Arrow className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className={`flex flex-wrap gap-2 mb-8 ${isRtl ? "flex-row-reverse" : ""}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded transition-all ${
                activeCategory === tab.id
                  ? "bg-sky-600 text-white"
                  : "bg-sky-50 text-slate-700 border border-sky-200 hover:bg-sky-100"
              }`}
            >
              {locale === "ar" && "nameAr" in tab ? tab.nameAr : tab.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayed.map((product) => (
            <Link
              key={product.id}
              href={`/${locale}/products/${product.slug}`}
              className="group card-industrial overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 bg-sky-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={locale === "ar" ? product.nameAr : product.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className={`p-3 ${isRtl ? "text-right" : ""}`}>
                <span className="text-xs text-sky-600 font-semibold uppercase tracking-wide">
                  {locale === "ar"
                    ? categories.find((c) => c.id === product.category)?.nameAr
                    : categories.find((c) => c.id === product.category)?.name}
                </span>
                <h3 className="font-display font-bold text-sm text-[#0c1a2e] mt-0.5 leading-tight group-hover:text-sky-600 transition-colors line-clamp-2">
                  {locale === "ar" ? product.nameAr : product.name}
                </h3>
                <div
                  className={`mt-2 flex items-center gap-1 text-xs font-semibold text-sky-600 ${isRtl ? "flex-row-reverse justify-end" : ""}`}
                >
                  {dict.featured.enquire}
                  <Arrow className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {displayed.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p>{locale === "ar" ? "لا توجد منتجات في هذه الفئة." : "No products in this category yet."}</p>
          </div>
        )}
      </div>
    </section>
  );
}
