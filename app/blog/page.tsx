import Link from "next/link";
import Image from "next/image";
import { articles } from "./data";

export const metadata = {
  title: "Blog & Veille — Teknosure",
  description:
    "Regards d'experts Teknosure : cybersécurité, infrastructure cloud, IA, infogérance. Actualités, analyses et bonnes pratiques pour les DSI et dirigeants.",
};

const featured = articles.find((a) => a.featured)!;
const secondary = articles.filter((a) => !a.featured);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[var(--primary-dark)] via-[var(--primary-mid)] to-[var(--primary)] pb-20 pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Teknosure — Blog & Veille
          </span>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Regards d&apos;experts
          </h1>
          <p className="mx-auto max-w-xl text-lg text-[var(--primary-border)]">
            Analyses, bonnes pratiques et veille cyber par les experts Teknosure — pour les DSI, RSSI et dirigeants.
          </p>
        </div>
      </section>

      {/* ── Articles ─────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Article featured */}
          <Link
            href={featured.externalUrl ?? `/blog/${featured.slug}`}
            target={featured.externalUrl ? "_blank" : undefined}
            rel={featured.externalUrl ? "noopener noreferrer" : undefined}
            className="group mb-10 flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:flex-row"
          >
            <div className="relative h-56 shrink-0 lg:h-auto lg:w-2/5">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-bold text-white shadow">
                À la une
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:w-3/5">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs font-semibold text-[var(--primary-dark)]">
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400">{featured.readTime} de lecture</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)] lg:text-3xl">
                {featured.title}
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-gray-500">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                Lire l&apos;article
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Autres articles */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((article) => (
              <Link
                key={article.slug}
                href={article.externalUrl ?? `/blog/${article.slug}`}
                target={article.externalUrl ? "_blank" : undefined}
                rel={article.externalUrl ? "noopener noreferrer" : undefined}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                    <span className="ml-auto text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="mb-3 flex-1 text-base font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500 line-clamp-2">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                    Lire
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[var(--primary-dark)] via-[var(--primary-mid)] to-[var(--primary)] py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            Besoin d&apos;un audit de sécurité ?
          </h2>
          <p className="mb-8 text-lg text-[var(--primary-border)]">
            Nos experts vous accompagnent — l&apos;audit initial est offert et sans engagement.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[var(--primary-dark)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Prendre contact
          </Link>
        </div>
      </section>

    </div>
  );
}
