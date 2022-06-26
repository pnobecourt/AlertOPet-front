<template v-if="animalData.alert_status == 'En cours'">
        <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">

            <div>
            <img class="cardAnimal__image" :src= animalData.petPicture  alt="Animal" />
            </div>

            <!-- card__lost -->

            <div class="cardAnimal__lost">
              <div class="cardAnimal__lost__status">
                <p>
                  <span class="cardAnimal__lost__lostAnimalStatusPink"
                    v-if="animalData.alert_type == 'Perdu'">Perdu</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"                    
                    v-if="animalData.alert_type == 'Trouvé'">Trouvé</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"                    
                    v-if="animalData.alert_type == 'Kidnapé'">Kidnapé</span
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
      <button class="blueButton" @click="onModifyClick(animalData.id)"><i class="fa-solid fa-pen"></i>Modifier la fiche</button>
 </div>
        </article>
</template>
<script>
import userService from '../services/userServices.js';
export default {

  data() {
    return {

    };
  },

  components: {
    userService
  },

  methods : {
      contactOwner(email) {
        var link = 'mailto:' + email;
                console.log(link);
        window.location.href = link;
      },
      phoneToOwner(number) {
        var link = 'tel:' + number;
                console.log(link);
        window.location.href = link;
      },
        onModifyClick(petId) {
          console.log(petId);
            this.$router.push({ 
                name: 'modification-animal',
                params: {
                    petId: petId
                }
            });
        }
  },

  props: ["animalData"],
}
</script>

<style lang="scss" scoped>
</style>