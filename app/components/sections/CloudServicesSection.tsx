const services = [
  {
    id: 1,
    slug: "migration",
    title: "Cloud Managé (Azure/AWS/GCP)",
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
    id: 4,
    slug: "infrastructure",
    title: "Réseaux & Wi-Fi Entreprise",
    description:
      "SD-WAN, switching managé, Wi-Fi entreprise Cisco/Fortinet, QoS, VLAN, audit réseau, câblage.",
    features: [
      "SD-WAN & switching managé",
      "Wi-Fi entreprise Cisco/Fortinet",
      "QoS, VLAN & segmentation",
      "Audit réseau & câblage",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Firewall UTM & Sécurité réseau",
    description:
      "Fortinet, Palo Alto, Check Point, SonicWall — déploiement, règles, IPS/IDS, VPN site-à-site.",
    features: [
      "Fortinet, Palo Alto, Check Point",
      "Déploiement & configuration règles",
      "IPS/IDS & prévention menaces",
      "VPN site-à-site & client",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: 6,
    slug: "hebergement",
    title: "Sauvegarde & PRA Cloud",
    description:
      "Backup-as-a-Service, réplication temps réel, PRA automatisé Azure/AWS, RTO/RPO contractuels.",
    features: [
      "Backup-as-a-Service cloud",
      "Réplication temps réel",
      "PRA automatisé Azure/AWS",
      "RTO/RPO contractuels",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Sécurité & Conformité Cloud",
    description:
      "IAM, chiffrement, CASB, DLP cloud, conformité RGPD & ISO 27001, contrôle des accès aux SaaS.",
    features: [
      "IAM & gestion des accès",
      "CASB & visibilité Shadow IT",
      "DLP cloud & chiffrement",
      "Conformité RGPD & ISO 27001",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Connectivité & MPLS",
    description:
      "Liens dédiés MPLS/SD-WAN, redondance opérateurs, optimisation QoS, monitoring réseau 24/7.",
    features: [
      "Liens dédiés MPLS/SD-WAN",
      "Redondance opérateurs",
      "Optimisation QoS",
      "Monitoring réseau 24/7",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

export default function CloudServicesSection() {
  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">Nos expertises</span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous gérons pour vous
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            De la migration à l&apos;infogérance complète, nous prenons en charge chaque couche de votre infrastructure cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} id={(service as any).slug} className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-border)] hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 text-[var(--primary)] transition-colors group-hover:from-blue-100 group-hover:to-cyan-100">
                {service.icon}
              </div>
              <h3 className="mb-3 text-base font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
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
