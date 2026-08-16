"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const TOTAL_PAGES = 23;

interface CatalogueViewerProps {
  locale: string;
  dict: Dictionary;
}

export default function CatalogueViewer({ locale, dict }: CatalogueViewerProps) {
  const isRtl = locale === "ar";
  const [currentPage, setCurrentPage] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const pageLabel = (dict.catalogue.pageOf as string)
    .replace("{current}", String(currentPage))
    .replace("{total}", String(TOTAL_PAGES));

  const padded = (n: number) => String(n).padStart(2, "0");
  const currentSrc = `/catalog/page_${padded(currentPage)}.webp`;

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1));

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {/* Header */}
      <div className="bg-[#e0f2fe] py-10 lg:py-14">
        <div className="container-site">
          <div className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
            <div className={isRtl ? "text-right" : ""}>
              <span className="section-tag">{dict.catalogue.tag}</span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-[#0c1a2e] mt-2">
                {dict.catalogue.heading}
              </h1>
              <p className="text-slate-600 mt-1">{dict.catalogue.sub}</p>
            </div>
            <a
              href="/Al_Falak_Catalog.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 text-sm"
            >
              <Download className="w-4 h-4" />
              {dict.catalogue.download}
            </a>
          </div>
        </div>
      </div>

      {/* Viewer */}
      <div className="container-site py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Thumbnails Sidebar */}
          <div className={`${isRtl ? "lg:order-last" : ""} hidden lg:block`}>
            <div className="bg-white border border-sky-200 rounded p-3 h-[600px] overflow-y-auto">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 px-1">
                {locale === "ar" ? "الصفحات" : "Pages"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setCurrentPage(n)}
                    className={`relative h-24 rounded overflow-hidden border-2 transition-all ${
                      n === currentPage ? "border-sky-600" : "border-transparent hover:border-sky-300"
                    }`}
                  >
                    <Image
                      src={`/catalog/page_${padded(n)}.webp`}
                      alt={`Page ${n}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0c1a2e]/60 text-white text-xs text-center py-0.5">
                      {n}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-sky-200 rounded overflow-hidden shadow-lg">
              {/* Controls Bar */}
              <div className={`flex items-center justify-between px-4 py-3 border-b border-sky-100 bg-[#f0f9ff] ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <button
                    onClick={isRtl ? goNext : goPrev}
                    disabled={isRtl ? currentPage >= TOTAL_PAGES : currentPage <= 1}
                    className="p-2 rounded border border-sky-200 hover:bg-sky-100 disabled:opacity-40 transition-all"
                    aria-label="Previous page"
                  >
                    <PrevIcon className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold text-[#0c1a2e] min-w-max">{pageLabel}</span>
                  <button
                    onClick={isRtl ? goPrev : goNext}
                    disabled={isRtl ? currentPage <= 1 : currentPage >= TOTAL_PAGES}
                    className="p-2 rounded border border-sky-200 hover:bg-sky-100 disabled:opacity-40 transition-all"
                    aria-label="Next page"
                  >
                    <NextIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <button
                    onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                    className="p-2 rounded border border-sky-200 hover:bg-sky-100 transition-all"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-semibold text-slate-500 min-w-[3rem] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(2, z + 0.25))}
                    className="p-2 rounded border border-sky-200 hover:bg-sky-100 transition-all"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setFullscreen(true); setZoom(1); }}
                    className="p-2 rounded border border-sky-200 hover:bg-sky-100 transition-all"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Page Image */}
              <div className="overflow-auto" style={{ maxHeight: "600px" }}>
                <div
                  className="relative mx-auto transition-transform duration-200"
                  style={{
                    width: `${zoom * 100}%`,
                    aspectRatio: "1 / 1.414",
                  }}
                >
                  <Image
                    src={currentSrc}
                    alt={`Catalogue page ${currentPage}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 75vw"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Page Numbers */}
            <div className="lg:hidden mt-4 flex flex-wrap gap-1 justify-center">
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-7 h-7 text-xs rounded font-semibold transition-all ${
                    n === currentPage
                      ? "bg-sky-600 text-white"
                      : "bg-sky-50 text-slate-600 border border-sky-200 hover:bg-sky-100"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 z-[60] p-2 text-white hover:text-sky-300 transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); isRtl ? goNext() : goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/25 rounded-full text-white"
            aria-label="Previous"
          >
            <PrevIcon className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-2xl mx-auto px-16"
            style={{ aspectRatio: "1 / 1.414" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentSrc}
              alt={`Catalogue page ${currentPage}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); isRtl ? goPrev() : goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/25 rounded-full text-white"
            aria-label="Next"
          >
            <NextIcon className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-semibold bg-black/40 px-4 py-1 rounded-full">
            {pageLabel}
          </div>
        </div>
      )}
    </div>
  );
}
