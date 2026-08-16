import Link from "next/link";
import { Phone, Mail, MessageSquare, ArrowRight, ArrowLeft, Send } from "lucide-react";
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
    <section className="py-14 lg:py-20 bg-[#0284c7] text-white relative overflow-hidden">
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-white/15 via-transparent to-transparent pointer-events-none" />

      <div className="container-site relative z-10">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${isRtl ? "lg:flex-row-reverse" : ""}`}>
          {/* Left Text Column */}
          <div className={`text-center ${isRtl ? "lg:text-right" : "lg:text-left"} max-w-xl`}>
            <span className="inline-block text-[#bae6fd] text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded border border-white/20 mb-3">
              {isRtl ? "تواصل مع خبرائنا الصناعيين" : "Direct Industrial RFQ & Support"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {isRtl ? "اطلب عرض سعر أو استفساراً فنياً لمشروعك" : "Request a Formal Quote or Technical Consultation"}
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              {isRtl
                ? "فريق المهندسين والمشتريات في الفلك جاهز للرد على استفساراتك وتقديم عروض أسعار تنافسية خلال ساعات العمل."
                : "Our engineering and procurement team responds promptly with verified technical specifications and competitive trade pricing."}
            </p>
          </div>

          {/* Right Action Block with INLINE WhatsApp, Phone, Email & RFQ Button */}
          <div className={`flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 shrink-0 ${isRtl ? "flex-row-reverse" : ""}`}>
            {/* Primary Form CTA */}
            <Link
              href={`/${locale}/contact`}
              className="btn-white text-[#0284c7] font-bold text-sm sm:text-base py-3 px-6 shadow-md inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isRtl ? "إرسال طلب تسعير (RFQ)" : "Submit RFQ Online"}</span>
              <Arrow className="w-4 h-4 rtl-flip" />
            </Link>

            {/* INLINE Homepage WhatsApp Button */}
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base transition-all shadow-md inline-flex items-center justify-center gap-2"
              title="Chat with AL FALAK on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="ltr-always" dir="ltr">WhatsApp</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${company.phoneRaw}`}
              className="px-5 py-3 rounded bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm sm:text-base transition-all inline-flex items-center justify-center gap-2 ltr-always"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#7dd3fc]" />
              <span>{company.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
