import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Globe, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import { company } from "@/data/company";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-[#e0f2fe] py-14 lg:py-20">
        <div className="container-site">
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{locale === "ar" ? "عن الفلك" : "About Us"}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-[#0c1a2e] mt-3 leading-tight">
              {locale === "ar" ? "من نحن" : "About AL FALAK"}
            </h1>
            <p className="text-slate-600 mt-3 text-lg max-w-xl">
              {locale === "ar"
                ? "مورد ومخزن رئيسي معتمد بمعيار ISO 9001:2015 للمعدات الصناعية في الإمارات والشرق الأوسط."
                : "ISO 9001:2015 certified major supplier and stockist for industrial equipment across the UAE and the wider region."}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-14 lg:py-20">
        <div className="container-site">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRtl ? "lg:grid-flow-dense" : ""}`}>
            <div className={isRtl ? "text-right lg:col-start-2" : ""}>
              <span className="section-tag">{locale === "ar" ? "شركتنا" : "Our Company"}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2 mb-4">
                {locale === "ar" ? "AL FALAK INDUSTRIAL EQUIP. TR. LLC." : "AL FALAK INDUSTRIAL EQUIP. TR. LLC."}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {locale === "ar"
                  ? "الفلك للمعدات الصناعية شركة معتمدة بمعيار إدارة الجودة ISO 9001:2015، وهي مورد ومخزن رئيسي للمعدات الهوائية والكهربائية والميكانيكية والهيدروليكية في تطبيقات لوحات التوزيع والأتمتة الصناعية ومحطات معالجة المياه وحقول النفط البحرية والصناعات الأخرى في الإمارات والشرق الأوسط وآسيا الوسطى وأفريقيا."
                  : company.description}
              </p>
              <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}>
                {company.coverageRegions.map((r) => (
                  <span key={r} className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${isRtl ? "lg:col-start-1" : ""}`}>
              <div className="relative h-72 lg:h-80 rounded overflow-hidden shadow-lg">
                <Image
                  src="/catalog/page_02.webp"
                  alt="AL FALAK About"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-[#f0f9ff]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`bg-white border border-sky-200 rounded p-7 card-industrial ${isRtl ? "text-right" : ""}`}>
              <span className="section-tag">{locale === "ar" ? "مهمتنا" : "Our Mission"}</span>
              <h3 className="font-display text-2xl font-bold text-[#0c1a2e] mt-3 mb-3">
                {locale === "ar" ? "رسالتنا" : "Mission Statement"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {locale === "ar"
                  ? "أن نكون المورد الرائد للمكائن والمعدات المتطورة، ودفع تقدم الصناعات من خلال تقديم حلول تعزز كفاءة التشغيل والاستدامة والنجاح على المدى البعيد."
                  : company.mission}
              </p>
            </div>
            <div className={`bg-white border border-sky-200 rounded p-7 card-industrial ${isRtl ? "text-right" : ""}`}>
              <span className="section-tag">{locale === "ar" ? "رؤيتنا" : "Our Vision"}</span>
              <h3 className="font-display text-2xl font-bold text-[#0c1a2e] mt-3 mb-3">
                {locale === "ar" ? "رؤيتنا" : "Vision Statement"}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {locale === "ar"
                  ? "رؤيتنا هي تزويد الشركات بحلول مكائن موثوقة ومبتكرة لا تلبي احتياجاتها الفورية فحسب بل تدعم نموها وتطورها أيضاً. نحن ملتزمون بتقديم جودة استثنائية وخدمة عملاء لا مثيل لها وعلاقات دائمة مبنية على الثقة والنزاهة."
                  : company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-white">
        <div className="container-site text-center">
          <h3 className="font-display text-2xl font-bold text-[#0c1a2e] mb-4">
            {locale === "ar" ? "هل تحتاج إلى معدات صناعية؟" : "Need Industrial Equipment?"}
          </h3>
          <p className="text-slate-600 mb-6">
            {locale === "ar" ? "اتصل بفريقنا للحصول على عرض سعر أو إرسال استفسار." : "Contact our team for a quote or to send an enquiry."}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary inline-flex">
            {dict.nav.enquireNow}
          </Link>
        </div>
      </section>
    </div>
  );
}
