"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minimize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  FileText,
  Sparkles,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const TOTAL_PAGES = 23;

interface CatalogueViewerProps {
  locale: string;
  dict: Dictionary;
}

export default function CatalogueViewer({ locale, dict }: CatalogueViewerProps) {
  const isRtl = locale === "ar";
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const padded = (n: number) => String(n).padStart(2, "0");
  const currentSrc = `/catalog/page_${padded(currentPage)}.webp`;

  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        isRtl ? goPrev() : goNext();
      } else if (e.key === "ArrowLeft") {
        isRtl ? goNext() : goPrev();
      } else if (e.key === "Escape" && fullscreen) {
        setFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreen, isRtl, goNext, goPrev]);

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="min-h-screen bg-[#f0f9ff]">
      {/* Top Banner */}
      <div className="bg-[#e0f2fe] border-b border-[#bae6fd] py-10 lg:py-14">
        <div className="container-site">
          <div className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-4 ${isRtl ? "md:flex-row-reverse" : ""}`}>
            <div className={isRtl ? "text-right" : "text-left"}>
              <span className="section-tag">{dict.catalogue.tag}</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0c1a2e] mt-2">
                {isRtl ? "الكتالوج الفني الرسمي لشركة الفلك" : "Official Technical Product Catalogue"}
              </h1>
              <p className="text-slate-600 mt-1.5 text-sm sm:text-base max-w-xl">
                {isRtl
                  ? "تصفح كتالوج المنتجات الفني المكون من 23 صفحة شاملة للمعدات الهوائية والهيدروليكية والميكانيكية والكهربائية."
                  : "Browse our comprehensive 23-page engineering catalogue covering Pneumatic, Hydraulic, Electrical, and Mechanical systems."}
              </p>
            </div>

            <div className={`flex items-center gap-3 shrink-0 ${isRtl ? "flex-row-reverse" : ""}`}>
              <a
                href="/Al_Falak_Catalog.pdf"
                download="AL_FALAK_Official_Catalog.pdf"
                className="btn-catalogue text-xs sm:text-sm py-2.5 px-5 shadow-sm inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{isRtl ? "تحميل نسخة PDF (27 MB)" : "Download PDF Catalogue (27 MB)"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Viewer Workspace */}
      <div className="container-site py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Thumbnails Sidebar on Desktop */}
          <div className={`${isRtl ? "lg:order-last" : ""} hidden lg:block`}>
            <div className="bg-white border border-[#bae6fd] rounded p-4 h-[680px] flex flex-col shadow-xs">
              <div className={`flex items-center justify-between pb-3 border-b border-[#e0f2fe] mb-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0c1a2e] uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#0284c7]" />
                  <span>{isRtl ? "فهرس الصفحات (23)" : "Page Index (23)"}</span>
                </div>
                <span className="text-xs text-[#0284c7] font-semibold font-mono">
                  {currentPage} / {TOTAL_PAGES}
                </span>
              </div>

              {/* Scrollable Thumbnails */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-2">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => {
                  const isSelected = n === currentPage;
                  return (
                    <button
                      key={n}
                      onClick={() => {
                        setCurrentPage(n);
                        setZoom(1);
                      }}
                      className={`w-full p-1.5 rounded flex items-center gap-3 border transition-all text-left ${
                        isSelected
                          ? "border-[#0284c7] bg-[#e0f2fe] shadow-xs"
                          : "border-[#e0f2fe] bg-[#f0f9ff] hover:border-[#bae6fd]"
                      } ${isRtl ? "flex-row-reverse text-right" : ""}`}
                    >
                      <div className="relative w-12 h-16 bg-white rounded overflow-hidden shrink-0 border border-slate-200">
                        <Image
                          src={`/catalog/page_${padded(n)}.webp`}
                          alt={`Thumbnail ${n}`}
                          fill
                          className="object-cover"
                          sizes="48px"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-[#0c1a2e]">
                          {isRtl ? `صفحة ${n}` : `Page ${n}`}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {n === 1
                            ? isRtl ? "الغلاف ومعلومات الشركة" : "Cover & Overview"
                            : n === 2
                            ? isRtl ? "عن الشركة ومعيار ISO" : "About & ISO 9001"
                            : n <= 12
                            ? isRtl ? "الأنظمة الهوائية" : "Pneumatic Systems"
                            : n <= 15
                            ? isRtl ? "الأنظمة الميكانيكية" : "Mechanical & Drives"
                            : n <= 17
                            ? isRtl ? "الكهربائيات والأجهزة" : "Electrical & CTs"
                            : n === 18
                            ? isRtl ? "الأنظمة الهيدروليكية" : "Hydraulic Systems"
                            : n <= 21
                            ? isRtl ? "الناقلات وصيانة المخابز" : "Conveyors & Bakery"
                            : isRtl ? "العلامات التجارية الشريكة" : "Brand Partners"}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Document Viewer Frame */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="bg-white border border-[#bae6fd] rounded shadow-md overflow-hidden flex flex-col flex-1">
              {/* Controls Toolbar */}
              <div
                className={`px-4 py-3 bg-[#f0f9ff] border-b border-[#bae6fd] flex flex-wrap items-center justify-between gap-3 ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                {/* Page Navigation Buttons & Page Selector */}
                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <button
                    onClick={isRtl ? goNext : goPrev}
                    disabled={isRtl ? currentPage >= TOTAL_PAGES : currentPage <= 1}
                    className="p-1.5 sm:p-2 bg-white rounded border border-[#bae6fd] text-[#0c1a2e] hover:bg-[#e0f2fe] disabled:opacity-40 disabled:hover:bg-white transition-all shadow-2xs"
                    aria-label="Previous Page"
                  >
                    <PrevIcon className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0c1a2e] px-2 py-1 bg-white border border-[#bae6fd] rounded shadow-2xs">
                    <span>{isRtl ? "صفحة" : "Page"}</span>
                    <select
                      value={currentPage}
                      onChange={(e) => {
                        setCurrentPage(Number(e.target.value));
                        setZoom(1);
                      }}
                      className="bg-transparent font-bold text-[#0284c7] focus:outline-none cursor-pointer"
                    >
                      {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <span>{isRtl ? `من ${TOTAL_PAGES}` : `of ${TOTAL_PAGES}`}</span>
                  </div>

                  <button
                    onClick={isRtl ? goPrev : goNext}
                    disabled={isRtl ? currentPage <= 1 : currentPage >= TOTAL_PAGES}
                    className="p-1.5 sm:p-2 bg-white rounded border border-[#bae6fd] text-[#0c1a2e] hover:bg-[#e0f2fe] disabled:opacity-40 disabled:hover:bg-white transition-all shadow-2xs"
                    aria-label="Next Page"
                  >
                    <NextIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Zoom & Fullscreen Controls */}
                <div className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <button
                    onClick={() => setZoom((z) => Math.max(0.6, Number((z - 0.2).toFixed(1))))}
                    className="p-1.5 sm:p-2 bg-white rounded border border-[#bae6fd] text-slate-700 hover:bg-[#e0f2fe] transition-all shadow-2xs"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold text-[#0284c7] min-w-[3.2rem] text-center bg-white px-2 py-1 border border-[#bae6fd] rounded shadow-2xs">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(2.2, Number((z + 0.2).toFixed(1))))}
                    className="p-1.5 sm:p-2 bg-white rounded border border-[#bae6fd] text-slate-700 hover:bg-[#e0f2fe] transition-all shadow-2xs"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoom(1)}
                    className="p-1.5 sm:p-2 bg-white rounded border border-[#bae6fd] text-slate-700 hover:bg-[#e0f2fe] transition-all shadow-2xs"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setFullscreen(true)}
                    className="p-1.5 sm:p-2 bg-[#0284c7] text-white rounded hover:bg-[#0369a1] transition-all shadow-2xs flex items-center gap-1 text-xs font-semibold"
                    aria-label="Open Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span className="hidden sm:inline">{isRtl ? "ملء الشاشة" : "Fullscreen"}</span>
                  </button>
                </div>
              </div>

              {/* Document Display Area with smooth scroll and pan */}
              <div className="flex-1 bg-slate-100/70 p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-[500px] max-h-[720px] select-none">
                <div
                  className="relative transition-transform duration-200 shadow-xl rounded overflow-hidden bg-white border border-slate-300"
                  style={{
                    width: `${zoom * 100}%`,
                    maxWidth: zoom === 1 ? "680px" : `${zoom * 680}px`,
                    aspectRatio: "1 / 1.414",
                  }}
                >
                  <Image
                    src={currentSrc}
                    alt={`AL FALAK Technical Catalogue Page ${currentPage}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Thumbnails Scrollbar */}
            <div className="lg:hidden mt-4 pt-3 border-t border-[#bae6fd]">
              <div className="text-xs font-semibold text-slate-600 mb-2 flex items-center justify-between">
                <span>{isRtl ? "تصفح الصفحات سريعا:" : "Quick Page Jump:"}</span>
                <span className="font-mono text-[#0284c7] font-bold">{currentPage} / 23</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => {
                      setCurrentPage(n);
                      setZoom(1);
                    }}
                    className={`shrink-0 w-9 h-9 rounded text-xs font-bold font-mono transition-all border ${
                      n === currentPage
                        ? "bg-[#0284c7] text-white border-[#0284c7] shadow-sm"
                        : "bg-white text-slate-700 border-[#bae6fd] hover:bg-[#e0f2fe]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-[#0c1a2e]/95 backdrop-blur-md flex flex-col justify-between p-4"
          onClick={() => setFullscreen(false)}
        >
          {/* Fullscreen Top Header */}
          <div className="flex items-center justify-between text-white py-2 px-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#38bdf8]" />
              <span className="font-display font-bold text-lg">
                AL FALAK Official Catalogue — Page {currentPage} of {TOTAL_PAGES}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/Al_Falak_Catalog.pdf"
                download
                onClick={(e) => e.stopPropagation()}
                className="btn-catalogue text-xs py-1.5 px-3"
                style={{ animation: "none" }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
              <button
                onClick={() => setFullscreen(false)}
                className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close fullscreen"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Centered Page Image with Side Arrows */}
          <div className="relative flex-1 flex items-center justify-center py-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={isRtl ? goNext : goPrev}
              disabled={isRtl ? currentPage >= TOTAL_PAGES : currentPage <= 1}
              className={`absolute ${
                isRtl ? "right-2 sm:right-6" : "left-2 sm:left-6"
              } z-10 p-3 sm:p-4 rounded-full bg-white/15 hover:bg-[#0284c7] text-white disabled:opacity-30 transition-all`}
              aria-label="Previous Page"
            >
              <PrevIcon className="w-6 h-6" />
            </button>

            <div
              className="relative h-full max-h-[85vh] rounded shadow-2xl overflow-hidden bg-white"
              style={{ aspectRatio: "1 / 1.414" }}
            >
              <Image
                src={currentSrc}
                alt={`AL FALAK Fullscreen Page ${currentPage}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={isRtl ? goPrev : goNext}
              disabled={isRtl ? currentPage <= 1 : currentPage >= TOTAL_PAGES}
              className={`absolute ${
                isRtl ? "left-2 sm:left-6" : "right-2 sm:right-6"
              } z-10 p-3 sm:p-4 rounded-full bg-white/15 hover:bg-[#0284c7] text-white disabled:opacity-30 transition-all`}
              aria-label="Next Page"
            >
              <NextIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Fullscreen Bottom Footer Navigator */}
          <div className="py-2 text-center text-xs text-sky-200 flex items-center justify-center gap-4">
            <span>Use Left / Right arrow keys to flip pages • Press ESC to exit fullscreen</span>
          </div>
        </div>
      )}
    </div>
  );
}
