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
  });

  $(document).on("click", ".close-menu", function () {
    tl.timeScale(4);
    tl.reversed(!tl.reversed());
  });

  $(document).on("click", ".menu-btn", function () {
    tl.timeScale(1);
  });
}

navigation();

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector("#school-motto");
const image = section.querySelector(".image");

ScrollTrigger.create({
  trigger: section,
  start: "top 25%",
  end: "bottom 70%",
  onEnter: () => image.classList.add("backToNormal"),
  onLeave: () => image.classList.remove("backToNormal"),
  onEnterBack: () => image.classList.add("backToNormal"),
  onLeaveBack: () => image.classList.remove("backToNormal"),
});

gsap.from("#toTop img", 1.5, {
  delay: 0.5,
  x: -200,
  ease: "power4.inOut",
});
gsap.from(".split span .char", 0.7, {
  delay: 0,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".philosophy .image", {
  scrollTrigger: ".philosophy .image",
  x: -500,
  start: "top 50%",
  end: "bottom bottom",
});

const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("activeBtn", window.scrollY > 500);
});

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let countItem = items.length;
let itemActive = 0;
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 7000);
function showSlider() {
  let itemActiveOld = document.querySelector(".slider .list .item.active");

  itemActiveOld.classList.remove("active");
  items[itemActive].classList.add("active");
}
