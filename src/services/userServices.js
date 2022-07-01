// ====================================================
// User Service

import axios from 'axios';

import { baseUrl } from './apiClientService';

import store from '../store.js';

export default {
  registerUser(userdata) {

    const registerPromise = axios.post(baseUrl + '/aop/v1/user/', userdata);

    return registerPromise;
  },
  connectUser(credentials) {

    const connectionPromise = axios.post(baseUrl + '/jwt-auth/v1/token', credentials)
      .then((response) => {


        localStorage.setItem('token', response.data.data.token);

        localStorage.setItem('id', response.data.data.id);
        localStorage.setItem('email', response.data.data.email);

        store.commit('updateUserStatus');

        store.commit('updateUserId', response.data.data.id);

        store.commit('updateUserEmail', response.data.data.email);

      })
      .catch((error) => {
        console.log(error);
      });

    return connectionPromise;
  },

  isUserConnected() {

    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  },

  disconnectUser() {

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');

    store.commit('updateUserStatus');
  },

  deleteAccount(data) {
    return axios.delete(baseUrl + "/aop/v1/user/" + data.id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },

  updateUser() {
    return axios.post(baseUrl + "/aop/v1/user/" + localStorage.id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {}
    });
  },

}