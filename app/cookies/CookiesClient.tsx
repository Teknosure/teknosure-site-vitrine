"use client";

import Link from "next/link";
import { useCookieConsent } from "@/app/hooks/useCookieConsent";

const cookieTable = [
  {
    category: "Essentiels",
    color: "green",
    description:
      "Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.",
    cookies: [
      {
        name: "teknosure_cookie_consent",
        provider: "Teknosure (1st party)",
        purpose: "Mémorise vos préférences de consentement aux cookies",
        duration: "13 mois",
        type: "localStorage",
      },
      {
        name: "__next_*",
        provider: "Next.js (1st party)",
        purpose: "Fonctionnement technique du framework Next.js (prérendu, navigation)",
        duration: "Session",
        type: "Cookie HTTP",
      },
    ],
  },
  {
    category: "Analytiques",
    color: "blue",
    description:
      "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec le site. Toutes les données sont anonymisées.",
    cookies: [
      {
        name: "_ga, _ga_*",
        provider: "Google Analytics (3rd party)",
        purpose: "Mesure d'audience anonymisée : pages vues, durée de session, source du trafic",
        duration: "2 ans",
        type: "Cookie HTTP",
      },
      {
        name: "_gid",
        provider: "Google Analytics (3rd party)",
        purpose: "Distinction des utilisateurs pour les statistiques journalières",
        duration: "24 heures",
        type: "Cookie HTTP",
      },
    ],
  },
  {
    category: "Marketing",
    color: "orange",
    description:
      "Ces cookies permettent d'afficher des publicités personnalisées et de mesurer l'efficacité des campagnes.",
    cookies: [
      {
        name: "_fbp",
        provider: "Meta / Facebook (3rd party)",
        purpose: "Suivi des conversions et retargeting publicitaire via Facebook Ads",
        duration: "3 mois",
        type: "Cookie HTTP",
      },
      {
        name: "li_*",
        provider: "LinkedIn (3rd party)",
        purpose: "Mesure des campagnes LinkedIn Ads et personnalisation des publicités B2B",
        duration: "6 mois",
        type: "Cookie HTTP",
      },
    ],
  },
];

const colorMap: Record<string, { badge: string; dot: string }> = {
  green: {
    badge: "bg-green-100 text-green-700 border-green-200",
    dot: "bg-green-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  orange: {
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    dot: "bg-orange-500",
  },
};

function CookiePreferencesButton() {
  const { resetConsent } = useCookieConsent();
  return (
    <button
      onClick={resetConsent}
      className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--primary-dark)] hover:shadow-md active:scale-95"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Gérer mes préférences cookies
    </button>
  );
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-light)]">
            <svg className="h-7 w-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Politique des cookies</h1>
          <p className="mt-3 text-base text-gray-500">
            Dernière mise à jour : 14 avril 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10 rounded-2xl border border-[var(--primary-border)] bg-[var(--primary-light)] p-6">
          <h2 className="mb-2 text-lg font-semibold text-[var(--primary-dark)]">Qu'est-ce qu'un cookie ?</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de
            votre visite sur un site web. Il permet au site de mémoriser vos préférences, d'analyser la fréquentation
            ou de personnaliser votre expérience. Conformément au RGPD et aux recommandations de la{" "}
            <a href="https://www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi" target="_blank" rel="noopener noreferrer"
              className="font-medium text-[var(--primary)] hover:underline">
              CNIL
            </a>
            , tout cookie non essentiel nécessite votre consentement préalable.
          </p>
        </div>

        {/* Tableau des cookies par catégorie */}
        <div className="space-y-8">
          {cookieTable.map((cat) => {
            const colors = colorMap[cat.color];
            return (
              <div key={cat.category} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* En-tête catégorie */}
                <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-6 py-4">
                  <span className={`flex h-2.5 w-2.5 rounded-full ${colors.dot}`} />
                  <h3 className="font-semibold text-gray-800">Cookies {cat.category}</h3>
                  <span className={`ml-auto rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}>
                    {cat.category === "Essentiels" ? "Obligatoire" : "Optionnel"}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm text-gray-600">{cat.description}</p>
                  {/* Tableau */}
                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wide text-gray-500">
                        <tr>
                          <th className="px-4 py-3 text-left">Nom</th>
                          <th className="px-4 py-3 text-left">Fournisseur</th>
                          <th className="px-4 py-3 text-left">Finalité</th>
                          <th className="px-4 py-3 text-left">Durée</th>
                          <th className="px-4 py-3 text-left">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {cat.cookies.map((cookie, i) => (
                          <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-4 py-3 font-mono text-xs text-gray-800">{cookie.name}</td>
                            <td className="px-4 py-3 text-gray-600">{cookie.provider}</td>
                            <td className="px-4 py-3 text-gray-600">{cookie.purpose}</td>
                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{cookie.duration}</td>
                            <td className="px-4 py-3 text-gray-600">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gérer ses préférences */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">Modifier vos préférences</h2>
          <p className="mb-5 text-sm text-gray-600">
            Vous pouvez modifier vos préférences cookies à tout moment. Votre nouveau choix sera mémorisé pendant
            13 mois conformément aux recommandations CNIL.
          </p>
          <CookiePreferencesButton />
        </div>

        {/* Liens utiles */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link href="/politique-de-confidentialite" className="hover:text-[var(--primary)] hover:underline">
            Politique de confidentialité
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/mentions-legales" className="hover:text-[var(--primary)] hover:underline">
            Mentions légales
          </Link>
          <span className="text-gray-300">·</span>
          <a href="mailto:contact@teknosure.com" className="hover:text-[var(--primary)] hover:underline">
            Contacter le DPO
          </a>
        </div>

      </div>
    </main>
  );
}
