import Link from "next/link";

const atouts = [
  "Réponse sous 24h, sans engagement",
  "Audit initial offert",
  "Interlocuteur dédié tout au long du projet",
  "TPE, PME, ETI et grands comptes bienvenus",
];

export default function AproposCtaSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#0D6EA1] via-[#1487BB] to-[#1B9AD2] py-24">
      {/* Cercles décoratifs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-400/10" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Gauche — texte */}
          <div className="flex-1 text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90">
              Et vous ?
            </span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Vous cherchez un partenaire pour{" "}
              <span className="underline decoration-cyan-300 decoration-2 underline-offset-4">
                sécuriser et accélérer
              </span>{" "}
              votre transformation ?
            </h2>
            <p className="mb-8 text-lg text-[#B8DFF2]">
              Parlons de vos enjeux. Sans jargon, sans pression — juste une conversation
              entre experts pour identifier les meilleures pistes.
            </p>

            {/* Atouts */}
            <ul className="mb-10 flex flex-col gap-3 text-sm text-[#B8DFF2]">
              {atouts.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0D6EA1] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Prendre contact
              </Link>
              <Link
                href="/services/cybersecurite"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* Droite — carte valeur ajoutée */}
          <div className="w-full max-w-sm shrink-0 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm lg:w-80">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-bold text-white">Notre valeur ajoutée</h3>
            <p className="mb-6 text-sm leading-relaxed text-[#B8DFF2]">
              Des solutions boostées par l&apos;IA, conçues pour accélérer vos opérations,
              renforcer la qualité du delivery, et s&apos;adapter aux réalités de chaque
              entreprise — grâce à des partenariats technologiques de haut niveau.
            </p>
            <div className="flex flex-wrap gap-2">
              {["IA intégrée", "Partenariats certifiés", "Delivery rapide", "Proximité réelle"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
