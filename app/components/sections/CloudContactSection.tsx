"use client";

import Image from "next/image";
import { useState } from "react";

const subjects = [
  "Migration vers le cloud",
  "Infogérance & Monitoring",
  "Architecture Multi-Cloud",
  "Sécurité & Conformité Cloud",
  "Optimisation des coûts",
  "Backup & Disaster Recovery",
  "Autre",
];

export default function CloudContactSection() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", telephone: "", entreprise: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          telephone: form.telephone,
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

  return (
    <section className="relative min-h-[820px] overflow-hidden">
      <Image src="/images/dev-team.jpg" alt="Infrastructure cloud Teknosure" fill className="object-cover object-center" sizes="100vw" priority />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/70 to-slate-900/25" />

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col gap-12 px-5 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">

        {/* Gauche — caché sur mobile pour que le formulaire prenne tout */}
        <div className="hidden flex-1 text-white lg:flex lg:flex-col">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-blue-400/40 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary)]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">Audit offert</span>
          </div>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Votre infrastructure<br />
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              mérite mieux.
            </span>
          </h2>

          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
            Coûts mal maîtrisés, pannes récurrentes, migration bloquée ?
            Nos ingénieurs cloud analysent votre infrastructure et vous proposent
            un plan d&apos;action concret sous 48h.
          </p>

          <ul className="flex flex-col gap-3">
            {["Audit cloud gratuit", "Réponse sous 48h", "Engagement sur les SLA"].map((point) => (
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
        <div className="w-full shrink-0 rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:w-[480px]">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900">Demande reçue !</h3>
              <p className="text-sm text-gray-500">Notre équipe cloud vous contactera sous 48h avec un premier diagnostic.</p>
              <button onClick={() => setSent(false)} className="mt-2 text-sm font-medium text-[var(--primary)] hover:underline">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <h3 className="mb-1 text-xl font-bold text-gray-900">Parlons de votre infrastructure</h3>
              <p className="mb-2 text-xs text-gray-400">Les champs <span className="text-red-500">*</span> sont obligatoires.</p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[["cloud-prenom","prenom","Prénom *","text",true],["cloud-nom","nom","Nom *","text",true]].map(([id,name,ph,type,req]) => (
                  <div key={String(id)}>
                    <label htmlFor={String(id)} className="sr-only">{String(ph)}</label>
                    <input id={String(id)} name={String(name)} type={String(type)} required={Boolean(req)} placeholder={String(ph)} value={form[name as keyof typeof form]} onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="cloud-email" className="sr-only">Email</label>
                  <input id="cloud-email" name="email" type="email" required placeholder="Email *" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                </div>
                <div>
                  <label htmlFor="cloud-tel" className="sr-only">Téléphone</label>
                  <input id="cloud-tel" name="telephone" type="tel" placeholder="Téléphone" value={form.telephone} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
                </div>
              </div>

              <div>
                <label htmlFor="cloud-entreprise" className="sr-only">Entreprise</label>
                <input id="cloud-entreprise" name="entreprise" type="text" required placeholder="Entreprise *" value={form.entreprise} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
              </div>

              <div>
                <label htmlFor="cloud-sujet" className="sr-only">Besoin</label>
                <select id="cloud-sujet" name="sujet" required value={form.sujet} onChange={handleChange} className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]">
                  <option value="" disabled>Votre besoin principal *</option>
                  {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="cloud-message" className="sr-only">Message</label>
                <textarea id="cloud-message" name="message" rows={4} required placeholder="Décrivez votre infrastructure actuelle et vos objectifs... *" value={form.message} onChange={handleChange} className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)]" />
              </div>

              <button type="submit" disabled={loading} className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] py-3 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2">
                {loading ? (<><svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Envoi en cours...</>) : "Demander mon audit cloud gratuit"}
              </button>
              {error && <p className="text-center text-xs text-red-400">{error}</p>}
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
