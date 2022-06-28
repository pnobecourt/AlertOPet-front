// on gère l'utilisateur

import axios from 'axios';
// on récupère la constant baseUrl depuis apiClientService
import { baseUrl } from './apiClientService';
// on récupère l'objet store
// c'est exactement le même objet store qui a été passé à VueJS par app.use() dans index.js
import store from '../store.js';

export default {
    registerUser(userdata) {
        // On retourne la promesse de axios.post() pour réagir à la requête côté composant
        // argument 1 => Url (??? => quel endpoint utiliser ??)
        // argument 2 => data (un objet à transmettre au serveur)
        const registerPromise = axios.post(baseUrl + '/aop/v1/user', userdata);

        return registerPromise;
    },
    connectUser(credentials) {

        // faire l'appel à l'API
        // on doit demander un token avec les identifiants fournis
        // on passe les credentials dans le corps de la requête => {username, password}
        const connectionPromise = axios.post(baseUrl + '/jwt-auth/v1/token', credentials)
        .then((response) => {

            // On trouve le token dans response.data.data.token
            // on enregistre le token dans le localStorage
            // si on utilise sessionStorage, le token est supprimé lorsqu'on ferme le navigateur
            localStorage.setItem('token', response.data.data.token);

            // on trouve aussi le nom et le prénom de l'utilisateur dans response.data.data
            localStorage.setItem('id', response.data.data.id);
            localStorage.setItem('email', response.data.data.email);

            // on commit la mutation updateUserStatus
            store.commit('updateUserStatus');

            // on commit la mutation updateUserId en passant le prénom réçu depuis l'API
            store.commit('updateUserId', response.data.data.id);
            // idem pour lastName
            store.commit('updateUserEmail', response.data.data.email);

        })
        .catch((error) => {
            console.log(error);
        });

        // en cas de succès, on informe notre application que l'utilisateur est connecté

        // on retourne la promesse d'axios
        return connectionPromise;
    },
    // l'utilisateur est-il connecté ?
    isUserConnected() {
        // on va chercher dans le localstorage la valeur de "token"
        // s'il n'y a rien on veut false, sinon true
        // => on veut convertir une chaîne non vide en true et une chaîne vide en false
        // on peut utiliser un raccourci : !! 
        //    avec le premier ! on convertir en booléen inverse
        //    avec le deuxième on réinverse
        // return !!localStorage.getItem('token');

        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    },
    // on déconnecte l'utilisateur
    disconnectUser() {
        // Vu que le statut "connecté" de l'utilisateur correspond à la présence du token, le supprimer permet de déco l'utilisateur

        // supprimer le token et les données utilisateur du localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        // on accède au store défini sur index.js avec app.use(store) avec un import du fichier store.js
        // on déclenche la mutation updateUserStatus
        store.commit('updateUserStatus');
    },

    deleteAccount(data) {
        return axios.delete(baseUrl + "/aop/v1/user/" + data.id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      },


}