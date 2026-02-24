import HeroSection from "@/app/components/sections/HeroSection";
import PartnersSection from "@/app/components/sections/PartennaireSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import PourquoiNnous from "@/app/components/sections/PourquoiNous";
import CTASection from "@/app/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <PourquoiNnous />
      <CTASection />
    </div>
  );
}
