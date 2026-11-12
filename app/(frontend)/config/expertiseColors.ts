/**
 * Configuration centralisée des couleurs par expertise
 * Utilisée pour maintenir la cohérence visuelle à travers tout le site
 */

export const expertiseColors = {
  cloud: {
    name: "Infrastructure, réseaux & cloud",
    primary: "#0ea5e9",        // sky-500
    primaryDark: "#0284c7",    // sky-600
    primaryLight: "#e0f2fe",   // sky-50
    primaryBorder: "#bae6fd",  // sky-200
    gradient: "from-sky-600 to-cyan-500",
    textColor: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    hoverBg: "hover:bg-sky-100",
    ringColor: "ring-sky-500",
  },
  infogerance: {
    name: "Infogérance & Services Managés",
    primary: "#f97316",        // orange-500
    primaryDark: "#ea580c",    // orange-600
    primaryLight: "#fff7ed",   // orange-50
    primaryBorder: "#fed7aa",  // orange-200
    gradient: "from-orange-600 to-amber-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverBg: "hover:bg-orange-100",
    ringColor: "ring-orange-500",
  },
  ingenierie: {
    name: "Apps & Solutions sur mesure",
    primary: "#8b5cf6",        // violet-500
    primaryDark: "#7c3aed",    // violet-600
    primaryLight: "#f5f3ff",   // violet-50
    primaryBorder: "#ddd6fe",  // violet-200
    gradient: "from-violet-600 to-purple-500",
    textColor: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    hoverBg: "hover:bg-violet-100",
    ringColor: "ring-violet-500",
  },
  ia: {
    name: "IA et automatisation",
    primary: "#10b981",        // emerald-500
    primaryDark: "#059669",    // emerald-600
    primaryLight: "#ecfdf5",   // emerald-50
    primaryBorder: "#a7f3d0",  // emerald-200
    gradient: "from-emerald-600 to-teal-500",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    hoverBg: "hover:bg-emerald-100",
    ringColor: "ring-emerald-500",
  },
  cybersecurite: {
    name: "Cybersécurité",
    primary: "var(--primary)",
    primaryDark: "var(--primary-dark)",
    primaryLight: "var(--primary-light)",
    primaryBorder: "var(--primary-border)",
    gradient: "from-[var(--primary-dark)] to-[var(--primary)]",
    textColor: "text-[var(--primary)]",
    bgColor: "bg-[var(--primary-light)]",
    borderColor: "border-[var(--primary-border)]",
    hoverBg: "hover:bg-[var(--primary-light)]",
    ringColor: "ring-[var(--primary)]",
  },
} as const;

export type ExpertiseKey = keyof typeof expertiseColors;

/**
 * Retourne les couleurs pour une expertise donnée
 * @param key - clé de l'expertise (cloud, infogerance, ingenierie, ia, cybersecurite)
 * @returns objet contenant toutes les variantes de couleur
 */
export function getExpertiseColors(key: ExpertiseKey) {
  return expertiseColors[key];
}
