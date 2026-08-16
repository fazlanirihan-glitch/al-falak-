import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

interface CataloguePreviewProps {
  locale: string;
  dict: Dictionary;
}

const TOTAL_PAGES = 23;
// Which catalog pages to show in the preview strip (a curated selection)
const PREVIEW_PAGES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

export default function CataloguePreview({ locale, dict }: CataloguePreviewProps) {
  const isRtl = locale === "ar";

  // Duplicate for seamless loop
  const pages = [...PREVIEW_PAGES, ...PREVIEW_PAGES];

  return (
    <section className="py-14 lg:py-20 bg-[#f0f9ff] overflow-hidden">
      <div className="container-site mb-8">
        <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <div className={isRtl ? "text-right" : ""}>
            <span className="section-tag">{dict.catalogue.tag}</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0c1a2e] mt-2">
              {dict.catalogue.heading}
            </h2>
            <p className="text-slate-600 mt-1">{dict.catalogue.sub}</p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-3 shrink-0 ${isRtl ? "items-end" : "items-start sm:items-center"}`}>
            <Link
              href={`/${locale}/catalogue`}
              className="btn-primary text-sm"
            >
              {dict.catalogue.viewCatalogue}
            </Link>
            <a
              href="/Al_Falak_Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              {dict.catalogue.download}
            </a>
          </div>
        </div>
      </div>

      {/* Auto-scrolling catalogue strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f0f9ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f0f9ff] to-transparent z-10 pointer-events-none" />

        <div className="catalogue-marquee-track" style={{ direction: "ltr" }}>
          {pages.map((pageNum, i) => (
            <div
              key={`${pageNum}-${i}`}
              className="flex-shrink-0 mx-2 rounded overflow-hidden shadow-md border border-sky-200 group cursor-pointer"
              style={{ width: "160px", height: "220px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/catalog/page_${String(pageNum).padStart(2, "0")}.webp`}
                  alt={`Catalogue page ${pageNum}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c1a2e]/60 to-transparent py-2 px-3">
                  <span className="text-white text-xs font-semibold">{pageNum}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
