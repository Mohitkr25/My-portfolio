$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");
  let rmnav1 = document.querySelector(".remnav1");
  let rmnav2 = document.querySelector(".remnav2");
  let rmnav3 = document.querySelector(".remnav3");
  let rmnav4 = document.querySelector(".remnav4");
  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
  });
  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });

  rmnav1.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
  rmnav2.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
  rmnav3.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
  rmnav4.addEventListener("click", function () {
    mobileNav.classList.remove("open");
  });
});
