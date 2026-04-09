export type Article = {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured: boolean;
  content: string; // HTML ou Markdown-like JSX string
};

export const articles: Article[] = [
  {
    slug: "dilemme-ciso-proteger-anticiper",
    category: "Stratégie",
    readTime: "5 min",
    date: "2 avril 2026",
    title: "Le dilemme du CISO : protéger aujourd'hui, anticiper demain",
    excerpt:
      "Chaque jour, le CISO jongle entre pression des dirigeants, menaces qui évoluent plus vite que les budgets, et responsabilité de protéger des millions de données sensibles.",
    image: "/images/cybersecurite-image.jpg",
    featured: true,
    content: `
Le rôle de CISO (Chief Information Security Officer) est l'un des plus exigeants de l'entreprise moderne. Entre les injonctions contradictoires des directions métier, la pression budgétaire, et des menaces qui évoluent à une vitesse sans précédent, le CISO doit sans cesse arbitrer entre protection immédiate et vision à long terme.

## Une pression constante sur deux fronts

D'un côté, les équipes métier veulent aller vite : lancer de nouvelles applications, adopter des outils cloud, intégrer des services tiers. De l'autre, chaque nouvelle surface applicative est une nouvelle surface d'attaque potentielle.

Le CISO doit dire "oui, mais" là où tout le monde attend un "oui tout de suite". C'est là que la communication devient une compétence aussi critique que la technique.

## L'incident comme révélateur

Un soir, l'alerte tombe : tentative d'intrusion détectée sur un endpoint non supervisé. Vous avez 15 minutes pour comprendre le vecteur, isoler le système, alerter les bonnes personnes et décider si vous activez le plan de réponse aux incidents.

C'est dans ces moments que la préparation fait toute la différence. Une organisation qui a testé ses procédures, formé ses équipes et segmenté son réseau réagit de manière structurée. Une organisation qui ne l'a pas fait improvise — et l'improvisation coûte cher.

## Anticiper plutôt que subir

La clé : ne pas attendre l'incident pour réfléchir. Cartographier les actifs critiques, identifier les scénarios de menace les plus probables pour votre secteur, et tester régulièrement vos défenses.

Les frameworks comme **NIST CSF**, **ISO 27001** ou **EBIOS RM** ne sont pas que des obligations réglementaires — ce sont des outils de structuration de la pensée sécurité.

## Ce que Teknosure apporte

Teknosure accompagne les CISO et DSI dans la construction d'une posture de sécurité durable : audit, SOC managé, réponse à incidents et formation des équipes. Nous intervenons aussi bien en amont (prévention) qu'en réaction (remédiation).
    `.trim(),
  },
  {
    slug: "eti-pme-exposees-pas-condamnees",
    category: "ETI & PME",
    readTime: "4 min",
    date: "25 mars 2026",
    title: "Cybersécurité : les ETI sont exposées, mais pas condamnées",
    excerpt:
      "Les entreprises de taille intermédiaire sont devenues des cibles prioritaires. Sans les ressources des grands groupes, elles peuvent pourtant bâtir une posture solide avec les bons leviers.",
    image: "/images/cybersecurite-image.jpg",
    featured: false,
    content: `
Les ETI et PME représentent aujourd'hui plus de **60 % des victimes de cyberattaques** en France, selon les rapports annuels de l'ANSSI. Pourtant, beaucoup d'entre elles continuent de penser que les hackers s'attaquent uniquement aux grandes entreprises.

## Pourquoi les ETI sont dans le viseur

Trois raisons principales expliquent cette exposition :

1. **Sous-investissement historique** : la cybersécurité a longtemps été perçue comme un luxe réservé aux grands comptes.
2. **Maillon faible dans les chaînes d'approvisionnement** : les attaquants ciblent les ETI pour remonter vers leurs clients grands comptes.
3. **Absence de RSSI dédié** : les décisions de sécurité sont souvent prises par le DSI ou le DAF, sans expertise spécifique.

## Ce que vous pouvez faire dès maintenant

La bonne nouvelle : une posture solide ne nécessite pas un budget de grand groupe. Voici les actions à fort impact et faible coût :

- **Activer le MFA** sur tous les accès critiques (messagerie, VPN, administration)
- **Segmenter le réseau** pour limiter la propagation en cas d'intrusion
- **Former les collaborateurs** aux techniques de phishing (la principale porte d'entrée)
- **Mettre en place un plan de sauvegarde** testé régulièrement
- **Réaliser un audit** pour cartographier les vulnérabilités réelles

## L'approche Teknosure pour les ETI

Nous proposons des offres calibrées pour les ETI et PME : audit initial offert, déploiement rapide, contrat d'infogérance sécurité avec SLA adaptés à votre organisation. Pas de sur-dimensionnement, pas de coûts cachés.
    `.trim(),
  },
  {
    slug: "ia-generative-opportunite-ou-surface-attaque",
    category: "IA & Sécurité",
    readTime: "6 min",
    date: "18 mars 2026",
    title: "IA générative : opportunité ou nouvelle surface d'attaque ?",
    excerpt:
      "L'adoption massive des outils IA en entreprise crée de nouveaux vecteurs d'exposition : fuite de données, prompt injection, shadow IT. Comment encadrer sans brider l'innovation ?",
    image: "/images/cybersecurite-image.jpg",
    featured: false,
    content: `
En quelques mois, ChatGPT, Copilot et leurs concurrents sont devenus des outils du quotidien dans les entreprises. Des développeurs qui automatisent leurs revues de code, des commerciaux qui rédigent leurs emails, des juristes qui analysent des contrats — l'IA générative est partout.

## Les nouveaux risques concrets

### 1. Fuite de données via les prompts
Lorsqu'un collaborateur colle du code source, des données clients ou un contrat dans un outil IA externe, ces informations quittent potentiellement le périmètre de l'entreprise. Certains modèles utilisent les conversations pour s'entraîner.

### 2. Prompt injection
Une attaque relativement nouvelle : un contenu malveillant (dans un email, un document) contient des instructions cachées qui détournent le comportement d'un agent IA connecté à vos systèmes.

### 3. Shadow AI
Comme le shadow IT des années 2010, des équipes adoptent des outils IA non validés par la DSI, créant des angles morts dans votre cartographie des risques.

### 4. Deepfakes et ingénierie sociale
La génération de voix et vidéos réalistes abaisse drastiquement la barrière à l'entrée pour les attaques de type "fraude au président".

## Comment encadrer sans bloquer

La réponse n'est pas l'interdiction — elle serait contournée. C'est la **gouvernance** :

- Définir quels outils IA sont autorisés et dans quels contextes
- Mettre en place des politiques de classification des données (qu'est-ce qui peut être partagé avec un LLM externe ?)
- Déployer des solutions IA **on-premise** ou **en environnement privé** pour les usages sensibles
- Former les équipes aux risques spécifiques à l'IA

## L'approche Teknosure

Nous accompagnons les DSI dans la définition de leur politique IA : cartographie des usages existants, rédaction de la charte d'utilisation, et déploiement de solutions IA sécurisées en environnement maîtrisé.
    `.trim(),
  },
  {
    slug: "nis2-directive-dsi",
    category: "Conformité",
    readTime: "5 min",
    date: "10 mars 2026",
    title: "NIS2 : ce que la directive change concrètement pour votre DSI",
    excerpt:
      "Entrée en vigueur en 2024, NIS2 élargit les obligations de cybersécurité à des milliers d'entités françaises. Ce que vous devez mettre en place dès maintenant.",
    image: "/images/cybersecurite-image.jpg",
    featured: false,
    content: `
La directive NIS2 (Network and Information Security 2) est entrée en vigueur en octobre 2024. Elle remplace et élargit considérablement la directive NIS1 de 2016, et concerne désormais des milliers d'entités françaises supplémentaires.

## Qui est concerné ?

NIS2 introduit deux catégories d'entités :

- **Entités essentielles** : énergie, transports, santé, eau, infrastructures numériques, administrations — soumises aux contrôles les plus stricts
- **Entités importantes** : services postaux, gestion des déchets, industrie manufacturière, alimentaire, fournisseurs numériques — obligations allégées mais réelles

En France, l'ANSSI estime que **15 000 à 20 000 entités** entrent dans le périmètre NIS2, contre 500 sous NIS1.

## Ce qui change concrètement

### Gouvernance
- La direction générale est **personnellement responsable** du respect des obligations NIS2
- Des formations obligatoires pour les dirigeants et le personnel cyber

### Gestion des risques
- Mise en place d'une **politique de gestion des risques** formalisée
- Sécurisation de la **chaîne d'approvisionnement** (vos sous-traitants sont dans le périmètre)
- Plans de continuité et de reprise d'activité documentés et testés

### Notification des incidents
- **Alerte dans les 24h** à l'ANSSI en cas d'incident significatif
- Rapport intermédiaire sous 72h, rapport final sous 1 mois

### Sanctions
- Jusqu'à **10 millions d'euros ou 2 % du CA mondial** pour les entités essentielles
- Jusqu'à **7 millions d'euros ou 1,4 % du CA mondial** pour les entités importantes

## Par où commencer ?

1. **Déterminer si vous êtes concerné** (secteur + taille)
2. **Cartographier vos actifs critiques** et vos risques
3. **Auditer votre niveau de maturité actuel** par rapport aux exigences
4. **Définir un plan de mise en conformité** priorisé

Teknosure propose un accompagnement NIS2 complet : diagnostic initial, feuille de route, mise en œuvre technique et documentation réglementaire.
    `.trim(),
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
