"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const subjects = [
  "Agent IA / Copilote métier",
  "Automatisation de processus (RPA)",
  "Analyse prédictive & Data",
  "Chatbot & IA conversationnelle",
  "IA générative & traitement documentaire",
  "MLOps & déploiement de modèles",
  "Audit & conseil IA",
  "Autre",
];

const points = [
  "POC livré en 2 à 4 semaines",
  "ROI mesuré et garanti avant industrialisation",
  "Intégration dans vos outils existants",
  "Équipe dédiée, interlocuteur unique",
];

export default function IAContactSection() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", entreprise: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          telephone: "",
          entreprise: form.entreprise,
          service: form.sujet,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Une erreur est survenue."); return; }
      setSent(true);
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full rounded-xl border px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30";

  return (
    <section className="relative min-h-[780px] overflow-hidden">

      {/* Fond */}
      <Image
        src="/images/dev-team.jpg"
        alt="IA & Automatisation — Passez à l'action"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/75 to-gray-900/40" />

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

        {/* Gauche */}
        <div className="flex-1 text-white">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-black/30 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Passez à l&apos;action
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            Votre premier agent IA{" "}
            <span className="bg-linear-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              en 4 semaines.
            </span>
          </h2>

          <p className="mb-8 text-base leading-relaxed text-gray-300">
            On ne vend pas de l&apos;IA pour faire moderne. On identifie avec vous le cas
            d&apos;usage à plus fort impact, on livre un POC rapidement, et on mesure
            les résultats avant d&apos;industrialiser.
          </p>

          <ul className="flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulaire */}
        <div className="w-full max-w-md shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:w-[440px]">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center text-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/20">
                <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-lg font-bold">Message envoyé !</p>
              <p className="text-sm text-gray-400">Nous vous revenons sous 24h pour cadrer votre projet IA.</p>
              <button onClick={() => setSent(false)} className="mt-2 rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-gray-900 transition hover:bg-amber-300">
                Nouveau message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <h3 className="mb-1 text-lg font-bold text-white">Démarrons votre projet IA</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-white/70">Prénom *</label>
                  <input name="prenom" type="text" required placeholder="Jean" value={form.prenom} onChange={handleChange} onFocus={() => setFocused("prenom")} onBlur={() => setFocused(null)} className={inputBase} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-white/70">Nom *</label>
                  <input name="nom" type="text" required placeholder="Dupont" value={form.nom} onChange={handleChange} onFocus={() => setFocused("nom")} onBlur={() => setFocused(null)} className={inputBase} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-white/70">Email *</label>
                <input name="email" type="email" required placeholder="jean@entreprise.fr" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} className={inputBase} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-white/70">Entreprise</label>
                <input name="entreprise" type="text" placeholder="Votre entreprise" value={form.entreprise} onChange={handleChange} onFocus={() => setFocused("entreprise")} onBlur={() => setFocused(null)} className={inputBase} />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-white/70">Cas d&apos;usage *</label>
                <div className="relative">
                  <select name="sujet" required value={form.sujet} onChange={handleChange} onFocus={() => setFocused("sujet")} onBlur={() => setFocused(null)} className={`${inputBase} appearance-none pr-8`}>
                    <option value="">Sélectionner...</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-white/70">Message *</label>
                <textarea name="message" required rows={4} placeholder="Décrivez votre processus à automatiser ou votre cas d'usage..." value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className={`${inputBase} resize-none`} />
              </div>

              <button type="submit" disabled={loading} className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-yellow-400 py-3.5 text-sm font-bold text-gray-900 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                {loading ? (<><svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Envoi en cours...</>) : "Lancer mon projet IA →"}
              </button>
              {error && <p className="text-center text-xs text-red-400">{error}</p>}
            </form>
          )}
        </div>

      </div>

      <style>{`
        option { background: #1f2937; color: white; }
      `}</style>
    </section>
  );
}
