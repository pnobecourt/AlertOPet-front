<template>
  <header>
    <div class="navigation">
      <div class="navigation__header">
        <div class="navigation__logo">
          <p>AlertOpet</p>
        </div>

        <div class="navigation__bell">
          <div class="bell">
            <div class="bell__img">
              <img
                src="../assets/images/bell.svg"
                height="22px"
                width="22px"
                alt="Il y a 1 nouvelle(s) recherche(s)"
              />
            </div>
            <div class="bell__alert">1</div>
          </div>
        </div>

        <div class="navigation__nav-burger">
          <p><i class="fa-solid fa-bars"></i></p>
        </div>
      </div>
      <!--navigation header-->

      <div class="navigation__nav">
        <ul>
          <li class="navigation__nav-item">coucou</li>
          <li class="navigation__nav-item">coucou</li>
          <li class="navigation__nav-item">coucou</li>
          <li class="navigation__nav-item">coucou</li>
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
@import "../assets/scss/abstracts/mixins";


.navigation {

  max-width:960px;
  justify-content:space-between;
  
  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f8f8f8;
    transition: 1s;
    padding: 1rem;
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #f8f8f8;
    display: none;
  }

  &__nav li {
    list-style-type: none;
    font-size: 2rem;
  }

  &__nav ul {
        justify-content:right;
  }
}

@include small {
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;


    &__header {
      display: flex;
      flex-wrap: nowrap;
    }

    &__nav ul {
      display: flex;
    }

    &__nav {
      text-align: center;
      display: block;
    }

    &__nav li {
      margin-left: 1rem;
      font-size: 1rem;
    }

    &__nav-burger {
      display: none;
    }
  }
}
</style>