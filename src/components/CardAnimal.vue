<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">Choupette</h1>
    </section>

    <section class="boxForm">
      <!-- Card -->
      <article>
        <!-- card__picture -->
        <div class="cardAnimal">
          <img class="dog" src="../assets/images/dog.jpg" alt="dog" />

          <!-- card__lost -->
          <div class="cardAnimal__lost">
            <div class="cardAnimal__lost__status">
              <p>
                <span class="cardAnimal__lost__lostAnimalStatusPink"
                  >Perdu</span
                >
                <span class="cardAnimal__lost__lostAnimalStatusBlue"
                  >Trouvé</span
                >
              </p>
            </div>

            <div class="cardAnimal__lost__share">
              <p class="cardAnimal__lost__share__lostAnimalShare">Partage</p>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
          </div>

          <div class="cardAnimal__describe">
            <p>Type :</p>
            <p>Lieu :</p>
            <p>Nom :</p>
            <p>Race :</p>
            <p>Taille :</p>
            <p>Poids :</p>
            <p>Couleur :</p>
            <p>Âge :</p>
          </div>

          <div class="cardAnimal__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non ea
            sequi dolorem iure dolor modi quidem minima eaque officiis laborum
            repellat quia similique, atque, quis voluptates, asperiores saepe
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at
            laudantium beatae accusantium, repellendus perferendis minus
            cupiditate voluptates, officiis tempore odio aperiam error nostrum
            consequuntur. Rerum modi aut voluptatem odit!
          </div>
        </div>
      </article>

      <!-- Contacter le propriétaire -->
      <button class="blueButton bottom">Contacter le propriétaire</button>
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
</style>