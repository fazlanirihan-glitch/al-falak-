import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, BookOpen, CheckCircle2, Layers, Building2 } from "lucide-react";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { company } from "@/data/company";

// Subcategory label map (duplicated from ProductsList for server-side use)
const subcategoryLabels: Record<string, { en: string; ar: string }> = {
  "cylinders":           { en: "Cylinders & Actuators",  ar: "أسطوانات ومشغلات" },
  "valves":              { en: "Valves",                  ar: "الصمامات" },
  "air-preparation":     { en: "Air Preparation",         ar: "تجهيز الهواء" },
  "vacuum":              { en: "Vacuum",                  ar: "التفريغ" },
  "fittings":            { en: "Fittings & Hoses",        ar: "وصلات وخراطيم" },
  "pumps":               { en: "Pumps",                   ar: "المضخات" },
  "accessories":         { en: "Accessories",             ar: "الملحقات" },
  "valves-pumps":        { en: "Valves & Pumps",          ar: "صمامات ومضخات" },
  "filtration":          { en: "Filtration",              ar: "الترشيح" },
  "hoses":               { en: "Hoses & Fittings",        ar: "خراطيم ووصلات" },
  "sensors":             { en: "Sensors",                 ar: "الحساسات" },
  "instrumentation":     { en: "Instrumentation",         ar: "الأجهزة" },
  "control":             { en: "Control Components",      ar: "مكونات التحكم" },
  "switchgear":          { en: "Switchgear",              ar: "معدات التبديل" },
  "safety":              { en: "Safety Devices",          ar: "أجهزة السلامة" },
  "drives":              { en: "Drives & Inverters",      ar: "المحركات والعواكس" },
  "gearboxes":           { en: "Gearboxes & Drives",      ar: "علب تروس ومحركات" },
  "springs":             { en: "Springs & Dampers",       ar: "نوابض ومخمدات" },
  "chains":              { en: "Chains & Sprockets",      ar: "سلاسل وتروس" },
  "linear-motion":       { en: "Linear Motion",           ar: "الحركة الخطية" },
  "conveyor-chains":     { en: "Conveyor Chains",         ar: "سلاسل الناقل" },
  "conveyor-components": { en: "Conveyor Components",     ar: "مكونات الناقل" },
  "bakery":              { en: "Bakery Equipment",        ar: "معدات المخابز" },
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const product of products) {
      params.push({ locale, slug: product.slug });
    }
  }
  return params;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowRight : ArrowLeft;
  const cat = categories.find((c) => c.id === product.category);
  const subLabel = product.subcategory ? subcategoryLabels[product.subcategory] : null;

  // Related products: same category, different product
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Get brand data for associated brands
  const allBrandNames = product.brands ?? (product.brand ? [product.brand] : []);
  const brandRecords = allBrandNames
    .map((name) => brands.find((b) => b.name.toLowerCase() === name.toLowerCase()))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#f0f9ff] border-b border-sky-100 py-3">
        <div className="container-site">
          <nav
            className={`flex items-center gap-2 text-xs text-slate-500 flex-wrap ${isRtl ? "flex-row-reverse" : ""}`}
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}`} className="hover:text-sky-600">
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/products`} className="hover:text-sky-600">
              {dict.nav.products}
            </Link>
            {cat && (
              <>
                <span>/</span>
                <Link
                  href={`/${locale}/products?category=${cat.id}`}
                  className="hover:text-sky-600"
                >
                  {isRtl ? cat.nameAr : cat.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-sky-600 font-semibold truncate max-w-[180px]">
              {isRtl ? product.nameAr : product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-10 lg:py-14">
        <div className="container-site">
          <Link
            href={`/${locale}/products`}
            className={`inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-800 font-semibold mb-6 transition-colors ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <Arrow className="w-4 h-4" />
            {dict.common.back}
          </Link>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${isRtl ? "lg:grid-flow-dense" : ""}`}>
            {/* Product Image */}
            <div className={`${isRtl ? "lg:col-start-2" : ""}`}>
              <div className="relative h-80 lg:h-[420px] rounded-lg overflow-hidden bg-sky-50 border border-sky-100 shadow-sm">
                <Image
                  src={product.image}
                  alt={isRtl ? product.nameAr : product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Brand logos strip */}
              {brandRecords.length > 0 && (
                <div className={`flex flex-wrap gap-3 mt-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  {brandRecords.map((b) => b && (
                    <div
                      key={b.id}
                      className="bg-white border border-sky-100 rounded px-3 py-2 flex items-center gap-2 shadow-xs"
                    >
                      {b.logo ? (
                        <div className="relative w-16 h-8">
                          <Image src={b.logo} alt={b.name} fill className="object-contain" sizes="64px" />
                        </div>
                      ) : (
                        <span className="text-xs font-bold text-slate-700">{b.name}</span>
                      )}
                      {b.country && (
                        <span className="text-[10px] text-slate-400 font-medium">{b.country}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* If no brand records but brand name is present */}
              {brandRecords.length === 0 && allBrandNames.length > 0 && (
                <div className={`flex flex-wrap gap-2 mt-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                  {allBrandNames.map((name) => (
                    <span
                      key={name}
                      className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className={`space-y-5 ${isRtl ? "text-right lg:col-start-1 lg:row-start-1" : ""}`}>
              {/* Category + Subcategory Tags */}
              <div className={`flex flex-wrap gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                {cat && (
                  <Link
                    href={`/${locale}/products?category=${cat.id}`}
                    className="section-tag"
                  >
                    {isRtl ? cat.nameAr : cat.name}
                  </Link>
                )}
                {subLabel && (
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-3 py-0.5 rounded-sm">
                    {isRtl ? subLabel.ar : subLabel.en}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] leading-tight">
                {isRtl ? product.nameAr : product.name}
              </h1>

              {/* Available Brands section */}
              {allBrandNames.length > 0 && (
                <div className={`flex items-start gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <Building2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-400 block mb-1">
                      {isRtl ? "العلامات المتوفرة" : "Available Brands"}
                    </span>
                    <div className={`flex flex-wrap gap-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
                      {allBrandNames.map((name, idx) => {
                        const brandRec = brands.find((b) => b.name.toLowerCase() === name.toLowerCase());
                        return (
                          <span key={name} className="inline-flex items-center gap-1.5">
                            {idx > 0 && <span className="text-slate-300">·</span>}
                            {brandRec ? (
                              <Link
                                href={`/${locale}/brands`}
                                className="text-xs font-semibold text-[#0284c7] hover:underline"
                              >
                                {name}
                              </Link>
                            ) : (
                              <span className="text-xs font-semibold text-[#0284c7]">{name}</span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {isRtl ? product.descriptionAr : product.description}
              </p>

              {/* Key Features */}
              {(isRtl ? product.featuresAr : product.features) && (
                <div>
                  <div className={`flex items-center gap-2 mb-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Layers className="w-4 h-4 text-[#0284c7]" />
                    <h3 className="font-display font-bold text-sm uppercase tracking-wide text-[#0c1a2e]">
                      {isRtl ? "الميزات الرئيسية" : "Key Features"}
                    </h3>
                  </div>
                  <ul className={`space-y-1.5 ${isRtl ? "text-right" : ""}`}>
                    {(isRtl ? (product.featuresAr ?? product.features) : product.features)!.map((feat, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm text-slate-700 ${isRtl ? "flex-row-reverse" : ""}`}>
                        <CheckCircle2 className="w-4 h-4 text-[#0284c7] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications */}
              {product.specs && product.specs.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide text-slate-500 mb-2">
                    {isRtl ? "المواصفات" : "Specifications"}
                  </h3>
                  <div className="divide-y divide-sky-100 border border-sky-100 rounded overflow-hidden">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between py-2.5 px-4 bg-white text-sm ${isRtl ? "flex-row-reverse" : ""}`}
                      >
                        <span className="text-slate-500 font-medium">
                          {isRtl && spec.keyAr ? spec.keyAr : spec.key}
                        </span>
                        <span className="font-bold text-[#0c1a2e] ltr-always" dir="ltr">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className={`pt-2 flex flex-wrap gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                <Link
                  href={`/${locale}/contact?product=${encodeURIComponent(isRtl ? product.nameAr : product.name)}`}
                  className="btn-primary"
                >
                  {dict.common.enquireNow}
                </Link>
                <a href={`tel:${company.phoneRaw}`} className="btn-secondary ltr-always" dir="ltr">
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </a>
                <Link href={`/${locale}/catalogue`} className="btn-catalogue">
                  <BookOpen className="w-4 h-4" />
                  {isRtl ? "الكتالوج التقني" : "View Catalogue"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      {(isRtl ? product.applicationsAr : product.applications) && (
        <section className="py-8 bg-[#f0f9ff] border-t border-sky-100">
          <div className="container-site">
            <h2 className={`font-display text-xl font-bold text-[#0c1a2e] mb-5 ${isRtl ? "text-right" : ""}`}>
              {isRtl ? "مجالات التطبيق" : "Applications"}
            </h2>
            <div className={`flex flex-wrap gap-2.5 ${isRtl ? "flex-row-reverse" : ""}`}>
              {(isRtl ? (product.applicationsAr ?? product.applications) : product.applications)!.map((app, i) => (
                <span
                  key={i}
                  className="inline-block bg-white border border-[#bae6fd] text-[#0284c7] text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-10 bg-white border-t border-sky-100">
          <div className="container-site">
            <div className={`flex items-center justify-between mb-6 ${isRtl ? "flex-row-reverse" : ""}`}>
              <h2 className={`font-display text-2xl font-bold text-[#0c1a2e] ${isRtl ? "text-right" : ""}`}>
                {dict.common.relatedProducts}
              </h2>
              <Link
                href={`/${locale}/products?category=${product.category}`}
                className="text-sm text-[#0284c7] font-semibold hover:underline inline-flex items-center gap-1"
              >
                {isRtl ? "عرض الكل" : "View All"}
                {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/${locale}/products/${rel.slug}`}
                  className="group card-industrial overflow-hidden"
                >
                  <div className="relative h-36 bg-sky-50 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={isRtl ? rel.nameAr : rel.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className={`p-3 ${isRtl ? "text-right" : ""}`}>
                    {rel.brand && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {rel.brand}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xs text-[#0c1a2e] leading-tight group-hover:text-sky-600 transition-colors">
                      {isRtl ? rel.nameAr : rel.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry CTA Banner */}
      <section className="py-10 bg-[#e0f2fe] border-t border-sky-200">
        <div className="container-site">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 ${isRtl ? "sm:flex-row-reverse text-right" : ""}`}>
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0c1a2e]">
                {isRtl ? "هل تحتاج سعراً أو استشارة فنية؟" : "Need a Quote or Technical Advice?"}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {isRtl
                  ? "فريقنا الفني جاهز للمساعدة في الاختيار والمواصفات والتسعير."
                  : "Our technical team is ready to help with selection, specifications, and pricing."}
              </p>
            </div>
            <div className={`flex flex-wrap gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <Link
                href={`/${locale}/contact?product=${encodeURIComponent(isRtl ? product.nameAr : product.name)}`}
                className="btn-primary whitespace-nowrap"
              >
                {dict.common.enquireNow}
              </Link>
              <Link href={`/${locale}/catalogue`} className="btn-catalogue whitespace-nowrap">
                <BookOpen className="w-4 h-4" />
                {isRtl ? "الكتالوج التقني" : "View Catalogue"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
