# je-admin-pro-website

Site vitrine de **Julie Etienne**, assistante administrative indépendante spécialisée dans la restauration à Sélestat.

## Stack

- [Astro](https://astro.build) v6 — générateur de site statique
- [Tailwind CSS](https://tailwindcss.com) v4 — design tokens via `@theme`
- TypeScript strict
- Déployé sur Vercel

## Lancer le projet

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
```

Node.js >= 22.12.0 requis.

## Structure

```
src/
├── config.ts              # Données du site (textes, offres, FAQ…)
├── layouts/Layout.astro   # Layout principal (meta, SEO, Schema.org)
├── pages/
│   ├── index.astro
│   ├── mentions-legales.astro
│   └── politique-de-confidentialite.astro
├── components/
│   ├── Navbar.astro       # Nav fixe avec scroll-spy
│   ├── Hero.astro
│   ├── About.astro
│   ├── Problems.astro
│   ├── Solutions.astro
│   ├── Offres.astro       # 4 offres en lignes colorées
│   ├── Process.astro      # Méthode en 4 étapes
│   ├── FAQ.astro          # Accordéon zero-JS
│   ├── CTA.astro
│   ├── Footer.astro
│   ├── Marquee.astro
│   └── Stats.astro
├── scripts/animations.ts  # Scroll-reveal via IntersectionObserver
├── styles/global.css
└── assets/
```

## Contenu

Tout le contenu éditorial est centralisé dans **`src/config.ts`** : coordonnées, offres, étapes de la méthode, FAQ, mots-clés du marquee. C'est le seul fichier à modifier pour mettre à jour les textes.

## TODOs

Voir `todo.txt` (gitignored) pour la liste des points restants (domaine final, SIRET, favicon).
