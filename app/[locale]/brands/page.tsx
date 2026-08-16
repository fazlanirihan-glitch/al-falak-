import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import BrandsList from "@/components/shared/BrandsList";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <div className="min-h-screen bg-white">
      <BrandsList locale={locale} />
    </div>
  );
}
