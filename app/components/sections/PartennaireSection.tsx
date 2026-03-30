"use client";

import Image from "next/image";

const partners: { name: string; logo: string | null }[] = [
  { name: "Palo Alto Networks", logo: "/images/partners/paloaltonetworks.svg" },
  { name: "Microsoft",          logo: "/images/partners/microsoft.svg" },
  { name: "AWS",                logo: null },
  { name: "Barracuda",          logo: null },
  { name: "Acronis",            logo: null },
  { name: "Google",             logo: "/images/partners/google.svg" },
  { name: "Atlassian",          logo: "/images/partners/atlassian.svg" },
  { name: "Adobe",              logo: "/images/partners/adobe.svg" },
  { name: "Apple",              logo: "/images/partners/apple.svg" },
  { name: "Elastic",            logo: "/images/partners/elastic.svg" },
  { name: "Atos",               logo: null },
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
              className="group flex h-14 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 shadow-sm transition-all hover:border-[var(--primary-border)] hover:shadow-md"
              title={partner.name}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={36}
                  className="h-7 w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-80 group-hover:grayscale-0"
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
