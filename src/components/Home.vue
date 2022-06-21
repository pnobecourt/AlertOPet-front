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
          <select name="type" id="type" class="choiceAnimal__select">
            <option value="">Sélectionnez un type d'animal</option>
            <option value="0">Chien</option>
            <option value="1">Chat</option>
            <option value="2">Poule</option>
            <option value="3">Canard</option>
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

<button @click="loadCard()">liste des animaux</button>
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

export default {
  data() {
    return {
      cardList: []
    };
  },
  components: {
    Card,
  },
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

methods : {
  loadCard(){
    axios.get('http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/wp/v2/pets?_embed').then
    ((response) => {
        console.log(response.data);
      this.cardList = response.data;
    }).catch((error) =>{
        console.error(error );
    })
  }
}
};
</script>

<style lang="scss" scoped>
</style>