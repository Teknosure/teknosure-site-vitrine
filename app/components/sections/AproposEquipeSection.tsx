import Link from "next/link";

const equipe = [
  // Direction
  {
    name: "Hamad WITTI",
    role: "CEO & Cybersecurity Manager",
    initials: "HW",
    dept: "Direction",
    deptColor: "bg-slate-100 text-slate-700",
    linkedin: "#",
  },
  {
    name: "Oualid LOUHIBI",
    role: "Responsable Commercial",
    initials: "OL",
    dept: "Direction",
    deptColor: "bg-slate-100 text-slate-700",
    linkedin: "#",
  },
  // Cybersécurité
  {
    name: "Hemeda HOUSSEIN",
    role: "Consultante en Cybersécurité",
    initials: "HH",
    dept: "Cybersécurité",
    deptColor: "bg-red-50 text-red-600",
    linkedin: "#",
  },
  {
    name: "El Habib",
    role: "Consultant Cybersécurité",
    initials: "EH",
    dept: "Cybersécurité",
    deptColor: "bg-red-50 text-red-600",
    linkedin: "#",
  },
  // Ingénierie
  {
    name: "Abdoul-Rahman ADEN",
    role: "Tech Lead DevOps & Scrum Master",
    initials: "AA",
    dept: "Ingénierie",
    deptColor: "bg-violet-50 text-violet-700",
    linkedin: "#",
  },
  {
    name: "Youssouf ABAYAZID",
    role: "Développeur Fullstack & Expert",
    initials: "YA",
    dept: "Ingénierie",
    deptColor: "bg-violet-50 text-violet-700",
    linkedin: "#",
  },
  {
    name: "Mohamed CHEHEM",
    role: "Développeur Fullstack & Expert",
    initials: "MC",
    dept: "Ingénierie",
    deptColor: "bg-violet-50 text-violet-700",
    linkedin: "#",
  },
  {
    name: "Ali MOHAMED",
    role: "Développeur Fullstack Web & Mobile",
    initials: "AM",
    dept: "Ingénierie",
    deptColor: "bg-violet-50 text-violet-700",
    linkedin: "#",
  },
];

export default function AproposEquipeSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
            L&apos;équipe
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Des personnes avant{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              tout
            </span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-gray-500">
            Une équipe pluridisciplinaire soudée autour d&apos;une même conviction :
            la technologie n&apos;a de valeur que lorsqu&apos;elle sert vraiment les gens.
          </p>
        </div>

        {/* Grille équipe */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {equipe.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-cyan-400 text-xl font-bold text-white shadow-md ring-4 ring-white transition-all duration-300 group-hover:ring-blue-100">
                  {member.initials}
                </div>
                <Link
                  href={member.linkedin}
                  aria-label={`Profil LinkedIn de ${member.name}`}
                  className="absolute -bottom-0.5 -right-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#0077B5] text-white shadow transition-transform hover:scale-110"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>

              {/* Infos */}
              <h3 className="text-sm font-bold text-gray-900">{member.name}</h3>
              <p className="mt-0.5 text-xs leading-snug text-gray-500">{member.role}</p>

              {/* Badge département */}
              <span className={`mt-3 rounded-full px-2.5 py-0.5 text-xs font-medium ${member.deptColor}`}>
                {member.dept}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
