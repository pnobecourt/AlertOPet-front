<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">Déclencher une alerte pour un animal</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->

      <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?dog" alt="Animal" />
      <form method="POST" id="pictureAnimal">
        <div class="choiceLost">
          <div class="choiceLost__box">
            <input
              type="checkbox"
              id="choiceLost__lost"
              name="vehicle2"
              value="Car"
            />
            <label for="choiceLost__lost" class="choiceLost__lost"> Perdu</label
            ><br />
          </div>

          <div class="choiceLost__box">
            <input
              type="checkbox"
              id="choiceLost__found"
              name="vehicle3"
              value="Boat"
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
        <input id="name" name="name" placeholder="Nom de l'animal" />

        <label for="race">Race de l'animal</label>
        <input id="race" name="race" placeholder="Race de l'animal" />

        <label for="height">Taille de l'animal</label>
        <input id="height" name="height" placeholder="Taille de l'animal" />

        <label for="weight">Poids de l'animal</label>
        <input id="weight" name="weight" placeholder="Poids de l'animal" />

        <label for="color">Couleur de l'animal</label>
        <input id="color" name="color" placeholder="Couleur de l'animal" />

        <label for="birthday">Âge aproximatif</label>
        <input id="birthday" name="birthday" placeholder="Âge aproximatif" />

        <label for="info">Votre message / Description</label>
        <textarea id="info" name="info" rows="5" cols="33"> </textarea>
<div class="box">
        <button class="blueButton bottom">Enregistrer</button>
        </div>
      </form>
    <br />
  </div>
  <!-- Fin container -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>