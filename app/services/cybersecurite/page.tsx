import FullscreenHero from "@/app/components/hero/FullscreenHero";
import CyberOffresSection from "@/app/components/sections/CyberOffresSection";
import CyberExpertsSection from "@/app/components/sections/CyberExpertsSection";
import CyberTeamSection from "@/app/components/sections/CyberTeamSection";
import CyberContactSection from "@/app/components/sections/CyberContactSection";

// ── Statistiques "Les défis d'aujourd'hui" ───────────────────────────────────
const defis = [
  {
    stat: "$13.8T",
    description:
      "Coût prévu de la cybercriminalité pour l'économie mondiale d'ici 2028.",
  },
  {
    stat: "76%",
    description:
      "des coûts liés aux attaques contre la Supply Chain des logiciels augmenteront entre 2023 et 2026.",
  },
  {
    stat: "80%",
    description:
      "Augmentation des paiements liés aux ransomwares au cours de l'année écoulée.",
  },
];


export default function CybersecuritePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero plein écran ─────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Expertise certifiée — Protection avancée"
        titleAccent="Cybersécurité"
        title="et conformité numérique"
        subtitle="Nous sécurisons votre périmètre numérique grâce à une détection avancée des menaces, des tests d'intrusion et des audits de conformité (ISO 27001, RGPD). Notre équipe garantit l'intégrité de vos données."
        primaryLabel="Audit gratuit"
        primaryHref="/contact"
        secondaryLabel="Nos solutions"
        secondaryHref="#solutions"
        imageSrc="/images/cyber2.jpg"
        overlayMode="dark"
      />

      {/* ── Section : Les défis d'aujourd'hui ───────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">

            {/* Titre gauche */}
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Les défis<br />d&apos;aujourd&apos;hui
              </h2>
            </div>

            {/* Trait séparateur vertical */}
            <div className="hidden lg:block lg:w-px lg:shrink-0 lg:bg-blue-500" />

            {/* 3 cartes stats droite */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0 lg:w-3/5 lg:pl-16">
              {defis.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="mb-3 text-3xl font-extrabold text-blue-600 lg:text-4xl">
                    {item.stat}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Section Nos offres ───────────────────────────────────────────── */}
      <CyberOffresSection />

      {/* ── Section Nos paroles d'experts ───────────────────────────────── */}
      <CyberExpertsSection />

      {/* ── Section La Cellule Cyberdéfense ─────────────────────────────── */}
      <CyberTeamSection />

      {/* ── Section Contact ───────────────────────────────────────────────── */}
      <CyberContactSection />

    </div>
  );
}
