import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Infogérance TPE/PME — Teknosure",
  description:
    "Infogérance et services IT managés pour les TPE et PME. Support technique, gestion des postes, supervision réseau. Teknosure s'occupe de tout votre IT.",
};

const packs = [
  {
    id: "start",
    emoji: "🟢",
    badge: "Fondations IT & sécurité pour TPE",
    name: "Teknosure Start",
    target: "5 à 15 postes",
    price: "49 €",
    priceSuffix: "HT / poste / mois",
    highlighted: false,
    themeText: "text-emerald-700",
    themeBg: "bg-emerald-50",
    themeBorder: "border-emerald-200 hover:border-emerald-400",
    themeBtn: "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white",
    themeTag: "bg-emerald-100 text-emerald-700",
    themeAccent: "bg-emerald-500",
    groups: [
      {
        label: "Support & exploitation",
        items: [
          "Support utilisateurs N1 à distance (L–V 9h–18h)",
          "Supervision continue des postes",
          "Maintenance préventive automatisée",
          "Suivi des mises à jour postes",
        ],
      },
      {
        label: "Sécurité & continuité",
        items: [
          "Protection endpoint standard",
          "Sensibilisation au phishing cyber annuelle (format essentiel)",
          "Sauvegardes cloud automatisées des postes",
          "Supervision quotidienne des sauvegardes",
        ],
      },
      {
        label: "Gestion & visibilité",
        items: [
          "Gestion Microsoft 365 (basique)",
          "Inventaire matériel & logiciel",
          "Reporting opérationnel trimestriel",
        ],
      },
    ],
    note: null,
  },
  {
    id: "secure",
    emoji: "🔵",
    badge: "Cybersécurité managée & pilotage IT des PME",
    name: "Teknosure Secure",
    target: "15 à 100 postes",
    price: "79 €",
    priceSuffix: "HT / poste / mois",
    highlighted: true,
    themeText: "text-blue-700",
    themeBg: "bg-blue-50",
    themeBorder: "border-blue-500 ring-2 ring-blue-200",
    themeBtn: "bg-blue-600 text-white hover:bg-blue-700",
    themeTag: "bg-blue-100 text-blue-700",
    themeAccent: "bg-blue-500",
    groups: [
      {
        label: "Support & pilotage (tout Start +)",
        items: [
          "Support informatique N1–N2 (heures ouvrées)",
          "Guichet unique & coordination des prestataires",
          "Point de contact d'escalade",
          "Réunion de pilotage périodique",
        ],
      },
      {
        label: "Cybersécurité",
        items: [
          "Surveillance SOC 24/7",
          "XDR managé (postes & serveurs)",
          "Sécurité email & antiphishing",
          "Sauvegardes avec tests de restauration",
          "Sensibilisation cyber annuelle des utilisateurs",
        ],
      },
      {
        label: "Gouvernance IT",
        items: [
          "Gestion avancée Microsoft 365",
          "Check-list de conformité (≈ 120 points)",
          "Standards et bonnes pratiques documentés",
          "Dossier technique à jour",
          "Rapports & tableaux de bord mensuels (sécurité & incidents)",
        ],
      },
    ],
    note: null,
  },
  {
    id: "continuity",
    emoji: "🔴",
    badge: "Résilience, gouvernance & continuité business",
    name: "Teknosure Continuity",
    target: "PME stratégiques · multisites · données critiques",
    price: "119 €",
    priceSuffix: "HT / poste / mois",
    highlighted: false,
    themeText: "text-red-700",
    themeBg: "bg-red-50",
    themeBorder: "border-red-200 hover:border-red-400",
    themeBtn: "border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white",
    themeTag: "bg-red-100 text-red-700",
    themeAccent: "bg-red-500",
    groups: [
      {
        label: "Engagement & SLA (tout Secure +)",
        items: [
          "Support informatique avec SLA contractuels",
          "SOC 24/7 avec SLA",
          "XDR managé avancé (couverture étendue, corrélation multi-sources, réponse automatisée)",
          "2 visites sur site / an (jusqu'à 4h chacune)",
          "Interventions complémentaires à 95 € HT/h",
        ],
      },
      {
        label: "Direction & Sécurité externalisées",
        items: [
          "DSI externalisé — 2 ateliers stratégiques de 2h / mois",
          "RSSI externalisé — 2 ateliers stratégiques de 2h / mois",
          "Comité de pilotage mensuel",
          "Feuille de route IT & cyber 12–24 mois",
        ],
      },
      {
        label: "Conformité & assurance",
        items: [
          "Accompagnement audits & conformité",
          "Dossiers pour assurances cyber",
          "Appui PCA / PRA (niveau adapté PME)",
        ],
      },
    ],
    note: [
      "Interventions sur site au-delà des 2 visites incluses — 95 € HT/h",
      "Installation / remplacement de postes — hors forfait",
      "Licences Microsoft 365 — facturées séparément",
    ],
  },
];

