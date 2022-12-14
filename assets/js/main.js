nav = document.querySelector(".navigation");
toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", function () {
  
  nav.classList.toggle("collapse-toggle");
});



$(document).ready(function () {
    $(".owl-two").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      gap: 50,
      autoplay: false,
      autoplayTimeout: 1100,
      dots: false,
      navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 4,
        },
        800: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    $(".inspration-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      gap: 50,
      autoplay: false,
      autoplayTimeout: 1100,
      dots: false,
      navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
      ],
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 2,
        },
        600: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    });

    $(".dish-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      gap: 50,
      autoplay: false,
      autoplayTimeout: 1100,
      dots: false,
      navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $(".popular-dish-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      gap: 50,
      autoplay: false,
      autoplayTimeout: 1100,
      dots: false,
      navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 3,
        },
        900:{
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    });



    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      gap: 50,
      autoplay: false,
      autoplayTimeout: 1100,
      dots: false,
      navText: [
        $(".owl-navigation .owl-nav-prev"),
        $(".owl-navigation .owl-nav-next"),
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
    
  });


  