import Image from "next/image";
import Link from "next/link";

const topics = ["Google Cloud", "AWS", "Kubernetes", "Terraform", "Cloud Native", "FinOps", "DevSecOps"];

export default function CloudFormationSection() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-[#B8DFF2] bg-linear-to-br from-blue-50 via-white to-cyan-50 shadow-sm">
          <div className="flex flex-col items-center gap-10 p-10 lg:flex-row lg:items-stretch lg:gap-16">

            {/* Gauche — texte */}
            <div className="flex flex-1 flex-col justify-center">
              <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">
                Montée en compétences
              </span>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                Formez vos équipes au Cloud
              </h2>
              <p className="mb-7 max-w-lg text-sm leading-relaxed text-gray-500">
                Teknosure propose des formations certifiantes sur les technologies
                cloud les plus demandées, dispensées par nos ingénieurs certifiés.
                En présentiel ou à distance, adaptées à tous les niveaux.
              </p>

              {/* Tags thématiques */}
              <div className="mb-8 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-[#B8DFF2] bg-white px-3 py-1 text-xs font-semibold text-[#0D6EA1] shadow-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1B9AD2] px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#E8F5FC]0 hover:shadow-lg"
              >
                Découvrir nos formations
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Droite — visuel */}
            <div className="flex w-full items-center justify-center lg:w-[42%] lg:shrink-0">
              <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md">
                {/* Simulation d'un dashboard de formation */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-800">Parcours Cloud Expert</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">En cours</span>
                </div>
                <div className="mb-4 flex flex-col gap-3">
                  {[
                    { label: "Fondamentaux Cloud", pct: 100, done: true },
                    { label: "Architecture AWS / Azure", pct: 75,  done: false },
                    { label: "Kubernetes & Conteneurs", pct: 40,  done: false },
                    { label: "FinOps & Gouvernance", pct: 10,  done: false },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className={item.done ? "font-semibold text-emerald-600" : "text-gray-600"}>{item.label}</span>
                        <span className={item.done ? "text-emerald-500" : "text-gray-400"}>{item.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-100">
                        <div
                          className={`h-1.5 rounded-full ${item.done ? "bg-emerald-400" : "bg-linear-to-r from-blue-500 to-cyan-400"}`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-xs font-bold text-white">
                    TK
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Formateur certifié Teknosure</p>
                    <p className="text-xs text-gray-400">Ingénieur Cloud — 8 ans d&apos;expérience</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
