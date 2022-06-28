<template>
  <!-- container -->
  <div class="container">
    
    
    <section class="title">
      <h1 class="title__page">La page que vous cherchez est introuvable</h1>
    </section>

    <section class="box">
      <img src="../assets/images/not-found.png" alt="erreur 404" class="box__top404" />

      <RouterLink to="/" rel="noopener noreferrer"
             class="backButtonBlue" >Retour à l'accueil</RouterLink>
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