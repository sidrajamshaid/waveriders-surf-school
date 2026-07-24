const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.add("show");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
});