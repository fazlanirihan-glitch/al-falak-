"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, ArrowLeft, SlidersHorizontal, RotateCcw, Tag } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { products, type Product } from "@/data/products";
import { categories } from "@/data/categories";

// Subcategory label maps per category
const subcategoryLabels: Record<string, Record<string, { en: string; ar: string }>> = {
  pneumatic: {
    "cylinders":      { en: "Cylinders & Actuators", ar: "أسطوانات ومشغلات" },
    "valves":         { en: "Valves",                 ar: "الصمامات" },
    "air-preparation":{ en: "Air Preparation",        ar: "تجهيز الهواء" },
    "vacuum":         { en: "Vacuum",                 ar: "التفريغ" },
    "fittings":       { en: "Fittings & Hoses",       ar: "وصلات وخراطيم" },
    "pumps":          { en: "Pumps",                  ar: "المضخات" },
    "accessories":    { en: "Accessories",            ar: "الملحقات" },
  },
  hydraulic: {
    "valves-pumps":   { en: "Valves & Pumps",         ar: "صمامات ومضخات" },
    "cylinders":      { en: "Cylinders",              ar: "الأسطوانات" },
    "filtration":     { en: "Filtration",             ar: "الترشيح" },
    "hoses":          { en: "Hoses & Fittings",       ar: "خراطيم ووصلات" },
  },
  electrical: {
    "sensors":        { en: "Sensors",                ar: "الحساسات" },
    "instrumentation":{ en: "Instrumentation",        ar: "الأجهزة" },
    "control":        { en: "Control Components",     ar: "مكونات التحكم" },
    "switchgear":     { en: "Switchgear",             ar: "معدات التبديل" },
    "safety":         { en: "Safety Devices",         ar: "أجهزة السلامة" },
    "drives":         { en: "Drives & Inverters",     ar: "المحركات والعواكس" },
  },
  mechanical: {
    "gearboxes":      { en: "Gearboxes & Drives",     ar: "علب تروس ومحركات" },
    "springs":        { en: "Springs & Dampers",      ar: "نوابض ومخمدات" },
    "chains":         { en: "Chains & Sprockets",     ar: "سلاسل وتروس" },
    "drives":         { en: "Couplings & Belts",      ar: "تزاوجات وأحزمة" },
    "linear-motion":  { en: "Linear Motion",          ar: "الحركة الخطية" },
  },
  "conveyor-bakery": {
    "conveyor-chains":     { en: "Conveyor Chains",  ar: "سلاسل الناقل" },
    "conveyor-components": { en: "Conveyor Parts",   ar: "قطع الناقل" },
    "bakery":              { en: "Bakery Spares",     ar: "قطع المخابز" },
  },
};

interface ProductsListProps {
  locale: string;
  initialCategory?: string;
}

