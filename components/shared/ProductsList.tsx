"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, ArrowLeft, SlidersHorizontal, RotateCcw, CheckCircle2, Shield } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { products, type Product } from "@/data/products";
import { categories } from "@/data/categories";

interface ProductsListProps {
  locale: string;
  initialCategory?: string;
}

export default function ProductsList({ locale, initialCategory = "all" }: ProductsListProps) {
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tabs = useMemo(() => {
    const allTab = {
      id: "all",
      name: "All Systems",
      nameAr: "جميع الأنظمة",
      count: products.length,
    };
    const categoryTabs = categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      nameAr: cat.nameAr,
      count: products.filter((p) => p.category === cat.id).length,
    }));
    return [allTab, ...categoryTabs];
  }, []);

  // Filter products by category and live search query
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q) || p.nameAr.includes(q);
      const matchDesc = p.description.toLowerCase().includes(q) || p.descriptionAr.includes(q);
      const matchSpecs = p.specs?.some(
        (s) => s.key.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
      );
      return matchName || matchDesc || Boolean(matchSpecs);
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryObj = categories.find((c) => c.id === activeCategory);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="bg-[#e0f2fe] border-b border-[#bae6fd] py-12 lg:py-16">
        <div className="container-site">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="section-tag">{dict.categories.tag}</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0c1a2e] mt-2">
              {isRtl ? "المعدات والأنظمة الصناعية" : "Industrial Products & Engineered Systems"}
            </h1>
            <p className="text-slate-600 mt-2 text-base sm:text-lg max-w-2xl">
              {isRtl
                ? "معدات أصلية متوافقة مع معايير الجودة العالمية ISO 9001:2015 لتطبيقات الأتمتة ولوحات التوزيع ومعالجة المياه والصناعات البحرية والمخابز."
                : "Genuine ISO 9001:2015 certified equipment for industrial automation, switchgear panels, water treatment, oil field marine, and food packaging."}
            </p>
          </div>
        </div>
      </div>

      {/* Control Bar: Search & Category Filter */}
      <section className="py-8 bg-[#f0f9ff] border-b border-[#bae6fd]">
        <div className="container-site">
          <div className={`flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${isRtl ? "md:flex-row-reverse" : ""}`}>
            {/* Live Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-3.5" : "left-3.5"} w-4 h-4 text-slate-400`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? "ابحث عن منتج، مواصفات، أو نظام..." : "Search products, part numbers, specs..."}
                className={`w-full py-2.5 ${isRtl ? "pr-10 pl-4 text-right" : "pl-10 pr-4 text-left"} bg-white border border-[#bae6fd] rounded text-sm text-[#0c1a2e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7]`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "left-3" : "right-3"} text-xs text-slate-400 hover:text-slate-600`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Results Count & Reset */}
            <div className={`flex items-center gap-3 text-xs sm:text-sm text-slate-600 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-semibold text-[#0c1a2e]">
                {filteredProducts.length} {isRtl ? "منتج معروض" : "Products Found"}
              </span>
              {(activeCategory !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center gap-1 text-[#0284c7] hover:underline font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isRtl ? "إعادة ضبط" : "Reset Filters"}</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className={`flex flex-wrap gap-2 mt-5 ${isRtl ? "flex-row-reverse" : ""}`}>
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded border transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0284c7] text-white border-[#0284c7] shadow-sm"
                      : "bg-white text-slate-700 border-[#bae6fd] hover:bg-[#e0f2fe]"
                  }`}
                >
                  <span>{isRtl ? tab.nameAr : tab.name}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-[#e0f2fe] text-[#0284c7]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12 bg-white min-h-[480px]">
        <div className="container-site">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const cat = categories.find((c) => c.id === product.category);
                return (
                  <div
                    key={product.id}
                    className="bg-white border border-[#bae6fd] rounded card-industrial overflow-hidden flex flex-col justify-between group"
                  >
                    <div>
                      {/* Product Image Area */}
                      <Link
                        href={`/${locale}/products/${product.slug}`}
                        className="block relative h-52 bg-[#f0f9ff] overflow-hidden border-b border-[#e0f2fe]"
                      >
                        <Image
                          src={product.image}
                          alt={isRtl ? product.nameAr : product.name}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[#0284c7] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                          {isRtl ? cat?.nameAr : cat?.name}
                        </span>
                      </Link>

                      {/* Content Area */}
                      <div className={`p-4 sm:p-5 ${isRtl ? "text-right" : "text-left"}`}>
                        <Link href={`/${locale}/products/${product.slug}`} className="block">
                          <h3 className="font-display font-bold text-lg sm:text-xl text-[#0c1a2e] group-hover:text-[#0284c7] transition-colors leading-tight mb-2">
                            {isRtl ? product.nameAr : product.name}
                          </h3>
                        </Link>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">
                          {isRtl ? product.descriptionAr : product.description}
                        </p>

                        {/* Specs Preview Pill if Available */}
                        {product.specs && product.specs.length > 0 && (
                          <div className="mb-4 pt-2 border-t border-[#f0f9ff]">
                            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
                              {isRtl ? "المواصفات الرئيسية:" : "Key Spec:"}
                            </div>
                            <div className="text-xs text-[#0284c7] font-mono bg-[#f0f9ff] px-2.5 py-1 rounded inline-block border border-[#bae6fd]/60 ltr-always" dir="ltr">
                              {product.specs[0].key}: {product.specs[0].value}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className={`p-4 pt-0 flex items-center justify-between gap-2 border-t border-[#f0f9ff] ${isRtl ? "flex-row-reverse" : ""}`}>
                      <Link
                        href={`/${locale}/products/${product.slug}`}
                        className="text-xs font-semibold text-slate-700 hover:text-[#0284c7] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{isRtl ? "التفاصيل" : "Details"}</span>
                        <Arrow className="w-3 h-3 rtl-flip" />
                      </Link>

                      <Link
                        href={`/${locale}/contact?product=${encodeURIComponent(product.name)}`}
                        className="btn-primary text-xs py-1.5 px-3.5"
                      >
                        <span>{isRtl ? "طلب تسعير" : "Enquire"}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-4 bg-[#f0f9ff] rounded border border-[#bae6fd] max-w-xl mx-auto">
              <SlidersHorizontal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-xl text-[#0c1a2e] mb-1">
                {isRtl ? "لم يتم العثور على منتجات مطابقة" : "No Matching Products Found"}
              </h3>
              <p className="text-sm text-slate-600 mb-5">
                {isRtl
                  ? "يرجى تعديل معايير البحث أو اختيار فئة أخرى من القائمة."
                  : "Try searching with a different keyword or reset the category filters."}
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="btn-secondary text-sm inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isRtl ? "إعادة تعيين البحث" : "Reset All Filters"}</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
