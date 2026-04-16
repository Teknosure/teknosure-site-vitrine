import ContactFormSection from "@/app/components/sections/ContactFormSection";
import Link from "next/link";

export const metadata = {
  title: "Nous Contacter — Devis & Conseil",
  description:
    "Contactez Teknosure pour un devis personnalisé. Cybersécurité, cloud, infogérance, ingénierie. Réponse sous 24h. Basé à Taverny (95), intervenant partout en France.",
  keywords: ["contact Teknosure", "devis informatique", "conseil IT", "cybersécurité Taverny", "ESN Île-de-France"],
  openGraph: {
    title: "Contacter Teknosure — Devis personnalisé",
    description: "Devis personnalisé pour votre projet IT. Réponse sous 24h. Basé à Taverny, intervenant partout en France.",
    url: "https://www.teknosure.com/contact",
  },
};

const faq = [
  {
    q: "Combien de temps pour obtenir une réponse ?",
    a: "Nous nous engageons à répondre sous 24h ouvrées. Pour les urgences de sécurité, notre équipe SOC est joignable 24/7.",
  },
  {
    q: "Proposez-vous des audits gratuits ?",
    a: "Oui, nous offrons un audit initial sans engagement pour évaluer vos besoins et vous orienter vers les meilleures solutions.",
  },
  {
    q: "Intervenez-vous sur tout type d'entreprise ?",
    a: "Absolument. Nos solutions s'adaptent aux TPE, PME, ETI et grands comptes, avec une approche personnalisée pour chaque profil.",
  },
  {
    q: "Comment se déroule un premier échange ?",
    a: "Après réception de votre message, nous planifions un appel de 30 min pour cerner vos enjeux, puis vous proposons une approche adaptée.",
  },
];

const expertises = [
  { label: "Cybersécurité", href: "/services/cybersecurite", color: "bg-red-50 text-red-600 border-red-100" },
  { label: "Infrastructure & Cloud", href: "/services/cloud", color: "bg-[var(--primary-light)] text-[var(--primary)] border-[var(--primary-border)]" },
  { label: "Infogérance IT & Infrastructure", href: "/services/infogerance", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { label: "Ingénierie logicielle", href: "/services/ingenierie", color: "bg-violet-50 text-violet-600 border-violet-100" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Mini hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[var(--primary-dark)] via-[var(--primary-mid)] to-[var(--primary)] pt-32 pb-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-12 left-1/3 h-56 w-56 rounded-full bg-cyan-400/10" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Teknosure — Nous contacter
          </span>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Votre projet mérite
            <br />
            <span className="underline decoration-cyan-300 decoration-4 underline-offset-4">
              une vraie conversation
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-[var(--primary-border)]">
            Pas de formulaire robotique, pas de template générique.
            Décrivez-nous votre situation — nous vous répondons avec une vraie proposition.
          </p>

          {/* Chips domaines */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {expertises.map((e) => (
              <Link
                key={e.label}
                href={e.href}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                {e.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulaire + infos ────────────────────────────────────────────── */}
      <ContactFormSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              FAQ
            </span>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-[var(--primary-border)] hover:shadow-sm"
              >
                <p className="mb-2 text-sm font-bold text-gray-900">{item.q}</p>
                <p className="text-sm leading-relaxed text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bande finale ─────────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm text-gray-500">
            Vous préférez explorer nos services avant de nous contacter ?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            {expertises.map((e) => (
              <Link
                key={e.label}
                href={e.href}
                className={`rounded-full border px-5 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:shadow-sm ${e.color}`}
              >
                {e.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
