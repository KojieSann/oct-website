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

const reveal = gsap.utils.toArray(".course-info");
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: "revealActive",
    start: "top 90%",
    end: "top 10%",
  });
});
const images = gsap.utils.toArray(".course-img img");
images.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: "revealActiveimg",
    start: "top 90%",
    end: "top 10%",
  });
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

const moreBtns = document.querySelectorAll(".moreBtn");
const moreInfos = document.querySelectorAll(".moreInfo");
const closeInfos = document.querySelectorAll(".closeInfo");

function showMoreInfo(event) {
  const moreInfo = event.target.closest(".course-info").previousElementSibling;
  moreInfo.classList.add("show");
}

function hideMoreInfo(event) {
  event.target.closest(".moreInfo").classList.remove("show");
}
moreBtns.forEach((btn) => btn.addEventListener("click", showMoreInfo));
closeInfos.forEach((btn) => btn.addEventListener("click", hideMoreInfo));
