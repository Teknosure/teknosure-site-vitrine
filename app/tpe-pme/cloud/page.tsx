import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Cloud & Infrastructure TPE/PME — Teknosure",
  description:
    "Migration cloud, hébergement sécurisé et infrastructure managée pour les TPE et PME. AWS, Azure, Google Cloud. Teknosure gère votre IT de bout en bout.",
};

const inclus = [
  { icon: "☁️", title: "Migration cloud guidée", desc: "Audit, planification et migration de vos données et applications vers AWS, Azure ou Google Cloud." },
  { icon: "💾", title: "Sauvegarde automatisée", desc: "Sauvegardes quotidiennes chiffrées avec restauration garantie en moins de 2h en cas d'incident." },
  { icon: "⚡", title: "Infrastructure haute disponibilité", desc: "Serveurs redondants, load balancing et failover automatique pour 99,9 % de disponibilité." },
  { icon: "🔒", title: "Sécurité réseau & VPN", desc: "VPN d'entreprise, segmentation réseau et accès distants sécurisés pour vos équipes." },
  { icon: "📊", title: "Monitoring & alertes", desc: "Surveillance en temps réel de vos ressources cloud avec tableaux de bord et rapports automatiques." },
  { icon: "💰", title: "Optimisation des coûts", desc: "Analyse et optimisation continue de vos dépenses cloud pour réduire votre facture jusqu'à 40%." },
];

const faqs = [
  {
    q: "Dois-je tout migrer d'un coup vers le cloud ?",
    a: "Non. Nous proposons des migrations progressives adaptées à votre rythme. Nous commençons par les éléments non critiques avant de migrer les systèmes essentiels.",
  },
  {
    q: "Quelle différence entre AWS, Azure et Google Cloud ?",
    a: "Chaque fournisseur a ses forces. Nous analysons vos besoins et recommandons la solution la plus adaptée, ou une architecture multi-cloud selon votre situation.",
  },
  {
    q: "Mes données restent-elles en France / Europe ?",
    a: "Oui, nous configurons systématiquement la géolocalisation des données en Europe (RGPD). Nous pouvons aussi proposer des hébergeurs souverains français.",
  },
  {
    q: "Quel est le délai de migration typique ?",
    a: "De 2 semaines pour une TPE simple à 2 mois pour une PME avec des applications métier complexes. Tout se fait sans interruption de votre activité.",
  },
];

export default function OffreCloudPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Offre TPE/PME · Cloud & Infrastructure"
        titleAccent="Migrez vers le cloud"
        title="en toute sérénité"
        subtitle="AWS, Azure ou Google Cloud — nos experts gèrent votre migration, votre infrastructure et vos sauvegardes pour une disponibilité maximale."
        primaryLabel="Demander un audit gratuit"
        primaryHref="/contact"
        secondaryLabel="Voir tous nos packs"
        secondaryHref="/tpe-pme"
        imageSrc="/images/cloud.jpg"
        overlayMode="dark"
      />

      {/* ── Ce qui est inclus ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-600">
              Ce qui est inclus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Une infrastructure cloud <span className="text-sky-500">performante et sécurisée</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 lg:text-lg">
              De la migration à la supervision quotidienne, nous gérons l'intégralité de votre infrastructure cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-sky-200 hover:bg-sky-50 hover:shadow-md">
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-sky-700">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-sky-600 to-cyan-500 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "99,9%", label: "de disponibilité garantie sur votre infrastructure" },
              { stat: "2h", label: "délai de restauration garanti en cas d'incident" },
              { stat: "-40%", label: "de réduction possible sur vos coûts cloud" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-5xl font-extrabold text-white">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Passez au cloud sans stress ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Obtenez une étude gratuite de votre infrastructure actuelle et un plan de migration personnalisé.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Demander une étude gratuite
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
