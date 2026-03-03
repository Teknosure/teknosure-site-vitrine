import Image from "next/image";

const categories = [
  {
    label: "Fournisseurs Cloud",
    techs: [
      { name: "AWS",         logo: "/images/tech/amazonaws.svg",     bg: "bg-amber-50",   filter: "invert(55%) sepia(90%) saturate(500%) hue-rotate(20deg)" },
      { name: "Azure",       logo: "/images/tech/microsoftazure.svg",bg: "bg-sky-50",     filter: "invert(35%) sepia(80%) saturate(600%) hue-rotate(185deg)" },
      { name: "Google Cloud",logo: "/images/tech/googlecloud.svg",   bg: "bg-blue-50",    filter: "invert(40%) sepia(80%) saturate(400%) hue-rotate(185deg)" },
    ],
  },
  {
    label: "Infrastructure as Code",
    techs: [
      { name: "Terraform",   logo: "/images/tech/terraform.svg",     bg: "bg-violet-50",  filter: "invert(35%) sepia(90%) saturate(400%) hue-rotate(250deg)" },
      { name: "Ansible",     logo: "/images/tech/ansible.svg",       bg: "bg-red-50",     filter: "invert(20%) sepia(80%) saturate(600%) hue-rotate(350deg)" },
    ],
  },
  {
    label: "Conteneurs & Orchestration",
    techs: [
      { name: "Docker",      logo: "/images/tech/docker.svg",        bg: "bg-blue-50",    filter: "invert(40%) sepia(90%) saturate(400%) hue-rotate(185deg)" },
      { name: "Kubernetes",  logo: "/images/tech/kubernetes.svg",    bg: "bg-blue-50",    filter: "invert(30%) sepia(90%) saturate(600%) hue-rotate(200deg)" },
    ],
  },
  {
    label: "Observabilité & CI/CD",
    techs: [
      { name: "Prometheus",  logo: "/images/tech/prometheus.svg",    bg: "bg-orange-50",  filter: "invert(50%) sepia(90%) saturate(600%) hue-rotate(10deg)" },
      { name: "Grafana",     logo: "/images/tech/grafana.svg",       bg: "bg-orange-50",  filter: "invert(45%) sepia(80%) saturate(500%) hue-rotate(15deg)" },
      { name: "GitLab CI",   logo: "/images/tech/gitlab.svg",        bg: "bg-orange-50",  filter: "invert(50%) sepia(90%) saturate(600%) hue-rotate(10deg)" },
      { name: "Jenkins",     logo: "/images/tech/jenkins.svg",       bg: "bg-red-50",     filter: "invert(20%) sepia(80%) saturate(600%) hue-rotate(350deg)" },
    ],
  },
];

export default function CloudTechSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">Stack technique</span>
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Technologies</h2>
          <p className="mt-2 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
            Nos ingénieurs cloud maîtrisent les outils leaders du marché pour concevoir, déployer et opérer vos infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-gray-200" />
                <h3 className="shrink-0 text-xs font-semibold uppercase tracking-widest text-gray-400">{cat.label}</h3>
                <span className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="group flex flex-col items-center gap-2">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tech.bg} p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                      <Image src={tech.logo} alt={tech.name} width={32} height={32} className="h-8 w-8 object-contain" style={{ filter: tech.filter }} />
                    </div>
                    <span className="text-center text-xs font-medium leading-tight text-gray-500 transition-colors group-hover:text-gray-800">{tech.name}</span>
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
