// ================================================================
// petService

import axios from 'axios';

import {
    baseUrl
} from './apiClientService';

const endpoint = '/wp/v2/alert';

const petsPerPage = '5';

export default {


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


    createPet(animalData) {

        return axios.post(

            baseUrl + "/aop/v1/pet",
            animalData, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }

        );
    },

    createPetAlert(animalData) {

        return axios.post(

            baseUrl + "/wp/v2/alert?=",
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
