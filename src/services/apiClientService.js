// on exporte cette constante via son nom et non pas par défaut (pas de default)
// on peut utiliser process.env pour récupérer des valeurs depuis le fichier .env (grâce à Parcel). ici on récupère API_BASE_URL
export const baseUrl = process.env.API_BASE_URL;