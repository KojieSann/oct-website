$("ul.main-menu li").click(function (e) {
  e.preventDefault();
  if ($(this).siblings("li").find("ul.submenu:visible").length) {
    $("ul.submenu").slideUp("normal");
  }
  $(this).find("ul.submenu").slideToggle("normal");
});
var tl = new TimelineMax({ paused: true });
tl.to(".menu", 0.8, {
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
tl.from(".submenu", 0.8, {
  autoAlpha: 0,
});
tl.staggerFrom(
  ".media ul li",
  1,
  {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  },
  0.1,
  "-=2"
);
tl.from(".call", 1, {
  delay: -2,
  opacity: 0,
  y: 10,
  ease: Power3.easeInOut,
});
tl.from(".mail", 1, {
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
