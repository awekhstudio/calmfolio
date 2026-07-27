document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".primary-navigation");
const navigationLinks = navigation?.querySelectorAll("a");

if (navToggle && navigation) {
  const closeNavigation = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
      closeNavigation();
      navToggle.focus();
    }
  });

  const desktopNavigation = window.matchMedia("(min-width: 43.75rem)");

  desktopNavigation.addEventListener("change", (event) => {
    if (event.matches) {
      closeNavigation();
    }
  });
}
