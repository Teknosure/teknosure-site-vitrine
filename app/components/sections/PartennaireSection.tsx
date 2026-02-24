import Link from "next/link";

export default function PartnersSection() {
  const partners = [
    "LIEN",
    "BANQUE MONDIALE",
    "AÉROCE",
    "TECHNOVA",
    "FINSERV"
  ];

  return (
    <section className="border-t border-gray-200 bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Titre */}
        <p className="mb-10 text-center text-sm uppercase tracking-wider text-gray-500">
          Reconnue par les leaders du secteur
        </p>

        {/* Logos partenaires */}
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale lg:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner} 
              className="text-xl font-bold text-gray-400 transition-opacity hover:opacity-100"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  }