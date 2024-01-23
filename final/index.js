const toggleLinksMenu = document.querySelector(".nav .toggle-links"),
  navLinkElement = document.querySelector(".nav .links"),
  toggleContactRightBarMenu = document.querySelector(
    ".nav .toggle-contact-right-bar"
  ),
  navLinks = document.querySelectorAll(".nav .links .nav-link"),
  contactRightBar = document.querySelector(".contact-right-bar"),
  closeContact = document.querySelector(".contact-right-bar .close-contact"),
  contactOverlay = document.querySelector(".contact-overlay"),
  loading = document.querySelector(".loading");

// toggle nav links
toggleLinksMenu.addEventListener("click", toggleNav);
// navLinks
navLinks.forEach((link) => {
  link.addEventListener("click", toggleNav);
});
// open contact right bar
toggleContactRightBarMenu.addEventListener("click", () => {
  contactRightBar.classList.toggle("show-contact");
  contactOverlay.classList.toggle("show");
});
// close contact right bar
closeContact.addEventListener("click", () => {
  contactRightBar.classList.toggle("show-contact");
  contactOverlay.classList.toggle("show");
});

function toggleNav() {
  navLinkElement.classList.toggle("show-links");
  toggleLinksMenu.children[0].classList.toggle("bx-x");
}

// loading
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.toggle("hide");
  }, 1000);
});

// initialize AOS library
AOS.init();
