<template>
  <div class="container">
    <section class="title">
      <h1 class="title__page">Mot de passe perdu</h1>
    </section>

    <section class="boxSmall">
      <!-- connexion -->
      <form method="POST" id="lostPassword">
        <label for="email">Votre adresse Email</label>
        <input id="email" name="email" placeholder="Votre adresse mail" />

        <button class="blueButton">Recevoir</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>