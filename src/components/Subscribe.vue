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
        <input id="name" name="name" placeholder="Votre nom" />

        <label for="email">Votre adresse email</label>
        <input id="email" name="email" placeholder="Votre adresse email" />

        <label for="password">Votre mot de passe</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Votre mot de passe"
        />

        <label for="confirmPassword">Confirmer votre mot de passe</label>
        <input
          id="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmer votre mot de passe"
        />

        <div class="checkbox">
          <input type="checkbox" id="policy" name="policy" />
          <label for="policy"
            >J'accepte la
            <a href="" target="_blank">politique de confidentialité</a>
          </label>
        </div>

        <button class="blueButton">Créer un compte</button>
      </form>
    </section>
  </div>
  <!-- Fin container -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>