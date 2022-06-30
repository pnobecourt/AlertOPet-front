<template>
  <div class="container">
    <div v-if="isUserConnected">
      <!--title -->
      <section class="title">
        <h1 class="title__page">Mes Bêbètes</h1>
      </section>

      <!-- list of Cards -->
      <section>
        <!-- Cards -->
        <div class="boxOfCards">
          <CardAnimal
            v-for="animal in cardList"
            :key="animal.id"
            :animalData="animal"
          ></CardAnimal>
        </div>
        <!-- end boxOfcards -->
      </section>

      <div class="top"></div>
    </div>
    <span v-if="!isUserConnected">{{
      this.$router.push({ name: "connection" })
    }}</span>
  </div>
  <!-- end of container -->
</template>

<script>
import axios from "axios";
import userService from "../services/userServices.js";
import CardAnimal from "./CardAnimal.vue";
import { baseUrl } from "../services/apiClientService.js";

export default {
  data() {
    return {
      cardList: [],
    };
  },
  components: {
    CardAnimal,
    userService,
  },
  mounted() {
    this.loadCard();
  },

  methods: {
    loadCard() {
      const link = baseUrl + "/aop/v1/pet/user/" + localStorage.id;
      axios
        .get(link, {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.cardList = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  props: ["isUserConnected"],
};
</script>

<style lang="scss" scoped>
</style>