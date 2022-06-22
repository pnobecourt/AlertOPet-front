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

        <div class="navigation__bell__img" v-if="isUserConnected">
          <img src="../assets/images/bell.svg" alt="Il y a 1 nouvelle(s) recherche(s)"/>
        </div>

        <div class="navigation__bell__alert" v-if="isUserConnected">1</div>

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
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/creation-compte">Créer un compte</RouterLink>
      <RouterLink to="/category">Alertes en cours</RouterLink>
      <RouterLink to="/creation-alerte">Signaler un animal</RouterLink>
      <RouterLink to="/a-propos">A propos</RouterLink>
      <RouterLink to="/connection">
        <button class="loginBtn">
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
  
  // on utilisera cette méthode comme un propriété
        // en fait un getter
        fullname() {
            const firstname = this.$store.state.firstname;
            const lastname = this.$store.state.lastname;
            return firstname + " " + lastname;
        }

  },
    
    // on déclare les props utilisables sur ce composant => on définit quels attributs on pourra utiliser pour passer de la donnée ici depuis le parent
    props: ["isUserConnected"],
    methods: {
        onDisconnectClick() {
            userService.disconnectUser();
        }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/variables";
@import "../assets/scss/abstracts/mixins";


</style>