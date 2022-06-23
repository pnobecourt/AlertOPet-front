<template>
        <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="cardAnimal__image" :src= animalData.petPicture  alt="Animal" />

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
            <div class="cardAnimal__describe" @click="onPetClick(animalData.id)">
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
            <button class="blueButton" @click="contactOwner(animalData.meta['contactMail'])">Contacter le propriétaire</button>
          </div>
        </article>
</template>
<script>
import petService from '../services/petService.js';
export default {
  data() {
    return {

    };
  },
  methods : {
      onPetClick(petId){
        console.log(petId);
            this.$router.push({ 
                name: 'alerte',
                params: {
                    alerteID: petId
                }
            });
      },
      contactOwner(email) {
        var link = 'mailto:' + email;
        window.location.href = link;
      }

  },


  props: ["animalData"]
}
</script>

<style lang="scss" scoped>
</style>