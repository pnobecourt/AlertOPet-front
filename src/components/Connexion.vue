<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">
        Vous avez<br />
        perdu ou trouver <br />un animal ?<br />
        Signalez-le
      </h1>

    </section>

    <section class="box">
      <!-- connexion -->
      <form @submit.prevent="onFormSubmit">
        <label for="email">Votre adresse</label>
        <input v-model="username" id="email" placeholder="Votre adresse mail" />

        <label for="password">Votre mot de passe</label>
        <input
        v-model="password"
          id="password"
          type="password"
          placeholder="Votre mot de passe"
        />

        <p class="lostPassword">
          <RouterLink to="/mot-de-passe-perdu" rel="noopener noreferrer"
            >Mot de passe perdu</RouterLink>
        </p>
        <!-- show errors -->
        <div v-if="errorMessages" class="allerror" v-html="errorMessages">
        </div>

        <button role="submit" class="blueButton">Connexion</button>
      </form>

      <hr />

      <!-- create accompte -->
<RouterLink to="/creation-compte" rel="noopener noreferrer"
             class="createButton" >Créer un compte</RouterLink>
    </section>
  </div>
  <!-- End container -->
</template>

<script>
import userService from '../services/userServices.js';

export default {
  data() {

    return {
      errorMessages: "",
      password: "",
      username: "",
    };

  },

  methods: {
    onFormSubmit() {
      
      const error = [];

      if (this.password.length <= 6) {
        error.push("- Le mot de passe est invalide.</br>");
      }

      if (!this.username) {
        error.push('- Indiquez votre adresse email.</br>');
      } else if (!this.validEmail(this.username)) {
        error.push('- L\'email n\'est pas valide.</br>');
      }

      this.errorMessages = error.join('');

// si pas de message d'erreur
            if (!this.errorMessages) {
                // on s'authentifie avec l'API
                userService.connectUser({
                    username: this.username,
                    password: this.password
                })
                .then((response) => {
                   if (response.data.statusCode === 200) {
                    // si on s'est bien connecté, on navigue vers la home
                    this.$router.push('/mon-compte'); } else {
                  // sinon on affiche l'erreur
                    this.errorMessages = "- Il n'y a pas de compte avec ces identifiants.<br>"   

                    }
                })
                .catch((error) => {
                    // sinon on affiche l'erreur
                    this.errorMessages = "- Il n'y a pas de compte avec ces identifiants.<br>"   
                });
            }



    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    

  }
};
</script>

<style lang="scss" scoped>

</style>