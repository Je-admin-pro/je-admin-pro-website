/**
 * Configuration centrale du site.
 * ⚠️ Valeurs placeholder à remplacer par les infos réelles de Julie.
 */
export const site = {
  name: "Julie Etienne",
  role: "Assistante administrative indépendante",
  city: "Sélestat",
  niche: "spécialisée dans la restauration",
  email: "je.admin.pro@gmail.com",
  siret: "832 213 789 00023",
  phone: "06 49 99 94 47",
  calendly: "https://calendly.com/je-admin-pro/30min",
  url: "https://je-admin-pro.fr",
  description:
    "Julie Etienne, assistante administrative indépendante spécialisée dans la restauration à Sélestat. Audit, organisation et accompagnement des dirigeants de TPE/PME.",
} as const;

/** Section statistiques. */
export const stats = [
  {
    value: 28,
    suffix: "%",
    description:
      "des dirigeants perdent 2 jours complets par semaine dans l'administratif (source CPME)",
  },
  {
    value: 80,
    suffix: "+",
    description:
      "obligations réglementaires par an à gérer pour un patron de restauration",
  },
  {
    value: 82,
    suffix: "%",
    description:
      "déclarent être surmenés et manquer de temps pour leur gestion",
  },
] as const;

/** Section solution. */
export const solutions = [
  {
    title: "Une gestion organisée, claire et maîtrisée",
    body: "Vos documents sont classés, vos dossiers structurés et vos échéances suivies. Vous reprenez le contrôle sans y passer vos journées.",
  },
  {
    title: "Moins de stress, moins d'oublis et une sérénité retrouvée",
    body: "Vous déléguez ce qui vous pèse et diminuez votre charge mentale au quotidien pour vous concentrer sur ce que vous faites de mieux : développer votre activité.",
  },
  {
    title: "Fini les samedis à chercher les factures",
    body: "Votre facturation est structurée pour ne plus jamais vous prendre vos week-ends",
  },
  {
    title: "10 h récupérées en moyenne par mois dès le 1er mois",
    body: "Votre temps coûte cher. Des heures récupérées sont des heures que vous pouvez investir dans votre croissance",
  },
] as const;

/** Section offres. */
export const offres = [
  {
    eyebrow: "Démarrer léger",
    name: "Le Check-Up Clarté",
    baseline: ["10 jours", "2 RDV (2H30)"],
    features: [
      "Audit complet de votre organisation",
      "Feuille de route priorisée sur 30 jours",
      "Tableau des obligations restaurateur",
    ],
    ctaLabel: "Pour y voir clair",
    ideal:
      "Idéal pour savoir où vous en êtes et par où commencer, sans vous engager.",
    recommended: false,
  },
  {
    eyebrow: "Le meilleur compromis",
    name: "Gestion Maîtrisée",
    baseline: ["3 mois", "7 RDV (11H30)", "Suivi WhatsApp"],
    features: [
      "Check-Up + feuille de route incluse",
      "3 sessions de structuration avec vous",
      "Check-lists d'autonomie opérationnelle",
      "Suivi à 1 mois inclus",
    ],
    ctaLabel: "Pour devenir autonome en 3 mois",
    ideal: "Idéal pour un gain de temps",
    recommended: true,
  },
  {
    eyebrow: "Tranquillité totale",
    name: "Autonomie Sereine",
    baseline: ["6 mois", "11 RDV (16H30)"],
    features: [
      "Tout Gestion Maîtrisée + 3 mois de suivi supplémentaire",
      "Formation de votre second",
      "Mise à jour réglementaire",
    ],
    ctaLabel: "Pour rester autonome durablement",
    ideal: "Idéal pour une sérénité continue",
    recommended: false,
  },
] as const;

/** Mention affichée sous les cartes d'offres. */
export const offresNote =
  "Tarif transparent donné lors du RDV Clarté gratuit. Paiement échelonné possible";

