<template>
  <!-- container -->
  <div class="container" v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">Modifier un animal</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->
      <img v-if="cardList.picture" class="cardAnimal__image" :src=cardList.picture alt="Animal" />
      <img v-else class="cardAnimal__image" src="../assets/images/sans-image.png" alt="Animal" />


      <form method="POST" id="pictureAnimal">
        <button class="blueButton"><i class="fa-solid fa-camera"></i>Ajouter une photo</button>
        <button class="yellowButton" @click="onAlertClick(cardList.id)"><i class="fa-solid fa-bullhorn"></i>Déclencher
          une alerte</button>
      </form>
    </section>
    <section>

      <!-- create animal -->
      <form @submit.prevent="onFormSubmit">

        <label for="idChip">Identifiant de la puce</label>
        <input id="idChip" placeholder="Identifiant de la puce" v-model="cardList.identification" />

        <label for="name">Nom de l'animal</label>
        <input id="name" placeholder="Nom de l'animal" v-model="cardList.title" />

        <label for="race">Race de l'animal</label>
        <input id="race" placeholder="Race de l'animal" v-model="cardList.breed" />

        <label for="height">Taille de l'animal en centimètres</label>
        <input id="height" type="number" placeholder="Taille de l'animal" v-model="cardList.size" />

        <label for="weight">Poids de l'animal en kilos</label>
        <input id="weight" type="number" placeholder="Poids de l'animal" v-model="cardList.weight" />

        <label for="color">Couleur de l'animal</label>
        <input id="color" placeholder="Couleur de l'animal" v-model="cardList.color" />

        <label for="birthday">Âge</label>
        <input id="birthday" type="date" placeholder="Date de naissance" v-model="cardList.birth_date" />

        <label for="info">Informations complémentaires</label>
        <textarea id="info" rows="5" cols="33" v-model="cardList.content">
          </textarea>

        <!-- show errors -->
        <br>
        <div v-if="errorMessages" class="allerror" v-html="errorMessages">
        </div>
        <!-- show errors -->
        <br>
        <div v-if="successMessages" class="allsuccess" v-html="successMessages">
        </div>

        <button class="blueButton bottom"><i class="fa-solid fa-pen"></i>Modifier</button>

      </form>
    </section>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
  import axios from "axios";
  import userService from '../services/userServices.js';
  import petService from '../services/petService.js';

  export default {

    data() {
      return {
        cardList: [],
        isContentLoaded: false,
        successMessages: '',
        errorMessages: '',
      };
    },

    components: {
      petService,
      userService
    },
    props: ["isUserConnected"],

    mounted() {
      const link = baseUrl + "/aop/v1/pet/" + this.$route
        .params.petId;
      axios.get(link, {
          headers: {
            Authorization: 'Bearer ' + localStorage.token,
          }
        })
        .then((response) => {
          console.log(response.data);
          this.cardList = response.data;
          this.isContentLoaded = true;
        }).catch((error) => {
          console.error(error);
        })
    },

    methods: {
      onAlertClick(petId) {
        console.log(petId);
        this.$router.push({
          name: 'creation-alerte',
          params: {
            petId: petId
          }
        });
      },

      onFormSubmit() {

        // if it's ok
        if (!this.errorMessages) {

          const formData = {

            "title": this.cardList.title,
            "content": this.cardList.content,
            "breed": this.cardList.breed,
            "identification": this.cardList.identification,
            "birth_date": this.cardList.birth_date,
            "color": this.cardList.color,
            "size": this.cardList.size,
            "weight": this.cardList.weight,
          }

          console.log("cardList => " + this.cardList);

          console.log("Content => " + this.cardList.content);

          // send the informations
          petService.updatePet(formData)
            .then((response) => {
              console.log(formData);
              // success -> redirect to list alert category
              this.successMessages = "- Votre modification a été validée.";
console.log(response); 
            })
            .catch((error) => {
              // error -> redirect to subscription page
              this.errorMessages = error.response;

            });
        }
      }

    },

  };
</script>

<style lang="scss" scoped>

</style>