import type { Metadata } from "next";
import {
  ShieldCheck,
  FileSearch,
  ScanSearch,
  ClipboardList,
  Cloud,
  Server,
  Gauge,
  Wifi,
  Network,
  Building,
  DatabaseBackup,
  Layers,
  Headset,
  Mail,
  Shield,
  Wrench,
  LifeBuoy,
  Clock,
  Globe,
  LayoutDashboard,
  Smartphone,
  AppWindow,
  CodeXml,
  Plug,
  Bot,
  MessageSquare,
  Workflow,
  Repeat,
  TrendingUp,
  LineChart,
} from "lucide-react";
import type { OfferPageProps } from "@/app/(frontend)/components/pages/OfferPage";

const icon = "h-7 w-7";
const stroke = 1.5;

type OfferDef = {
  metadata: Metadata;
  page: OfferPageProps;
};

function related(items: { label: string; href: string }[], current: string) {
  return items.filter((item) => item.href !== current);
}

const cyberLinks = [
  { label: "Offre TPE / PME", href: "/services/cybersecurite/tpe-pme" },
  { label: "Offre ETI / Grands comptes", href: "/services/cybersecurite/eti" },
  { label: "Audit de sécurité", href: "/services/cybersecurite/audit" },
];
const cloudLinks = [
  { label: "Migration cloud", href: "/services/cloud/migration" },
  { label: "Infrastructure réseau", href: "/services/cloud/infrastructure" },
  { label: "Hébergement hybride", href: "/services/cloud/hebergement" },
];
const infogeranceLinks = [
  { label: "Infogérance serveurs", href: "/services/infogerance/serveurs" },
  { label: "Microsoft 365", href: "/services/infogerance/m365" },
  { label: "Support & MCO", href: "/services/infogerance/support" },
];
const ingenierieLinks = [
  { label: "Applications web", href: "/services/ingenierie/web" },
  { label: "Applications mobile", href: "/services/ingenierie/mobile" },
  { label: "Intégrations API", href: "/services/ingenierie/api" },
];
const iaLinks = [
  { label: "Agents IA", href: "/services/ia/agents" },
  { label: "Automatisation RPA", href: "/services/ia/rpa" },
  { label: "Analyse prédictive", href: "/services/ia/predictive" },
];

