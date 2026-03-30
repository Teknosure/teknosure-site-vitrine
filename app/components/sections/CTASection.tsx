import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-gradient-to-r from-[#0D6EA1] to-blue-700 px-8 py-16 text-center text-white lg:px-16 lg:py-20">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Prêt à transformer votre infrastructure informatique ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-50">
            Prenez rendez-vous pour une consultation gratuite avec nos architectes 
            seniors afin de discuter de vos besoins spécifiques.
          </p>
          <Link
            href="#contact"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-[#1B9AD2] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Planifier une consultation
          </Link>
        </div>
      </div>
    </section>
  );
}