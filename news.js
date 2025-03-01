Splitting();

const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("activeBtn", window.scrollY > 500);
});

const maxWords = 4;
const titles = document.querySelectorAll(".desc");

titles.forEach((h3) => {
  const words = h3.innerText.split(" ");
  if (words.length > maxWords) {
    h3.innerText = words.slice(0, maxWords).join(" ") + "...";
  }
});

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

  tl.from(".call", 1, {
    delay: -2,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  });

  tl.from(".mail-nav", 1, {
    delay: -1.6,
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut,
  });

  tl.reverse();

  $(document).on("click", ".menu-btn", function () {
    tl.reversed(!tl.reversed());
    tl.timeScale(1);
  });

  $(document).on("click", ".close-menu", function () {
    tl.timeScale(4);
    tl.reversed(!tl.reversed());
  });
}
navigation();
