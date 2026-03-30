import Link from "next/link";

const domaines = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Cybersécurité & conformité",
    description: "Protection des SI, audits, conformité NIS2/ISO 27001, SOC managé et réponse à incident.",
    href: "/services/cybersecurite",
    color: "from-red-500 to-orange-400",
    bgLight: "bg-red-50",
    textColor: "text-red-600",
    borderHover: "hover:border-red-200",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: "Réseaux, Infrastructure & Cloud",
    description: "Migration cloud, architecture multi-cloud, supervision d'infrastructure et gestion des coûts.",
    href: "/services/cloud",
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-[#E8F5FC]",
    textColor: "text-[#1B9AD2]",
    borderHover: "hover:border-[#B8DFF2]",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Développement d'applications",
    description: "Applications web, mobiles, APIs et architectures logicielles modernes, du cadrage à la mise en production.",
    href: "/services/ingenierie",
    color: "from-violet-500 to-purple-400",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    borderHover: "hover:border-violet-200",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.879-4.655 3.029-2.497c.384-.317.626-.74.766-1.208" />
      </svg>
    ),
    title: "Infogérance & Services Managés",
    description: "Support IT externalisé, gestion des incidents, maintenance continue et sauvegarde managée.",
    href: "/services/infogerance",
    color: "from-emerald-500 to-teal-400",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderHover: "hover:border-emerald-200",
  },
];

export default function AproposExpertiseSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-[#E8F5FC] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">
            Nos domaines d&apos;expertise
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous{" "}
            <span className="bg-linear-to-r from-[#0D6EA1] to-[#1B9AD2] bg-clip-text text-transparent">
              maîtrisons
            </span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-gray-500">
            Quatre domaines complémentaires pour couvrir l&apos;ensemble de votre transformation numérique,
            avec des équipes spécialisées et certifiées.
          </p>
        </div>

        {/* Grille domaines */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {domaines.map((d) => (
            <Link
              key={d.title}
              href={d.href}
              className={`group flex gap-5 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${d.borderHover}`}
            >
              {/* Icône */}
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${d.bgLight} ${d.textColor} transition-all duration-300 group-hover:bg-linear-to-br group-hover:${d.color} group-hover:text-white`}>
                {d.icon}
              </div>

              {/* Contenu */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-1.5 text-base font-bold text-gray-900">{d.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{d.description}</p>
                <span className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${d.textColor}`}>
                  Découvrir
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
