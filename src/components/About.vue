<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">À propos</h1>
    </section>

    <section class="box">
      <div class="profil">
        <div class="profil__box">
          <div class="profil__card">
            <img
              src="../assets/images/marc.jpg"
              class="profil__image"
              alt="AlertOpet"
            />
            <h2>Paul Nobécourt</h2>
            <p class="profil__language">Backend</p>
            <p class="profil__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cum nisi laborum amet culpa natus odit voluptas,
              dolorum laboriosam.
            </p>
          </div>

          <div class="profil__card">
            <img
              src="../assets/images/marc.jpg"
              class="profil__image"
              alt="AlertOpet"
            />
            <h2>Marc Cherier</h2>
            <p class="profil__language">Frontend</p>
            <p class="profil__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cum nisi laborum amet culpa natus odit voluptas,
              dolorum laboriosam.
            </p>
          </div>

          <div class="profil__card">
            <img
              src="../assets/images/marc.jpg"
              class="profil__image"
              alt="AlertOpet"
            />
            <h2>David Baffray</h2>
            <p class="profil__language">Backend</p>
            <p class="profil__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cum nisi laborum amet culpa natus odit voluptas,
              dolorum laboriosam.
            </p>
          </div>

          <div class="profil__card bottom">
            <img
              src="../assets/images/marc.jpg"
              class="profil__image"
              alt="AlertOpet"
            />
            <h2>Radhwane Abdallaoui</h2>
            <p class="profil__language">Frontend</p>
            <p class="profil__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem cum nisi laborum amet culpa natus odit voluptas,
              dolorum laboriosam.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Fin container -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/abstracts/mixins";
@import "../assets/scss/abstracts/variables";
@import "../assets/scss/pages/a-propos";
</style>