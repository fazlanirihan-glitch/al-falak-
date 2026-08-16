"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import type { Locale, Dictionary } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isRtl = locale === "ar";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.products, href: `/${locale}/products` },
    { label: dict.nav.brands, href: `/${locale}/brands` },
    { label: dict.nav.industries, href: `/${locale}/industries` },
    { label: dict.nav.catalogue, href: `/${locale}/catalogue` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  // For language switcher: switch locale on same page
  const getOtherLocalePath = () => {
    const otherLocale = locale === "en" ? "ar" : "en";
    const withoutLocale = pathname.replace(`/${locale}`, "") || "";
    return `/${otherLocale}${withoutLocale}`;
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-b border-sky-100"
            : "bg-white/95 backdrop-blur-sm border-b border-sky-100"
        }`}
      >
        <div className="container-site">
          <div className={`flex items-center justify-between h-16 lg:h-20 ${isRtl ? "flex-row-reverse" : ""}`}>
            {/* Logo */}
            <Link href={`/${locale}`} className="flex-shrink-0 flex items-center">
              <div className="relative h-10 w-40 lg:h-12 lg:w-48">
                <Image
                  src="/assets/logo/al-falak-logo.png"
                  alt="AL FALAK Industrial Equipment Trading LLC"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden lg:flex items-center gap-1 ${isRtl ? "flex-row-reverse" : ""}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-700 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className={`hidden lg:flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              {/* Language Switcher */}
              <Link
                href={getOtherLocalePath()}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-sky-700 border border-sky-200 rounded hover:bg-sky-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{locale === "en" ? "عربي" : "English"}</span>
              </Link>

              {/* Enquire CTA */}
              <Link href={`/${locale}/contact`} className="btn-primary text-sm py-2 px-5">
                {dict.nav.enquireNow}
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className={`flex lg:hidden items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <Link
                href={getOtherLocalePath()}
                className="flex items-center gap-1 px-2 py-1.5 text-xs font-bold text-sky-700 border border-sky-200 rounded"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{locale === "en" ? "عربي" : "EN"}</span>
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded text-slate-700 hover:bg-sky-50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col transition-transform duration-300 ${
            isRtl
              ? `right-0 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`
              : `left-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`
          }`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-sky-100">
            <div className="relative h-9 w-36">
              <Image
                src="/assets/logo/al-falak-logo.png"
                alt="AL FALAK"
                fill
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 rounded text-slate-500"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 py-4 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-5 py-3.5 text-base font-medium border-b border-slate-50 transition-colors ${
                  isActive(link.href)
                    ? "text-sky-600 bg-sky-50"
                    : "text-slate-700 hover:text-sky-600 hover:bg-sky-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer Bottom */}
          <div className="p-5 border-t border-sky-100 space-y-3">
            <Link
              href={`/${locale}/contact`}
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {dict.nav.enquireNow}
            </Link>
            <a
              href="mailto:sales@alfalakuae.com"
              className="block text-center text-xs text-slate-500 hover:text-sky-600"
            >
              sales@alfalakuae.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
