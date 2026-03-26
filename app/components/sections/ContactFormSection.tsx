"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  "Cybersécurité & conformité",
  "Infrastructure & Cloud",
  "Infogérance & Services Managés",
  "Ingénierie logicielle",
  "IA et automatisation",
  "DevOps et CI/CD",
  "Audit & conseil",
  "Autre",
];

const infos = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "contact@teknosure.fr",
    href: "mailto:contact@teknosure.fr",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: "Téléphone",
    value: "+33 1 46 88 49 75",
    href: "tel:+33146884975",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "Adresse",
    value: "16 rue de Condorcet, 95150 Taverny, France",
    href: "#",
  },
];

const atouts = [
  { emoji: "⚡", text: "Réponse sous 24h" },
  { emoji: "🎯", text: "Audit initial offert" },
  { emoji: "🤝", text: "Sans engagement" },
  { emoji: "🔒", text: "Données confidentielles" },
];

export default function ContactFormSection() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Une erreur est survenue. Veuillez réessayer.");
        return;
      }

      setSent(true);
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (name: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 ${
      focused === name
        ? "border-blue-500 bg-white ring-3 ring-blue-100"
        : "border-gray-200 bg-gray-50 hover:border-gray-300"
    }`;

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* ── Colonne gauche : infos ─────────────────────────────────── */}
          <div className="flex flex-col gap-10 lg:w-2/5 lg:pt-2">

            {/* Titre */}
            <div>
              <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Contact
              </span>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Parlons de{" "}
                <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  votre projet
                </span>
              </h1>
              <p className="text-base leading-relaxed text-gray-500">
                Une question, un projet, un audit à planifier ? Notre équipe vous répond
                sous 24h — sans engagement, sans jargon.
              </p>
            </div>

            {/* Coordonnées */}
            <div className="flex flex-col gap-4">
              {infos.map((info) => (
                <Link
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">{info.label}</p>
                    <p className="text-sm font-semibold text-gray-900">{info.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Atouts */}
            <div className="rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 p-6 text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-100">
                Pourquoi nous contacter ?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {atouts.map((a) => (
                  <div key={a.text} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5">
                    <span className="text-lg">{a.emoji}</span>
                    <span className="text-xs font-medium">{a.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              Équipe disponible du lundi au vendredi, 9h – 18h
            </div>
          </div>

          {/* ── Colonne droite : formulaire ───────────────────────────── */}
          <div className="flex-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
              {sent ? (
                /* Confirmation */
                <div className="flex flex-col items-center gap-6 py-12 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">Message envoyé !</h2>
                    <p className="text-gray-500">
                      Merci {form.prenom}, nous vous répondons sous 24h.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setError(null); setForm({ prenom: "", nom: "", email: "", telephone: "", entreprise: "", service: "", message: "" }); }}
                    className="rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                  <div className="mb-2">
                    <h2 className="text-xl font-bold text-gray-900">Envoyez-nous un message</h2>
                    <p className="mt-1 text-sm text-gray-400">Tous les champs marqués * sont obligatoires.</p>
                  </div>

                  {/* Message d'erreur */}
                  {error && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  {/* Prénom + Nom */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="prenom" className="text-xs font-semibold text-gray-700">Prénom *</label>
                      <input
                        ref={firstInputRef}
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        placeholder="Jean"
                        value={form.prenom}
                        onChange={handleChange}
                        onFocus={() => setFocused("prenom")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("prenom")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nom" className="text-xs font-semibold text-gray-700">Nom *</label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        placeholder="Dupont"
                        value={form.nom}
                        onChange={handleChange}
                        onFocus={() => setFocused("nom")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("nom")}
                      />
                    </div>
                  </div>

                  {/* Email + Téléphone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-700">Email professionnel *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jean@entreprise.fr"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("email")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telephone" className="text-xs font-semibold text-gray-700">Téléphone</label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder="+33 6 XX XX XX XX"
                        value={form.telephone}
                        onChange={handleChange}
                        onFocus={() => setFocused("telephone")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("telephone")}
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="entreprise" className="text-xs font-semibold text-gray-700">Entreprise</label>
                    <input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      placeholder="Nom de votre entreprise"
                      value={form.entreprise}
                      onChange={handleChange}
                      onFocus={() => setFocused("entreprise")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("entreprise")}
                    />
                  </div>

                  {/* Service concerné */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold text-gray-700">Service concerné *</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClass("service")} appearance-none pr-10`}
                      >
                        <option value="">Sélectionner un domaine...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-700">Votre message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Décrivez votre projet, vos besoins ou votre contexte..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`${inputClass("message")} resize-none`}
                    />
                  </div>

                  {/* Consentement */}
                  <label className="flex cursor-pointer items-start gap-3 text-xs text-gray-500">
                    <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 rounded accent-blue-600" />
                    <span>
                      J&apos;accepte que mes données soient utilisées pour traiter ma demande,
                      conformément à la{" "}
                      <Link href="/mentions-legales" className="font-medium text-blue-600 hover:underline">
                        politique de confidentialité
                      </Link>{" "}
                      de Teknosure.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-4 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
