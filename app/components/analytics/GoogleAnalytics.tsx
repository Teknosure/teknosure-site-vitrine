"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useCookieConsent } from "@/app/hooks/useCookieConsent";

// Extend window pour TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const { consent, isLoaded } = useCookieConsent();

  useEffect(() => {
    // Si le consentement n'est pas encore chargé ou si GA n'est pas configuré, on ne fait rien
    if (!isLoaded || !GA_ID || typeof window.gtag === "undefined") return;

    if (consent?.analytics) {
      // Activer le suivi
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    } else {
      // Désactiver le suivi (y compris si l'utilisateur révoque son consentement)
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }, [consent, isLoaded]);

  // Si pas de GA_ID configuré ou analytics refusé → on ne charge rien du tout
  if (!GA_ID || !consent?.analytics) return null;

  return (
    <>
      {/* Script principal Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/* Initialisation avec consentement activé */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Déclaration du consentement CNIL avant toute collecte
            gtag('consent', 'default', {
              analytics_storage: 'granted',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });

            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />
    </>
  );
}
