import FullscreenHero from "@/app/components/hero/FullscreenHero";
import CloudServicesSection from "@/app/components/sections/CloudServicesSection";
import CloudPartnersSection from "@/app/components/sections/CloudPartnersSection";
import CloudCertificationsSection from "@/app/components/sections/CloudCertificationsSection";
import CloudContactSection from "@/app/components/sections/CloudContactSection";

const defis = [
  {
    stat: "68%",
    description:
      "des entreprises ayant migré vers le cloud peinent à maîtriser leurs coûts faute d'une gouvernance adaptée.",
  },
  {
    stat: "4h",
    description:
      "c'est le coût moyen d'une heure d'indisponibilité pour une PME — une infrastructure mal gérée expose à des pertes critiques.",
  },
  {
    stat: "40%",
    description:
      "des ressources cloud sont gaspillées en moyenne par les entreprises sans stratégie d'optimisation FinOps.",
  },
];

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Migration & Infogérance — Haute disponibilité"
        titleAccent="Infrastructures"
        title="& cloud managé"
        subtitle="AWS, Azure ou Google Cloud : nous pilotons votre migration, gérons votre infrastructure et garantissons une disponibilité maximale grâce à un monitoring 24/7 et des SLA engagés."
        primaryLabel="Audit cloud gratuit"
        primaryHref="/contact"
        secondaryLabel="Nos services"
        secondaryHref="#solutions"
        imageSrc="/images/cloud.jpg"
        overlayMode="dark"
      />

      {/* ── Les défis du cloud ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Les défis<br />du cloud<br />d&apos;aujourd&apos;hui
              </h2>
            </div>
            <div className="hidden lg:block lg:w-px lg:shrink-0 lg:bg-blue-500" />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0 lg:w-3/5 lg:pl-16">
              {defis.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-3xl font-extrabold text-blue-600 lg:text-4xl">{item.stat}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services cloud ───────────────────────────────────────────────── */}
      <CloudServicesSection />

      {/* ── Partenariats stratégiques ─────────────────────────────────────── */}
      <CloudPartnersSection />

      {/* ── Certifications ───────────────────────────────────────────────── */}
      <CloudCertificationsSection />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <CloudContactSection />

    </div>
  );
}
