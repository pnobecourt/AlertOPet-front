// ======================================================
// Alert localization service

import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = "/wp/v2/alert_localization";

export default {

  getAllAlertLocalizations() {

    return axios.get(baseUrl + endpoint + '?per_page=99');
  },
};