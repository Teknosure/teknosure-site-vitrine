"use client";

import { useState } from "react";

interface SubService {
  name: string;
  description: string;
}

interface Offre {
  label: string;
  title: string;
  description: string;
  items: string[];
  services: SubService[];
  partners: string[];
}

const offres: Offre[] = [
  {
    label: "Audit & Diagnostic",
    title: "Audit & Diagnostic de sécurité",
    description:
      "Nous dressons un état des lieux complet de votre posture de cybersécurité. Avant de déployer quoi que ce soit, nous cartographions vos risques réels pour vous proposer un plan d'action clair, priorisé et adapté à votre contexte.",
    items: [
      "Évaluation de la posture de sécurité actuelle",
      "Identification des failles et vulnérabilités",
      "Rapport détaillé avec plan d'action priorisé",
    ],
    services: [
      {
        name: "Analyse de surface d'attaque",
        description:
          "Cartographie exhaustive de vos actifs exposés (réseaux, applications, identités) et évaluation du niveau de risque associé à chaque composant.",
      },
      {
        name: "Tests de vulnérabilités",
        description:
          "Scans automatisés et revues manuelles de vos systèmes pour identifier les CVE connues, les mauvaises configurations et les failles logiques.",
      },
      {
        name: "Rapport & feuille de route",
        description:
          "Livraison d'un rapport exécutif et technique avec des recommandations priorisées, des quick wins et un plan de remédiation à 90 jours.",
      },
    ],
    partners: ["Qualys", "Tenable", "Nessus"],
  },
  {
    label: "Protection Endpoints",
    title: "Protection des endpoints",
    description:
      "Vos postes de travail sont la première cible des attaquants. Nous déployons des solutions EDR de nouvelle génération pour détecter, bloquer et répondre aux menaces avant qu'elles ne se propagent.",
    items: [
      "Déploiement EDR (SentinelOne, CrowdStrike, Trend Micro)",
      "Protection anti-ransomware avancée",
      "Détection comportementale et réponse automatisée",
    ],
    services: [
      {
        name: "Déploiement EDR managé",
        description:
          "Installation, configuration et supervision d'agents EDR sur l'ensemble de votre parc. Nous assurons la gestion des alertes et la mise à jour des politiques.",
      },
      {
        name: "Lutte anti-ransomware",
        description:
          "Activation des modules de protection contre les ransomwares : rollback automatique, isolation réseau des postes compromis, politiques de sauvegarde.",
      },
      {
        name: "Threat Hunting",
        description:
          "Recherche proactive de menaces dormantes dans votre parc, basée sur des IOC et des techniques d'analyse comportementale avancée.",
      },
    ],
    partners: ["SentinelOne", "CrowdStrike", "Trend Micro"],
  },
  {
    label: "Accès & Réseau",
    title: "Sécurisation des accès et du réseau",
    description:
      "Avec la généralisation du télétravail et des architectures hybrides, la sécurisation des accès est devenue critique. Nous concevons et déployons des architectures Zero Trust pour protéger chaque point d'entrée.",
    items: [
      "Pare-feu nouvelle génération (NGFW)",
      "Segmentation réseau et microsegmentation",
      "Authentification multi-facteurs (MFA)",
      "VPN sécurisés et accès Zero Trust",
    ],
    services: [
      {
        name: "Architecture Zero Trust",
        description:
          "Conception et déploiement d'un modèle Zero Trust : vérification systématique de chaque accès, principe du moindre privilège, segmentation fine des ressources.",
      },
      {
        name: "NGFW & Segmentation",
        description:
          "Déploiement de pare-feu nouvelle génération avec inspection applicative profonde (DPI), segmentation des zones réseau et règles de filtrage avancées.",
      },
      {
        name: "IAM & MFA",
        description:
          "Mise en place de solutions de gestion des identités et des accès, déploiement du MFA sur toutes vos applications critiques et portails d'accès.",
      },
    ],
    partners: ["Palo Alto Networks", "Cisco", "Fortinet"],
  },
  {
    label: "Email & Cloud",
    title: "Protection email & cloud",
    description:
      "Le phishing reste le vecteur d'attaque numéro un. Nous sécurisons vos flux email et vos environnements cloud (Microsoft 365, Google Workspace) contre les menaces les plus sophistiquées.",
    items: [
      "Anti-phishing et anti-spam avancés",
      "Sécurisation Microsoft 365 / Google Workspace",
      "CSPM — Cloud Security Posture Management",
      "DLP — Prévention des fuites de données",
    ],
    services: [
      {
        name: "Protection email avancée",
        description:
          "Déploiement de passerelles email sécurisées avec filtrage multi-couches, analyse sandbox des pièces jointes et détection des attaques BEC.",
      },
      {
        name: "Sécurisation M365 & GWS",
        description:
          "Hardening de vos tenants cloud : configuration des politiques de sécurité, activation des fonctions avancées, revue des permissions.",
      },
      {
        name: "Cloud Security Posture",
        description:
          "Surveillance continue de la configuration de vos ressources cloud pour détecter les dérives, les ressources exposées et les non-conformités.",
      },
    ],
    partners: ["Barracuda", "Microsoft", "Google"],
  },
  {
    label: "SOC 24/7",
    title: "SOC managé 24/7",
    description:
      "Notre Centre des Opérations de Sécurité surveille votre infrastructure en permanence. Nos analystes détectent et neutralisent les menaces en temps réel, 24h/24, 7j/7.",
    items: [
      "Surveillance continue des systèmes (24/7/365)",
      "Détection des menaces en temps réel",
      "Réponse aux incidents et confinement",
      "Rapports mensuels et revues trimestrielles",
    ],
    services: [
      {
        name: "SIEM & Corrélation d'événements",
        description:
          "Agrégation et corrélation de vos logs dans un SIEM centralisé. Nos analystes supervisent les alertes et qualifient les incidents selon leur criticité.",
      },
      {
        name: "Réponse aux incidents (IR)",
        description:
          "Procédures de réponse aux incidents définies et testées : isolation des systèmes compromis, analyse forensique, remédiation et retour à la normale.",
      },
      {
        name: "Reporting & amélioration continue",
        description:
          "Rapports mensuels d'activité, indicateurs clés de sécurité (KPI/KRI) et recommandations d'amélioration continues basées sur les incidents observés.",
      },
    ],
    partners: ["Elastic", "Microsoft Sentinel", "Splunk"],
  },
  {
    label: "RSSI Externalisé",
    title: "RSSI à temps partagé",
    description:
      "Bénéficiez de l'expertise d'un RSSI senior sans les contraintes d'un recrutement à temps plein. Nous pilotons votre stratégie cyber à vos côtés.",
    items: [
      "Responsable Sécurité externalisé (quelques jours/mois)",
      "Pilotage de la stratégie cybersécurité",
      "Interface avec la direction et le COMEX",
      "Suivi des projets et des budgets sécurité",
    ],
    services: [
      {
        name: "Stratégie & Gouvernance",
        description:
          "Élaboration ou mise à jour de votre politique de sécurité, définition de la roadmap cyber sur 12 à 36 mois, alignement avec les objectifs métier.",
      },
      {
        name: "Pilotage des risques",
        description:
          "Mise en place d'un processus de gestion des risques cyber : cartographie, évaluation, traitement et suivi des risques résiduels.",
      },
      {
        name: "Conformité & reporting direction",
        description:
          "Préparation des reportings COMEX/CA sur la posture de sécurité, suivi des obligations légales et relation avec les auditeurs.",
      },
    ],
    partners: ["ANSSI", "CLUSIF", "ISC²"],
  },
  {
    label: "Conformité",
    title: "Conformité & gouvernance",
    description:
      "Les exigences réglementaires se multiplient. Nous vous accompagnons dans votre mise en conformité NIS2, DORA, ISO 27001 et RGPD, de l'analyse des écarts jusqu'à la certification.",
    items: [
      "Mise en conformité NIS2",
      "Mise en conformité DORA (secteur financier)",
      "ISO 27001 — Certification et maintien",
      "RGPD — Protection des données personnelles",
    ],
    services: [
      {
        name: "Analyse des écarts (Gap Analysis)",
        description:
          "Évaluation de votre niveau de maturité par rapport aux exigences du référentiel cible. Identification des actions à mener et estimation de l'effort.",
      },
      {
        name: "Mise en œuvre et documentation",
        description:
          "Rédaction des politiques, procédures et preuves nécessaires à l'audit. Accompagnement à la mise en place des mesures techniques et organisationnelles.",
      },
      {
        name: "Audit et certification",
        description:
          "Préparation aux audits de certification, accompagnement lors des audits, gestion des non-conformités et plan de traitement des écarts.",
      },
    ],
    partners: ["Bureau Veritas", "LSTI", "BSI Group"],
  },
  {
    label: "Formation",
    title: "Sensibilisation & formation",
    description:
      "Le facteur humain reste la principale faille. Nos programmes de sensibilisation créent une véritable culture de la cybersécurité au sein de vos équipes.",
    items: [
      "Formation des collaborateurs aux risques cyber",
      "Campagnes de phishing simulé",
      "Ateliers pratiques et e-learning",
      "Bonnes pratiques et réflexes sécurité",
    ],
    services: [
      {
        name: "Programmes de sensibilisation",
        description:
          "Modules de formation adaptés à tous les profils : risques cyber, hygiène numérique, gestion des mots de passe, incidents à signaler.",
      },
      {
        name: "Phishing simulé",
        description:
          "Campagnes de faux phishing pour mesurer la vigilance de vos équipes, identifier les profils à risque et adapter les formations en conséquence.",
      },
      {
        name: "Tableaux de bord & suivi",
        description:
          "Mesure de l'évolution du niveau de sensibilisation dans le temps et reporting des résultats aux campagnes de phishing.",
      },
    ],
    partners: ["KnowBe4", "Proofpoint", "Terranova"],
  },
];

