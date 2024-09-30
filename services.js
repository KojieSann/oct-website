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

function toggleInfo(card) {
  let targetSection;
  if (card.classList.contains("communityExtensionCard")) {
    targetSection = document.querySelector(".communityExtension");
  } else if (card.classList.contains("learningCard")) {
    targetSection = document.querySelector(".learningInfo");
  } else if (card.classList.contains("registrarCard")) {
    targetSection = document.querySelector(".registrarInfo");
  } else if (card.classList.contains("marketingCard")) {
    targetSection = document.querySelector(".marketingInfo");
  } else if (card.classList.contains("clinicCard")) {
    targetSection = document.querySelector(".clinicInfo");
  } else if (card.classList.contains("osaCard")) {
    targetSection = document.querySelector(".osaInfo");
  } else if (card.classList.contains("tesdaCard")) {
    targetSection = document.querySelector(".tesdaInfo");
  } else if (card.classList.contains("researchCard")) {
    targetSection = document.querySelector(".researchInfo");
  } else if (card.classList.contains("guidanceCard")) {
    targetSection = document.querySelector(".guidanceInfo");
  } else if (card.classList.contains("other")) {
    targetSection = document.querySelector(".otherInfo");
  }

  const leftInfo = targetSection.querySelector(".left-info");
  const rightInfo = targetSection.querySelector(".right-info");
  const servicesLeft = document.querySelector(".services .left");
  const servicesRight = document.querySelector(".services .right");

  card.classList.toggle("openInfo");

  if (card.classList.contains("openInfo")) {
    leftInfo.style.transform = "translateX(0)";
    rightInfo.style.transform = "translateX(0)";
    targetSection.style.zIndex = "1000"; // Set z-index when open

    const translateLeft = window.innerWidth <= 768 ? "-100vw" : "-50vw";
    const translateRight = window.innerWidth <= 768 ? "100vw" : "50vw";

    servicesLeft.style.transform = `translateX(${translateLeft})`;
    servicesRight.style.transform = `translateX(${translateRight})`;
  } else {
    setTimeout(() => {
      leftInfo.style.transform = "translateX(-30vw)";
      rightInfo.style.transform = "translateX(70vw)";
      targetSection.style.zIndex = ""; // Reset z-index when closed
    }, 300);
    servicesLeft.style.transform = "translateX(0)";
    servicesRight.style.transform = "translateX(0)";
  }
}

function handleNavigation(navItem) {
  let targetSection;

  if (navItem.classList.contains("registrarNav")) {
    targetSection = document.querySelector(".registrarInfo");
  } else if (navItem.classList.contains("communityExtensionNav")) {
    targetSection = document.querySelector(".communityExtension");
  } else if (navItem.classList.contains("marketingNav")) {
    targetSection = document.querySelector(".marketingInfo");
  } else if (navItem.classList.contains("learningNav")) {
    targetSection = document.querySelector(".learningInfo");
  } else if (navItem.classList.contains("clinicNav")) {
    targetSection = document.querySelector(".clinicInfo");
  } else if (navItem.classList.contains("osaNav")) {
    targetSection = document.querySelector(".osaInfo");
  } else if (navItem.classList.contains("tesdaNav")) {
    targetSection = document.querySelector(".tesdaInfo");
  } else if (navItem.classList.contains("researchNav")) {
    targetSection = document.querySelector(".researchInfo");
  } else if (navItem.classList.contains("guidanceNav")) {
    targetSection = document.querySelector(".guidanceInfo");
  } else if (navItem.classList.contains("otherNav")) {
    targetSection = document.querySelector(".otherInfo");
  }

  const openCard = document.querySelector(".card.openInfo");
  const openSection = document.querySelector(".card-info.openInfo");

  if (openCard && openSection) {
    openCard.classList.remove("openInfo");

    const leftInfo = openSection.querySelector(".left-info");
    const rightInfo = openSection.querySelector(".right-info");

    leftInfo.style.transform = "translateX(-50vw)";
    rightInfo.style.transform = "translateX(70vw)";
    openSection.style.zIndex = ""; // Reset z-index of previous section
  }

  if (targetSection) {
    const leftInfo = targetSection.querySelector(".left-info");
    const rightInfo = targetSection.querySelector(".right-info");
    const servicesLeft = document.querySelector(".services .left");
    const servicesRight = document.querySelector(".services .right");

    leftInfo.style.transform = "translateX(0)";
    rightInfo.style.transform = "translateX(0)";
    targetSection.style.zIndex = "1000"; // Set z-index of newly opened section

    const translateLeft = window.innerWidth <= 768 ? "-100vw" : "-50vw";
    const translateRight = window.innerWidth <= 768 ? "100vw" : "50vw";
    servicesLeft.style.transform = `translateX(${translateLeft})`;
    servicesRight.style.transform = `translateX(${translateRight})`;

    targetSection.classList.add("openInfo");
  }
}

document.querySelectorAll(".navigation .nav").forEach((navItem) => {
  navItem.addEventListener("click", function () {
    handleNavigation(navItem);
  });
});
