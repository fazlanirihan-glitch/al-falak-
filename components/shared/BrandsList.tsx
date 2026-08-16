"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, RotateCcw, ArrowRight, ArrowLeft, Building, Globe } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { brands, type Brand } from "@/data/brands";

interface BrandsListProps {
  locale: string;
}

export default function BrandsList({ locale }: BrandsListProps) {
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Pneumatics", "Hydraulics", "Electrical", "Mechanical", "Automation", "Vacuum", "Safety"];

  const filteredBrands = useMemo(() => {
    return brands.filter((b) => {
      const matchesCategory = activeCategory === "All" || b.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchName = b.name.toLowerCase().includes(q);
      const matchCat = b.category.toLowerCase().includes(q);
      const matchDesc = b.description.toLowerCase().includes(q) || b.descriptionAr.includes(q);
      return matchName || matchCat || matchDesc;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="bg-[#e0f2fe] border-b border-[#bae6fd] py-12 lg:py-16">
        <div className="container-site">
          <div className={isRtl ? "text-right" : "text-left"}>
            <span className="section-tag">{dict.brands.tag}</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0c1a2e] mt-2">
              {isRtl ? "العلامات التجارية العالمية المعتمدة" : "Global Engineering Brand Partners"}
            </h1>
            <p className="text-slate-600 mt-2 text-base sm:text-lg max-w-2xl">
              {isRtl
                ? "نوفر قطع غيار ومعدات أصلية معتمدة من 25+ مصنعاً عالمياً في ألمانيا وإيطاليا واليابان والولايات المتحدة والسويد."
                : "Authorized stockist & supplier of genuine components from 25+ world-class manufacturers in Germany, Italy, Japan, USA, and Sweden."}
            </p>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-[#f0f9ff] border-b border-[#bae6fd]">
        <div className="container-site">
          <div className={`flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${isRtl ? "md:flex-row-reverse" : ""}`}>
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? "right-3.5" : "left-3.5"} w-4 h-4 text-slate-400`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? "ابحث عن علامة تجارية أو نظام..." : "Search brands, engineering categories..."}
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

            {/* Results Count */}
            <div className={`flex items-center gap-3 text-xs sm:text-sm text-slate-600 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-semibold text-[#0c1a2e]">
                {filteredBrands.length} {isRtl ? "علامة تجارية" : "Brands Found"}
              </span>
              {(activeCategory !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory("All");
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

          {/* Category Tabs */}
          <div className={`flex flex-wrap gap-2 mt-5 ${isRtl ? "flex-row-reverse" : ""}`}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const catCount = cat === "All" ? brands.length : brands.filter((b) => b.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#0284c7] text-white border-[#0284c7] shadow-sm"
                      : "bg-white text-slate-700 border-[#bae6fd] hover:bg-[#e0f2fe]"
                  }`}
                >
                  <span>
                    {isRtl
                      ? cat === "All" ? "الكل"
                        : cat === "Pneumatics" ? "نيوماتيك"
                        : cat === "Hydraulics" ? "هيدروليك"
                        : cat === "Electrical" ? "كهرباء"
                        : cat === "Mechanical" ? "ميكانيك"
                        : cat === "Automation" ? "أتمتة"
                        : cat === "Vacuum" ? "تفريغ هوائي"
                        : "أمان صناعي"
                      : cat}
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-[#e0f2fe] text-[#0284c7]"
                    }`}
                  >
                    {catCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-12 bg-white min-h-[480px]">
        <div className="container-site">
          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white border border-[#bae6fd] rounded card-industrial p-5 flex flex-col justify-between group hover:border-[#0284c7]"
                >
                  <div>
                    {/* Logo or Typographic Badge Area */}
                    <div className="h-20 bg-[#f0f9ff] rounded border border-[#e0f2fe] p-3 flex items-center justify-center mb-4 relative overflow-hidden">
                      {brand.logo ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={brand.logo}
                            alt={brand.name}
                            fill
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            sizes="200px"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <span className="font-display font-bold text-lg text-[#0c1a2e] group-hover:text-[#0284c7] transition-colors">
                            {brand.name}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Brand Name & Category */}
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-display font-bold text-lg text-[#0c1a2e] group-hover:text-[#0284c7] transition-colors leading-tight">
                          {brand.name}
                        </h3>
                        {brand.country && (
                          <span className="text-[10px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <Globe className="w-2.5 h-2.5 text-slate-400" />
                            {brand.country}
                          </span>
                        )}
                      </div>

                      <span className="inline-block text-[11px] font-bold text-[#0284c7] uppercase tracking-wider bg-[#e0f2fe] px-2 py-0.5 rounded mb-2">
                        {brand.category}
                      </span>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {isRtl ? brand.descriptionAr : brand.description}
                      </p>
                    </div>
                  </div>

                  {/* Enquiry Link */}
                  <div className={`mt-5 pt-3 border-t border-[#f0f9ff] flex items-center justify-between ${isRtl ? "flex-row-reverse" : ""}`}>
                    <span className="text-[11px] text-slate-400">
                      {isRtl ? "توريد أصلي معتمد" : "Verified Partner"}
                    </span>
                    <Link
                      href={`/${locale}/contact?product=${encodeURIComponent(brand.name)}`}
                      className="text-xs font-semibold text-[#0284c7] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{isRtl ? "طلب معدات" : "Enquire Brand"}</span>
                      <Arrow className="w-3 h-3 rtl-flip" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-[#f0f9ff] rounded border border-[#bae6fd] max-w-xl mx-auto">
              <Building className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-xl text-[#0c1a2e] mb-1">
                {isRtl ? "لم يتم العثور على علامة تجارية مطابقة" : "No Matching Brands Found"}
              </h3>
              <p className="text-sm text-slate-600 mb-5">
                {isRtl
                  ? "يرجى تجربة البحث باسم آخر أو إعادة ضبط الفئات."
                  : "Try searching with another name or reset category filters."}
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
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

      {/* Direct RFQ Callout */}
      <section className="py-12 bg-[#f0f9ff] border-t border-[#bae6fd]">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0c1a2e] mb-2">
            {isRtl ? "هل تبحث عن علامة تجارية أو قطعة غيار غير مدرجة؟" : "Looking for a Specific Brand or Specialized Part?"}
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            {isRtl
              ? "يتعامل فريقنا في الفلك مع شبكة توريد دولية واسعة لتأمين كافة متطلبات المشاريع والمصانع."
              : "Our international engineering procurement network allows us to source hard-to-find components directly from OEM manufacturers."}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary inline-flex text-sm py-2.5 px-6">
            {isRtl ? "تواصل مع قسم المبيعات" : "Contact Procurement Team"}
          </Link>
        </div>
      </section>
    </div>
  );
}
