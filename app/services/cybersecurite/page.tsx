import FullscreenHero from "@/app/components/hero/FullscreenHero";
import CyberOffresSection from "@/app/components/sections/CyberOffresSection";
import CyberExpertsSection from "@/app/components/sections/CyberExpertsSection";
import CyberContactSection from "@/app/components/sections/CyberContactSection";
import Image from "next/image";

export const metadata = {
  title: "Cybersécurité & Conformité Numérique",
  description:
    "Audit, SOC 24/7, détection deepfakes, conformité ISO 27001, NIS2 et RGPD. Teknosure protège votre périmètre numérique avec des solutions adaptées aux PME et ETI.",
  keywords: ["cybersécurité", "SOC 24/7", "audit sécurité", "ISO 27001", "NIS2", "deepfakes", "pentest", "RGPD"],
  openGraph: {
    title: "Cybersécurité & Conformité Numérique — Teknosure",
    description: "Protection avancée de votre SI. SOC 24/7, détection deepfakes, conformité NIS2.",
    url: "https://www.teknosure.com/services/cybersecurite",
  },
};

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
        subtitle="Conseil et accompagnement en conformité numérique, audits de sécurité, détection avancée des menaces, tests d'intrusion et services managés pour une protection globale des systèmes d'information."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel="Nos solutions"
        secondaryHref="#solutions"
        imageSrc="/images/cyber-tpe.png"
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
            <div className="hidden lg:block lg:w-px lg:shrink-0 lg:bg-[var(--primary-light)]0" />

            {/* 3 cartes stats droite */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0 lg:w-3/5 lg:pl-16">
              {defis.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <p className="mb-3 text-3xl font-extrabold text-[var(--primary)] lg:text-4xl">
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

      {/* ── Membre FFCyber ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0f1e] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Logo */}
            <div className="shrink-0">
              <div className="flex h-44 w-44 items-center justify-center rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 lg:h-52 lg:w-52">
                <Image
                  src="/images/FFcyber.png"
                  alt="FFCyber — Fédération Française de la Cybersécurité"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="flex-1 text-center lg:text-left">
              <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
                Membre officiel
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Fédération Française<br />de la Cybersécurité
              </h2>
              <p className="mt-2 text-sm font-medium text-blue-300">ffcyber.fr</p>

              {/* Citation CEO */}
              <blockquote className="mt-6 border-l-2 border-blue-500 pl-5">
                <p className="text-base leading-relaxed text-gray-300 italic">
                  &ldquo;Un niveau d&apos;exigence renforcé, une meilleure visibilité et légitimité auprès de nos clients et partenaires,
                  et l&apos;opportunité de participer activement à la dynamique collective de la cybersécurité en France.
                  C&apos;est une reconnaissance de notre positionnement et un levier supplémentaire pour poursuivre notre développement.&rdquo;
                </p>
                <footer className="mt-3 flex items-center gap-2">
                  <span className="h-px w-6 bg-blue-500" />
                  <span className="text-sm font-semibold text-blue-400">Direction Teknosure</span>
                </footer>
              </blockquote>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                {["Exigence renforcée", "Légitimité nationale", "Dynamique collective", "Reconnaissance sectorielle"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section Contact ───────────────────────────────────────────────── */}
      <CyberContactSection />

    </div>
  );
}
