import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ateliers Cybersécurité — 26 Juin 2026 | Teknosure",
  description:
    "Teknosure participe aux Ateliers Cybersécurité à la carte le 26 juin 2026 à Paris. Une journée d'ateliers pratiques pour dirigeants et décideurs : gestion de crise, facteur humain, fintech, pentest & SOC. Cocktail malgache à 17h.",
  openGraph: {
    title: "Ateliers Cybersécurité — 26 Juin 2026",
    description:
      "Une journée d'ateliers pratiques pour anticiper, réagir et se protéger face aux cybermenaces. Participation offerte sur invitation.",
    url: "https://www.teknosure.com/evenement/ateliers-cybersecurite",
  },
};

interface Atelier {
  num: string;
  icon: ReactNode;
  iconBg: string;
  titre: string;
  sous_titre: string;
  points: string[];
  color: string;
  badge: string;
}

const ateliers: Atelier[] = [
  {
    num: "01",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    iconBg: "bg-red-100 text-red-600",
    titre: "Gestion de crise",
    sous_titre: "Réagir efficacement",
    points: [
      "Plan de réponse à incident",
      "Organisation cellule de crise",
      "Communication légale",
      "Simulation ransomware",
    ],
    color: "border-red-200 bg-red-50",
    badge: "bg-red-100 text-red-700",
  },
  {
    num: "02",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    iconBg: "bg-orange-100 text-orange-600",
    titre: "Facteur Humain",
    sous_titre: "La première ligne de défense",
    points: [
      "Sensibilisation",
      "Culture cybersécurité",
      "Phishing & fraude",
      "Bonnes pratiques",
    ],
    color: "border-orange-200 bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    num: "03",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    iconBg: "bg-blue-100 text-blue-600",
    titre: "Fintech",
    sous_titre: "Sécuriser les flux financiers",
    points: [
      "API & paiements sécurisés",
      "Fraude bancaire & deepfakes",
      "Protection des données",
      "Conformité (NIS2, DORA)",
    ],
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    num: "04",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    iconBg: "bg-violet-100 text-violet-600",
    titre: "Pentest & SOC",
    sous_titre: "Anticiper et détecter",
    points: [
      "Tests d'intrusion",
      "Audit & amélioration continue",
      "Supervision (SIEM, EDR, XDR)",
      "Détection en temps réel",
    ],
    color: "border-violet-200 bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
  },
];

const intervenants = [
  { nom: "Eric Rakotomaniraka", role: "Directeur CIRST de Madagascar" },
  { nom: "Hamad Witti", role: "CEO Teknosure · Djibouti Cybersécurité" },
  { nom: "Mohamed Hmeimed", role: "CEO Next Technology · Mauritanie Cybersécurité" },
  { nom: "Youssef Dadi", role: "Awarino · Facteur humain & Sensibilisation" },
  { nom: "Patrick Leraie", role: "Daspren · Contrôlez l'IA, détectez les usages, contrôlez vos données" },
  { nom: "Nicolas Bodin", role: "Label4AI · « On peut tout imiter, même vous. Intercepter les deepfakes avant impact. »" },
  { nom: "Mohamed Hadrami", role: "Dataprotect · Gestion de crise, SOC, Pentests" },
];

const partenaires = ["AWARINO", "NEXT TECH. MAURITANIE", "AREEA"];

