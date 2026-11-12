"use client";

import { useState } from "react";

const subjects = [
  "Pack Sérénité",
  "Pack Croissance",
  "Pack Digital +",
  "Offre sur mesure",
  "Autre demande",
];

export default function TPEPMEContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      employees: (form.elements.namedItem("employees") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Gauche : infos */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-sm font-semibold text-[var(--primary-dark)]">
              Contactez-nous
            </span>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Parlons de votre<br />projet IT
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Que vous ayez un besoin urgent ou un projet à mûrir, notre équipe
              vous répond sous 24h et vous propose un devis personnalisé.
            </p>

            {/* Garanties */}
            <div className="space-y-4">
              {[
                { icon: "⚡", label: "Réponse sous 24h ouvrées" },
                { icon: "🔍", label: "Analyse de votre besoin & devis sous 48h" },
                { icon: "🤝", label: "Devis personnalisé sous 48h" },
                { icon: "🔒", label: "Confidentialité garantie" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Droite : formulaire */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Message envoyé !</h3>
                <p className="text-sm text-gray-600">
                  Merci pour votre message. Notre équipe vous contactera dans les 24h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="tpe-name" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="tpe-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                    />
                  </div>
                  <div>
                    <label htmlFor="tpe-email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Email professionnel <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="tpe-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jean@entreprise.fr"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="tpe-company" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Nom de l&apos;entreprise
                    </label>
                    <input
                      id="tpe-company"
                      name="company"
                      type="text"
                      placeholder="Ma Société SARL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                    />
                  </div>
                  <div>
                    <label htmlFor="tpe-phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      id="tpe-phone"
                      name="phone"
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="tpe-subject" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Offre qui vous intéresse <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="tpe-subject"
                      name="subject"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                    >
                      <option value="">Sélectionner…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tpe-employees" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Taille de l&apos;entreprise
                    </label>
                    <select
                      id="tpe-employees"
                      name="employees"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                    >
                      <option value="">Sélectionner…</option>
                      <option value="1-5">1 à 5 employés</option>
                      <option value="6-20">6 à 20 employés</option>
                      <option value="21-50">21 à 50 employés</option>
                      <option value="51-100">51 à 100 employés</option>
                      <option value="100+">Plus de 100 employés</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="tpe-message" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Décrivez votre besoin
                  </label>
                  <textarea
                    id="tpe-message"
                    name="message"
                    rows={4}
                    placeholder="Parlez-nous de votre infrastructure actuelle, vos défis, vos objectifs…"
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-20"
                  />
                </div>

                {error && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
                >
                  {loading ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
