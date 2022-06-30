<template>
  <div class="container">
    <!--title -->
    <section class="title">
      <h1 class="title__page">Liste des animaux</h1>
    </section>

    <!-- Carousel -->
    <section class="box">
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

export default {
  data() {
    return {
      cardList: [],
      specieList: [],
      specieList: "choice",
      alertLocalizations: [],
      selectedType: "",
      selectedCity: "",
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.loadCard();
    this.loadSpecies();
    this.loadAlertLocalizations();
  },

  methods: {
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