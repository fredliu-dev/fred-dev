window.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.video-list-section');
  if (!section) return;

  var swiperEl = section.querySelector('.video-list-swiper');
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    freeMode: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    speed: 600,
    breakpoints: {
      320: {
        spaceBetween: 16
      },
      750: {
        spaceBetween: 24
      }
    }
  });
});
