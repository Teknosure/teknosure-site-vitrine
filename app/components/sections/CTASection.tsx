import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-gradient-to-r from-[var(--primary-dark)] to-blue-700 px-6 py-14 text-center text-white sm:px-10 lg:px-16 lg:py-20">
          <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            Prêt à transformer votre infrastructure informatique ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm text-blue-50 sm:text-lg">
            Prenez rendez-vous pour une consultation gratuite avec nos architectes 
            seniors afin de discuter de vos besoins spécifiques.
          </p>
          <Link
            href="#contact"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-[var(--primary)] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Planifier une consultation
          </Link>
        </div>
      </div>
    </section>
  );
}