export default function AteliersCybersecuritePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-800/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">

            {/* Texte */}
            <div className="flex-1 text-center lg:text-left">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                Événement — 26 Juin 2026
              </span>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Ateliers<br />
                <span className="text-red-500">Cybersécurité</span>
              </h1>
              <p className="mt-2 text-lg font-medium text-gray-400">
                À la carte — Dirigeants & Décideurs
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-300">
                Une journée d&apos;ateliers pratiques et d&apos;échanges pour anticiper,
                réagir et se protéger face aux cybermenaces.
              </p>

              {/* Infos pratiques */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="text-sm font-bold text-white">26 Juin 2026</p>
                    <p className="text-xs text-gray-400">9h00 – 18h00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Lieu</p>
                    <p className="text-sm font-bold text-white">Maison des Travaux Publics</p>
                    <p className="text-xs text-gray-400">3, rue de Berri — 75008 Paris</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-green-600">Accès</p>
                    <p className="text-sm font-bold text-green-400">Participation offerte</p>
                    <p className="text-xs text-green-600">Sur invitation uniquement</p>
                  </div>
                </div>
              </div>

              {/* CTA inscription */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.europe-northafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-xl"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  S&apos;inscrire en ligne
                </a>
                <a
                  href="mailto:oualid.louhibi@teknosure.com?subject=CYBER"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  oualid.louhibi@teknosure.com
                </a>
              </div>
            </div>

            {/* Programme PDF */}
            <div className="w-full shrink-0 lg:w-[340px]">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-red-900/30">
                <iframe
                  src="/documents/ateliers-cybersecurite.pdf"
                  className="h-[480px] w-full bg-white"
                  title="Programme Ateliers Cybersécurité 26 Juin 2026"
                />
              </div>
              <a
                href="/documents/ateliers-cybersecurite.pdf"
                download
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Télécharger le programme
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Organisateur ─────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-gray-50 py-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500">
            Organisés et animés par{" "}
            <span className="font-bold text-gray-900">DATAPROTECT & SES PARTENAIRES</span>{" "}
            — avec la participation de{" "}
            <span className="font-bold text-[var(--primary)]">Teknosure</span>
          </p>
        </div>
      </section>

      {/* ── Programme ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-600">
              Déroulement
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Programme de la journée
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Matin */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Programme général</p>
                  <p className="text-lg font-extrabold text-gray-900">09h00 – 12h30</p>
                </div>
              </div>
              <ol className="flex flex-col gap-4">
                {[
                  { heure: "08h30", label: "Accueil et remise des badges" },
                  { heure: "09h00", label: "Table ronde : Cybersécurité et Fintech, enjeux et perspectives" },
                  { heure: "10h00", label: "Représentant de la Gendarmerie nationale — « Cybercriminalité, ransomware et résilience : retours d'expérience des services de l'État »" },
                  { heure: "11h00", label: "Ateliers Cybersécurité" },
                  { heure: "12h00", label: "Pause-café et échanges dans l'exposition" },
                ].map((item) => (
                  <li key={item.heure} className="flex gap-4">
                    <span className="w-12 shrink-0 text-xs font-bold text-gray-400">{item.heure}</span>
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Après-midi */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Entretiens partenaires</p>
                    <p className="text-lg font-extrabold text-gray-900">14h00 – 18h00</p>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  Rencontrez en tête-à-tête les experts, partenaires et solutions
                  pour vos projets cybersécurité et transformation digitale.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Échanges ciblés", "Retours d'expérience", "Solutions adaptées", "Opportunités business"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                      <svg className="h-3.5 w-3.5 shrink-0 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cocktail */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-600">À partir de 17h00</p>
                    <p className="text-lg font-extrabold text-gray-900">Cocktail Malgache</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Un moment convivial pour prolonger les échanges dans une ambiance
                  chaleureuse et authentique !
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4 ateliers ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
              Ateliers
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              4 ateliers au cœur des enjeux 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ateliers.map((atelier) => (
              <div key={atelier.titre} className={`rounded-2xl border p-7 ${atelier.color}`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${atelier.iconBg}`}>
                    {atelier.icon}
                  </div>
                  <div>
                    <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${atelier.badge}`}>
                      {atelier.titre}
                    </span>
                    <p className="mt-0.5 text-sm font-semibold text-gray-700">{atelier.sous_titre}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {atelier.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intervenants ─────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-600">
              Speakers
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Intervenants experts
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {intervenants.map((i) => (
              <div key={i.nom} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{i.nom}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{i.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Public cible ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-8 text-2xl font-extrabold text-gray-900">
            À qui s&apos;adresse cet événement ?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dirigeants", "DSI", "RSSI", "Responsables risques", "Responsables conformité"].map((p) => (
              <span key={p} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="h-5 w-5 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
              Networking de qualité
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="h-5 w-5 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              Intervenants experts & retours terrain
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Participation offerte
            </div>
          </div>
        </div>
      </section>

      {/* ── Partenaires ──────────────────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
            Partenaires de l&apos;événement
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partenaires.map((p) => (
              <span key={p} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-500">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Dans le cadre de la 21e Convention Europe – Afrique du Nord ·
            Un rendez-vous Europe – Afrique pour une cybersécurité partagée
          </p>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Places limitées — Sur invitation
          </h2>
          <p className="mt-4 text-gray-400">
            Inscription simple et rapide sur{" "}
            <a href="https://www.europe-northafrica.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-2 hover:text-gray-200">
              europe-northafrica.com
            </a>{" "}
            ou contactez directement notre équipe.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.europe-northafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:-translate-y-0.5 hover:bg-red-500"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              europe-northafrica.com
            </a>
            <a
              href="mailto:oualid.louhibi@teknosure.com?subject=CYBER"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              oualid.louhibi@teknosure.com
            </a>
            <a
              href="tel:+33698374200"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +33 6 98 37 42 00
            </a>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <Link href="/" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              ← Retour au site Teknosure
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
