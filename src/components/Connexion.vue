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
        <input v-model="email" id="email" placeholder="Votre adresse mail" />

        <label for="password">Votre mot de passe</label>
        <input
        v-model="password"
          id="password"
          type="password"
          placeholder="Votre mot de passe"
        />

        <p class="lostPassword">
          <a href="" title="mot de passe perdu" rel="noopener noreferrer"
            >Mot de passe perdu</a
          >
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
export default {
  data() {
    return {
      errorMessages: "",
      password: "",
      email: "",

    };
  },
  methods: {
    onFormSubmit() {
      const error = [];

      if (this.password.length <= 6) {
        error.push("Le mot de passe est invalide.");
      }

      if (!this.email) {
        error.push('Indiquez votre adresse email.');
      } else if (!this.validEmail(this.email)) {
        error.push('L\'email n\'est pas valide.');
      }

      this.errorMessages = error.join(', ');
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