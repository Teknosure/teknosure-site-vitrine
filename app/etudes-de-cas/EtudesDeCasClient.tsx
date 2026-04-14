"use client";

import { useState } from "react";
import Link from "next/link";
import FullscreenHero from "@/app/components/hero/FullscreenHero";

/* ─────────────────────────────────────────────────────────────────────────
   Données des réalisations
──────────────────────────────────────────────────────────────────────────── */
const realisations = [
  {
    id: 1,
    client: "Secteur Formation & Ingénierie",
    sector: "PME",
    initials: "IT",
    accentGradient: "from-[var(--primary-dark)] to-[var(--primary)]",
    badgeBg: "bg-[var(--primary-light)]",
    badgeText: "text-[var(--primary-dark)]",
    domaine: "Infogérance",
    domaineColor: "bg-emerald-50 text-emerald-700",
    title: "Gestion externalisée du SI",
    result: "Disponibilité SI > 99,9 %",
    serviceHref: "/services/infogerance",
  },
  {
    id: 2,
    client: "Secteur Formation & Ingénierie",
    sector: "PME",
    initials: "IT",
    accentGradient: "from-[var(--primary-dark)] to-[var(--primary)]",
    badgeBg: "bg-[var(--primary-light)]",
    badgeText: "text-[var(--primary-dark)]",
    domaine: "Cybersécurité",
    domaineColor: "bg-red-50 text-red-700",
    title: "Sécurisation de l'infrastructure réseau",
    result: "Périmètre sécurisé intégralement",
    serviceHref: "/services/cybersecurite",
  },
  {
    id: 3,
    client: "Secteur Distribution B2B",
    sector: "PME",
    initials: "DC",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Site vitrine & référencement",
    result: "Score performance > 98/100",
    serviceHref: "/services/ingenierie",
  },
  {
    id: 4,
    client: "Secteur Distribution B2B",
    sector: "PME",
    initials: "DC",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Plateforme e-commerce",
    result: "Taux de conversion + 34 %",
    serviceHref: "/services/ingenierie",
  },
  {
    id: 5,
    client: "Secteur Distribution B2B",
    sector: "PME",
    initials: "DC",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Application mobile & dashboard métier",
    result: "Productivité terrain + 40 %",
    serviceHref: "/services/ingenierie",
  },
  {
    id: 6,
    client: "Secteur Distribution B2B",
    sector: "PME",
    initials: "DC",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "ERP & gestion des stocks",
    result: "Ruptures de stock − 80 %",
    serviceHref: "/services/ingenierie",
  },
  {
    id: 7,
    client: "Secteur Conformité réglementaire",
    sector: "PME",
    initials: "CR",
    accentGradient: "from-violet-600 to-blue-500",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Plateforme de gestion des missions",
    result: "Délai de rapport − 70 %",
    serviceHref: "/services/ingenierie",
  },
  {
    id: 8,
    client: "Secteur Conformité réglementaire",
    sector: "PME",
    initials: "CR",
    accentGradient: "from-violet-600 to-blue-500",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Application mobile terrain",
    result: "Temps de saisie − 65 %",
    serviceHref: "/services/ingenierie",
  },
];

const domaines = ["Tous", "Infogérance", "Cybersécurité", "Ingénierie logicielle"];

/* ─────────────────────────────────────────────────────────────────────────
   Composant
──────────────────────────────────────────────────────────────────────────── */
export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? realisations
      : realisations.filter((r) => r.domaine === activeFilter);

  const clients = Array.from(new Set(filtered.map((r) => r.client)));

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Teknosure — Projets livrés"
        titleAccent="Nos réalisations"
        title="Des projets, des résultats"
        subtitle="Une sélection de missions menées pour nos clients — sans divulguer leur identité. Chaque réalisation illustre notre savoir-faire concret en cybersécurité, infogérance et ingénierie logicielle."
        primaryLabel="Démarrer un projet"
        primaryHref="/contact"
        secondaryLabel="Nos services"
        secondaryHref="/services"
        imageSrc="/images/nos-realisation.jpg"
        overlayMode="dark"
      />

      {/* ── Filtres ──────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-4 lg:px-8">
          <span className="mr-2 shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Filtrer :
          </span>
          {domaines.map((d) => (
            <button
              key={d}
              onClick={() => setActiveFilter(d)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeFilter === d
                  ? "bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {d}
              {d !== "Tous" && (
                <span className="ml-2 text-xs opacity-70">
                  ({realisations.filter((r) => r.domaine === d).length})
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-xs text-gray-400">
            {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Réalisations groupées par client ─────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {clients.length === 0 ? (
            <p className="py-20 text-center text-gray-400">Aucune réalisation dans cette catégorie.</p>
          ) : (
            <div className="flex flex-col gap-20">
              {clients.map((clientName) => {
                const group = filtered.filter((r) => r.client === clientName);
                const meta = group[0];

                return (
                  <div key={clientName}>

                    {/* En-tête client */}
                    <div className="mb-10 flex items-center gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${meta.accentGradient} text-sm font-bold text-white shadow-md`}>
                        {meta.initials}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{clientName}</h2>
                        <p className="text-xs text-gray-400">{meta.sector}</p>
                      </div>
                      <div className="ml-4 h-px flex-1 bg-gray-200" />
                      <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeBg} ${meta.badgeText}`}>
                        {group.length} réalisation{group.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Grille projets */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {group.map((r) => (
                        <article
                          key={r.id}
                          className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-border)] hover:shadow-lg"
                        >
                          {/* Domaine */}
                          <span className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${r.domaineColor}`}>
                            {r.domaine}
                          </span>

                          {/* Titre */}
                          <h3 className="mb-6 flex-1 text-base font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
                            {r.title}
                          </h3>

                          {/* Résultat clé */}
                          <div className="mb-6 rounded-xl bg-gray-50 px-5 py-4">
                            <p className="text-lg font-extrabold text-[var(--primary)]">{r.result}</p>
                            <p className="mt-0.5 text-xs text-gray-400">Résultat clé</p>
                          </div>

                          {/* Lien service */}
                          <Link
                            href={r.serviceHref}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-all hover:gap-3"
                          >
                            Voir le service associé
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </article>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[var(--primary-dark)] via-[var(--primary-mid)] to-[var(--primary)] py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="mb-8 text-lg text-[var(--primary-border)]">
            Que vous ayez un projet précis ou juste une idée,
            parlons-en — l&apos;estimation initiale est offerte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[var(--primary-dark)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Démarrer un projet
            </Link>
            <Link
              href="/a-propos"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
