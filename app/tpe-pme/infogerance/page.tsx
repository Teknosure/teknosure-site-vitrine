import FullscreenHero from "@/app/components/hero/FullscreenHero";
import Link from "next/link";

export const metadata = {
  title: "Offre Infogérance TPE/PME — Teknosure",
  description:
    "Infogérance et services IT managés pour les TPE et PME. Support technique, gestion des postes, supervision réseau. Teknosure s'occupe de tout votre IT.",
};

const MonitorIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const GlobeIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);
const ArrowPathIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);
const ChartBarIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const UserCircleIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ServerIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-.75m19.5 0A2.25 2.25 0 0021.75 15H2.25A2.25 2.25 0 000 17.25m21.75 0v-.75A2.25 2.25 0 0019.5 14.25H4.5A2.25 2.25 0 002.25 16.5v.75m19.5-9v.75A2.25 2.25 0 0119.5 10.5H4.5A2.25 2.25 0 012.25 8.25V7.5m19.5 0A2.25 2.25 0 0019.5 5.25H4.5A2.25 2.25 0 002.25 7.5m19.5 0v-.75A2.25 2.25 0 0019.5 3H4.5A2.25 2.25 0 002.25 4.5v.75" />
  </svg>
);
const FolderIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);
const WrenchIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);
const DevicePhoneIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);
const BoltIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const LockClosedIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
const TargetIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

const inclus = [
  { icon: <MonitorIcon />, color: "text-orange-600 bg-orange-50", title: "Gestion des postes de travail", desc: "Installation, configuration, mises à jour et maintenance de l'ensemble de vos PC, Mac et équipements." },
  { icon: <PhoneIcon />, color: "text-blue-600 bg-blue-50", title: "Helpdesk & support utilisateurs", desc: "Tickets illimités, assistance à distance et sur site. Réponse garantie en moins de 2h ouvrées." },
  { icon: <GlobeIcon />, color: "text-cyan-600 bg-cyan-50", title: "Gestion réseau & équipements", desc: "Administration de vos switchs, routeurs, points d'accès Wi-Fi et équipements réseau." },
  { icon: <ArrowPathIcon />, color: "text-green-600 bg-green-50", title: "Mises à jour & patches", desc: "Application automatique des correctifs de sécurité et mises à jour logicielles sur tous vos équipements." },
  { icon: <ChartBarIcon />, color: "text-violet-600 bg-violet-50", title: "Reporting mensuel", desc: "Rapport détaillé de l'activité IT : incidents traités, disponibilité des systèmes, recommandations." },
  { icon: <UserCircleIcon />, color: "text-amber-600 bg-amber-50", title: "Interlocuteur IT dédié", desc: "Un ingénieur référent connaît votre infrastructure et est joignable directement à tout moment." },
];

const servicesIT = [
  { icon: <ServerIcon />, color: "text-orange-600 bg-orange-50", title: "Serveurs & NAS", desc: "Vente, installation, config, maintenance — Dell, HPE, Synology, QNAP. RAID, NAS entreprise, virtualisation Hyper-V/VMware." },
  { icon: <FolderIcon />, color: "text-blue-600 bg-blue-50", title: "Active Directory & M365", desc: "Migration, structure OU/GPO, gestion identités, Exchange Online, SharePoint, Teams, OneDrive." },
  { icon: <WrenchIcon />, color: "text-green-600 bg-green-50", title: "Infogérance IT (MCO)", desc: "Supervision proactive, patch management, SLA garanti, ticketing ITSM, support N1/N2/N3, rapports mensuels." },
  { icon: <DevicePhoneIcon />, color: "text-violet-600 bg-violet-50", title: "Postes & Mobilité", desc: "MDM Intune, Jamf, Windows Autopilot, déploiement OS, gestion parc, BYOD encadré." },
];

const slaItems = [
  { icon: <BoltIcon />, label: "Réponse N1", value: "< 4h ouvrées" },
  { icon: <WrenchIcon />, label: "Intervention N2", value: "< 8h" },
  { icon: <ChartBarIcon />, label: "Rapport mensuel", value: "Systématique" },
  { icon: <LockClosedIcon />, label: "Patch sécurité critique", value: "< 24h" },
  { icon: <TargetIcon />, label: "Disponibilité SI", value: "> 99,5 %" },
  { icon: <PhoneIcon />, label: "Astreinte 24/7", value: "En option" },
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
                <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>{item.icon}</span>
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

      {/* ── IT & Infrastructure ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
              IT &amp; Infrastructure
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Socle Technologique <span className="text-orange-500">Sécurisé</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Infogérance, serveurs, Active Directory, Microsoft 365 — tout votre SI en de bonnes mains.
            </p>
          </div>

          {/* 4 services */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesIT.map((item, i) => (
              <div key={i} className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-orange-200 hover:shadow-md">
                <span className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}>{item.icon}</span>
                <h3 className="mb-2 text-base font-bold text-gray-800 group-hover:text-orange-700">{item.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SLA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-white">Nos Engagements SLA</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {slaItems.map((sla, i) => (
                <div key={i} className="flex flex-col items-center rounded-xl bg-white/20 p-4 text-center backdrop-blur-sm">
                  <span className="mb-2 inline-flex h-9 w-9 items-center justify-center text-white">{sla.icon}</span>
                  <p className="text-xs font-semibold text-white/80">{sla.label}</p>
                  <p className="mt-1 text-sm font-extrabold text-white">{sla.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partenaires */}
          <div className="mt-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Partenaires IT</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Dell", "HPE", "Synology", "QNAP", "Microsoft 365", "Intune", "Jamf", "VMware", "Hyper-V"].map((p) => (
                <span key={p} className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
                  {p}
                </span>
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
