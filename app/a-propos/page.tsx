import AproposIdentiteSection from "@/app/components/sections/AproposIdentiteSection";
import AproposExpertiseSection from "@/app/components/sections/AproposExpertiseSection";
import AproposCeoSection from "@/app/components/sections/AproposCeoSection";
import AproposCtaSection from "@/app/components/sections/AproposCtaSection";

export const metadata = {
  title: "À Propos — Notre Mission & Notre Équipe",
  description:
    "Teknosure est une ESN « Next Gen » fondée par des experts avec plus de 23 ans d'expérience. Découvrez notre mission, nos valeurs et notre équipe basée à Taverny.",
  keywords: ["à propos Teknosure", "ESN française", "équipe cybersécurité", "Hamad Witti Moussa", "cabinet IT France"],
  openGraph: {
    title: "À Propos de Teknosure — Mission & Équipe",
    description: "ESN Next Gen fondée par des experts avec 23 ans d'expérience. Mission : démocratiser la cybersécurité pour les PME.",
    url: "https://www.teknosure.com/a-propos",
  },
};

const approche = [
  {
    step: "01",
    title: "Une écoute active",
    description:
      "Avant de proposer quoi que ce soit, nous prenons le temps de comprendre vos enjeux, vos contraintes et vos ambitions.",
  },
  {
    step: "02",
    title: "Une proximité réelle",
    description:
      "Un interlocuteur dédié, des échanges réguliers et une transparence totale à chaque étape — pas de boîte noire.",
  },
  {
    step: "03",
    title: "Des solutions robustes",
    description:
      "Pas de solutions génériques. Chaque livrable est pensé pour durer, s'adapter et évoluer avec votre organisation.",
  },
  {
    step: "04",
    title: "Un alignement sur vos enjeux",
    description:
      "Que vous soyez TPE, PME, ETI ou grand compte, notre approche s'adapte à votre taille, votre secteur et vos priorités.",
  },
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero + 3 piliers ──────────────────────────────────────────────── */}
      <AproposIdentiteSection />

      {/* ── Notre approche ───────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">

            {/* Gauche — titre fixe */}
            <div className="lg:w-2/5 lg:sticky lg:top-28">
              <span className="mb-3 inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                Notre approche
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Une méthode centrée sur{" "}
                <span className="bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
                  vos résultats
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-gray-500">
                Notre force : combiner expertise technique et intelligence relationnelle
                pour proposer des solutions que vous pouvez réellement piloter et faire évoluer.
              </p>
            </div>

            {/* Droite — étapes */}
            <div className="flex flex-col gap-6 lg:w-3/5">
              {approche.map((item) => (
                <div
                  key={item.step}
                  className="group flex gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--primary-border)] hover:shadow-md"
                >
                  <span className="shrink-0 text-4xl font-black text-gray-100 transition-colors group-hover:text-[var(--primary-border)]">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Domaines d'expertise ─────────────────────────────────────────── */}
      <AproposExpertiseSection />

      {/* ── Vision CEO ───────────────────────────────────────────────────── */}
      <AproposCeoSection />

      {/* ── CTA "Et vous ?" ──────────────────────────────────────────────── */}
      <AproposCtaSection />

    </div>
  );
}
