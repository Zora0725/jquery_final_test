$(document).ready(function () {
    $(".dropdown").click(function (event) {
      event.preventDefault();
      $(".dropdown").toggleClass("active");
      $(".dropopen").slideToggle();
    });

    // swiper

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        effect: "fade",
        autoplay: {
            delay: 3000
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',

        }
      });

        // lightbox
          lightbox.option({
            resizeDuration: 200,
            wrapAround: true,
            disableScrolling: true

        })

      })