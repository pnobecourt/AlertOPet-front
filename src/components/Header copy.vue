<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm">
        <div class="container-fluid">

          <div class="navbar-box">

            <div class="navbar-brand">
              <a href="javascript:void(0)">
                <img
                  src="../assets/images/Logo.svg"
                  width="150px"
                  height="50px"
                  alt="Alert O'Pet"
                />
              </a>
            </div>

            <div class="bell">

              <div class="bell__img">
                <img src="../assets/images/bell.svg"
                  height="22px"
                  width="22px"
                  alt="Il y a 1 nouvelle(s) recherche(s)"
                />
              </div>
              <div class="bell__alert">1</div>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)">Accueil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)"
                    >Créer un compte</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)"
                    >Alertes en cours</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)"
                    >Signaler un animal</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0)">Blog</a>
                </li>
                <li class="nav-item">
                    <a v-if="isUserConnected" class="nav-link" href="javascript:void(0)">Déconnexion</a>
                    <a v-else class="nav-link" href="javascript:void(0)">Se connecter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {

        isUserConnected: false,

    };
  },
};
</script>

<style lang="scss" scoped>
</style>