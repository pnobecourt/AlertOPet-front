<template>
  <div class="container">

    <!--title -->
    <section class="title">
      <h1 class="title__page">Disparitions</h1>
    </section>

    <!-- Carousel -->
    <section class="box">
      <div class="customer-quotes__nav carousel">

        <div v-for="(animal, index) in cardList.slice(0, 3)" :key="animal.id" :animalData="animal" class="customer-quotes__item carousel__item" :data-slide-number= index>

          <span class="carousel__contact-button" @click="contactOwner(animal.meta['contactMail'])">
           Contacter le propriétaire de {{ animal.meta["petName"] }}
          </span>

          <img v-if="animal.petPicture" class="carousel__image" :src= animal.petPicture alt="Animal" @click="onPetClick(animal.id)"/>
          <img v-else class="carousel__image" src="../assets/images/sans-image.png" animal.petPicture alt="Animal" @click="onPetClick(animal.id)"/>

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
            <option value="">Réinitialiser le filtre</option>
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
            <option value="">Réinitialiser le filtre</option>
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
import { baseUrl } from "../services/apiClientService";
import Card from "./Card.vue";
import carousel from "../assets/js/carousel.js";
import petService from "../services/petService.js";
import speciesService from "../services/specieService.js";
import alertLocalizationService from "../services/alertLocalizationService";
import userService from '../services/userServices';

export default {
  data() {
    return {
      baseUrl: "",
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
    userService,
    Card,
    carousel,
    speciesService,
  },
  mounted() {
    this.loadCard(1);
    this.loadSpecies();
    this.loadAlertLocalizations();
    
    
  },

methods : {

// au clic sur une recette
        onPetClick(petId) {
            // on déclenche la navigation vers la route /recipe/{id}
            // en passant recipeId
            this.$router.push({ 
                name: 'alerte',
                params: {
                    alertId: petId
                }
            });
        },
        
  loadCard(page) {
            // on met à jour le numéro de la page courante
            this.currentPage = page;
            const endpoint = baseUrl + '/wp/v2/alert';
            
            // getRecipes() sur recipeService renvoie la promesse d'axios
            petService.getFilteredPet(page, this.selectedType, this.selectedCity)
            .then((response) => {
                this.cardList = response.data;
                // on utilise la même syntaxe qu'un array associatif php pour récupérer dans un objet une valeur dont la clé doit être protégée entre "", ici x-wp-totalpages de l'objet response.header
                // on doit bien convertir en int pour que le v-for qui génère les liens de pagination se comporte comme un for
                this.pagesCount = parseInt(response.headers["x-wp-totalpages"]);
                console.log(response); // on trouve plusieurs infos en plus de la donnée => notamment headers
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
            // getAllRecipeTypes() renvoie une promesse
            axios.get(baseUrl + '/wp/v2/species?per_page=99').then
            ((response) => {
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