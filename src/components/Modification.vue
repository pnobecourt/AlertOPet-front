<template>
  <div class="container" v-if="isUserConnected">
    <section class="title">
      <h1 class="title__page">Modifier vos<br />informations</h1>
    </section>

    <section class="box">
      <!-- connexion -->
      <form @submit.prevent="onFormSubmit" id="modifyProfil">
        <label for="name">Votre nom</label>
        <input id="name" v-model="cardList.first_name" placeholder="Votre nom"/>

        <label for="email">Votre adresse email<span class="required">*</span></label>
        <input id="email" v-model="cardList.email" placeholder="Votre adresse email" />

        <label for="password">Votre mot de passe</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Votre mot de passe"
        />

        <label for="confirmPassword">Confirmer votre mot de passe</label>
        <input
          id="confirmPassword"
          type="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirmer votre mot de passe"
        />
        <!-- show errors -->
        <br>
        <div v-if="errorMessages" class="allerror" v-html="errorMessages">
        </div>
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
      const link = baseUrl + "/aop/v1/user/" + localStorage.id;

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

      if ((this.password != this.confirmPassword) && (this.password != "" || this.confirmPassword != "")){
        error.push("- Les mots de passe ne sont pas les mêmes.</br>");
      }


      if (!this.cardList.email) {
        error.push('- Indiquez votre adresse email.<br>');
      } else if (!this.validEmail(this.cardList.email)) {
        error.push('- L\'email n\'est pas valide.<br>');
      }

      this.errorMessages = error.join(', ');

        // if it's ok
        if (!this.errorMessages) {

      if (!this.password){

      userService.updateUser({
      user_login: this.cardList.email,
      display_name: this.cardList.first_name,
      user_email: this.cardList.email,
      first_name: this.cardList.first_name,
      last_name: this.cardList.first_name,
   
        })
        
      .then((response) => {

                this.successMessages = "- Vos informations ont été modifiées.<br>"

            })
      .catch((error) => {
              
              this.errorMessages = error.response.data.message;
            }); 

      } else {

    userService.updateUser({

    user_pass: this.password,
    user_login: this.cardList.email,
    display_name: this.cardList.first_name,
    user_email: this.cardList.email,
    first_name: this.cardList.first_name,
    last_name: this.cardList.first_name,
  
      })

      .then((response) => {
            if (!response.data.statusCode || response.data.statusCode === 200) {
              // success 
                this.successMessages = "- Vos informations ont été modifiées.<br>"
            } else {
              // error 
              this.errorMessages = error.response.data.message;
            }
          })
          .catch((error) => {
            // error 
            this.errorMessages = error.response.data.message;
          }); 
        }
          
        }
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
