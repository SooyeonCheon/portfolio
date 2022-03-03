
// navbar, btn scroll effect
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("nav-scroll");
    navbar.style.transition = "0.5s";
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

// toggle button
let toggleBtn = document.querySelector(".toggle-btn");
let navMenu = document.querySelector(".navbar-nav");
toggleBtn.addEventListener("click", function () {
  navMenu.classList.toggle("toggle");
});
