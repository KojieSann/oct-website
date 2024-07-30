const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};
showMenu("nav-toggle", "nav-menu");

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

const intro = document.querySelector(".introduction");
let introWidth = intro.offsetWidth;
function getScrollAmount() {
  let introWidth = intro.scrollWidth;
  return -(introWidth - window.innerWidth);
}
const tween = gsap.to(intro, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});
ScrollTrigger.create({
  trigger: ".intro-wrapper",
  start: "top 5%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  invalidateOnRefresh: true,
  scrub: 1,
});
let titleSplit = new SplitText(".split", { type: "chars" });
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".olivTxt",
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//     markers: true,
//   },
// });
// tl.to(".olivTxt", {
//   fontSize: 10,
//   duration: 3,
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
