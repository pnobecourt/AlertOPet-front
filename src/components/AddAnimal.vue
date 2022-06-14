<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">Ajouter un animal</h1>
    </section>

    <section class="box">
      <!-- picture of animal -->
      <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?cat" alt="Animal" />
      <form method="POST" id="pictureAnimal">
        <button class="blueButton">Ajouter une photo</button>
        <button class="yellowButton">Déclencher une alerte</button>
      </form>
    </section>
    <section>

      <!-- create animal -->
      <form method="POST" id="animal">
        <label for="idChip">Identifiant de la puce</label>
        <input id="idChip" name="idChip" placeholder="Identifiant de la puce" />

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

        <label for="birthday">Date de naissance</label>
        <input id="birthday" name="birthday" placeholder="Date de naissance" />

        <label for="info">Informations complémentaires</label>
        <textarea id="info" name="info" rows="5" cols="33"> </textarea>

        <button class="blueButton bottom">Enregistrer</button>

      </form>
    </section>
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