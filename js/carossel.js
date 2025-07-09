function updateTitle(swiper) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  if (!activeSlide) return;

  const style = activeSlide.getAttribute("data-style");
  const titleElement = document.getElementById("art-style-title");
  if (style && titleElement) {
    titleElement.textContent = style;
  }

  // Remove classe especial de todos os slides
  swiper.slides.forEach(slide => {
    slide.classList.remove("horizontal-slide");
  });

  // Se o estilo for "Character Sheet", aplica a classe
  if (style === "Character Sheet") {
    activeSlide.classList.add("horizontal-slide");
  }
}

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      updateTitle(this);
    },
    slideChange: function () {
      updateTitle(this);
    },
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
