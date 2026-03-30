const services = [
  {
    id: 1,
    title: "Support IT Externalisé",
    description:
      "Un helpdesk réactif et une équipe technique disponible pour résoudre les incidents de vos utilisateurs et maintenir votre parc informatique opérationnel.",
    features: [
      "Helpdesk N1/N2/N3",
      "Ticketing & suivi en temps réel",
      "Support à distance et sur site",
      "Gestion du parc informatique",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "SOC — Centre Opérations Sécurité",
    description:
      "Surveillance continue de votre système d'information pour détecter, analyser et répondre aux menaces en temps réel, 24h/24 et 7j/7.",
    features: [
      "Détection d'intrusions (SIEM)",
      "Analyse des logs & alertes",
      "Réponse aux incidents de sécurité",
      "Rapports de menaces mensuels",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Gestion des Incidents",
    description:
      "Un processus structuré de gestion des incidents pour minimiser l'impact des pannes, réduire les temps de résolution et documenter chaque intervention.",
    features: [
      "Qualification & priorisation ITIL",
      "Escalade et résolution rapide",
      "Post-mortem & analyse des causes",
      "Base de connaissances (CMDB)",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Maintenance Continue",
    description:
      "Mises à jour, patchs de sécurité, optimisations et vérifications proactives pour garantir la performance et la stabilité de vos systèmes.",
    features: [
      "Gestion des patchs & mises à jour",
      "Maintenance préventive planifiée",
      "Optimisation des performances",
      "Supervision proactive 24/7",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Sauvegarde & PRA",
    description:
      "Plans de sauvegarde automatisés et de reprise d'activité pour garantir la continuité de vos opérations en cas d'incident critique.",
    features: [
      "Sauvegardes automatisées chiffrées",
      "Plan de Reprise d'Activité (PRA)",
      "Tests de restauration réguliers",
      "RTO & RPO contractualisés",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Conseil & Gouvernance IT",
    description:
      "Accompagnement stratégique pour aligner votre SI avec vos objectifs métier, optimiser les coûts et anticiper les évolutions technologiques.",
    features: [
      "Audit du système d'information",
      "Schéma directeur IT",
      "Gestion des fournisseurs",
      "Tableaux de bord & reporting COBIT",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function InfogeranceServicesSection() {
  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">Nos services</span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous opérons pour vous
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            De la supervision quotidienne à la stratégie IT, nous prenons en charge
            l&apos;ensemble de votre système d&apos;information pour que vous puissiez vous
            concentrer sur votre cœur de métier.
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
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">{service.description}</p>
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
