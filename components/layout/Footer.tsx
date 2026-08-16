import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Locale, Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";
import { categories } from "@/data/categories";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const isRtl = locale === "ar";

  const quickLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.brands, href: `/${locale}/brands` },
    { label: dict.nav.industries, href: `/${locale}/industries` },
    { label: dict.nav.catalogue, href: `/${locale}/catalogue` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-[#f0f9ff] border-t border-sky-200 text-[#0c1a2e]">
      {/* Top Section */}
      <div className="container-site py-12 lg:py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 ${isRtl ? "text-right" : ""}`}>
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="relative h-10 w-40">
              <Image
                src="/assets/logo/al-falak-logo.png"
                alt="AL FALAK Industrial Equipment Trading LLC"
                fill
                className={`object-contain ${isRtl ? "object-right" : "object-left"}`}
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              {dict.footer.description}
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors ltr-always"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base uppercase tracking-wide text-[#0c1a2e]">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base uppercase tracking-wide text-[#0c1a2e]">
              {dict.footer.products}
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/${locale}/products?category=${cat.id}`}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    {locale === "ar" ? cat.nameAr : cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-base uppercase tracking-wide text-[#0c1a2e]">
              {dict.footer.contactUs}
            </h4>
            <p className="text-sm text-slate-600">
              {locale === "ar"
                ? "فريقنا مستعد لمساعدتك في متطلبات المعدات الصناعية."
                : "Our team is ready to help with your industrial equipment requirements."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary inline-flex text-sm"
            >
              {dict.nav.enquireNow}
            </Link>
            <div className="pt-2 space-y-1 text-xs text-slate-500">
              <p className="ltr-always" dir="ltr">{company.phone}</p>
              <p>{company.email}</p>
              <p className="font-semibold text-sky-700">{company.iso}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-200 bg-white">
        <div className="container-site py-4">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
            <p>{dict.footer.rights}</p>
            <p>{dict.footer.developer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