const faqs = [
  {
    q: "Qu'est-ce que l'infogérance exactement ?",
    a: "L'infogérance consiste à externaliser la gestion de votre informatique à un prestataire spécialisé. Vous bénéficiez d'experts IT sans avoir à recruter en interne.",
  },
  {
    q: "Peut-on externaliser seulement une partie de notre IT ?",
    a: "Oui, nous proposons de l'infogérance partielle. Vous gardez la main sur ce que vous maîtrisez et nous prenons en charge le reste.",
  },
  {
    q: "Quels sont vos horaires de support ?",
    a: "Notre support standard est disponible du lundi au vendredi de 9h à 18h. Les offres Secure et Continuity incluent un SOC 24/7 pour la surveillance des menaces.",
  },
  {
    q: "Comment se passe l'intégration de nos systèmes existants ?",
    a: "Nous réalisons un audit complet lors de l'onboarding (2 à 5 jours). Nous documentons l'intégralité de votre infrastructure avant de prendre la main.",
  },
];

export default function OffreInfogerancePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Offre TPE/PME · Infogérance"
        titleAccent="Externalisez votre IT"
        title="et concentrez-vous sur votre métier"
        subtitle="Support, cybersécurité managée, gouvernance IT et continuité business — des offres progressives conçues pour répondre aux exigences des assureurs cyber et aux standards de sécurité actuels."
        primaryLabel="Demander un devis"
        primaryHref="/contact"
        secondaryLabel="Voir les offres"
        secondaryHref="#offres"
        imageSrc="/images/hero-bg.png"
        overlayMode="dark"
      />

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-linear-to-r from-orange-500 to-amber-400 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "2×", label: "réduction des coûts IT vs. un poste interne" },
              { stat: "SOC 24/7", label: "surveillance continue dès l'offre Secure" },
              { stat: "∞", label: "tickets de support sans surcoût" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold text-white">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offres ────────────────────────────────────────────────────────── */}
      <section id="offres" className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          {/* Header */}
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
              Nos offres infogérance
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Trois niveaux de protection,<br className="hidden sm:block" /> <span className="text-orange-500">un seul partenaire</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Des offres conçues pour répondre aux exigences des assureurs cyber et aux standards de sécurité actuels.
              Les prestations d&apos;infrastructure et d&apos;architecture avancée peuvent être proposées dans des offres distinctes.
            </p>
          </div>

          {/* Grille 3 packs */}
          <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-2xl border-2 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${pack.themeBorder} ${pack.highlighted ? "scale-[1.02] shadow-lg" : ""}`}
              >
                {/* Header card */}
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
                  <p className="mt-1 text-xs font-semibold text-gray-500">👥 {pack.target}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${pack.themeText}`}>{pack.price}</span>
                    <span className="text-sm text-gray-400">{pack.priceSuffix}</span>
                  </div>
                </div>

                {/* Body — groupes de features */}
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

                  {/* Note hors-forfait (Continuity uniquement) */}
                  {pack.note && (
                    <div className="mt-2 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        ⚠️ Hors forfait / options
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

          {/* Note bas de page */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Tarifs indicatifs HT. Sur la base d&apos;un engagement 12 mois.{" "}
            <Link href="/contact" className="font-semibold text-orange-500 hover:underline">
              Demandez un devis personnalisé.
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Libérez-vous des contraintes IT</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Concentrez-vous sur votre cœur de métier. Nos experts gèrent votre informatique au quotidien.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Demander un devis
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
