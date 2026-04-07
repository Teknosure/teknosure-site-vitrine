"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pagesWithHero = ["/etudes-de-cas", "/a-propos", "/contact"];

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
  const logoColor = isTransparent && isDarkBg ? "text-white" : "text-gray-900";
  const iconColor = isTransparent && isDarkBg ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-gray-900";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-transparent bg-transparent"
          : "border-b border-gray-200 bg-white shadow-sm"
      }`}
    >
      {/* Conteneur pleine largeur avec padding latéral */}
      <div className="w-full px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-6">

          {/* Logo + Navigation groupés à gauche */}
          <div className="flex items-center gap-8">
          <Link href="/" className="shrink-0" aria-label="Teknosure — Accueil">
            <Image
              src={isTransparent && isDarkBg ? "/images/logo-transparent.png" : "/images/logo.png"}
              alt="Teknosure"
              width={320}
              height={80}
              className="h-20 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${textColor} ${textHoverColor}`}
            >
              Accueil
            </Link>

            {/* Dropdown Services */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 py-2 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${textColor} ${textHoverColor}`}
              >
                Expertise
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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

            <Link href="/a-propos" className={`text-base font-medium transition-colors ${textColor} ${textHoverColor}`}>
              À propos
            </Link>
            <Link href="/etudes-de-cas" className={`text-base font-medium transition-colors ${textColor} ${textHoverColor}`}>
              Nos Réalisations
            </Link>
            <Link href="/contact" className={`text-base font-medium transition-colors ${textColor} ${textHoverColor}`}>
              Contact
            </Link>
          </nav>

          </div>

          {/* Droite : langue + CTA */}
          <div className="hidden items-center gap-3 md:flex">

            {/* Sélecteur de langue */}
            <button
              aria-label="Changer de langue"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                isTransparent && isDarkBg
                  ? "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FR
              <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* CTA principal */}
            <Link
              href="/contact"
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 ${
                isTransparent && isDarkBg
                  ? "bg-white text-[var(--primary-dark)] hover:bg-gray-100"
                  : "tk-btn bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white hover:opacity-90"
              }`}
            >
              Parlons de votre projet
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className={`p-2 text-2xl md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white pb-4 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-gray-600">Accueil</Link>
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-900">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} className="block text-sm text-gray-600 hover:text-[var(--primary)]">
                      • {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/a-propos" className="text-sm font-medium text-gray-600">À propos</Link>
              <Link href="/etudes-de-cas" className="text-sm font-medium text-gray-600">Études de cas</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600">Contact</Link>

              <Link href="/contact" className="w-fit rounded-lg bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white">
                Parlons de votre projet
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
