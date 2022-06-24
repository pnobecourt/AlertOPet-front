<template>
  <!-- container -->
  <div class="container" v-if="isUserConnected">
    <section class="title">
      <h1 class="title__page">Mon compte</h1>
    </section>

    <!-- label animal -->
    <div class="box">
    <section class="listAnimal">
      <div class="animal">
        <div class="animal__animalName">Le nom de l'animal</div>

        <div class="animal__animalAlert">Activer l'alerte</div>

        <div class="animal__animalAlert">Supprimer l'alerte</div>
      </div>

      <!-- animal -->
      <form type="POST" name="myAnimal">
        <div class="animalCard">
          <div class="animalCard__animalName">Choupette</div>

          <div class="animalCard__animalAlert">
            <label class="animalCard__switch">
              <input type="checkbox" />
              <span class="animalCard__slider round"></span>
            </label>
          </div>

          <button type="submit" class="animalCard__animalAlertDelete">X</button>
        </div>

        <!-- animal -->
        <div class="animalCard">
          <div class="animalCard__animalName">Pepette</div>

          <div class="animalCard__animalAlert">
            <label class="animalCard__switch">
              <input type="checkbox" />
              <span class="animalCard__slider round"></span>
            </label>
          </div>

          <button type="submit" class="animalCard__animalAlertDelete">X</button>
        </div>

        <!-- animal -->
        <div class="animalCard">
          <div class="animalCard__animalName">Pupuce</div>

          <div class="animalCard__animalAlert">
            <label class="animalCard__switch">
              <input type="checkbox" />
              <span class="animalCard__slider round"></span>
            </label>
          </div>

          <button type="submit" class="animalCard__animalAlertDelete">X</button>
        </div>
      </form>
    </section>
    

    <!-- options -->
    <section>
      <form method="POST" id="account">
        <RouterLink to="/animal/tous-les-animaux" rel="noopener noreferrer" class="backButtonBlue" >Voir mes animaux</RouterLink>
        <RouterLink to="/animal" rel="noopener noreferrer" class="backButtonBlue" >Ajouter un animal</RouterLink>
        <RouterLink to="/mon-compte/modification/1" rel="noopener noreferrer" class="backButtonBlue" >Modifier mon profil</RouterLink>
      </form>

      <hr />
      
      <!-- create accompte -->
      <form method="POST" id="createAccount">
        <button class="yellowButton">Supprimer mon compte</button>
      </form>
    </section>
  </div>
  
  </div>
  <!-- Fin container -->
</template>

<script>
import userService from '../services/userServices.js';

export default {
  data() {
    return {};
  },
  props: ["isUserConnected"]
  
};
</script>

<style lang="scss" scoped>

</style>