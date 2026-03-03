import Link from "next/link";

const team = [
  {
    name: "Hemeda HOUSSEIN",
    role: "Consultante en Cybersécurité",
    initials: "HH",
    linkedin: "#",
  },
  {
    name: "Hamad WITTI",
    role: "CEO — Cybersecurity Manager",
    initials: "HW",
    linkedin: "#",
  },
  {
    name: "El Habib",
    role: "Consultant Cybersécurité",
    initials: "EH",
    linkedin: "#",
  },
  {
    name: "Oualid LOUHIBI",
    role: "Responsable Commercial",
    initials: "OL",
    linkedin: "#",
  },
];

export default function CyberTeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Cyberdéfense
          </span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            La Cellule Cyberdéfense
          </h2>
          <p className="mt-2 max-w-xl text-center text-sm leading-relaxed text-gray-500">
            Des experts mobilisés chaque jour pour anticiper les menaces, protéger vos actifs
            et renforcer votre résilience numérique.
          </p>
        </div>

        {/* Membres */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              {/* Avatar avec initiales + anneau gradient au hover */}
              <div className="relative mb-5">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-400 text-2xl font-bold text-white shadow-lg ring-4 ring-white transition-all duration-300 group-hover:ring-blue-200">
                  {member.initials}
                </div>
                {/* Badge LinkedIn */}
                <Link
                  href={member.linkedin}
                  aria-label={`Profil LinkedIn de ${member.name}`}
                  className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-md transition-transform hover:scale-110"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>

              {/* Infos */}
              <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{member.role}</p>

              {/* Trait décoratif sous le rôle */}
              <span className="mt-3 block h-0.5 w-8 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
