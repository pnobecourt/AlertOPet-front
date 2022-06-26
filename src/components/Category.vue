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
          <label for="type">Sélectionnez un type d'animal :</label>
          <select name="type" id="type" class="choiceAnimal__select" @change="onSpeciesFilterChange()" v-model="specieList">

            <option
              v-for="specie in specieList" 
              :key="specie.id" 
              :value="specie.id">
              {{ specie.name }}
            </option>

          </select>


        <label for="selectCountry">Sélectionnez un lieu :</label>
          <select name="type" id="selectCountry" class="choiceAnimal__select" v-model="cardList">

            <option
              v-for="city in cardList" 
              :key="city.id" 
              :value="city.id">
              {{ city.meta["localization"] }}
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
import speciesService from '../services/specieService.js';

export default {
  data() {
    return {
      cardList: [],
      specieList: [],
      specieList : "choice",
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.loadCard();
    this.loadSpecies();
  },

methods : {

  loadCard(){
    axios.get('http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/wp/v2/alert?embed').then
    ((response) => {
        console.log(response.data);
      this.cardList = response.data;
    }).catch((error) =>{
        console.error(error );
    })
  },
  
  contactOwner(email) {
       var link = 'mailto:' + email;
       window.location.href = link;
      },

  loadSpecies() {
            // getAllRecipeTypes() renvoie une promesse
            axios.get('http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/wp/v2/species').then
            ((response) => {
              console.log(response.data);
                this.specieList = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
        },

onSpeciesFilterChange() {
            // on relance la récupération des données
            this.loadPets(1);
        }
},
};
</script>

<style lang="scss" scoped>
</style>