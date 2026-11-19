import type { Metadata } from "next";
import { OfferRoute, offerMetadata, offerStaticParams } from "../../offerRoute";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return offerStaticParams("infogerance");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return offerMetadata("infogerance", slug);
}

export default async function InfogeranceOfferPage({ params }: Props) {
  const { slug } = await params;
  return <OfferRoute domain="infogerance" slug={slug} />;
}
