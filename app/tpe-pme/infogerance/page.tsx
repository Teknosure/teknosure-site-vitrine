import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Infogérance TPE/PME — Teknosure",
  description:
    "Infogérance et services IT managés pour les TPE et PME. Support technique, gestion des postes, supervision réseau. Teknosure s'occupe de tout votre IT.",
};

const inclus = [
  { icon: "🖥️", title: "Gestion des postes de travail", desc: "Installation, configuration, mises à jour et maintenance de l'ensemble de vos PC, Mac et équipements." },
  { icon: "📞", title: "Helpdesk & support utilisateurs", desc: "Tickets illimités, assistance à distance et sur site. Réponse garantie en moins de 2h ouvrées." },
  { icon: "🌐", title: "Gestion réseau & équipements", desc: "Administration de vos switchs, routeurs, points d'accès Wi-Fi et équipements réseau." },
  { icon: "🔄", title: "Mises à jour & patches", desc: "Application automatique des correctifs de sécurité et mises à jour logicielles sur tous vos équipements." },
  { icon: "📈", title: "Reporting mensuel", desc: "Rapport détaillé de l'activité IT : incidents traités, disponibilité des systèmes, recommandations." },
  { icon: "🤝", title: "Interlocuteur IT dédié", desc: "Un ingénieur référent connaît votre infrastructure et est joignable directement à tout moment." },
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
    a: "Notre support standard est disponible du lundi au vendredi de 8h à 19h. Une option 24/7 est disponible pour les entreprises nécessitant une continuité totale.",
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
        subtitle="Support illimité, gestion des postes, supervision réseau 24/7 — une équipe IT dédiée à votre service, sans recrutement."
        primaryLabel="Demander un devis"
        primaryHref="/contact"
        secondaryLabel="Voir tous nos packs"
        secondaryHref="/tpe-pme"
        imageSrc="/images/hero-bg.png"
        overlayMode="dark"
      />

      {/* ── Ce qui est inclus ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
              Ce qui est inclus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Votre IT géré <span className="text-orange-500">de bout en bout</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 lg:text-lg">
              Un seul interlocuteur pour toute votre informatique. Nous nous occupons de tout, vous vous occupez de votre business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-orange-200 hover:bg-orange-50 hover:shadow-md">
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-orange-700">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-400 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "2×", label: "réduction des coûts IT par rapport à un poste interne" },
              { stat: "2h", label: "délai de réponse garanti pour tout incident" },
              { stat: "∞", label: "tickets de support sans surcoût" },
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Libérez-vous des contraintes IT</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Concentrez-vous sur votre cœur de métier. Nos experts gèrent votre informatique au quotidien.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
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
