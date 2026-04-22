"use client";

import { useState } from "react";
import Image from "next/image";

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
  color: string;
  colorLight: string;
  colorBorder: string;
}

const offres: Offre[] = [
  {
    label: "Identifier",
    color: "text-blue-600",
    colorLight: "bg-blue-50",
    colorBorder: "border-blue-200",
    title: "IDENTIFIER — Audit, Diagnostic & Cartographie",
    description:
      "Connaissez-vous vraiment votre exposition cyber ? Commencez par savoir. Nous cartographions vos actifs, risques et vulnérabilités pour vous fournir un plan d'action clair, priorisé et adapté à votre contexte.",
    items: [
      "Audit & diagnostic cyber",
      "Scan de vulnérabilités",
      "Cartographie des actifs",
      "Analyse de risques EBIOS",
    ],
    services: [
      {
        name: "Diagnostic Cyber Express",
        description:
          "Score de sécurité en 48h. Scan externe, analyse M365/Google, DMARC/SPF/DKIM, top 10 failles. À partir de 490 € — délai 48h.",
      },
      {
        name: "Audit 72 Points M365/Google",
        description:
          "Grille de 72 points de contrôle : IAM, messagerie, endpoints, partages, conformité, logs. À partir de 900 € — délai 72h.",
      },
      {
        name: "Pentest Light & Analyse EBIOS",
        description:
          "Test d'intrusion externe et web avec rapport CVSS, PoC, scoring OWASP. Cartographie des risques métier, scénarios d'attaque, plan de traitement prioritaire.",
      },
    ],
    partners: ["Qualys", "Tenable", "Nessus", "EBIOS RM"],
  },
  {
    label: "Protéger",
    color: "text-emerald-600",
    colorLight: "bg-emerald-50",
    colorBorder: "border-emerald-200",
    title: "PROTÉGER — Sécurité Périmétrique, Cloud & Endpoints",
    description:
      "Déployez les bons contrôles pour réduire la surface d'attaque. Nous mettons en place les contrôles techniques et organisationnels pour limiter l'impact des incidents et protéger chaque point d'entrée de votre SI.",
    items: [
      "Firewall UTM & VPN (Fortinet, Palo Alto, Check Point)",
      "Protection Endpoints EDR (SentinelOne, Bitdefender, ESET)",
      "Sécurité Cloud M365/Google — audit 72 points, MFA, DLP",
      "IAM / PAM / Zero Trust",
      "Filtrage Web & DNS — Barracuda, Cisco Umbrella",
      "PKI & Chiffrement des données sensibles",
    ],
    services: [
      {
        name: "Firewall UTM & Segmentation réseau",
        description:
          "Fortinet, Palo Alto, Check Point, Cisco. Filtrage applicatif, IPS/IDS, VPN site-à-site, segmentation réseau. Déploiement en 1–2 jours.",
      },
      {
        name: "Protection Endpoints EDR",
        description:
          "SentinelOne, Bitdefender, ESET — Détection comportementale, blocage zero-day, réponse automatisée. 5 à 12 €/poste/mois, continu.",
      },
      {
        name: "IAM / PAM / Zero Trust & Sécurité Cloud",
        description:
          "Gestion identités et accès à privilèges, RBAC, accès conditionnel Azure AD, authentification Zero Trust. Durcissement Exchange/Gmail, MFA obligatoire, DLP, anti-phishing avancé.",
      },
    ],
    partners: ["Fortinet", "Palo Alto", "SentinelOne", "Cisco Umbrella", "Barracuda"],
  },
  {
    label: "Détecter",
    color: "text-orange-600",
    colorLight: "bg-orange-50",
    colorBorder: "border-orange-200",
    title: "DÉTECTER — SOC Managé, XDR & SIEM",
    description:
      "Surveiller en continu pour réagir avant qu'il ne soit trop tard. Notre SOC managé offre une surveillance 24/7/365 avec corrélation d'événements (SIEM), threat intelligence et réponse automatisée — sans recruter d'équipe sécurité interne.",
    items: [
      "SOC / XDR 24/7 — monitoring continu, enrichissement threat intel",
      "SIEM Managé — corrélation des logs, règles de détection personnalisées",
      "Threat Hunting Proactif — recherche active APT, analyse IOC/IOA",
      "Vulnerability Management — scoring CVSS, priorisation par risque métier",
    ],
    services: [
      {
        name: "SOC / XDR 24/7",
        description:
          "Déploiement agents XDR, monitoring continu, enrichissement threat intel, contact direct en cas de menace. Dashboard mensuel. 8 à 15 €/poste/mois.",
      },
      {
        name: "SIEM Managé",
        description:
          "Collecte et corrélation des logs, règles de détection personnalisées, alertes priorisées, reporting conformité. Abonnement mensuel.",
      },
      {
        name: "Threat Hunting & Vulnerability Management",
        description:
          "Recherche active de menaces persistantes (APT), analyse IOC/IOA, rapport de chasse. Scan continu des vulnérabilités, scoring CVSS, suivi de remédiation. 3 à 8 €/actif/mois.",
      },
    ],
    partners: ["Microsoft Sentinel", "Elastic", "Splunk", "CrowdStrike"],
  },
  {
    label: "Répondre",
    color: "text-red-600",
    colorLight: "bg-red-50",
    colorBorder: "border-red-200",
    title: "RÉPONDRE — Incident Response & Gestion de Crise",
    description:
      "Containment, investigation et remédiation dans les meilleurs délais. En cas d'incident, notre équipe intervient immédiatement : détection < 15 min, notification < 30 min, containment < 1h, rapport complet < 24h.",
    items: [
      "Détection & Alerte — notification immédiate, classification P1→P4",
      "Containment — isolation des systèmes, blocage des flux malveillants",
      "Investigation Forensic — logs, mémoire, disque, reconstruction de la chaîne d'attaque",
      "Éradication — suppression malware, patch des vulnérabilités, nettoyage",
      "Rapport & Leçons — chronologie, impact métier, recommandations correctives",
    ],
    services: [
      {
        name: "Incident Response (IR)",
        description:
          "Ouverture war room dédié, isolation du ou des systèmes compromis, classification selon gravité (P1→P4). Blocage des flux malveillants, préservation des preuves numériques.",
      },
      {
        name: "Investigation Forensic",
        description:
          "Analyse des traces (logs, mémoire, disque), reconstruction de la chaîne d'attaque, identification du patient zéro. Rapport d'incident complet, chronologie, impact métier.",
      },
      {
        name: "Éradication & Communication de crise",
        description:
          "Suppression du malware et des accès persistants, patch des vulnérabilités exploitées, nettoyage des systèmes. Recommandations correctives et amélioration du plan de réponse.",
      },
    ],
    partners: ["CrowdStrike", "SentinelOne", "Mandiant", "CERT-FR"],
  },
  {
    label: "Récupérer",
    color: "text-purple-600",
    colorLight: "bg-purple-50",
    colorBorder: "border-purple-200",
    title: "RÉCUPÉRER — Backup, PRA & Continuité Métier",
    description:
      "Garantir la reprise rapide de votre activité après tout incident. Nous restaurons vos capacités et services avec des RTO et RPO contractuels, des tests réguliers et un accompagnement post-incident complet.",
    items: [
      "Backup-as-a-Service — postes, serveurs, M365, Google Workspace",
      "PRA Cloud Automatisé — réplication Azure/AWS, RTO & RPO contractuels",
      "Backup Serveurs & NAS — snapshots journaliers, air-gap anti-ransomware",
      "PCA métier — documentation, exercices de simulation",
      "Reprise Post-Ransomware — cellule d'urgence dédiée",
    ],
    services: [
      {
        name: "Backup-as-a-Service & PRA Cloud",
        description:
          "Sauvegarde cloud automatique des postes, serveurs, M365 et Google Workspace. Rétention flexible, tests de restauration inclus. Plan de reprise automatisé, réplication Azure/AWS, RTO < 4h. 3 à 8 €/user/mois.",
      },
      {
        name: "Backup Serveurs & NAS + PCA Métier",
        description:
          "Snapshots journaliers, sauvegarde hors-site chiffrée, air-gap contre ransomware (Acronis, Veeam). Documentation du PCA métier, scénarios de crise, procédures de bascule, formation des équipes. 2 500 à 5 000 €.",
      },
      {
        name: "Reprise Post-Ransomware & RETEX",
        description:
          "Cellule d'urgence dédiée, restauration sécurisée depuis sauvegardes saines, validation intégrité, remise en production. Retour d'expérience structuré, mise à jour des procédures, renforcement des contrôles.",
      },
    ],
    partners: ["Acronis", "Veeam", "Azure Backup", "AWS Backup"],
  },
];

