// ================================================================
// petService

import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = '/wp/v2/alert';

const petsPerPage = '5';

export default {


    getFilteredPet(page, selectedSpecies, selectedCity) {

        let queryString = '?per_page=' + petsPerPage + '&page=' + page;

        if (selectedSpecies) {

            queryString += '&species=' + selectedSpecies
        }

        if (selectedCity) {

            queryString += '&alert_localization=' + selectedCity
        }

        return axios.get(baseUrl + endpoint + queryString);
    },

    getPet(page, selectedType, selectedCity) {

        let queryString = '?per_page=' + petsPerPage + '&page=' + page;

        if (selectedType) {

            queryString += '&alert_type=' + selectedType
        }

        if (selectedCity) {

            queryString += '&alert_localization=' + selectedCity
        }

        return axios.get(baseUrl + endpoint + queryString);
    },


    getSinglePet(alertId) {
        return axios.get(baseUrl + endpoint + '/' + alertId + '?_embed');
    },


    createPet(animalData,selectedType) {

        return axios.post(

            baseUrl + "/aop/v1/pet?alert_type="+ selectedType,
            animalData, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }

        );
    },

    createPetAlert(animalData, picked, selectedCity) {

        return axios.post(

            baseUrl + "/wp/v2/alert?alert_type="+picked+"&alert_localization=" + selectedCity,
            animalData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + localStorage.getItem('token'),
                }
            }

        );
    },

    deletePet(animalData) {
        return axios.delete(baseUrl + "/aop/v1/pet/" + animalData.id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },

    updatePet(animalData) {
        return axios.post(baseUrl + "/aop/v1/pet/" + animalData.id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
    },



}
