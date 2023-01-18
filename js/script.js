"use strict";
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".menu__icon");
const body = document.body;
if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click",
      () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        body.classList.remove("lock");
      });
  });
}

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    variableWidth: false,
    
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 755,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
$(document).ready(function () {
  $(".sliсk-slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    variableWidth: false,
  });
});



  