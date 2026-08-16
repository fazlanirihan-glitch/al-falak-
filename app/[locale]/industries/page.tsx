import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import { industries } from "@/data/industries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#e0f2fe] py-14 lg:py-20">
        <div className="container-site">
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.industries.tag}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-[#0c1a2e] mt-3">
              {dict.industries.heading}
            </h1>
            <p className="text-slate-600 mt-3 max-w-lg">{dict.industries.sub}</p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="py-14 lg:py-20">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.id} className="card-industrial overflow-hidden group">
                <div className="relative h-56 bg-sky-50 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={locale === "ar" ? ind.nameAr : ind.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e]/70 to-transparent" />
                  <h3 className={`absolute bottom-0 ${isRtl ? "right-0" : "left-0"} p-5 font-display text-xl font-bold text-white`}>
                    {locale === "ar" ? ind.nameAr : ind.name}
                  </h3>
                </div>
                <div className={`p-5 ${isRtl ? "text-right" : ""}`}>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {locale === "ar" ? ind.descriptionAr : ind.description}
                  </p>
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
            {locale === "ar" ? "هل صناعتك ليست مذكورة هنا؟" : "Don't see your industry listed?"}
          </h3>
          <p className="text-slate-600 mb-5">
            {locale === "ar" ? "تواصل معنا لمعرفة كيف يمكننا مساعدتك." : "Contact us to find out how we can help your operation."}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary inline-flex">
            {dict.nav.enquireNow}
          </Link>
        </div>
      </section>
    </div>
  );
}
