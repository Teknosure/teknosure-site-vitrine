"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  FileSearch,
  Building2,
  Cloud,
  Wifi,
  Server,
  Headset,
  Mail,
  Wrench,
  Globe,
  Smartphone,
  CodeXml,
  Bot,
  Workflow,
  TrendingUp,
} from "lucide-react";

type MenuItem = {
  label: string;
  desc: string;
  href: string;
  icon: ReactNode;
};

type MenuSection = {
  name: string;
  href: string;
  items: MenuItem[];
};

const iconClass = "h-5 w-5";
const stroke = 1.5;

const menuSections: MenuSection[] = [
  {
    name: "Cybersécurité & Conformité",
    href: "/services/cybersecurite",
    items: [
      {
        label: "Offre TPE / PME",
        desc: "Audits, sensibilisation et protection adaptés aux petites structures.",
        href: "/services/cybersecurite/tpe-pme",
        icon: <ShieldCheck className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Offre ETI / Grands comptes",
        desc: "SOC 24/7, conformité NIS2 / ISO 27001 et gouvernance de la sécurité.",
        href: "/services/cybersecurite/eti",
        icon: <Building2 className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Audit de sécurité",
        desc: "Diagnostic, tests d'intrusion et plan d'action priorisé.",
        href: "/services/cybersecurite/audit",
        icon: <FileSearch className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
    ],
  },
  {
    name: "Infrastructure, réseaux & cloud",
    href: "/services/cloud",
    items: [
      {
        label: "Migration cloud",
        desc: "Cadrage, bascule et exploitation AWS, Azure ou GCP.",
        href: "/services/cloud/migration",
        icon: <Cloud className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Infrastructure réseau",
        desc: "Architecture, segmentation et supervision du socle réseau.",
        href: "/services/cloud/infrastructure",
        icon: <Wifi className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Hébergement hybride",
        desc: "On-premise, cloud public et privé selon vos contraintes.",
        href: "/services/cloud/hebergement",
        icon: <Server className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
    ],
  },
  {
    name: "Infogérance & Services Managés",
    href: "/services/infogerance",
    items: [
      {
        label: "Infogérance serveurs",
        desc: "Exploitation, MCO et supervision de vos serveurs.",
        href: "/services/infogerance/serveurs",
        icon: <Server className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Microsoft 365",
        desc: "Messagerie, collaboration et durcissement de votre tenant.",
        href: "/services/infogerance/m365",
        icon: <Mail className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Support & MCO",
        desc: "Support utilisateurs, incidents et continuité de service.",
        href: "/services/infogerance/support",
        icon: <Headset className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
    ],
  },
  {
    name: "Apps & Solutions sur mesure",
    href: "/services/ingenierie",
    items: [
      {
        label: "Applications web",
        desc: "Portails métiers et applications web sur architectures modernes.",
        href: "/services/ingenierie/web",
        icon: <Globe className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Applications mobile",
        desc: "Applications iOS et Android adaptées à vos processus.",
        href: "/services/ingenierie/mobile",
        icon: <Smartphone className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Intégrations API",
        desc: "Connexion de vos outils, données et SI existants.",
        href: "/services/ingenierie/api",
        icon: <CodeXml className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
    ],
  },
  {
    name: "IA et automatisation",
    href: "/services/ia",
    items: [
      {
        label: "Agents IA",
        desc: "Copilotes et agents intégrés à vos outils métier.",
        href: "/services/ia/agents",
        icon: <Bot className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Automatisation RPA",
        desc: "Automatisation des processus répétitifs et des workflows.",
        href: "/services/ia/rpa",
        icon: <Workflow className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
      {
        label: "Analyse prédictive",
        desc: "Aide à la décision à partir de vos données d'exploitation.",
        href: "/services/ia/predictive",
        icon: <TrendingUp className={iconClass} strokeWidth={stroke} aria-hidden="true" />,
      },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOverlayOpen, setServicesOverlayOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pagesWithHero = [
    "/etudes-de-cas", "/a-propos", "/contact", "/blog", "/tpe-pme",
    "/tpe-pme/cybersecurite", "/tpe-pme/cloud", "/tpe-pme/infogerance",
    "/tpe-pme/ingenierie", "/tpe-pme/ia", "/tpe-pme/infra-it",
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
    if (servicesOverlayOpen) {
      const idx = menuSections.findIndex(
        (section) =>
          pathname === section.href ||
          pathname?.startsWith(`${section.href}/`) ||
          section.items.some((item) => pathname === item.href.split("#")[0]),
      );
      setActiveMenuIndex(idx >= 0 ? idx : 0);
    }
  }, [servicesOverlayOpen, pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
    pathname?.startsWith("/eti/");

  const navLinkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname?.startsWith(href);
    const base = "relative text-sm font-medium transition-colors xl:text-base nav-link";
    if (active) {
      return `${base} nav-link-active ${isTransparent && isDarkBg ? "text-white" : "text-[var(--primary)]"}`;
    }
    return `${base} ${textColor} ${textHoverColor}`;
  };

  const activeSection = menuSections[activeMenuIndex] ?? menuSections[0];

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

            <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
              <Link href="/" className={navLinkClass("/")}>
                Accueil
              </Link>

              <div onMouseEnter={openOverlay} onMouseLeave={closeOverlay} className="relative">
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
              <Link href="/blog" className={navLinkClass("/blog")}>
                Articles
              </Link>
              <Link href="/contact" className={navLinkClass("/contact")}>
                Contact
              </Link>
            </nav>

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

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <nav className="mx-auto max-w-lg px-4 py-4 sm:px-6">
              <div className="space-y-0.5">
                <Link
                  href="/"
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === "/"
                      ? "bg-[var(--primary-light)] text-[var(--primary)] font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span>Accueil</span>
                </Link>

                <p className="px-4 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                  Nos Services & Solutions
                </p>
                {menuSections.map((section) => {
                  const active = pathname === section.href || pathname?.startsWith(`${section.href}/`);
                  return (
                    <Link
                      key={section.href}
                      href={section.href}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-[var(--primary-light)] text-[var(--primary)] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{section.name}</span>
                    </Link>
                  );
                })}

                {(["À propos|/a-propos", "Nos Réalisations|/etudes-de-cas", "Articles|/blog", "Contact|/contact"] as const).map((entry) => {
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
                  {lang === "FR" ? "Français (FR)" : "English (EN)"}
                </button>
              </div>
            </nav>
          </div>
        )}

        {servicesOverlayOpen && (
          <>
            <div
              className="fixed inset-0 top-16 z-40 hidden lg:block sm:top-20"
              onClick={() => setServicesOverlayOpen(false)}
              aria-hidden="true"
            />
            <div
              className="absolute left-4 right-4 top-full z-[60] hidden overflow-hidden rounded-b-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.18)] lg:left-10 lg:right-auto lg:block lg:w-[min(920px,calc(100%-5rem))]"
              role="dialog"
              aria-label="Nos Services & Solutions"
              onMouseEnter={() => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); }}
              onMouseLeave={closeOverlay}
              style={{ backgroundColor: "#ffffff", animation: "slideDownFadeIn 0.18s ease-out both" }}
            >
              <div className="grid min-h-[300px] grid-cols-[240px_1fr] md:grid-cols-[280px_1fr]">
                <nav className="border-r border-gray-100 bg-white py-3">
                  {menuSections.map((section, index) => {
                    const selected = index === activeMenuIndex;
                    return (
                      <button
                        key={section.href}
                        type="button"
                        onMouseEnter={() => setActiveMenuIndex(index)}
                        onFocus={() => setActiveMenuIndex(index)}
                        onClick={() => setActiveMenuIndex(index)}
                        className={`flex w-full items-center justify-between px-5 py-3.5 text-left text-sm transition-colors ${
                          selected
                            ? "bg-[var(--primary-light)] font-medium text-[var(--primary-dark)]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{section.name}</span>
                        <svg className={`h-4 w-4 shrink-0 ${selected ? "text-[var(--primary)]" : "text-gray-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    );
                  })}
                </nav>

                <div className="bg-white px-8 py-6">
                  <div className="flex flex-col gap-1">
                    {activeSection.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOverlayOpen(false)}
                        className="group flex items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-gray-50"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-[var(--primary)]">
                          {item.icon}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-gray-900 group-hover:text-[var(--primary-dark)]">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
                            {item.desc}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={activeSection.href}
                    onClick={() => setServicesOverlayOpen(false)}
                    className="mt-4 inline-flex items-center gap-1.5 px-2 text-sm font-medium text-[var(--primary-dark)] hover:underline"
                  >
                    Voir l&apos;expertise
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <style>{`
        @keyframes slideDownFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
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