/** Livrables de la méthode. */
export const deliverables = [
  "Diagnostic clair avec compte-rendu détaillé",
  "Une feuille de route priorisée, adaptée à votre restaurant",
  "Une organisation qui vous correspond",
  "Des outils adaptés : modèles sur mesure, planning d’organisation, check-lists .",
] as const;

/** Section méthode. */
export const methodSteps = [
  {
    title: "Le Check-up complet",
    body: "J'audite toute votre gestion administrative et vos obligations réglementaires.",
    purpose: "identifier immédiatement les points de blocage et les risques.",
  },
  {
    title: "Votre feuille de route",
    body: "Rédaction d'un plan d'action clair, concret et adapté à votre réalité terrain.",
    purpose: "savoir exactement quoi faire et dans quel ordre.",
  },
  {
    title: "Structuration et Sécurisation",
    body: "Nous créons ensemble des méthodes fluides et sécurisons vos obligations.",
    purpose: "gagner du temps et éviter les oublis.",
  },
  {
    title: "Autonomie et Suivi",
    body: "Je vous remets vos outils et on fait le point 1 mois après.",
    purpose: "rester autonome durablement, sans jamais retomber dans le chaos.",
  },
] as const;

/** Section problèmes. */
export const problems = [
  "Vous n'en pouvez plus de la paperasse.",
  "Vous vivez sous pression en permanence.",
  "Vous perdez un temps précieux.",
  "Vous avez peur de faire une erreur.",
  "Vous craignez de payer des pénalités ou des majorations.",
  "Il est temps que ça change.",
] as const;

/** Bande défilante — mots-clés de services. */
export const marqueeKeywords = [
  "Gestion administrative",
  "Facturation & relances",
  "Tableaux de bord",
  "Gestion des plannings",
  "Rédaction de courriers",
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
  { href: "#apropos", label: "À propos" },
  { href: "#offres", label: "Offres" },
  { href: "#process", label: "Méthode" },
  { href: "#faq", label: "FAQ" },
] as const;

/** Section FAQ. */
export const faq = [
  {
    question: "Comment se déroule la première prise de contact ?",
    answer:
      "Lors d'un premier rendez-vous découverte gratuit de 30 minutes (en visio ou en présentiel), nous faisons le point sur votre organisation administrative, vos difficultés et vos objectifs. Cet échange nous permet de déterminer ensemble l'accompagnement le plus adapté à votre situation. Sans engagement.",
  },
  {
    question: "Mes documents et données sont-ils confidentiels ?",
    answer:
      "Absolument. Une charte de confidentialité est signée dès le début de chaque mission. Vos données sont traitées avec la plus grande discrétion et ne sont jamais partagées ni transmises à des tiers.",
  },
  {
    question: "Travaillez-vous à distance ou en présentiel ?",
    answer:
      "Les deux. Selon votre localisation et vos préférences, les rendez-vous peuvent se dérouler dans vos locaux, téléphone ou en visioconférence. L'essentiel est de vous proposer un accompagnement simple, efficace et adapté à votre organisation.",
  },
  {
    question: "Puis-je changer d'offre si mes besoins évoluent ?",
    answer:
      "Oui. Votre activité évolue, votre accompagnement aussi. Si vos besoins changent en cours de mission, nous faisons le point ensemble afin d'adapter la formule la plus pertinente.",
  },
  {
    question: "Intervenez-vous uniquement dans la restauration ?",
    answer:
      "La restauration est mon domaine de spécialisation et représente le cœur de mon activité. Grâce à mon expérience du secteur, je connais les contraintes spécifiques des restaurateurs et je leur propose un accompagnement adapté à leur réalité. J'accompagne également certaines TPE lorsque leurs besoins correspondent à mon expertise.",
  },
  {
    question: "Faites-vous l'administratif à ma place ?",
    answer:
      "Non. Mon objectif est de vous rendre autonome. Je mets en place une organisation claire, des outils personnalisés et une méthode adaptée à votre établissement afin que vous puissiez gérer votre administratif sereinement, sans dépendre d'une prestation externalisée. Si nécessaire, je reste disponible pour vous accompagner ponctuellement.",
  },
] as const;
