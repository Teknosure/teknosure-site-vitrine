"use client";

import Image from "next/image";
import { useState } from "react";

const subjects = [
  "Audit de sécurité",
  "Tests d'intrusion (Pentest)",
  "SOC Managé 24/7",
  "Conformité ISO 27001 / NIS2 / RGPD",
  "Formation & Sensibilisation",
  "Réponse aux incidents",
  "Autre",
];

export default function CyberContactSection() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    sujet: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative min-h-[820px] overflow-hidden">

      {/* Image de fond */}
      <Image
        src="/images/cyber-women-contact1.jpg"
        alt="Cybersécurité — Passez à l'action"
        fill
        className="object-cover object-[60%_center]"
        sizes="100vw"
        priority
      />
      {/* Overlay : fort à gauche pour lisibilité du texte, s'efface à droite pour voir la femme */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

        {/* Gauche : accroche */}
        <div className="flex-1 text-white">
          {/* Badge animé — style terminal cyber */}
          <div className="mb-4 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-cyan-500/50 bg-black/40 px-4 py-1.5 backdrop-blur-sm" style={{ position: "relative" }}>
            {/* Scan line qui traverse le badge */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" style={{ animation: "badgeScan 2.5s ease-in-out infinite" }} />
            {/* Ping dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            {/* Texte avec effet glitch */}
            <span
              className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300"
              style={{ animation: "glitchText 4s infinite" }}
            >
              Passez à l&apos;action
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            Avant la prochaine <br />attaque,{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              parlons.
            </span>
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
            Une faille non détectée peut coûter bien plus qu&apos;un audit.
            Nos experts analysent votre posture de sécurité et vous proposent
            un plan d&apos;action concret — sans engagement.
          </p>

          {/* Points clés */}
          <ul className="flex flex-col gap-3">
            {[
              "Audit initial offert",
              "Réponse sous 24h",
              "Confidentialité garantie",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-white/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-400">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Droite : formulaire card */}
        <div className="w-full max-w-lg shrink-0 rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-md lg:w-[480px]">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900">Message envoyé !</h3>
              <p className="text-sm text-gray-500">
                Notre équipe vous contactera sous 24h pour organiser votre audit.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-sm font-medium text-[var(--primary)] hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <h3 className="mb-1 text-xl font-bold text-gray-900">
                Parlons de votre projet
              </h3>
              <p className="mb-2 text-xs text-gray-400">
                Tous les champs marqués <span className="text-red-500">*</span> sont obligatoires.
              </p>

              {/* Prénom + Nom */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="prenom" className="sr-only">Prénom</label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    placeholder="Prénom *"
                    value={form.prenom}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="sr-only">Nom</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    placeholder="Nom *"
                    value={form.nom}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                  />
                </div>
              </div>

              {/* Email + Téléphone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">Téléphone</label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Téléphone"
                    value={form.telephone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                  />
                </div>
              </div>

              {/* Entreprise */}
              <div>
                <label htmlFor="entreprise" className="sr-only">Entreprise</label>
                <input
                  id="entreprise"
                  name="entreprise"
                  type="text"
                  required
                  placeholder="Entreprise *"
                  value={form.entreprise}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                />
              </div>

              {/* Sujet */}
              <div>
                <label htmlFor="sujet" className="sr-only">Sujet</label>
                <select
                  id="sujet"
                  name="sujet"
                  required
                  value={form.sujet}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] disabled:text-gray-400"
                >
                  <option value="" disabled>Sujet de votre demande *</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Décrivez votre projet ou vos besoins... *"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 w-full rounded-lg bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] py-3 text-sm font-bold text-white shadow-md transition-all hover:from-blue-500 hover:to-cyan-400 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
              >
                Demander mon audit gratuit
              </button>

              <p className="text-center text-xs text-gray-400">
                En soumettant ce formulaire, vous acceptez notre{" "}
                <a href="/legal" className="text-[var(--primary)] hover:underline">
                  politique de confidentialité
                </a>.
              </p>
            </form>
          )}
        </div>

      </div>

      <style>{`
        @keyframes badgeScan {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(300%); }
          100% { transform: translateX(300%); }
        }

        @keyframes glitchText {
          0%, 85%, 100% {
            text-shadow: none;
            transform: none;
            opacity: 1;
          }
          87% {
            text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff;
            transform: translateX(-2px);
            opacity: 0.9;
          }
          89% {
            text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
            transform: translateX(2px);
            opacity: 1;
          }
          91% {
            text-shadow: -1px 0 #00ffff;
            transform: translateX(0);
            opacity: 0.85;
          }
          93% {
            text-shadow: none;
            transform: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
