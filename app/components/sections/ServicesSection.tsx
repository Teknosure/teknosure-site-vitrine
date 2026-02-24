import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: "🛡️",
      titre: "cybersécurité",
      description: "Protégez vos actifs grâce à des évaluations de sécurité de niveau entreprise, des tests d'intrusion et des audits de conformité.",
      link: "#"
    },
    {
      icon: "☁️",
      titre: "Cloud et Infogérance",
      description: "Migration transparente vers le cloud, services gérés et optimisation de l'infrastructure pour AWS, Azure et Google Cloud.",
      link: "#"
    },
    {
      icon: "💻",
      titre: "DevOps et CI/CD",
      description: "Accélérez les cycles de déploiement grâce aux pipelines automatisés, à la conteneurisation et à l'orchestration moderne.",
      link: "#"
    },
    {
      icon: "⚙️",
      titre: "Ingénierie logicielle",
      description: "Développement d'applications web et mobiles sur mesure, construites sur des architectures modernes et évolutives.",
      link: "#"
    },
    {
      icon: "🤖",
      titre: "IA et automatisation",
      description: "Tirez parti de l'apprentissage automatique et de l'automatisation robotisée des processus (RPA) pour automatiser les processus et obtenir des informations basées sur les données.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* En-tête */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Solutions informatiques complètes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Une expertise complète pour piloter la transformation de votre entreprise.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Cartes de services */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.titre}
              </h3>
              <p className="mb-4 text-gray-600">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all group-hover:gap-3"
              >
                Apprendre encore plus
                <span>→</span>
              </Link>
            </div>
          ))}

          {/* Carte CTA spéciale */}
          <div className="rounded-2xl bg-gray-900 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Solution personnalisée ?
            </h3>
            <p className="mb-6 text-gray-300">
              Nous élaborons des stratégies sur mesure pour relever des défis uniques.
            </p>
            <Link
              href="#contact"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:bg-gray-100"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}