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
      <form method="POST" id="connexion">
        <label for="name">Votre nom</label>
        <input 
          v-model="username"
          id="name"
          name="name" 
          placeholder="Votre nom" />

        <label for="email">Votre adresse email</label>
        <input
          v-model="email"
          id="email" 
          name="email" 
          placeholder="Votre adresse email" />

        <label for="password">Votre mot de passe</label>
        <input
          v-model="password"
          id="password"
          type="password"
          name="password"
          placeholder="Votre mot de passe"
        />

        <label for="confirmPassword">Confirmer votre mot de passe</label>
        <input
          v-model="confirmPassword"
          id="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmer votre mot de passe"
        />

        <div class="checkbox">
          <input type="checkbox" id="policy" name="policy" />
          <label for="policy"
            >J'accepte la
            <RouterLink to="/mentions-legales" target="_blank">politique de confidentialité</RouterLink>
          </label>
        </div>

        <div v-if="errorMessages" class="alert error">
          {{ errorMessages }}
        </div>

        <button class="blueButton" role="submit">Créer un compte</button>
      </form>
    </section>
  </div>
  <!-- Fin container -->
</template>

<script>
export default {
  data() {
    return {
      errorMessages: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
        onFormSubmit() {
            // on valide les saisies
            const errors = [];
            
            if (this.username.length <= 3) {
                errors.push("Le nom d'utilisateur n'est pas valide.");
            }
            if (this.password.length <= 3) {
                errors.push("Le mot de passe n'est pas valide.");
            }
            this.errorMessages = errors.join(', ');
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