let menus = document.querySelectorAll(".nav-link");
// navbar, btn scroll effect
window.addEventListener("scroll", function () {
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.remove("clicked");
  }
  let navbar = document.querySelector(".navbar");
  let upbtn = document.querySelector(".up-btn");
  if (window.pageYOffset > 0) {
    navbar.classList.add("nav-scroll");
    navbar.style.transition = "0.5s";
    upbtn.classList.add("scroll-btn");
    upbtn.style.transition = "0.5s";
  } else {
    navbar.classList.remove("nav-scroll");
    upbtn.classList.remove("scroll-btn");
  }
});

// header typing effect
const sentence = "I'm a web developer.";
const text = document.querySelector(".text");
let i = 0;
function typing() {
  if (i < sentence.length) {
    let txt = sentence.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setTimeout(() => {
  setInterval(typing, 200);
}, 2000);

// toggle button
let toggleBtn = document.querySelector(".toggle-btn");
let navMenu = document.querySelector(".navbar-nav");
toggleBtn.addEventListener("click", function () {
  navMenu.classList.toggle("toggle");
});

// h1 scroll effect
window.addEventListener("scroll", function () {
  let content = document.querySelector(".about-header");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("active-up");
    menus[0].classList.add("clicked");
  } else {
    content.classList.remove("active-up");
    menus[0].classList.remove("clicked");
  }

  if (contentPosition < -50) {
    menus[0].classList.remove("clicked");
    menus[1].classList.add("clicked");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".skill-header");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("active-up");
    menus[1].classList.add("clicked");
  } else {
    content.classList.remove("active-up");
    menus[1].classList.remove("clicked");
  }

  if (contentPosition < -50) {
    menus[1].classList.remove("clicked");
    menus[2].classList.add("clicked");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".work-header");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("active-up");
  } else {
    content.classList.remove("active-up");
    menus[2].classList.remove("clicked");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".contact-me");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("active-up");
    menus[2].classList.remove("clicked");
    menus[3].classList.add("clicked");
  } else {
    content.classList.remove("active-up");
    menus[3].classList.remove("clicked");
  }
});

// content scroll effect
window.addEventListener("scroll", function () {
  let content = document.querySelector(".about-left");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});
window.addEventListener("scroll", function () {
  let content = document.querySelector(".about-right");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.6;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".row");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".col1-left");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".col1-right");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.6;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});
window.addEventListener("scroll", function () {
  let content = document.querySelector(".col2-left");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});
window.addEventListener("scroll", function () {
  let content = document.querySelector(".col2-right");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.6;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".col3-left");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});
window.addEventListener("scroll", function () {
  let content = document.querySelector(".col3-right");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.6;
  if (contentPosition < screenPosition) {
    content.classList.add("active-right");
  } else {
    content.classList.remove("active-right");
  }
});

window.addEventListener("scroll", function () {
  let content = document.querySelector(".sns");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("active-scale");
  } else {
    content.classList.remove("active-scale");
  }
});

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function () {
    console.log(menus[i]);
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.remove("clicked");
    }

    menus[i].classList.add("clicked");
  });
}
