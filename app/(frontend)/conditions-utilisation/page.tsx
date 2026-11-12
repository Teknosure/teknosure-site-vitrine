import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Conditions générales d'utilisation du site Teknosure — règles d'accès, propriété intellectuelle et responsabilités.",
};

const sections = [
  {
    id: "objet",
    title: "1. Objet",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Les présentes conditions générales d'utilisation (ci-après « CGU ») ont pour objet de définir les modalités
        et conditions dans lesquelles <strong>Teknosure</strong> met à disposition les services du site{" "}
        <strong>teknosure.com</strong>, ainsi que les conditions d'utilisation du site par l'utilisateur.
        Toute connexion au site implique l'acceptation sans réserve des présentes CGU.
      </p>
    ),
  },
  {
    id: "acces",
    title: "2. Accès au site",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais
          supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet,
          etc.) sont à sa charge.
        </p>
        <p>
          Teknosure se réserve le droit de suspendre, interrompre ou limiter l'accès au site, notamment pour des
          raisons de maintenance, de mise à jour, ou pour tout autre motif légitime, sans préavis ni indemnité.
        </p>
      </div>
    ),
  },
  {
    id: "utilisation",
    title: "3. Utilisation du site",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>L'utilisateur s'engage à utiliser le site de manière licite et loyale. Il est notamment interdit de :</p>
        <ul className="space-y-2">
          {[
            "Utiliser le site à des fins illégales, frauduleuses ou contraires à l'ordre public",
            "Tenter de perturber, pirater ou endommager les systèmes informatiques de Teknosure",
            "Collecter des données personnelles d'autres utilisateurs sans leur consentement",
            "Diffuser des contenus diffamatoires, injurieux, discriminatoires ou portant atteinte aux droits de tiers",
            "Reproduire, copier ou exploiter commercialement tout contenu du site sans autorisation écrite",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-gray-600">
              <span className="mt-1 shrink-0 text-[var(--primary)]">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "propriete-intellectuelle",
    title: "4. Propriété intellectuelle",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          L'ensemble des contenus présents sur le site (textes, images, logos, graphismes, vidéos, structure, code
          source) est la propriété de <strong>Teknosure</strong> ou de ses partenaires et est protégé par le droit
          de la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces
          éléments est strictement interdite sans l'accord écrit et préalable de Teknosure, sous peine de poursuites
          judiciaires.
        </p>
        <p>
          La marque <strong>Teknosure</strong>, les logos et toute autre marque distinctive figurant sur le site sont
          des marques déposées. Toute utilisation non autorisée est passible de sanctions.
        </p>
      </div>
    ),
  },
  {
    id: "liens",
    title: "5. Liens hypertextes",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          <strong>Liens sortants :</strong> Le site peut contenir des liens vers des sites tiers. Teknosure n'exerce
          aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.
        </p>
        <p>
          <strong>Liens entrants :</strong> Tout lien hypertexte pointant vers le site de Teknosure doit faire l'objet
          d'une autorisation écrite préalable. Les liens en deep linking ou par framing sont interdits sans accord
          express.
        </p>
      </div>
    ),
  },
  {
    id: "responsabilite",
    title: "6. Limitation de responsabilité",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>
          Teknosure s'efforce de maintenir le site accessible et à jour. Toutefois, Teknosure ne peut être tenu
          responsable des dommages directs ou indirects liés à :
        </p>
        <ul className="space-y-2">
          {[
            "Une interruption ou indisponibilité du site",
            "Des erreurs ou omissions dans les informations publiées",
            "L'utilisation des informations contenues sur le site",
            "Des intrusions malveillantes ou la présence de virus",
            "Des dommages causés par des liens vers des sites tiers",
          ].map((item) => (
            <li key={item} className="flex gap-2 text-gray-600">
              <span className="mt-1 shrink-0 text-[var(--primary)]">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "donnees-personnelles",
    title: "7. Données personnelles",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Teknosure collecte et traite certaines données personnelles des utilisateurs dans le cadre de l'utilisation
        du site. Ces traitements sont réalisés conformément au RGPD. Pour en savoir plus, consultez notre{" "}
        <Link href="/politique-de-confidentialite" className="font-medium text-[var(--primary)] hover:underline">
          Politique de confidentialité
        </Link>.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Le site utilise des cookies à des fins d'analyse et d'amélioration de l'expérience utilisateur. Pour en
        savoir plus et gérer vos préférences, consultez notre{" "}
        <Link href="/cookies" className="font-medium text-[var(--primary)] hover:underline">
          Politique des cookies
        </Link>.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "9. Modifications des CGU",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Teknosure se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet
        dès leur publication sur le site. L'utilisateur est invité à consulter régulièrement cette page. La
        continuation de l'utilisation du site après modification vaut acceptation des nouvelles CGU.
      </p>
    ),
  },
  {
    id: "droit-applicable",
    title: "10. Droit applicable",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Les présentes CGU sont soumises au droit français. En cas de litige relatif à leur interprétation ou à leur
        exécution, et après tentative de résolution amiable, les tribunaux compétents du ressort de{" "}
        <strong>Pontoise</strong> seront seuls compétents.
      </p>
    ),
  },
];

export default function ConditionsUtilisation() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-light)]">
            <svg className="h-7 w-7 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Conditions d'utilisation</h1>
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
          <Link href="/mentions-legales" className="hover:text-[var(--primary)] hover:underline">
            Mentions légales
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/politique-de-confidentialite" className="hover:text-[var(--primary)] hover:underline">
            Politique de confidentialité
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/cookies" className="hover:text-[var(--primary)] hover:underline">
            Politique des cookies
          </Link>
        </div>

      </div>
    </main>
  );
}
