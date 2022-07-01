<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">Ajouter un animal</h1>
    </section>


    <section>

      <!-- create animal -->
      <form @submit.prevent="onFormSubmit">

        <div class="choiceAnimal">
          <select name="type" id="type" class="choiceAnimal__select" v-model="selectedType">
            <option disabled value="">Sélectionnez un type d'animal<span class="required">*</span></option>
            <option v-for="specie in specieList" :key="specie.id" :value="specie.name">
              {{ specie.name }} 
            </option>
          </select>
        </div>

        <label for="idChip">Identifiant de la puce</label>
        <input id="idChip" v-model.trim="identification" placeholder="Identifiant de la puce" />

        <label for="name">Nom de l'animal<span class="required">*</span></label>
        <input id="name" v-model.trim="title" placeholder="Nom de l'animal" />

        <label for="race">Race de l'animal</label>
        <input id="race" v-model.trim="breed" placeholder="Race de l'animal" />

        <label for="height">Taille de l'animal en centimètres</label>
        <input id="height" type="number" v-model.trim="size" placeholder="Taille de l'animal" />

        <label for="weight">Poids de l'animal en kilos</label>
        <input id="weight" type="number" v-model.trim="weight" placeholder="Poids de l'animal" />

        <label for="color">Couleur de l'animal</label>
        <input id="color" v-model.trim="color" placeholder="Couleur de l'animal" />

        <label for="birthday">Date de naissance</label>
        <input id="birthday" type="date" v-model.trim="birth_date" placeholder="Date de naissance" />

        <label for="info">Informations complémentaires</label>
        <textarea id="info" v-model.trim="info" rows="5" cols="33"> </textarea>
        <!-- show errors -->
        <div v-if="errorMessages" class="allerror" v-html="errorMessages">
        </div>

        <button class="blueButton bottom"><i class="fa-solid fa-file-plus"></i>Créer la fiche</button>

      </form>
    </section>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
  import axios from "axios";
  import speciesService from '../services/specieService.js';
  import petService from '../services/petService.js';
  import { baseUrl } from "../services/apiClientService";

  export default {
    data() {
      return {
        title: "",
        content: "",
        species: null,
        breed: "",
        identification: "",
        birth_date: null,
        color: "",
        size: "",
        weight: "",
        owner_id: localStorage.id,
        info: "",
        specieList: [],
        selectedType: '',
        errorMessages: "",
      };
    },
    components: {
      speciesService,
      petService,
    },
    mounted() {
      this.loadSpecies();
    },
    methods: {
      loadSpecies() {
        // getAllRecipeTypes() renvoie une promesse
        axios.get(baseUrl + '/wp/v2/species').then((
            response) => {
              console.log(response.data);
              this.specieList = response.data;
            })
          .catch((error) => {
            console.error(error);
          });
      },
      onFormSubmit() {

        const error = [];

        // error on form ?
        if (this.species == "" || this.title == "") {

          error.push("- Sélectionnez un type d'animal.</br>");
        }

        if (this.title.length < 2) {

          error.push("- Le nom doit contenir au moins deux caractères.</br>");
        }

        if (this.species == "" || this.title == "") {

          error.push("- Les champs marqués d'un * sont obligatoires.</br>");
        }
        // if errors
        this.errorMessages = error.join('');

        // if it's ok
        if (!this.errorMessages) {

          // send the informations
          petService.createPet({
              title: this.title,
              content: this.info,
              species: this.selectedType,
              breed: this.breed,
              identification: this.identification,
              birth_date: this.birth_date,
              color: this.color,
              size: this.size,
              weight: this.weight,
            })
            .then((response) => {
              if (!response.data.statusCode || response.data.statusCode === 200) {
                // success -> redirect to account
                this.$router.push('/mon-compte');
              } else {
                // error -> redirect to subscription page
                this.errorMessages = error.response.data.message;
              }
            })
            .catch((error) => {
              // error -> redirect to subscription page
              this.errorMessages = error.response.data.message;
              this.$router.push('/animal');
            });
        }
      },

    },

  };
</script>

<style lang="scss" scoped>

</style>