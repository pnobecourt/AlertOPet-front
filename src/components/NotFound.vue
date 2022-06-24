<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">La page que vous cherchez est introuvable</h1>
    </section>

    <section class="box">
      <img src="../assets/images/404.svg" alt="erreur 404" class="top404" />

      <RouterLink to="/" rel="noopener noreferrer"
             class="backButtonBlue top" >Retour à l'accueil</RouterLink>
    </section>
  </div>
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