<template>
  <!-- container -->
  <div class="container" v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">Modifier un animal</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->
      <img class="cardAnimal__image" :src="cardList.picture" alt="Animal" />
      <form method="POST" id="pictureAnimal">
        <button class="blueButton">
          <i class="fa-solid fa-camera"></i>Ajouter une photo
        </button>
        <button class="yellowButton" @click="onAlertClick(cardList.id)">
          <i class="fa-solid fa-bullhorn"></i>Déclencher une alerte
        </button>
      </form>
    </section>
    <section>
      <!-- create animal -->
      <form method="POST" id="animal">
        <label for="idChip">Identifiant de la puce</label>
        <input
          id="idChip"
          name="idChip"
          placeholder="Identifiant de la puce"
          v-model="cardList.identification"
        />

        <label for="name">Nom de l'animal</label>
        <input
          id="name"
          name="name"
          placeholder="Nom de l'animal"
          v-model="cardList.title"
        />

        <label for="race">Race de l'animal</label>
        <input
          id="race"
          name="race"
          placeholder="Race de l'animal"
          v-model="cardList.breed"
        />

        <label for="height">Taille de l'animal en centimètres</label>
        <input
          id="height"
          name="height"
          type="number"
          placeholder="Taille de l'animal"
          v-model="cardList.size"
        />

        <label for="weight">Poids de l'animal en kilos</label>
        <input
          id="weight"
          name="weight"
          type="number"
          placeholder="Poids de l'animal"
          v-model="cardList.weight"
        />

        <label for="color">Couleur de l'animal</label>
        <input
          id="color"
          name="color"
          placeholder="Couleur de l'animal"
          v-model="cardList.color"
        />

        <label for="birthday">Âge</label>
        <input
          id="birthday"
          name="birthday"
          placeholder="Date de naissance"
          v-model="cardList.birth_date"
        />

        <label for="info">Informations complémentaires</label>
        <textarea
          id="info"
          name="info"
          rows="5"
          cols="33"
          v-model="cardList.content"
        >
        </textarea>

        <button class="blueButton bottom">
          <i class="fa-solid fa-pen"></i>Modifier
        </button>
      </form>
    </section>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
import axios from "axios";
import userService from "../services/userServices.js";
import { baseUrl } from "../services/apiClientService.js";

export default {
  data() {
    return {
      cardList: [],
      isContentLoaded: false,
    };
  },

  components: {
    userService,
  },
  props: ["isUserConnected"],

  mounted() {
    const link = baseUrl + "/aop/v1/pet/" + this.$route.params.petId;

    console.log(link);
    axios
      .get(link, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.cardList = response.data;
        this.isContentLoaded = true;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    onAlertClick(petId) {
      console.log(petId);
      this.$router.push({
        name: "creation-alerte",
        params: {
          petId: petId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>