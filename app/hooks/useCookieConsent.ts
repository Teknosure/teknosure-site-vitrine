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
          setConsent(parsed);
          setShowBanner(false);
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
