"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

interface Slide {
  image: string;
  tag: string;
  heading: string;
  sub: string;
  cta1: string;
  cta2: string;
  cta1Href: string;
  cta2Href: string;
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

  const slides: Slide[] = [
    {
      image: "/assets/products/iso-pneumatic-cylinder.webp",
      tag: dict.hero.slide1.tag,
      heading: dict.hero.slide1.heading,
      sub: dict.hero.slide1.sub,
      cta1: dict.hero.slide1.cta1,
      cta2: dict.hero.slide1.cta2,
      cta1Href: `/${locale}/products`,
      cta2Href: `/${locale}/contact`,
    },
    {
      image: "/assets/products/hydraulic-valves-pumps.webp",
      tag: dict.hero.slide2.tag,
      heading: dict.hero.slide2.heading,
      sub: dict.hero.slide2.sub,
      cta1: dict.hero.slide2.cta1,
      cta2: dict.hero.slide2.cta2,
      cta1Href: `/${locale}/catalogue`,
      cta2Href: `/${locale}/contact`,
    },
    {
      image: "/assets/products/regina-conveyor-chains.webp",
      tag: dict.hero.slide3.tag,
      heading: dict.hero.slide3.heading,
      sub: dict.hero.slide3.sub,
      cta1: dict.hero.slide3.cta1,
      cta2: dict.hero.slide3.cta2,
      cta1Href: `/${locale}/products`,
      cta2Href: `/${locale}/contact`,
    },
    {
      image: "/assets/products/bonfiglioli-gearboxes-motors.webp",
      tag: dict.hero.slide1.tag,
      heading: dict.hero.slide1.heading,
      sub: dict.hero.slide1.sub,
      cta1: dict.hero.slide1.cta1,
      cta2: dict.hero.slide1.cta2,
      cta1Href: `/${locale}/products`,
      cta2Href: `/${locale}/contact`,
    },
    {
      image: "/assets/products/industrial-sensors-controllers.webp",
      tag: dict.hero.slide2.tag,
      heading: dict.hero.slide2.heading,
      sub: dict.hero.slide2.sub,
      cta1: dict.hero.slide2.cta1,
      cta2: dict.hero.slide2.cta2,
      cta1Href: `/${locale}/products`,
      cta2Href: `/${locale}/contact`,
    },
  ];

  const total = slides.length;

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
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
      style={{ height: "clamp(520px, 85vh, 720px)" }}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt={s.heading}
            fill
            className="object-cover object-center"
            priority={i === 0}
            quality={85}
          />
          {/* Overlay gradient — light blue tinted for brand coherence */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2e]/85 via-[#0c1a2e]/60 to-[#0c1a2e]/25" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-site w-full">
          <div className={`max-w-xl ${isRtl ? "ms-auto text-right" : ""}`}>
            {/* Tag */}
            <div
              key={`tag-${current}`}
              className="mb-4 animate-fade-in"
            >
              <span className="inline-block bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`h-${current}`}
              className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 animate-fade-up"
            >
              {slide.heading}
            </h1>

            {/* Sub */}
            <p
              key={`sub-${current}`}
              className="text-sky-100/90 text-base sm:text-lg leading-relaxed mb-8 animate-fade-in"
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className={`flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""} animate-fade-up`}
            >
              <Link href={slide.cta1Href} className="btn-primary">
                {slide.cta1}
              </Link>
              <Link href={slide.cta2Href} className="btn-white">
                {slide.cta2}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={isRtl ? goNext : goPrev}
        className={`absolute ${
          isRtl ? "right-4 md:right-8" : "left-4 md:left-8"
        } top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all`}
        aria-label="Previous slide"
      >
        {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>
      <button
        onClick={isRtl ? goPrev : goNext}
        className={`absolute ${
          isRtl ? "left-4 md:left-8" : "right-4 md:right-8"
        } top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all`}
        aria-label="Next slide"
      >
        {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-7 h-2 bg-sky-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-sky-500/20">
          <div
            className="h-full bg-sky-400 animate-[progress_5s_linear_forwards]"
            key={current}
          />
        </div>
      )}
    </section>
  );
}
