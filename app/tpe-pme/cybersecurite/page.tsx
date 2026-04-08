import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Cybersécurité TPE/PME — Teknosure",
  description:
    "Protection & conformité RGPD pour les TPE et PME. Antivirus managé, pare-feu, détection des menaces, audits de sécurité. Teknosure sécurise votre entreprise.",
};

const inclus = [
  { icon: "🛡️", title: "Antivirus & EDR managé", desc: "Protection avancée des postes et serveurs avec détection comportementale en temps réel." },
  { icon: "🔥", title: "Pare-feu nouvelle génération", desc: "Filtrage du trafic entrant/sortant, blocage des menaces réseau et inspection SSL." },
  { icon: "🔐", title: "Authentification multi-facteurs", desc: "MFA sur tous vos accès critiques : messagerie, VPN, applications métier." },
  { icon: "📋", title: "Audit de sécurité annuel", desc: "Évaluation complète de votre posture de sécurité avec rapport détaillé et plan d'action." },
  { icon: "🚨", title: "Surveillance 24/7", desc: "Monitoring continu de votre infrastructure avec alertes immédiates en cas d'incident." },
  { icon: "✅", title: "Conformité RGPD", desc: "Accompagnement à la mise en conformité et rédaction des documents obligatoires." },
];

const faqs = [
  {
    q: "Sommes-nous vraiment ciblés en tant que PME ?",
    a: "Oui — 60 % des cyberattaques visent des TPE/PME, souvent moins protégées. Les hackers utilisent des attaques automatisées qui ne font pas de distinction par taille d'entreprise.",
  },
  {
    q: "Combien de temps faut-il pour mettre en place la solution ?",
    a: "En général 1 à 2 semaines selon la taille de votre infrastructure. Notre équipe gère l'intégralité du déploiement sans interruption de vos activités.",
  },
  {
    q: "Avons-nous besoin d'un responsable IT en interne ?",
    a: "Non. Notre offre est conçue pour être entièrement managée par nos équipes. Vous recevez des rapports mensuels clairs sans avoir besoin de compétences techniques.",
  },
  {
    q: "Que se passe-t-il en cas d'incident ?",
    a: "Notre équipe intervient immédiatement selon le SLA défini (4h pour les incidents critiques). Nous gérons la réponse à l'incident de A à Z.",
  },
];

export default function OffreCybersecuritePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Offre TPE/PME · Cybersécurité"
        titleAccent="Protégez votre entreprise"
        title="contre les cybermenaces"
        subtitle="Antivirus managé, pare-feu, MFA, audits RGPD — une protection complète et abordable, gérée intégralement par nos experts."
        primaryLabel="Demander un audit gratuit"
        primaryHref="/contact"
        secondaryLabel="Voir tous nos packs"
        secondaryHref="/tpe-pme"
        imageSrc="/images/cyber3.jpg"
        overlayMode="dark"
      />

      {/* ── Ce qui est inclus ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
              Ce qui est inclus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Une cybersécurité <span className="text-red-500">complète et managée</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 lg:text-lg">
              Chaque élément est déployé, configuré et maintenu par nos ingénieurs. Vous n'avez rien à gérer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inclus.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-red-200 hover:bg-red-50 hover:shadow-md">
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-red-700">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-red-600 to-rose-500 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {[
              { stat: "60%", label: "des cyberattaques ciblent les TPE/PME" },
              { stat: "4h", label: "délai d'intervention garanti en cas d'incident" },
              { stat: "100%", label: "des déploiements gérés par nos équipes" },
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Prêt à sécuriser votre entreprise ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Obtenez un audit de sécurité gratuit et sans engagement. Nos experts analysent votre situation en 48h.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Demander un audit gratuit
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
