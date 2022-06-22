import { createStore } from 'vuex';
import userService from './services/userServices';

// Create a new store instance.
const store = createStore({
    // ces données sont accessibles dans notre application
    state () {
      return {
        isUserConnected: false,
        firstname: "",
        lastname: ""
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
        updateUserFirstname (state, firstname) {
          state.firstname = firstname;
        },
        updateUserLastname (state, lastname) {
          state.lastname = lastname;
        }
    }
})

export default store;