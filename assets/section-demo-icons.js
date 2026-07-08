window.addEventListener('DOMContentLoaded', function () {
  // 初始化 Swiper 实例
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,        // 一次显示 1 个
    spaceBetween: 24,         // slide 之间间距 0
    loop: true,
    autoplay: {
      delay: 4000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


});