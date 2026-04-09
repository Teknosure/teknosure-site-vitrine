import FullscreenHero from "@/app/components/hero/FullscreenHero";
import InfogeranceServicesSection from "@/app/components/sections/InfogeranceServicesSection";
import InfogerancePartnersSection from "@/app/components/sections/InfogerancePartnersSection";
import InfogeranceContactSection from "@/app/components/sections/InfogeranceContactSection";

export const metadata = {
  title: "Infogérance & Supervision IT",
  description:
    "Infogérance sur mesure pour PME et ETI : supervision 24/7, maintenance préventive, helpdesk, gestion des postes et serveurs. Teknosure prend en charge votre SI.",
  keywords: ["infogérance", "supervision IT", "helpdesk", "maintenance informatique", "PME", "ETI", "outsourcing IT"],
  openGraph: {
    title: "Infogérance & Supervision IT — Teknosure",
    description: "Infogérance complète pour PME et ETI. Supervision 24/7, maintenance, helpdesk. Devis gratuit.",
    url: "https://www.teknosure.com/services/infogerance",
  },
};

const defis = [
  {
    stat: "60%",
    description:
      "des PME subissent au moins un incident IT majeur par an, souvent faute d'une supervision proactive.",
  },
  {
    stat: "4h",
    description:
      "c'est le coût moyen d'une heure d'arrêt pour une PME — une gestion réactive des incidents peut multiplier ce chiffre.",
  },
  {
    stat: "3×",
    description:
      "les entreprises avec un support IT managé résolvent leurs incidents 3 fois plus vite qu'avec une équipe interne seule.",
  },
];

export default function InfogerancePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Externalisation IT — Disponibilité maximale"
        titleAccent="Infogérance"
        title="& services managés"
        subtitle="Support IT externalisé, SOC, gestion des incidents et maintenance continue : nous prenons en charge votre système d'information pour que vous puissiez vous concentrer sur votre cœur de métier."
        primaryLabel="Demander un devis"
        primaryHref="/contact"
        secondaryLabel="Nos services"
        secondaryHref="#solutions"
        imageSrc="/images/dev-team.jpg"
        overlayMode="dark"
      />

      {/* ── Les défis ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Pourquoi externaliser<br />votre IT ?
              </h2>
            </div>
            <div className="hidden lg:block lg:w-px lg:shrink-0 lg:bg-[var(--primary-light)]0" />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0 lg:w-3/5 lg:pl-16">
              {defis.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-3xl font-extrabold text-[var(--primary)] lg:text-4xl">{item.stat}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <InfogeranceServicesSection />

      {/* ── Partenaires ──────────────────────────────────────────────────── */}
      <InfogerancePartnersSection />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <InfogeranceContactSection />

    </div>
  );
}
