<template>

  <!-- container -->
<div class="container" v-if="isContentLoaded">
    
    <section class="title">

                  <h1 class="title__page"
                    v-if="cardList.alert_type == 'Perdu'">ALerte : Perdu {{ cardList.meta.petSpecies }} nommé {{ cardList.meta.petName }}</h1
                  >
                  <h1 class="title__page"                    
                    v-if="cardList.alert_type == 'Trouvé'">ALerte : Trouvé {{ cardList.meta.petSpecies }} <span v-if="cardList.meta.petName">nommé {{ cardList.meta.petName }}</span></h1
                  >
                  <h1 class="title__page"                    
                    v-if="cardList.alert_type == 'Kidnapé'">ALerte : Kidnapé {{ cardList.meta.petSpecies }} nommé {{ cardList.meta.petName }}</h1
                  >
    </section>

    <section class="box">
      <!-- Card -->
      <article>
        <!-- card__picture -->
        <div class="cardAnimal">

            <img v-if="cardList.petPicture" class="cardAnimal__image" :src= cardList.petPicture  alt="Animal" />
            <img v-else class="cardAnimal__image" src="../assets/images/sans-image.png"  alt="Animal" />


          <!-- card__lost -->
          <div class="cardAnimal__lost">
              <div class="cardAnimal__lost__status">
                <p>
                  <span class="cardAnimal__lost__lostAnimalStatusPink"
                    v-if="cardList.alert_type == 'Perdu'">Perdu</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"                    
                    v-if="cardList.alert_type == 'Trouvé'">Trouvé</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"                    
                    v-if="cardList.alert_type == 'Kidnapé'">Kidnapé</span
                  >
                </p>
              </div>

            <div class="cardAnimal__lost__share">
              <p class="cardAnimal__lost__share__lostAnimalShare">Partage</p>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
          </div>

            <div class="cardAnimal__describe" @click="onPetClick(cardList.id)">
              <p>ID : {{ cardList.id }}</p>
              <p>Type : {{ cardList.meta.petSpecies }}</p>
              <p>Lieu : {{ cardList.meta.address }}</p>
              <p>Nom : {{ cardList.meta.petName }}</p>
              <p>Race : {{ cardList.meta.petBreed}}</p>
              <p>Taille : {{ cardList.meta.petSize }}</p>
              <p>Poids : {{ cardList.meta.petWeight }}</p>
              <p>Couleur : {{ cardList.meta.petColor }}</p>
              <p>Âge : {{ cardList.meta.petAge }}</p>
            </div>

 <div class="cardAnimal__description" v-html="cardList.meta.petDescription">
            </div>
        </div>
      </article>

      <!-- Contacter le propriétaire -->
      <button v-if="cardList.meta.contactMail" class="blueButton" @click="contactOwner(cardList.meta.contactMail)"><i class="fa-solid fa-envelope"></i>Contacter le propriétaire</button>
      <button v-if="cardList.meta.contactPhone" class="blueButton" @click="phoneToOwner(cardList.meta.contactPhone)"><i class="fa-solid fa-phone"></i>Téléphoner au propriétaire</button>
    </section>
  </div>
  <!-- Fin container -->
</template>

<script>
import axios from "axios";
import userService from '../services/userServices.js';
import { baseUrl } from "../services/apiClientService";

export default {

  data() {
    return {
      cardList: [],
      isContentLoaded: false,
    };
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
      }
  },
  components: {
    userService
  },
  mounted() {

    const singlePet = baseUrl + "/wp/v2/alert/" + this.$route.params.alertId + "?_embed";
    console.log(singlePet);

    axios.get(singlePet)
    .then ((response) => {
        console.log(response.data);
      this.cardList = response.data;
      this.isContentLoaded = true;
    }).catch((error) =>{
        console.error(error );
    })

},
}

</script>

<style lang="scss" scoped>

</style>