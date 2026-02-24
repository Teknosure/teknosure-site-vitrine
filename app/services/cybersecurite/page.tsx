export default function CybersecuritePage() {
  const features = [
    "Évaluation de la vulnérabilité",
    "Centre des opérations de sécurité (SOC)",
    "Tests d'intrusion",
    "Conseil en conformité"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fond sombre */}
      <section className="bg-gray-900 px-6 pb-20 pt-32 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
            Cybersécurité et conformité
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
            Nous sécurisons votre périmètre numérique grâce à une détection avancée des menaces, 
            des tests d'intrusion et des audits de conformité (ISO 27001, RGPD). 
            Notre équipe garantit l'intégrité de vos données.
          </p>
        </div>
      </section>

      {/* Content Section - Fond clair avec carte */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Carte de service */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-8 flex items-start gap-6">
              {/* Icône */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Titre et description */}
              <div className="flex-1">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Cybersécurité et conformité
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  Nous sécurisons votre périmètre numérique grâce à une détection avancée des menaces, 
                  des tests d'intrusion et des audits de conformité (ISO 27001, RGPD). 
                  Notre équipe garantit l'intégrité de vos données.
                </p>

                {/* Liste des fonctionnalités */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}