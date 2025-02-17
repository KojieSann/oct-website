Splitting();

const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("activeBtn", window.scrollY > 500);
});

const hiddenHeader = document.getElementById("hiddenHeader");
window.addEventListener("scroll", () => {
  hiddenHeader.classList.toggle("showHeader", window.scrollY > 500);
});

function navigation() {
  $("ul.main-menu li").click(function (e) {
    if ($(this).find("ul.submenu").length) {
      if ($(this).find("ul.submenu").is(":visible")) {
        $(this).find("ul.submenu").slideUp("normal");
        $(".media-nav, .contact-nav").stop().animate(
          {
            marginTop: "0px",
            opacity: 1,
          },
          300
        );
      } else {
        if ($(this).siblings("li").find("ul.submenu:visible").length) {
          $("ul.submenu").slideUp("normal");
        }

        $(this).find("ul.submenu").slideToggle("normal");
        $(".media-nav, .contact-nav").stop().animate(
          {
            marginTop: "300px",
            opacity: 0,
          },
          300
        );
      }
    }
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

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;
  function updateCounter() {
    if (currentValue === 100) {
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }
    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}
startLoader();
gsap.to(".counter", 0.25, {
  delay: 3.6,
  opacity: 0,
});
gsap.to(".bar", 1.5, {
  delay: 3.6,
  opacity: 0,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});
gsap.from(".title-oct h2 .char", 1.5, {
  delay: 3.8,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});
gsap.from("#toTop img", 2, {
  delay: 4.1,
  x: -200,
  ease: "power4.inOut",
});
gsap.to(".preloaderImg", 2, {
  delay: 3.6,
  y: -300,
  opacity: 0,
  ease: "power4.inOut",
});
gsap.to(".admissionAds", 1, {
  delay: 5.4,
  opacity: 1,
  display: "flex",
  ease: "power4.out",
});
document
  .querySelector(".closeAdmissionAds")
  .addEventListener("click", function () {
    gsap.to(".admissionAds", 0.2, {
      opacity: 0,
      display: "none",
      ease: "power4.inOut",
    });
  });

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
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper2 = new Swiper(".commentsContainer", {
  spaceBetween: 10,
  centerSlide: true,
  fade: true,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper3 = new Swiper(".programs-swiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 2000 },
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
    modal.style.display = "flex";
    videoPlayer.play();
  };
});

closeBtn.onclick = function () {
  closeModal();
};

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

function closeModal() {
  modal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

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

document.querySelector(".iconDeveloper").addEventListener("click", () => {
  document.querySelector(".hiddenSection").classList.toggle("showDeveloper");
});

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function createCircles(numCircles) {
  const circlesContainer = document.querySelector("footer .circles");

  for (let i = 0; i < numCircles; i++) {
    const li = document.createElement("li");

    const leftPosition = getRandomNumber(0, 100);
    li.style.left = `${leftPosition}%`;

    const animationDelay = getRandomNumber(0, 20);
    const animationDuration = getRandomNumber(15, 50);
    li.style.animationDelay = `${animationDelay}s`;
    li.style.animationDuration = `${animationDuration}s`;
    const size = getRandomNumber(1, 4);
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;

    circlesContainer.appendChild(li);
  }
}
createCircles(150);

const maxLength = 100;
const titles = document.querySelectorAll(".news-title");

titles.forEach((h3) => {
  if (h3.innerText.length > maxLength) {
    h3.innerText = h3.innerText.slice(0, maxLength) + "...";
  }
});

// const maxWords = 15;
// const titles = document.querySelectorAll('.news-title');

// titles.forEach(h3 => {
//     const words = h3.innerText.split(" ");
//     if (words.length > maxWords) {
//         h3.innerText = words.slice(0, maxWords).join(" ") + "...";
//     }
// });

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
