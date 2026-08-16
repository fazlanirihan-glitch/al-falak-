import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import ProductsList from "@/components/shared/ProductsList";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <div className="min-h-screen bg-white">
      <ProductsList locale={locale} />
    </div>
  );
}
