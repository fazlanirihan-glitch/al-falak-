import { ShieldCheck, Globe, Clock, MapPin } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const iconMap: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  globe: Globe,
  clock: Clock,
  map: MapPin,
};

interface WhyAlFalakProps {
  locale: string;
  dict: Dictionary;
}

export default function WhyAlFalak({ locale, dict }: WhyAlFalakProps) {
  const isRtl = locale === "ar";

  return (
    <section className="py-14 lg:py-20 bg-[#e0f2fe]">
      <div className="container-site">
        <div className={`text-center mb-10 ${isRtl ? "" : ""}`}>
          <span className="section-tag">{dict.why.tag}</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2">
            {dict.why.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dict.why.points.map((point, i) => {
            const Icon = iconMap[point.icon] ?? ShieldCheck;
            return (
              <div
                key={i}
                className={`bg-white rounded border border-sky-200 p-6 card-industrial text-center space-y-3`}
              >
                <div className="w-14 h-14 rounded bg-sky-600 flex items-center justify-center mx-auto">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0c1a2e]">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
