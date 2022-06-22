<template>
        <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <!--<img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?cat" alt="Animal" />-->

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
              <p>ID : {{ animalData.id }}</p>
              <p>Type : {{ animalData.type }}</p>
              <p>Lieu : {{ animalData.meta["localization"] }}</p>
              <p>Nom : {{ animalData.meta["petName"] }}</p>
              <p>Race : {{ animalData.meta["petBreed"]}}</p>
              <p>Taille : {{ animalData.meta["petSize"] }}</p>
              <p>Poids : {{ animalData.meta["petWeight"] }}</p>
              <p>Couleur : {{ animalData.meta["petColor"] }}</p>
              <p>Âge : {{ animalData.meta["petAge"] }}</p>
            </div>

            <div class="cardAnimal__description" v-html="animalData.content.rendered">
            </div>

            <!-- Contacter le propriétaire -->
            <button class="blueButton" >Contacter le propriétaire</button>
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