# DoggyWalkiMTL MVP

Plateforme web locale (Montréal, Laval, Longueuil, Rive-Nord/Rive-Sud) pour trouver des compagnons de marche, découvrir des circuits dog-friendly, et organiser des marches sécuritaires.

## Stack

- Next.js 14 + TypeScript + Tailwind CSS
- Prisma + PostgreSQL
- Structure prête pour NextAuth et i18n fr/en

## Structure

```txt
app/
  page.tsx                    # accueil
  auth/page.tsx               # connexion / inscription
  dashboard/page.tsx          # tableau de bord
  companions/page.tsx         # recherche de compagnons
  routes/page.tsx             # carte + liste circuits
  routes/[id]/page.tsx        # détail d'un circuit
  events/page.tsx             # marches planifiées
  profile/page.tsx            # profil utilisateur
  pets/[id]/page.tsx          # profil animal
  api/requests/route.ts       # API MVP demandes de marche
components/
  nav-bar.tsx
  companion-card.tsx
  route-card.tsx
  route-map.tsx
  event-card.tsx
lib/
  data.ts                     # données de démonstration Montréal
  types.ts
  i18n.ts
prisma/
  schema.prisma
  seed.ts
```

## Démarrage local

1. Copier l'environnement:

```bash
cp .env.example .env
```

2. Installer les dépendances:

```bash
npm install
```

3. Générer Prisma et migrer:

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```

4. Lancer le serveur:

```bash
npm run dev
```

## Notes produit MVP

- Vie privée: uniquement des points de rencontre publics.
- Filtrage compagnons: base par secteur, énergie, type de marche.
- Confiance: score léger + badges.
- Extension future multi-ville via entité `Borough` et `regionGroup`.

## Prochaines améliorations

- Brancher NextAuth (email magic link + OAuth).
- Remplacer la carte iframe par Leaflet interactif avec clustering.
- Ajouter messagerie temps réel (WebSocket/Pusher).
- Intégrer modération (signalements, filtre contenus).
- Ajouter géocodage de points de rencontre avec arrondissements validés.
