# Les Jardins Partagés — site vitrine

Site vitrine full stack pour une association fictive de jardinage urbain.
Frontend React (Vite) + backend Node/Express.

## Lancer le projet dans VS Code

Ouvre le dossier `site-vitrine` dans VS Code, puis dans **deux terminaux séparés** :

### Terminal 1 — le backend
```bash
cd server
npm install
npm run dev
```
Le serveur démarre sur http://localhost:5000

### Terminal 2 — le frontend
```bash
cd client
npm install
npm run dev
```
Le site s'ouvre sur http://localhost:5173

## Structure

```
site-vitrine/
├── client/          → app React (Vite)
│   └── src/
│       ├── components/   Navbar, Footer
│       └── pages/        Home, About, Ateliers, Contact
└── server/          → API Express
    ├── server.js
    └── data/contacts.json   → messages du formulaire sauvegardés ici
```

## Pour aller plus loin (si tu as du temps)

- Remplacer `contacts.json` par une vraie base (SQLite, MongoDB)
- Déployer le frontend sur Vercel et le backend sur Render
- Ajouter une page 404 et un vrai favicon
