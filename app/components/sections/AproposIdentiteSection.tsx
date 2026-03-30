import Image from "next/image";

const pilliers = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Notre raison d'être",
    description:
      "Mettre la technologie au service de l'humain — en rendant les solutions IT accessibles, résilientes et adaptées aux réalités de chaque organisation.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Notre ambition",
    description:
      "Devenir la référence des ESN nouvelle génération — en combinant l'ingéniosité humaine, les partenariats technologiques de haut niveau et l'accélération par l'IA.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "Notre mission",
    description:
      "Accompagner les TPE, PME, ETI et grands comptes dans leur transformation numérique avec des solutions robustes, évolutives et alignées sur leurs enjeux métier.",
  },
];

export default function AproposIdentiteSection() {
  return (
    <>
      {/* ── Bloc hero "Notre histoire" ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0D6EA1] via-[#1487BB] to-[#1B9AD2] py-24">
        {/* Cercles décoratifs */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

            {/* Texte gauche */}
            <div className="flex-1 text-center lg:text-left">
              <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                À propos de Teknosure
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Notre histoire
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-[#B8DFF2] lg:text-xl">
                Une ESN nouvelle génération, animée par une équipe passionnée,
                où l&apos;ingéniosité humaine rencontre la technologie de pointe
                pour créer des services adaptés, résilients et accessibles.
              </p>

              {/* Stats rapides */}
              <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
                {[
                  { value: "4", label: "Domaines d'expertise" },
                  { value: "50+", label: "Projets livrés" },
                  { value: "100%", label: "Proximité client" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-extrabold text-white">{s.value}</p>
                    <p className="mt-0.5 text-xs text-blue-200">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuel droite */}
            <div className="relative w-full max-w-md shrink-0 lg:w-[420px]">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/images/team.jpg"
                  alt="L'équipe Teknosure"
                  width={420}
                  height={320}
                  className="h-72 w-full object-cover object-center lg:h-80"
                  priority
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-[#B8DFF2] bg-white px-5 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1B9AD2]">Fondée en 2022</p>
                <p className="text-sm font-bold text-gray-900">Paris, France</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trois piliers ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pilliers.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-100 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8DFF2] hover:shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5FC] text-[#1B9AD2] transition-colors group-hover:bg-[#0D6EA1] group-hover:text-white">
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B9AD2]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
