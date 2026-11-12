const useCases = [
  {
    sector: "Finance & Comptabilité",
    icon: "💳",
    cases: [
      "Extraction automatique de données depuis les factures et relevés",
      "Détection de fraudes et anomalies en temps réel",
      "Génération automatique de rapports financiers",
    ],
    gain: "-70% de saisie manuelle",
  },
  {
    sector: "Service client & Support",
    icon: "🎧",
    cases: [
      "Chatbot IA capable de répondre à 80% des demandes courantes",
      "Résumé automatique des tickets et historique client",
      "Escalade intelligente vers le bon interlocuteur",
    ],
    gain: "-60% de temps de traitement",
  },
  {
    sector: "RH & Recrutement",
    icon: "👥",
    cases: [
      "Tri et scoring automatique des candidatures",
      "Génération de fiches de poste et synthèses d'entretiens",
      "Onboarding assisté par un agent IA interne",
    ],
    gain: "3× plus rapide sur le screening",
  },
  {
    sector: "Juridique & Conformité",
    icon: "⚖️",
    cases: [
      "Analyse et résumé automatique de contrats",
      "Extraction des clauses clés et alertes sur les risques",
      "Veille réglementaire automatisée",
    ],
    gain: "-80% sur la revue documentaire",
  },
  {
    sector: "IT & Ops",
    icon: "🖥️",
    cases: [
      "Détection prédictive des incidents avant qu'ils surviennent",
      "Automatisation des tâches d'administration système",
      "Génération de runbooks et documentation technique",
    ],
    gain: "MTTR réduit de 50%",
  },
  {
    sector: "Commerce & Marketing",
    icon: "📈",
    cases: [
      "Segmentation client IA et recommandations personnalisées",
      "Génération de contenus marketing à la volée",
      "Analyse prédictive des ventes et des tendances",
    ],
    gain: "+35% de conversion en moyenne",
  },
];

export default function IAUseCasesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-600">
            Cas d&apos;usage
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            L&apos;IA appliquée à{" "}
            <span className="bg-linear-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
              votre métier
            </span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
            Pas d&apos;IA pour faire de l&apos;IA. Des applications concrètes, choisies pour leur
            impact mesurable sur vos opérations.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.sector}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
            >
              {/* Secteur */}
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{uc.icon}</span>
                <h3 className="text-base font-bold text-gray-900">{uc.sector}</h3>
              </div>

              {/* Cas */}
              <ul className="mb-5 flex flex-1 flex-col gap-2.5">
                {uc.cases.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {c}
                  </li>
                ))}
              </ul>

              {/* Gain */}
              <div className="mt-auto border-t border-gray-100 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                  {uc.gain}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
