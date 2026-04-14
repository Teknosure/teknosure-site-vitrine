import FullscreenHero, { HeroTab } from "@/app/components/hero/FullscreenHero";
import PartnersSection from "@/app/components/sections/PartennaireSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import PourquoiNnous from "@/app/components/sections/PourquoiNous";
import CTASection from "@/app/components/sections/CTASection";

const expertiseTabs: HeroTab[] = [
  {
    label: "Notre mission",
    href: "/",
    tagline: "Cabinet de conseil informatique de premier plan",
    titleAccent: "Intelligence numérique",
    title: "sécurisée et évolutive",
    subtitle:
      "Teknosure offre aux entreprises des solutions de cybersécurité de pointe, une infrastructure cloud performante et des logiciels sur mesure.",
    imageSrc: "/images/hero2.jpg",
  },
  {
    label: "Cybersécurité",
    href: "/tpe-pme/cybersecurite",
    tagline: "Protection & Conformité",
    titleAccent: "Cybersécurité",
    title: "et conformité numérique",
    subtitle:
      "Détection avancée des menaces, tests d'intrusion et audits ISO 27001 / RGPD pour sécuriser votre périmètre numérique.",
    imageSrc: "/images/cyber3.jpg",
  },
  {
    label: "IA et automatisation",
    href: "/tpe-pme/ia",
    tagline: "Intelligence artificielle",
    titleAccent: "Automatisez",
    title: "et augmentez votre performance",
    subtitle:
      "Tirez parti du machine learning et de la RPA pour automatiser vos processus et exploiter la donnée comme levier stratégique.",
    imageSrc: "/images/ia.jpg",
  },
  {
    label: "Cloud et Infogérance",
    href: "/tpe-pme/cloud",
    tagline: "Infrastructure & Cloud",
    titleAccent: "Migration cloud",
    title: "et infogérance managée",
    subtitle:
      "AWS, Azure ou Google Cloud : nous pilotons votre migration et gérons votre infrastructure pour une disponibilité maximale.",
    imageSrc: "/images/cloud.jpg",
  },
  {
    label: "Ingénierie logicielle",
    href: "/tpe-pme/ingenierie",
    tagline: "Développement sur mesure",
    titleAccent: "Applications web & mobile",
    title: "sur architectures modernes",
    subtitle:
      "De la conception à la mise en production, nous construisons des solutions scalables adaptées à vos besoins métier.",
    imageSrc: "/images/ingenerie.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <FullscreenHero
        title="Intelligence numérique"
        primaryLabel="Obtenir une consultation"
        primaryHref="/contact"
        secondaryLabel="Nos expertises"
        secondaryHref="/services"
        imageSrc="/images/hero-bg.png"
        overlayMode="dark"
        tabs={expertiseTabs}
      />
      <PartnersSection />
      <ServicesSection />
      <PourquoiNnous />
      <CTASection />
    </div>
  );
}
