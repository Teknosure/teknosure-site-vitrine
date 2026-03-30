import Image from "next/image";

const categories = [
  {
    label: "Front-end",
    techs: [
      { name: "React",        logo: "/images/tech/react.svg",        bg: "bg-cyan-50",    filter: "invert(66%) sepia(90%) saturate(400%) hue-rotate(160deg)" },
      { name: "Angular",      logo: "/images/tech/angular.svg",      bg: "bg-red-50",     filter: "invert(14%) sepia(96%) saturate(5000%) hue-rotate(350deg)" },
      { name: "Vue.js",       logo: "/images/tech/vuedotjs.svg",     bg: "bg-emerald-50", filter: "invert(58%) sepia(70%) saturate(400%) hue-rotate(100deg)" },
      { name: "TypeScript",   logo: "/images/tech/typescript.svg",   bg: "bg-[#E8F5FC]",    filter: "invert(30%) sepia(90%) saturate(600%) hue-rotate(200deg)" },
      { name: "Tailwind CSS", logo: "/images/tech/tailwindcss.svg",  bg: "bg-sky-50",     filter: "invert(60%) sepia(80%) saturate(400%) hue-rotate(170deg)" },
      { name: "Next.js",      logo: "/images/tech/nextdotjs.svg",    bg: "bg-gray-100",   filter: "none" },
    ],
  },
  {
    label: "Back-end",
    techs: [
      { name: "Node.js",      logo: "/images/tech/nodedotjs.svg",    bg: "bg-green-50",   filter: "invert(40%) sepia(80%) saturate(400%) hue-rotate(80deg)" },
      { name: "Java",         logo: "/images/tech/openjdk.svg",      bg: "bg-orange-50",  filter: "invert(50%) sepia(90%) saturate(600%) hue-rotate(10deg)" },
      { name: "Spring Boot",  logo: "/images/tech/spring.svg",       bg: "bg-green-50",   filter: "invert(45%) sepia(80%) saturate(500%) hue-rotate(90deg)" },
      { name: "Go",           logo: "/images/tech/go.svg",           bg: "bg-cyan-50",    filter: "invert(50%) sepia(90%) saturate(400%) hue-rotate(160deg)" },
      { name: ".NET",         logo: "/images/tech/dotnet.svg",       bg: "bg-purple-50",  filter: "invert(25%) sepia(80%) saturate(600%) hue-rotate(250deg)" },
      { name: "Python",       logo: "/images/tech/python.svg",       bg: "bg-[#E8F5FC]",    filter: "invert(30%) sepia(90%) saturate(600%) hue-rotate(200deg)" },
    ],
  },
  {
    label: "Mobile",
    techs: [
      { name: "Swift",         logo: "/images/tech/swift.svg",       bg: "bg-orange-50",  filter: "invert(50%) sepia(90%) saturate(600%) hue-rotate(10deg)" },
      { name: "Kotlin",        logo: "/images/tech/kotlin.svg",      bg: "bg-violet-50",  filter: "invert(35%) sepia(90%) saturate(600%) hue-rotate(250deg)" },
      { name: "React Native",  logo: "/images/tech/react.svg",       bg: "bg-cyan-50",    filter: "invert(66%) sepia(90%) saturate(400%) hue-rotate(160deg)" },
      { name: "Flutter",       logo: "/images/tech/flutter.svg",     bg: "bg-[#E8F5FC]",    filter: "invert(30%) sepia(90%) saturate(600%) hue-rotate(185deg)" },
    ],
  },
  {
    label: "DevOps & Cloud",
    techs: [
      { name: "Docker",        logo: "/images/tech/docker.svg",      bg: "bg-[#E8F5FC]",    filter: "invert(40%) sepia(90%) saturate(400%) hue-rotate(185deg)" },
      { name: "Kubernetes",    logo: "/images/tech/kubernetes.svg",  bg: "bg-[#E8F5FC]",    filter: "invert(30%) sepia(90%) saturate(600%) hue-rotate(200deg)" },
      { name: "Terraform",     logo: "/images/tech/terraform.svg",   bg: "bg-violet-50",  filter: "invert(35%) sepia(90%) saturate(400%) hue-rotate(250deg)" },
      { name: "GitLab CI",     logo: "/images/tech/gitlab.svg",      bg: "bg-orange-50",  filter: "invert(50%) sepia(90%) saturate(600%) hue-rotate(10deg)" },
      { name: "AWS",           logo: "/images/tech/amazonaws.svg",   bg: "bg-amber-50",   filter: "invert(55%) sepia(90%) saturate(500%) hue-rotate(20deg)" },
      { name: "Azure",         logo: "/images/tech/microsoftazure.svg", bg: "bg-sky-50",  filter: "invert(35%) sepia(80%) saturate(600%) hue-rotate(185deg)" },
    ],
  },
];

export default function IngenieiereTechSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1B9AD2]">
            Stack technique
          </span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Technologies
          </h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            Nos développeurs maîtrisent un large éventail de technologies pour répondre
            à tous vos besoins de développement.
          </p>
        </div>

        {/* Catégories */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Titre catégorie */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-gray-200" />
                <h3 className="shrink-0 text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {cat.label}
                </h3>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Grille de logos */}
              <div className="grid grid-cols-3 gap-5 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tech.bg} p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}
                    >
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                        style={{ filter: tech.filter }}
                      />
                    </div>
                    <span className="text-center text-xs font-medium leading-tight text-gray-500 transition-colors group-hover:text-gray-800">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
