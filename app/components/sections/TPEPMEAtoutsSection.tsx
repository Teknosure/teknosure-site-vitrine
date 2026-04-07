const atouts = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Réactivité garantie",
    description: "Un interlocuteur dédié, joignable et qui connaît votre contexte. Interventions rapides sans tickets perdus dans un call center.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Coûts maîtrisés",
    description: "Forfaits clairs, sans surprises. Vous savez exactement ce que vous payez et pourquoi. Nous optimisons votre budget IT.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Expertise senior",
    description: "Vos projets sont traités par des experts certifiés (AWS, Azure, Cisco, CISSP…), pas par des juniors en formation.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Solutions sur mesure",
    description: "Pas de catalogue figé. Chaque TPE/PME est différente — nous adaptons nos solutions à vos contraintes et vos objectifs.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Accompagnement dans la durée",
    description: "Nous ne faisons pas que livrer une solution. Nous évoluons avec vous, anticipons vos besoins et vous conseillons proactivement.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Équipe locale & disponible",
    description: "Une équipe à taille humaine, basée en France, qui comprend les réalités des entreprises locales et leur fonctionnement.",
  },
];

export default function TPEPMEAtoutsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-sm font-semibold text-[var(--primary-dark)]">
            Pourquoi Teknosure ?
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Un partenaire IT pensé<br />pour les TPE & PME
          </h2>
          <p className="text-lg text-gray-600">
            Nous accompagnons les petites et moyennes entreprises avec la même
            rigueur et les mêmes outils que les grandes entreprises — à un coût adapté à votre réalité.
          </p>
        </div>

        {/* Grille */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {atouts.map((atout, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary-light)] hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm transition-all group-hover:bg-[var(--primary)] group-hover:text-white">
                {atout.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">{atout.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{atout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
