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
  const currentSubtitle = active?.subtitle ?? subtitle;

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">

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

      {/* ── Contenu texte + CTAs ─────────────────────────────────────────── */}
      <div
        className={`absolute inset-x-0 px-6 lg:px-10 xl:px-16 ${
          hasTabs
            ? "bottom-64 sm:bottom-72 lg:bottom-80 xl:bottom-96"
            : "bottom-20 lg:bottom-24 xl:bottom-32"
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto max-w-7xl">

          {currentTagline && (
            <p
              key={`tagline-${activeTab}`}
              className={`mb-3 animate-fade-in text-sm font-medium uppercase tracking-widest ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {currentTagline}
            </p>
          )}

          <h1
            key={`title-${activeTab}`}
            className={`mb-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {currentTitleAccent && (
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentTitleAccent}{" "}
              </span>
            )}
            <span className="whitespace-nowrap">{currentTitle}</span>
          </h1>

          {currentSubtitle && (
            <p
              key={`subtitle-${activeTab}`}
              className={`mb-8 max-w-2xl text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {currentSubtitle}
            </p>
          )}

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#0D6EA1] to-[#1B9AD2] px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className={`inline-flex items-center gap-2 rounded-full border-2 px-8 py-3.5 font-semibold backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent ${
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
          </div>
        </div>
      </div>

      {/* ── Barre d'onglets ──────────────────────────────────────────────── */}
      {hasTabs && (
        <div
          className="absolute bottom-24 left-0 right-0 bg-transparent"
          style={{ zIndex: 10 }}
        >
          <div
            className="flex w-full overflow-x-auto"
            role="tablist"
            aria-label="Nos expertises"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.href}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabClick(index)}
                  className={`relative flex-1 shrink-0 px-6 py-5 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:text-base ${
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {tab.label}

                  {/* Barre de base : blanche si inactif, bleue pleine si actif */}
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

                  {/* Barre de progression : recouvre la barre bleue en blanc pour montrer le temps restant */}
                  {isActive && (
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
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
