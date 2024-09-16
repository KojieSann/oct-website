Splitting();
function navigation() {
  $("ul.main-menu li").click(function (e) {
    if ($(this).siblings("li").find("ul.submenu:visible").length) {
      $("ul.submenu").slideUp("normal");
    }
    $(this).find("ul.submenu").slideToggle("normal");
  });
  var tl = new TimelineMax({ paused: true });
  tl.to(".menu", 0.3, {
    autoAlpha: 1,
  });
  tl.staggerFrom(
    ".main-menu li a:not(.submenu li a)",
    1,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1
  );
  tl.from(".submenu", 0.3, {
    autoAlpha: 0,
  });
  tl.staggerFrom(
    ".media-nav ul li",
    1,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1,
    "-=2"
  );
  tl.from(".call", 0.5, {
    delay: -2,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  });
  tl.from(".mail-nav", 0.5, {
    delay: -1.6,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  });
  tl.reverse();
  $(document).on("click", ".menu-btn", function () {
    tl.reversed(!tl.reversed());
  });
  $(document).on("click", ".close-menu", function () {
    tl.reversed(!tl.reversed());
  });
}
navigation();

gsap.from(".services .right .card", 1.5, {
  x: 2000,
  stagger: {
    amount: 1.7,
  },
  ease: "power4.inOut",
});
gsap.from(".services .left .card", 1.5, {
  x: -2000,
  stagger: {
    amount: 1.7,
  },
  ease: "power4.inOut",
});
gsap.from("#toTop img", 2, {
  delay: 2,
  x: -200,
  ease: "power4.inOut",
});
