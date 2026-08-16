import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import { company } from "@/data/company";
import ContactForm from "@/components/shared/ContactForm";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <span className="section-tag">{dict.enquiry.tag}</span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-[#0c1a2e] mt-3">
              {dict.nav.contact}
            </h1>
            <p className="text-slate-600 mt-3 max-w-lg">{dict.enquiry.sub}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-14 lg:py-20">
        <div className="container-site">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 ${isRtl ? "lg:grid-flow-dense" : ""}`}>
            {/* Contact Info */}
            <div className={`lg:col-span-2 space-y-5 ${isRtl ? "text-right lg:col-start-4" : ""}`}>
              <h2 className="font-display text-2xl font-bold text-[#0c1a2e]">
                {dict.footer.contactUs}
              </h2>

              <div className="space-y-4">
                <a
                  href={`tel:${company.phoneRaw}`}
                  className={`flex items-center gap-4 p-4 bg-[#f0f9ff] border border-sky-200 rounded card-industrial group ${isRtl ? "flex-row-reverse" : ""}`}
                  dir="ltr"
                >
                  <div className="w-11 h-11 bg-sky-600 rounded flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <p className="text-xs text-slate-500 mb-0.5">{dict.enquiry.phone}</p>
                    <p className="font-bold text-[#0c1a2e] ltr-always">{company.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className={`flex items-center gap-4 p-4 bg-[#f0f9ff] border border-sky-200 rounded card-industrial group ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-11 h-11 bg-sky-600 rounded flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <p className="text-xs text-slate-500 mb-0.5">{dict.enquiry.email}</p>
                    <p className="font-bold text-[#0c1a2e]">{company.email}</p>
                  </div>
                </a>

                <div className={`flex items-center gap-4 p-4 bg-[#f0f9ff] border border-sky-200 rounded ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="w-11 h-11 bg-sky-600 rounded flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <p className="text-xs text-slate-500 mb-0.5">{locale === "ar" ? "الموقع" : "Location"}</p>
                    <p className="font-bold text-[#0c1a2e]">{company.location}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 bg-[#f0f9ff] border border-sky-200 rounded ${isRtl ? "flex-row-reverse" : ""}`}>
                  <div className="w-11 h-11 bg-sky-600 rounded flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className={isRtl ? "text-right" : ""}>
                    <p className="text-xs text-slate-500 mb-0.5">{locale === "ar" ? "ساعات الدعم" : "Support Hours"}</p>
                    <p className="font-bold text-[#0c1a2e]">{locale === "ar" ? "دعم على مدار الساعة" : "24/7 Support Available"}</p>
                  </div>
                </div>
              </div>

              <div className={`pt-2 ${isRtl ? "text-right" : ""}`}>
                <span className="inline-block text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded">
                  {company.iso}
                </span>
              </div>
            </div>

            {/* Form */}
            <div className={`lg:col-span-3 ${isRtl ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <ContactForm locale={locale} dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
