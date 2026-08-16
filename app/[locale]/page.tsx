import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import HeroCarousel from "@/components/home/HeroCarousel";
import CompanyIntro from "@/components/home/CompanyIntro";
import ProductCategories from "@/components/home/ProductCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandMarquee from "@/components/home/BrandMarquee";
import Industries from "@/components/home/Industries";
import WhyAlFalak from "@/components/home/WhyAlFalak";
import CataloguePreview from "@/components/home/CataloguePreview";
import EnquiryCTA from "@/components/home/EnquiryCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <HeroCarousel locale={locale} dict={dict} />
      <CompanyIntro locale={locale} dict={dict} />
      <ProductCategories locale={locale} dict={dict} />
      <FeaturedProducts locale={locale} dict={dict} />
      <BrandMarquee locale={locale} dict={dict} />
      <Industries locale={locale} dict={dict} />
      <WhyAlFalak locale={locale} dict={dict} />
      <CataloguePreview locale={locale} dict={dict} />
      <EnquiryCTA locale={locale} dict={dict} />
    </>
  );
}
