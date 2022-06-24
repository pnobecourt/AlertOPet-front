// on importe les dépendances nécessaires
import axios from 'axios';

// on récupère la constant baseUrl depuis apiClientService
import { baseUrl } from './apiClientService';

// on utilise endpoint dédié /wp/v2/ingredient
const endpoint = '/wp/v2/species';

// on fait en sorte  de pouvoir "import" cet objet depuis un autre fichier JS
export default {
    // on récupère tous les types de recettes
    getAllSpecies() {
        const responsePromise = axios.get(baseUrl + endpoint);

        // on renvoie le résultat de l'appel axios, comme ça on gère la Promise retournée par axios directement à l'endroit où on a fait appel à getAllIngredients()
        return responsePromise;
    }
}