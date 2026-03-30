import Link from "next/link";
import Image from "next/image";
import { Globe, Phone } from "lucide-react";

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

          {/* Contact avec vraies icônes */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                <span className="text-sm">
                  123 boulevard Tech, quartier Tech, 75001<br />
                  Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[var(--primary)]" />
                <a 
                  href="tel:+33123456789"
                  className="text-sm transition-colors hover:text-white"
                >
                  +33 1 23 45 67 89
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