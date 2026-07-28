import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Teknosure — informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
};

const sections = [
  {
    id: "editeur",
    title: "1. Éditeur du site",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>Le site <strong>teknosure.com</strong> est édité par la société :</p>
        <address className="not-italic rounded-xl bg-gray-50 p-4 border border-gray-100 space-y-1">
          <p><strong>Teknosure</strong></p>
          <p>SAS au capital de 1 000 €</p>
          <p>RCS Pontoise — SIRET : 921 622 494 00018</p>
          <p>Code APE : 6201Z</p>
          <p>TVA intracommunautaire : FR 18 921622494</p>
          <p>Siège social : 16 rue de Condorcet, 95150 Taverny, France</p>
          <p>
            Tél. :{" "}
            <a href="tel:+33176297899" className="text-[var(--primary)] hover:underline">
              +33 1 76 29 78 99
            </a>
          </p>
          <p>
            E-mail :{" "}
            <a href="mailto:contact@teknosure.com" className="text-[var(--primary)] hover:underline">
              contact@teknosure.com
            </a>
          </p>
        </address>
        <p>
          Directeur de la publication : <strong>Hamad Witti</strong>, en sa qualité de Président de Teknosure.
        </p>
      </div>
    ),
  },
  {
    id: "hebergeur",
    title: "2. Hébergement",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>Le site est hébergé par :</p>
        <address className="not-italic rounded-xl bg-gray-50 p-4 border border-gray-100 space-y-1">
          <p><strong>Hostinger International Ltd</strong></p>
          <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <p>
            Site :{" "}
            <a
              href="https://www.hostinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:underline"
            >
              www.hostinger.com
            </a>
          </p>
        </address>
      </div>
    ),
  },
  {
    id: "propriete-intellectuelle",
    title: "3. Propriété intellectuelle",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes, vidéos, structure)
          est la propriété exclusive de <strong>Teknosure</strong> ou de ses partenaires, et est protégé par les lois
          françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du
          site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de
          Teknosure.
        </p>
        <p>
          Toute exploitation non autorisée constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants
          du Code de la propriété intellectuelle.
        </p>
      </div>
    ),
  },
  {
    id: "donnees-personnelles",
    title: "4. Données personnelles",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Teknosure traite vos données personnelles conformément au Règlement Général sur la Protection des Données
          (RGPD — UE 2016/679) et à la loi Informatique et Libertés modifiée.
        </p>
        <p>
          Un <strong>Délégué à la Protection des Données (DPO)</strong> a été désigné. Il est joignable à l'adresse
          dédiée :{" "}
          <a href="mailto:contact@teknosure.com" className="font-semibold text-[var(--primary)] hover:underline">
            contact@teknosure.com
          </a>
        </p>
        <p>
          Pour en savoir plus sur la collecte et le traitement de vos données, consultez notre{" "}
          <Link href="/politique-de-confidentialite" className="font-medium text-[var(--primary)] hover:underline">
            Politique de confidentialité
          </Link>.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Ce site utilise des cookies à des fins analytiques et de performance. Vous pouvez gérer vos préférences à tout
        moment depuis notre{" "}
        <Link href="/cookies" className="font-medium text-[var(--primary)] hover:underline">
          politique des cookies
        </Link>.
      </p>
    ),
  },
  {
    id: "responsabilite",
    title: "6. Limitation de responsabilité",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Teknosure s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Toutefois,
          Teknosure ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
        </p>
        <p>
          Teknosure décline toute responsabilité pour les dommages directs ou indirects qui pourraient résulter de
          l'accès au site ou de l'utilisation de son contenu, notamment en cas d'interruption de service, d'intrusion
          informatique ou de présence de virus.
        </p>
        <p>
          Les liens hypertextes présents sur le site peuvent renvoyer vers des sites tiers. Teknosure ne contrôle pas
          ces sites et n'est pas responsable de leurs contenus.
        </p>
      </div>
    ),
  },
  {
    id: "droit-applicable",
    title: "7. Droit applicable et juridiction",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de
        résolution amiable, les tribunaux compétents du ressort de <strong>Pontoise</strong> seront seuls compétents.
      </p>
    ),
  },
  {
    id: "contact",
    title: "8. Contact",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Pour toute question relative au site ou aux présentes mentions légales, vous pouvez nous contacter à l'adresse :{" "}
        <a href="mailto:contact@teknosure.com" className="font-medium text-[var(--primary)] hover:underline">
          contact@teknosure.com
        </a>{" "}
        ou par téléphone au{" "}
        <a href="tel:+33176297899" className="font-medium text-[var(--primary)] hover:underline">
          +33 1 76 29 78 99
        </a>.
      </p>
    ),
  },
];

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-light)]">
            <svg className="h-7 w-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Mentions légales</h1>
          <p className="mt-3 text-base text-gray-500">
            Dernière mise à jour : 1er juillet 2026
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

        {/* Liens */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link href="/politique-de-confidentialite" className="hover:text-[var(--primary)] hover:underline">
            Politique de confidentialité
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/cookies" className="hover:text-[var(--primary)] hover:underline">
            Politique des cookies
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/conditions-utilisation" className="hover:text-[var(--primary)] hover:underline">
            Conditions d'utilisation
          </Link>
        </div>

      </div>
    </main>
  );
}
