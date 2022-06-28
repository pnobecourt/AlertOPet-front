// ================================================================
// petService

import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = '/wp/v2/alert';

const petsPerPage = '5';

export default {


    getPet(page, selectedRecipeTypeList, selectedIngredientList) {

        let queryString = '?per_page=' + petsPerPage + '&page=' + page;

        if (selectedRecipeTypeList.length > 0) {

            const recipeTypeTerms = selectedRecipeTypeList.join(',');
            queryString += '&pet_type[terms]=' + recipeTypeTerms + '&pet_type[operator]=AND'
        }

        if (selectedIngredientList.length > 0) {
            const ingredientTerms = selectedIngredientList.join(',');
            queryString += '&ingredient[terms]=' + ingredientTerms + '&ingredient[operator]=AND'
        }

        return axios.get(baseUrl + endpoint + queryString);
    },

    
    getSinglePet(alertId) {
        return axios.get(baseUrl + endpoint + '/' + alertId + '?_embed');
    },


    createPet(animalData) {

        return axios.post(

            baseUrl + "/aop/v1/pet",
            animalData, 
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }

        );
    },

    deletePet(animalData) {

console.log(animalData);
console.log(localStorage.getItem('token'));
        return axios.delete(
            
            baseUrl + "/aop/v1/pet/",
            animalData, 
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }

        );
    },
     
    upload(animalData, data){

        return axios.post(

            baseUrl + "/wp/v2/media",
            animalData, 
            {
                headers: {
                    'Content-Type': 'image/png',
                    "Authorization": "Bearer " + localStorage.getItem('token'),
                    'Content-Disposition': 'attachment; filename="[Pet]-131.png"'
                }
            }

        );
    }

}
