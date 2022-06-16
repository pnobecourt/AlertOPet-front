<template>
  <header>
  <div class="navbar">

    <!-- Navbar logo -->
    <div class="nav-header">      
      <div class="nav-logo">
        <a href="#">
          <img src="../assets/images/alertOpet.png" width="120px" alt="logo">
        </a>
      </div>
    </div>
 <!--bell-->
    <div class="navigation__bell">

        <div class="navigation__bell__img">
          <img src="../assets/images/bell.svg" height="22px" width="22px" alt="Il y a 1 nouvelle(s) recherche(s)"/>
        </div>

        <div class="navigation__bell__alert">1</div>

    </div>

    <!-- responsive navbar toggle button -->
    <input type="checkbox" id="nav-check">
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <!-- Navbar items -->
    <div class="nav-links">
      <a href="#">Accueil</a>
      <a href="#">Créer un compte</a>
      <a href="#">Alertes en cours</a>
      <a href="#">Signaler un animal</a>
      <a href="#">A propos</a>
      <button class="loginBtn" ><span v-if="userConnected">Connexion</span></button>
    </div>
 
  </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userConnected: true,
    };
  },

  mounted() {

  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/variables";
@import "../assets/scss/abstracts/mixins";


</style>