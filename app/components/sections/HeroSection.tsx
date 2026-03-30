import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-8">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        {/* Overlay blanc semi-transparent pour garder l'image visible */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Contenu par-dessus */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary-border)] bg-[var(--primary-light)] px-4 py-2 text-sm font-medium text-[var(--primary-dark)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary-light)]0"></span>
            </span>
            Cabinet de conseil et de conseil informatique de premier plan
          </div>

          {/* Titre */}
          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
            <span className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] bg-clip-text text-transparent">
              Intelligence numérique
            </span>
            <br />
            <span className="text-gray-900">sécurisée et évolutive</span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-600">
            Teknosure offre aux entreprises des solutions de cybersécurité de pointe, 
            une infrastructure cloud performante et des logiciels sur mesure. 
            Nous bâtissons les fondations de votre avenir numérique.
          </p>

          {/* Boutons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-gray-900 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
            >
              Obtenir une consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border-2 border-gray-300 bg-transparent px-8 py-3.5 text-center font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              Explorer les services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}