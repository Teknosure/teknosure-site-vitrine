import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre IA & Automatisation TPE/PME — Teknosure",
  description:
    "Intelligence artificielle et automatisation des processus pour les TPE et PME. Chatbots, RPA, analyse de données, OCR. Teknosure booste votre productivité.",
};

const CpuChipIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
  </svg>
);
const ChatBubbleIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);
const PresentationChartIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
);
const DocumentTextIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
const MagnifyingGlassIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);
const SparklesIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const inclus = [
  { icon: <CpuChipIcon />, color: "text-emerald-600 bg-emerald-50", title: "Automatisation des processus (RPA)", desc: "Automatisation de vos tâches répétitives : saisie de données, traitement de factures, reporting automatique." },
  { icon: <ChatBubbleIcon />, color: "text-blue-600 bg-blue-50", title: "Chatbot & assistant virtuel", desc: "Assistant IA intégré à votre site ou vos outils internes pour répondre à vos clients ou collaborateurs 24/7." },
  { icon: <PresentationChartIcon />, color: "text-violet-600 bg-violet-50", title: "Analyse de données & prédiction", desc: "Tableaux de bord intelligents, détection d'anomalies et prévisions basées sur vos données métier." },
  { icon: <DocumentTextIcon />, color: "text-orange-600 bg-orange-50", title: "OCR & traitement documentaire", desc: "Extraction automatique d'informations depuis vos documents, factures, contrats et formulaires." },
  { icon: <MagnifyingGlassIcon />, color: "text-cyan-600 bg-cyan-50", title: "Recommandations & personnalisation", desc: "Moteurs de recommandation pour vos clients ou outils de personnalisation basés sur le comportement utilisateur." },
  { icon: <SparklesIcon />, color: "text-pink-600 bg-pink-50", title: "Intégration LLM & GenAI", desc: "Intégration de modèles de langage (GPT, Claude) dans vos outils pour automatiser la rédaction et l'analyse." },
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
                <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>{item.icon}</span>
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
