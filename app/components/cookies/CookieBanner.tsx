"use client";

import { useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/app/hooks/useCookieConsent";

export default function CookieBanner() {
  const { showBanner, isLoaded, acceptAll, rejectAll, saveCustom } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  // Ne rien afficher tant que localStorage n'est pas lu (évite le flash)
  if (!isLoaded || !showBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] w-full"
    >
      {/* Overlay sombre sur mobile */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm md:hidden" />

      <div className="relative mx-auto max-w-5xl m-4 rounded-2xl border border-gray-200 bg-white shadow-2xl">

        {/* Bandeau principal */}
        <div className="p-6">
          {/* Icône + titre */}
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-light)]">
              <svg className="h-5 w-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 8v4m0 4h.01" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Votre vie privée nous importe
              </h2>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies essentiels sont
                nécessaires au bon fonctionnement du site. Les autres nous aident à comprendre comment vous naviguez.{" "}
                <Link href="/cookies" className="font-medium text-[var(--primary)] hover:underline">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>

          {/* Panneau de personnalisation (masqué par défaut) */}
          {showDetails && (
            <div className="mb-5 rounded-xl border border-gray-100 bg-gray-50 p-4 space-y-3">
              {/* Cookie essentiel — toujours activé */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-800">🔒 Cookies essentiels</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Indispensables au fonctionnement du site (session, sécurité). Ne peuvent pas être désactivés.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    Toujours actif
                  </span>
                </div>
              </div>

              {/* Cookie analytique */}
              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">📊 Cookies analytiques</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Statistiques anonymes de navigation pour améliorer le site (ex. : pages visitées, durée de session).
                  </p>
                </div>
                <label className="relative shrink-0 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  />
                  <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-[var(--primary)] after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
                </label>
              </div>

              {/* Cookie marketing */}
              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">📢 Cookies marketing</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Publicités personnalisées et mesure de performance des campagnes. Les données peuvent être
                    partagées avec des partenaires tiers.
                  </p>
                </div>
                <label className="relative shrink-0 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={marketingChecked}
                    onChange={(e) => setMarketingChecked(e.target.checked)}
                  />
                  <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-[var(--primary)] after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
                </label>
              </div>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={acceptAll}
              className="flex-1 min-w-[140px] rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--primary-dark)] hover:shadow-md active:scale-95"
            >
              Tout accepter
            </button>
            <button
              onClick={rejectAll}
              className="flex-1 min-w-[140px] rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-95"
            >
              Tout refuser
            </button>
            {showDetails ? (
              <button
                onClick={() => saveCustom(analyticsChecked, marketingChecked)}
                className="flex-1 min-w-[140px] rounded-xl border border-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary-light)] active:scale-95"
              >
                Enregistrer mes choix
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 min-w-[140px] rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-95"
              >
                Personnaliser
              </button>
            )}
          </div>

          {/* Mention RGPD discrète */}
          <p className="mt-3 text-center text-xs text-gray-400">
            Conforme au RGPD et aux recommandations de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              CNIL
            </a>
            . Votre choix est mémorisé pendant 13 mois.
          </p>
        </div>
      </div>
    </div>
  );
}