export default function ProductsList({ locale, initialCategory = "all" }: ProductsListProps) {
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Category tabs
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

  // Available subcategories for active category
  const subcategoryTabs = useMemo(() => {
    if (activeCategory === "all") return [];
    const catProducts = products.filter((p) => p.category === activeCategory);
    const subs = Array.from(new Set(catProducts.map((p) => p.subcategory).filter(Boolean))) as string[];
    const labels = subcategoryLabels[activeCategory] || {};
    return subs.map((sub) => ({
      id: sub,
      name: labels[sub]?.en ?? sub,
      nameAr: labels[sub]?.ar ?? sub,
      count: catProducts.filter((p) => p.subcategory === sub).length,
    }));
  }, [activeCategory]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      if (!matchesCategory) return false;

      const matchesSub = activeSubcategory === "all" || p.subcategory === activeSubcategory;
      if (!matchesSub) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q) || p.nameAr.toLowerCase().includes(q);
      const matchDesc = (p.description ?? "").toLowerCase().includes(q) ||
        (p.descriptionAr ?? "").toLowerCase().includes(q);
      const matchBrand = (p.brand ?? "").toLowerCase().includes(q) ||
        (p.brands ?? []).some((b) => b.toLowerCase().includes(q));
      const matchSubcat = (p.subcategory ?? "").toLowerCase().includes(q);
      const matchSpecs = p.specs?.some(
        (s) => s.key.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
      );
      return matchName || matchDesc || Boolean(matchBrand) || matchSubcat || Boolean(matchSpecs);
    });
  }, [activeCategory, activeSubcategory, searchQuery]);

  function handleCategoryChange(catId: string) {
    setActiveCategory(catId);
    setActiveSubcategory("all");
  }

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

      {/* Control Bar */}
      <section className="py-6 bg-[#f0f9ff] border-b border-[#bae6fd] sticky top-0 z-20 shadow-sm">
        <div className="container-site">
          {/* Search + count row */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
            {/* Live Search */}
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-3.5" : "left-3.5"} w-4 h-4 text-slate-400`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? "ابحث: فيستو، صمام، أسطوانة، تفريغ..." : "Search: Festo, valve, cylinder, vacuum..."}
                className={`w-full py-2.5 ${isRtl ? "pr-10 pl-10 text-right" : "pl-10 pr-10 text-left"} bg-white border border-[#bae6fd] rounded text-sm text-[#0c1a2e] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7]`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "left-3" : "right-3"} text-slate-400 hover:text-slate-600 transition-colors`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Count + Reset */}
            <div className={`flex items-center gap-3 text-xs sm:text-sm text-slate-600 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-bold text-[#0c1a2e]">
                {filteredProducts.length}&nbsp;
                {isRtl ? "منتج" : "Products"}
              </span>
              {(activeCategory !== "all" || activeSubcategory !== "all" || searchQuery) && (
                <button
                  onClick={() => { handleCategoryChange("all"); setSearchQuery(""); }}
                  className="inline-flex items-center gap-1 text-[#0284c7] hover:underline font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isRtl ? "إعادة ضبط" : "Reset"}</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className={`flex flex-wrap gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded border transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0284c7] text-white border-[#0284c7] shadow-sm"
                      : "bg-white text-slate-700 border-[#bae6fd] hover:bg-[#e0f2fe]"
                  }`}
                >
                  <span>{isRtl ? tab.nameAr : tab.name}</span>
                  <span className={`text-[11px] px-1.5 rounded-full font-mono leading-tight ${
                    isActive ? "bg-white/20 text-white" : "bg-[#e0f2fe] text-[#0284c7]"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Subcategory Chips (shown when a category is selected) */}
          {subcategoryTabs.length > 0 && (
            <div className={`flex flex-wrap gap-2 mt-3 pt-3 border-t border-[#bae6fd] ${isRtl ? "flex-row-reverse" : ""}`}>
              <button
                onClick={() => setActiveSubcategory("all")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                  activeSubcategory === "all"
                    ? "bg-[#0c1a2e] text-white border-[#0c1a2e]"
                    : "bg-white text-slate-600 border-[#bae6fd] hover:bg-[#f0f9ff]"
                }`}
              >
                <Tag className="w-3 h-3" />
                {isRtl ? "الكل" : "All"}
              </button>
              {subcategoryTabs.map((sub) => {
                const isActive = activeSubcategory === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubcategory(sub.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                      isActive
                        ? "bg-[#0c1a2e] text-white border-[#0c1a2e]"
                        : "bg-white text-slate-600 border-[#bae6fd] hover:bg-[#f0f9ff]"
                    }`}
                  >
                    {isRtl ? sub.nameAr : sub.name}
                    <span className={`text-[10px] font-mono ${isActive ? "opacity-70" : "text-[#0284c7]"}`}>
                      {sub.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-10 bg-white min-h-[480px]">
        <div className="container-site">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => {
                const cat = categories.find((c) => c.id === product.category);
                const displayBrand = product.brand ?? (product.brands?.[0] ?? null);
                return (
                  <div
                    key={product.id}
                    className="bg-white border border-[#e0f2fe] rounded card-industrial overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Product Image */}
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
                      {/* Category badge */}
                      <span className={`absolute top-2.5 ${isRtl ? "left-2.5" : "right-2.5"} bg-white/90 backdrop-blur-sm text-[#0284c7] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm`}>
                        {isRtl ? cat?.nameAr : cat?.name}
                      </span>
                    </Link>

                    {/* Content */}
                    <div className={`p-4 flex-1 flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
                      {/* Brand tag */}
                      {displayBrand && (
                        <div className={`mb-1.5 ${isRtl ? "text-right" : ""}`}>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {displayBrand}
                          </span>
                        </div>
                      )}

                      <Link href={`/${locale}/products/${product.slug}`} className="block flex-1">
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#0c1a2e] group-hover:text-[#0284c7] transition-colors leading-tight mb-2">
                          {isRtl ? product.nameAr : product.name}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                        {isRtl ? product.descriptionAr : product.description}
                      </p>

                      {/* First spec pill */}
                      {product.specs && product.specs.length > 0 && (
                        <div className="mb-3">
                          <span className="text-[10px] bg-[#f0f9ff] border border-[#bae6fd] text-[#0284c7] px-2 py-0.5 rounded font-mono ltr-always" dir="ltr">
                            {product.specs[0].key}: {product.specs[0].value}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className={`px-4 pb-4 pt-0 flex items-center justify-between gap-2 border-t border-[#f0f9ff] mt-1 pt-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <Link
                        href={`/${locale}/products/${product.slug}`}
                        className="text-xs font-semibold text-slate-600 hover:text-[#0284c7] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>{isRtl ? "التفاصيل" : "Details"}</span>
                        <Arrow className="w-3 h-3" />
                      </Link>

                      <Link
                        href={`/${locale}/contact?product=${encodeURIComponent(isRtl ? product.nameAr : product.name)}`}
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
                  ? "يرجى تعديل معايير البحث أو اختيار فئة أخرى."
                  : "Try searching with a different keyword or reset the filters."}
              </p>
              <button
                onClick={() => { handleCategoryChange("all"); setSearchQuery(""); }}
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
