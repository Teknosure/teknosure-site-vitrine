import type { Metadata } from "next";
import { OfferRoute, offerMetadata, offerStaticParams } from "../../offerRoute";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return offerStaticParams("ia");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return offerMetadata("ia", slug);
}

export default async function IaOfferPage({ params }: Props) {
  const { slug } = await params;
  return <OfferRoute domain="ia" slug={slug} />;
}
