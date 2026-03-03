import FullscreenHero from "@/app/components/hero/FullscreenHero";
import IAServicesSection from "@/app/components/sections/IAServicesSection";
import IATechSection from "@/app/components/sections/IATechSection";
import IAUseCasesSection from "@/app/components/sections/IAUseCasesSection";
import IAContactSection from "@/app/components/sections/IAContactSection";

const defis = [
  {
    stat: "85%",
    description:
      "des entreprises reconnaissent que l'IA pourrait améliorer leur productivité, mais seulement 20% ont franchi le pas avec des projets concrets en production.",
  },
  {
    stat: "40%",
    description:
      "du temps de travail des employés est consacré à des tâches répétitives et à faible valeur ajoutée, directement automatisables par l'IA.",
  },
  {
    stat: "3×",
    description:
      "les entreprises qui ont industrialisé l'IA dans leurs opérations affichent une croissance 3 fois supérieure à leurs concurrents du même secteur.",
  },
];

export default function IAPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Intelligence artificielle — Automatisation & Performance"
        titleAccent="IA & automatisation"
        title="au service de vos opérations"
        subtitle="Agents IA, automatisation des processus, analyse prédictive et IA générative — des solutions concrètes et mesurables pour accélérer vos opérations et libérer vos équipes des tâches à faible valeur ajoutée."
        primaryLabel="Lancer un projet IA"
        primaryHref="/contact"
        secondaryLabel="Nos cas d'usage"
        secondaryHref="#solutions"
        imageSrc="/images/ia.jpg"
        overlayMode="dark"
      />

      {/* ── Les défis ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                L&apos;IA, un enjeu<br />concurrentiel<br />aujourd&apos;hui
              </h2>
            </div>
            <div className="hidden lg:block lg:w-px lg:shrink-0 lg:bg-amber-400" />
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0 lg:w-3/5 lg:pl-16">
              {defis.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-3xl font-extrabold text-amber-500 lg:text-4xl">{item.stat}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <IAServicesSection />

      {/* ── Technologies ─────────────────────────────────────────────────── */}
      <IATechSection />

      {/* ── Cas d'usage ──────────────────────────────────────────────────── */}
      <IAUseCasesSection />

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <IAContactSection />

    </div>
  );
}
