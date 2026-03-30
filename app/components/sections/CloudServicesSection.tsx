const services = [
  {
    id: 1,
    title: "Migration Cloud",
    description:
      "Accompagnement complet de votre migration vers AWS, Azure ou Google Cloud : audit, planification, exécution et validation.",
    features: [
      "Audit de l'infrastructure existante",
      "Stratégie Lift & Shift ou re-architecture",
      "Migration sans interruption de service",
      "Tests de performance post-migration",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Infogérance & Monitoring 24/7",
    description:
      "Gestion opérationnelle de votre infrastructure cloud avec supervision continue, alerting et intervention rapide.",
    features: [
      "Monitoring temps réel",
      "Alerting & escalade automatisés",
      "Gestion des incidents (SLA garanti)",
      "Rapports mensuels de performance",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Architecture Multi-Cloud",
    description:
      "Conception d'architectures résilientes, scalables et sécurisées sur un ou plusieurs fournisseurs cloud.",
    features: [
      "Architecture haute disponibilité",
      "Load balancing & auto-scaling",
      "Redondance multi-zones",
      "Architecture serverless & conteneurs",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sécurité & Conformité Cloud",
    description:
      "Mise en place des bonnes pratiques de sécurité cloud : IAM, chiffrement, conformité réglementaire et audit.",
    features: [
      "Gestion des identités & accès (IAM)",
      "Chiffrement des données au repos",
      "Conformité RGPD & ISO 27001",
      "Audit de configuration cloud",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Optimisation des coûts",
    description:
      "Analyse et réduction de vos dépenses cloud grâce à une gouvernance rigoureuse et une utilisation optimisée des ressources.",
    features: [
      "FinOps & analyse de facturation",
      "Right-sizing des instances",
      "Réservations & savings plans",
      "Dashboards de coûts en temps réel",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Backup & Disaster Recovery",
    description:
      "Plans de sauvegarde et de reprise d'activité pour garantir la continuité de vos services en toutes circonstances.",
    features: [
      "Stratégie de sauvegarde automatisée",
      "RTO & RPO définis contractuellement",
      "Tests de reprise réguliers",
      "Réplication multi-régions",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function CloudServicesSection() {
  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">Nos expertises</span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous gérons pour vous
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            De la migration à l&apos;infogérance complète, nous prenons en charge chaque couche de votre infrastructure cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8DFF2] hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 text-[#1B9AD2] transition-colors group-hover:from-blue-100 group-hover:to-cyan-100">
                {service.icon}
              </div>
              <h3 className="mb-3 text-base font-bold text-gray-900 transition-colors group-hover:text-[#1B9AD2]">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-500">{service.description}</p>
              <div className="mb-4 h-px w-full bg-gray-100" />
              <ul className="flex flex-col gap-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400">
                      <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
