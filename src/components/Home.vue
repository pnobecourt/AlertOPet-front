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

          <img class="carousel__image" :src= animal.petPicture alt="Animal"/>
          </div>

      </div>

      <div class="customer-quotes__nav carousel__nav"></div>

      <!-- Recherche -->
      <section>
        <div class="choiceAnimal">
          <select name="type" id="type" class="choiceAnimal__select" @change="onSpeciesFilterChange()" v-model="specieList">

            <option value="" selected>Sélectionnez un type d'animal</option>

            <option
              v-for="specie in specieList" 
              :key="specie.id" 
              :value="specie.id">
              {{ specie.name }}
            </option>

          </select>

          <select name="type" id="selectCountry" class="choiceAnimal__select">
            <option value="">Sélectionnez un lieu</option>
            <option value="0">Lille</option>
            <option value="1">Roubaix</option>
            <option value="2">Tourcoing</option>
            <option value="3">Paris</option>
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
    axios.get('http://devback.alertopet.com/wp-json/wp/v2/alert?embed').then
    ((response) => {
        console.log(response.data);
      this.cardList = response.data;
    }).catch((error) =>{
        console.error(error );
    })
  },
  
  contactOwner(email) {
    console.log(email);
       // var link = 'mailto:' + email;
       // window.location.href = link;
      },

  loadSpecies() {
            // getAllRecipeTypes() renvoie une promesse
            axios.get('http://devback.alertopet.com/wp-json/wp/v2/species').then
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