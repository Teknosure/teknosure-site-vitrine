import type { Metadata } from "next";
import { OfferRoute, offerMetadata, offerStaticParams } from "../../offerRoute";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return offerStaticParams("cloud");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return offerMetadata("cloud", slug);
}

export default async function CloudOfferPage({ params }: Props) {
  const { slug } = await params;
  return <OfferRoute domain="cloud" slug={slug} />;
}
