import Link from "next/link";
import Image from "next/image";

const differentiateurs = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    titre: "Réactivité sans compromis",
    description:
      "Réponse sous 24h, intervention sous 2h sur incident critique. Pas de ticket dans le vide, pas d'attente inexpliquée — votre problème devient le nôtre immédiatement.",
    badge: "< 24h",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    titre: "L'humain avant tout",
    description:
      "Un interlocuteur unique, pas un centre d'appel. Vous connaissez le nom de la personne qui s'occupe de vous. Cette proximité, c'est ce qui fait la différence quand ça compte.",
    badge: "Interlocuteur dédié",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    titre: "Livraison sans mauvaise surprise",
    description:
      "Délais tenus, scope respecté, budget maîtrisé. Nous découpons chaque projet en jalons clairs avec des livrables visibles — vous savez toujours où en est votre projet.",
    badge: "On-time delivery",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    titre: "Expertise multi-domaines",
    description:
      "Cybersécurité, cloud, infogérance, développement — une seule équipe pour tout. Fini les silos et les renvois de responsabilité entre prestataires.",
    badge: "4 domaines",
  },
];

const stats = [
  { value: "< 2h", label: "Intervention sur incident critique" },
  { value: "100%", label: "Projets livrés dans les délais" },
  { value: "24/7", label: "Disponibilité SOC & support" },
  { value: "3×", label: "Plus rapide qu'une équipe interne" },
];

export default function PourquoiNous() {
  return (
    <section className="bg-gray-900 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">

          {/* ── Colonne gauche : différenciateurs ───────────────────────── */}
          <div>
            <span className="mb-4 inline-block rounded-full border border-[#1B9AD2]/30 bg-[#E8F5FC]0/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Ce qui nous distingue
            </span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Pourquoi choisir{" "}
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Teknosure ?
            </span>
            </h2>
            <p className="mb-12 text-base leading-relaxed text-gray-400">
              Dans un marché saturé d&apos;ESN anonymes, nous faisons le pari inverse :
              moins de clients, plus d&apos;engagement. La rapidité et l&apos;humain ne sont pas
              des arguments marketing — c&apos;est notre façon de travailler.
            </p>

            <div className="space-y-7">
              {differentiateurs.map((item) => (
                <div key={item.titre} className="group flex gap-5">
                  {/* Icône + trait vertical */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1B9AD2]/40 bg-[#E8F5FC]0/10 text-blue-400 transition-colors group-hover:border-blue-400 group-hover:bg-[#E8F5FC]0/20">
                      {item.icon}
                    </div>
                    <div className="mt-2 w-px flex-1 bg-gray-700 last:hidden" />
                  </div>

                  {/* Contenu */}
                  <div className="pb-7">
                    <div className="mb-1 flex flex-wrap items-center gap-3">
                      <h3 className="text-base font-bold text-white">{item.titre}</h3>
                      <span className="rounded-full bg-[#E8F5FC]0/15 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/a-propos"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3 hover:text-blue-300"
            >
              En savoir plus sur notre approche
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* ── Colonne droite : stats + citation ───────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Grille stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-700/60 bg-gray-800/50 p-7 backdrop-blur transition-all hover:border-[#1B9AD2]/30 hover:bg-gray-800"
                >
                  <p className="mb-1 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Citation / manifeste */}
            <div className="rounded-2xl border border-[#1B9AD2]/20 bg-linear-to-br from-[#0D6EA1]/20 to-[#1B9AD2]/10 p-8">
              <svg className="mb-4 h-8 w-8 text-blue-400/60" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-4 text-base font-medium leading-relaxed text-gray-200">
                &quot;Ce qui nous définit n&apos;est pas la taille de notre équipe, mais l&apos;engagement
                de chaque personne qui la compose. Quand vous nous confiez votre infrastructure,
                vous nous confiez la continuité de votre business.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#1B9AD2]/30">
                  <Image
                    src="/images/image-hamad.png"
                    alt="Hamad WITTI — CEO Teknosure"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Hamad WITTI</p>
                  <p className="text-xs text-gray-400">CEO, Teknosure</p>
                </div>
              </div>
            </div>

            {/* Mini CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-between rounded-2xl border border-gray-700 bg-gray-800/50 px-7 py-5 transition-all hover:border-[#1B9AD2]/40 hover:bg-gray-800"
            >
              <div>
                <p className="font-bold text-white">Prêt à travailler avec nous ?</p>
                <p className="mt-0.5 text-sm text-gray-400">Audit initial offert, réponse sous 24h.</p>
              </div>
              <svg className="h-5 w-5 shrink-0 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
