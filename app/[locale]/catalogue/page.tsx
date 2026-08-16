import { notFound } from "next/navigation";
import { locales, getDictionary, type Locale } from "@/lib/i18n";
import CatalogueViewer from "@/components/shared/CatalogueViewer";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CataloguePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return <CatalogueViewer locale={locale} dict={dict} />;
}
