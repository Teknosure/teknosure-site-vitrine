const offres = [
  {
    id: 1,
    badge: "Essentiel",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200 hover:border-blue-400",
    accentColor: "text-blue-600",
    btnClass: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    title: "Pack Sérénité",
    subtitle: "L'essentiel pour démarrer sereinement",
    price: "Sur devis",
    description:
      "Idéal pour les TPE qui souhaitent sécuriser leur activité et bénéficier d'un support informatique réactif sans investissement lourd.",
    features: [
      "Infogérance & support technique (tickets illimités)",
      "Sauvegarde automatique des données (cloud + local)",
      "Antivirus & protection des postes de travail",
      "Supervision de l'infrastructure 5j/7",
      "Assistance à distance et sur site",
      "Rapport mensuel d'activité",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 2,
    badge: "Recommandé",
    badgeColor: "bg-[var(--primary-light)] text-[var(--primary-dark)]",
    borderColor: "border-[var(--primary)] ring-2 ring-[var(--primary)] ring-opacity-20",
    accentColor: "text-[var(--primary-dark)]",
    btnClass: "bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] text-white hover:opacity-90",
    title: "Pack Croissance",
    subtitle: "Performance & sécurité pour les PME en développement",
    price: "Sur devis",
    description:
      "Conçu pour les PME qui veulent accélérer leur transformation numérique tout en gardant la maîtrise de leurs outils et de leur sécurité.",
    features: [
      "Tout le Pack Sérénité inclus",
      "Migration et gestion cloud (AWS / Azure / Google Cloud)",
      "Cybersécurité avancée : EDR, pare-feu managé, MFA",
      "Gestion des identités & accès (AD / Azure AD)",
      "Monitoring 24/7 avec SLA garanti",
      "Accompagnement conformité RGPD & ISO 27001",
      "Formation cybersécurité pour vos équipes",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-700",
    borderColor: "border-purple-200 hover:border-purple-400",
    accentColor: "text-purple-700",
    btnClass: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
    title: "Pack Digital +",
    subtitle: "Transformation numérique complète sur mesure",
    price: "Sur devis",
    description:
      "Pour les PME ambitieuses qui souhaitent exploiter l'IA, automatiser leurs processus et se doter d'outils digitaux sur mesure pour gagner en compétitivité.",
    features: [
      "Tout le Pack Croissance inclus",
      "Développement d'applications et d'outils métier sur mesure",
      "Intégration de l'IA et automatisation des processus (RPA)",
      "Tableaux de bord & analytics en temps réel",
      "API & interconnexion de vos logiciels (ERP, CRM…)",
      "Accompagnement DevOps & CI/CD",
      "Responsable IT dédié (vCTO / DSI externalisé)",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function TPEPMEOffresSection() {
  return (
    <section id="offres" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-sm font-semibold text-[var(--primary-dark)]">
            Nos offres TPE / PME
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Des formules adaptées<br />à votre taille et vos ambitions
          </h2>
          <p className="text-lg text-gray-600">
            Nos offres packagées sont conçues pour les TPE et PME qui veulent un
            partenaire IT fiable, sans les contraintes d'une grande ESN. Tarification
            transparente, engagement clair, résultats mesurables.
          </p>
        </div>

        {/* Grille des offres */}
        <div className="grid gap-8 lg:grid-cols-3">
          {offres.map((offre) => (
            <div
              key={offre.id}
              className={`relative flex flex-col rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:shadow-xl ${offre.borderColor}`}
            >
              {/* Badge */}
              <div className="mb-6 flex items-start justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${offre.badgeColor}`}>
                  {offre.badge}
                </span>
                <div className={`${offre.accentColor}`}>{offre.icon}</div>
              </div>

              {/* Titre */}
              <h3 className="mb-1 text-2xl font-bold text-gray-900">{offre.title}</h3>
              <p className={`mb-4 text-sm font-medium ${offre.accentColor}`}>{offre.subtitle}</p>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">{offre.description}</p>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {offre.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className={`mt-0.5 h-4 w-4 shrink-0 ${offre.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Prix + CTA */}
              <div className="mt-auto">
                <div className="mb-4 text-center">
                  <span className="text-2xl font-bold text-gray-900">{offre.price}</span>
                </div>
                <a
                  href="/contact"
                  className={`block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${offre.btnClass}`}
                >
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note bas */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Vous avez des besoins spécifiques ?{" "}
          <a href="/contact" className="font-semibold text-[var(--primary)] hover:underline">
            Contactez-nous pour une offre personnalisée.
          </a>
        </p>
      </div>
    </section>
  );
}
