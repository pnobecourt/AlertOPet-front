<template>
  <!-- container -->
  <div class="container" v-if="isUserConnected">
    <div v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">Mon compte</h1>
    </section>

    <!-- label animal -->
    <div class="box">
    <section class="listAnimal">
      <div class="animal">
        <div class="animal__animalName">Le nom de l'animal </div>

        <div class="animal__animalAlert">Activer l'alerte</div>

        <div class="animal__animalAlert">Supprimer l'alerte</div>
      </div>

      <!-- animal -->
      <form type="POST" name="myAnimal">
        <div class="animalCard" v-for="animal in cardList" :key="animal.id">
          <div class="animalCard__animalName" @click="onPetModifyClick(animal.id)">{{  animal.title }}</div> 

                <app-switch classes="is-warning" v-model="value" v-if="animal.content != ''" checked></app-switch>
                <app-switch classes="is-warning" v-model="value" v-else></app-switch>

          <button type="submit" class="animalCard__animalAlertDelete">X</button>
        </div>

      </form>
    </section>
    

    <!-- options -->
    <section>
      <form method="POST" id="account">
        <RouterLink to="/animal/tous-les-animaux" rel="noopener noreferrer" class="backButtonBlue" >Voir mes animaux</RouterLink>
        <RouterLink to="/animal" rel="noopener noreferrer" class="backButtonBlue" >Ajouter un animal</RouterLink>
        <button class="blueButton" @click="onModifyClick(ownerId)">Modifier mon profil</button>
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
      value: false,
      text: '',
    };
  },
  components: {
    userService,
    'app-switch': Switch,
  },
  mounted() {


    this.loadCard();

     
  },
  props: ["isUserConnected"],
  watch: {
            value(val) {
                this.text = val ? 'Yes' : 'No'
            }
        },

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
        onModifyClick(ownerId) {
            // on déclenche la navigation vers la route /recipe/{id}
            // en passant recipeId
            this.$router.push({ 
                name: 'modification-compte',
                params: {
                    alertId: ownerId
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
        }
  }
  
};
</script>

<style lang="scss" scoped>

</style>