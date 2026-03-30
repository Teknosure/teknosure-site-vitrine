"use client";

import Image from "next/image";

const partners = [
  {
    name: "Acronis",
    logo: null,
    initials: "AC",
    color: "#EF4636",
    badge: "Partenaire Officiel",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    description:
      "Solution de référence pour la sauvegarde, la reprise après sinistre et la protection des données. Déployée sur l'ensemble de nos offres de backup managé.",
    tags: ["Backup Cloud", "Disaster Recovery", "Cyber Protection", "Endpoint Backup"],
    stats: [
      { label: "Taux de restauration", value: "99.9%" },
      { label: "Clients protégés", value: "500k+" },
    ],
    filterStyle: "",
  },
  {
    name: "Veeam",
    logo: "/images/tech/veeam.svg",
    initials: "VE",
    color: "#00B336",
    badge: "Certified Partner",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
    description:
      "Leader mondial de la protection des données pour environnements virtuels, cloud hybride et physiques. Pilier de notre offre PRA et sauvegarde managée.",
    tags: ["VMware Backup", "Hyper-V", "Cloud Backup", "PRA"],
    stats: [
      { label: "Temps de récupération", value: "<15 min" },
      { label: "Workloads supportés", value: "20+" },
    ],
    filterStyle: "brightness-0 saturate-100 invert-[15%] sepia-[100%] saturate-[3000%] hue-rotate-[100deg]",
  },
  {
    name: "Microsoft",
    logo: "/images/tech/microsoft.svg",
    initials: "MS",
    color: "#00A4EF",
    badge: "Microsoft Partner",
    badgeColor: "bg-[#E8F5FC] text-[#0D6EA1] border-[#B8DFF2]",
    description:
      "Partenariat couvrant Microsoft 365, Azure Active Directory, Intune et Defender. Nous gérons et sécurisons votre écosystème Microsoft au quotidien.",
    tags: ["Microsoft 365", "Azure AD", "Intune", "Defender"],
    stats: [
      { label: "Environnements managés", value: "50+" },
      { label: "Uptime garanti", value: "99.95%" },
    ],
    filterStyle: "brightness-0 saturate-100 invert-[35%] sepia-[90%] saturate-[500%] hue-rotate-[185deg]",
  },
  {
    name: "Cisco",
    logo: "/images/tech/cisco.svg",
    initials: "CS",
    color: "#1BA0D7",
    badge: "Cisco Partner",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    description:
      "Infrastructure réseau, switching, routing et sécurité. Nos équipes certifiées Cisco assurent la conception, le déploiement et la supervision de vos réseaux.",
    tags: ["Networking", "Firewall", "SD-WAN", "Switches"],
    stats: [
      { label: "Projets réseau livrés", value: "30+" },
      { label: "Certifications Cisco", value: "4" },
    ],
    filterStyle: "brightness-0 saturate-100 invert-[35%] sepia-[80%] saturate-[400%] hue-rotate-[175deg]",
  },
  {
    name: "Datadog",
    logo: "/images/tech/datadog.svg",
    initials: "DD",
    color: "#632CA6",
    badge: "Technology Partner",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    description:
      "Plateforme de monitoring et d'observabilité utilisée pour la supervision proactive de vos infrastructures, applications et logs en temps réel.",
    tags: ["Monitoring", "APM", "Log Management", "Alerting"],
    stats: [
      { label: "Métriques surveillées", value: "100k+/env" },
      { label: "MTTR amélioré", value: "-60%" },
    ],
    filterStyle: "brightness-0 saturate-100 invert-[25%] sepia-[80%] saturate-[600%] hue-rotate-[250deg]",
  },
  {
    name: "Fortinet",
    logo: "/images/tech/fortinet.svg",
    initials: "FT",
    color: "#EE3124",
    badge: "Security Partner",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    description:
      "Firewalls nouvelle génération, VPN, SD-WAN et solutions de sécurité réseau intégrées. Intégré dans nos offres de SOC managé et sécurité périmétrique.",
    tags: ["FortiGate", "SD-WAN", "VPN", "SOC Integration"],
    stats: [
      { label: "Firewalls déployés", value: "20+" },
      { label: "Menaces bloquées/j", value: "10k+" },
    ],
    filterStyle: "brightness-0 saturate-100 invert-[15%] sepia-[100%] saturate-[500%] hue-rotate-[5deg]",
  },
];

export default function InfogerancePartnersSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-[#E8F5FC] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">
              Écosystème technologique
            </span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Nos partenaires <br />
              <span className="bg-linear-to-r from-[#0D6EA1] to-[#1B9AD2] bg-clip-text text-transparent">
                technologiques
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base text-gray-500 lg:text-right">
            Nous sélectionnons des solutions éprouvées et des partenaires certifiés
            pour vous garantir un service managé fiable, sécurisé et performant.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8DFF2] hover:shadow-md"
            >
              {/* Logo + badge */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-2">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={40}
                      height={40}
                      className={`h-8 w-auto object-contain ${partner.filterStyle}`}
                    />
                  ) : (
                    <span
                      className="text-lg font-extrabold"
                      style={{ color: partner.color }}
                    >
                      {partner.initials}
                    </span>
                  )}
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${partner.badgeColor}`}
                >
                  {partner.badge}
                </span>
              </div>

              {/* Name + description */}
              <h3 className="mb-3 text-lg font-bold text-gray-900">{partner.name}</h3>
              <p className="mb-5 text-sm leading-relaxed text-gray-500">{partner.description}</p>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {partner.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-auto grid grid-cols-2 gap-4 border-t border-gray-100 pt-5">
                {partner.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-extrabold text-[#1B9AD2]">{s.value}</p>
                    <p className="text-xs text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 rounded-2xl bg-linear-to-r from-[#0D6EA1] to-[#1B9AD2] p-8 text-center text-white">
          <p className="text-lg font-semibold">
            Un partenariat technologique solide, au service de votre continuité.
          </p>
          <p className="mt-1 text-sm text-[#B8DFF2]">
            Nos certifications et partenariats nous permettent de vous proposer des solutions éprouvées,
            rapidement opérationnelles et pleinement supportées.
          </p>
        </div>

      </div>
    </section>
  );
}
