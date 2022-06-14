<template>
  <!-- container -->
  <div class="container">
    <section class="title">
      <h1 class="title__page">Liste des animaux</h1>
    </section>

    <section class="center">
      <div class="choiceAnimal">
        <select name="type" id="type" class="choiceAnimal__select">
          <option value="">Sélectionnez un type d'animal</option>
          <option value="0">Chien</option>
          <option value="1">Chat</option>
          <option value="2">Poule</option>
          <option value="3">Canard</option>
        </select>

        <select name="type" id="selectCountry" class="choiceAnimal__select">
          <option value="">Sélectionnez un lieu</option>
          <option value="0">Lille</option>
          <option value="1">Roubaix</option>
          <option value="2">Tourcoing</option>
          <option value="3">Paris</option>
        </select>

        <button class="blueButton">Rechercher</button>
      </div>

      <div class="boxOfCards">
    
        <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?cat" alt="Animal" />

            <!-- card__lost -->
            <div class="cardAnimal__lost">
              <div class="cardAnimal__lost__status">
                <p>
                  <span class="cardAnimal__lost__lostAnimalStatusPink"
                    >Perdu</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"
                    >Trouvé</span
                  >
                </p>
              </div>

              <div class="cardAnimal__lost__share">
                <p class="cardAnimal__lost__share__lostAnimalShare">Partage</p>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>

            <div class="cardAnimal__describe">
              <p>Type :</p>
              <p>Lieu :</p>
              <p>Nom :</p>
              <p>Race :</p>
              <p>Taille :</p>
              <p>Poids :</p>
              <p>Couleur :</p>
              <p>Âge :</p>
            </div>

            <div class="cardAnimal__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non ea
              sequi dolorem iure dolor modi quidem minima eaque officiis laborum
              repellat quia similique, atque, quis voluptates, asperiores saepe
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at
              laudantium beatae accusantium, repellendus perferendis minus
              cupiditate voluptates, officiis tempore odio aperiam error nostrum
              consequuntur. Rerum modi aut voluptatem odit!
            </div>

            <!-- Contacter le propriétaire -->
            <button class="blueButton">Contacter le propriétaire</button>
          </div>
        </article>
                <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?dog" alt="Animal" />

            <!-- card__lost -->
            <div class="cardAnimal__lost">
              <div class="cardAnimal__lost__status">
                <p>
                  <span class="cardAnimal__lost__lostAnimalStatusPink"
                    >Perdu</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"
                    >Trouvé</span
                  >
                </p>
              </div>

              <div class="cardAnimal__lost__share">
                <p class="cardAnimal__lost__share__lostAnimalShare">Partage</p>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>

            <div class="cardAnimal__describe">
              <p>Type :</p>
              <p>Lieu :</p>
              <p>Nom :</p>
              <p>Race :</p>
              <p>Taille :</p>
              <p>Poids :</p>
              <p>Couleur :</p>
              <p>Âge :</p>
            </div>

            <div class="cardAnimal__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non ea
              sequi dolorem iure dolor modi quidem minima eaque officiis laborum
              repellat quia similique, atque, quis voluptates, asperiores saepe
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at
              laudantium beatae accusantium, repellendus perferendis minus
              cupiditate voluptates, officiis tempore odio aperiam error nostrum
              consequuntur. Rerum modi aut voluptatem odit!
            </div>

            <!-- Contacter le propriétaire -->
            <button class="blueButton">Contacter le propriétaire</button>
          </div>
        </article>
                <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?animal" alt="animal" />

            <!-- card__lost -->
            <div class="cardAnimal__lost">
              <div class="cardAnimal__lost__status">
                <p>
                  <span class="cardAnimal__lost__lostAnimalStatusPink"
                    >Perdu</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"
                    >Trouvé</span
                  >
                </p>
              </div>

              <div class="cardAnimal__lost__share">
                <p class="cardAnimal__lost__share__lostAnimalShare">Partage</p>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>

            <div class="cardAnimal__describe">
              <p>Type :</p>
              <p>Lieu :</p>
              <p>Nom :</p>
              <p>Race :</p>
              <p>Taille :</p>
              <p>Poids :</p>
              <p>Couleur :</p>
              <p>Âge :</p>
            </div>

            <div class="cardAnimal__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non ea
              sequi dolorem iure dolor modi quidem minima eaque officiis laborum
              repellat quia similique, atque, quis voluptates, asperiores saepe
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at
              laudantium beatae accusantium, repellendus perferendis minus
              cupiditate voluptates, officiis tempore odio aperiam error nostrum
              consequuntur. Rerum modi aut voluptatem odit!
            </div>

            <!-- Contacter le propriétaire -->
            <button class="blueButton">Contacter le propriétaire</button>
          </div>
        </article>
      
      </div><!-- end boxOfcards -->
<div class="boxOfCards">
                  <!-- Card -->
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="cardAnimal__image" src="https://source.unsplash.com/random/900×700/?dog" alt="Animal" />

            <!-- card__lost -->
            <div class="cardAnimal__lost">
              <div class="cardAnimal__lost__status">
                <p>
                  <span class="cardAnimal__lost__lostAnimalStatusPink"
                    >Perdu</span
                  >
                  <span class="cardAnimal__lost__lostAnimalStatusBlue"
                    >Trouvé</span
                  >
                </p>
              </div>

              <div class="cardAnimal__lost__share">
                <p class="cardAnimal__lost__share__lostAnimalShare">Partage</p>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>

            <div class="cardAnimal__describe">
              <p>Type :</p>
              <p>Lieu :</p>
              <p>Nom :</p>
              <p>Race :</p>
              <p>Taille :</p>
              <p>Poids :</p>
              <p>Couleur :</p>
              <p>Âge :</p>
            </div>

            <div class="cardAnimal__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non ea
              sequi dolorem iure dolor modi quidem minima eaque officiis laborum
              repellat quia similique, atque, quis voluptates, asperiores saepe
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at
              laudantium beatae accusantium, repellendus perferendis minus
              cupiditate voluptates, officiis tempore odio aperiam error nostrum
              consequuntur. Rerum modi aut voluptatem odit!
            </div>

            <!-- Contacter le propriétaire -->
            <button class="blueButton">Contacter le propriétaire</button>
          </div>
        </article>
  </div><!-- end boxOfcards -->
      
    </section>
    <div class="top"></div>
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