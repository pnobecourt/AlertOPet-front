<template>
  <div class="container" v-if="isUserConnected">
    <section class="title">
      <h1 class="title__page">Modifier vos<br />informations</h1>
    </section>

    <section class="box">
      <!-- connexion -->
      <form @submit.prevent="onFormSubmit" id="modifyProfil">
        <label for="name">Votre nom</label>
        <input id="name" v-model="cardList.first_name" name="first_name" placeholder="Votre nom"/>

        <label for="email">Votre adresse email</label>
        <input id="email" v-model="cardList.email" name="email" placeholder="Votre adresse email" />

        <label for="password">Votre mot de passe</label>
        <input
          id="password"
          type="password"
          name="password"
          v-model="password"
          placeholder="Votre mot de passe"
        />

        <label for="confirmPassword">Confirmer votre mot de passe</label>
        <input
          id="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirmer votre mot de passe"
        />

        <button class="blueButton">Modifier</button>
      </form>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import userService from '../services/userServices.js';


export default {
  data() {
    return {
      cardList: [],
      errorMessages: "",
      password: "",
      confirmPassword: "",
    };
  },
    mounted() {


    this.loadCard();

     
  },
  components: {
    userService,
  },
  methods: {

    loadCard(){
      const link = "http://paul-nobecourt.vpnuser.lan/Apo/projet-alert-pet-back/wp-json/aop/v1/user/" + localStorage.id;

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
    onFormSubmit() {
      const error = [];

      if (this.password.length <= 6) {
        error.push("Le mot de passe est invalide.");
      }

      if (this.password != this.confirmPassword) {
        error.push("Les mots de passe ne sont pas les mêmes.");
      }


      if (!this.email) {
        error.push('Indiquez votre adresse email.');
      } else if (!this.validEmail(this.email)) {
        error.push('L\'email n\'est pas valide.');
      }

      this.errorMessages = error.join(', ');
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
    props: ["isUserConnected"],
};
</script>


<style lang="scss" scoped>
</style>
