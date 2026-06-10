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

/** Liens d'ancrage de la navigation. */
export const navLinks = [
  { href: "#offres", label: "Prestations" },
  { href: "#process", label: "Méthode" },
  { href: "#apropos", label: "À propos" },
  { href: "#faq", label: "FAQ" },
] as const;
