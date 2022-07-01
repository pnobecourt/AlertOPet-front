import { createStore } from 'vuex';
import userService from './services/userServices.js';

// Create a new store instance.
const store = createStore({
    // ces données sont accessibles dans notre application
    state () {
      return {
        isUserConnected: false,
        id: "",
        email: "",
      }
    },
    mutations: {
        // on crée une mutation à déclencher lorsque le statut de connexion change
        updateUserStatus (state) {
            // on affecte le status de connexion à la donnée isUserConnected dans le state
            state.isUserConnected = userService.isUserConnected();
        },
        // mutation pour le prénom
        // le premier paramètre reçu est le state
        // le second est le "payload" => des données qu'on peut passer au commit()
        updateUserId (state, id) {
          state.id = id;
        },
        updateUserEmail (state, email) {
          state.email = email;
        }
    }
})

export default store;