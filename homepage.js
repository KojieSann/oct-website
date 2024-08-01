Splitting();

function navigation() {
  $("ul.main-menu li").click(function (e) {
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
    tl.reversed(!tl.reversed());
  });
}
navigation();

gsap.registerPlugin(ScrollTrigger);
gsap.to(".oct-logo", {
  scrollTrigger: {
    trigger: ".oct-logo",
    start: "top 60%",
    end: "bottom 33%",
    pin: true,

    scrub: true,
  },
  scale: 2.3,
  opacity: 0.1,
  y: 0,
  ease: "slow",
  duration: 2,
});

const gtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".title-intro",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    toggleActions: "play none none reset",
  },
});

gtl.from(".title-intro .char", {
  duration: 1,
  opacity: 0,
  yPercent: 130,
  stagger: 0.09,
  ease: "back.out",
});

gsap.from(".question-mark", {
  scrollTrigger: {
    trigger: ".introduction",
    start: "top 70%",
    end: "top top",
    scrub: true,
  },
  rotation: 180,
  x: 400,
  duration: 1,
  ease: "bounce",
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
document.querySelectorAll(".question-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    document
      .querySelectorAll(".question-wrapper.expanded")
      .forEach((openWrapper) => {
        if (openWrapper !== wrapper) {
          openWrapper.classList.remove("expanded");
        }
      });
    wrapper.classList.toggle("expanded");
  });
});

let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");
let tween = gsap
  .to(".marquee-part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
  })
  .totalProgress(0.5);
gsap.set(".marquee-inner", { xPercent: -50 });
window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });
  arrows.forEach((arrow) => {
    if (isScrollingDown) {
      arrow.classList.remove("rotate");
    } else {
      arrow.classList.add("rotate");
    }
  });
  currentScroll = this.window.pageYOffset;
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
