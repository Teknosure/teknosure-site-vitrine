import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Cybersécurité ETI & Grands comptes — Teknosure",
  description:
    "SOC 24/7, pentest avancé, ISO 27001, NIS2, DORA. Teknosure sécurise les ETI et grands groupes avec des solutions sur mesure et des équipes certifiées.",
  keywords: ["cybersécurité ETI", "SOC 24/7", "ISO 27001", "NIS2", "DORA", "pentest", "SIEM", "grands comptes"],
  openGraph: {
    title: "Cybersécurité ETI & Grands comptes — Teknosure",
    description: "SOC 24/7, ISO 27001, NIS2, pentest avancé. Solutions cybersécurité sur mesure pour ETI et grands groupes.",
    url: "https://www.teknosure.com/eti/cybersecurite",
  },
};

const defis = [
  { stat: "$13.8T", description: "Coût prévu de la cybercriminalité mondiale d'ici 2028 — les ETI sont des cibles prioritaires." },
  { stat: "76%", description: "des coûts liés aux attaques Supply Chain des logiciels augmenteront entre 2023 et 2026." },
  { stat: "287j", description: "délai moyen pour détecter et contenir une violation de données sans SOC managé." },
];

const solutions = [
  {
    num: "01",
    color: "text-red-600 bg-red-50",
    title: "SOC / XDR 24/7",
    desc: "Centre opérationnel de sécurité managé avec détection et réponse étendues. Surveillance continue, threat intelligence, alertes en temps réel.",
    tags: ["SIEM", "XDR", "Threat Intel", "24/7"],
  },
  {
    num: "02",
    color: "text-orange-600 bg-orange-50",
    title: "Pentest & Red Team",
    desc: "Tests d'intrusion avancés (interne, externe, applicatif, social engineering). Rapports CVSS, PoC et plan correctif priorisé.",
    tags: ["OWASP", "CVSS", "Red Team", "APT Simulation"],
  },
  {
    num: "03",
    color: "text-blue-600 bg-blue-50",
    title: "Conformité ISO 27001 / NIS2 / DORA",
    desc: "Accompagnement complet à la certification ISO 27001, mise en conformité NIS2 et DORA. Gap analysis, SMSI, documentation et audits.",
    tags: ["ISO 27001", "NIS2", "DORA", "SMSI"],
  },
  {
    num: "04",
    color: "text-violet-600 bg-violet-50",
    title: "Architecture Zero Trust",
    desc: "Conception et déploiement d'une architecture Zero Trust. Segmentation réseau, IAM, MFA renforcé, contrôle d'accès granulaire.",
    tags: ["Zero Trust", "IAM", "PAM", "MFA"],
  },
  {
    num: "05",
    color: "text-emerald-600 bg-emerald-50",
    title: "SIEM & Gestion des logs",
    desc: "Déploiement et gestion de votre SIEM. Corrélation d'événements, détection d'anomalies, reporting exécutif et tableaux de bord.",
    tags: ["SIEM", "SOAR", "Log Management", "Reporting"],
  },
  {
    num: "06",
    color: "text-rose-600 bg-rose-50",
    title: "Détection deepfakes & IA malveillante",
    desc: "Solutions avancées de détection des attaques basées sur l'IA : deepfakes, spear phishing IA, fraude vocale. Couche de protection nouvelle génération.",
    tags: ["AI Security", "Deepfake Detection", "BEC", "Voice Fraud"],
  },
  {
    num: "07",
    color: "text-sky-600 bg-sky-50",
    title: "Réponse à incident (DFIR)",
    desc: "Équipe DFIR disponible 24/7 pour la gestion de crise cyber. Containment, forensics, éradication, reprise d'activité et rapport post-incident.",
    tags: ["DFIR", "Forensics", "Crisis Management", "PCA/PRA"],
  },
];

