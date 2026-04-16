import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" aria-label="Teknosure — Accueil">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Teknosure"
                  width={200}
                  height={60}
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed">
              Des solutions numériques sécurisées et évolutives pour les entreprises modernes. 
              Nous transformons les entreprises grâce à la technologie.
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/teknosure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teknosure sur LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@teknosure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teknosure sur YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/teknosure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teknosure sur X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-white hover:bg-white hover:text-black"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/teknosure"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teknosure sur Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Expertises
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/cybersecurite" className="text-sm transition-colors hover:text-white">Cybersécurité & conformité</Link></li>
              <li><Link href="/services/cloud" className="text-sm transition-colors hover:text-white">Cloud & Réseaux</Link></li>
              <li><Link href="/services/infogerance" className="text-sm transition-colors hover:text-white">Infogérance IT & Infrastructure</Link></li>
              <li><Link href="/services/ingenierie" className="text-sm transition-colors hover:text-white">Ingénierie logicielle</Link></li>
              <li><Link href="/services/ia" className="text-sm transition-colors hover:text-white">IA et automatisation</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Teknosure
            </h3>
            <ul className="space-y-3">
              <li><Link href="/a-propos" className="text-sm transition-colors hover:text-white">À propos de nous</Link></li>
              <li><Link href="/etudes-de-cas" className="text-sm transition-colors hover:text-white">Nos Réalisations</Link></li>
              <li><Link href="/contact" className="text-sm transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-sm">
                  16 rue de Condorcet<br />
                  95150 Taverny, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+33146884975" className="text-sm transition-colors hover:text-white">
                  +33 1 46 88 49 75
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@teknosure.fr" className="text-sm transition-colors hover:text-white">
                  contact@teknosure.fr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Séparation */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>© 2026 Teknosure. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-white">
              Politique de confidentialité
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-white">
              Cookies
            </Link>
            <Link href="/conditions-utilisation" className="transition-colors hover:text-white">
              Conditions d'utilisation
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}