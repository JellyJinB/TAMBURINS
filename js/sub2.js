$(document).ready(function () {

        // nav
        $(".icon").click(function () {
            $("nav").toggleClass("open");
        });
        // nav
        // slide
        var swiper = new Swiper(".mySwiper", {
            cssMode: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
            loop:true,
          });
        // slide

        let observer = new IntersectionObserver((e) => {
          e.forEach((box) => {
              if (box.isIntersecting) {
                  box.target.style.opacity = 1;
              } else {
                  box.target.style.opacity = 0;
              }
          })
  
      })
  
      let top_bg = document.querySelectorAll(".foot_bg")
      observer.observe(top_bg[0])
        
      //   $(window).scroll(function () {
      //     if ($(this).scrollTop() > 5600) {
      //         $('.foot_bg').fadeIn();
      //     } else {
      //         $('.foot_bg').fadeOut();
      //     }
      // });










});