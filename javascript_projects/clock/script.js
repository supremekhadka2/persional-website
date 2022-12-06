//PRELOADER
const preloader = document.getElementById("preloader");

document.addEventListener("DOMContentLoaded", function () {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-100";
  preloader.style.transition = ".5s ease-out";
});
