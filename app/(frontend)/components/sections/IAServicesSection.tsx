const services = [
  {
    slug: "agents",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Agents IA & Copilotes métier",
    description:
      "Conception et déploiement d'agents IA autonomes capables d'exécuter des tâches complexes, répondre à vos collaborateurs et s'intégrer à vos outils existants (CRM, ERP, ITSM).",
    features: ["LLM sur mesure", "RAG & base de connaissances", "Intégration Slack / Teams", "Copilote documentaire"],
  },
  {
    slug: "rpa",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
    title: "Automatisation des processus (RPA)",
    description:
      "Automatisation des tâches répétitives et chronophages : saisie de données, traitement de documents, rapports automatiques et workflows inter-systèmes sans intervention humaine.",
    features: ["RPA low-code / no-code", "Workflows n8n / Make", "Traitement de formulaires", "Rapports automatisés"],
  },
  {
    slug: "predictive",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: "Analyse prédictive & Data Intelligence",
    description:
      "Exploitez vos données pour anticiper les tendances, détecter les anomalies et prendre de meilleures décisions. Des modèles ML adaptés à vos données et vos objectifs.",
    features: ["Modèles prédictifs", "Détection d'anomalies", "Tableaux de bord IA", "Scoring & segmentation"],
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    title: "Chatbots & IA conversationnelle",
    description:
      "Déployez des assistants conversationnels intelligents sur votre site, votre application ou vos canaux de support — capables de comprendre le contexte et d'escalader vers un humain.",
    features: ["NLP avancé", "Multicanal (web, mobile)", "Escalade intelligente", "FAQ dynamique"],
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "IA générative & traitement documentaire",
    description:
      "Résumé automatique, extraction d'informations, génération de contenus et traitement intelligent de vos documents internes — contrats, rapports, emails, tickets.",
    features: ["OCR + LLM", "Extraction d'entités", "Résumé automatique", "Génération de contenus"],
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    title: "MLOps & déploiement de modèles",
    description:
      "De l'expérimentation à la production : nous gérons le cycle de vie complet de vos modèles ML — entraînement, versioning, monitoring des performances et re-entraînement continu.",
    features: ["Pipeline MLOps", "Monitoring de modèles", "API d'inférence", "Drift detection"],
  },
];

export default function IAServicesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-600">
            Nos services IA
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ce que nous{" "}
            <span className="bg-linear-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
              construisons pour vous
            </span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
            De l&apos;automatisation des tâches répétitives à la mise en production de modèles
            d&apos;IA avancés — des solutions concrètes avec un ROI mesurable.
          </p>
        </div>

        {/* Grille 3×2 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              id={(s as any).slug}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
            >
              {/* Icône */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-amber-500 group-hover:to-yellow-400 group-hover:text-white">
                {s.icon}
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">{s.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
