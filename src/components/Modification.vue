<template>
  <div class="container">
    <section class="title">
      <h1 class="title__page">Modifier vos<br />informations</h1>
    </section>

    <section class="boxSmall">
      <!-- connexion -->
      <form method="POST" id="modifyProfil">
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

        <button class="blueButton">Modifier</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>