"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

type OverlayMode = "dark" | "light";

export interface HeroTab {
  label: string;
  href: string;
  imageSrc?: string;
  tagline?: string;
  titleAccent?: string;
  title?: string;
  titleBreak?: boolean;
  subtitle?: string;
}

interface FullscreenHeroProps {
  tagline?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  overlayMode?: OverlayMode;
  tabs?: HeroTab[];
  autoPlayInterval?: number;
}

export default function FullscreenHero({
  tagline,
  title,
  titleAccent,
  subtitle,
  primaryLabel = "Nous contacter",
  primaryHref = "/contact",
  secondaryLabel = "Nos services",
  secondaryHref = "/services",
  imageSrc = "/images/hero-bg.png",
  overlayMode = "dark",
  tabs,
  autoPlayInterval = 9000,
}: FullscreenHeroProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeTabRef = useRef(0);

  const isDark = overlayMode === "dark";
  const hasTabs = tabs && tabs.length > 0;

  /* ── Auto-rotation ──────────────────────────────────────────────────── */
  const startAutoPlay = useCallback(() => {
    if (!hasTabs) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);

    // Progression (mise à jour toutes les 100ms)
    const step = (100 / autoPlayInterval) * 100;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 100);

    // Changement d'onglet
    intervalRef.current = setInterval(() => {
      const next = (activeTabRef.current + 1) % (tabs?.length ?? 1);
      activeTabRef.current = next;
      setActiveTab(next);
      setProgress(0);
    }, autoPlayInterval);
  }, [hasTabs, autoPlayInterval, tabs]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startAutoPlay]);

  const handleTabClick = (index: number) => {
    activeTabRef.current = index;
    setActiveTab(index);
    startAutoPlay();
  };

  const active = tabs?.[activeTab];
  const currentTagline = active?.tagline ?? tagline;
  const currentTitleAccent = active?.titleAccent ?? titleAccent;
  const currentTitle = active?.title ?? title;
  const currentTitleBreak = active?.titleBreak ?? false;
  const currentSubtitle = active?.subtitle ?? subtitle;

  /* ── Typewriter sur titleAccent ─────────────────────────────────────── */
  const [typedAccent, setTypedAccent] = useState(currentTitleAccent ?? "");
  const typewriterRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const target = currentTitleAccent ?? "";
    setTypedAccent("");
    let i = 0;
    const tick = () => {
      i++;
      setTypedAccent(target.slice(0, i));
      if (i < target.length) {
        typewriterRef.current = setTimeout(tick, 45);
      }
    };
    // Petit délai avant de commencer (laisse le fade-up se lancer d'abord)
    typewriterRef.current = setTimeout(tick, 120);
    return () => {
      if (typewriterRef.current) clearTimeout(typewriterRef.current);
    };
  }, [activeTab, currentTitleAccent]);

  return (
  <section className="relative flex min-h-[600px] flex-col overflow-hidden pb-12 sm:pb-16 lg:min-h-[85vh] lg:pb-20 xl:h-screen">
      {/* Chevron bas animé pour indiquer la suite */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* ── Images — toutes pré-chargées, crossfade via opacité ────────── */}
      {hasTabs ? (
        tabs.map((tab, index) => (
          <Image
            key={tab.imageSrc ?? index}
            src={tab.imageSrc ?? imageSrc}
            alt=""
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
              style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              opacity: activeTab === index ? 1 : 0,
              transition: "opacity 2s ease-in-out",
            }}
          />
        ))
      ) : (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ zIndex: 1 }}
        />
      )}

      {/* ── Overlay ─────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-linear-to-t from-gray-950/95 via-gray-900/50 to-gray-900/20"
            : "bg-linear-to-t from-white/95 via-white/45 to-transparent"
        }`}
        style={{ zIndex: 2 }}
      />

      {/* ── Contenu texte + CTAs — centré verticalement dans l'espace disponible ── */}
      <div
        className="relative flex flex-1 items-center px-5 sm:px-6 lg:px-10 xl:px-16"
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto w-full max-w-7xl">

          {currentTagline && (
            <p
              key={`tagline-${activeTab}`}
              className={`animate-hero-tagline mb-3 text-sm font-medium uppercase tracking-widest ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {currentTagline}
            </p>
          )}

          <h1
            key={`title-${activeTab}`}
            className={`animate-hero-title mb-4 max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {currentTitleAccent && (
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {typedAccent}
                <span
                  className="inline-block w-[3px] translate-y-1 rounded-sm bg-cyan-400"
                  style={{
                    height: "0.85em",
                    marginLeft: "2px",
                    opacity: typedAccent.length < (currentTitleAccent?.length ?? 0) ? 1 : 0,
                    transition: "opacity 0.15s",
                  }}
                />
                {" "}
              </span>
            )}
            <span className="break-words">{currentTitle}</span>
          </h1>

          {currentSubtitle && (
            <p
              key={`subtitle-${activeTab}`}
              className={`animate-hero-subtitle mb-6 max-w-2xl text-sm leading-relaxed sm:text-base lg:mb-8 lg:text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {currentSubtitle}
            </p>
          )}

          <div key={`cta-${activeTab}`} className="animate-hero-cta flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 lg:text-base"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {primaryLabel}
            </Link>
            {hasTabs && active?.href && active.href !== "/" ? (
              <Link
                href={active.href}
                className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 lg:text-base ${
                  isDark
                    ? "border-white/50 text-white hover:border-white hover:bg-white/10"
                    : "border-gray-400 text-gray-700 hover:border-gray-600 hover:bg-gray-50"
                }`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {`Offre ${active.label}`}
              </Link>
            ) : (
              <Link
                href={secondaryHref}
                className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 lg:text-base ${
                  isDark
                    ? "border-white/50 text-white hover:border-white hover:bg-white/10"
                    : "border-gray-400 text-gray-700 hover:border-gray-600 hover:bg-gray-50"
                }`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── Barre d'onglets — toujours en bas ───────────────────────────── */}
      {hasTabs && (
        <div
          className="relative w-full bg-transparent"
          style={{ zIndex: 10 }}
        >
          <div
            className="flex w-full overflow-x-auto scrollbar-none"
            role="tablist"
            aria-label="Nos expertises"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              const isNavigable = isActive && tab.href && tab.href !== "/";

              // Onglet actif avec href → vrai lien de navigation
              if (isNavigable) {
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    role="tab"
                    aria-selected={true}
                    className={`relative shrink-0 px-4 py-4 text-xs font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:flex-1 sm:px-6 sm:py-5 sm:text-sm lg:text-base text-white`}
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      {tab.label}
                      <svg className="h-3 w-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <span
                      className="absolute bottom-0"
                      style={{
                        left: "24px",
                        right: "24px",
                        height: "2px",
                        background: "linear-gradient(to right, #60a5fa, #22d3ee)",
                      }}
                    />
                    <span
                      className="absolute bottom-0"
                      style={{
                        left: `calc(24px + ${progress}% * (100% - 48px) / 100)`,
                        right: "24px",
                        height: "2px",
                        background: "rgba(255,255,255,0.25)",
                        transition: "left 0.1s linear",
                      }}
                    />
                  </Link>
                );
              }

              // Onglet inactif → bouton qui change l'onglet
              return (
                <button
                  key={tab.href}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabClick(index)}
                  className={`relative shrink-0 px-4 py-4 text-xs font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:flex-1 sm:px-6 sm:py-5 sm:text-sm lg:text-base ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {tab.label}
                  <span
                    className="absolute bottom-0"
                    style={{
                      left: "24px",
                      right: "24px",
                      height: "2px",
                      background: isActive
                        ? "linear-gradient(to right, #60a5fa, #22d3ee)"
                        : "rgba(255,255,255,0.4)",
                      transition: "background 0.3s ease",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
