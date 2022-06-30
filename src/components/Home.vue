<template>
  <div class="container">
    <!--title -->
    <section class="title">
      <h1 class="title__page">Disparitions</h1>
    </section>

    <!-- Carousel -->
    <section class="box">
      <div class="customer-quotes__nav carousel">
        <div
          v-for="(animal, index) in cardList.slice(0, 3)"
          :key="animal.id"
          :animalData="animal"
          class="customer-quotes__item carousel__item"
          :data-slide-number="index"
        >
          <span
            class="carousel__contact-button"
            @click="contactOwner(animal.meta['contactMail'])"
          >
            Contacter le propriétaire de {{ animal.meta["petName"] }}
          </span>

          <img
            class="carousel__image"
            :src="animal.petPicture"
            alt="Animal"
            @click="onPetClick(animal.id)"
          />
        </div>
      </div>

      <div class="customer-quotes__nav carousel__nav"></div>

      <!-- Recherche -->
      <section>
        <div class="choiceAnimal">
          <select
            name="type"
            id="type"
            class="choiceAnimal__select"
            @change="onSpeciesFilterChange()"
            v-model="selectedType"
          >
            <option disabled value="">Sélectionnez un type d'animal</option>
            <option
              v-for="specie in specieList"
              :key="specie.id"
              :value="specie.id"
            >
              {{ specie.name }}
            </option>
          </select>

          <select
            name="type"
            id="selectCountry"
            class="choiceAnimal__select"
            @change="onLocalizationFilterChange()"
            v-model="selectedCity"
          >
            <option disabled value="">Sélectionnez un lieu</option>
            <option
              v-for="alertLocalization in alertLocalizations"
              :key="alertLocalization.id"
              :value="alertLocalization.id"
            >
              {{ alertLocalization.name }}
            </option>
          </select>

          <button class="blueButton">Rechercher</button>
        </div>
      </section>
    </section>

    <!-- list of Cards -->
    <section>
      <!-- Cards -->
      <div class="boxOfCards">
        <Card
          v-for="animal in cardList"
          :key="animal.id"
          :animalData="animal"
        ></Card>
      </div>
      <!-- end boxOfcards -->
    </section>

    <!-- end of container -->
    <div class="top"></div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import carousel from "../assets/js/carousel.js";
import speciesService from "../services/specieService.js";
import alertLocalizationService from "../services/alertLocalizationService";
import { baseUrl } from "../services/apiClientService";

export default {
  data() {
    return {
      cardList: [],
      specieList: [],
      alertLocalizations: [],
      selectedType: "",
      selectedCity: "",
    };
  },
  components: {
    Card,
    carousel,
    speciesService,
  },
  mounted() {
    this.loadCard();
    this.loadSpecies();
    this.loadAlertLocalizations();
  },

  methods: {
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
    loadCard() {
      axios
        .get(
          "http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/wp/v2/alert?embed"
        )
        .then((response) => {
          console.log(response.data);
          this.cardList = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    contactOwner(email) {
      var link = "mailto:" + email;
      window.location.href = link;
    },

    loadSpecies() {
      // getAllRecipeTypes() renvoie une promesse
      axios
        .get(
          "http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/wp/v2/species"
        )
        .then((response) => {
          console.log(response.data);
          this.specieList = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    loadAlertLocalizations() {
      // getAllAlertLocalizations() renvoie une promesse
      alertLocalizationService
        .getAllAlertLocalizations()
        .then((response) => {
          this.alertLocalizations = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    onSpeciesFilterChange() {
      // on relance la récupération des données
      this.loadPets(1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>