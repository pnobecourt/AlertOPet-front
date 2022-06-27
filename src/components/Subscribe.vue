<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">
        Vous avez <br />perdu ou trouver<br />
        un animal ?<br />
        Inscrivez-vous !
      </h1>
    </section>

    <section class="box">
      <!-- connexion -->
      <form @submit.prevent="onFormSubmit">
        <label for="name">Votre nom</label>
        <input id="name" v-model.trim="username" placeholder="Votre nom" />

        <label for="email">Votre adresse email<span class="required">*</span></label>
        <input id="email" v-model.trim="email" placeholder="Votre adresse email" />

        <label for="password">Votre mot de passe<span class="required">*</span></label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          placeholder="Votre mot de passe"
        />



        <label for="confirmPassword">Confirmer votre mot de passe<span class="required">*</span></label>
        <input
          id="confirmPassword"
          type="password"
          v-model.trim="confirmPassword"
          placeholder="Confirmer votre mot de passe"
        />

        <div class="checkbox">
          <input type="checkbox" id="policy" v-model="policy" />
          <label for="policy">J'accepte la
            <RouterLink to="/mentions-legales" rel="noopener noreferrer"
            >Politique de confidentialité</RouterLink>
          </label>
        </div>
    <div v-if="errorMessages" class="allerror" v-html="errorMessages">
    </div>
        <button class="blueButton">Créer un compte</button>
      </form>
    </section>
  </div>
  <!-- Fin container -->
</template>

<script>
import userService from '../services/userServices.js';

export default {
  data() {
    return {
      errorMessages: "",
      email: "",
      username: "",      
      password: "",
      confirmPassword: "",
      policy: false,
    };
  },

  methods: {

    onFormSubmit() {
      
      const error = [];

      // error on form ?
      if (this.username =="" || this.password =="" || this.confirmPassword =="") {

          error.push("- Les champs marqué d'un * sont obligatoires.</br>");
      }

      if (this.username.length < 2) {

          error.push("- Le nom doit contenir au moins deux caractères.</br>");
      }

      if (!this.email) {
        error.push('- Indiquez votre adresse email.</br>');
      } else if (!this.validEmail(this.email)) {
        error.push('- L\'email n\'est pas valide.');
      }

      if (this.password.length <= 6) {
        error.push("- Le mot de passe est invalide.</br>");
      }

      if (this.password != this.confirmPassword) {
        error.push("- Les mots de passe ne correspondent pas.</br>");
      }

      if (this.policy !== true) {
        error.push("- Veuillez accepter la politique de confidentialité.</br>");
      }

// if errors
      this.errorMessages = error.join('');

// if it's ok
if (!this.errorMessages) {
                // send the informations
                userService.registerUser({
                    user_login: this.username,
                    user_email: this.email,
                    user_pass: this.password,
                })
                .then((response) => {
                if (!response.data.statusCode || response.data.statusCode === 200) {
                  // success -> redirect to login page 
                        this.$router.push('/connection');
                    } else {
                      // error -> redirect to subscription page
                        this.errorMessages = error.response.data.message;
                    }
                })
                .catch((error) => {
                  // error -> redirect to subscription page
                    this.errorMessages = error.response.data.message;
                    this.$router.push('/creation-compte');   
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