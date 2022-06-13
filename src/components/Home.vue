<template>
  <div class="container">
    <section class="title">
      <h1 class="title__page">Liste des animaux</h1>
    </section>
    <!-- Carousel -->
    <section class="showAlert">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/images/chien3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/chien2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/images/chien1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <!-- Recherche -->
    <section>
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

      <!-- Card -->
      <div class="boxOfCards">
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="dog" src="../assets/images/dog.jpg" alt="dog" />

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

        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="dog" src="../assets/images/dog.jpg" alt="dog" />

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

        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img class="dog" src="../assets/images/dog.jpg" alt="dog" />

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
      </div>

      <article class="card">
        <!-- card__picture -->
        <div class="cardAnimal">
          <img class="dog" src="../assets/images/dog.jpg" alt="dog" />

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