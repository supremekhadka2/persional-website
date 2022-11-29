// Parallax Effect section_one
const parallaxUp = document.getElementById("parallax_up");

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  parallaxUp.style.transform = `translateY(-${scrollY * 3.05 + "px"})`;
  parallaxUp.style.transition = "transform ease-in-out";
});

// NavLink Active on Window Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_links a");

window.onscroll = () => {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 500) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((e) => {
    e.classList.remove("active_section");
    if (e.classList.contains(current)) {
      e.classList.add("active_section");
    }
  });
};

// HEADER BACKGROUND
const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (scrollY < 50) {
    header.style.height = "0px";
    header.style.background = "rgba(0, 0, 0, 0)";
    header.style.transition = "0.2s ease-in-out";
  } else {
    header.style.height = "80px";
    header.style.background = "rgba(0, 0, 0, 0.65)";
    header.style.transition = "0.2s ease-in-out";
  }
});

// MENU FUNCTIONALITY
const menu = document.getElementById("menu");
const menuOpenBtn = document.querySelector(".menu_open_button");
const menuCloseBtn = document.querySelector(".menu_close_button");
const menuLink = document.querySelectorAll(".menu_link");

const openMenu = function () {
  menuOpenBtn.style.display = "none";
  menuCloseBtn.style.display = "block";
  menu.style.height = "100vh";
  menu.style.paddingTop = "35px";
  menu.style.transition = "0.35s ease-in-out";
  menuLink.forEach((e) => {
    e.style.display = "block";
    e.style.opacity = "1";
  });

  menuOpenBtn.style.display = "none";
  menuCloseBtn.style.display = "block";
};

const closeMenu = function () {
  menuOpenBtn.style.display = "block";
  menuCloseBtn.style.display = "none";
  menu.style.height = "0vh";
  menu.style.transition = "0.35s ease-in-out";
  menuLink.forEach((e) => {
    e.style.display = "none";
    e.style.opacity = "0";
  });
};

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);
menuLink.forEach((e) => {
  e.addEventListener("click", closeMenu);
});

//PRELOADER
const preloader = document.getElementById("preloader");

document.addEventListener("DOMContentLoaded", function () {
  preloader.style.opacity = "0";
  preloader.style.zIndex = "-100";
  preloader.style.transition = ".5s ease-out";
});