const certifications = [
  { label: "ISO 27001", sub: "Management de la sécurité" },
  { label: "NIS2", sub: "Directive européenne" },
  { label: "DORA", sub: "Résilience financière" },
  { label: "RGPD", sub: "Protection des données" },
  { label: "SOC 2", sub: "Contrôles de sécurité" },
  { label: "PASSI", sub: "Prestataire audit SSI" },
];

const faqs = [
  {
    q: "En quoi votre offre ETI diffère-t-elle de celle proposée aux PME ?",
    a: "Notre offre ETI est entièrement sur mesure : périmètre étendu, SLA renforcés (intervention en moins de 2h sur incidents critiques), équipe dédiée, reporting COMEX et accompagnement à la certification ISO 27001 ou NIS2. Les offres PME sont des packs fixes adaptés à des budgets et infrastructures plus réduits.",
  },
  {
    q: "Pouvez-vous intervenir sur une infrastructure multi-sites ou internationale ?",
    a: "Oui. Nous gérons des infrastructures distribuées sur plusieurs sites en France et à l'international. Notre SOC centralise la surveillance de l'ensemble de vos environnements (on-premise, cloud, hybride).",
  },
  {
    q: "Quels sont vos délais d'intervention en cas d'incident critique ?",
    a: "Pour les contrats ETI, notre SLA garantit une prise en charge en moins de 2h pour les incidents critiques (P1), avec un plan d'action sous 4h. Notre équipe DFIR est disponible 24h/24, 7j/7.",
  },
  {
    q: "Comment se déroule l'intégration avec nos équipes IT internes ?",
    a: "Nous travaillons en co-gestion avec vos équipes IT. Un RSSI as-a-Service peut être mis à disposition pour piloter la stratégie sécurité en collaboration avec votre DSI. Nous adaptons notre organisation à votre structure existante.",
  },
];

export default function ETICybersecuritePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="ETI & Grands comptes · Cybersécurité avancée"
        titleAccent="Sécurité de niveau"
        title="grands comptes pour votre ETI"
        subtitle="SOC 24/7, pentest Red Team, conformité ISO 27001 / NIS2 / DORA — des solutions sur mesure portées par des experts certifiés pour protéger votre patrimoine numérique."
        primaryLabel="Demander un devis"
        primaryHref="/contact"
        secondaryLabel="Nos solutions"
        secondaryHref="#solutions"
        imageSrc="/images/cyber2.jpg"
        overlayMode="dark"
      />

      {/* ── Chiffres clés ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Les ETI face aux<br />menaces cyber<br />d'aujourd'hui
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-0 lg:w-3/5">
              {defis.map((d, i) => (
                <div key={i} className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50 p-6">
                  <span className="mb-3 text-4xl font-extrabold text-[var(--primary)]">{d.stat}</span>
                  <p className="text-sm leading-relaxed text-gray-600">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions ─────────────────────────────────────────────────────── */}
      <section id="solutions" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
              Nos solutions ETI
            </span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Une couverture sécurité complète
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Des solutions sur mesure, dimensionnées pour les ETI et grands groupes, avec des équipes certifiées et des SLA garantis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {solutions.map((s) => (
              <div key={s.num} className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-red-200 hover:shadow-md">
                <span className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold ${s.color}`}>
                  {s.num}
                </span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-red-700">{s.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-gray-100 pt-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">Conformité & Certifications</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {certifications.map((c) => (
              <div key={c.label} className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-5 text-center">
                <span className="text-lg font-extrabold text-[var(--primary)]">{c.label}</span>
                <span className="mt-1 text-xs text-gray-500">{c.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-gray-800">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Sécurisez votre ETI avec des experts certifiés</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
            Nos experts analysent votre infrastructure et vous proposent un plan de sécurisation personnalisé sous 48h.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90">
              Demander un devis
            </Link>
            <Link href="/tpe-pme/cybersecurite" className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">
              Voir l'offre TPE/PME
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
