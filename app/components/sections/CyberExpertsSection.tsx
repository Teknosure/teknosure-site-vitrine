import Image from "next/image";
import Link from "next/link";
import { articles } from "@/app/blog/data";

const featured = articles.find((a) => a.featured)!;
const secondary = articles.filter((a) => !a.featured);

export default function CyberExpertsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-14 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              Expertise &amp; Veille
            </span>
            <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Regards d&apos;experts
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-blue-500 hover:to-cyan-400"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Tous nos regards d&apos;experts
          </Link>
        </div>

        {/* Grille : featured gauche + articles droite */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

          {/* Article featured */}
          <article className="group flex flex-col overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72 xl:h-80">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/50 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white shadow">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-1.5 text-xs text-gray-400">
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {featured.readTime} de lecture
              </div>
              <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-[var(--primary)] lg:text-xl">
                {featured.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-4">
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary-light)]"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                En savoir plus
              </Link>
            </div>
          </article>

          {/* Articles secondaires — transparents, séparés par une ligne */}
          <div className="flex flex-col divide-y divide-gray-300">
            {secondary.map((article) => (
              <article
                key={article.slug}
                className="group flex items-start gap-4 py-5 first:pt-0 last:pb-0"
              >
                {/* Image miniature responsive */}
                <div className="relative h-24 w-28 shrink-0 overflow-hidden sm:h-28 sm:w-36 lg:h-24 lg:w-32 xl:h-28 xl:w-36">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 112px, (max-width: 1280px) 144px, 144px"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                      {article.category}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-[var(--primary)] lg:text-sm xl:text-base">
                    {article.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 hidden sm:block">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--primary)] px-3 py-1 text-xs font-semibold text-[var(--primary)] transition-all hover:bg-[var(--primary-light)]"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    En savoir plus
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
