import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import FullscreenHero from "@/app/(frontend)/components/hero/FullscreenHero";

export type OfferPoint = {
  icon: ReactNode;
  title: string;
  description: string;
};

/** Bloc de présentation détaillée : un titre, un ou deux paragraphes et une image. */
export type OfferDetails = {
  heading: string;
  paragraphs: string[];
  image: { src: string; alt: string };
};

export type OfferPageProps = {
  parentLabel: string;
  parentHref: string;
  tagline: string;
  titleAccent: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  points: OfferPoint[];
  details?: OfferDetails;
  related?: { label: string; href: string }[];
};

export default function OfferPage({
  parentLabel,
  parentHref,
  tagline,
  titleAccent,
  title,
  subtitle,
  imageSrc,
  points,
  details,
  related = [],
}: Readonly<OfferPageProps>) {
  return (
    <div className="min-h-screen bg-white">
      <FullscreenHero
        tagline={tagline}
        titleAccent={titleAccent}
        title={title}
        subtitle={subtitle}
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel={parentLabel}
        secondaryHref={parentHref}
        imageSrc={imageSrc}
        overlayMode="dark"
      />

      {details && (
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                {tagline}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                {details.heading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                {details.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={details.image.src}
                alt={details.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              {parentLabel}
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ce que nous prenons en charge
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-14">
            {points.map((point) => (
              <article
                key={point.title}
                className="flex w-full max-w-[280px] flex-col items-center px-2 text-center sm:w-[280px]"
              >
                <div className="mb-4 text-[var(--primary)]">{point.icon}</div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">{point.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Autres offres {parentLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[var(--primary-border)] hover:text-[var(--primary-dark)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--primary-dark)] px-6 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold">Un besoin sur cette offre ?</p>
            <p className="mt-1 text-sm text-white/75">
              Nous cadrons le dispositif avec vous et vous proposons un plan d&apos;action.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 border border-white/30 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[var(--primary-dark)]"
          >
            Parler à un expert
          </Link>
        </div>
      </section>
    </div>
  );
}
