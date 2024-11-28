Splitting();

const hiddenHeader = document.getElementById("hiddenHeader");
window.addEventListener("scroll", () => {
  hiddenHeader.classList.toggle("showHeader", window.scrollY > 500);
});

const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("activeBtn", window.scrollY > 500);
});

const infoblaze = document.querySelector(".modalBG-infoblaze");
const infoblazeBtn = document.querySelector(".infoblazeBtn");
const infoblazeClose = document.querySelector(".closeInfoblaze");
infoblazeBtn.addEventListener("click", () => {
  infoblaze.classList.add("showModal");
});
infoblazeClose.addEventListener("click", () => {
  infoblaze.classList.remove("showModal");
});

const forum = document.querySelector(".modalBG-forum");
const forumBtn = document.querySelector(".forumBtn");
const forumClose = document.querySelector(".closeForum");
forumBtn.addEventListener("click", () => {
  forum.classList.add("showModal");
});
forumClose.addEventListener("click", () => {
  forum.classList.remove("showModal");
});

const business = document.querySelector(".modalBG-business");
const businessBtn = document.querySelector(".businessBtn");
const businessClose = document.querySelector(".closeBusiness");
businessBtn.addEventListener("click", () => {
  business.classList.add("showModal");
});
businessClose.addEventListener("click", () => {
  business.classList.remove("showModal");
});

const gateway = document.querySelector(".modalBG-gateway");
const gatewayBtn = document.querySelector(".gatewayBtn");
const gatewayClose = document.querySelector(".closeGateway");
gatewayBtn.addEventListener("click", () => {
  gateway.classList.add("showModal");
});
gatewayClose.addEventListener("click", () => {
  gateway.classList.remove("showModal");
});

const educare = document.querySelector(".modalBG-educare");
const educareBtn = document.querySelector(".educareBtn");
const educareClose = document.querySelector(".closeEducare");
educareBtn.addEventListener("click", () => {
  educare.classList.add("showModal");
});
educareClose.addEventListener("click", () => {
  educare.classList.remove("showModal");
});

const spectrum = document.querySelector(".modalBG-spectrum");
const spectrumBtn = document.querySelector(".spectrumBtn");
const spectrumClose = document.querySelector(".closeSpectrum");
spectrumBtn.addEventListener("click", () => {
  spectrum.classList.add("showModal");
});
spectrumClose.addEventListener("click", () => {
  spectrum.classList.remove("showModal");
});

const infotech = document.querySelector(".modalBG-infotech");
const infotechBtn = document.querySelector(".infotechBtn");
const infotechClose = document.querySelector(".closeInfotech");
infotechBtn.addEventListener("click", () => {
  infotech.classList.add("showModal");
});
infotechClose.addEventListener("click", () => {
  infotech.classList.remove("showModal");
});

const accounthink = document.querySelector(".modalBG-accounthink");
const accounthinkBtn = document.querySelector(".accounthinkBtn");
const accounthinkClose = document.querySelector(".closeAccounthink");
accounthinkBtn.addEventListener("click", () => {
  accounthink.classList.add("showModal");
});
accounthinkClose.addEventListener("click", () => {
  accounthink.classList.remove("showModal");
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
    tl.timeScale(1);
  });

  $(document).on("click", ".close-menu", function () {
    tl.timeScale(4);
    tl.reversed(!tl.reversed());
  });
}
navigation();

gsap.from("#toTop img", 1.5, {
  delay: 0.5,
  x: -200,
  ease: "power4.inOut",
});
gsap.from(".split span .char", 0.7, {
  delay: 0.2,
  y: 700,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

function handleClick(event, url, title) {
  event.preventDefault();
  show(title, event.currentTarget.closest(".dropdown"));
  const newTab = window.open(url, "_blank");
  newTab.focus();
}

function show(title, dropdown) {
  const textbox = dropdown.querySelector(".textbox");
  textbox.value = title;
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.onclick = function () {
    dropdown.classList.toggle("activeShow");
  };
});

document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    const textbox = dropdown.querySelector(".textbox");
    if (!dropdown.contains(e.target) && e.target !== textbox) {
      dropdown.classList.remove("activeShow");
    }
  });
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

const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("activeTab");
    });
    tab.classList.add("activeTab");
    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";
    allContent.forEach((content) => {
      content.classList.remove("activeTab");
    });
    allContent[index].classList.add("activeTab");
  });
});
