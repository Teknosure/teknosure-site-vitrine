import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Google Cloud",
    logo: "/images/tech/googlecloud.svg",
    logoBg: "bg-white",
    logoFilter: "invert(40%) sepia(80%) saturate(400%) hue-rotate(185deg)",
    logoSize: 100,
    badge: "Partenaire Cloud",
    badgeColor: "bg-blue-600 text-white",
    description:
      "Notre expertise Google Cloud nous permet d'accompagner vos projets de migration, d'infrastructure et d'analyse de données sur l'une des plateformes les plus innovantes au monde.",
    tags: ["Compute Engine", "GKE", "BigQuery", "Cloud Run"],
    stat: "3",
    statLabel: "certifications Google Cloud",
    href: "#",
  },
  {
    name: "Amazon Web Services",
    logo: "/images/tech/amazonaws.svg",
    logoBg: "bg-white",
    logoFilter: "invert(55%) sepia(90%) saturate(500%) hue-rotate(20deg)",
    logoSize: 100,
    badge: "Partenaire AWS",
    badgeColor: "bg-amber-500 text-white",
    description:
      "Nous concevons et opérons des architectures AWS robustes et scalables — de la migration Lift & Shift aux architectures serverless hautement disponibles.",
    tags: ["EC2 & EKS", "Lambda", "RDS & Aurora", "CloudFormation"],
    stat: "5",
    statLabel: "certifications AWS",
    href: "#",
  },
  {
    name: "Microsoft Azure",
    logo: "/images/tech/microsoftazure.svg",
    logoBg: "bg-white",
    logoFilter: "invert(35%) sepia(80%) saturate(600%) hue-rotate(185deg)",
    logoSize: 100,
    badge: "Partenaire Azure",
    badgeColor: "bg-sky-600 text-white",
    description:
      "Notre maîtrise d'Azure nous permet d'adresser les environnements hybrides, la conformité réglementaire et l'intégration native avec l'écosystème Microsoft de vos clients.",
    tags: ["AKS & Azure Functions", "Azure AD", "DevOps Pipelines", "Azure Monitor"],
    stat: "4",
    statLabel: "certifications Azure",
    href: "#",
  },
];

export default function CloudPartnersSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Écosystème
          </span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Partenariats Stratégiques
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            Teknosure est partenaire des leaders du cloud public pour vous offrir
            le meilleur de leurs plateformes et technologies.
          </p>
        </div>

        {/* 3 cartes partenaires */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              {/* Logo */}
              <div className="mb-5 flex h-14 items-center justify-start">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.logoSize}
                  height={40}
                  className="h-9 w-auto object-contain"
                  style={{ filter: partner.logoFilter }}
                />
              </div>

              {/* Nom + badge niveau */}
              <h3 className="mb-2 text-base font-bold text-gray-900">{partner.name}</h3>
              <span className={`mb-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${partner.badgeColor}`}>
                {partner.badge}
              </span>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                {partner.description}
              </p>

              {/* Spécialisations */}
              <div className="mb-6 flex flex-wrap gap-2">
                {partner.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stat */}
              <div className="mb-5 border-t border-gray-100 pt-5">
                <p className="text-2xl font-extrabold text-blue-600">{partner.stat}</p>
                <p className="text-xs text-gray-400">{partner.statLabel}</p>
              </div>

              {/* Lien */}
              <Link
                href={partner.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
              >
                En savoir plus
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-500 hover:shadow-lg"
          >
            Découvrir tous nos partenariats
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
