import Link from "next/link";

const team = [
  {
    name: "Abdoul-Rahman ADEN",
    role: "Tech Lead — Infogérance & Services Managés",
    initials: "AA",
    expertise: ["Architecture SI", "Supervision proactive", "Gestion de projets IT"],
    linkedin: "#",
  },
  {
    name: "Mohamed CHEHEM",
    role: "Dev Fullstack & Expert Systèmes",
    initials: "MC",
    expertise: ["Développement sur mesure", "Intégration API", "Automatisation IT"],
    linkedin: "#",
  },
  {
    name: "Ali MOHAMED",
    role: "Dev Fullstack & Expert Infrastructure",
    initials: "AM",
    expertise: ["Infrastructure managée", "Déploiement & CI/CD", "Monitoring applicatif"],
    linkedin: "#",
  },
];

export default function InfogeranceTeamSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-[var(--primary-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
            L'équipe
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Les experts qui opèrent{" "}
            <span className="bg-linear-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
              votre SI au quotidien
            </span>
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
            Une équipe pluridisciplinaire, disponible et proactive — qui connaît votre infrastructure
            aussi bien que vous, et intervient avant que vous n'ayez à le demander.
          </p>
        </div>

        {/* Membres */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-border)] hover:shadow-md"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-[var(--primary-dark)] to-cyan-400 text-2xl font-bold text-white shadow-lg ring-4 ring-white transition-all duration-300 group-hover:ring-[var(--primary-light)]">
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
              <h3 className="relative z-10 text-base font-bold text-gray-900">{member.name}</h3>
              <p className="relative z-10 mt-1 text-sm font-medium text-[var(--primary)]">{member.role}</p>

              {/* Séparateur */}
              <span className="my-5 block h-px w-12 rounded-full bg-linear-to-r from-blue-400 to-cyan-400" />

              {/* Expertise tags */}
              <div className="relative z-10 flex flex-wrap justify-center gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-[var(--primary-light)] group-hover:text-[var(--primary-dark)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
