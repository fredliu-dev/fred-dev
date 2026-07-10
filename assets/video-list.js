window.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.video-list-section');
  if (!section) return;

  var swiperEl = section.querySelector('.video-list-swiper');
  if (swiperEl) {
    new Swiper(swiperEl, {
      observer: true,
      observeParents: true,
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
  }

  var modal = section.querySelector('.video-list-modal');
  var player = section.querySelector('#VideoListPlayer');
  var modalClose = section.querySelector('.video-list-modal-close');

  if (!modal || !player) return;

  section.querySelectorAll('.video-list-thumbnail').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      var videoSrc = thumb.dataset.videosrc;
      var posterSrc = thumb.dataset.posterSrc;
      console.log(videoSrc);
      if (videoSrc) {
        player.setAttribute('src', videoSrc);
      }
      if (posterSrc) {
        player.setAttribute('poster', posterSrc);
      }

      modal.classList.add('is-open');

      player.play().catch(() => {
        var canPlayHandler = function () {
          player.play().catch(() => { });
          player.removeEventListener('can-play', canPlayHandler);
        };
        player.addEventListener('can-play', canPlayHandler);
      });
    });
  });

  function closeModal() {
    modal.classList.remove('is-open');
    player.pause();
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
