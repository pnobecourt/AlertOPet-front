<template>
  <!-- container -->
  <div class="container" v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">Déclencher une alerte pour {{ cardList.title }} ( {{ cardList.species }} ) -
        #{{ cardList.id }}</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->

      <img v-if="cardList.petPicture" class="cardAnimal__image" :src="cardList.petPicture" alt="Animal" />
      <img v-else class="cardAnimal__image" src="../assets/images/sans-image.png" alt="Animal" />

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

      <div class="choiceAnimal" v-if="!cardList.species">
        
        <select name="type" id="type" class="choiceAnimal__select" v-model="selectedType">
          <option disabled value="">Sélectionnez un type d'animal<span class="required">*</span></option>
          <option v-for="specie in specieList" :key="specie.id" :value="specie.name">
            {{ specie.name }}
          </option>
        </select>
      </div>

      <select v-if="downloadCity" id="selectCountry" class="choiceCity__select" v-model="selectedCity">
        <option disabled value="">Sélectionnez le lieu</option>
        <option v-for="alertLocalization in alertLocalizations" :key="alertLocalization.id"
          :value="alertLocalization.name">
          {{ alertLocalization.name }}
        </option>

      </select>

      <label for="name">Nom de l'animal<span class="required">*</span></label>
      <input id="name" placeholder="Nom de l'animal" v-model="cardList.title" />

      <label for="race">Race de l'animal</label>
      <input id="race" placeholder="Race de l'animal" v-model="cardList.breed" />

      <label for="height">Taille de l'animal</label>
      <input id="height" placeholder="Taille de l'animal" v-model="cardList.size" />

      <label for="weight">Poids de l'animal</label>
      <input id="weight" placeholder="Poids de l'animal" v-model="cardList.weight" />

      <label for="color">Couleur de l'animal</label>
      <input id="color" placeholder="Couleur de l'animal" v-model="cardList.color" />

      <label for="birthday">Âge aproximatif</label>
      <input id="birthday" placeholder="Âge aproximatif" v-model="age" />

      <label for="password">Votre numéro de téléphone</label>
      <input id="telephon" type="telephon" v-model.trim="contactPhone" placeholder="Votre numéro de téléphone" />

      <label for="info">Votre message / Description</label>
      <textarea id="info" rows="5" cols="33" v-model="cardList.content"> </textarea>
      <div class="box">

        <!-- show errors -->
        <br>
        <div v-if="errorMessages" class="allerror" v-html="errorMessages">
        </div>
        <!-- show errors -->
        <br>
        <div v-if="successMessages" class="allsuccess" v-html="successMessages">
        </div>

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
        title: {
          rendered: ""
        },
        status: "publish",
        alert_status: "En cours",
        meta: {
          localization: "",
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
        errorMessages: "",
        successMessages: "",
        selectedCity: '',
        // loading
        isContentLoaded: false,
        downloadCity: false,
        // checked by default
        picked: "perdu",
        age: 0,
      };
    },

    components: {
      alertLocalizationService,
      userService,
      speciesService,
      petService,
    },

    props: ["isUserConnected"],

    mounted() {

      this.loadAlertLocalizations();

      const link = baseUrl + "/aop/v1/pet/" + this.$route
        .params.petId + "?alert_type" + this.picked;

      axios.get(link, {
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          }
        })
        .then((response) => {
          this.cardList = response.data;
          this.isContentLoaded = true;
        }).catch((error) => {
          console.error(error);
        })
    },

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
              "rendered": this.cardList.content
            },
            "meta": {
              "localization": this.selectedCity,
              "petBreed": this.cardList.breed,
              "petId": localStorage.id,
              "petName": this.cardList.title,
              "petAge": this.age,
              "petColor": this.cardList.color,
              "petSize": this.cardList.size,
              "petWeight": this.cardList.weight,
              "petDescription": this.cardList.content,
              "petSpecies": this.cardList.species,
              "contactPhone": this.contactPhone,
              "contactMail": localStorage.email,
            },

          }

          console.log(formData);


          // send the informations
          petService.createPetAlert(formData)
            .then((response) => {
              console.log(formData);
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
              this.errorMessages = error.response;

            });
        }
      },

    },



  };
</script>

<style lang="scss" scoped>

</style>
