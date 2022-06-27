<template>
  <!-- container -->
  <div class="container" v-if="isUserConnected">
    <div v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">Mon compte</h1>
    </section>

    <!-- label animal -->
    <div class="box">
    <section class="listAnimal" v-if="cardList">
      <div class="animal">
        <div class="animal__animalName">Le nom de l'animal </div>

        <div class="animal__animalAlert">Activer l'alerte</div>

        <div class="animal__animalAlert">Supprimer l'alerte</div>
      </div>

      <!-- animal -->
      <form type="POST" name="myAnimal">
        <div class="animalCard" v-for="animal in cardList" :key="animal.id">
          <div class="animalCard__animalName" @click="onPetModifyClick(animal.id)">{{  animal.title }}</div> 
          <button type="submit" class="actifButton" @click="onAlertClick(animal.id)">Activer</button>
         <button type="submit" class="animalCard__animalAlertDelete">X</button>
        </div>

      </form>
    </section>
    

    <!-- options -->
    <section>
      <form method="POST" id="account">
        <RouterLink to="/animal/tous-les-animaux" rel="noopener noreferrer" class="backButtonBlue"  v-if="cardList">Voir mes animaux</RouterLink>
        <RouterLink to="/animal" rel="noopener noreferrer" class="backButtonBlue" >Ajouter un animal</RouterLink>
        <button class="blueButton" @click="onModifyClick">Modifier mon profil</button>
      </form>

      <hr />
      
      <!-- create accompte -->
      <form method="POST" id="createAccount">
        <button class="yellowButton">Supprimer mon compte</button>
      </form>
    </section>
  </div>
  
  </div>
  <span v-if="!isUserConnected">{{ this.$router.push('connection') }}</span>
  </div>
  <!-- Fin container -->
</template>

<script>
import axios from "axios";
import Switch from '../components/Switch.vue';
import userService from '../services/userServices.js';

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
  mounted() {


    this.loadCard();

     
  },
  props: ["isUserConnected"],

  methods: {
    loadCard(){
      const link = "http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/aop/v1/pet/user/" + localStorage.id;

      console.log(link);
    axios.get(link,{
   headers: {
      Authorization: 'Bearer ' + localStorage.token,
    }})
    .then ((response) => {
        console.log(response.data);
      this.cardList = response.data;
      this.isContentLoaded = true;
    }).catch((error) =>{
        console.error(error );
    })
  },
        // au clic sur une recette
        onModifyClick() {
            // on déclenche la navigation vers la route /recipe/{id}
            // en passant recipeId
            this.$router.push({ 
                name: 'modification-compte',
                params: {
                    ownerId: localStorage.id
                }
            });
        }
        ,
        onPetModifyClick(petId) {
          console.log(petId);
            this.$router.push({ 
                name: 'modification-animal',
                params: {
                    petId: petId
                }
            });
        },
        
        onAlertClick(petId) {
          console.log(petId);
            this.$router.push({ 
                name: 'creation-alerte',
                params: {
                    petId: petId
                }
            });
        }
  }
  
};
</script>

<style lang="scss" scoped>

</style>