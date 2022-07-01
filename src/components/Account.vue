<template>
  <!-- container -->
  <div class="container" v-if="isUserConnected">
    <div v-if="isContentLoaded">
      <section class="title">
        <h1 class="title__page">Mon compte</h1>
      </section>

      <!-- label animal -->
      <div class="box">
        <section class="listAnimal" v-if="cardList || cardListAlert">
          <div><p class="alertInProgress">Mes animaux</p></div>
          <div class="animal">
            <div class="animal__animalName">Le nom de l'animal</div>

            <div class="animal__animalAlert">Créer une alerte</div>

            <div class="animal__animalAlert">Effacer l'animal</div>
          </div>

          <!-- animal -->
      
            <div class="animalCard" v-for="animal in cardList" :key="animal.id">
              <div class="animalCard__animalName" @click="onPetModifyClick(animal.id)">
               #{{ animal.id }} {{ animal.title }}
              </div>
              <button class="actifButton" @click="onAlertClick(animal.id)">
                Activer
              </button>
              <button class="animalCard__animalAlertDelete" @click="deleteMyPet(animal.id)">
                X
              </button>
            </div>


              <div><hr><p class="alertInProgress">Alertes en cours</p></div>


                        <div class="animal">
            <div class="animal__animalName">Le nom de l'animal</div>

            <div class="animal__animalAlert">Effacer l'alerte</div>
          </div>
            <div class="animalCard" v-for="animalAlert in cardListAlert" :key="animalAlert.id">
              <div class="animalCard__animalName" @click="alertDetailClick(animalAlert.id)">
               #{{ animalAlert.id }} {{ animalAlert.meta.petName }}
              </div>
              <button class="animalCard__animalAlertDelete" @click="deleteMyPet(animalAlert.id)">
                X
              </button>
            </div>
        </section>

        <!-- options -->
        <section>
          <form method="POST" id="account">
            <RouterLink to="/animal/tous-les-animaux" rel="noopener noreferrer" class="backButtonBlue" v-if="cardList">
              Voir mes animaux</RouterLink>
            <RouterLink to="/animal" rel="noopener noreferrer" class="backButtonBlue">Ajouter un animal</RouterLink>
            <button class="blueButton" @click="onModifyClick">
              Modifier mon profil
            </button>
          </form>

          <hr />

          <!-- create accompte -->
          <form method="POST" id="createAccount">
            <button class="yellowButton" @click="deleteAccount(localStorage.id)">Supprimer mon compte</button>
          </form>
        </section>
                <!-- show errors -->
        <div v-if="errorMessages" class="allerror" v-html="errorMessages">
        </div>
      </div>
    </div>
    <span v-if="!isUserConnected">{{ this.$router.push("connection") }}</span>
  </div>
  <!-- Fin container -->
</template>

<script>
  import axios from "axios";
  import userService from "../services/userServices.js";
  import petService from "../services/petService.js";
  import { baseUrl } from "../services/apiClientService";

  export default {
    data() {
      return {
        cardList: [],
        cardListAlert: [],
        isContentLoaded: false,
        alert_status : "Archivé",
      };
    },
    components: {
      petService,
      userService,
    },
    mounted() {
      this.loadCard();
      this.loadCardAlert();
    },
    props: ["isUserConnected"],

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
            this.cardList = response.data;
            this.isContentLoaded = true;
          })
          .catch((error) => {
            console.error(error);
          });
      },  
      loadCardAlert() {
        const link = baseUrl + "/wp/v2/alert/";

        axios
          .get(link, {
            headers: {
              Authorization: "Bearer " + localStorage.token,
            },
          })
          .then((response) => {
            console.log(response);
            this.cardListAlert = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },  
      
      deleteMyPet(id) {

          // delete card
          petService.deletePet({
              id: id,
            })
            .then((response) => {
              console.log(response);
              if (!response.data.statusCode || response.data.statusCode === 200) {
                // success - nothing
                this.loadCard();
                this.loadCardAlert();
              } else {
                // error
                this.errorMessages = error.response.data.message;
              }
            })
            .catch((error) => {
              // error 
            
            });
       
      },      
      
      deleteAccount(id) {

          // delete card
          userService.deleteAccount({
              id: id,
            })
            .then((response) => {
              console.log(response);
              if (!response.data.statusCode || response.data.statusCode === 200) {
                // success - redirect to homepage

              } else {
                // error
                this.errorMessages = error.response.data.message;
              }
            })
            .catch((error) => {
              // error 
            
            });
       
      },

      onModifyClick() {
        this.$router.push({
          name: "modification-compte",
          params: {
            ownerId: localStorage.id,
          },
        });
      },

      onPetModifyClick(petId) {
        this.$router.push({
          name: "modification-animal",
          params: {
            petId: petId,
          },
        });
      },

      alertDetailClick(alertId) {
        this.$router.push({
          name: "alerte",
          params: {
            alertId: alertId,
          },
        });
      },

      onAlertClick(petId) {
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