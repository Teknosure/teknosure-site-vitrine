import FullscreenHero from "@/app/components/hero/FullscreenHero";
import TPEPMEOffresSection from "@/app/components/sections/TPEPMEOffresSection";
import TPEPMEAtoutsSection from "@/app/components/sections/TPEPMEAtoutsSection";
import TPEPMEContactSection from "@/app/components/sections/TPEPMEContactSection";

const defis = [
  {
    stat: "60%",
    description:
      "des cyberattaques ciblent des TPE/PME — souvent sous-équipées face aux menaces numériques modernes.",
  },
  {
    stat: "3j",
    description:
      "c'est le délai moyen d'interruption d'activité après un incident IT majeur pour une PME sans plan de continuité.",
  },
  {
    stat: "2×",
    description:
      "les PME qui externalisent leur IT réduisent en moyenne de moitié leurs coûts informatiques tout en améliorant leur performance.",
  },
];

export const metadata = {
  title: "Offres TPE / PME — Teknosure",
  description:
    "Teknosure accompagne les TPE et PME avec des offres IT packagées : infogérance, cybersécurité, cloud, développement sur mesure. Partenaire informatique fiable pour les petites et moyennes entreprises.",
};

export default function TPEPMEPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <FullscreenHero
        tagline="Infogérance · Cybersécurité · Cloud · Digital"
        titleAccent="Solutions IT"
        title="pour TPE & PME"
        subtitle="De la mise en place de votre infrastructure à la sécurisation de vos données, Teknosure est le partenaire informatique des petites et moyennes entreprises qui veulent grandir sans contraintes techniques."
        primaryLabel="Découvrir nos offres"
        primaryHref="#offres"
        secondaryLabel="Audit gratuit"
        secondaryHref="#contact"
        imageSrc="/images/PME-TPE.jpg"
        overlayMode="dark"
      />

      {/* ── Les défis des TPE/PME ────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            <div className="flex items-center lg:w-2/5 lg:pr-16">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Les défis IT<br />des TPE & PME<br />d&apos;aujourd&apos;hui
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-0 lg:w-3/5">
              {defis.map((defi, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <span className="mb-3 text-4xl font-extrabold text-[var(--primary)]">
                    {defi.stat}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600">{defi.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Offres ──────────────────────────────────────────────────────── */}
      <TPEPMEOffresSection />

      {/* ── Atouts / Pourquoi Teknosure ─────────────────────────────────── */}
      <TPEPMEAtoutsSection />

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <TPEPMEContactSection />
    </div>
  );
}
