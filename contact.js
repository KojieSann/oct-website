function validateFirstName() {
  const firstNameInput = document.getElementById("firstNameInput");
  const firstNameError = document.getElementById("firstNameError");
  const namePattern = /^[A-Za-z\s]+$/;

  if (!firstNameInput.value) {
    firstNameError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> First name cannot be empty";
    firstNameInput.style.borderBottomColor = "red";
    return false;
  }

  if (!namePattern.test(firstNameInput.value)) {
    firstNameError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> First name can only contain letters and spaces";
    firstNameInput.style.borderBottomColor = "red";
    return false;
  }

  firstNameError.innerHTML = "";
  firstNameInput.style.borderBottomColor = "green";
  return true;
}

function validateLastName() {
  const lastNameInput = document.getElementById("lastNameInput");
  const lastNameError = document.getElementById("lastNameError");
  const namePattern = /^[A-Za-z\s]+$/;

  if (!lastNameInput.value) {
    lastNameError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> Last name cannot be empty";
    lastNameInput.style.borderBottomColor = "red";
    return false;
  }

  if (!namePattern.test(lastNameInput.value)) {
    lastNameError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> Last name can only contain letters and spaces";
    lastNameInput.style.borderBottomColor = "red";
    return false;
  }

  lastNameError.innerHTML = "";
  lastNameInput.style.borderBottomColor = "green";
  return true;
}

function validateEmail() {
  const emailInput = document.getElementById("email-field");
  const emailError = document.getElementById("emailError");
  const emailPattern =
    /^[A-Za-z._\-0-9]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;

  if (!emailInput.value) {
    emailError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> Email field cannot be empty";
    emailInput.style.borderBottomColor = "red";
    return false;
  }

  if (!emailPattern.test(emailInput.value)) {
    emailError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> Please enter a valid email address";
    emailInput.style.borderBottomColor = "red";
    return false;
  }

  emailError.innerHTML = "";
  emailInput.style.borderBottomColor = "green";
  return true;
}

function validateMessage() {
  const messageField = document.getElementById("messageField");
  const messageError = document.getElementById("messageError");

  if (!messageField.value) {
    messageError.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> Message cannot be empty";
    messageField.style.borderBottomColor = "red";
    return false;
  }

  messageError.innerHTML = "";
  messageField.style.borderBottomColor = "green";
  return true;
}

function handleSubmit() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
  } else {
    alert("Please correct the errors and try again.");
  }
}

document.querySelector(".send").addEventListener(
  "click",
  function clickHandler(e) {
    this.removeEventListener("click", clickHandler, false);

    e.preventDefault();
    var self = this;
    setTimeout(function () {
      self.className = "loading";
    }, 125);

    setTimeout(function () {
      self.className = "ready";
    }, 4300);
  },
  false
);

document.querySelector("iframe").addEventListener("mouseenter", function () {
  document.querySelector("header img").classList.add("hidden");
});

document.querySelector("iframe").addEventListener("mouseleave", function () {
  document.querySelector("header img").classList.remove("hidden");
});

document.getElementById("toggleSwitch").addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("toggled");
});

Splitting();
gsap.to(".preloaderImg", 0.7, {
  y: -50,
  delay: 0.3,
  opacity: 0,
});
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
