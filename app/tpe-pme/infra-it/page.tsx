import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Infrastructure IT — Teknosure",
  description:
    "Supervision, exploitation et gouvernance de votre infrastructure IT, réseau et cloud — sans recruter d'équipe technique interne. Teknosure gère votre socle IT.",
};

const packs = [
  {
    id: "control",
    emoji: "🟢",
    badge: "Supervision & stabilité du socle technique",
    name: "Infra Control",
    target: "PME / sites simples — 1 site principal",
    objective: "Avoir une infrastructure et un réseau supervisés en permanence, avec une visibilité claire sur la santé du système — et être alerté avant que les problèmes bloquent l'activité.",
    caveat: "Cette offre ne comprend pas le maintien en condition opérationnelle ni la résolution des incidents.",
    price: "800 – 1 200 €",
    priceSuffix: "HT / mois",
    priceDetail: "jusqu'à 5 serveurs → 800 € · jusqu'à 15 serveurs → 1 200 €",
    highlighted: false,
    themeText: "text-emerald-700",
    themeBg: "bg-emerald-50",
    themeBorder: "border-emerald-200 hover:border-emerald-400",
    themeBtn: "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white",
    themeTag: "bg-emerald-100 text-emerald-700",
    themeAccent: "bg-emerald-500",
    groups: [
      {
        label: "Infrastructure",
        items: [
          "Supervision serveurs (physiques / virtuels)",
          "Supervision stockage & hyperviseurs",
          "Suivi de capacité (CPU, RAM, disque)",
          "Alertes proactives sur incidents techniques",
          "Intervention de diagnostic incluse sur alerte critique (résolution hors forfait)",
        ],
      },
      {
        label: "Réseaux",
        items: [
          "Supervision équipements réseau (switchs, Wi-Fi, routeurs)",
          "Supervision liaisons internet",
          "Suivi de disponibilité et de performance",
        ],
      },
      {
        label: "Cloud",
        items: [
          "Supervision des services cloud critiques (IaaS / M365 infra)",
          "Suivi disponibilité & consommation",
        ],
      },
      {
        label: "Pilotage",
        items: [
          "Cartographie technique simplifiée",
          "Rapport d'état trimestriel",
          "Recommandations techniques de premier niveau",
        ],
      },
    ],
    note: null,
    tagline: "Idéale pour « voir venir les problèmes avant qu'ils bloquent l'activité »",
  },
  {
    id: "managed",
    emoji: "🔵",
    badge: "Exploitation technique & optimisation",
    name: "Infra Managed",
    target: "PME structurées — mono ou multi-site",
    objective: "Ne plus subir l'infrastructure : la maîtriser au quotidien, l'optimiser dans la durée, et disposer d'une équipe technique senior sans la recruter.",
    caveat: null,
    price: "1 800 – 3 000 €",
    priceSuffix: "HT / mois",
    priceDetail: "Mono-site jusqu'à 15 serveurs : 1 800–2 200 € · Multi-sites ou cloud significatif : 2 200–3 000 €",
    highlighted: true,
    themeText: "text-blue-700",
    themeBg: "bg-blue-50",
    themeBorder: "border-blue-500 ring-2 ring-blue-200",
    themeBtn: "bg-blue-600 text-white hover:bg-blue-700",
    themeTag: "bg-blue-100 text-blue-700",
    themeAccent: "bg-blue-500",
    groups: [
      {
        label: "Exploitation Infrastructure (tout Infra Control +)",
        items: [
          "Exploitation et maintien en condition opérationnelle du socle infra (serveurs, stockage, hyperviseurs)",
          "Gestion des mises à jour systèmes & firmwares",
          "Traitement des incidents techniques infra (N2–N3)",
          "Gestion des sauvegardes techniques",
        ],
      },
      {
        label: "Réseaux",
        items: [
          "Gestion LAN/WAN inter-sites",
          "Gestion VPN techniques",
          "Coordination opérateurs télécoms",
          "Optimisation performance réseau",
        ],
      },
      {
        label: "Cloud",
        items: [
          "Exploitation environnements cloud",
          "Gestion capacité, performance, disponibilité",
          "Recommandations d'optimisation coûts (FinOps opérationnel)",
        ],
      },
      {
        label: "Pilotage",
        items: [
          "Dossier d'architecture infrastructure détaillé",
          "Standards techniques documentés",
          "Tableaux de bord mensuels",
          "Réunion de pilotage technique périodique",
        ],
      },
    ],
    note: null,
    tagline: "Offre cœur de marché pour PME sans équipe infra senior",
  },
  {
    id: "architecture",
    emoji: "🔴",
    badge: "Gouvernance & continuité du socle IT",
    name: "Infra Architecture & Résilience",
    target: "PME critiques / ETI multi-sites",
    objective: "Faire de l'infrastructure, du réseau et du cloud un pilier stratégique du business — avec la gouvernance, la résilience et la feuille de route d'une grande entreprise.",
    caveat: null,
    price: "3 500 – 9 000 €",
    priceSuffix: "HT / mois",
    priceDetail: "PME multi-sites (≤ 3 sites, 30 serveurs) : 3 500–5 500 € · ETI (4 sites+, cloud avancé) : 6 000–9 000 € · Tarif calé sur audit technique initial gratuit (1 atelier 2h)",
    highlighted: false,
    themeText: "text-red-700",
    themeBg: "bg-red-50",
    themeBorder: "border-red-200 hover:border-red-400",
    themeBtn: "border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white",
    themeTag: "bg-red-100 text-red-700",
    themeAccent: "bg-red-500",
    groups: [
      {
        label: "Architecture & résilience (tout Infra Managed +)",
        items: [
          "Conception & maintien d'architectures hybrides / multi-sites",
          "Haute disponibilité & redondance technique",
          "Plans de reprise technique (PRA infra)",
          "Tests de reprise programmés (infra uniquement)",
        ],
      },
      {
        label: "Réseaux avancés",
        items: [
          "Architecture WAN multi-sites",
          "Redondance liens & équipements",
          "Arbitrage performance / coûts / disponibilité",
        ],
      },
      {
        label: "Cloud avancé",
        items: [
          "Stratégie hybridation / multi-cloud",
          "Arbitrage on-prem / cloud",
          "Gouvernance coûts cloud (FinOps avancé)",
        ],
      },
      {
        label: "Gouvernance technique",
        items: [
          "Architecte / DSI Infra externalisé — 2 ateliers stratégiques / mois",
          "Comité de pilotage mensuel",
          "Feuille de route Infra / Réseau / Cloud 12–24 mois",
          "Aide à la décision CAPEX / OPEX",
        ],
      },
    ],
    note: [
      "Projets d'évolution lourds & déploiements majeurs",
      "Matériel & licences éditeurs",
    ],
    tagline: "Offre très différenciante, rarement proposée sous cette forme par les MSP",
  },
];

