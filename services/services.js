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
    tl.timeScale(1);
  });

  $(document).on("click", ".close-menu", function () {
    tl.timeScale(4);
    tl.reversed(!tl.reversed());
  });
}
navigation();

function validateEmail(formType) {
  const emailInput = document.getElementById(`email-field-${formType}`);
  const emailError = document.getElementById(
    `emailError${formType.charAt(0).toUpperCase() + formType.slice(1)}`
  );
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

function validateMessage(formType) {
  const messageField = document.getElementById(
    `messageField${formType.charAt(0).toUpperCase() + formType.slice(1)}`
  );
  const messageError = document.getElementById(
    `messageError${formType.charAt(0).toUpperCase() + formType.slice(1)}`
  );

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

function handleSubmit(formType) {
  const isEmailValid = validateEmail(formType);
  const isMessageValid = validateMessage(formType);

  if (isEmailValid && isMessageValid) {
    document
      .getElementById(
        `contactForm${formType.charAt(0).toUpperCase() + formType.slice(1)}`
      )
      .submit();
  }
}

const collegeContact = document.querySelector(".modalBG-College");
const collegeBtn = document.querySelector(".collegeBtn");
const collegeClose = document.querySelector(".closeCollege");

collegeBtn.addEventListener("click", () => {
  collegeContact.classList.add("showContact");
});
collegeClose.addEventListener("click", () => {
  collegeContact.classList.remove("showContact");
});

const shsContact = document.querySelector(".modalBG-shs");
const shsBtn = document.querySelector(".shsBtn");
const shsClose = document.querySelector(".closeShs");

shsBtn.addEventListener("click", () => {
  shsContact.classList.add("showContactSHS");
});
shsClose.addEventListener("click", () => {
  shsContact.classList.remove("showContactSHS");
});

const openNav = document.querySelector(".toggle .icon");
openNav.addEventListener("click", () => {
  const container = document.querySelector(".navigation-container");
  container.classList.toggle("openNavigation");
});
