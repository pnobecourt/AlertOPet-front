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
          <select
            name="pet" id="type" 
            class="choiceAnimal__select" 
            v-model="specieList">
            <option value="" selected>Sélectionnez un type d'animal</option>
            <option
              v-for="specie in specieList" 
              :key="specie.name" 
              :value="specie.id">
              {{ specie.name }}
            </option>
          </select>

          <select name="city" id="selectCountry" class="choiceAnimal__select">
            <option value="">Sélectionnez un lieu</option>
            <option value="1">Lille</option>
            <option value="2">Roubaix</option>
            <option value="3">Tourcoing</option>
            <option value="4">Paris</option>
          </select>

          <button class="blueButton">Rechercher</button>
        </div>
      </section>
    </section>

<button @click="loadPets()">liste des animaux</button>
    <!-- list of Cards --> 
    <section>
        
      <div class="boxOfCards">

        <!-- Card -->

          <Card v-for="animal in petList" :key="animal.id" :animalData="animal"></Card>

          <!-- @click="onPetClick(currentPet.id)"
          v-for="currentPet in petList" 
          :key="currentPet.id"
          :recipeData="currentPet"> -->


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
import petService from '../services/petService.js';
import speciesService from '../services/specieService.js';

export default {
  data() {
    return {
      petList: [],
      specieList: []
    };
  },
  components: {
      Card,
  },

  //! Carousel =======================================================

  mounted() {
            const carousel = {
      currentSlideNumber: 0,
      autoScrollDuration: 5000,
      init: function () {
        if (document.querySelector(".carousel") === null) {
          return;
        }
        carousel.generateNavButtons();
        const navButtonList = document.querySelectorAll(
          ".carousel__nav__button"
        );
        for (const button of navButtonList) {
          button.addEventListener("click", carousel.onNavButtonClick);
        }
        carousel.autoScroll();
      },
      generateNavButtons: function () {
        const slideCount = document.querySelectorAll(".carousel__item").length;
        for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
          const newButton = document.createElement("div");
          newButton.classList.add("carousel__nav__button");
          newButton.classList.add("carousel__nav__bar");
          if (slideIndex === 0) {
            newButton.classList.add("active");
          }
          newButton.setAttribute("data-target-slide", slideIndex);
          const navContainer = document.querySelector(".carousel__nav");
          navContainer.appendChild(newButton);
        }
      },
      onNavButtonClick: function (event) {
        const targetButton = event.currentTarget;
        const targetSlide = targetButton.dataset.targetSlide;
        carousel.scrollToSlide(targetSlide);
        carousel.currentSlideNumber = targetSlide;
      },
      autoScroll: function () {
        setInterval(function () {
          const slideCount =
            document.querySelectorAll(".carousel__item").length - 1;
          if (carousel.currentSlideNumber >= slideCount) {
            carousel.currentSlideNumber = 0;
          } else {
            carousel.currentSlideNumber++;
          }
          
          carousel.scrollToSlide(carousel.currentSlideNumber);
        }, carousel.autoScrollDuration);
      },
      scrollToSlide: function (targetSlideNumber) {
        const carouselContainer = document.querySelector(".carousel");
        const containerWidth = carouselContainer.offsetWidth;
        carouselContainer.scrollTo(containerWidth * targetSlideNumber, 0);
        const navButtonList = document.querySelectorAll(
          ".carousel__nav__button"
        );
        for (const button of navButtonList) {
          button.classList.remove("active");
        }
        const currentSlideButton = document.querySelector(
          '.carousel__nav__button[data-target-slide="' +
            targetSlideNumber +
            '"]'
        );
        currentSlideButton.classList.add("active");
      },
    };
    document.addEventListener("DOMContentLoaded", carousel.init);
  },

//! End of Carousel =======================================================

  methods : {

    // cette méthode permet de charger des recettes depuis l'API
    loadPets(page) {
      // on met à jour le numéro de la page courante
      // this.currentPage = page;
      const baseUrl = 'http://devback.alertopet.com/wp-json/wp/v2/alert';
      
      // getRecipes() sur recipeService renvoie la promesse d'axios
      petService.getPet(page, this.selectedSpeciesList)
      .then((response) => {
          this.petList = response.data;
          // on utilise la même syntaxe qu'un array associatif php pour récupérer dans un objet une valeur dont la clé doit être protégée entre "", ici x-wp-totalpages de l'objet response.header
          // on doit bien convertir en int pour que le v-for qui génère les liens de pagination se comporte comme un for
          this.pagesCount = parseInt(response.headers["x-wp-totalpages"]);
          console.log(response); // on trouve plusieurs infos en plus de la donnée => notamment headers
      })
      .catch((error) => {
          console.error(error);
      });
    },

    loadSpecies() {
      // getAllRecipeTypes() renvoie une promesse
      speciesService.getAllSpecies()
      .then((response) => {
          this.specieList = response.data;
      })
      .catch((error) => {
          console.error(error);
      });
    },
        // onSpeciesFilterChange() {
        //     // on relance la récupération des données
        //     this.loadPets(1);
        // },
        // au clic sur une recette
    onPetClick(petId) {
      // on déclenche la navigation vers la route /recipe/{id}
      // en passant recipeId
      this.$router.push({ 
          name: 'pet',
          params: {
              petId: petId
          }
      });
    }
  },

  mounted() {
    // on charge les données depuis l'API
    // on précise qu'on veut la page 1
    this.loadPets(1);
    this.loadSpecies();
  }
};

</script>

<style lang="scss" scoped>

</style>