const faqs = [
  {
    q: "Ces offres incluent-elles la cybersécurité ?",
    a: "Non. Ces offres couvrent exclusivement l'infrastructure, le réseau et le cloud. La cybersécurité (SOC, firewall, XDR…) est traitée dans nos packages dédiés.",
  },
  {
    q: "Comment est déterminé le forfait exact ?",
    a: "Le forfait est calé après un audit technique initial gratuit (1 atelier de 2h) qui nous permet d'évaluer précisément votre environnement : nombre de serveurs, sites, services cloud, complexité réseau.",
  },
  {
    q: "Peut-on commencer par Infra Control et évoluer ?",
    a: "Oui. Nos offres sont conçues pour être progressives. Vous pouvez démarrer avec la supervision et passer à l'exploitation complète selon l'évolution de vos besoins.",
  },
  {
    q: "Les migrations et projets lourds sont-ils inclus ?",
    a: "Non, les projets d'évolution majeurs (migrations, déploiements lourds) sont hors forfait et font l'objet d'un devis séparé. Nous intervenons au tarif préférentiel accordé aux clients sous contrat.",
  },
];

export default function OffreInfraITPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Offre Infrastructure IT · Supervision & Exploitation"
        titleAccent="Maîtrisez votre infrastructure"
        title="sans recruter d'équipe technique"
        subtitle="Supervision, exploitation et gouvernance de votre socle IT, réseau et cloud — des offres progressives conçues pour les PME et ETI qui veulent un partenaire technique senior, sans les contraintes d'une équipe interne."
        primaryLabel="Audit gratuit (2h)"
        primaryHref="/contact"
        secondaryLabel="Voir les offres"
        secondaryHref="#offres"
        imageSrc="/images/cloud.jpg"
        overlayMode="dark"
      />

      {/* ── Bannière ──────────────────────────────────────────────────────── */}
      <section className="bg-linear-to-r from-sky-600 to-blue-500 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "3 offres", label: "progressives — de la supervision à la gouvernance" },
              { stat: "Audit 2h", label: "offert pour cadrer le forfait exact" },
              { stat: "0 recrutement", label: "un architecte senior sans l'embaucher" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold text-white">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────────────────────── */}
      <div className="bg-amber-50 border-y border-amber-200 py-4">
        <p className="mx-auto max-w-4xl px-5 text-center text-sm text-amber-700 sm:px-6">
          <span className="font-bold">⚠️ Ces offres n&apos;incluent pas la cybersécurité</span> (SOC, firewall managé, XDR…), traitée dans des packages distincts.
          Les prestations d&apos;infrastructure et d&apos;architecture avancée peuvent être proposées en options encadrées.
        </p>
      </div>

      {/* ── Offres ────────────────────────────────────────────────────────── */}
      <section id="offres" className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-600">
              Nos offres Infra IT
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Trois niveaux d&apos;engagement,<br className="hidden sm:block" /> <span className="text-sky-500">un seul partenaire technique</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              De la simple supervision à la gouvernance complète de votre socle IT — choisissez le niveau qui correspond à votre maturité et vos enjeux.
            </p>
          </div>

          {/* Grille 3 packs */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-2xl border-2 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${pack.themeBorder} ${pack.highlighted ? "scale-[1.02] shadow-lg" : ""}`}
              >
                {/* Header */}
                <div className={`rounded-t-2xl px-7 py-6 ${pack.themeBg}`}>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${pack.themeTag}`}>
                      {pack.badge}
                    </span>
                    {pack.highlighted && (
                      <span className="shrink-0 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        ★ Cœur de marché
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xl font-extrabold ${pack.themeText}`}>
                    {pack.emoji} {pack.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-gray-500">🏢 {pack.target}</p>

                  {/* Objectif */}
                  <p className="mt-3 text-xs leading-relaxed text-gray-600 italic">&ldquo;{pack.objective}&rdquo;</p>

                  {/* Caveat */}
                  {pack.caveat && (
                    <p className="mt-2 text-[11px] text-amber-700 font-medium">⚠️ {pack.caveat}</p>
                  )}

                  {/* Prix */}
                  <div className="mt-4 border-t border-white/60 pt-4">
                    <span className={`text-2xl font-extrabold ${pack.themeText}`}>{pack.price}</span>
                    <span className="ml-1 text-sm text-gray-400">{pack.priceSuffix}</span>
                    <p className="mt-1 text-[11px] text-gray-400">{pack.priceDetail}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-5 px-7 py-6">
                  {pack.groups.map((group, gi) => (
                    <div key={gi}>
                      <p className={`mb-2 text-[11px] font-bold uppercase tracking-widest ${pack.themeText}`}>
                        {group.label}
                      </p>
                      <ul className="space-y-2">
                        {group.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${pack.themeAccent}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {gi < pack.groups.length - 1 && <div className="mt-4 h-px bg-gray-100" />}
                    </div>
                  ))}

                  {/* Options hors forfait */}
                  {pack.note && (
                    <div className="mt-2 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        ⚠️ Options complémentaires (sur devis)
                      </p>
                      <ul className="space-y-1.5">
                        {pack.note.map((n, ni) => (
                          <li key={ni} className="flex items-start gap-2 text-xs text-gray-500">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tagline */}
                  <p className={`text-xs font-semibold italic ${pack.themeText}`}>✅ {pack.tagline}</p>
                </div>

                {/* CTA */}
                <div className="px-7 pb-7">
                  <Link
                    href="/contact"
                    className={`block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${pack.themeBtn}`}
                  >
                    Choisir cette offre
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            Tarifs indicatifs HT. Forfait précis défini après audit initial gratuit.{" "}
            <Link href="/contact" className="font-semibold text-sky-500 hover:underline">
              Demandez votre audit (2h offert).
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-800">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Maîtrisez votre infrastructure IT</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Un audit technique gratuit de 2h pour cadrer votre offre et repartir avec un plan d&apos;action concret.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-linear-to-r from-sky-600 to-blue-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Demander l&apos;audit gratuit
            </Link>
            <Link href="/tpe-pme" className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">
              Voir tous nos packs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
