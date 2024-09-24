AOS.init();

const swiper = new Swiper('.swiper-section-6', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    
  }
});