export const offerPages = {
  cyberAudit: {
    metadata: {
      title: "Audit de sécurité",
      description:
        "Diagnostic, tests d'intrusion et plan d'action priorisé pour connaître votre exposition et corriger l'essentiel.",
    },
    page: {
      parentLabel: "Cybersécurité & Conformité",
      parentHref: "/services/cybersecurite",
      tagline: "Cybersécurité & Conformité",
      titleAccent: "Audit",
      title: "de sécurité",
      subtitle:
        "Nous cartographions vos risques, testons vos défenses et vous remettons un plan d'action priorisé, actionnable par vos équipes ou les nôtres.",
      imageSrc: "/images/cyber-tpe.png",
      related: related(cyberLinks, "/services/cybersecurite/audit"),
      points: [
        { icon: <ScanSearch className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Diagnostic", description: "Cartographie des actifs, surface d'attaque et points de contrôle manquants." },
        { icon: <FileSearch className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Tests d'intrusion", description: "Scénarios réalistes pour vérifier ce qu'un attaquant peut réellement atteindre." },
        { icon: <ClipboardList className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Plan d'action", description: "Correctifs classés par criticité, délai et effort, pour avancer sans dispersion." },
        { icon: <ShieldCheck className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Restitution", description: "Rapport lisible pour la direction et les équipes techniques, avec les preuves." },
      ],
    },
  },
  cloudMigration: {
    metadata: {
      title: "Migration cloud",
      description: "Cadrage, bascule et exploitation AWS, Azure ou GCP, sans interruption inutile de service.",
    },
    page: {
      parentLabel: "Infrastructure, réseaux & cloud",
      parentHref: "/services/cloud",
      tagline: "Infrastructure, réseaux & cloud",
      titleAccent: "Migration",
      title: "cloud",
      subtitle:
        "Nous cadrons votre bascule vers AWS, Azure ou GCP, exécutons la migration et restons pour l'exploitation une fois les workloads en production.",
      imageSrc: "/images/cloud.jpg",
      related: related(cloudLinks, "/services/cloud/migration"),
      points: [
        { icon: <ClipboardList className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Cadrage", description: "Inventaire, dépendances, choix du cloud et stratégie Lift & Shift ou re-architecture." },
        { icon: <Cloud className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Bascule", description: "Migration maîtrisée, fenêtres de bascule et tests de non-régression." },
        { icon: <Gauge className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Performance", description: "Validation des temps de réponse, de la charge et des sauvegardes après cut-over." },
        { icon: <Server className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Exploitation", description: "Passage de relais documenté, supervision et runbook pour vos équipes." },
      ],
    },
  },
  cloudInfrastructure: {
    metadata: {
      title: "Infrastructure réseau",
      description: "Architecture, segmentation et supervision du socle réseau, du LAN au SD-WAN.",
    },
    page: {
      parentLabel: "Infrastructure, réseaux & cloud",
      parentHref: "/services/cloud",
      tagline: "Infrastructure, réseaux & cloud",
      titleAccent: "Infrastructure",
      title: "réseau",
      subtitle:
        "Nous concevons et opérons votre socle réseau : segmentation, Wi-Fi entreprise, QoS et supervision, pour un SI lisible et défendable.",
      imageSrc: "/images/cloud.jpg",
      related: related(cloudLinks, "/services/cloud/infrastructure"),
      points: [
        { icon: <Network className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Architecture", description: "Schéma cible, VLAN, SD-WAN et choix d'équipements Cisco, Fortinet ou équivalent." },
        { icon: <Wifi className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Wi-Fi entreprise", description: "Couverture, capacité, authentification et séparation invités / métier." },
        { icon: <Layers className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Segmentation", description: "Isolation des flux critiques pour limiter la propagation d'un incident." },
        { icon: <Gauge className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Supervision", description: "Visibilité sur la disponibilité, la QoS et les saturations, avec alerting." },
      ],
    },
  },
  cloudHebergement: {
    metadata: {
      title: "Hébergement hybride",
      description: "On-premise, cloud public et privé selon vos contraintes de souveraineté, de coût et de charge.",
    },
    page: {
      parentLabel: "Infrastructure, réseaux & cloud",
      parentHref: "/services/cloud",
      tagline: "Infrastructure, réseaux & cloud",
      titleAccent: "Hébergement",
      title: "hybride",
      subtitle:
        "Nous assemblons on-premise, cloud public et privé selon vos données, vos contraintes réglementaires et votre charge réelle.",
      imageSrc: "/images/cloud.jpg",
      related: related(cloudLinks, "/services/cloud/hebergement"),
      points: [
        { icon: <Building className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "On-premise", description: "Maintien des charges qui doivent rester chez vous, avec un socle opéré." },
        { icon: <Cloud className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Cloud public", description: "AWS, Azure ou GCP pour l'élasticité, les sauvegardes et les nouveaux services." },
        { icon: <DatabaseBackup className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "PRA & sauvegarde", description: "Réplication, RTO/RPO contractuels et tests de restauration." },
        { icon: <Layers className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Gouvernance", description: "Un modèle d'exploitation unique, même si les charges sont réparties." },
      ],
    },
  },
  infogeranceServeurs: {
    metadata: {
      title: "Infogérance serveurs",
      description: "Exploitation, MCO et supervision de vos serveurs, Windows ou Linux, on-premise ou cloud.",
    },
    page: {
      parentLabel: "Infogérance & Services Managés",
      parentHref: "/services/infogerance",
      tagline: "Infogérance & Services Managés",
      titleAccent: "Infogérance",
      title: "serveurs",
      subtitle:
        "Nous exploitons vos serveurs au quotidien : patchs, supervision, incidents et capacité, pour que le MCO ne repose plus sur une seule personne en interne.",
      imageSrc: "/images/dev-team.jpg",
      related: related(infogeranceLinks, "/services/infogerance/serveurs"),
      points: [
        { icon: <Server className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Exploitation", description: "Windows, Linux, hyperviseurs : administration courante et durcissement de base." },
        { icon: <Wrench className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "MCO", description: "Patchs, mises à jour, backups et maintenance planifiée, sans surprise." },
        { icon: <Gauge className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Supervision", description: "Disponibilité, disques, services et alertes avant que l'utilisateur ne le voie." },
        { icon: <Clock className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Astreinte", description: "Intervention sur incident selon le niveau de service convenu." },
      ],
    },
  },
  infogeranceM365: {
    metadata: {
      title: "Microsoft 365",
      description: "Messagerie, collaboration et durcissement de votre tenant Microsoft 365.",
    },
    page: {
      parentLabel: "Infogérance & Services Managés",
      parentHref: "/services/infogerance",
      tagline: "Infogérance & Services Managés",
      titleAccent: "Microsoft",
      title: "365",
      subtitle:
        "Nous paramétrons, sécurisons et opérons votre tenant : messagerie, SharePoint, Teams, identités et sauvegarde, sans laisser les réglages par défaut.",
      imageSrc: "/images/dev-team.jpg",
      related: related(infogeranceLinks, "/services/infogerance/m365"),
      points: [
        { icon: <Mail className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Messagerie", description: "Exchange Online, SPF/DKIM/DMARC, anti-phishing et continuité de service." },
        { icon: <Shield className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Durcissement", description: "MFA, accès conditionnel, partage externe et revue des comptes à privilèges." },
        { icon: <LayoutDashboard className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Collaboration", description: "Teams, SharePoint et OneDrive cadrés selon vos règles métier." },
        { icon: <DatabaseBackup className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Sauvegarde", description: "Backup des boîtes, sites et fichiers au-delà de la corbeille Microsoft." },
      ],
    },
  },
  infogeranceSupport: {
    metadata: {
      title: "Support & MCO",
      description: "Support utilisateurs, gestion des incidents et continuité de service, du N1 au N3.",
    },
    page: {
      parentLabel: "Infogérance & Services Managés",
      parentHref: "/services/infogerance",
      tagline: "Infogérance & Services Managés",
      titleAccent: "Support",
      title: "& MCO",
      subtitle:
        "Un interlocuteur unique pour vos utilisateurs et vos incidents : qualification, résolution, escalade et suivi, avec un niveau de service écrit.",
      imageSrc: "/images/dev-team.jpg",
      related: related(infogeranceLinks, "/services/infogerance/support"),
      points: [
        { icon: <Headset className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Helpdesk", description: "N1/N2 à distance, tickets suivis, réponses dans les délais convenus." },
        { icon: <LifeBuoy className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Incidents", description: "Priorisation, containment et post-mortem sur les pannes qui impactent l'activité." },
        { icon: <Wrench className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Parc", description: "Postes, impressions, accès et demandes courantes, sans ticket perdu." },
        { icon: <Clock className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "SLA", description: "Engagements de délai, reporting mensuel et amélioration continue." },
      ],
    },
  },
  ingenierieWeb: {
    metadata: {
      title: "Applications web",
      description: "Portails métiers et applications web sur architectures modernes, du cadrage à la mise en production.",
    },
    page: {
      parentLabel: "Apps & Solutions sur mesure",
      parentHref: "/services/ingenierie",
      tagline: "Apps & Solutions sur mesure",
      titleAccent: "Applications",
      title: "web",
      subtitle:
        "Nous concevons et livrons vos portails métiers et applications web : cadrage, UX, développement, mise en production et reprise d'exploitation.",
      imageSrc: "/images/ingenerie.jpg",
      related: related(ingenierieLinks, "/services/ingenierie/web"),
      points: [
        { icon: <ClipboardList className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Cadrage", description: "Besoins, parcours, périmètre et jalons visibles avant d'écrire la première ligne." },
        { icon: <Globe className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Développement", description: "Applications web modernes, accessibles, adaptées à vos processus." },
        { icon: <LayoutDashboard className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Interfaces", description: "Écrans clairs pour les métiers, pas seulement pour les développeurs." },
        { icon: <Server className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Mise en production", description: "Déploiement, supervision de base et transfert vers vos équipes." },
      ],
    },
  },
  ingenierieMobile: {
    metadata: {
      title: "Applications mobile",
      description: "Applications iOS et Android adaptées à vos processus, natives ou cross-platform.",
    },
    page: {
      parentLabel: "Apps & Solutions sur mesure",
      parentHref: "/services/ingenierie",
      tagline: "Apps & Solutions sur mesure",
      titleAccent: "Applications",
      title: "mobile",
      subtitle:
        "Nous construisons des applications iOS et Android collées à vos usages terrain : saisie, suivi, validation, hors connexion si besoin.",
      imageSrc: "/images/ingenerie.jpg",
      related: related(ingenierieLinks, "/services/ingenierie/mobile"),
      points: [
        { icon: <Smartphone className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "iOS & Android", description: "Natif ou cross-platform selon le délai, le budget et les contraintes stores." },
        { icon: <AppWindow className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Usages métier", description: "Parcours pensés pour le terrain, pas une copie réduite du site web." },
        { icon: <Plug className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Intégrations", description: "Connexion à votre SI, vos APIs et vos outils existants." },
        { icon: <Gauge className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Publication", description: "Stores, versions, suivi des retours et maintenance applicative." },
      ],
    },
  },
  ingenierieApi: {
    metadata: {
      title: "Intégrations API",
      description: "Connexion de vos outils, données et SI existants, sans tout reconstruire.",
    },
    page: {
      parentLabel: "Apps & Solutions sur mesure",
      parentHref: "/services/ingenierie",
      tagline: "Apps & Solutions sur mesure",
      titleAccent: "Intégrations",
      title: "API",
      subtitle:
        "Nous relions vos applications entre elles : APIs, synchronisations, authentification et flux de données, pour éviter les doubles saisies et les silos.",
      imageSrc: "/images/ingenerie.jpg",
      related: related(ingenierieLinks, "/services/ingenierie/api"),
      points: [
        { icon: <CodeXml className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "APIs", description: "REST, GraphQL ou événements, documentées et sécurisées." },
        { icon: <Plug className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Connecteurs", description: "CRM, ERP, messagerie, facturation : on branche ce qui existe déjà." },
        { icon: <ShieldCheck className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Accès", description: "Identités, jetons, droits : chaque flux a un responsable et une trace." },
        { icon: <Repeat className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Synchronisation", description: "Données alignées, erreurs visibles, reprise sur incident." },
      ],
    },
  },
  iaAgents: {
    metadata: {
      title: "Agents IA",
      description: "Copilotes et agents intégrés à vos outils métier, avec un cadre d'usage contrôlé.",
    },
    page: {
      parentLabel: "IA et automatisation",
      parentHref: "/services/ia",
      tagline: "IA et automatisation",
      titleAccent: "Agents",
      title: "IA",
      subtitle:
        "Nous concevons des agents et copilotes utiles dans vos outils (messagerie, CRM, ITSM), avec des limites claires et une supervision humaine.",
      imageSrc: "/images/ia.jpg",
      related: related(iaLinks, "/services/ia/agents"),
      points: [
        { icon: <Bot className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Copilotes", description: "Aide à la rédaction, à la recherche et à la qualification, dans le flux de travail." },
        { icon: <MessageSquare className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Intégration", description: "Teams, Slack, CRM, ERP : l'agent arrive là où vos équipes travaillent déjà." },
        { icon: <ShieldCheck className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Gouvernance", description: "Données autorisées, traces, escalade humaine — pas d'IA hors cadre." },
        { icon: <Gauge className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Mesure", description: "Temps gagné, erreurs évitées, cas d'usage gardés ou abandonnés." },
      ],
    },
  },
  iaRpa: {
    metadata: {
      title: "Automatisation RPA",
      description: "Automatisation des processus répétitifs et des workflows entre vos applications.",
    },
    page: {
      parentLabel: "IA et automatisation",
      parentHref: "/services/ia",
      tagline: "IA et automatisation",
      titleAccent: "Automatisation",
      title: "RPA",
      subtitle:
        "Nous identifions les tâches répétitives qui coûtent du temps, puis nous les automatisons de façon maintenable, avec un suivi des échecs.",
      imageSrc: "/images/ia.jpg",
      related: related(iaLinks, "/services/ia/rpa"),
      points: [
        { icon: <ClipboardList className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Cadrage", description: "Cartographie des processus, volume, exceptions et ROI avant d'automatiser." },
        { icon: <Workflow className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Workflows", description: "Enchaînements entre outils, validations humaines là où elles restent nécessaires." },
        { icon: <Repeat className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "RPA", description: "Robots sur les écrans et APIs que vous ne pouvez pas remplacer tout de suite." },
        { icon: <Gauge className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Pilotage", description: "Journaux, alertes sur échec, et reprise manuelle documentée." },
      ],
    },
  },
  iaPredictive: {
    metadata: {
      title: "Analyse prédictive",
      description: "Aide à la décision à partir de vos données d'exploitation, avec des modèles utiles et suivis.",
    },
    page: {
      parentLabel: "IA et automatisation",
      parentHref: "/services/ia",
      tagline: "IA et automatisation",
      titleAccent: "Analyse",
      title: "prédictive",
      subtitle:
        "Nous partons de vos données d'exploitation pour anticiper charges, risques ou demandes — des modèles lisibles, pas une boîte noire.",
      imageSrc: "/images/ia.jpg",
      related: related(iaLinks, "/services/ia/predictive"),
      points: [
        { icon: <LineChart className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Données", description: "Qualité, sources, historique : on ne prédit rien sur des fichiers incohérents." },
        { icon: <TrendingUp className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Modèles", description: "Prévision, scoring, détection d'anomalies adaptés à une question métier précise." },
        { icon: <LayoutDashboard className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Restitution", description: "Tableaux de bord et alertes pour ceux qui décident, pas seulement pour la data." },
        { icon: <Repeat className={icon} strokeWidth={stroke} aria-hidden="true" />, title: "Suivi", description: "Re-entraînement, dérive, et arrêt du modèle s'il n'aide plus." },
      ],
    },
  },
} satisfies Record<string, OfferDef>;

export const offersByDomain = {
  cybersecurite: {
    audit: offerPages.cyberAudit,
  },
  cloud: {
    migration: offerPages.cloudMigration,
    infrastructure: offerPages.cloudInfrastructure,
    hebergement: offerPages.cloudHebergement,
  },
  infogerance: {
    serveurs: offerPages.infogeranceServeurs,
    m365: offerPages.infogeranceM365,
    support: offerPages.infogeranceSupport,
  },
  ingenierie: {
    web: offerPages.ingenierieWeb,
    mobile: offerPages.ingenierieMobile,
    api: offerPages.ingenierieApi,
  },
  ia: {
    agents: offerPages.iaAgents,
    rpa: offerPages.iaRpa,
    predictive: offerPages.iaPredictive,
  },
} as const;

export type OfferDomain = keyof typeof offersByDomain;
