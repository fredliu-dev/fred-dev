window.addEventListener('DOMContentLoaded', function () {
  // 初始化 Swiper 实例
  document.querySelectorAll('.swiper-outer').forEach(function (outer) {
    var container = outer.querySelector('.swiper-container');
    var prevBtn = outer.querySelector('.swiper-button-prev');
    var nextBtn = outer.querySelector('.swiper-button-next');
    var pagination = outer.querySelector('.swiper-pagination');

    new Swiper(container, {
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      pagination: {
        el: pagination,
        clickable: true
      }
    });
  });

  // Tab 按钮点击事件（事件代理）
  var tabList = document.querySelector('.tablist');
  var tabItems = document.querySelectorAll('.tab-item');
  var tabPanels = document.querySelectorAll('.swiper-outer');

  if (tabList) {
    tabList.addEventListener('click', function (event) {
      var tab = event.target.closest('.tab-item');
      if (!tab) return;

      var targetId = tab.dataset.id;

      // 切换 Tab 按钮 active 状态
      tabItems.forEach(function (item) {
        item.classList.remove('is-active');
      });
      tab.classList.add('is-active');

      // 切换对应 Panel 显示
      tabPanels.forEach(function (panel) {
        var panelId = panel.querySelector('.swiper-container').dataset.id;
        if (panelId === targetId) {
          panel.classList.add('is-active');
          panel.hidden = false;
        } else {
          panel.classList.remove('is-active');
          panel.hidden = true;
        }
      });
    });
  }

  // Swatch 切换变体（事件代理）
  document.querySelectorAll('.product-swatches').forEach(function (swatchGroup) {
    swatchGroup.addEventListener('click', function (event) {
      var swatch = event.target.closest('.swatch');
      if (!swatch) return;

      var slide = swatch.closest('.swiper-slide');
      var targetId = swatch.dataset.id;

      // 切换 swatch active 状态
      slide.querySelectorAll('.swatch').forEach(function (item) {
        item.classList.remove('is-active');
      });
      swatch.classList.add('is-active');

      // 切换对应 swiper-body 显示
      slide.querySelectorAll('.swiper-body').forEach(function (body) {
        if (body.dataset.id === targetId) {
          body.classList.add('is-active');
          body.hidden = false;
        } else {
          body.classList.remove('is-active');
          body.hidden = true;
        }
      });
    });
  });
});
