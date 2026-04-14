import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Teknosure — traitement des données personnelles, droits RGPD, et contacts du DPO.",
};

const sections = [
  {
    id: "responsable",
    title: "1. Responsable du traitement",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Le responsable du traitement de vos données personnelles est la société <strong>Teknosure</strong>,
          SAS au capital de [capital social] €, immatriculée au RCS de [ville] sous le numéro [SIRET],
          dont le siège social est situé au :
        </p>
        <address className="not-italic rounded-xl bg-gray-50 p-4 border border-gray-100">
          <strong>Teknosure</strong><br />
          16 rue de Condorcet<br />
          95150 Taverny<br />
          France<br />
          <a href="mailto:contact@teknosure.fr" className="text-[var(--primary)] hover:underline">
            contact@teknosure.fr
          </a><br />
          Tél. : +33 1 46 88 49 75
        </address>
      </div>
    ),
  },
  {
    id: "donnees-collectees",
    title: "2. Données collectées",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>Nous collectons les catégories de données suivantes :</p>
        <ul className="space-y-2 list-none">
          {[
            ["Données d'identification", "Nom, prénom, adresse e-mail, numéro de téléphone, nom de l'entreprise"],
            ["Données de navigation", "Adresse IP, pages consultées, durée de visite, type de navigateur (via cookies analytiques)"],
            ["Données de communication", "Contenu des messages envoyés via le formulaire de contact"],
            ["Données de prospection", "Informations sur votre projet ou besoin IT transmises volontairement"],
          ].map(([titre, desc]) => (
            <li key={titre} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              </span>
              <span><strong>{titre} :</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "finalites",
    title: "3. Finalités et bases légales",
    content: (
      <div className="overflow-x-auto rounded-xl border border-gray-100 text-sm">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Finalité</th>
              <th className="px-4 py-3 text-left">Base légale (RGPD)</th>
              <th className="px-4 py-3 text-left">Durée de conservation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-600">
            {[
              ["Traitement des demandes de contact", "Intérêt légitime (Art. 6.1.f)", "3 ans après le dernier contact"],
              ["Gestion de la relation commerciale", "Exécution du contrat (Art. 6.1.b)", "Durée du contrat + 5 ans"],
              ["Envoi de communications commerciales", "Consentement (Art. 6.1.a)", "3 ans ou retrait du consentement"],
              ["Statistiques de navigation anonymes", "Consentement (Art. 6.1.a)", "13 mois (cookies)"],
              ["Respect des obligations légales", "Obligation légale (Art. 6.1.c)", "Selon durée légale applicable"],
            ].map(([f, b, d]) => (
              <tr key={f} className="hover:bg-gray-50/50">
                <td className="px-4 py-3">{f}</td>
                <td className="px-4 py-3">{b}</td>
                <td className="px-4 py-3 whitespace-nowrap">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "destinataires",
    title: "4. Destinataires des données",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>Vos données peuvent être transmises aux destinataires suivants :</p>
        <ul className="space-y-2">
          {[
            "Les collaborateurs habilités de Teknosure (équipes commerciale, technique et administrative)",
            "Nos sous-traitants techniques (hébergeur, outil CRM, plateforme e-mail), liés par un contrat de traitement de données (DPA)",
            "Les autorités compétentes en cas d'obligation légale",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-gray-600">
              <span className="mt-1 text-[var(--primary)]">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2">
          <strong>Transferts hors UE :</strong> Certains de nos outils (ex. : Google Analytics) peuvent impliquer
          un transfert de données vers les États-Unis. Ces transferts sont encadrés par les Clauses Contractuelles
          Types (CCT) de la Commission Européenne.
        </p>
      </div>
    ),
  },
  {
    id: "droits",
    title: "5. Vos droits",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants sur vos données personnelles :
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["🔍 Droit d'accès", "Obtenir une copie des données que nous détenons sur vous"],
            ["✏️ Droit de rectification", "Corriger des données inexactes ou incomplètes"],
            ["🗑️ Droit à l'effacement", "Demander la suppression de vos données (sous conditions)"],
            ["⏸️ Droit à la limitation", "Suspendre le traitement de vos données"],
            ["📦 Droit à la portabilité", "Recevoir vos données dans un format structuré et lisible"],
            ["🚫 Droit d'opposition", "Vous opposer au traitement basé sur l'intérêt légitime"],
            ["↩️ Retrait du consentement", "Retirer votre consentement à tout moment sans rétroactivité"],
            ["🏛️ Droit de réclamation", "Saisir la CNIL si vous estimez que vos droits ne sont pas respectés"],
          ].map(([titre, desc]) => (
            <div key={titre} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
              <p className="font-medium text-gray-800">{titre}</p>
              <p className="mt-0.5 text-xs text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-2">
          Pour exercer vos droits, contactez notre DPO à l'adresse :{" "}
          <a href="mailto:dpo@teknosure.fr" className="font-medium text-[var(--primary)] hover:underline">
            dpo@teknosure.fr
          </a>.
          Nous répondons dans un délai maximum d'<strong>1 mois</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "securite",
    title: "6. Sécurité des données",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Teknosure met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
        contre tout accès non autorisé, toute divulgation, altération ou destruction. Ces mesures incluent le
        chiffrement des données en transit (TLS/HTTPS), des contrôles d'accès stricts, des audits de sécurité
        réguliers et la formation de nos équipes aux bonnes pratiques de cybersécurité.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Pour en savoir plus sur les cookies que nous utilisons et gérer vos préférences, consultez notre{" "}
        <Link href="/cookies" className="font-medium text-[var(--primary)] hover:underline">
          politique des cookies
        </Link>.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "8. Modifications",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. En cas de
        modification substantielle, nous vous en informerons par un avis visible sur le site. La date de dernière mise
        à jour est indiquée en haut de cette page.
      </p>
    ),
  },
];

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-light)]">
            <svg className="h-7 w-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Politique de confidentialité</h1>
          <p className="mt-3 text-base text-gray-500">
            Dernière mise à jour : 14 avril 2026
          </p>
        </div>

        {/* Sommaire */}
        <nav className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">Sommaire</h2>
          <ol className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-gray-700 hover:text-[var(--primary)] hover:underline transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-base font-semibold text-gray-900">{s.title}</h2>
              {s.content}
            </section>
          ))}
        </div>

        {/* Contact DPO */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] p-6 text-white text-center shadow-lg">
          <h2 className="text-lg font-semibold">Une question sur vos données ?</h2>
          <p className="mt-2 text-sm text-white/80">
            Notre Délégué à la Protection des Données (DPO) est à votre disposition.
          </p>
          <a
            href="mailto:dpo@teknosure.fr"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] shadow transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            dpo@teknosure.fr
          </a>
        </div>

        {/* Liens */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link href="/cookies" className="hover:text-[var(--primary)] hover:underline">
            Politique des cookies
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/mentions-legales" className="hover:text-[var(--primary)] hover:underline">
            Mentions légales
          </Link>
          <span className="text-gray-300">·</span>
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer"
            className="hover:text-[var(--primary)] hover:underline">
            CNIL
          </a>
        </div>

      </div>
    </main>
  );
}
