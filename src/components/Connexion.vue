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
      <form method="POST" id="connexion">
        <label for="email">Votre adresse</label>
        <input id="email" name="email" placeholder="Votre adresse mail" />

        <label for="password">Votre mot de passe</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Votre mot de passe"
        />

        <p class="lostPassword">
          <a href="" title="mot de passe perdu" rel="noopener noreferrer"
            >Mot de passe perdu</a
          >
        </p>

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
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>