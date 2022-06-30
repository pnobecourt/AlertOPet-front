<template>
  <header>
  <div class="navbar">

    <!-- Navbar logo -->
    <div class="nav-header">      
      <div class="nav-logo">
        <RouterLink to="/">
          <img src="../assets/images/alertOpet.png" alt="logo">
        </RouterLink>
      </div>
    </div>
 <!--bell-->
    <div class="navigation__bell">

        <div class="navigation__bell__img">
          <img src="../assets/images/bell.svg" alt="alertes"/>
        </div>

        <div class="navigation__bell__alert"></div>

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
      <RouterLink to="/" @click="closeNav()">Accueil </RouterLink>
      <RouterLink to="/creation-compte" @click="closeNav()" v-if="!isUserConnected">Créer un compte </RouterLink>
      <RouterLink to="/mon-compte" @click="closeNav()" v-if="isUserConnected">Mon compte </RouterLink>
      <RouterLink to="/category" @click="closeNav()">Alertes en cours </RouterLink>
      <RouterLink to="/creation-alerte-animal" v-if="isUserConnected" @click="closeNav()">Signaler un animal </RouterLink>
       <RouterLink to="/creation-compte" v-if="!isUserConnected" @click="closeNav()">Signaler un animal </RouterLink>
      <RouterLink to="/a-propos" @click="closeNav()">A propos</RouterLink>
      <RouterLink to="/connection" @click="closeNav()">
        <button class="loginBtn" @click="closeNav()">
          <span v-if="isUserConnected" @click="onDisconnectClick">
            <i class="fa-solid fa-power-off"></i> 
            Déconnexion
          </span>
          <span v-else>
            Connexion
          </span>
        </button>
      </RouterLink>
    </div>

  </div>
  </header>
</template>

<script>

import userService from '../services/userServices';

export default {
  
  data() {
    return {
      
    };
  },
  computed: {

        getUserId() {
            const userId = this.$store.state.id;
            return userId;
        },
        getUserEmail() {
            const userEmail = this.$store.state.email;
            return userEmail;
        }

  },

    props: ["isUserConnected"],
    methods: {
        onDisconnectClick() {
            userService.disconnectUser();
        },
        closeNav() {
          document.querySelector("#nav-check").checked = false;
        }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/variables";
@import "../assets/scss/abstracts/mixins";

.navigation__bell__img,
.navigation__bell__alert {
  display:none;
  
}
</style>