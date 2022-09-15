"use strict";

// HEADER
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

const fadeAnim = (trigger, elem, x) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: trigger,
      toggleActions: "restart none none none",
    },
    opacity: 0,
    x: x,
    duration: 1,
    ease: "power3.out",
  });
};

fadeAnim(".main", ".main-content", -500);
fadeAnim(".section--main", ".main-img", 500);
fadeAnim("#ic1", "#intro1", -500);
fadeAnim("#ic1", "#introImg1", 500);
fadeAnim("#ic2", "#intro2", 500);
fadeAnim("#ic2", "#introImg2", -500);
fadeAnim("#ic3", "#intro3", -500);
fadeAnim("#ic3", "#introImg3", 500);
fadeAnim(".section--services", "#sIntroHeading", -500);
fadeAnim(".section--services", "#sIntroPara", 500);
fadeAnim(".section--get", ".section--get .section-intro", 500);
fadeAnim(".section--get", ".section--get figure", -500);
fadeAnim(".section--cta", ".section--cta .section-intro", -500);

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".section--services",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: -200,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});
