import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Cybersécurité & conformité",
    description:
      "Audit de sécurité, tests d'intrusion, conformité NIS2/ISO 27001 et SOC managé 24/7 pour protéger vos actifs numériques avant la prochaine attaque.",
    highlight: "Audit offert",
    color: "from-red-500 to-orange-400",
    bgLight: "bg-red-50",
    textColor: "text-red-600",
    borderHover: "hover:border-red-200",
    href: "/services/cybersecurite",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: "Infrastructure & Cloud",
    description:
      "Migration cloud, architecture multi-cloud AWS/Azure/GCP, supervision continue et optimisation des coûts. Votre infrastructure entre de bonnes mains.",
    highlight: "99.9% uptime",
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-[var(--primary-light)]",
    textColor: "text-[var(--primary)]",
    borderHover: "hover:border-[var(--primary-border)]",
    href: "/services/cloud",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.879-4.655 3.029-2.497c.384-.317.626-.74.766-1.208" />
      </svg>
    ),
    title: "Infogérance & Services Managés",
    description:
      "Support IT externalisé, gestion des incidents, maintenance continue et sauvegarde managée. Concentrez-vous sur votre cœur de métier.",
    highlight: "Disponible 24/7",
    color: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-200",
    href: "/services/infogerance",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Ingénierie logicielle",
    description:
      "Applications web, mobiles et APIs sur architectures modernes. Du cadrage à la mise en production, sans mauvaise surprise.",
    highlight: "Livraison rapide",
    color: "from-violet-500 to-purple-400",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    borderHover: "hover:border-violet-200",
    href: "/services/ingenierie",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "IA et automatisation",
    description:
      "Machine learning, RPA et automatisation des processus métier. Réduisez les tâches répétitives et prenez des décisions basées sur la donnée.",
    highlight: "ROI mesurable",
    color: "from-amber-500 to-yellow-400",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    borderHover: "hover:border-amber-200",
    href: "/services/ia",
  },
];

export default function ServicesSection() {
  return (
    <section id="solutions" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
            Nos expertises
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Des solutions IT{" "}
            <span className="bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
              bout en bout
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-gray-500 lg:text-lg">
            De la sécurité de votre infrastructure à la livraison de vos applications,
            une équipe d&apos;experts couvre l&apos;ensemble de votre transformation numérique.
          </p>
        </div>

        {/* Grille 3×2 */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.borderHover}`}
            >
              {/* Icône + badge highlight */}
              <div className="mb-5 flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.bgLight} ${service.textColor} transition-all duration-300 group-hover:bg-linear-to-br group-hover:${service.color} group-hover:text-white`}>
                  {service.icon}
                </div>
                <span className={`rounded-full ${service.bgLight} ${service.textColor} border border-current/20 px-3 py-1 text-xs font-semibold`}>
                  {service.highlight}
                </span>
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>

              {/* CTA inline */}
              <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.textColor}`}>
                Découvrir
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Bande CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] px-8 py-8 text-white sm:flex-row">
          <div>
            <p className="text-lg font-bold">Un projet spécifique ? Un besoin sur mesure ?</p>
            <p className="mt-1 text-sm text-[var(--primary-border)]">
              Nous construisons des solutions adaptées à vos contraintes et à vos ambitions.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-[var(--primary-dark)] shadow transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Parler à un expert
          </Link>
        </div>

      </div>
    </section>
  );
}
