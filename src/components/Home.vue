<template>
  <div class="container">
    <section class="title">
      <h1 class="title__page">Disparitions</h1>
    </section>
    <section class="box">
    <!-- Carousel -->
    <div class="customer-quotes__nav carousel">
      <div class="customer-quotes__item carousel__item" data-slide-number="0">
           <span class="carousel__contact-button">
          <a href="" title="Contacter le propriétaire"
            >Contacter le propriétaire</a
          >
        </span>
        <img
          class="carousel__image"
          src="https://source.unsplash.com/random/900×700/?cat"
          alt="Animal"
        />
         </div>
      <div class="customer-quotes__item carousel__item" data-slide-number="1">
        <span class="carousel__contact-button">
          <a href="" title="Contacter le propriétaire"
            >Contacter le propriétaire</a
          >
        </span>
        <img
          class="carousel__image"
          src="https://source.unsplash.com/random/900×700/?animal"
          alt="Animal"
        />
      </div>
      <div class="customer-quotes__item carousel__item" data-slide-number="2">
        <span class="carousel__contact-button">
          <a href="" title="Contacter le propriétaire"
            >Contacter le propriétaire</a
          >
        </span>
        <img
          class="carousel__image"
          src="https://source.unsplash.com/random/900×700/?dog"
          alt="Animal"
        />
      </div>
    </div>
    <div class="customer-quotes__nav carousel__nav"></div>

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
    </section>
    </section>
    <section>

      <!-- Card -->
      <div class="boxOfCards">
        <article class="card">
          <!-- card__picture -->
          <div class="cardAnimal">
            <img
              class="cardAnimal__image"
              src="https://source.unsplash.com/random/900×700/?dog"
              alt="Animal"
            />

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
            <img
              class="cardAnimal__image"
              src="https://source.unsplash.com/random/900×700/?animal"
              alt="Animal"
            />

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
            <img
              class="cardAnimal__image"
              src="https://source.unsplash.com/random/900×700/?cat"
              alt="Animal"
            />

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
          <img
            class="cardAnimal__image"
            src="https://source.unsplash.com/random/900×700/?dog"
            alt="Animal"
          />

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
  mounted() {
    // ici on va gérer nos interactions avec le carousel
    const carousel = {
      currentSlideNumber: 0,
      autoScrollDuration: 5000,
      init: function () {
        // on protège notre module : on fait en sorte de ne continuer que si on a bien un élément .carousel sur la page
        if (document.querySelector(".carousel") === null) {
          // return ne revoie rien, mais nous permet de stopper l'exécution de la fonction
          return;
        }

        // dès le chargement, on génère les boutons de navigation
        // attention, à faire AVANT d'utiliser ces boutons (par ex. pour les addEventListener en dessous)
        carousel.generateNavButtons();

        // écouter le clic sur les boutons
        const navButtonList = document.querySelectorAll(
          ".carousel__nav__button"
        );
        // on pose un écouteur pour le click sur chaque bouton
        for (const button of navButtonList) {
          button.addEventListener("click", carousel.onNavButtonClick);
        }

        // dès le chargement, on démarre l'autoscroll
        carousel.autoScroll();
      },
      generateNavButtons: function () {
        // on compte les slides
        const slideCount = document.querySelectorAll(".carousel__item").length;
        // on génère autant d'éléments .scarousel__nav__button que de slides
        for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
          // on utilise createElement pour générer un bouton (il n'est pas encore attaché au DOM)
          const newButton = document.createElement("div");
          newButton.classList.add("carousel__nav__button");
          newButton.classList.add("carousel__nav__bar");

          // si on est en train de générer le premier bouton (si slideIndex = 0), on lui donne la classe active
          if (slideIndex === 0) {
            newButton.classList.add("active");
          }

          newButton.setAttribute("data-target-slide", slideIndex);
          const navContainer = document.querySelector(".carousel__nav");
          // on rajoute l'élément créé au DOM
          navContainer.appendChild(newButton);
        }
      },
      onNavButtonClick: function (event) {
        // récupérer le bouton cliqué
        const targetButton = event.currentTarget;
        // on récupère la data "target-slide" pour savoir quelle est la slide qui correspond à ce bouton (dans le dataset, les attributs sont traduits en camelCase)
        const targetSlide = targetButton.dataset.targetSlide;
        // on déclenche le scroll vers cette slide
        carousel.scrollToSlide(targetSlide);
        // on n'oublie pas de préciser le numéro de la slide courante pour ne pas perdre l'autoscroll
        carousel.currentSlideNumber = targetSlide;
      },
      autoScroll: function () {
        // setInterval nous permet d'exécuter une fonction toutes les x millisecondes
        setInterval(function () {
          // on compte le nombre de slides
          // on fait -1 pour correspondre à la numérotation des slides qui commence à 0
          const slideCount =
            document.querySelectorAll(".carousel__item").length - 1;
          // si la slide sur laquelle on se trouve est la dernière (ou plus !)
          // alors la slide cible est la slide 0
          if (carousel.currentSlideNumber >= slideCount) {
            carousel.currentSlideNumber = 0;
          } else {
            // sinon on passe à la slide suivante
            carousel.currentSlideNumber++;
          }
          carousel.scrollToSlide(carousel.currentSlideNumber);
        }, carousel.autoScrollDuration);
      },
      scrollToSlide: function (targetSlideNumber) {
        // on récupère le container du carousel
        const carouselContainer = document.querySelector(".carousel");

        const containerWidth = carouselContainer.offsetWidth;

        // on scrolle dans le container pour atteindre la slide désirée
        // on laisse le paramètre y à 0 => on ne scrolle pas verticalement
        carouselContainer.scrollTo(containerWidth * targetSlideNumber, 0);

        // on gère l'affectation de la classe .active aux boutons de nav
        // on retire la classe .active à tous les bouton
        const navButtonList = document.querySelectorAll(
          ".carousel__nav__button"
        );
        for (const button of navButtonList) {
          button.classList.remove("active");
        }
        // on ajoute la classe .active sur ce bouton
        // le bouton à cibler est celui qui a un data-target-slide qui correspond à la slide courante (targetSlideNumber fourni en paramètre ici)
        // pour sélectionner un élément via un attribut, on utilise le sélecteur css [attribut=valeur]
        const currentSlideButton = document.querySelector(
          '.carousel__nav__button[data-target-slide="' +
            targetSlideNumber +
            '"]'
        );
        currentSlideButton.classList.add("active");
      },
    };

    document.addEventListener("DOMContentLoaded", carousel.init);
  },
};
</script>

<style lang="scss" scoped>
</style>