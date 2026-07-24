const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileContactButton = document.getElementById("mobile-contact-button");
const mobileAboutButton= document.getElementById("mobile-about-button");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.add("show");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
});

mobileContactButton.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

mobileAboutButton.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
  document.getElementById("mobile-about-button").scrollIntoView({ behavior: "smooth" });
});
