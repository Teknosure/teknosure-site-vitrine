import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Ingénierie Logicielle TPE/PME — Teknosure",
  description:
    "Développement d'applications web et mobile sur mesure pour les TPE et PME. Sites, outils métier, APIs. Teknosure construit vos solutions digitales.",
};

const inclus = [
  { icon: "🌐", title: "Site web & application web", desc: "Conception et développement de sites vitrines, e-commerce ou applications web sur des technologies modernes (Next.js, React)." },
  { icon: "📱", title: "Application mobile", desc: "Applications iOS et Android natives ou hybrides (React Native / Flutter) adaptées à vos usages métier." },
  { icon: "⚙️", title: "Outils métier sur mesure", desc: "Logiciels de gestion, tableaux de bord, CRM/ERP légers taillés pour vos processus internes." },
  { icon: "🔗", title: "Intégrations & APIs", desc: "Connexion de vos logiciels existants (ERP, CRM, e-commerce) via des APIs robustes et documentées." },
  { icon: "🚀", title: "Mise en production & DevOps", desc: "Déploiement automatisé, CI/CD, hébergement cloud et maintenance applicative inclus." },
  { icon: "🎨", title: "UX/UI Design", desc: "Conception de maquettes et d'interfaces utilisateur intuitives, testées et validées avant développement." },
];

const faqs = [
  {
    q: "Combien coûte une application sur mesure ?",
    a: "Le coût varie selon la complexité. Un outil métier simple peut partir de 5 000 €, une application mobile complète de 15 000 €. Nous établissons un devis précis après analyse de vos besoins.",
  },
  {
    q: "Nous n'avons pas de cahier des charges, est-ce un problème ?",
    a: "Pas du tout. Nous organisons des ateliers de cadrage pour définir ensemble vos besoins, vos utilisateurs cibles et les fonctionnalités prioritaires.",
  },
  {
    q: "Qui reste propriétaire du code développé ?",
    a: "Vous. Tout le code source vous appartient intégralement à la livraison. Nous vous fournissons également une documentation technique complète.",
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: "Nous proposons des contrats de maintenance évolutive. Nous corrigeons les bugs, ajoutons des fonctionnalités et faisons évoluer votre application dans le temps.",
  },
];

export default function OffreIngenieriePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Offre TPE/PME · Ingénierie logicielle"
        titleAccent="Des outils digitaux"
        title="taillés pour votre entreprise"
        subtitle="Sites web, applications mobiles, outils métier — nous concevons et développons des solutions sur mesure qui répondent exactement à vos besoins."
        primaryLabel="Discuter de votre projet"
        primaryHref="/contact"
        secondaryLabel="Voir tous nos packs"
        secondaryHref="/tpe-pme"
        imageSrc="/images/ingenerie.jpg"
        overlayMode="dark"
      />

      {/* ── Ce qui est inclus ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-600">
              Ce qui est inclus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Du code, <span className="text-violet-500">de la conception à la production</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 lg:text-lg">
              Nous prenons en charge l'intégralité du cycle de développement, de l'analyse des besoins au déploiement final.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-violet-200 hover:bg-violet-50 hover:shadow-md">
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-violet-700">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-500 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "100%", label: "du code source vous appartient à la livraison" },
              { stat: "+50", label: "applications livrées pour des PME en France" },
              { stat: "3×", label: "plus rapide grâce à notre méthode agile" },
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Votre projet digital commence ici</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Partagez-nous votre idée ou vos besoins. Nous vous répondons sous 48h avec une première estimation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Discuter de votre projet
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
