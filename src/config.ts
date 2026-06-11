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
  phone: "06 49 99 94 47",
  calendly: "https://calendly.com/je-admin-pro/30min",
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

/** Livrables de la méthode. */
export const deliverables = [
  "Diagnostic avec compte-rendu détaillé",
  "Plan d'action personnalisé et priorisé",
  "Mise en place d'une organisation ajustée à vos besoins",
  "Modèles de courrier, planning d'organisation hebdomadaire et check-list",
] as const;

/** Section méthode. */
export const methodSteps = [
  {
    title: "Le Check-up Complet",
    body: "Un audit approfondi de toute votre gestion administrative et vos obligations réglementaires.",
  },
  {
    title: "Votre feuille de route",
    body: "Je rédige pour vous un plan d'action personnalisé et priorisé, adapté à la réalité de votre entreprise.",
  },
  {
    title: "Structuration et Sécurisation",
    body: "Je travaille avec vous. Nous créons des méthodes de travail fluides et vérifions vos obligations administratives.",
  },
  {
    title: "Autonomie et Suivi",
    body: "Je vous remets des checklists. Nous effectuons un point de suivi un mois après mon intervention pour ajuster les derniers détails.",
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
  { href: "#apropos", label: "À propos" },
  { href: "#offres", label: "Offres" },
  { href: "#process", label: "Méthode" },
  { href: "#faq", label: "FAQ" },
] as const;

/** Section FAQ. */
export const faq = [
  {
    question: "Comment se déroule la première prise de contact ?",
    answer: "Un premier rendez-vous de découverte gratuit de 30 minutes — en visio ou en présentiel — permet de faire le point sur votre situation et de définir ensemble l'offre la plus adaptée. Sans engagement.",
  },
  {
    question: "Quelle est la différence avec mon expert-comptable ?",
    answer: "L'expert-comptable traite vos chiffres. Moi, j'organise tout ce qui arrive avant : le classement, les dossiers, les relances, les plannings, les courriers. Nous sommes complémentaires, pas concurrents.",
  },
  {
    question: "Mes documents et données sont-ils confidentiels ?",
    answer: "Absolument. Une charte de confidentialité est signée dès le début de chaque mission. Vos données ne sont jamais partagées ni transmises à des tiers.",
  },
  {
    question: "Travaillez-vous à distance ou en présentiel ?",
    answer: "Les deux, selon vos préférences et votre localisation. Les rendez-vous peuvent se tenir dans vos locaux ou en visio — l'essentiel est que vous soyez à l'aise.",
  },
  {
    question: "Puis-je changer d'offre si mes besoins évoluent ?",
    answer: "Oui. Si votre situation change en cours de mission, nous réévaluons ensemble et ajustons l'accompagnement en conséquence.",
  },
  {
    question: "Intervenez-vous uniquement dans la restauration ?",
    answer: "La restauration est mon domaine de spécialisation, mais j'accompagne également d'autres TPE/PME dont les besoins en gestion administrative sont similaires. N'hésitez pas à me contacter pour en discuter.",
  },
] as const;
