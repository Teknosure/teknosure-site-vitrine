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
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Expertises
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/cybersecurite" className="text-sm transition-colors hover:text-white">Cybersécurité & conformité</Link></li>
              <li><Link href="/services/cloud" className="text-sm transition-colors hover:text-white">Infrastructure & Cloud</Link></li>
              <li><Link href="/services/infogerance" className="text-sm transition-colors hover:text-white">Infogérance & Services Managés</Link></li>
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
              politique de confidentialité
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