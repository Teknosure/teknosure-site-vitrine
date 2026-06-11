"use client";

import { useState } from "react";
import Link from "next/link";
import FullscreenHero from "@/app/components/hero/FullscreenHero";

/* ─────────────────────────────────────────────────────────────────────────
   Données — Projets du PDF
──────────────────────────────────────────────────────────────────────────── */

type KPI = { value: string; label: string };
type Projet = {
  id: number;
  titre: string;
  secteur: string;
  tag: string;
  domaine: "Ingénierie logicielle" | "Infogérance" | "Cybersécurité";
  serviceHref: string;
  problematique: string;
  realisations: string[];
  kpis: KPI[];
  valeurAjoutee: string[];
  accentFrom: string;
  accentTo: string;
  domaineColor: string;
  iconPath: string;
};

const projets: Projet[] = [
  {
    id: 1,
    titre: "Plateforme Métier Gouvernementale",
    secteur: "Secteur Public",
    tag: "Djibouti",
    domaine: "Ingénierie logicielle",
    serviceHref: "/services/ingenierie",
    problematique:
      "Les porteurs de projets, startups et entreprises devaient effectuer de nombreuses démarches administratives via plusieurs organismes, entraînant des délais importants, un manque de visibilité sur l'avancement des dossiers et une expérience utilisateur complexe et fragmentée.",
    realisations: [
      "Conception et développement d'une plateforme numérique centralisée (MSMEs Djibouti)",
      "Gestion des demandes en ligne avec suivi des dossiers en temps réel",
      "Automatisation des workflows administratifs multi-organismes",
      "Intégration avec plusieurs services institutionnels gouvernementaux",
      "Portail dédié aux startups, PME et entreprises",
    ],
    kpis: [
      { value: "−60 %", label: "Délais de traitement" },
      { value: "80 %", label: "Tâches automatisées" },
      { value: "100 %", label: "Dossiers centralisés" },
      { value: "3×", label: "Rapidité de traitement" },
    ],
    valeurAjoutee: [
      "Modernisation des services publics",
      "Transparence renforcée",
      "Expérience utilisateur optimisée",
      "Centralisation des données",
      "Réduction des délais administratifs",
    ],
    accentFrom: "from-violet-600",
    accentTo: "to-blue-500",
    domaineColor: "bg-violet-50 text-violet-700 border-violet-100",
    iconPath:
      "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3",
  },
  {
    id: 2,
    titre: "Application Mobile Métier",
    secteur: "Distribution B2B",
    tag: "Distritherm Services",
    domaine: "Ingénierie logicielle",
    serviceHref: "/services/ingenierie",
    problematique:
      "Distritherm Services souhaitait moderniser sa présence digitale et offrir à ses clients un accès simple et rapide à l'ensemble de ses produits et services depuis un smartphone. Les principales difficultés : catalogue peu accessible sur mobile, manque de visibilité sur les gammes, processus peu ergonomique et absence totale d'une solution mobile dédiée.",
    realisations: [
      "Conception et développement d'une application mobile sur mesure (Android & iOS)",
      "Consultation du catalogue produits avec navigation par catégories et sous-catégories",
      "Présentation détaillée des produits, services, nouveautés et offres promotionnelles",
      "Interface d'administration centralisée pour la gestion du contenu",
      "Optimisation de l'expérience utilisateur mobile (UX/UI)",
      "Architecture évolutive prête pour l'ajout de fonctionnalités e-commerce et CRM",
    ],
    kpis: [
      { value: "2 stores", label: "Android & iOS" },
      { value: "12+", label: "Catégories produits" },
      { value: "100 %", label: "Catalogue accessible mobile" },
      { value: "Évolutive", label: "Architecture e-commerce ready" },
    ],
    valeurAjoutee: [
      "Image digitale renforcée",
      "Expérience client simplifiée",
      "Visibilité produits accrue",
      "Réduction des sollicitations manuelles",
      "Base technologique évolutive",
    ],
    accentFrom: "from-orange-500",
    accentTo: "to-amber-400",
    domaineColor: "bg-violet-50 text-violet-700 border-violet-100",
    iconPath:
      "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3",
  },
  {
    id: 3,
    titre: "Infogérance & Support Multi-Sites",
    secteur: "Services IT Managés",
    tag: "PME",
    domaine: "Infogérance",
    serviceHref: "/services/infogerance",
    problematique:
      "L'entreprise subissait des interruptions de service fréquentes, une gestion hétérogène de son parc informatique et des difficultés à maintenir un support réactif pour ses collaborateurs répartis sur plusieurs sites.",
    realisations: [
      "Mise en place d'une supervision proactive des infrastructures 24/7",
      "Déploiement d'un système de sauvegarde automatisé (local + cloud)",
      "Ouverture d'un Help Desk dédié avec niveaux de support N1/N2/N3",
      "Gestion centralisée des postes de travail et serveurs",
      "Sécurisation des accès VPN et des services réseau",
    ],
    kpis: [
      { value: "−60 %", label: "Incidents déclarés" },
      { value: "99,9 %", label: "Disponibilité SI" },
      { value: "< 2h", label: "Intervention critique" },
      { value: "+30 %", label: "Productivité équipes" },
    ],
    valeurAjoutee: [
      "Réduction des incidents",
      "Continuité d'activité assurée",
      "Collaborateurs plus productifs",
      "Sécurité des données",
      "Réduction des coûts de maintenance corrective",
    ],
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-400",
    domaineColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconPath:
      "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
  },
  {
    id: 4,
    titre: "Solution Sauvegarde & Plan de Reprise d'Activité",
    secteur: "Cybersécurité & Continuité",
    tag: "PME",
    domaine: "Cybersécurité",
    serviceHref: "/services/cybersecurite",
    problematique:
      "L'entreprise ne disposait d'aucun plan de reprise après sinistre structuré. Les données critiques étaient exposées à des risques de perte définitive en cas d'incident, de ransomware ou de défaillance matérielle.",
    realisations: [
      "Déploiement d'une solution de sauvegarde automatisée multi-niveaux",
      "Mise en place de sauvegardes locales et cloud (règle 3-2-1)",
      "Rédaction et documentation des procédures de restauration",
      "Tests réguliers de reprise d'activité (simulations de sinistre)",
      "Tableaux de bord de supervision des sauvegardes",
    ],
    kpis: [
      { value: "RTO < 4h", label: "Reprise après sinistre" },
      { value: "RPO < 1h", label: "Perte de données max" },
      { value: "100 %", label: "Données critiques protégées" },
      { value: "0", label: "Perte de données testée" },
    ],
    valeurAjoutee: [
      "Protection des données critiques",
      "Réduction du risque opérationnel",
      "Conformité aux bonnes pratiques cyber",
      "Reprise rapide en cas d'incident",
      "Continuité d'activité garantie",
    ],
    accentFrom: "from-red-500",
    accentTo: "to-rose-400",
    domaineColor: "bg-red-50 text-red-700 border-red-100",
    iconPath:
      "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    id: 5,
    titre: "CRM Sur Mesure",
    secteur: "Ingénierie Logicielle",
    tag: "PME Commerciale",
    domaine: "Ingénierie logicielle",
    serviceHref: "/services/ingenierie",
    problematique:
      "Les équipes commerciales géraient leurs prospects via plusieurs fichiers Excel non synchronisés, entraînant des pertes d'informations, des doublons et un manque de visibilité sur les opportunités commerciales en cours.",
    realisations: [
      "Conception et développement d'une plateforme CRM personnalisée",
      "Module de gestion des prospects et clients avec historique complet",
      "Suivi des opportunités et pipeline de vente visuel",
      "Tableau de bord décisionnel avec indicateurs temps réel",
      "Automatisation des relances commerciales et alertes",
    ],
    kpis: [
      { value: "+34 %", label: "Taux de conversion" },
      { value: "−50 %", label: "Temps de saisie" },
      { value: "+40 %", label: "Visibilité pipeline" },
      { value: "1 seule", label: "Source de vérité" },
    ],
    valeurAjoutee: [
      "Augmentation du taux de conversion",
      "Gain de temps pour les équipes commerciales",
      "Meilleur suivi du pipeline",
      "Centralisation des informations clients",
      "Pilotage commercial amélioré",
    ],
    accentFrom: "from-[var(--primary-dark)]",
    accentTo: "to-[var(--primary)]",
    domaineColor: "bg-violet-50 text-violet-700 border-violet-100",
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    id: 6,
    titre: "Audit Cybersécurité & Mise en Conformité",
    secteur: "Cybersécurité",
    tag: "PME / ETI",
    domaine: "Cybersécurité",
    serviceHref: "/services/cybersecurite",
    problematique:
      "L'entreprise souhaitait renforcer sa posture de sécurité informatique et répondre aux exigences réglementaires croissantes (NIS2, ISO 27001) ainsi qu'aux exigences contractuelles de ses clients grands comptes.",
    realisations: [
      "Réalisation d'un audit complet de sécurité (réseau, postes, serveurs, accès)",
      "Analyse approfondie des vulnérabilités et cartographie des risques",
      "Livraison de recommandations techniques et organisationnelles priorisées",
      "Élaboration d'un plan de remédiation avec jalons et responsables",
      "Accompagnement à la conformité NIS2 / ISO 27001",
    ],
    kpis: [
      { value: "−70 %", label: "Surface d'attaque" },
      { value: "100 %", label: "Vulnérabilités critiques traitées" },
      { value: "+40 %", label: "Score de maturité cyber" },
      { value: "NIS2", label: "Conformité atteinte" },
    ],
    valeurAjoutee: [
      "Réduction de la surface d'attaque",
      "Confiance clients renforcée",
      "Limitation des risques cyber",
      "Gouvernance IT améliorée",
      "Meilleure conformité réglementaire",
    ],
    accentFrom: "from-red-600",
    accentTo: "to-orange-500",
    domaineColor: "bg-red-50 text-red-700 border-red-100",
    iconPath:
      "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  },
];

const domaines = ["Tous", "Cybersécurité", "Infogérance", "Ingénierie logicielle"];

/* ─────────────────────────────────────────────────────────────────────────
   Composant carte projet
──────────────────────────────────────────────────────────────────────────── */
function ProjetCard({ projet }: { projet: Projet }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">

      {/* Bande couleur + en-tête */}
      <div className={`bg-linear-to-r ${projet.accentFrom} ${projet.accentTo} p-6 text-white`}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full border bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm ${projet.domaineColor} border-white/20 text-white`}>
            <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={projet.iconPath} />
            </svg>
            {projet.domaine}
          </span>
          <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
            {projet.tag}
          </span>
        </div>
        <h3 className="text-xl font-extrabold leading-snug">{projet.titre}</h3>
        <p className="mt-1 text-sm text-white/75">{projet.secteur}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-px bg-gray-100 sm:grid-cols-4">
        {projet.kpis.map((kpi) => (
          <div key={kpi.label} className="flex flex-col items-center bg-white px-3 py-4 text-center">
            <span className="text-xl font-extrabold text-[var(--primary)]">{kpi.value}</span>
            <span className="mt-0.5 text-[10px] font-medium leading-tight text-gray-400">{kpi.label}</span>
          </div>
        ))}
      </div>

      {/* Corps */}
      <div className="flex flex-1 flex-col gap-5 p-6">

        {/* Problématique */}
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">Problématique</p>
          <p className="text-sm leading-relaxed text-gray-600">{projet.problematique}</p>
        </div>

        {/* Réalisation — accordéon */}
        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Réalisation ({projet.realisations.length} actions)
            </span>
            <svg
              className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {open && (
            <ul className="mt-3 flex flex-col gap-2 pl-1">
              {projet.realisations.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)]">
                    <svg className="h-2.5 w-2.5 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Valeur ajoutée */}
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">Valeur ajoutée</p>
          <div className="flex flex-wrap gap-2">
            {projet.valeurAjoutee.map((v) => (
              <span key={v} className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 border border-gray-100">
                <svg className="h-3 w-3 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {v}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-6 py-4">
        <Link
          href={projet.serviceHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-all hover:gap-3"
        >
          Voir le service associé
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Page principale
──────────────────────────────────────────────────────────────────────────── */
export default function EtudesDeCasClient() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? projets
      : projets.filter((p) => p.domaine === activeFilter);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Teknosure — Projets livrés"
        titleAccent="Nos réalisations"
        title="Des projets, des résultats concrets"
        subtitle="Une sélection de missions menées pour nos clients. Chaque réalisation illustre notre savoir-faire en cybersécurité, infogérance et ingénierie logicielle — avec des indicateurs mesurables."
        primaryLabel="Démarrer un projet"
        primaryHref="/contact"
        secondaryLabel="Nos services"
        secondaryHref="/services"
        imageSrc="/images/nos-realisation.jpg"
        overlayMode="dark"
      />

      {/* ── Stats globales ───────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {[
              { value: "6+", label: "Projets présentés" },
              { value: "3", label: "Domaines d'expertise" },
              { value: "99,9 %", label: "Disponibilité garantie" },
              { value: "< 24h", label: "Réponse initiale" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-[var(--primary)]">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  ({projets.filter((p) => p.domaine === d).length})
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-xs text-gray-400">
            {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Grille projets ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-gray-400">Aucune réalisation dans cette catégorie.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((projet) => (
                <ProjetCard key={projet.id} projet={projet} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[var(--primary-dark)] via-[var(--primary-mid)] to-[var(--primary)] py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-10 left-1/4 h-40 w-40 rounded-full bg-cyan-400/10" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/60">
            Votre projet
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="mb-8 text-lg text-[var(--primary-border)]">
            Que vous ayez un projet précis ou juste une idée,
            parlons-en — l&apos;estimation initiale est offerte. Réponse sous 24h.
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
