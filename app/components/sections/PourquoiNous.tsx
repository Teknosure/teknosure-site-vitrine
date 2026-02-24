import Link from "next/link";

export default function WhyUsSection() {
  const reasons = [
    {
      titre: "Sécurité de niveau entreprise",
      description: "La sécurité n'est pas une question secondaire ; elle est intégrée à chaque ligne de code que nous écrivons."
    },
    {
      titre: "Méthodologies éprouvées",
      description: "Nous suivons des processus agiles et transparents qui garantissent une livraison et une qualité prévisibles."
    },
    {
      titre: "Les 1% meilleurs talents",
      description: "Nos ingénieurs sont des experts agréés possédant des années d'expérience dans des environnements à forts enjeux."
    },
    {
      titre: "Normes européennes",
      description: "Entièrement conforme au RGPD et aux exigences européennes en matière de souveraineté numérique."
    }
  ];

  const stats = [
    { value: "98%", label: "fidélisation de la clientèle" },
    { value: "Plus de 150", label: "Projets d'entreprise" },
    { value: "24h/24 et 7j/7", label: "Assistance et surveillance" },
    { value: "10+", label: "Années d'expérience" }
  ];

  return (
    <section className="bg-gray-900 px-6 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Colonne gauche : Raisons */}
          <div>
            <h2 className="mb-12 text-4xl font-bold lg:text-5xl">
              Pourquoi les leaders du secteur choisissent Teknosure
            </h2>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{reason.titre}</h3>
                    <p className="text-gray-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : Statistiques */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 bg-gray-800/50 p-8 backdrop-blur"
              >
                <div className="mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
  }