import Link from "next/link";

const clients = [
  {
    client: "Distrtherm Services",
    sector: "Distribution thermique & Génie climatique",
    accentColor: "from-orange-500 to-amber-400",
    badgeColor: "text-orange-600 bg-orange-50",
    projets: [
      {
        id: 1,
        title: "Site vitrine",
        category: "Web",
        description:
          "Création d'un site vitrine moderne, rapide et optimisé SEO présentant les offres, expertises et actualités de Distrtherm Services.",
        tags: ["Next.js", "Tailwind CSS", "CMS"],
      },
      {
        id: 2,
        title: "Application e-commerce",
        category: "E-commerce",
        description:
          "Développement d'une boutique en ligne B2B/B2C avec catalogue produits, devis en ligne, paiement sécurisé et gestion des commandes.",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
      },
      {
        id: 3,
        title: "Dashboard & Application mobile",
        category: "Analytics & Mobile",
        description:
          "Tableau de bord centralisé pour piloter les ventes, stocks et interventions, couplé à une application mobile pour les techniciens terrain.",
        tags: ["React", "React Native", "Node.js"],
      },
    ],
  },
  {
    client: "Conformitas",
    sector: "Conformité réglementaire & CEE",
    accentColor: "from-violet-600 to-blue-500",
    badgeColor: "text-violet-600 bg-violet-50",
    projets: [
      {
        id: 4,
        title: "CRM Conformitas",
        category: "CRM",
        description:
          "CRM sur mesure pour la gestion des clients, suivi des contrats de conformité, relances automatisées et tableau de bord des échéances réglementaires.",
        tags: ["Vue.js", "Spring Boot", "MySQL"],
      },
      {
        id: 5,
        title: "Gestion des inspections CEE",
        category: "Métier",
        description:
          "Plateforme de gestion des Certificats d'Économies d'Énergie : planification des visites, validation terrain mobile, génération automatique des rapports CEE.",
        tags: ["React", "Python", "API REST"],
      },
    ],
  },
];

export default function IngenieireCasSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-16 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
            Cas clients
          </span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous avons bâti
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            Des projets concrets livrés pour des entreprises exigeantes — de l&apos;idée
            à la mise en production.
          </p>
        </div>

        {/* Bloc par client */}
        <div className="flex flex-col gap-16">
          {clients.map((group) => (
            <div key={group.client}>

              {/* En-tête client */}
              <div className="mb-8 flex items-center gap-4">
                {/* Pastille initiales avec gradient */}
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${group.accentColor} text-sm font-bold text-white shadow-md`}>
                  {group.client.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{group.client}</h3>
                  <p className="text-xs text-gray-400">{group.sector}</p>
                </div>
                {/* Ligne séparatrice */}
                <div className="ml-4 h-px flex-1 bg-gray-200" />
              </div>

              {/* Cartes projets */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.projets.map((projet) => (
                  <article
                    key={projet.id}
                    className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-border)] hover:shadow-lg"
                  >
                    {/* Badge catégorie */}
                    <span className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${group.badgeColor}`}>
                      {projet.category}
                    </span>

                    <h4 className="mb-3 text-base font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
                      {projet.title}
                    </h4>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                      {projet.description}
                    </p>

                    {/* Tags techno */}
                    <div className="mb-5 flex flex-wrap gap-2">
                      {projet.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/etudes-de-cas"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-all hover:gap-3"
                    >
                      Voir l&apos;étude de cas
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/etudes-de-cas"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)] px-8 py-3 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary-light)]"
          >
            Voir toutes nos réalisations
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
