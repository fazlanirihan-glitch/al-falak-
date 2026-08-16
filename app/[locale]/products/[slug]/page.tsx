import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { company } from "@/data/company";

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

  // Related products (same category, exclude current)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#f0f9ff] border-b border-sky-100 py-3">
        <div className="container-site">
          <nav className={`flex items-center gap-2 text-xs text-slate-500 ${isRtl ? "flex-row-reverse" : ""}`} aria-label="Breadcrumb">
            <Link href={`/${locale}`} className="hover:text-sky-600">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
            <span>/</span>
            <Link href={`/${locale}/products`} className="hover:text-sky-600">{dict.nav.products}</Link>
            <span>/</span>
            <span className="text-sky-600 font-semibold">{locale === "ar" ? product.nameAr : product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-10 lg:py-14">
        <div className="container-site">
          <Link
            href={`/${locale}/products`}
            className={`inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-800 font-semibold mb-6 ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <Arrow className="w-4 h-4" />
            {dict.common.back}
          </Link>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${isRtl ? "lg:grid-flow-dense" : ""}`}>
            {/* Image */}
            <div className={`${isRtl ? "lg:col-start-2" : ""}`}>
              <div className="relative h-80 lg:h-96 rounded overflow-hidden bg-sky-50 border border-sky-100">
                <Image
                  src={product.image}
                  alt={locale === "ar" ? product.nameAr : product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className={`space-y-4 ${isRtl ? "text-right lg:col-start-1 lg:row-start-1" : ""}`}>
              <div>
                <Link
                  href={`/${locale}/products?category=${product.category}`}
                  className="section-tag"
                >
                  {locale === "ar" ? cat?.nameAr : cat?.name}
                </Link>
              </div>

              <h1 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] leading-tight">
                {locale === "ar" ? product.nameAr : product.name}
              </h1>

              <p className="text-slate-600 leading-relaxed">
                {locale === "ar" ? product.descriptionAr : product.description}
              </p>

              {/* Specs */}
              {product.specs && product.specs.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wide text-slate-500">
                    {locale === "ar" ? "المواصف" : "Specifications"}
                  </h3>
                  <div className="divide-y divide-sky-100 border border-sky-100 rounded overflow-hidden">
                    {product.specs.map((spec, i) => (
                      <div key={i} className={`flex items-center justify-between py-2.5 px-4 bg-white text-sm ${isRtl ? "flex-row-reverse" : ""}`}>
                        <span className="text-slate-500 font-medium">{locale === "ar" && spec.keyAr ? spec.keyAr : spec.key}</span>
                        <span className="font-bold text-[#0c1a2e] ltr-always" dir="ltr">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className={`pt-3 flex flex-wrap gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {dict.common.enquireNow}
                </Link>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="btn-secondary ltr-always"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-10 bg-[#f0f9ff] border-t border-sky-100">
          <div className="container-site">
            <h2 className={`font-display text-2xl font-bold text-[#0c1a2e] mb-6 ${isRtl ? "text-right" : ""}`}>
              {dict.common.relatedProducts}
            </h2>
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
                      alt={locale === "ar" ? rel.nameAr : rel.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className={`p-3 ${isRtl ? "text-right" : ""}`}>
                    <h3 className="font-display font-bold text-xs text-[#0c1a2e] leading-tight group-hover:text-sky-600">
                      {locale === "ar" ? rel.nameAr : rel.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
