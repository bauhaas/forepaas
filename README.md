This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

**Page accueil :**

Pour le chart, je n'ai pas eu le temps nécessaire pour gérer la sélection de filtre par années / genres. Les données de ce chart correspondent aux films ayant fait le plus de revenue au global (diffère donc du 1er call api pour avoir les plus populaires). Au niveau de l'affichage, tout ne tient pas d'un seul tenant (chart + films populaires) mais je voulais garder un affichage décent des affiches de films.

**Page recherche :**

.

**Page détail :**

Concernant le système de notation, j'ai choisi de sauvegarder la note que l'on attribue à chaque film dans le localStorage. Techniquement c'est pas l'endroit le plus approprié. En temps normal, il faudrait qu'on sauvegarde cette valeur en base de donnée. Cela me semblait plus approprié

---

De manière plus générale, le projet était assez sympa à réaliser. Je connaissais déjà un peu le fonctionnement de tmdb donc ça à pu m'aider pour débuter plus facilement. J'ai tenté de découper au maximum mes composants ainsi que d'abstraire le maximum de logique de code de mes composants. Je n'ai pas forcément eu le temps d'aller aussi loin que ce que je voulais mais j'ai fais au mieux.

Pour les points d'améliorations:

- mon call api que je répète à chaque fois sur la page d'accueil
- Mes states redux ne sont pas persistent. Tant que l'on navigue normalement sur l'app, tout est ok. Si l'on souhaite accéder directement via l'url à `localhost:3000/search` ou `localhost:3000/movie/{id}` je vais avoir une erreur car l'affichage se base sur mon state contenant les données de mes films.
- l'organisation du css qui peut être plus propre (partie sur laquelle ou j'ai passé le moins de temps + dernièrement j'ai principalement travaillé avec tailwind)
- ajouter un squelette sur le layout de mes pages le temps de load toutes mes données
- clé api dans l'env push sur le repo
