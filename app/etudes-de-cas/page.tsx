import type { Metadata } from "next";
import EtudesDeCasClient from "./EtudesDeCasClient";

export const metadata: Metadata = {
  title: "Études de Cas & Réalisations Clients",
  description:
    "Découvrez nos projets clients concrets : cybersécurité, cloud, infogérance et ingénierie logicielle. Des résultats mesurables pour des PME et ETI.",
  openGraph: {
    url: "https://www.teknosure.com/etudes-de-cas",
  },
};

export default function EtudesDeCasPage() {
  return <EtudesDeCasClient />;
}
