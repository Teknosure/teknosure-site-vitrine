import Image from "next/image";

const etapes = [
  {
    num: 1,
    title: "Discovery & Design",
    description:
      "Cadrage de vos besoins, définition des user stories, conception de l'architecture et des interfaces.",
  },
  {
    num: 2,
    title: "Développement Itératif",
    description:
      "Cycle agile avec livraisons régulières de fonctionnalités et feedback continu pour rester aligné à vos objectifs.",
  },
  {
    num: 3,
    title: "Qualité & Testing",
    description:
      "Tests automatisés, revues de code et intégration continue pour garantir un code robuste et maintenable.",
  },
  {
    num: 4,
    title: "Déploiement & DevOps",
    description:
      "Mise en production automatisée, infrastructure as code, monitoring et alerting dès le premier jour.",
  },
  {
    num: 5,
    title: "Maintenance & Évolution",
    description:
      "Support continu, améliorations itératives et montée en charge pour s'adapter à vos besoins changeants.",
  },
];

export default function IngenieireApproacheSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">

          {/* Gauche — image */}
          <div className="relative w-full overflow-hidden rounded-2xl lg:w-[45%] lg:shrink-0">
            <Image
              src="/images/team.jpg"
              alt="L'équipe Teknosure en action"
              width={700}
              height={560}
              className="h-full w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Overlay léger + badge flottant */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                </span>
                <span className="text-xs font-semibold text-gray-700">
                  Équipe disponible · Démarrage sous 48h
                </span>
              </div>
            </div>
          </div>

          {/* Droite — titre + étapes */}
          <div className="flex flex-1 flex-col justify-center">
            <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">
              Notre méthode
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Votre projet livré{" "}
              <span className="bg-linear-to-r from-[#0D6EA1] to-[#1B9AD2] bg-clip-text text-transparent">
                sans mauvaise surprise.
              </span>
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              Notre méthodologie éprouvée garantit la réussite de vos projets de
              développement, de la conception à la livraison — dans les délais et
              dans le budget.
            </p>

            {/* Différenciateurs */}
            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-[#B8DFF2] bg-[#E8F5FC] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#0D6EA1] to-[#1B9AD2] text-white shadow-sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">Livraison rapide</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                    Premier prototype sous 2 semaines. Mise en production en cycles courts et prévisibles.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-blue-400 text-white shadow-sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">L'humain avant tout</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                    Un interlocuteur dédié, une équipe soudée, une relation de confiance à long terme.
                  </p>
                </div>
              </div>
            </div>

            {/* Étapes numérotées */}
            <ol className="flex flex-col gap-6">
              {etapes.map((etape, index) => (
                <li key={etape.num} className="group flex items-start gap-4">
                  {/* Numéro + ligne de connexion */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#0D6EA1] to-[#1B9AD2] text-sm font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                      {etape.num}
                    </div>
                    {index < etapes.length - 1 && (
                      <div className="mt-1 h-full w-px bg-gray-200" style={{ minHeight: "1.5rem" }} />
                    )}
                  </div>
                  {/* Contenu */}
                  <div className="pb-2">
                    <h3 className="mb-1 text-sm font-bold text-gray-900 group-hover:text-[#1B9AD2] transition-colors">
                      {etape.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {etape.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
