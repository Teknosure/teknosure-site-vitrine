import Image from "next/image";
import Link from "next/link";

const affiliations = [
  {
    name: "Fédération Française de la Cybersécurité",
    label: "Membre officiel",
    href: "https://ffcyber.fr",
    hrefLabel: "ffcyber.fr",
    logo: "/images/FFcyber.png",
    alt: "FFCyber — Fédération Française de la Cybersécurité",
    logoClass: "h-24 w-auto object-contain",
    width: 180,
    height: 180,
  },
  {
    name: "Cybermalveillance.gouv.fr",
    label: "Partenaire",
    href: "https://www.cybermalveillance.gouv.fr",
    hrefLabel: "cybermalveillance.gouv.fr",
    logo: "/images/Logo-cybermalveillance.png",
    alt: "Cybermalveillance.gouv.fr — Assistance et prévention en sécurité numérique",
    logoClass: "h-20 w-auto object-contain sm:h-24",
    width: 320,
    height: 160,
  },
];

export default function FFCyberSection() {
  return (
    <section id="affiliations" className="bg-[#0a0f1e] py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Affiliations
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Un ancrage national
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Teknosure est membre de la Fédération Française de la Cybersécurité
            et partenaire de Cybermalveillance.gouv.fr, le dispositif national
            d&apos;assistance et de prévention en sécurité numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {affiliations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-white/10 bg-white p-8 transition-colors hover:border-white/20"
            >
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                {item.label}
              </p>
              <div className="mb-6 flex min-h-[6.5rem] items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={item.logoClass}
                />
              </div>
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p className="mt-1 text-xs text-gray-500 group-hover:text-[var(--primary-dark)]">
                {item.hrefLabel} ↗
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
