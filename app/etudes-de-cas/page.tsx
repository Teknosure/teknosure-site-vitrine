"use client";

import { useState } from "react";
import Link from "next/link";
import FullscreenHero from "@/app/components/hero/FullscreenHero";

/* ─────────────────────────────────────────────────────────────────────────
   Données des réalisations
──────────────────────────────────────────────────────────────────────────── */
const realisations = [
  /* ── FI2C MD ─────────────────────────────────────────────────────────── */
  {
    id: 1,
    client: "FI2C MD",
    sector: "Formation & Ingénierie",
    initials: "FI",
    accentGradient: "from-[var(--primary-dark)] to-[var(--primary)]",
    badgeBg: "bg-[var(--primary-light)]",
    badgeText: "text-[var(--primary-dark)]",
    domaine: "Infogérance",
    domaineColor: "bg-emerald-50 text-emerald-700",
    title: "Infogérance complète du système d'information",
    description:
      "Prise en charge totale du SI de FI2C MD : supervision proactive 24/7, gestion du parc matériel, support utilisateurs, maintenance préventive et corrective. Mise en place de tableaux de bord de monitoring en temps réel.",
    tags: ["Support IT", "Monitoring", "Helpdesk", "Gestion de parc", "Datadog"],
    results: [
      { label: "Disponibilité SI", value: "99.9%" },
      { label: "Temps de résolution", value: "<2h" },
    ],
    serviceHref: "/services/infogerance",
    highlight: true,
  },
  {
    id: 2,
    client: "FI2C MD",
    sector: "Formation & Ingénierie",
    initials: "FI",
    accentGradient: "from-[var(--primary-dark)] to-[var(--primary)]",
    badgeBg: "bg-[var(--primary-light)]",
    badgeText: "text-[var(--primary-dark)]",
    domaine: "Cybersécurité",
    domaineColor: "bg-red-50 text-red-700",
    title: "Sécurisation de l'infrastructure réseau",
    description:
      "Audit de sécurité complet, déploiement de pare-feu nouvelle génération Fortinet, segmentation réseau, mise en place d'une politique de mots de passe et d'une authentification multi-facteurs (MFA) pour l'ensemble des collaborateurs.",
    tags: ["Fortinet", "MFA", "VLAN", "Audit", "Firewall"],
    results: [
      { label: "Vulnérabilités corrigées", value: "100%" },
      { label: "Périmètre sécurisé", value: "Intégral" },
    ],
    serviceHref: "/services/cybersecurite",
    highlight: false,
  },

  /* ── Distrtherm Services ─────────────────────────────────────────────── */
  {
    id: 3,
    client: "Distrtherm Services",
    sector: "Distribution thermique & Génie climatique",
    initials: "DS",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Site vitrine",
    description:
      "Création d'un site vitrine moderne, rapide et optimisé SEO présentant les offres, expertises et actualités de Distrtherm Services. Design responsive, performances Core Web Vitals optimisées.",
    tags: ["Next.js", "Tailwind CSS", "CMS", "SEO"],
    results: [
      { label: "Score Lighthouse", value: "98/100" },
      { label: "Temps de chargement", value: "<1s" },
    ],
    serviceHref: "/services/ingenierie",
    highlight: false,
  },
  {
    id: 4,
    client: "Distrtherm Services",
    sector: "Distribution thermique & Génie climatique",
    initials: "DS",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Application e-commerce B2B/B2C",
    description:
      "Boutique en ligne complète avec catalogue produits, configurateur de devis en ligne, tunnel de paiement sécurisé Stripe, gestion des commandes et espace client personnalisé.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Auth"],
    results: [
      { label: "Commandes traitées", value: "500+/mois" },
      { label: "Taux de conversion", value: "+34%" },
    ],
    serviceHref: "/services/ingenierie",
    highlight: true,
  },
  {
    id: 5,
    client: "Distrtherm Services",
    sector: "Distribution thermique & Génie climatique",
    initials: "DS",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Dashboard & Application mobile techniciens",
    description:
      "Tableau de bord centralisé pour piloter les ventes, stocks et interventions en temps réel. Application mobile dédiée aux techniciens terrain pour la planification, le suivi des interventions et la remontée d'informations.",
    tags: ["React", "React Native", "Node.js", "WebSocket"],
    results: [
      { label: "Techniciens équipés", value: "20+" },
      { label: "Gain de productivité", value: "+40%" },
    ],
    serviceHref: "/services/ingenierie",
    highlight: false,
  },

  /* ── Conformitas ─────────────────────────────────────────────────────── */
  {
    id: 6,
    client: "Distrtherm Services",
    sector: "Distribution thermique & Génie climatique",
    initials: "DS",
    accentGradient: "from-orange-500 to-amber-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "CRM & gestion de stocks avec Odoo",
    description:
      "Déploiement et personnalisation d'Odoo pour la gestion des stocks, des approvisionnements et de la relation client. Paramétrage des modules Inventory, Purchase, CRM et intégration avec l'e-commerce existant pour une vision 360° en temps réel.",
    tags: ["Odoo", "Python", "PostgreSQL", "ERP", "CRM"],
    results: [
      { label: "Ruptures de stock", value: "-80%" },
      { label: "Délai de traitement", value: "-50%" },
    ],
    serviceHref: "/services/ingenierie",
    highlight: false,
  },
  {
    id: 8,
    client: "Conformitas",
    sector: "Conformité réglementaire & CEE",
    initials: "CO",
    accentGradient: "from-violet-600 to-blue-500",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Application mobile Conformitas",
    description:
      "Développement d'une application mobile cross-platform permettant aux inspecteurs de gérer leurs missions terrain : consultation des dossiers, saisie des constats, signature électronique et synchronisation automatique avec le back-office.",
    tags: ["React Native", "TypeScript", "Node.js", "API REST"],
    results: [
      { label: "Inspecteurs équipés", value: "30+" },
      { label: "Temps de saisie", value: "-65%" },
    ],
    serviceHref: "/services/ingenierie",
    highlight: false,
  },
  {
    id: 7,
    client: "Conformitas",
    sector: "Conformité réglementaire & CEE",
    initials: "CO",
    accentGradient: "from-violet-600 to-blue-500",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    domaine: "Ingénierie logicielle",
    domaineColor: "bg-violet-50 text-violet-700",
    title: "Plateforme de gestion des inspections CEE",
    description:
      "Plateforme de gestion des Certificats d'Économies d'Énergie : planification des visites, validation terrain via application mobile, génération automatique des rapports CEE conformes aux exigences réglementaires.",
    tags: ["React", "Python", "API REST", "Mobile"],
    results: [
      { label: "Inspections gérées", value: "1 200+/an" },
      { label: "Délai de rapport", value: "-70%" },
    ],
    serviceHref: "/services/ingenierie",
    highlight: true,
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

  /* Grouper par client dans l'ordre d'apparition */
  const clients = Array.from(new Set(filtered.map((r) => r.client)));

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Teknosure — Projets livrés"
        titleAccent="Nos réalisations"
        title="Ce que nous avons bâti"
        subtitle="Des projets concrets, des résultats mesurables. Chaque réalisation reflète notre engagement pour la qualité, la performance et la durabilité — pour des clients exigeants."
        primaryLabel="Démarrer un projet"
        primaryHref="/contact"
        secondaryLabel="Nos services"
        secondaryHref="/services/cybersecurite"
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
                      {/* Nb projets */}
                      <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeBg} ${meta.badgeText}`}>
                        {group.length} projet{group.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Grille projets */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {group.map((r) => (
                        <article
                          key={r.id}
                          className={`group relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                            r.highlight ? "border-[var(--primary-border)] ring-1 ring-[var(--primary-light)]" : "border-gray-200 hover:border-[var(--primary-border)]"
                          }`}
                        >
                          {/* Badge "Projet phare" */}
                          {r.highlight && (
                            <span className="absolute right-4 top-4 rounded-full bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] px-3 py-0.5 text-xs font-semibold text-white shadow">
                              ★ Projet phare
                            </span>
                          )}

                          {/* Domaine */}
                          <span className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${r.domaineColor}`}>
                            {r.domaine}
                          </span>

                          {/* Titre */}
                          <h3 className="mb-3 text-base font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
                            {r.title}
                          </h3>

                          {/* Description */}
                          <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                            {r.description}
                          </p>

                          {/* Tags techno */}
                          <div className="mb-5 flex flex-wrap gap-2">
                            {r.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Résultats */}
                          <div className="mb-5 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4">
                            {r.results.map((res) => (
                              <div key={res.label}>
                                <p className="text-lg font-extrabold text-[var(--primary)]">{res.value}</p>
                                <p className="text-xs text-gray-400">{res.label}</p>
                              </div>
                            ))}
                          </div>

                          {/* Lien */}
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
