/**
 * Open Mobile Nav
 */
const openMobileNavButton = document.getElementById("open-mobile-nav");
const closeMobileNavButton = document.getElementById("close-mobile-nav");
const mobileNav = document.getElementById("mobile-nav");

// open mobile nav
openMobileNavButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeMobileNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});

/**
 * Change Theme Dark/Light
 */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// get selected theme/icon
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// get current theme / icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/**
 * Scroll Header
 */
function scrollHeader() {
  const header = document.querySelector(".header");

  if (this.scrollY > 0) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
