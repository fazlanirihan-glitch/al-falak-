"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, ShieldCheck, Award, Layers } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface Slide {
  image: string;
  tag: string;
  heading: string;
  sub: string;
  badge: string;
}

interface HeroCarouselProps {
  locale: string;
  dict: Dictionary;
}

export default function HeroCarousel({ locale, dict }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isRtl = locale === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const slides: Slide[] = [
    {
      image: "/assets/products/iso-pneumatic-cylinder.webp",
      tag: isRtl ? "أنظمة نيوماتيك وهيدروليك متكاملة" : "Pneumatics & Fluid Power",
      heading: isRtl ? "حلول صناعية متكاملة. علامات تجارية عالمية موثوقة." : "Industrial Solutions. Trusted Global Brands.",
      sub: isRtl
        ? "مورد ومخزن رئيسي معتمد ISO 9001:2015 للمعدات الهوائية والهيدروليكية والكهربائية والميكانيكية في الإمارات والمنطقة."
        : "ISO 9001:2015 certified supplier and stockist for Pneumatic, Hydraulic, Electrical, and Mechanical equipment across the UAE & Middle East.",
      badge: "ISO 9001:2015 Certified",
    },
    {
      image: "/assets/products/hydraulic-valves-pumps.webp",
      tag: isRtl ? "أنظمة هيدروليكية وضغط عالي" : "High-Pressure Hydraulics",
      heading: isRtl ? "أعلى معايير الدقة والتحمل للتطبيقات الشاقة" : "Engineered Fluid Power & High-Pressure Systems",
      sub: isRtl
        ? "تشكيلة شاملة من الصمامات والمضخات ومجموعات التحكم الهيدروليكية من كبار المصنعين العالميين."
        : "Complete range of hydraulic directional valves, proportional manifolds, pumps, and filtration systems.",
      badge: "Heavy-Duty Fluid Power",
    },
    {
      image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
      tag: isRtl ? "محركات ونقل حركة ميكانيكية" : "Mechanical Drives & Gearboxes",
      heading: isRtl ? "حلول نقل الحركة والمحركات الصناعية المتقدمة" : "Industrial Drives, Gearmotors & Power Transmission",
      sub: isRtl
        ? "علب تروس بونفيليولي، محركات كهربائية، مخفضات سرعة، وسلاسل طاقة لخطوط الإنتاج والأتمتة."
        : "Bonfiglioli gearboxes, industrial electric motors, speed variators, couplings, and power transmission drives.",
      badge: "Precision Mechanical Drives",
    },
    {
      image: "/assets/products/industrial-sensors-controllers.webp",
      tag: isRtl ? "أتمتة وحساسات ولوحات توزيع" : "Electrical Automation & Switchgear",
      heading: isRtl ? "أجهزة القياس والتحكم ومكونات لوحات التوزيع" : "Smart Sensors, Instrumentation & Control Components",
      sub: isRtl
        ? "حساسات بصرية، متحكمات حرارة، محولات تيار، ومرحلات إلكترونية تفي بأعلى المعايير الصناعية."
        : "Engineered sensors, temperature controllers, solid-state relays, and current transformers for switchgear applications.",
      badge: "Industrial Automation",
    },
    {
      image: "/assets/products/regina-conveyor-chains.webp",
      tag: isRtl ? "سلاسل ناقلة وصيانة المخابز" : "Conveyors & Food Processing",
      heading: isRtl ? "معدات متخصصة لخطوط التعبئة والصناعات الغذائية" : "High-Speed Bottling Chains & Bakery Spares",
      sub: isRtl
        ? "سلاسل ريجينا الفولاذية لخطوط التعبئة (60,000 ز/س) وقطع غيار صيانة المخابز الصناعية المعتمدة."
        : "Regina stainless conveyor chains for high-speed bottling (60,000 b/h) and certified industrial bakery maintenance parts.",
      badge: "High-Speed Bottling Lines",
    },
  ];

  const total = slides.length;

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5500);
  }, [total]);

  useEffect(() => {
    if (isPlaying) startInterval();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, startInterval]);

  const goTo = (index: number) => {
    setCurrent(index);
    startInterval();
  };

  const goPrev = () => goTo((current - 1 + total) % total);
  const goNext = () => goTo((current + 1) % total);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0c1a2e]"
      style={{ minHeight: "520px", height: "clamp(540px, 78vh, 700px)" }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Homepage Hero Carousel"
    >
      {/* Background Slides with smooth fade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt={s.heading}
            fill
            className="object-cover object-center"
            priority={i === 0}
            quality={90}
            sizes="100vw"
          />
          {/* Subtle industrial architectural gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/95 via-[#0c1a2e]/75 to-[#0c1a2e]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2e] via-transparent to-transparent opacity-80" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-site w-full py-12 md:py-16">
          <div className={`max-w-2xl ${isRtl ? "ms-auto text-right" : ""}`}>
            {/* Category Tag */}
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#0284c7]/25 border border-[#38bdf8]/40 text-[#7dd3fc] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
                {slide.tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.12] mb-4 drop-shadow-sm">
              {slide.heading}
            </h1>

            {/* Supporting Subtext */}
            <p className="text-sky-100/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 max-w-xl">
              {slide.sub}
            </p>

            {/* Clear CTA Hierarchy */}
            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
              {/* PRIMARY CTA */}
              <Link
                href={`/${locale}/products`}
                className="btn-primary text-sm sm:text-base py-3 px-7 justify-center shadow-lg shadow-sky-900/40"
              >
                <span>{isRtl ? "استكشف المنتجات" : "Explore Products"}</span>
                <Arrow className="w-4 h-4 rtl-flip" />
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href={`/${locale}/contact`}
                className="btn-white text-sm sm:text-base py-3 px-7 justify-center"
              >
                <span>{isRtl ? "أرسل استفساراً" : "Send an Enquiry"}</span>
              </Link>

              {/* PDF Catalogue Quick Link */}
              <Link
                href={`/${locale}/catalogue`}
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-200 hover:text-white px-3 py-2 transition-colors"
              >
                <span>{isRtl ? "الكتالوج الفني (23 صفحة)" : "Technical Catalogue"}</span>
                <Arrow className="w-3.5 h-3.5 rtl-flip" />
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className={`mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-sky-200/80 ${isRtl ? "justify-end" : ""}`}>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                <span>ISO 9001:2015</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#38bdf8]" />
                <span>{isRtl ? "25+ علامة تجارية عالمية" : "25+ Global Brands"}</span>
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span>{isRtl ? "دعم وتوريد 24/7" : "24/7 Technical Support"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={isRtl ? goNext : goPrev}
        className={`absolute ${
          isRtl ? "right-3 sm:right-6" : "left-3 sm:left-6"
        } top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/30 hover:bg-[#0284c7] border border-white/20 text-white flex items-center justify-center transition-all`}
        aria-label="Previous slide"
      >
        {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>
      <button
        onClick={isRtl ? goPrev : goNext}
        className={`absolute ${
          isRtl ? "left-3 sm:left-6" : "right-3 sm:right-6"
        } top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/30 hover:bg-[#0284c7] border border-white/20 text-white flex items-center justify-center transition-all`}
        aria-label="Next slide"
      >
        {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded ${
              i === current
                ? "w-8 h-2 bg-[#38bdf8]"
                : "w-2.5 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
          <div
            className="h-full bg-[#38bdf8] animate-[progress_5.5s_linear_forwards]"
            key={current}
          />
        </div>
      )}
    </section>
  );
}
