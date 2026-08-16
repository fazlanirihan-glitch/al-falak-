import Link from "next/link";
import { Phone, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";

interface EnquiryCTAProps {
  locale: string;
  dict: Dictionary;
}

export default function EnquiryCTA({ locale, dict }: EnquiryCTAProps) {
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-14 lg:py-20 bg-sky-600">
      <div className="container-site">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${isRtl ? "lg:flex-row-reverse" : ""}`}>
          {/* Text */}
          <div className={`text-center lg:${isRtl ? "text-right" : "text-left"} max-w-xl`}>
            <span className="inline-block text-sky-200 text-xs font-bold uppercase tracking-widest mb-3">
              {dict.enquiry.tag}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
              {dict.enquiry.heading}
            </h2>
            <p className="text-sky-100 text-base">{dict.enquiry.sub}</p>
          </div>

          {/* Actions */}
          <div className={`flex flex-col sm:flex-row items-center gap-4 shrink-0 ${isRtl ? "flex-row-reverse" : ""}`}>
            <Link
              href={`/${locale}/contact`}
              className="btn-white inline-flex text-sky-700 font-bold"
            >
              {dict.enquiry.cta}
              <Arrow className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors ltr-always"
              dir="ltr"
            >
              <Phone className="w-5 h-5" />
              <span>{company.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
