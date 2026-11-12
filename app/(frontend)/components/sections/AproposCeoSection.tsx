import Image from "next/image";

const keyPoints = [
  "Rendre la technologie accessible à toutes les entreprises, quelle que soit leur taille",
  "Construire des partenariats durables, fondés sur la confiance et la transparence",
  "Innover en permanence pour anticiper les défis de demain",
  "Mettre l'humain au cœur de chaque décision technologique",
];

export default function AproposCeoSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
      {/* Cercles décoratifs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--primary)]/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-20">

          {/* ── Photo ────────────────────────────────────────────────────── */}
          <div className="relative mx-auto shrink-0 lg:mx-0">
            {/* Anneau décoratif externe */}
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-[var(--primary-dark)]/30 to-[var(--primary)]/20 blur-sm" />

            {/* Conteneur image */}
            <div className="relative h-72 w-56 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-96 sm:w-72 lg:h-[480px] lg:w-80">
              <Image
                src="/images/image-hamad.png"
                alt="Hamad WITTI — CEO Teknosure"
                fill
                sizes="(max-width: 1024px) 288px, 320px"
                className="object-cover object-top"
                priority
              />
              {/* Overlay bas pour lisibilité du badge */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-gray-900/90 to-transparent" />

              {/* Badge flottant bas */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-base font-bold text-white">Hamad WITTI</p>
                <p className="text-xs text-blue-300">CEO & Co-fondateur — Teknosure</p>
              </div>
            </div>

            {/* Badge LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hamad-witti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Hamad WITTI"
              className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] shadow-lg transition-transform hover:scale-110"
            >
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* ── Discours ─────────────────────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-block rounded-full border border-[var(--primary)]/30 bg-[var(--primary-light)]0/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              La vision du fondateur
            </span>

            <h2 className="mb-8 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Teknosure, c&apos;est{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                l&apos;ESN que j&apos;aurais voulu avoir
              </span>{" "}
              comme partenaire.
            </h2>

            {/* Guillemets + discours */}
            <div className="relative mb-8 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <svg className="mb-3 h-8 w-8 text-blue-400/50" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                Après 23 ans dédiés à la transformation digitale, à la cybersécurité et au conseil
                stratégique auprès d&apos;organisations de toutes tailles, j&apos;ai choisi de donner vie
                à une conviction profonde : la technologie doit être un levier de transformation
                accessible, sécurisé et humain. C&apos;est de cette certitude qu&apos;est née Teknosure.
              </p>
              <p className="mb-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                Teknosure accompagne TPE, PME, ETI et grands comptes avec des solutions sur mesure,
                adaptées à leurs enjeux et à leurs budgets. Portée par une équipe passionnée,
                notre approche repose sur trois piliers : une proximité humaine réelle, une capacité
                à adapter la technologie aux réalités du terrain, et des outils boostés par
                l&apos;IA pour accélérer nos livrables et optimiser les coûts — sans jamais sacrifier
                la valeur pour nos clients.
              </p>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Nous croyons en la synergie entre l&apos;ingéniosité humaine et la puissance technologique.
                Que vous soyez client en quête d&apos;un partenaire de confiance, ou talent souhaitant
                rejoindre une aventure collective ambitieuse — Teknosure est prête.
                Je serai toujours ravi d&apos;échanger avec vous.
              </p>
            </div>

            {/* Points clés de la vision */}
            <ul className="mb-8 flex flex-col gap-3">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)]0/20 text-blue-400">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Signature */}
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-right">
                <p className="text-sm font-bold text-white">Hamad WITTI</p>
                <p className="text-xs text-gray-500">CEO & Co-fondateur, Teknosure</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
