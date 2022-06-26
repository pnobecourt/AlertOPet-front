<template>
  <!-- container -->
  <div class="container" v-if="isContentLoaded">
    <section class="title">
      <h1 class="title__page">Déclencher une alerte pour un animal</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->

     <img class="cardAnimal__image" :src= cardList.petPicture  alt="Animal" />
      <form method="POST" id="pictureAnimal">
        <div class="choiceLost">
          <div class="choiceLost__box">
            <input
              type="radio"
              id="choiceLost__lost"
              name="perdu"
              value="perdu"
            />
            <label for="choiceLost__lost" class="choiceLost__lost"> Perdu</label
            ><br />
          </div>


          <div class="choiceLost__box">
            <input
              type="radio"
              id="choiceLost__found"
              name="trouver"
              value="trouver"
            />
            <label for="choiceLost__found" class="choiceLost__found">
              Trouvé</label
            ><br />
          </div>
        </div>

        <button type="submit" class="blueButton">Ajouter une photo</button>
      </form>
</section>

      <!-- create animal -->
      <form method="POST" id="animal">
        <div class="choiceAnimal">
          <select name="type" id="type" class="choiceAnimal__select">
            <option value="">Sélectionnez un type d'animal</option>
            <option value="0">Chien</option>
            <option value="1">Chat</option>
            <option value="2">Poule</option>
            <option value="3">Canard</option>
          </select>
        </div>

        <label for="lieu">Lieu</label>
        <input id="lieu" name="lieu" placeholder="Lieu de la disparition" />

        <label for="name">Nom de l'animal</label>
        <input id="name" name="name" placeholder="Nom de l'animal"  v-model="cardList.meta.petName" />

        <label for="race">Race de l'animal</label>
        <input id="race" name="race" placeholder="Race de l'animal" v-model="cardList.meta.petBreed"/>

        <label for="height">Taille de l'animal</label>
        <input id="height" name="height" placeholder="Taille de l'animal" v-model="cardList.meta.petHeight"/>

        <label for="weight">Poids de l'animal</label>
        <input id="weight" name="weight" placeholder="Poids de l'animal" v-model="cardList.meta.petWeight"/>

        <label for="color">Couleur de l'animal</label>
        <input id="color" name="color" placeholder="Couleur de l'animal" v-model="cardList.meta.petColor"/>

        <label for="birthday">Âge aproximatif</label>
        <input id="birthday" name="birthday" placeholder="Âge aproximatif" v-model="cardList.meta.petAge"/>

        <label for="info">Votre message / Description</label>
        <textarea id="info" name="info" rows="5" cols="33" v-model="cardList.content.rendered"> </textarea>
<div class="box">
        <button class="blueButton bottom">Enregistrer</button>
        </div>
      </form>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
import axios from "axios";
import userService from '../services/userServices.js';
export default {

  data() {
    return {
      cardList: [],
      isContentLoaded: false,
    };
  },

  components: {
    userService
  },
  props: ["isUserConnected"],

  mounted() {

    const singlePet = "http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/wp/v2/alert/" + this.$route.params.petId + "?embed";
    console.log(singlePet);

    axios.get(singlePet)
    .then ((response) => {
        console.log(response.data);
      this.cardList = response.data;
      this.isContentLoaded = true;
    }).catch((error) =>{
        console.error(error );
    })

},
  methods:{
        onModifyClick(petId) {
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