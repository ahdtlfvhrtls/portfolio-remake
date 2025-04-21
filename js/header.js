const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");

const isMobile = () => window.innerWidth <= 768;

let hideTimeout;

const showMenu = () => {
  if (isMobile()) {
    clearTimeout(hideTimeout);
    navbarMenu.classList.add("open");
  }
};

const hideMenu = () => {
  if (isMobile()) {
    hideTimeout = setTimeout(() => {
      if (!navbarMenu.matches(":hover") && !navbarToggle.matches(":hover")) {
        navbarMenu.classList.remove("open");
      }
    }, 200);
  }
};

navbarToggle.addEventListener("mouseenter", showMenu);
navbarToggle.addEventListener("mouseleave", hideMenu);
navbarMenu.addEventListener("mouseenter", showMenu);
navbarMenu.addEventListener("mouseleave", hideMenu);
