import { notFound } from "next/navigation";
import type { Metadata } from "next";
import OfferPage, { type OfferPageProps } from "@/app/(frontend)/components/pages/OfferPage";
import { offersByDomain, type OfferDomain } from "./offerPages";

type OfferDef = { metadata: Metadata; page: OfferPageProps };
type OfferSlug<D extends OfferDomain> = keyof (typeof offersByDomain)[D];

export function offerStaticParams<D extends OfferDomain>(domain: D) {
  return (Object.keys(offersByDomain[domain]) as OfferSlug<D>[]).map((slug) => ({ slug }));
}

export function offerMetadata<D extends OfferDomain>(domain: D, slug: string): Metadata {
  const def = (offersByDomain[domain] as Record<string, OfferDef>)[slug];
  if (!def) return {};
  return def.metadata;
}

export function OfferRoute<D extends OfferDomain>({ domain, slug }: { domain: D; slug: string }) {
  const def = (offersByDomain[domain] as Record<string, OfferDef>)[slug];
  if (!def) notFound();
  return <OfferPage {...def.page} />;
}
