<template>
  <!-- container -->
  <div class="container" v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">
        Déclencher une alerte pour {{ cardList.title }} (
        {{ cardList.species }} ) - #{{ cardList.id }}
      </h1>
    </section>

    <section class="box">
      <!-- picture of animal -->
      <img class="cardAnimal__image" :src="cardList.petPicture" alt="Animal" />
      <form method="POST" id="pictureAnimal">
        <div class="choiceLost">
          <div class="choiceLost__box">
            <input
              type="radio"
              id="choiceLost__lost"
              value="perdu"
              v-model="picked"
            />
            <label for="choiceLost__lost" class="choiceLost__lost"> Perdu</label
            ><br />
          </div>

          <div class="choiceLost__box">
            <input
              type="radio"
              id="choiceLost__found"
              value="kidnapé"
              v-model="picked"
            />
            <label for="choiceLost__found" class="choiceLost__found">
              Kidnapé</label
            ><br />
          </div>
        </div>

        <button type="submit" class="blueButton">
          <i class="fa-solid fa-camera"></i>Ajouter une photo
        </button>
      </form>
    </section>

    <!-- create animal -->
    <form @submit.prevent="onFormSubmit">
      <div class="choiceAnimal">
        <select
          name="type"
          id="type"
          class="choiceAnimal__select"
          v-model="selectedType"
        >
          <option disabled value="">
            Sélectionnez un type d'animal<span class="required">*</span>
          </option>
          <option
            v-for="specie in specieList"
            :key="specie.id"
            :value="specie.name"
          >
            {{ specie.name }}
          </option>
        </select>
      </div>

      <label for="lieu">Lieu</label>
      <input
        id="lieu"
        placeholder="Lieu de la disparition"
        v-model="cardList.localization"
      />

      <label for="name">Nom de l'animal<span class="required">*</span></label>
      <input id="name" placeholder="Nom de l'animal" v-model="cardList.title" />

      <label for="race">Race de l'animal</label>
      <input
        id="race"
        placeholder="Race de l'animal"
        v-model="cardList.breed"
      />

      <label for="height">Taille de l'animal</label>
      <input
        id="height"
        placeholder="Taille de l'animal"
        v-model="cardList.size"
      />

      <label for="weight">Poids de l'animal</label>
      <input
        id="weight"
        placeholder="Poids de l'animal"
        v-model="cardList.weight"
      />

      <label for="color">Couleur de l'animal</label>
      <input
        id="color"
        placeholder="Couleur de l'animal"
        v-model="cardList.color"
      />

      <label for="birthday">Âge aproximatif</label>
      <input
        id="birthday"
        placeholder="Âge aproximatif"
        v-model="cardList.birth_date"
      />

      <label for="password">Votre numéro de téléphone</label>
      <input
        id="telephon"
        type="telephon"
        v-model.trim="contactPhone"
        placeholder="Votre numéro de téléphone"
      />

      <label for="info">Votre message / Description</label>
      <textarea id="info" rows="5" cols="33" v-model="cardList.content">
      </textarea>
      <div class="box">
        <button class="yellowButton bottom">
          <i class="fa-solid fa-bullhorn"></i>Déclencher une alerte
        </button>
      </div>
    </form>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
import axios from "axios";
import userService from "../services/userServices.js";
import speciesService from "../services/specieService.js";
import petService from "../services/petService.js";
import { baseUrl } from "../services/apiClientService.js";

export default {
  data() {
    return {
      content: "",
      post_parent: "",

      title: "",

      datetime: "",
      localization: "",
      petId: "",
      petBreed: "",
      petName: "",
      petAge: "",
      petColor: "",
      petSize: "",
      petWeight: "",
      petDescription: "",
      contactPhone: "",
      contactMail: "",
      petSpecies: "",

      specieList: [],
      selectedType: "",
      errorMessages: "",

      cardList: [],
      isContentLoaded: false,
      picked: "perdu",
    };
  },

  components: {
    userService,
    speciesService,
    petService,
  },
  props: ["isUserConnected"],

  mounted() {
    const link = baseUrl + "/aop/v1/pet/" + this.$route.params.petId;

    axios
      .get(link, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((response) => {
        this.cardList = response.data;
        this.isContentLoaded = true;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    onFormSubmit() {
      // if it's ok
      if (!this.errorMessages) {
        const formData = {
          title: this.cardList.title,
          content: this.cardList.content,
          post_parent: this.cardList.id,
          datetime: this.cardList.date,
          localization: this.cardList.localization,
          petId: this.cardList.id,
          petBreed: this.cardList.breed,
          petName: this.cardList.title,
          petAge: this.cardList.age,
          petColor: this.cardList.color,
          petSize: this.cardList.size,
          petWeight: this.cardList.weight,
          petDescription: this.cardList.content,
          contactMail: localStorage.email,
        };

        console.log(formData);

        // send the informations
        petService
          .createPetAlert(formData)
          .then((response) => {
            if (!response.data.statusCode || response.data.statusCode === 200) {
              // success -> redirect to account
              console.log(title);
            } else {
              // error -> redirect to subscription page
              this.errorMessages = error.response.data.message;
            }
          })
          .catch((error) => {
            // error -> redirect to subscription page
            this.errorMessages = error.response.data.message;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
