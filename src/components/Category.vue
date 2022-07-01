<template>
  <div class="container">

    <!--title -->
    <section class="title">
      <h1 class="title__page">Liste des animaux</h1>
    </section>

    <!-- Carousel -->
    <section class="box">

      <!-- Search -->
      <section>
        <div class="choiceAnimal">

          <select name="type" id="type" class="choiceAnimal__select" @change="onSpeciesFilterChange()"
            v-model="selectedType">
            <option disabled value="">Sélectionnez un type d'animal</option>
            <option value="">Réinitialiser le filtre</option>
            <option v-for="specie in specieList" :key="specie.id" :value="specie.id">
              {{ specie.name }}
            </option>
          </select>

          <select name="type" id="selectCountry" class="choiceAnimal__select" @change="onLocalizationFilterChange()"
            v-model="selectedCity">
            <option disabled value="">Sélectionnez un lieu</option>
            <option value="">Réinitialiser le filtre</option>
            <option v-for="alertLocalization in alertLocalizations" :key="alertLocalization.id"
              :value="alertLocalization.id">
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

        <Card v-for="animal in cardList" :key="animal.id" :animalData="animal"></Card>


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
  import petService from "../services/petService.js";
  import speciesService from "../services/specieService.js";
  import alertLocalizationService from "../services/alertLocalizationService";
  import { baseUrl } from "../services/apiClientService";

  export default {
    data() {
      return {
        cardList: [],
        specieList: [],
        alertLocalizations: [],
        specieList: "choice",
        selectedType: "",
        selectedCity: "",
        pagesCount: 1,
        currentPage: 1
      };
    },
    components: {
      carousel,
      speciesService,
      Card,
    },
    mounted() {
      this.loadCard(1);
      this.loadSpecies();
      this.loadAlertLocalizations();
    },

    methods: {

      /* loadCard(){
        axios.get(baseUrl + '/wp/v2/alert?embed').then
        ((response) => {
            console.log(response.data);
          this.cardList = response.data;
        }).catch((error) =>{
            console.error(error );
        })
      }, */
      loadCard(page) {

        this.currentPage = page;
        const endpoint = baseUrl + '/wp/v2/alert';

        petService.getPet(page, this.selectedType, this.selectedCity)
          .then((response) => {
            this.cardList = response.data;
            this.pagesCount = parseInt(response.headers["x-wp-totalpages"]);
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      },

      contactOwner(email) {
        var link = 'mailto:' + email;
        window.location.href = link;
      },

      loadSpecies() {
        axios.get(baseUrl + '/wp/v2/species?per_page=250').then((
            response) => {
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
        this.loadCard(1);
      },
      onLocalizationFilterChange() {
        // on relance la récupération des données
        this.loadCard(1);
      }
    },
  };
</script>

<style lang="scss" scoped>
</style>