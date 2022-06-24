// dans ce service on gère la ressource "recipe"

import axios from 'axios';

// on récupère la constant baseUrl depuis apiClientService
import { baseUrl } from './apiClientService';

const endpoint = '/wp/v2/alert';

const petsPerPage = '5';

export default {

    // on récupère une liste de recette
    getPet(page, selectedRecipeTypeList, selectedIngredientList) {
        // toutes les requêtes vont tenir compte du nombre de résultats par page
        let queryString = '?per_page=' + petsPerPage + '&page=' + page;
        // gestion du filtre recipeType :
        // nomdelataxo[terms]=iddeterms
        // nomdelataxo[operator]=RELATION (OR ou AND, exlusif ou non)
        // on veut ajouter des paramètres dans l'URL : ?recipe_type[terms]=18,17&recipe_type[operator]=AND
        // on ne veut appliquer ces filtres que dans le cas où on a sélectionné des types de recettes dans le select multiple.
        if (selectedRecipeTypeList.length > 0) {
            // join() permet de rassembler les éléments d'un array dans une seule chaîne de caractère avec le séparateur fourni en argument
            const recipeTypeTerms = selectedRecipeTypeList.join(',');
            queryString += '&pet_type[terms]=' + recipeTypeTerms + '&pet_type[operator]=AND'
        }

        // idem avec le filtre ingredient
        if (selectedIngredientList.length > 0) {
            const ingredientTerms = selectedIngredientList.join(',');
            queryString += '&ingredient[terms]=' + ingredientTerms + '&ingredient[operator]=AND'
        }

        // axios.get() retourne une Promise => on attend que cette méthode réponde, puis on déclenche then() en cas de succès, et catch() en cas d'erreur.
        // on return directement cette promesse
        return axios.get(baseUrl + endpoint + queryString);
    },

    // récupérer les données d'une recette par son id
    getSinglePet(alertId) {
        return axios.get(baseUrl + endpoint + '/' + alertId + '?_embed');
    },


    createPet(recipeData) {

        return axios.post(
            baseUrl + endpoint,
            animalData, // on passe directement l'objet recu en paramètre et qui contient les valeurs saisies dans le formulaire
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }

        );
    }

}
