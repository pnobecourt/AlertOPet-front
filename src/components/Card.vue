<template>
        <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?cat" alt="Animal" />

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
              <p>Type : {{ animalData.species }}</p>
              <p>Lieu : {{ animalData.title }}</p>
              <p>Nom : {{ animalData.name }}</p>
              <p>Race : {{ animalData.breed }}</p>
              <p>Taille : {{ animalData.size }}</p>
              <p>Poids : {{ animalData.weight }}</p>
              <p>Couleur : {{ animalData.color }}</p>
              <p>Âge : {{ animalData.birth_date }}</p>
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

            <!-- Contacter le propriétaire -->
            <button class="blueButton">Contacter le propriétaire</button>
          </div>
        </article>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: ["animalData"]
}
</script>

<style lang="scss" scoped>
</style>