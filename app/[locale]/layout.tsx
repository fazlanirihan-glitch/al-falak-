import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, getDir, getDictionary, type Locale } from "@/lib/i18n";
import { company } from "@/data/company";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: {
      default: isAr
        ? "الفلك للمعدات الصناعية | الإمارات"
        : "AL FALAK Industrial Equipment Trading LLC | UAE",
      template: isAr ? "%s | الفلك الإمارات" : "%s | AL FALAK UAE",
    },
    description: isAr
      ? "مورد ومخزن رئيسي معتمد ISO 9001:2015 للمعدات الهوائية والهيدروليكية والكهربائية والميكانيكية في الإمارات والشرق الأوسط وآسيا الوسطى وأفريقيا."
      : "ISO 9001:2015 certified major supplier & stockist for Pneumatic, Hydraulic, Electrical, and Mechanical equipment across the UAE, Middle East, Central Asia, and East Africa.",
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dir = getDir(locale as Locale);
  const dict = getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    alternateName: company.shortName,
    url: "https://alfalakuae.com",
    logo: "https://alfalakuae.com/assets/logo/al-falak-logo.png",
    telephone: company.phoneRaw,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai / Sharjah",
      streetAddress: "United Arab Emirates",
    },
    knowsAbout: [
      "Pneumatic Systems",
      "Hydraulic Systems",
      "Industrial Automation",
      "Electrical Switchgear",
      "Mechanical Drives",
      "Conveyor Chains",
      "AODD Diaphragm Pumps",
    ],
  };

  return (
    <html lang={locale} dir={dir}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#0c1a2e] min-h-screen flex flex-col antialiased">
        <Navbar locale={locale as Locale} dict={dict} />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
