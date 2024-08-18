Splitting();

const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("activeBtn", window.scrollY > 500);
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

window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("showContent");
    } else {
      reveals[i].classList.remove("showContent");
    }
  }
}

gsap.from(".title-oct h2 .char", 1.5, {
  delay: 0.8,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});
gsap.from("#toTop img", 2, {
  delay: 1.5,
  x: -200,
  ease: "power4.inOut",
});

gsap.registerPlugin(ScrollTrigger);


const navItems = document.querySelectorAll(".programs-nav > div");
const swipers = document.querySelectorAll(".programs-swiper");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((el) => el.classList.remove("activeProg"));

    this.classList.add("activeProg");

    swipers.forEach((swiper) => (swiper.style.display = "none"));

    const target = this.getAttribute("data-target");
    const targetSwiper = document.querySelector(`.${target}`);
    if (targetSwiper) {
      targetSwiper.style.display = "block";
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  fade: true,
  pagination: {
    dynamicBullets: true,
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var swiper2 = new Swiper(".commentsContainer", {
  spaceBetween: 10,
  centerSlide: true,
  fade: true,
  loop: true,
  autoplay: { delay: 3000 },
  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper3 = new Swiper(".programs-swiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 3000 },
  centerSlide: true,
  grabCursor: true,
  fade: true,
  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const closeBtn = document.getElementsByClassName("close")[0];
document.querySelectorAll(".play-btn").forEach((thumbnail) => {
  thumbnail.onclick = function () {
    const videoSrc = this.getAttribute("data-video-src");
    videoSource.src = videoSrc;
    videoPlayer.load();
    modal.style.display = "block";
    videoPlayer.play();
  };
});

closeBtn.onclick = function () {
  modal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
};

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

// let currentScroll = 0;
// let isScrollingDown = true;
// let arrows = document.querySelectorAll(".arrow");
// let tween = gsap
//   .to(".marquee-part", {
//     xPercent: -100,
//     repeat: -1,
//     duration: 5,
//     ease: "linear",
//   })
//   .totalProgress(0.5);
// gsap.set(".marquee-inner", { xPercent: -50 });
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > currentScroll) {
//     isScrollingDown = true;
//   } else {
//     isScrollingDown = false;
//   }
//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1,
//   });
//   arrows.forEach((arrow) => {
//     if (isScrollingDown) {
//       arrow.classList.remove("rotate");
//     } else {
//       arrow.classList.add("rotate");
//     }
//   });
//   currentScroll = this.window.pageYOffset;
// });

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
