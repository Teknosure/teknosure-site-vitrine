import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Cybersécurité TPE/PME — Teknosure",
  description:
    "Protection & conformité RGPD pour les TPE et PME. Antivirus managé, pare-feu, détection des menaces, audits de sécurité. Teknosure sécurise votre entreprise.",
};

const ShieldIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const FireIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
);
const LockIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
const ClipboardIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);
const BellAlertIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
  </svg>
);
const CheckBadgeIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.723 3.065 3.745 3.745 0 01-3.065.723 3.746 3.746 0 01-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.065-.723 3.745 3.745 0 01-.723-3.065A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.723-3.065 3.745 3.745 0 013.065-.723A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.065.723 3.745 3.745 0 01.723 3.065A3.745 3.745 0 0121 12z" />
  </svg>
);

const inclus = [
  { icon: <ShieldIcon />, color: "text-red-600 bg-red-50", title: "Antivirus & EDR managé", desc: "Protection avancée des postes et serveurs avec détection comportementale en temps réel." },
  { icon: <FireIcon />, color: "text-orange-600 bg-orange-50", title: "Pare-feu nouvelle génération", desc: "Filtrage du trafic entrant/sortant, blocage des menaces réseau et inspection SSL." },
  { icon: <LockIcon />, color: "text-blue-600 bg-blue-50", title: "Authentification multi-facteurs", desc: "MFA sur tous vos accès critiques : messagerie, VPN, applications métier." },
  { icon: <ClipboardIcon />, color: "text-violet-600 bg-violet-50", title: "Audit de sécurité annuel", desc: "Évaluation complète de votre posture de sécurité avec rapport détaillé et plan d'action." },
  { icon: <BellAlertIcon />, color: "text-rose-600 bg-rose-50", title: "Surveillance 24/7", desc: "Monitoring continu de votre infrastructure avec alertes immédiates en cas d'incident." },
  { icon: <CheckBadgeIcon />, color: "text-green-600 bg-green-50", title: "Conformité RGPD", desc: "Accompagnement à la mise en conformité et rédaction des documents obligatoires." },
];

const offresPackagees = [
  {
    num: "01",
    title: "Diagnostic Cyber Express",
    price: "À partir de 1 490 €",
    delay: "48h",
    desc: "Score de sécurité rapide. Scan externe, analyse M365/Google, DMARC/SPF/DKIM, top 10 failles.",
  },
  {
    num: "02",
    title: "Sécurité Cloud M365/Google",
    price: "À partir de 1 900 €",
    delay: "72h",
    desc: "Audit 72 points, durcissement, MFA obligatoire, DLP, Safe Links, anti-phishing avancé.",
  },
  {
    num: "03",
    title: "Pentest Light",
    price: "À partir de 2 500 €",
    delay: "1–3j",
    desc: "Test d'intrusion externe et web. Rapport CVSS, PoC, scoring OWASP, plan correctif.",
  },
  {
    num: "04",
    title: "SOC / XDR 24/7",
    price: "À partir de 8 €/poste/mois",
    delay: "Continu",
    desc: "Surveillance 24/7, XDR, threat intelligence, alertes en temps réel, dashboard mensuel.",
  },
  {
    num: "05",
    title: "Conformité NIS2/DORA/RGPD",
    price: "À partir de 1 500 €",
    delay: "3–6 sem.",
    desc: "Gap analysis, documentation, mise en œuvre des mesures techniques et organisationnelles.",
  },
  {
    num: "06",
    title: "Sensibilisation Phishing",
    price: "À partir de 490 €",
    delay: "1 mois",
    desc: "Campagnes de phishing simulé, modules e-learning, tableaux de bord de vigilance.",
  },
  {
    num: "07",
    title: "Infogérance Cybersécurité",
    price: "À partir de 25 €/user/mois",
    delay: "Mensuel",
    desc: "MCO sécurité complet : patch management, supervision, reporting, support N1/N2/N3.",
  },
];

const packs = [
  {
    stars: "⭐",
    name: "Pack Starter PME",
    price: "2 990 € HT",
    saving: "Économie jusqu'à 1 000 €",
    items: ["01 — Diagnostic Cyber Express (48h)", "02 — Sécurité Cloud M365/Google", "06 — Sensibilisation Phishing"],
    color: "from-red-500 to-rose-400",
  },
  {
    stars: "⭐⭐",
    name: "Pack Sérénité",
    price: "3 990 € HT",
    saving: "Économie jusqu'à 1 200 €",
    items: ["01 — Diagnostic Cyber Express", "02 — Sécurité Cloud M365", "04 — SOC/XDR (3 mois offerts)"],
    color: "from-red-600 to-red-500",
  },
  {
    stars: "⭐⭐⭐",
    name: "Pack Cyber 360°",
    price: "Sur devis",
    saving: "Remise volume accordée",
    items: ["01 — Diagnostic + 05 — Conformité", "04 — SOC XDR 24/7", "07 — Infogérance (12 mois)"],
    color: "from-gray-900 to-gray-800",
  },
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
        primaryLabel="Demander un devis"
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
                <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>{item.icon}</span>
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

      {/* ── Offres Packagées ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
              Offres Packagées TPE / PME
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              7 offres calibrées pour votre <span className="text-red-500">réalité opérationnelle</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Budgets maîtrisés, délais courts — chaque offre est pensée pour s'adapter à votre taille et vos contraintes.
            </p>
          </div>

          {/* Grille 7 offres */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {offresPackagees.map((offre) => (
              <div key={offre.num} className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-xs font-extrabold text-red-600">
                  {offre.num}
                </span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-red-700">{offre.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">{offre.desc}</p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-bold text-red-600">{offre.price}</span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">⏱ {offre.delay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Packs combinés */}
          <div className="mt-16">
            <h3 className="mb-2 text-center text-2xl font-bold text-gray-900">Packs Combinés — Économisez jusqu'à 30 %</h3>
            <p className="mb-10 text-center text-sm text-gray-500">Les meilleures offres groupées, pensées pour chaque profil d'entreprise.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {packs.map((pack) => (
                <div key={pack.name} className={`flex flex-col rounded-2xl bg-gradient-to-br ${pack.color} p-7 text-white shadow-lg`}>
                  <p className="mb-1 text-lg">{pack.stars}</p>
                  <h4 className="mb-1 text-xl font-extrabold">{pack.name}</h4>
                  <p className="mb-1 text-2xl font-bold">{pack.price}</p>
                  <p className="mb-5 text-xs font-semibold text-white/70">{pack.saving}</p>
                  <ul className="flex-1 space-y-2 border-t border-white/20 pt-5">
                    {pack.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                        <span className="mt-0.5 text-white">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 rounded-full border-2 border-white/40 py-2.5 text-center text-sm font-bold text-white transition-all hover:border-white hover:bg-white/20"
                  >
                    Choisir ce pack
                  </Link>
                </div>
              ))}
            </div>
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
            Nos experts analysent votre situation et vous proposent un devis personnalisé sous 48h.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
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