// Helper function to get partner logo path
const getPartnerLogo = (partnerName: string): string => {
  const logoMap: { [key: string]: string } = {
    // Identifier
    "Qualys": "/images/partners/rapid7.png",
    "Tenable": "/images/partners/ivanti.png",
    "Nessus": "/images/partners/SonicWall.png",
    "EBIOS RM": "/images/partners/atos.png",
    
    // Protéger
    "Fortinet": "/images/partners/fortinet.png",
    "Palo Alto": "/images/partners/palo_alto_networks.jpg",
    "Check Point": "/images/partners/Check_Point.png",
    "SentinelOne": "/images/partners/sentinelone.png",
    "Bitdefender": "/images/partners/Bitdefender-Logo.png",
    "ESET": "/images/partners/SonicWall.png",
    "Cisco Umbrella": "/images/partners/Cisco.png",
    "Cisco": "/images/partners/Cisco.png",
    "Barracuda": "/images/partners/Barracuda.png",
    
    // Détecter
    "Microsoft Sentinel": "/images/partners/microsoft.svg",
    "Elastic": "/images/partners/elastic.svg",
    "Splunk": "/images/partners/ibm.png",
    "CrowdStrike": "/images/partners/rapid7.png",
    
    // Répondre
    "Mandiant": "/images/partners/google.svg",
    "CERT-FR": "/images/partners/atos.png",
    
    // Récupérer
    "Acronis": "/images/partners/Acronis-logo.png",
    "Veeam": "/images/partners/ivanti.png",
    "Azure Backup": "/images/partners/microsoft.svg",
    "AWS Backup": "/images/partners/aws.png",
  };
  return logoMap[partnerName] || "/images/partners/microsoft.svg";
};

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
    <section id="audit" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Titre */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos solutions ETI & Grand groupe
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Des solutions sur mesure, dimensionnées pour les ETI et grands groupes, avec des équipes certifiées et des SLA garantis.
          </p>
        </div>

        {/* Barre d'onglets */}
        <div className="overflow-x-auto">
          <div
            className="flex min-w-max justify-center mx-auto"
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
                    isActive ? offre.color : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {offre.label}
                  {/* Trait sous chaque onglet */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? offre.color.replace('text-', 'bg-')
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
              <h3 className="mb-4 text-lg font-bold text-[var(--primary)] lg:text-xl">
                {prev.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-4">
                {prev.description}
              </p>
              <div className="space-y-4">
                {prev.services.map((s, i) => (
                  <div key={i}>
                    <h4 className="mb-1 text-sm font-semibold text-[var(--primary)]">{s.name}</h4>
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
                  <h3 className="mb-4 text-xl font-bold text-[var(--primary)] lg:text-2xl">
                    {current.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {current.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {current.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-light)]0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {current.partners.length > 0 && (
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Nos partenaires
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        {current.partners.map((p) => (
                          <div
                            key={p}
                            className="relative h-10 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            title={p}
                          >
                            <Image
                              src={getPartnerLogo(p)}
                              alt={p}
                              fill
                              sizes="96px"
                              className="object-contain"
                            />
                          </div>
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
                        <h4 className="mb-2 text-sm font-semibold text-[var(--primary)]">
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
              <h3 className="mb-4 text-xl font-bold text-[var(--primary)] lg:text-2xl">
                {next.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {next.description}
              </p>
              <div className="space-y-6">
                {next.services.map((s, i) => (
                  <div key={i}>
                    <h4 className="mb-1 text-sm font-semibold text-[var(--primary)]">
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
