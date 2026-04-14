import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Cloud & Infrastructure TPE/PME — Teknosure",
  description:
    "Migration cloud, hébergement sécurisé et infrastructure managée pour les TPE et PME. AWS, Azure, Google Cloud. Teknosure gère votre IT de bout en bout.",
};

const CloudIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>
);
const CircleStackIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);
const BoltIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const LockIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
const ChartBarIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const CurrencyEuroIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const inclus = [
  { icon: <CloudIcon />, color: "text-sky-600 bg-sky-50", title: "Migration cloud guidée", desc: "Audit, planification et migration de vos données et applications vers AWS, Azure ou Google Cloud." },
  { icon: <CircleStackIcon />, color: "text-blue-600 bg-blue-50", title: "Sauvegarde automatisée", desc: "Sauvegardes quotidiennes chiffrées avec restauration garantie en moins de 2h en cas d'incident." },
  { icon: <BoltIcon />, color: "text-yellow-600 bg-yellow-50", title: "Infrastructure haute disponibilité", desc: "Serveurs redondants, load balancing et failover automatique pour 99,9 % de disponibilité." },
  { icon: <LockIcon />, color: "text-cyan-600 bg-cyan-50", title: "Sécurité réseau & VPN", desc: "VPN d'entreprise, segmentation réseau et accès distants sécurisés pour vos équipes." },
  { icon: <ChartBarIcon />, color: "text-indigo-600 bg-indigo-50", title: "Monitoring & alertes", desc: "Surveillance en temps réel de vos ressources cloud avec tableaux de bord et rapports automatiques." },
  { icon: <CurrencyEuroIcon />, color: "text-green-600 bg-green-50", title: "Optimisation des coûts", desc: "Analyse et optimisation continue de vos dépenses cloud pour réduire votre facture jusqu'à 40%." },
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
        primaryLabel="Demander un devis"
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
                <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>{item.icon}</span>
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
