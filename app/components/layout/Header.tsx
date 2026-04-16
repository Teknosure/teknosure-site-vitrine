"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [cyberDropdownOpen, setCyberDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cyberDropdownRef = useRef<HTMLDivElement>(null);

  const pagesWithHero = [
    "/etudes-de-cas", "/a-propos", "/contact", "/tpe-pme",
    "/tpe-pme/cybersecurite", "/tpe-pme/cloud", "/tpe-pme/infogerance",
    "/tpe-pme/ingenierie", "/tpe-pme/ia",
    "/eti/cybersecurite",
  ];

  const shouldBeTransparent =
    pathname === "/" ||
    (pathname?.startsWith("/services/") && pathname !== "/services") ||
    pagesWithHero.includes(pathname ?? "");

  const isDarkBg =
    pathname === "/" ||
    (pathname?.startsWith("/services/") && pathname !== "/services") ||
    pagesWithHero.includes(pathname ?? "");

  const services = [
    {
      name: "Infrastructure & Cloud",
      desc: "Migration, hébergement, hybride",
      href: "/services/cloud",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
      ),
      color: "text-sky-500",
      bg: "bg-sky-50",
    },
    {
      name: "Infogérance IT & Infrastructure",
      desc: "Serveurs, M365, MCO, postes & SLA garanti",
      href: "/services/infogerance",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      name: "Ingénierie logicielle",
      desc: "Apps web & mobile sur mesure",
      href: "/services/ingenierie",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ),
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
    {
      name: "IA et automatisation",
      desc: "Agents IA, RPA, analyse prédictive",
      href: "/services/ia",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
      ),
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  const cyberItems = [
    {
      name: "TPE / PME",
      desc: "Packs fixes, RGPD, prix accessibles",
      href: "/tpe-pme/cybersecurite",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      name: "ETI / Grands comptes",
      desc: "SOC 24/7, ISO 27001, NIS2, sur devis",
      href: "/eti/cybersecurite",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      ),
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
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
      if (cyberDropdownRef.current && !cyberDropdownRef.current.contains(e.target as Node)) {
        setCyberDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
    setCyberDropdownOpen(false);
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
              className="h-12 w-auto object-contain transition-all duration-300 sm:h-16"
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
                Nos Expertises IT
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div role="menu" className="absolute left-0 top-full z-50 w-[480px] pt-3">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

                    {/* Header du dropdown */}
                    <div className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/70">Teknosure</p>
                      <p className="mt-0.5 text-base font-bold text-white">Nos domaines d'expertise</p>
                    </div>

                    {/* Grille des expertises */}
                    <div className="grid grid-cols-2 gap-px bg-gray-100 p-px">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          className="group flex items-start gap-3 bg-white px-4 py-3.5 transition-colors hover:bg-[var(--primary-light)] focus:bg-[var(--primary-light)] focus:outline-none"
                        >
                          <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${service.bg} ${service.color} transition-transform group-hover:scale-110`}>
                            {service.icon}
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-gray-800 group-hover:text-[var(--primary-dark)]">{service.name}</span>
                            <span className="mt-0.5 block text-xs leading-snug text-gray-500">{service.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Cybersécurité */}
            <div className="relative" ref={cyberDropdownRef}>
              <button
                onClick={() => setCyberDropdownOpen((prev) => !prev)}
                aria-expanded={cyberDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] xl:text-base ${textColor} ${textHoverColor}`}
              >
                Cybersécurité
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${cyberDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {cyberDropdownOpen && (
                <div role="menu" className="absolute left-0 top-full z-50 w-[360px] pt-3">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

                    {/* Header du dropdown */}
                    <div className="bg-gradient-to-r from-red-700 to-red-500 px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/70">Protection avancée</p>
                      <p className="mt-0.5 text-base font-bold text-white">Cybersécurité</p>
                    </div>

                    {/* Items */}
                    <div className="grid grid-cols-1 gap-px bg-gray-100 p-px">
                      {cyberItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className="group flex items-start gap-3 bg-white px-4 py-3.5 transition-colors hover:bg-red-50 focus:bg-red-50 focus:outline-none"
                        >
                          <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                            {item.icon}
                          </span>
                          <span>
                            <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 group-hover:text-red-700">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-gray-500">{item.desc}</span>
                          </span>
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

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
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <div className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-4 py-2.5">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">Teknosure</p>
                  <p className="text-sm font-bold text-white">Nos domaines d'expertise IT</p>
                </div>
                <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 bg-white px-3 py-2.5 text-sm transition-colors hover:bg-[var(--primary-light)]"
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${service.bg} ${service.color}`}>
                        {service.icon}
                      </span>
                      <span className="font-medium text-gray-700">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bloc Cybersécurité */}
              <div className="overflow-hidden rounded-xl border border-red-200">
                <div className="bg-gradient-to-r from-red-700 to-red-500 px-4 py-2.5">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">Protection avancée</p>
                  <p className="text-sm font-bold text-white">Cybersécurité</p>
                </div>
                <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2">
                  {cyberItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 bg-white px-3 py-2.5 text-sm transition-colors hover:bg-red-50"
                    >
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

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
