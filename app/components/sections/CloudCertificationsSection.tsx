import Image from "next/image";

const stats = [
  { value: "12",  label: "certifications Google Cloud" },
  { value: "15",  label: "certifications AWS" },
  { value: "8",   label: "certifications Kubernetes" },
  { value: "20+", label: "experts cloud dédiés" },
];

export default function CloudCertificationsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">

          {/* Gauche — texte + stats */}
          <div className="flex flex-1 flex-col justify-center">
            <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Expertise reconnue
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Nos Certifications
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-gray-500">
              Notre équipe cloud détient les certifications les plus exigeantes sur les
              principales plateformes, garantissant une expertise technique de premier
              plan pour chacun de vos projets.
            </p>

            {/* Grille de stats 2×2 */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <p className="text-4xl font-extrabold text-blue-600 transition-colors group-hover:text-cyan-500">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Droite — carte visuelle */}
          <div className="flex w-full items-center justify-center lg:w-[45%] lg:shrink-0">
            <div className="relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 p-10">
              {/* Icônes déco */}
              <div className="flex flex-col items-center gap-6">
                {/* Badge central */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-blue-100">
                  <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                {/* Logos partenaires en ligne */}
                <div className="flex items-center justify-center gap-6">
                  {[
                    { src: "/images/tech/amazonaws.svg",      filter: "invert(55%) sepia(90%) saturate(500%) hue-rotate(20deg)" },
                    { src: "/images/tech/googlecloud.svg",    filter: "invert(40%) sepia(80%) saturate(400%) hue-rotate(185deg)" },
                    { src: "/images/tech/microsoftazure.svg", filter: "invert(35%) sepia(80%) saturate(600%) hue-rotate(185deg)" },
                    { src: "/images/tech/kubernetes.svg",     filter: "invert(30%) sepia(90%) saturate(600%) hue-rotate(200deg)" },
                  ].map(({ src, filter }) => (
                    <div key={src} className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2.5 shadow-sm">
                      <Image src={src} alt="" width={28} height={28} className="h-7 w-7 object-contain" style={{ filter }} />
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm font-medium text-blue-700">
                  Certifications officielles sur les 3 clouds majeurs
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
