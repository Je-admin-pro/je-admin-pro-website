/**
 * Configuration centrale du site.
 * ⚠️ Valeurs placeholder à remplacer par les infos réelles de Julie.
 */
export const site = {
  name: "Julie Etienne",
  role: "Assistante administrative indépendante",
  city: "Sélestat",
  niche: "spécialisée dans la restauration",
  email: "contact@julie-etienne.fr", // TODO: email réel
  phone: "06 00 00 00 00", // TODO: téléphone réel
  calendly: "https://calendly.com/julie-etienne/decouverte", // TODO: lien Calendly réel
} as const;

/** Section statistiques. */
export const stats = [
  {
    value: 28,
    suffix: "%",
    description: "des dirigeants consacrent au moins 2 jours complets par semaine à des tâches administratives",

  },
  {
    value: 80,
    suffix: "+",
    description: "obligations réglementaires différentes à gérer chaque année pour un dirigeant",
  },
  {
    value: 82,
    suffix: "%",
    description: "des dirigeants déclarent être surmenés et ne pas avoir de temps pour leur administratif",
  },
] as const;

/** Section solution. */
export const solutions = [
  {
    title: "Une gestion organisée, claire et maîtrisée",
    body: "Vos documents sont classés, vos dossiers structurés et vos échéances suivies. Vous reprenez le contrôle sans y passer vos journées.",
  },
  {
    title: "Une charge mentale enfin allégée",
    body: "Vous déléguez ce qui vous pèse et retrouvez la sérénité au quotidien pour vous concentrer sur ce que vous faites de mieux : développer votre activité.",
  },
  {
    title: "Une vision précise de votre activité et de vos objectifs",
    body: "Tableaux de bord, suivi de facturation, indicateurs clés... vous disposez des bonnes informations au bon moment pour décider avec confiance.",
  },
  {
    title: "Une entreprise sécurisée",
    body: "Vos obligations réglementaires sont respectées et vos procédures documentées. Vous avancez sur des bases solides, sans craindre les oublis.",
  },
] as const;

/** Section offres. */
export const offres = [
  {

    name: "Intervention ponctuelle",
    tagline: "À la carte",
    price: "50 €",
    priceNote: "/heure",
    features: [
      "Pré-comptabilité",
      "Constitution du dossier mensuel destiné à l'expert-comptable",
    ],
  },
  {
    name: "Clarté Gestion",
    tagline: "Autonomie guidée",
    price: "250 €",
    priceNote: "",
    features: [
      "2 rendez-vous de 2H",
      "Audit de votre gestion",
      "Élaboration d'un compte rendu et d'un plan d'action pour structurer votre gestion en autonomie",
      "Suivi à un mois",
    ],
  },
  {
    name: "Pilotage & Croissance",
    tagline: "Bras droit du dirigeant",
    price: "600 €",
    priceNote: "/mois",
    features: ["3 rendez-vous de 1H30 par mois",
      "Audit de votre gestion",
      "Mise en place de votre organisation",
      "Aide à la prise de décision",
      "Suivi mensuel",
      "Ajustements",
      "Conseils stratégiques"
    ],
  },
  {
    name: "Gestion Maîtrisée",
    tagline: "Accompagnement complet",
    price: "1 500 €",
    priceNote: "",
    features: [
      "10 rendez-vous de 1H30 sur 3 mois",
      "Audit de votre gestion",
      "Mise en place de votre organisation",
      "Structuration de la méthode de travail",
      "Suivi et ajustements",
    ],
  },
] as const;

/** Section problèmes. */
export const problems = [
  "Vous avez l'impression de stagner ou d'être bloqué dans votre activité.",
  "Vous dossiers s'accumulent et vous n'arrivez plus à vous y retrouver.",
  "Votre charge mentale est saturée et vous n'arrive plus à avancer",
  "Vous vous sentez seul, stressé et débordé.",
  "Vous craignez d'oublier de faire des choses importantes.",
  "Vous vous sentez esclave de votre administratif et vous perdez du temps.",
] as const;

/** Bande défilante — mots-clés de services. */
export const marqueeKeywords = [
  "Gestion administrative",
  "Facturation & relances",
  "Suivi comptable",
  "Tableaux de bord",
  "Gestion des plannings",
  "Rédaction de courriers",
  "Permanence téléphonique",
  "Classement & archivage",
] as const;

/** Bande défilante — valeurs (sens inverse). */
export const marqueeValues = [
  "Réactivité",
  "Rigueur",
  "Confidentialité",
  "Disponibilité",
  "Proximité",
  "Fiabilité",
  "Écoute",
  "Engagement",
] as const;

/** Liens d'ancrage de la navigation. */
export const navLinks = [
  { href: "#offres", label: "Prestations" },
  { href: "#process", label: "Méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#faq", label: "FAQ" },
] as const;
