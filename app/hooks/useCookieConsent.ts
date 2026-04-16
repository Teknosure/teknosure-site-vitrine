"use client";

import { useState, useEffect } from "react";

export type CookieConsent = {
  essential: true;        // toujours vrai, non modifiable
  analytics: boolean;
  marketing: boolean;
  consentDate: string;
  consentVersion: string;
};

const CONSENT_KEY = "teknosure_cookie_consent";
const CONSENT_VERSION = "1.0";
const CONSENT_TTL_MONTHS = 13; // Durée de validité du consentement (CNIL recommande 13 mois)

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        const parsed: CookieConsent = JSON.parse(stored);
        // Si la version du consentement a changé, on redemande
        if (parsed.consentVersion !== CONSENT_VERSION) {
          setShowBanner(true);
        } else {
          // Vérifier la durée de conservation : si le consentement est trop ancien,
          // on le considère expiré et on redemande le consentement.
          try {
            const consentDate = new Date(parsed.consentDate);
            const expiry = new Date(consentDate);
            expiry.setMonth(expiry.getMonth() + CONSENT_TTL_MONTHS);
            if (isNaN(consentDate.getTime()) || expiry < new Date()) {
              // Consentement expiré
              localStorage.removeItem(CONSENT_KEY);
              setShowBanner(true);
            } else {
              setConsent(parsed);
              setShowBanner(false);
            }
          } catch {
            // En cas d'erreur dans la date, redemander le consentement
            setShowBanner(true);
          }
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const acceptAll = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      consentDate: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      consentDate: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
  };

  const saveCustom = (analytics: boolean, marketing: boolean) => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics,
      marketing,
      consentDate: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
  };

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    isLoaded,
    acceptAll,
    rejectAll,
    saveCustom,
    resetConsent,
  };
}
