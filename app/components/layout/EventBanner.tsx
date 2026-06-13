"use client";

import { useState } from "react";
import Link from "next/link";

export default function EventBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const message =
    "ÉVÉNEMENT · 26 JUIN 2026 · Ateliers Cybersécurité à la carte — Dirigeants & Décideurs · Maison des Travaux Publics, Paris 8e · Participation OFFERTE sur invitation · Organisé par DATAPROTECT avec la participation de TEKNOSURE";

  return (
    <div className="fixed left-0 right-0 top-16 z-40 px-4 sm:top-20 sm:px-6">
      <div className="relative overflow-hidden rounded-xl border border-red-200 bg-white/95 shadow-md shadow-red-100/60 backdrop-blur-sm">

        {/* Shimmer */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(239,68,68,0.15) 40%, rgba(239,68,68,0.08) 50%, rgba(239,68,68,0.15) 60%, transparent 100%)",
            animation: "shimmer 4s ease-in-out infinite",
          }}
        />

        {/* Ligne rouge en haut */}
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="relative flex items-center py-2.5">

          {/* Badge événement */}
          <div className="shrink-0 pl-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-red-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              Événement
            </span>
          </div>

          {/* Texte défilant */}
          <div className="mx-4 flex-1 overflow-hidden">
            <div
              className="flex whitespace-nowrap"
              style={{ animation: "marquee 30s linear infinite" }}
            >
              {[message, message].map((txt, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-6 pr-16 text-sm font-semibold text-gray-700"
                >
                  {txt}
                  <Link
                    href="/evenement/ateliers-cybersecurite"
                    className="inline-flex items-center gap-1 rounded-full border border-red-300 bg-red-50 px-3 py-0.5 text-xs font-bold text-red-600 transition-all hover:bg-red-100 hover:text-red-700"
                  >
                    En savoir plus →
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Bouton fermer */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Fermer le bandeau"
            className="shrink-0 pr-4 text-gray-400 transition-colors hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50%       { opacity: 1; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
