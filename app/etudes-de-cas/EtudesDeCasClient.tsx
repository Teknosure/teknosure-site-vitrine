"use client";

import { useState } from "react";
import Link from "next/link";
import FullscreenHero from "@/app/components/hero/FullscreenHero";

/* ─────────────────────────────────────────────────────────────────────────
   Types & données
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
  gradient: string;
  domaineColor: string;
  number: string;
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
    gradient: "from-violet-600 to-indigo-500",
    domaineColor: "bg-violet-100 text-violet-700",
    number: "01",
  },
  {
    id: 2,
    titre: "Application Mobile Métier",
    secteur: "Distribution B2B",
    tag: "PME",
    domaine: "Ingénierie logicielle",
    serviceHref: "/services/ingenierie",
    problematique:
      "Notre client, acteur de la distribution B2B, souhaitait moderniser sa présence digitale et offrir à ses clients un accès simple et rapide à l'ensemble de ses produits depuis un smartphone. Absence totale d'une solution mobile dédiée, catalogue inaccessible, processus peu ergonomique.",
    realisations: [
      "Application mobile sur mesure Android & iOS",
      "Navigation par catégories et sous-catégories produits",
      "Interface d'administration centralisée pour le contenu",
      "Optimisation UX/UI mobile",
      "Architecture évolutive e-commerce & CRM ready",
    ],
    kpis: [
      { value: "2 stores", label: "Android & iOS" },
      { value: "12+", label: "Catégories produits" },
      { value: "100 %", label: "Catalogue mobile" },
      { value: "Évolutive", label: "Architecture" },
    ],
    valeurAjoutee: [
      "Image digitale renforcée",
      "Expérience client simplifiée",
      "Visibilité produits accrue",
      "Réduction des sollicitations manuelles",
      "Base technologique évolutive",
    ],
    gradient: "from-orange-500 to-amber-400",
    domaineColor: "bg-orange-100 text-orange-700",
    number: "02",
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
      "Supervision proactive des infrastructures 24/7",
      "Système de sauvegarde automatisé local + cloud",
      "Help Desk dédié avec niveaux de support N1/N2/N3",
      "Gestion centralisée des postes de travail et serveurs",
      "Sécurisation des accès VPN et services réseau",
    ],
    kpis: [
      { value: "−60 %", label: "Incidents déclarés" },
      { value: "99,9 %", label: "Disponibilité SI" },
      { value: "< 2h", label: "Intervention critique" },
      { value: "+30 %", label: "Productivité" },
    ],
    valeurAjoutee: [
      "Continuité d'activité assurée",
      "Collaborateurs plus productifs",
      "Sécurité des données",
      "Réduction des coûts de maintenance",
    ],
    gradient: "from-emerald-500 to-teal-400",
    domaineColor: "bg-emerald-100 text-emerald-700",
    number: "03",
  },
  {
    id: 4,
    titre: "Solution Sauvegarde & Plan de Reprise d'Activité",
    secteur: "Cybersécurité & Continuité",
    tag: "PME",
    domaine: "Cybersécurité",
    serviceHref: "/services/cybersecurite",
    problematique:
      "Aucun plan de reprise après sinistre structuré. Les données critiques étaient exposées à des risques de perte définitive en cas d'incident, de ransomware ou de défaillance matérielle.",
    realisations: [
      "Déploiement d'une solution de sauvegarde multi-niveaux",
      "Sauvegardes locales et cloud (règle 3-2-1)",
      "Rédaction des procédures de restauration",
      "Tests réguliers de reprise d'activité",
      "Tableaux de bord de supervision",
    ],
    kpis: [
      { value: "RTO < 4h", label: "Reprise après sinistre" },
      { value: "RPO < 1h", label: "Perte de données max" },
      { value: "100 %", label: "Données protégées" },
      { value: "0", label: "Perte testée" },
    ],
    valeurAjoutee: [
      "Protection des données critiques",
      "Réduction du risque opérationnel",
      "Conformité bonnes pratiques cyber",
      "Continuité d'activité garantie",
    ],
    gradient: "from-rose-500 to-red-400",
    domaineColor: "bg-red-100 text-red-700",
    number: "04",
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
      "Plateforme CRM personnalisée",
      "Gestion des prospects et clients avec historique complet",
      "Pipeline de vente visuel",
      "Tableau de bord décisionnel temps réel",
      "Automatisation des relances commerciales",
    ],
    kpis: [
      { value: "+34 %", label: "Taux de conversion" },
      { value: "−50 %", label: "Temps de saisie" },
      { value: "+40 %", label: "Visibilité pipeline" },
      { value: "1 source", label: "De vérité" },
    ],
    valeurAjoutee: [
      "Taux de conversion amélioré",
      "Gain de temps commercial",
      "Suivi pipeline optimisé",
      "Centralisation clients",
    ],
    gradient: "from-blue-600 to-cyan-500",
    domaineColor: "bg-blue-100 text-blue-700",
    number: "05",
  },
  {
    id: 6,
    titre: "Audit Cybersécurité & Mise en Conformité",
    secteur: "Cybersécurité",
    tag: "PME / ETI",
    domaine: "Cybersécurité",
    serviceHref: "/services/cybersecurite",
    problematique:
      "L'entreprise souhaitait renforcer sa posture de sécurité et répondre aux exigences réglementaires croissantes (NIS2, ISO 27001) ainsi qu'aux exigences contractuelles de ses clients grands comptes.",
    realisations: [
      "Audit complet de sécurité (réseau, postes, serveurs, accès)",
      "Analyse des vulnérabilités et cartographie des risques",
      "Recommandations techniques et organisationnelles",
      "Plan de remédiation avec jalons et responsables",
      "Accompagnement à la conformité NIS2 / ISO 27001",
    ],
    kpis: [
      { value: "−70 %", label: "Surface d'attaque" },
      { value: "100 %", label: "Vulnérabilités traitées" },
      { value: "+40 %", label: "Maturité cyber" },
      { value: "NIS2", label: "Conformité atteinte" },
    ],
    valeurAjoutee: [
      "Surface d'attaque réduite",
      "Confiance clients renforcée",
      "Gouvernance IT améliorée",
      "Conformité réglementaire",
    ],
    gradient: "from-red-600 to-orange-500",
    domaineColor: "bg-red-100 text-red-700",
    number: "06",
  },
];

const domaines = ["Tous", "Cybersécurité", "Infogérance", "Ingénierie logicielle"];

const domaineCount = (d: string) => projets.filter((p) => p.domaine === d).length;

/* ─────────────────────────────────────────────────────────────────────────
   Carte projet
──────────────────────────────────────────────────────────────────────────── */
function ProjetCard({ projet }: { projet: Projet }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

      {/* ── En-tête ──────────────────────────────────────────────────── */}
      <div className={`relative overflow-hidden bg-linear-to-br ${projet.gradient} px-10 py-10`}>
        {/* Numéro en filigrane */}
        <span className="pointer-events-none absolute -right-2 -top-2 select-none text-[9rem] font-black leading-none text-white/10">
          {projet.number}
        </span>

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                {projet.domaine}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">
                {projet.tag}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {projet.titre}
            </h3>
            <p className="mt-2 text-base text-white/70">{projet.secteur}</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-4 gap-3">
          {projet.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl bg-white/15 px-3 py-4 text-center backdrop-blur-sm">
              <p className="text-xl font-extrabold leading-tight text-white sm:text-2xl">{kpi.value}</p>
              <p className="mt-1 text-xs leading-tight text-white/70">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Corps ────────────────────────────────────────────────────── */}
      <div className="px-10 py-9">

        {/* Problématique */}
        <div className="mb-8">
          <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            Problématique
          </p>
          <p className="text-base leading-relaxed text-gray-600">{projet.problematique}</p>
        </div>

        {/* Réalisations */}
        <div className="mb-8">
          <p className="mb-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ce que nous avons fait
          </p>
          <ul className="flex flex-col gap-3">
            {projet.realisations.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">
                  {i + 1}
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Valeur ajoutée */}
        <div className="mb-8">
          <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Valeur ajoutée
          </p>
          <div className="flex flex-wrap gap-2">
            {projet.valeurAjoutee.map((v) => (
              <span
                key={v}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium ${projet.domaineColor}`}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Lien service */}
        <Link
          href={projet.serviceHref}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:text-gray-900 hover:shadow-sm"
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
   Page
──────────────────────────────────────────────────────────────────────────── */
export default function EtudesDeCasClient() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? projets
      : projets.filter((p) => p.domaine === activeFilter);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
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

      {/* ── Chiffres clés ────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-gray-100 sm:grid-cols-4">
          {[
            { value: "6", label: "Projets présentés" },
            { value: "3", label: "Domaines d'expertise" },
            { value: "99,9 %", label: "Disponibilité garantie" },
            { value: "< 24h", label: "Réponse initiale" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-8 text-center">
              <p className="text-3xl font-extrabold text-[var(--primary)]">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filtres ──────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-6 py-3.5 lg:px-8">
          <span className="mr-1 shrink-0 text-[11px] font-bold uppercase tracking-widest text-gray-300">
            Filtrer
          </span>
          {domaines.map((d) => (
            <button
              key={d}
              onClick={() => setActiveFilter(d)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeFilter === d
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {d}
              {d !== "Tous" && (
                <span className="ml-2 text-xs opacity-60">
                  ({domaineCount(d)})
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-xs text-gray-300">
            {filtered.length} réalisation{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Grille ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-gray-400">
              Aucune réalisation dans cette catégorie.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {filtered.map((projet) => (
                <ProjetCard key={projet.id} projet={projet} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-900 py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--primary)]/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
            Votre projet
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            Que vous ayez un projet précis ou juste une idée,
            parlons-en — l&apos;estimation initiale est offerte. Réponse sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Démarrer un projet
            </Link>
            <Link
              href="/a-propos"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
