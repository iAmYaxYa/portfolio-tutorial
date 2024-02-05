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
toggleContactRightBarMenu.addEventListener("click", toggleContact);
// close contact right bar in close btn
closeContact.addEventListener("click", toggleContact);
// close contact right bar in overlay
contactOverlay.addEventListener("click", toggleContact);

// toggle navbar
function toggleNav() {
  navLinkElement.classList.toggle("show-links");
  toggleLinksMenu.children[0].classList.toggle("bx-x");
}
// toggle contact right bar
function toggleContact() {
  contactRightBar.classList.toggle("show-contact");
  contactOverlay.classList.toggle("show");
}

// loading
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.toggle("hide");
  }, 1000);
});

// initialize AOS library
AOS.init();
