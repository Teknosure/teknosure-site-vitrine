import Link from "next/link";
import { ShieldCheck, Cloud, Headset, CodeXml, Cpu } from "lucide-react";

const iconClass = "h-6 w-6 text-[var(--primary)]";
const iconStroke = 1.5;

const services = [
  {
    icon: <ShieldCheck className={iconClass} strokeWidth={iconStroke} aria-hidden="true" />,
    title: "Cybersécurité & conformité",
    description:
      "Audit de sécurité, tests d'intrusion, conformité NIS2/ISO 27001 et SOC managé 24/7 pour protéger vos actifs numériques avant la prochaine attaque.",
    href: "/services/cybersecurite",
  },
  {
    icon: <Cloud className={iconClass} strokeWidth={iconStroke} aria-hidden="true" />,
    title: "Infrastructure & Cloud",
    description:
      "Migration cloud, architecture multi-cloud AWS/Azure/GCP, supervision continue et optimisation des coûts. Votre infrastructure entre de bonnes mains.",
    href: "/services/cloud",
  },
  {
    icon: <Headset className={iconClass} strokeWidth={iconStroke} aria-hidden="true" />,
    title: "Infogérance & Services Managés",
    description:
      "Support IT externalisé, gestion des incidents, maintenance continue et sauvegarde managée. Concentrez-vous sur votre cœur de métier.",
    href: "/services/infogerance",
  },
  {
    icon: <CodeXml className={iconClass} strokeWidth={iconStroke} aria-hidden="true" />,
    title: "Ingénierie logicielle",
    description:
      "Applications web, mobiles et APIs sur architectures modernes. Du cadrage à la mise en production, sans mauvaise surprise.",
    href: "/services/ingenierie",
  },
  {
    icon: <Cpu className={iconClass} strokeWidth={iconStroke} aria-hidden="true" />,
    title: "IA et automatisation",
    description:
      "Machine learning, RPA et automatisation des processus métier. Réduisez les tâches répétitives et prenez des décisions basées sur la donnée.",
    href: "/services/ia",
  },
];

export default function ServicesSection() {
  return (
    <section id="expertises" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-12 max-w-2xl">
          <span className="inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
            Nos expertises
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Des solutions IT{" "}
            <span className="bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
              bout en bout
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 lg:text-lg">
            De la sécurité de votre infrastructure à la livraison de vos applications,
            une équipe d&apos;experts couvre l&apos;ensemble de votre transformation numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const featured = index === 0;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex flex-col rounded-none border border-gray-200 bg-white p-7 shadow-sm transition-colors hover:border-[var(--primary-border)] hover:bg-[var(--primary-light)] ${
                  featured
                    ? "md:col-span-2 lg:col-span-4 lg:flex-row lg:items-start lg:gap-10 lg:p-10"
                    : "lg:col-span-2"
                }`}
              >
                <div className={featured ? "mb-5 lg:mb-0 lg:pt-1" : "mb-5"}>
                  {service.icon}
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-[var(--primary-dark)]">
                    {service.title}
                  </h3>

                  <p className={`mb-5 flex-1 text-sm leading-relaxed text-gray-500 ${featured ? "lg:max-w-xl lg:text-base" : ""}`}>
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                    Découvrir
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 bg-[var(--primary-dark)] px-6 py-8 text-white sm:flex-row sm:px-8">
          <div>
            <p className="text-base font-bold sm:text-lg">Un projet spécifique ? Un besoin sur mesure ?</p>
            <p className="mt-1 text-xs text-[var(--primary-border)] sm:text-sm">
              Nous construisons des solutions adaptées à vos contraintes et à vos ambitions.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 border border-white/30 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[var(--primary-dark)]"
          >
            Parler à un expert
          </Link>
        </div>

      </div>
    </section>
  );
}
