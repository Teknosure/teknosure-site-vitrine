import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

export const metadata: Metadata = {
  title: "Politique des cookies",
  description:
    "Informations sur les cookies utilisés par Teknosure et comment gérer vos préférences conformément au RGPD.",
};

export default function CookiesPage() {
  return <CookiesClient />;
}
