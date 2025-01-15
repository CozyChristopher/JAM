// get #menu-btn
const menuBtn = document.querySelector("#menu-btn");

// Opens menu in mobile view when #menu-btn is clicked
const mobileNav = document.querySelector("#mobile-nav");
menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("menu-open");
});
