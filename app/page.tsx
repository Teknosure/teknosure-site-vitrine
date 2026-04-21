import FullscreenHero, { HeroTab } from "@/app/components/hero/FullscreenHero";
import PartnersSection from "@/app/components/sections/PartennaireSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import PourquoiNnous from "@/app/components/sections/PourquoiNous";
import CTASection from "@/app/components/sections/CTASection";

const expertiseTabs: HeroTab[] = [
  {
    label: "Notre mission",
    href: "/",
    tagline: "Votre partenaire de confiance en transformation numérique",
    titleAccent: "Intelligence numérique",
    title: "sécurisée et évolutive",
    subtitle:
      "Teknosure sécurise et digitalise les entreprises grâce à la cybersécurité, aux services managés, aux réseaux, aux infrastructures, au cloud et au développement d'applications sur mesure.",
    imageSrc: "/images/hero2.jpg",
  },
  {
    label: "Cybersécurité",
    href: "/tpe-pme/cybersecurite",
    tagline: "Sécurisez votre transformation digitale",
    titleAccent: "Cybersécurité",
    title: "et conformité numérique",
    subtitle:
      "Conseil et accompagnement en conformité numérique, audits de sécurité, détection avancée des menaces, tests d'intrusion et services managés pour une protection globale des systèmes d'information.",
    imageSrc: "/images/cyber3.jpg",
  },
  {
    label: "IA et automatisation",
    href: "/tpe-pme/ia",
    tagline: "Accélérez votre transformation digitale",
    titleAccent: "Automatisez",
    title: "et augmentez votre performance",
    subtitle:
      "Exploitez la puissance de l'IA et de l'automatisation pour optimiser vos opérations, gagner en efficacité et créer plus de valeur.",
    imageSrc: "/images/ia.jpg",
  },
  {
    label: "Infrastructure, réseaux & cloud",
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
