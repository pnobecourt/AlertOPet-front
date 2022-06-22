<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">
        Vous avez<br/>
        perdu ou trouver <br/>un animal ?<br/>
        Signalez-le
      </h1>

    </section>

    <section class="box">
      <!-- connexion -->
      <form @submit.prevent="onFormSubmit">
        <label for="email">Identifiant</label>
        <input 
          v-model="username" 
          id="email" 
          placeholder="Votre Identifiant" />

        <label for="password">Votre mot de passe</label>
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Votre mot de passe"
        />

        <p class="lostPassword">
          <RouterLink to="/mot-de-passe-perdue" rel="noopener noreferrer"
            >Mot de passe perdu</RouterLink>
        </p>
          <div v-if="errorMessages" class="alert error">{{ errorMessages }} </div>
        <button class="blueButton">Connexion</button>
      </form>

      <hr />

      <!-- create accompte -->
      <form method="POST" id="createAccount">
        <button class="yellowButton">Créer un compte</button>
      </form>
    </section>
  </div>
  <!-- End container -->
</template>

<script>

import userService from '../services/userServices';

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

      // function validEmail(email) {
      //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   return re.test(email)
      // }

      if (!this.username) {
        error.push('Indiquez votre adresse email.');
      } 
      // else if (!this.validEmail(this.email)) {
      //   error.push('L\'email n\'est pas valide.');
      // }

      if (this.password.length <= 6) {
        error.push("Le mot de passe est invalide.");
      }

      this.errorMessages = error.join(', ');


    // si pas de message d'erreur
      if (!this.errorMessages) {
          // on s'authentifie avec l'API
          userService.connectUser({
              username: this.username,
              password: this.password
          })
          .then((response) => {
              // si on s'est bien connecté, on navigue vers la home
              this.$router.push('/');
          })
          .catch((error) => {
              // sinon on affiche l'erreur
              console.log(error);    
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>