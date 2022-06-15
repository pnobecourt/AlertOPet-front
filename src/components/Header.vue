<template>
  <header>
    <div class="navigation">
      <div class="navigation__header">
        <div class="navigation__logo">
          <p>AlertOpet</p>
        </div>

        <div class="navigation__bell">
          <div class="navigation__bell__img">
            <img
              src="../assets/images/bell.svg"
              height="22px"
              width="22px"
              alt="Il y a 1 nouvelle(s) recherche(s)"
            />
          </div>

          <div class="navigation__bell__alert">1</div>
        </div>

        <div class="navigation__nav-burger">
          <p><i class="fa-solid fa-bars"></i></p>
        </div>
      </div>
      <!--navigation header-->

      <div class="navigation__nav">
        <ul>
          <li class="navigation__nav-item"><a href="">Accueil</a></li>
          <li class="navigation__nav-item"><a href="">Créer un compte</a></li>
          <li class="navigation__nav-item"><a href="">Alertes en cours</a></li>
          <li class="navigation__nav-item">
            <a href="">Signaler un animal</a>
          </li>
          <li class="navigation__nav-item"><a href="">Se connecter</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isUserConnected: false,
    };
  },

  mounted() {
    // Récupèrer les éléments dans la page
    var navBurger = document.querySelector(".navigation__nav-burger");
    var navBar = document.querySelector(".navigation__nav");

    navBurger.addEventListener("click", toggle);

    // Déclarer mes fonctions
    function toggle() {
      // Instructions à éxecuter
      if (navBar.style.display == "block") {
        navBar.style.display = "none";
      } else {
        navBar.style.display = "block";
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/variables";
@import "../assets/scss/abstracts/mixins";


</style>