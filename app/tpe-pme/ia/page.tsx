import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre IA & Automatisation TPE/PME — Teknosure",
  description:
    "Intelligence artificielle et automatisation des processus pour les TPE et PME. Chatbots, RPA, analyse de données, OCR. Teknosure booste votre productivité.",
};

const inclus = [
  { icon: "🤖", title: "Automatisation des processus (RPA)", desc: "Automatisation de vos tâches répétitives : saisie de données, traitement de factures, reporting automatique." },
  { icon: "💬", title: "Chatbot & assistant virtuel", desc: "Assistant IA intégré à votre site ou vos outils internes pour répondre à vos clients ou collaborateurs 24/7." },
  { icon: "📊", title: "Analyse de données & prédiction", desc: "Tableaux de bord intelligents, détection d'anomalies et prévisions basées sur vos données métier." },
  { icon: "📄", title: "OCR & traitement documentaire", desc: "Extraction automatique d'informations depuis vos documents, factures, contrats et formulaires." },
  { icon: "🔍", title: "Recommandations & personnalisation", desc: "Moteurs de recommandation pour vos clients ou outils de personnalisation basés sur le comportement utilisateur." },
  { icon: "🧠", title: "Intégration LLM & GenAI", desc: "Intégration de modèles de langage (GPT, Claude) dans vos outils pour automatiser la rédaction et l'analyse." },
];

const faqs = [
  {
    q: "L'IA est-elle accessible pour une PME ?",
    a: "Absolument. Les solutions que nous déployons sont des outils concrets et abordables, pas de la recherche. Une automatisation simple peut faire économiser plusieurs heures par semaine dès la première semaine.",
  },
  {
    q: "Nos données sont-elles sécurisées avec l'IA ?",
    a: "Oui. Nous utilisons des solutions on-premise ou des API avec des garanties de confidentialité. Vos données ne servent jamais à entraîner des modèles tiers.",
  },
  {
    q: "Par où commencer quand on ne connaît pas l'IA ?",
    a: "Nous commençons toujours par un atelier de découverte (2h) pour identifier les processus les plus coûteux en temps. Nous proposons ensuite un pilote sur un cas d'usage précis.",
  },
  {
    q: "Faut-il changer tous nos outils ?",
    a: "Non. Nous intégrons l'IA dans vos outils existants (Excel, ERP, CRM, messagerie). L'objectif est d'augmenter ce que vous avez, pas de tout remplacer.",
  },
];

export default function OffreIAPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Offre TPE/PME · IA & Automatisation"
        titleAccent="Automatisez vos tâches"
        title="et gagnez en productivité"
        subtitle="RPA, chatbots, analyse de données, OCR — des solutions d'IA concrètes et accessibles pour booster la productivité de votre équipe dès maintenant."
        primaryLabel="Découvrir les possibilités"
        primaryHref="/contact"
        secondaryLabel="Voir tous nos packs"
        secondaryHref="/tpe-pme"
        imageSrc="/images/ia.jpg"
        overlayMode="dark"
      />

      {/* ── Ce qui est inclus ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Ce qui est inclus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              L&apos;IA au service <span className="text-emerald-500">de votre productivité</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 lg:text-lg">
              Des solutions concrètes, déployées rapidement, avec un retour sur investissement mesurable dès les premières semaines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md">
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-emerald-700">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "30%", label: "de gain de productivité moyen après automatisation" },
              { stat: "2 sem.", label: "pour déployer un premier pilote IA fonctionnel" },
              { stat: "ROI×3", label: "retour sur investissement moyen à 12 mois" },
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Prêt à passer à l&apos;IA ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Parlez-nous de vos processus les plus chronophages. Nos experts identifient les automatisations à fort impact en 48h.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Discuter de vos besoins
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
