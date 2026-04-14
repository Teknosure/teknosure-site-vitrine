"use client";

import Image from "next/image";

const partners: { name: string; logo: string | null }[] = [
  { name: "Palo Alto Networks", logo: "/images/partners/palo_alto_networks.jpg" },
  { name: "Microsoft",          logo: "/images/partners/microsoft.jpg" },
  { name: "AWS",                logo: "/images/partners/aws.png" },
  { name: "Barracuda",          logo: "/images/partners/Barracuda.png" },
  { name: "Acronis",            logo: "/images/partners/Acronis-logo.png" },
  { name: "Google",             logo: "/images/partners/Google.png" },
  { name: "Atlassian",          logo: "/images/partners/Atlassian-logo.png" },
  { name: "Adobe",              logo: "/images/partners/adobe.svg" },
  { name: "Apple",              logo: "/images/partners/apple.png" },
  { name: "Elastic",            logo: "/images/partners/logo-elastic.png" },
  { name: "Atos",               logo: "/images/partners/atos.png" },
];

export default function PartnersSection() {
  const track = [...partners, ...partners];

  return (
    <section className="border-t border-gray-100 bg-white py-14">
      <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
        Nos partenaires stratégiques
      </p>

      <div className="relative overflow-hidden">
        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

        {/* Piste défilante */}
        <div
          className="flex items-center gap-10"
          style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
        >
          {track.map((partner, i) => (
            <div
              key={i}
              className="group flex h-16 w-48 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 shadow-sm transition-all hover:border-[var(--primary-border)] hover:shadow-md"
              title={partner.name}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className={`w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-80 group-hover:grayscale-0 ${
                    partner.name === "Palo Alto Networks" || partner.name === "Microsoft"
                      ? "h-14"
                      : "h-10"
                  }`}
                />
              ) : (
                <span className="select-none text-xs font-semibold text-gray-300 transition-colors group-hover:text-gray-500">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
