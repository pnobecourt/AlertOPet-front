const carousel = {
  currentSlideNumber: 0,
  autoScrollDuration: 5000,
  init: function () {
    if (document.querySelector(".carousel") === null) {
      return;
    }

    carousel.generateNavButtons();

    const navButtonList = document.querySelectorAll(".carousel__nav__button");

    for (const button of navButtonList) {
      button.addEventListener("click", carousel.onNavButtonClick);
    }
    carousel.autoScroll();
  },

  generateNavButtons: function () {
    for (let slideIndex = 0; slideIndex < 3; slideIndex++) {
      const newButton = document.createElement("div");
      newButton.classList.add("carousel__nav__button");
      newButton.classList.add("carousel__nav__bar");

      if (slideIndex === 0) {
        newButton.classList.add("active");
      }

      newButton.setAttribute("data-target-slide", slideIndex);
      const navContainer = document.querySelector(".carousel__nav");

      navContainer.appendChild(newButton);
    }
  },
  onNavButtonClick: function (event) {
    const targetButton = event.currentTarget;
    const targetSlide = targetButton.dataset.targetSlide;
    carousel.scrollToSlide(targetSlide);
    carousel.currentSlideNumber = targetSlide;
  },
  autoScroll: function () {
    setInterval(function () {
      const slideCount = document.querySelectorAll(".carousel__item").length - 1;

      if (carousel.currentSlideNumber >= slideCount) {
        carousel.currentSlideNumber = 0;
      } else {
        carousel.currentSlideNumber++;
      }

      carousel.scrollToSlide(carousel.currentSlideNumber);
    }, carousel.autoScrollDuration);
  },
  scrollToSlide: function (targetSlideNumber) {
    const carouselContainer = document.querySelector(".carousel");
    const containerWidth = carouselContainer.offsetWidth;
    carouselContainer.scrollTo(containerWidth * targetSlideNumber, 0);
    const navButtonList = document.querySelectorAll(".carousel__nav__button");
    for (const button of navButtonList) {
      button.classList.remove("active");
    }
    const currentSlideButton = document.querySelector('.carousel__nav__button[data-target-slide="' + targetSlideNumber + '"]');
    currentSlideButton.classList.add("active");
  },
};
document.addEventListener("DOMContentLoaded", carousel.init);
