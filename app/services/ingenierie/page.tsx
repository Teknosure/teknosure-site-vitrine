import FullscreenHero from "@/app/components/hero/FullscreenHero";
import IngenieireServicesSection from "@/app/components/sections/IngenieireServicesSection";
import IngenieiereTechSection from "@/app/components/sections/IngenieiereTechSection";
import IngenieireCasSection from "@/app/components/sections/IngenieireCasSection";
import IngenieireApproacheSection from "@/app/components/sections/IngenieireApproacheSection";
import IngenieireTeamSection from "@/app/components/sections/IngenieireTeamSection";
import IngenieireContactSection from "@/app/components/sections/IngenieireContactSection";

// ── Statistiques "Les défis du développement logiciel" ───────────────────────
const defis = [
  {
    stat: "73%",
    description:
      "des projets logiciels dépassent leur budget ou leurs délais faute d'architecture adaptée.",
  },
  {
    stat: "6×",
    description:
      "le coût de correction d'un bug en production comparé à sa détection en phase de développement.",
  },
  {
    stat: "40%",
    description:
      "des DSI citent la dette technique comme principal frein à l'innovation et à la compétitivité.",
  },
];

export default function IngenieriePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero plein écran ─────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Développement sur mesure — Applications performantes"
        titleAccent="Ingénierie logicielle"
        title="sur architectures modernes"
        subtitle="Des applications web et mobiles performantes, évolutives et scalables pour concrétiser vos idées. De la conception à la mise en production, nous bâtissons des solutions centrées sur l'expérience utilisateur."
        primaryLabel="Démarrer un projet"
        primaryHref="/contact"
        secondaryLabel="Nos solutions"
        secondaryHref="#solutions"
        imageSrc="/images/ingenerie.jpg"
        overlayMode="dark"
      />

      {/* ── Section : Les défis du développement ────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">

            {/* Titre gauche */}
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Les défis<br />du logiciel<br />d&apos;aujourd&apos;hui
              </h2>
            </div>

            {/* Trait séparateur vertical */}
            <div className="hidden lg:block lg:w-px lg:shrink-0 lg:bg-[#E8F5FC]0" />

            {/* 3 cartes stats droite */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0 lg:w-3/5 lg:pl-16">
              {defis.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="mb-3 text-3xl font-extrabold text-[#1B9AD2] lg:text-4xl">
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

      {/* ── Section Services de développement ───────────────────────────── */}
      <IngenieireServicesSection />

      {/* ── Section Technologies ─────────────────────────────────────────── */}
      <IngenieiereTechSection />

      {/* ── Section Projets clients ──────────────────────────────────────── */}
      <IngenieireCasSection />

      {/* ── Section Notre approche ───────────────────────────────────────── */}
      <IngenieireApproacheSection />

      {/* ── Section Équipe ────────────────────────────────────────────────── */}
      <IngenieireTeamSection />

      {/* ── Section Contact ───────────────────────────────────────────────── */}
      <IngenieireContactSection />

    </div>
  );
}
