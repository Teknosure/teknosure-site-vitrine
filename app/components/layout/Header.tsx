"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOverlayOpen, setServicesOverlayOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      name: "Infrastructure, réseaux & cloud",
      desc: "Migration, hébergement, hybride — on/off-premise, cloud public & privé.",
      href: "/services/cloud",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "text-sky-500",
      bg: "bg-sky-50",
      border: "border-sky-100",
      cardHover: "hover:bg-sky-50 hover:border-sky-300",
      titleHover: "group-hover:text-sky-700",
      arrowColor: "text-sky-500",
      iconHover: "group-hover:bg-sky-100 group-hover:text-sky-600",
      accentBar: "from-sky-400 to-sky-600",
      glowColor: "rgba(14,165,233,0.15)",
      tag: "Cloud & Réseau",
      subLinks: [
        { label: "Migration cloud", href: "/services/cloud#migration" },
        { label: "Infrastructure réseau", href: "/services/cloud#infrastructure" },
        { label: "Hébergement hybride", href: "/services/cloud#hebergement" },
      ],
    },
    {
      name: "Infogérance & Services Managés",
      desc: "Serveurs, M365, MCO, postes & SLA garanti — externalisez votre DSI.",
      href: "/services/infogerance",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100",
      cardHover: "hover:bg-orange-50 hover:border-orange-300",
      titleHover: "group-hover:text-orange-700",
      arrowColor: "text-orange-500",
      iconHover: "group-hover:bg-orange-100 group-hover:text-orange-600",
      accentBar: "from-orange-400 to-orange-600",
      glowColor: "rgba(249,115,22,0.15)",
      tag: "Infogérance",
      subLinks: [
        { label: "Infogérance serveurs", href: "/services/infogerance#serveurs" },
        { label: "Microsoft 365", href: "/services/infogerance#m365" },
        { label: "Support & MCO", href: "/services/infogerance#support" },
      ],
    },
    {
      name: "Apps & Solutions sur mesure",
      desc: "Applications web & mobile, intégrations API, portails métiers sur mesure.",
      href: "/services/ingenierie",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "text-violet-500",
      bg: "bg-violet-50",
      border: "border-violet-100",
      cardHover: "hover:bg-violet-50 hover:border-violet-300",
      titleHover: "group-hover:text-violet-700",
      arrowColor: "text-violet-500",
      iconHover: "group-hover:bg-violet-100 group-hover:text-violet-600",
      accentBar: "from-violet-400 to-violet-600",
      glowColor: "rgba(139,92,246,0.15)",
      tag: "Développement",
      subLinks: [
        { label: "Applications web", href: "/services/ingenierie#web" },
        { label: "Applications mobile", href: "/services/ingenierie#mobile" },
        { label: "Intégrations API", href: "/services/ingenierie#api" },
      ],
    },
    {
      name: "IA et automatisation",
      desc: "Agents IA, RPA, analyse prédictive — automatisez vos processus métiers.",
      href: "/services/ia",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      cardHover: "hover:bg-emerald-50 hover:border-emerald-300",
      titleHover: "group-hover:text-emerald-700",
      arrowColor: "text-emerald-500",
      iconHover: "group-hover:bg-emerald-100 group-hover:text-emerald-600",
      accentBar: "from-emerald-400 to-emerald-600",
      glowColor: "rgba(16,185,129,0.15)",
      tag: "Intelligence Artificielle",
      subLinks: [
        { label: "Agents IA", href: "/services/ia#agents" },
        { label: "Automatisation RPA", href: "/services/ia#rpa" },
        { label: "Analyse prédictive", href: "/services/ia#predictive" },
      ],
    },
  ];

  const cyberItems = [
    {
      name: "Cybersécurité & Conformité",
      desc: "Protection de votre SI pour TPE/PME et ETI — audits, SOC 24/7, RGPD, ISO 27001 & NIS2.",
      href: "/services/cybersecurite",
      tag: "Cybersécurité",
      icon: (
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-100",
      cardHover: "hover:bg-red-50 hover:border-red-300",
      titleHover: "group-hover:text-red-700",
      arrowColor: "text-red-500",
      iconHover: "group-hover:bg-red-100 group-hover:text-red-600",
      accentBar: "from-red-400 to-rose-600",
      glowColor: "rgba(239,68,68,0.15)",
      subLinks: [
        { label: "Offre TPE / PME", href: "/tpe-pme/cybersecurite" },
        { label: "Offre ETI / Grands comptes", href: "/eti/cybersecurite" },
        { label: "Audit de sécurité", href: "/services/cybersecurite#audit" },
      ],
    },
  ];

  const openOverlay = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setServicesOverlayOpen(true), 80);
  }, []);

  const closeOverlay = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setServicesOverlayOpen(false), 120);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOverlayOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setServicesOverlayOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (servicesOverlayOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [servicesOverlayOpen, mobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isTransparent = !isScrolled && shouldBeTransparent && !servicesOverlayOpen;
  const textColor = isTransparent && isDarkBg ? "text-white/90" : "text-gray-600";
  const textHoverColor = isTransparent && isDarkBg ? "hover:text-white" : "hover:text-gray-900";

  const isNosSolutionsActive =
    pathname?.startsWith("/services/") ||
    pathname?.startsWith("/tpe-pme/") ||
    pathname?.startsWith("/eti/") ||
    pathname === "/services/cybersecurite";

  const navLinkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname?.startsWith(href);
    const base = "relative text-sm font-medium transition-colors xl:text-base nav-link";
    if (active) {
      return `${base} nav-link-active ${isTransparent && isDarkBg ? "text-white" : "text-[var(--primary)]"}`;
    }
    return `${base} ${textColor} ${textHoverColor}`;
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "border-transparent bg-transparent"
            : "border-b border-gray-200 bg-white shadow-sm"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between sm:h-20">

            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label="Teknosure — Accueil">
              <Image
                src="/images/Logo-Transparent-Teknosure1.png"
                alt="Teknosure"
                width={180}
                height={45}
                className="h-10 w-auto object-contain transition-all duration-300 sm:h-12"
                priority
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
              <Link href="/" className={navLinkClass("/")}>
                Accueil
              </Link>

              {/* Trigger overlay — survol ou clic */}
              <div onMouseEnter={openOverlay} onMouseLeave={closeOverlay}>
                <button
                  onClick={() => setServicesOverlayOpen((prev) => !prev)}
                  aria-expanded={servicesOverlayOpen}
                  aria-haspopup="dialog"
                  className={`nav-link relative flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] xl:text-base ${
                    servicesOverlayOpen || isNosSolutionsActive
                      ? `nav-link-active ${isTransparent && isDarkBg ? "text-white" : "text-[var(--primary)]"}`
                      : `${textColor} ${textHoverColor}`
                  }`}
                >
                  Nos Services & Solutions
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOverlayOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link href="/a-propos" className={navLinkClass("/a-propos")}>
                À propos
              </Link>
              <Link href="/etudes-de-cas" className={navLinkClass("/etudes-de-cas")}>
                Nos Réalisations
              </Link>
              <Link href="/contact" className={navLinkClass("/contact")}>
                Contact
              </Link>
            </nav>

            {/* CTA Desktop */}
            <div className="hidden items-center gap-3 lg:flex">
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

            {/* Hamburger mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                isTransparent && isDarkBg ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"
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

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <nav className="mx-auto max-w-lg px-4 py-4 sm:px-6">
              <div className="space-y-0.5">
                {/* Accueil mobile */}
                <Link
                  href="/"
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === "/"
                      ? "bg-[var(--primary-light)] text-[var(--primary)] font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>Accueil</span>
                  {pathname === "/" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  )}
                </Link>

                {/* Expertises IT mobile */}
                <div className={`overflow-hidden rounded-xl border ${isNosSolutionsActive ? "border-[var(--primary)]" : "border-gray-200"}`}>
                  <div className={`px-4 py-2.5 ${isNosSolutionsActive ? "bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)]" : "bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)]"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/70">Teknosure</p>
                        <p className="text-sm font-bold text-white">Nos Services & Solutions</p>
                      </div>
                      {isNosSolutionsActive && (
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
                          Page actuelle
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2">
                    {services.map((service) => {
                      const active = pathname === service.href;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                            active ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                          }`}
                        >
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${service.bg} ${service.color}`}>
                            {service.icon}
                          </span>
                          <span className={`font-medium ${active ? `${service.color} font-semibold` : "text-gray-700"}`}>
                            {service.name}
                          </span>
                          {active && <span className={`ml-auto h-1.5 w-1.5 rounded-full ${service.color.replace("text-", "bg-")}`} />}
                        </Link>
                      );
                    })}
                    {/* Cybersécurité — lien unique vers la page centrale */}
                    {(() => {
                      const cyberHref = "/services/cybersecurite";
                      const active = pathname === cyberHref || pathname === "/tpe-pme/cybersecurite" || pathname === "/eti/cybersecurite";
                      return (
                        <Link
                          href={cyberHref}
                          className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                            active ? "bg-red-50" : "bg-white hover:bg-gray-50"
                          }`}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </span>
                          <span className={`font-medium ${active ? "text-red-600 font-semibold" : "text-gray-700"}`}>
                            Cybersécurité & Conformité
                          </span>
                          {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-red-500" />}
                        </Link>
                      );
                    })()}
                  </div>
                </div>

                {(["À propos|/a-propos", "Nos Réalisations|/etudes-de-cas", "Contact|/contact"] as const).map((entry) => {
                  const [label, href] = entry.split("|");
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-[var(--primary-light)] text-[var(--primary)] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{label}</span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-gray-100 pt-4">
                <Link
                  href="/contact"
                  className="block w-full rounded-xl bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-5 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:opacity-90"
                >
                  Parlons de votre projet
                </Link>
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

      {/* ── Overlay — Nos Services & Solutions ──────────────────────────── */}
      {servicesOverlayOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Nos Services & Solutions"
        >
          {/* Backdrop cliquable */}
          <div
            className="absolute inset-0 bg-gray-950/75 backdrop-blur-sm"
            onClick={() => setServicesOverlayOpen(false)}
          />

          {/* Panel — taille fixe, ne grandit pas */}
          <div
            className="relative w-full bg-white shadow-2xl"
            onMouseEnter={() => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); }}
            onMouseLeave={closeOverlay}
            style={{ animation: "slideDownFadeIn 0.22s ease-out both" }}
          >
            {/* Espace pour le header fixe */}
            <div className="pt-16 sm:pt-20" />

            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">

              {/* Titre + bouton fermer */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--primary)]">Teknosure</p>
                  <h2 className="mt-0.5 text-xl font-bold text-gray-900">Nos Services & Solutions</h2>
                </div>
                <button
                  onClick={() => setServicesOverlayOpen(false)}
                  aria-label="Fermer"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-600"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ── Grille unique — Cyber en premier, puis IT ───────────── */}
              <div className="grid grid-cols-3 gap-3">
                {[...cyberItems, ...services].map((item, i) => (
                  <div
                    key={item.href}
                    className={`expertise-card group relative flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.cardHover}`}
                    style={{
                      animationDelay: `${i * 50}ms`,
                      animation: "fadeInUp 0.3s ease-out both",
                      "--glow": item.glowColor,
                    } as React.CSSProperties}
                  >
                    {/* Halo coloré */}
                    <span
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `radial-gradient(ellipse at 25% 25%, ${item.glowColor} 0%, transparent 70%)` }}
                    />

                    {/* Zone principale cliquable */}
                    <Link
                      href={item.href}
                      onClick={() => setServicesOverlayOpen(false)}
                      className="relative flex flex-col p-4 pb-3"
                    >
                      {/* Icône + Badge */}
                      <div className="mb-3 flex items-center gap-2.5">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.bg} ${item.color} ${item.border} ${item.iconHover}`}>
                          {item.icon}
                        </span>
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${item.bg} ${item.color} border ${item.border}`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Titre */}
                      <h4 className={`mb-1 text-sm font-bold leading-snug text-gray-900 transition-colors duration-200 ${item.titleHover}`}>
                        {item.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs leading-relaxed text-gray-500">
                        {item.desc}
                      </p>
                    </Link>

                    {/* Séparateur */}
                    <div className="mx-3 border-t border-gray-100" />

                    {/* Sous-liens */}
                    <div className="relative flex flex-col gap-0.5 px-3 py-2">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setServicesOverlayOpen(false)}
                          className={`sublink-item flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold text-gray-600 transition-all duration-150 hover:bg-gray-50 hover:translate-x-1 ${item.arrowColor.replace("text-", "hover:text-")}`}
                        >
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${item.bg} ${item.color} border ${item.border}`}>
                            <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          {sub.label}
                        </Link>
                      ))}
                    </div>

                    {/* Barre de couleur */}
                    <span className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${item.accentBar}`} />
                  </div>
                ))}
              </div>

              {/* CTA footer compact */}
              <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 px-5 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-gray-800">Vous ne savez pas par où commencer ?</p>
                  <p className="text-xs text-gray-500">Nos experts vous accompagnent sans engagement.</p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setServicesOverlayOpen(false)}
                  className="shrink-0 rounded-lg bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                >
                  Parlons de votre projet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDownFadeIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .expertise-card {
          border-color: #f3f4f6;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .expertise-card:hover {
          box-shadow: 0 20px 40px -8px var(--glow, rgba(0,0,0,0.12)), 0 8px 16px -4px rgba(0,0,0,0.06);
        }
        /* Indicateur de lien actif */
        .nav-link {
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          border-radius: 2px;
          background: currentColor;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-active::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
