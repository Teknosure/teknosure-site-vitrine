import Image from "next/image";

const categories = [
  {
    label: "Modèles & LLMs",
    techs: [
      { name: "OpenAI", logo: "/images/tech/openai.svg", filter: "brightness-0" },
      { name: "Hugging Face", logo: "/images/tech/huggingface.svg", filter: "brightness-0 saturate-100 invert-[35%] sepia-[80%] saturate-[400%] hue-rotate-[5deg]" },
      { name: "Ollama", logo: "/images/tech/ollama.svg", filter: "brightness-0" },
      { name: "LangChain", logo: "/images/tech/langchain.svg", filter: "brightness-0 saturate-100 invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[100deg]" },
    ],
  },
  {
    label: "Machine Learning",
    techs: [
      { name: "PyTorch", logo: "/images/tech/pytorch.svg", filter: "brightness-0 saturate-100 invert-[30%] sepia-[80%] saturate-[600%] hue-rotate-[10deg]" },
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg", filter: "brightness-0 saturate-100 invert-[40%] sepia-[80%] saturate-[400%] hue-rotate-[5deg]" },
      { name: "Python", logo: "/images/tech/python.svg", filter: "brightness-0 saturate-100 invert-[35%] sepia-[80%] saturate-[400%] hue-rotate-[200deg]" },
    ],
  },
  {
    label: "Automatisation",
    techs: [
      { name: "n8n", logo: null, initials: "n8n", color: "#ea4b71" },
      { name: "Datadog", logo: "/images/tech/datadog.svg", filter: "brightness-0 saturate-100 invert-[25%] sepia-[80%] saturate-[600%] hue-rotate-[250deg]" },
      { name: "Atlassian", logo: "/images/tech/atlassian.svg", filter: "brightness-0 saturate-100 invert-[30%] sepia-[80%] saturate-[500%] hue-rotate-[200deg]" },
    ],
  },
  {
    label: "Infrastructure IA",
    techs: [
      { name: "Google Cloud", logo: "/images/tech/googlecloud.svg", filter: "brightness-0 saturate-100 invert-[30%] sepia-[80%] saturate-[400%] hue-rotate-[10deg]" },
      { name: "Azure", logo: "/images/tech/microsoftazure.svg", filter: "brightness-0 saturate-100 invert-[35%] sepia-[80%] saturate-[500%] hue-rotate-[185deg]" },
      { name: "Docker", logo: "/images/tech/docker.svg", filter: "brightness-0 saturate-100 invert-[35%] sepia-[80%] saturate-[400%] hue-rotate-[185deg]" },
      { name: "Kubernetes", logo: "/images/tech/kubernetes.svg", filter: "brightness-0 saturate-100 invert-[35%] sepia-[80%] saturate-[400%] hue-rotate-[185deg]" },
    ],
  },
];

export default function IATechSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-600">
            Stack technologique
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Les technologies que{" "}
            <span className="bg-linear-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
              nous maîtrisons
            </span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-gray-500">
            Un stack IA moderne, pragmatique et évolutif — sélectionné pour sa robustesse
            en production et son écosystème actif.
          </p>
        </div>

        {/* Grille catégories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-7"
            >
              <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-amber-600">
                {cat.label}
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-all group-hover:border-amber-200 group-hover:shadow-md">
                      {"logo" in tech && tech.logo ? (
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className={`h-7 w-auto object-contain ${tech.filter ?? ""}`}
                        />
                      ) : (
                        <span
                          className="text-sm font-extrabold"
                          style={{ color: (tech as { color?: string }).color ?? "#000" }}
                        >
                          {(tech as { initials?: string }).initials ?? tech.name.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-gray-500">{tech.name}</span>
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
