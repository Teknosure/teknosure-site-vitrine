import Image from "next/image";
import Link from "next/link";

export default function FFCyberSection() {
  return (
    <section className="bg-[#0a0f1e] py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Logo */}
          <div className="shrink-0">
            <div className="flex h-44 w-44 items-center justify-center rounded-2xl bg-white p-6 shadow-lg lg:h-52 lg:w-52">
              <Image
                src="/images/FFcyber.png"
                alt="FFCyber — Fédération Française de la Cybersécurité"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="flex-1 text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
              Membre officiel
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Fédération Française<br />de la Cybersécurité
            </h2>
            <Link
              href="https://ffcyber.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-blue-300 hover:text-blue-200 hover:underline"
            >
              ffcyber.fr ↗
            </Link>

            {/* Citation */}
            <blockquote className="mt-6 border-l-2 border-blue-500 pl-5">
              <p className="text-base leading-relaxed italic text-gray-300">
                &ldquo;Un niveau d&apos;exigence renforcé, une meilleure visibilité et légitimité auprès de nos clients et partenaires,
                et l&apos;opportunité de participer activement à la dynamique collective de la cybersécurité en France.
                C&apos;est une reconnaissance de notre positionnement et un levier supplémentaire pour poursuivre notre développement.&rdquo;
              </p>
              <footer className="mt-3 flex items-center gap-2">
                <span className="h-px w-6 bg-blue-500" />
                <span className="text-sm font-semibold text-blue-400">Direction Teknosure</span>
              </footer>
            </blockquote>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Exigence renforcée", "Légitimité nationale", "Dynamique collective", "Reconnaissance sectorielle"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
