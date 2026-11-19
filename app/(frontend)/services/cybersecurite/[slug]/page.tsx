import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TpeCyberPage, { metadata as tpeMetadata } from "@/app/(frontend)/tpe-pme/cybersecurite/page";
import EtiCyberPage, { metadata as etiMetadata } from "@/app/(frontend)/eti/cybersecurite/page";
import { OfferRoute, offerMetadata } from "../../offerRoute";

const extraSlugs = ["tpe-pme", "eti", "audit"] as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return extraSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "tpe-pme") return tpeMetadata;
  if (slug === "eti") return etiMetadata;
  return offerMetadata("cybersecurite", slug);
}

export default async function CyberOfferPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "tpe-pme") return <TpeCyberPage />;
  if (slug === "eti") return <EtiCyberPage />;
  if (slug === "audit") return <OfferRoute domain="cybersecurite" slug="audit" />;
  notFound();
}
