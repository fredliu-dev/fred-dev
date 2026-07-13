window.addEventListener('load', function () {
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
  var videoEl = section.querySelector('#VideoListPlayer');
  var modalClose = section.querySelector('.video-list-modal-close');

  if (!modal || !videoEl) return;

  var player = new Plyr(videoEl, {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
  });

  function getYouTubeId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  section.querySelectorAll('.video-list-thumbnail').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      var videoSrc = thumb.dataset.videosrc;
      var posterSrc = thumb.dataset.posterSrc;
      if (videoSrc) {
        var videoId = getYouTubeId(videoSrc);
        if (videoId) {
          player.source = {
            type: 'video',
            sources: [
              {
                src: videoId,
                provider: 'youtube'
              }
            ],
            poster: posterSrc || ''
          };
        } else {
          player.source = {
            type: 'video',
            sources: [
              {
                src: videoSrc,
                type: 'video/mp4'
              }
            ],
            poster: posterSrc || ''
          };
        }
      }
      modal.classList.add('is-open');
      player.play().catch(() => { });
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
