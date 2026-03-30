const services = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Création d'applications web modernes, réactives et accessibles pour offrir une expérience utilisateur optimale sur tous les appareils.",
    features: [
      "Single-page applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Applications web complexes",
      "Sites e-commerce",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Développement Mobile",
    description:
      "Conception et développement d'applications mobiles natives, hybrides ou cross-platform pour iOS et Android.",
    features: [
      "Applications natives iOS/Android",
      "Frameworks cross-platform",
      "Applications connectées",
      "Wearables & IoT",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Architecture Logicielle",
    description:
      "Conception d'architectures modernes, évolutives et maintenables adaptées à vos besoins métier et techniques.",
    features: [
      "Architecture microservices",
      "Design patterns",
      "Refactoring & modernisation",
      "Solutions cloud-native",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Développement Back-end",
    description:
      "Création d'APIs robustes, sécurisées et performantes pour alimenter vos applications et services.",
    features: [
      "APIs RESTful & GraphQL",
      "Serverless & Functions",
      "Intégration de systèmes",
      "Bases de données & caching",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Développement Front-end",
    description:
      "Création d'interfaces utilisateur modernes, réactives et accessibles pour une expérience utilisateur optimale.",
    features: [
      "React, Angular, Vue.js",
      "UX/UI optimisée",
      "Responsive design",
      "Accessibilité (WCAG)",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "DevOps & CI/CD",
    description:
      "Mise en place de pratiques et d'outils DevOps pour automatiser et optimiser le déploiement de vos applications.",
    features: [
      "Pipelines CI/CD",
      "Infrastructure as Code",
      "Containerisation (Docker, K8s)",
      "Monitoring & observabilité",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function IngenieireServicesSection() {
  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">
            Nos expertises
          </span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous construisons pour vous
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            De l&apos;idée à la mise en production, nous couvrons l&apos;ensemble du cycle de développement avec des pratiques modernes et éprouvées.
          </p>
        </div>

        {/* Grille 3×2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8DFF2] hover:shadow-lg"
            >
              {/* Icône */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 text-[#1B9AD2] transition-colors group-hover:from-blue-100 group-hover:to-cyan-100">
                {service.icon}
              </div>

              {/* Titre + description */}
              <h3 className="mb-3 text-base font-bold text-gray-900 group-hover:text-[#1B9AD2] transition-colors">
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>

              {/* Séparateur */}
              <div className="mb-4 h-px w-full bg-gray-100" />

              {/* Checklist */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400">
                      <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
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
