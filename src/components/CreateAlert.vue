<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">Déclencher une alerte</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->
      <img class="cardAnimal__image" src="../assets/images/sans-image.png" alt="Animal" />


      <form method="POST" id="pictureAnimal">

        <div class="choiceLost">

          <div class="choiceLost__box">
            <input type="radio" id="choiceLost__lost" value="9" v-model="picked" />
            <label for="choiceLost__lost" class="choiceLost__lost"> Perdu</label><br />
          </div>


          <div class="choiceLost__box">
            <input type="radio" id="choiceLost__kidnapped" value="11" v-model="picked" />
            <label for="choiceLost__kidnapped" class="choiceLost__kidnapped">
              Kidnapé</label><br />
          </div>

          <div class="choiceLost__box">
            <input type="radio" id="choiceLost__found" value="10" v-model="picked" />
            <label for="choiceLost__found" class="choiceLost__found">
              Trouvé</label><br />
          </div>

        </div>

        <button type="submit" class="blueButton"><i class="fa-solid fa-camera"></i>Ajouter une photo</button>

      </form>
    </section>

    <!-- create animal -->
    <form @submit.prevent="onFormSubmit">

      <div class="choiceAnimal">

        <select id="type" class="choiceAnimal__select" v-model="selectedType">
          <option disabled value="">Sélectionnez un type d'animal</option>
          <option v-for="specie in specieList" :key="specie.id" :value="specie.name">
            {{ specie.name }}
          </option>
        </select>
        
      </div>

      <select v-if="downloadCity" id="selectCountry" class="choiceAnimal__select" v-model="selectedCity">
        <option disabled value="">Sélectionnez le lieu</option>
        <option v-for="alertLocalization in alertLocalizations" :key="alertLocalization.id"
          :value="alertLocalization.name">
          {{ alertLocalization.name }}
        </option>
      </select>

      <label for="name">Nom de l'animal<span class="required">*</span></label>
      <input id="name" placeholder="Nom de l'animal" v-model="name" />

      <label for="race">Race de l'animal</label>
      <input id="race" placeholder="Race de l'animal" v-model="breed" />

      <label for="height">Taille de l'animal</label>
      <input id="height" placeholder="Taille de l'animal" v-model="size" />

      <label for="weight">Poids de l'animal</label>
      <input id="weight" placeholder="Poids de l'animal" v-model="weight" />

      <label for="color">Couleur de l'animal</label>
      <input id="color" placeholder="Couleur de l'animal" v-model="color" />

      <label for="birthday">Âge aproximatif</label>
      <input id="birthday" type="number" placeholder="Âge aproximatif" v-model="age" />

      <label for="tel">Votre numéro de téléphone</label>
      <input id="tel" placeholder="Votre numéro de téléphone" v-model="phone" />


      <label for="info">Votre message / Description</label>
      <textarea id="info" rows="5" cols="33" v-model="content"> </textarea>

      <!-- show errors -->
      <br>
      <div v-if="errorMessages" class="allerror" v-html="errorMessages">
      </div>
      <!-- show errors -->
      <br>
      <div v-if="successMessages" class="allsuccess" v-html="successMessages">
      </div>

      <div class="box">
        <button class="yellowButton bottom"><i class="fa-solid fa-bullhorn"></i>Déclencher une alerte</button>

      </div>
    </form>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
  import axios from "axios";
  import userService from '../services/userServices.js';
  import speciesService from '../services/specieService.js';
  import petService from '../services/petService.js';
  import alertLocalizationService from "../services/alertLocalizationService";
  import { baseUrl } from "../services/apiClientService";

  export default {

    data() {

      return {
        // content
        content: {
          rendered: ""
        },
        title: "",
        status: "publish",
        alert_status: "En cours",
        meta: {
          address: "",
          petId: "",
          petBreed: "",
          petName: "",
          petAge: 0,
          petColor: "",
          petSize: "",
          petWeight: "",
          petDescription: "",
          contactMail: "",
          contactPhone: "",
          petSpecies: "",
        },
        // select
        specieList: [],
        alertLocalizations: [],
        selectedType: '',
        selectedCity: '',
        errorMessages: "",
        successMessages: "",
        // loading
        isContentLoaded: false,
        downloadCity: false,
        // chacked by default
        picked: "perdu",
        name: "",
        age: 0,
        size: "",
        weight: "",
        color: "",
        content: "",
        phone: "",
      };
    },

    components: {
      alertLocalizationService,
      userService,
      speciesService,
      petService,
    },

    mounted() {
      this.loadSpecies();
      this.loadAlertLocalizations();
    },

    props: ["isUserConnected"],

    methods: {

      loadAlertLocalizations() {
        // getAllAlertLocalizations() renvoie une promesse
        alertLocalizationService.getAllAlertLocalizations()
          .then((response) => {
            this.alertLocalizations = response.data;
            console.log("Liste des départements chargée avec succès.");
            this.downloadCity = true;
          })
          .catch((error) => {
            console.error(error);
          });
      },

      loadSpecies() {
        axios.get(baseUrl + '/wp/v2/species')
          .then((response) => {
            console.log("Liste des types d'animaux chargée avec succès.");
            this.specieList = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },

      onFormSubmit() {

        // if it's ok
        if (!this.errorMessages) {

          const formData = {

            "status": "publish",
            "type": "alert",
            "title": {
              "rendered": this.name
            },
            "content": {
              "rendered": this.name
            },
            "meta": {
              "address": this.selectedCity,
              "petBreed": this.breed,
              "petName": this.name,
              "petAge": this.age,
              "petColor": this.color,
              "petSize": this.size,
              "petWeight": this.weight,
              "petDescription": this.content,
              "petSpecies": this.selectedType,
              "contactPhone": this.phone,
              "contactMail": localStorage.email,
            },
          }

          console.log("Selectedtype => " + this.selectedType);

          // send the informations
          petService.createPetAlert(formData)
            .then((response) => {
              // success -> redirect to list alert category
              this.successMessages = "- Votre alerte a été validée.";
              this.$router.push('/mon-compte');
            })
            .catch((error) => {
              // error -> redirect to subscription page
              this.errorMessages = error.response;

            });
        }
      },
    }
  };
</script>

<style lang="scss" scoped>

</style>
