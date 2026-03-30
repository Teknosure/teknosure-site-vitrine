"use client";

import Image from "next/image";
import { useState } from "react";

const subjects = [
  "Support IT externalisé",
  "SOC & supervision sécurité",
  "Gestion des incidents",
  "Maintenance & mises à jour",
  "Sauvegarde & PRA",
  "Conseil & Gouvernance IT",
  "Autre",
];

export default function InfogeranceContactSection() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", telephone: "", entreprise: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section className="relative min-h-[820px] overflow-hidden">
      <Image src="/images/dev-team.jpg" alt="Infogérance Teknosure" fill className="object-cover object-center" sizes="100vw" priority />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/25" />

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

        {/* Gauche */}
        <div className="flex-1 text-white">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-blue-400/40 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary)]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">Disponibles 24/7</span>
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Votre IT mérite<br />
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              d&apos;être entre de bonnes mains.
            </span>
          </h2>

          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
            Support surchargé, incidents récurrents, équipe IT débordée ?
            Confiez-nous la gestion de votre système d&apos;information et
            concentrez-vous sur ce qui compte vraiment.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Prise en charge sous 4h",
              "SLA garantis contractuellement",
              "Interlocuteur dédié",
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

        {/* Droite — formulaire */}
        <div className="w-full max-w-lg shrink-0 rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-md lg:w-[480px]">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900">Demande reçue !</h3>
              <p className="text-sm text-gray-500">Notre équipe vous contactera sous 4h pour un premier échange.</p>
              <button onClick={() => setSent(false)} className="mt-2 text-sm font-medium text-[var(--primary)] hover:underline">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <h3 className="mb-1 text-xl font-bold text-gray-900">Confiez-nous votre IT</h3>
              <p className="mb-2 text-xs text-gray-400">Les champs <span className="text-red-500">*</span> sont obligatoires.</p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="it-prenom" className="sr-only">Prénom</label>
                  <input id="it-prenom" name="prenom" type="text" required placeholder="Prénom *" value={form.prenom} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                </div>
                <div>
                  <label htmlFor="it-nom" className="sr-only">Nom</label>
                  <input id="it-nom" name="nom" type="text" required placeholder="Nom *" value={form.nom} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="it-email" className="sr-only">Email</label>
                  <input id="it-email" name="email" type="email" required placeholder="Email *" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                </div>
                <div>
                  <label htmlFor="it-tel" className="sr-only">Téléphone</label>
                  <input id="it-tel" name="telephone" type="tel" placeholder="Téléphone" value={form.telephone} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                </div>
              </div>

              <div>
                <label htmlFor="it-entreprise" className="sr-only">Entreprise</label>
                <input id="it-entreprise" name="entreprise" type="text" required placeholder="Entreprise *" value={form.entreprise} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
              </div>

              <div>
                <label htmlFor="it-sujet" className="sr-only">Service</label>
                <select id="it-sujet" name="sujet" required value={form.sujet} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]">
                  <option value="" disabled>Service recherché *</option>
                  {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="it-message" className="sr-only">Message</label>
                <textarea id="it-message" name="message" rows={4} required placeholder="Décrivez votre environnement IT, vos contraintes et vos attentes... *" value={form.message} onChange={handleChange} className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
              </div>

              <button type="submit" className="mt-1 w-full rounded-lg bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] py-3 text-sm font-bold text-white shadow-md transition-all hover:from-blue-500 hover:to-cyan-400 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2">
                Demander un devis gratuit
              </button>
              <p className="text-center text-xs text-gray-400">
                En soumettant ce formulaire, vous acceptez notre <a href="/legal" className="text-[var(--primary)] hover:underline">politique de confidentialité</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
