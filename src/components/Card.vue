<template v-if="animalData.alert_status == 'En cours'">
  <!-- Card -->
  <article class="card">
    <!-- card__picture -->
    <div class="cardAnimal">
      <div @click="onPetClick(animalData.id)">
        <img
          class="cardAnimal__image"
          :src="animalData.petPicture"
          alt="Animal"
        />
      </div>

      <!-- card__lost -->

      <div class="cardAnimal__lost">
        <div class="cardAnimal__lost__status">
          <p>
            <span
              class="cardAnimal__lost__lostAnimalStatusPink"
              v-if="animalData.alert_type == 'Perdu'"
              >Perdu</span
            >
            <span
              class="cardAnimal__lost__lostAnimalStatusBlue"
              v-if="animalData.alert_type == 'Trouvé'"
              >Trouvé</span
            >
            <span
              class="cardAnimal__lost__lostAnimalStatusBlue"
              v-if="animalData.alert_type == 'Kidnapé'"
              >Kidnapé</span
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
        <p>Type : {{ animalData.petSpecies }}</p>
        <p>Lieu : {{ animalData.meta["localization"] }}</p>
        <p>Nom : {{ animalData.meta["petName"] }}</p>
        <p>Race : {{ animalData.meta["petBreed"] }}</p>
        <p>Taille : {{ animalData.meta["petSize"] }}</p>
        <p>Poids : {{ animalData.meta["petWeight"] }}</p>
        <p>Couleur : {{ animalData.meta["petColor"] }}</p>
        <p>Âge : {{ animalData.meta["petAge"] }}</p>
      </div>

      <div
        class="cardAnimal__description"
        v-html="animalData.content.rendered"
        @click="onPetClick(animalData.id)"
      ></div>

      <!-- Contacter le propriétaire -->
      <button
        v-if="animalData.meta['contactMail']"
        class="blueButton"
        @click="contactOwner(animalData.meta['contactMail'])"
      >
        <i class="fa-solid fa-envelope"></i>Contacter le propriétaire
      </button>
      <button
        v-if="animalData.meta['contactPhone']"
        class="blueButton"
        @click="phoneToOwner(animalData.meta['contactPhone'])"
      >
        <i class="fa-solid fa-phone"></i>Téléphoner au propriétaire
      </button>
    </div>
  </article>
</template>
<script>
import petService from "../services/petService.js";
export default {
  data() {
    return {};
  },
  methods: {
    contactOwner(email) {
      var link = "mailto:" + email;
      console.log(link);
      window.location.href = link;
    },
    phoneToOwner(number) {
      var link = "tel:" + number;
      console.log(link);
      window.location.href = link;
    },
    // au clic sur une recette
    onPetClick(petId) {
      // on déclenche la navigation vers la route /recipe/{id}
      // en passant recipeId
      this.$router.push({
        name: "alerte",
        params: {
          alertId: petId,
        },
      });
    },
  },
  props: ["animalData"],
};
</script>

<style lang="scss" scoped>
</style>