"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

function ProductsListInner({ locale }: { locale: string }) {
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const allTab = { id: "all", name: "All Products", nameAr: "جميع المنتجات" };
  const tabs = [allTab, ...categories];

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <div className="bg-[#e0f2fe] py-14 lg:py-20">
        <div className="container-site">
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.categories.tag}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-[#0c1a2e] mt-3">
              {dict.categories.heading}
            </h1>
            <p className="text-slate-600 mt-3">
              {locale === "ar"
                ? "تشكيلة شاملة من المعدات الهوائية والهيدروليكية والكهربائية والميكانيكية."
                : "Complete range of Pneumatic, Hydraulic, Electrical, and Mechanical equipment."}
            </p>
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <section className="py-10 lg:py-14">
        <div className="container-site">
          {/* Category Filter */}
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
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/${locale}/products/${product.slug}`}
                className="group card-industrial overflow-hidden"
              >
                <div className="relative h-48 bg-sky-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={locale === "ar" ? product.nameAr : product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className={`p-4 ${isRtl ? "text-right" : ""}`}>
                  <span className="text-xs text-sky-600 font-semibold uppercase tracking-wide">
                    {locale === "ar"
                      ? categories.find((c) => c.id === product.category)?.nameAr
                      : categories.find((c) => c.id === product.category)?.name}
                  </span>
                  <h3 className="font-display font-bold text-sm text-[#0c1a2e] mt-0.5 leading-tight group-hover:text-sky-600 transition-colors">
                    {locale === "ar" ? product.nameAr : product.name}
                  </h3>
                  <div className={`mt-2 flex items-center gap-1 text-xs font-semibold text-sky-600 ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
                    {dict.featured.viewDetails}
                    <Arrow className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <p>{locale === "ar" ? "لا توجد منتجات." : "No products found."}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsList({ locale }: { locale: string }) {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="text-sky-600 font-semibold">Loading products...</div></div>}>
      <ProductsListInner locale={locale} />
    </Suspense>
  );
}
