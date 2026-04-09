import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles, getArticleBySlug } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Teknosure`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  // Convertir le contenu texte en blocs HTML simples
  const renderContent = (raw: string) => {
    return raw.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-gray-900">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="mb-3 mt-8 text-lg font-bold text-gray-800">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="mb-5 space-y-2 pl-5">
            {items.map((item, j) => (
              <li key={j} className="list-disc text-gray-600">
                {item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d+\./)) {
        const items = block.split("\n").filter((l) => l.match(/^\d+\./));
        return (
          <ol key={i} className="mb-5 space-y-2 pl-5">
            {items.map((item, j) => (
              <li key={j} className="list-decimal text-gray-600">
                {item.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
              </li>
            ))}
          </ol>
        );
      }
      // Paragraphe normal — gras inline
      const parts = block.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="mb-5 leading-relaxed text-gray-600">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="font-semibold text-gray-900">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero article ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[var(--primary-dark)] via-[var(--primary-mid)] to-[var(--primary)] pb-16 pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Blog
            </Link>
            <span className="text-white/40">·</span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
              {article.category}
            </span>
            <span className="text-xs text-white/60">{article.readTime} de lecture</span>
            <span className="text-xs text-white/60">·</span>
            <span className="text-xs text-white/60">{article.date}</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ── Image + Contenu ───────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">

        {/* Image */}
        <div className="relative mb-10 h-64 overflow-hidden rounded-2xl shadow-md sm:h-80">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Lead */}
        <p className="mb-8 text-lg font-medium leading-relaxed text-gray-700 border-l-4 border-[var(--primary)] pl-5">
          {article.excerpt}
        </p>

        {/* Corps de l'article */}
        <div className="prose-custom">
          {renderContent(article.content)}
        </div>

        {/* CTA inline */}
        <div className="mt-12 rounded-2xl bg-linear-to-br from-[var(--primary-dark)] to-[var(--primary)] p-8 text-center">
          <p className="mb-2 text-lg font-bold text-white">Une question sur votre sécurité ?</p>
          <p className="mb-5 text-sm text-white/80">Nos experts vous répondent — audit initial offert et sans engagement.</p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-7 py-2.5 text-sm font-bold text-[var(--primary-dark)] shadow transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Prendre contact
          </Link>
        </div>

      </article>

      {/* ── Articles connexes ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-bold text-gray-900">À lire aussi</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                    {r.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 transition-colors group-hover:text-[var(--primary)]">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
