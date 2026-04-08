"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pagesWithHero = ["/etudes-de-cas", "/a-propos", "/contact", "/tpe-pme"];

  const shouldBeTransparent =
    pathname === "/" ||
    (pathname?.startsWith("/services/") && pathname !== "/services") ||
    pagesWithHero.includes(pathname ?? "");

  const isDarkBg =
    pathname === "/" ||
    (pathname?.startsWith("/services/") && pathname !== "/services") ||
    pagesWithHero.includes(pathname ?? "");

  const services = [
    { name: "Cybersécurité", href: "/services/cybersecurite" },
    { name: "Infrastructure & Cloud", href: "/services/cloud" },
    { name: "Infogérance & Services Managés", href: "/services/infogerance" },
    { name: "Ingénierie logicielle", href: "/services/ingenierie" },
    { name: "IA et automatisation", href: "/services/ia" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = !isScrolled && shouldBeTransparent;

  const textColor = isTransparent && isDarkBg ? "text-white/90" : "text-gray-600";
  const textHoverColor = isTransparent && isDarkBg ? "hover:text-white" : "hover:text-gray-900";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-transparent bg-transparent"
          : "border-b border-gray-200 bg-white shadow-sm"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between sm:h-20">

          {/* ── Logo ──────────────────────────────────────────────────── */}
          <Link href="/" className="shrink-0" aria-label="Teknosure — Accueil">
            <Image
              src={isTransparent && isDarkBg ? "/images/logo-transparent.png" : "/images/logo.png"}
              alt="Teknosure"
              width={220}
              height={56}
              className="h-10 w-auto object-contain transition-all duration-300 sm:h-14"
              priority
            />
          </Link>

          {/* ── Navigation Desktop ────────────────────────────────────── */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            <Link href="/" className={`text-sm font-medium transition-colors xl:text-base ${textColor} ${textHoverColor}`}>
              Accueil
            </Link>

            {/* Dropdown Services */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] xl:text-base ${textColor} ${textHoverColor}`}
              >
                Expertise
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div role="menu" className="absolute left-0 top-full z-50 w-64 pt-2">
                  <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        role="menuitem"
                        className="block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--primary-dark)] focus:bg-[var(--primary-light)] focus:text-[var(--primary-dark)] focus:outline-none"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="mt-2 border-t border-gray-100 pt-2">
                      <Link
                        href="/services"
                        role="menuitem"
                        className="block px-4 py-3 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--primary-light)] focus:bg-[var(--primary-light)] focus:outline-none"
                      >
                        Voir toutes les expertises →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/tpe-pme" className={`text-sm font-medium transition-colors xl:text-base ${textColor} ${textHoverColor}`}>
              TPE/PME
            </Link>
            <Link href="/a-propos" className={`text-sm font-medium transition-colors xl:text-base ${textColor} ${textHoverColor}`}>
              À propos
            </Link>
            <Link href="/etudes-de-cas" className={`text-sm font-medium transition-colors xl:text-base ${textColor} ${textHoverColor}`}>
              Nos Réalisations
            </Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors xl:text-base ${textColor} ${textHoverColor}`}>
              Contact
            </Link>
          </nav>

          {/* ── Droite Desktop : Langue + CTA ────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Bouton langue */}
            <button
              onClick={() => setLang((l) => (l === "FR" ? "EN" : "FR"))}
              aria-label="Changer de langue"
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                isTransparent && isDarkBg
                  ? "text-white/80 hover:bg-white/10 hover:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {lang}
            </button>

            <Link
              href="/contact"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 xl:px-5 xl:py-2.5 ${
                isTransparent && isDarkBg
                  ? "bg-white text-[var(--primary-dark)] hover:bg-gray-100"
                  : "bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white hover:opacity-90"
              }`}
            >
              Parlons de votre projet
            </Link>
          </div>

          {/* ── Bouton hamburger mobile/tablet ────────────────────────── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
              isTransparent && isDarkBg
                ? "text-white hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Menu mobile/tablet ──────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-lg px-4 py-4 sm:px-6">

            {/* Liens principaux */}
            <div className="space-y-0.5">
              <Link href="/" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                Accueil
              </Link>

              {/* Bloc Expertise */}
              <div className="rounded-lg bg-gray-50 px-4 py-3">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">Expertise</p>
                <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-white hover:text-[var(--primary)]"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="rounded-md px-3 py-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-white sm:col-span-2"
                  >
                    Toutes les expertises →
                  </Link>
                </div>
              </div>

              <Link href="/tpe-pme" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                TPE / PME
              </Link>
              <Link href="/a-propos" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                À propos
              </Link>
              <Link href="/etudes-de-cas" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                Nos Réalisations
              </Link>
              <Link href="/contact" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900">
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-4 border-t border-gray-100 pt-4">
              <Link
                href="/contact"
                className="block w-full rounded-xl bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-5 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:opacity-90"
              >
                Parlons de votre projet
              </Link>
              {/* Langue mobile */}
              <button
                onClick={() => setLang((l) => (l === "FR" ? "EN" : "FR"))}
                aria-label="Changer de langue"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800 focus:outline-none"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {lang === "FR" ? "Français (FR)" : "English (EN)"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
