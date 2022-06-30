<template>
  <div>
    <Header :isUserConnected="isUserLoggedIn"></Header>
    <RouterView :isUserConnected="isUserLoggedIn"></RouterView>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import userService from "./services/userServices.js";

export default {
  components: {
    Header,
    Footer,
    userService,
  },
  // lorsque le composant est ajouté au DOM, mounted() est automatiquement exécutée
  mounted() {
    // on force la réévaluation de la présence du token et la répercution de cet état sur les composants qui utilisent ce state
    this.$store.commit("updateUserStatus");
  },
  computed: {
    // cette propriété calculée doit renvoyer la valeur de isUserConnected depuis le store
    isUserLoggedIn() {
      return this.$store.state.isUserConnected;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>