export default function CyberOffresSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");

  const handleTabChange = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? "right" : "left");
    setActive(index);
    setAnimKey((k) => k + 1);
  };

  const current = offres[active];
  const nextIndex = (active + 1) % offres.length;
  const prevIndex = (active - 1 + offres.length) % offres.length;
  const next = offres[nextIndex];
  const prev = offres[prevIndex];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Titre */}
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Nos offres{" "}
          <span className="bg-linear-to-r from-[#0D6EA1] to-[#1B9AD2] bg-clip-text text-transparent">
            Cybersécurité
          </span>
        </h2>

        {/* Barre d'onglets */}
        <div className="overflow-x-auto">
          <div
            className="flex min-w-max"
            role="tablist"
            aria-label="Offres cybersécurité"
          >
            {offres.map((offre, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(i)}
                  className={`relative shrink-0 px-5 py-4 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive ? "text-[#1B9AD2]" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {offre.label}
                  {/* Trait sous chaque onglet */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-blue-500 to-cyan-400"
                        : "border border-gray-300 bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Zone de contenu — les cartes slidient physiquement */}
        <div className="relative mt-8 overflow-hidden">
          <div
            key={`${animKey}-${direction}`}
            className="flex items-stretch gap-4"
            style={{
              animation: `${direction === "right" ? "slideFromRight" : "slideFromLeft"} 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
            }}
          >
            {/* ── Carte précédente (gauche, floue) ────────────────────────── */}
            <div
              className="w-[22%] shrink-0 cursor-pointer select-none bg-white p-6 shadow-sm blur-[2px] opacity-40 transition-all duration-200 hover:opacity-50 lg:p-8"
              aria-hidden="true"
              onClick={() => handleTabChange(prevIndex)}
            >
              <h3 className="mb-4 text-lg font-bold text-[#1B9AD2] lg:text-xl">
                {prev.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-4">
                {prev.description}
              </p>
              <div className="space-y-4">
                {prev.services.map((s, i) => (
                  <div key={i}>
                    <h4 className="mb-1 text-sm font-semibold text-[#1B9AD2]">{s.name}</h4>
                    <p className="line-clamp-2 text-sm text-gray-500">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Carte principale ─────────────────────────────────────────── */}
            <div className="w-[56%] shrink-0 bg-white shadow-sm">
              <div className="grid h-full grid-cols-1 md:grid-cols-2">

                {/* Colonne gauche */}
                <div className="border-r border-gray-100 p-8 lg:p-10">
                  <h3 className="mb-4 text-xl font-bold text-[#1B9AD2] lg:text-2xl">
                    {current.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {current.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {current.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8F5FC]0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {current.partners.length > 0 && (
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Nos partenaires
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {current.partners.map((p) => (
                          <span
                            key={p}
                            className="rounded-full border border-[#B8DFF2] bg-[#E8F5FC] px-3 py-1 text-xs font-medium text-[#0D6EA1]"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Colonne droite — sous-services */}
                <div className="p-8 lg:p-10">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    Services inclus
                  </p>
                  <div className="space-y-8">
                    {current.services.map((s, i) => (
                      <div key={i}>
                        <h4 className="mb-2 text-sm font-semibold text-[#1B9AD2]">
                          {s.name}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-500">
                          {s.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ── Carte suivante séparée (floue) ───────────────────────────── */}
            <div
              className="w-[22%] shrink-0 cursor-pointer select-none bg-white p-6 shadow-sm blur-[2px] opacity-40 transition-all duration-200 hover:opacity-50 lg:p-8"
              aria-hidden="true"
              onClick={() => handleTabChange(nextIndex)}
            >
              <h3 className="mb-4 text-xl font-bold text-[#1B9AD2] lg:text-2xl">
                {next.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {next.description}
              </p>
              <div className="space-y-6">
                {next.services.map((s, i) => (
                  <div key={i}>
                    <h4 className="mb-1 text-sm font-semibold text-[#1B9AD2]">
                      {s.name}
                    </h4>
                    <p className="line-clamp-3 text-sm text-gray-500">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideFromRight {
          from { transform: translateX(26%); }
          to   { transform: translateX(0); }
        }
        @keyframes slideFromLeft {
          from { transform: translateX(-26%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
