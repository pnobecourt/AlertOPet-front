<template>
  <div class="container">

    <!--title -->
    <section class="title">
      <h1 class="title__page">Disparitions</h1>
    </section>

    <!-- Carousel -->
    <section class="box">
      <div class="customer-quotes__nav carousel">
        <div class="customer-quotes__item carousel__item" data-slide-number="0">
          <span class="carousel__contact-button">
            <a href="" title="Contacter le propriétaire"
              >Contacter le propriétaire</a
            >
          </span>
          <img
            class="carousel__image"
            src="https://source.unsplash.com/random/900×700/?cat"
            alt="Animal"
          />
        </div>
        <div class="customer-quotes__item carousel__item" data-slide-number="1">
          <span class="carousel__contact-button">
            <a href="" title="Contacter le propriétaire"
              >Contacter le propriétaire</a
            >
          </span>
          <img
            class="carousel__image"
            src="https://source.unsplash.com/random/900×700/?animal"
            alt="Animal"
          />
        </div>
        <div class="customer-quotes__item carousel__item" data-slide-number="2">
          <span class="carousel__contact-button">
            <a href="" title="Contacter le propriétaire"
              >Contacter le propriétaire</a
            >
          </span>
          <img
            class="carousel__image"
            src="https://source.unsplash.com/random/900×700/?dog"
            alt="Animal"
          />
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