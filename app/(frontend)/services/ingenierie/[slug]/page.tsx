import type { Metadata } from "next";
import { OfferRoute, offerMetadata, offerStaticParams } from "../../offerRoute";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return offerStaticParams("ingenierie");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return offerMetadata("ingenierie", slug);
}

export default async function IngenierieOfferPage({ params }: Props) {
  const { slug } = await params;
  return <OfferRoute domain="ingenierie" slug={slug} />;
}
