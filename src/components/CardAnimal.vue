<template v-if="animalData.alert_status == 'En cours'">
  <!-- Card -->
  <article class="card">
    <!-- card__picture -->
    <div class="cardAnimal">
      <div>
        <img
          class="cardAnimal__image"
          :src="animalData.petPicture"
          alt="Animal"
          @click="onModifyClick(animalData.id)"
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
      <div class="cardAnimal__describe">
        <p>ID : {{ animalData.id }}</p>
        <p>Type : {{ animalData.title }}</p>
        <p>Nom : {{ animalData.title }}</p>
        <p>Race : {{ animalData.breed }}</p>
        <p>Taille : {{ animalData.size }}</p>
        <p>Poids : {{ animalData.weight }}</p>
        <p>Couleur : {{ animalData.color }}</p>
        <p>Âge : {{ animalData.birth_date }}</p>
      </div>

      <div
        class="cardAnimal__description"
        v-html="animalData.content.rendered"
      ></div>

      <!-- Contacter le propriétaire -->
      <button class="blueButton" @click="onModifyClick(animalData.id)">
        <i class="fa-solid fa-pen"></i>Modifier la fiche
      </button>
    </div>
  </article>
</template>
<script>
import userService from "../services/userServices.js";
export default {
  data() {
    return {};
  },

  components: {
    userService,
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
    onModifyClick(petId) {
      console.log(petId);
      this.$router.push({
        name: "modification-animal",
        params: {
          petId: petId,
        },
      });
    },
  },

  props: ["animalData"],
};
</script>

<style lang="scss" scoped>
</style>