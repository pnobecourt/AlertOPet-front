// =======================================================
// Species Service


import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = '/wp/v2/species';

export default {

    getAllSpecies() {
        const responsePromise = axios.get(baseUrl + endpoint);

        return responsePromise;
    }
}