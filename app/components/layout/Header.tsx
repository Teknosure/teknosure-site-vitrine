"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
 
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Déterminer si on doit avoir un header transparent
  // Page d'accueil OU pages de services individuels
  const shouldBeTransparent = pathname === '/' || (pathname?.startsWith('/services/') && pathname !== '/services');
  
  // Déterminer si on est sur une page avec fond sombre (pour les couleurs du texte)
  const isDarkBg = pathname?.startsWith('/services/') && pathname !== '/services';

  const services = [
    { name: "Cybersécurité", href: "/services/cybersecurite" },
    { name: "Cloud et Infogérance", href: "/services/cloud" },
    { name: "DevOps et CI/CD", href: "/services/devops" },
    { name: "Ingénierie logicielle", href: "/services/ingenierie" },
    { name: "IA et automatisation", href: "/services/ia" },
    { name: "Data & Analytics", href: "/services/data" }
  ];

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logique des couleurs
  const isTransparent = !isScrolled && shouldBeTransparent;
  
  // Sur page d'accueil : toujours texte gris même si transparent
  // Sur pages services : texte blanc si transparent, gris si scrollé
  const textColor = isTransparent && isDarkBg ? "text-white" : "text-gray-600";
  const textHoverColor = isTransparent && isDarkBg ? "hover:text-white" : "hover:text-gray-900";
  const logoColor = isTransparent && isDarkBg ? "text-white" : "text-gray-900";
  const buttonStyle = isTransparent && isDarkBg
    ? "bg-white text-gray-900 hover:bg-gray-100"
    : "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-transparent bg-transparent" 
          : "border-b border-gray-200 bg-white shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo avec marge à gauche */}
          <Link 
            href="/" 
            className={`ml-4 text-2xl font-bold transition-colors lg:ml-8 ${logoColor}`}
          >
            Teknosure
          </Link>

          {/* Navigation Desktop + CTA Button */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link 
              href="/"
              className={`text-sm font-medium transition-colors ${textColor} ${textHoverColor}`}
            >
              Maison
            </Link>

            {/* Dropdown Services */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${textColor} ${textHoverColor}`}
              >
                Services
                <svg 
                  className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Menu déroulant */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        {service.name}
                      </Link>
                    ))}
                    
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/services"
                        className="block px-4 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
                      >
                        Voir tous les services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/a-propos"
              className={`text-sm font-medium transition-colors ${textColor} ${textHoverColor}`}
            >
              À propos
            </Link>
            <Link 
              href="/etudes-de-cas"
              className={`text-sm font-medium transition-colors ${textColor} ${textHoverColor}`}
            >
              Études de cas
            </Link>
            <Link 
              href="/contact"
              className={`text-sm font-medium transition-colors ${textColor} ${textHoverColor}`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${buttonStyle}`}
            >
              Commencer
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 text-2xl md:hidden ${isTransparent ? "text-white" : "text-gray-900"}`}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white pb-4 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-gray-600">
                Maison
              </Link>
              
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-900">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-gray-600"
                    >
                      • {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/a-propos" className="text-sm font-medium text-gray-600">
                À propos
              </Link>
              <Link href="/etudes-de-cas" className="text-sm font-medium text-gray-600">
                Études de cas
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-600">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}