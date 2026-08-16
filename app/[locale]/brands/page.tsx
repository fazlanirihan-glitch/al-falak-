import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import { brands } from "@/data/brands";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function BrandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";

  // Only show named brands (not generic sliders) in the main grid
  const namedBrands = brands.filter((b) => !b.id.startsWith("brand-"));
  const allBrands = brands;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#e0f2fe] py-14 lg:py-20">
        <div className="container-site">
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.brands.tag}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-[#0c1a2e] mt-3">
              {dict.brands.heading}
            </h1>
            <p className="text-slate-600 mt-3 max-w-lg">{dict.brands.sub}</p>
          </div>
        </div>
      </div>

      {/* Named Brands Grid */}
      <section className="py-14 lg:py-20">
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {namedBrands.map((brand) => (
              <div
                key={brand.id}
                className="card-industrial p-6 flex flex-col items-center gap-3 group"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="160px"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-[#0c1a2e]">{brand.name}</p>
                  <p className="text-xs text-slate-500">{brand.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#f0f9ff]">
        <div className="container-site text-center">
          <h3 className="font-display text-2xl font-bold text-[#0c1a2e] mb-3">
            {locale === "ar" ? "هل تبحث عن علامة تجارية محددة؟" : "Looking for a specific brand?"}
          </h3>
          <p className="text-slate-600 mb-5">
            {locale === "ar" ? "تواصل معنا وسنساعدك." : "Contact us and we will help you."}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary inline-flex">
            {dict.nav.enquireNow}
          </Link>
        </div>
      </section>
    </div>
  );
}
