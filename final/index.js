const toggleLinksMenu = document.querySelector(".nav .toggle-links"),
  navLinksElement = document.querySelector(".nav .links"),
  navLinks = document.querySelectorAll(".nav .links .nav-link"),
  toggleContactMenu = document.querySelector(".nav .toggle-contact-right-bar"),
  contactRightBar = document.querySelector(".contact-right-bar"),
  closeContactRightBarBtn = document.querySelector(
    ".contact-right-bar .close-contact"
  ),
  contactOverlay = document.querySelector(".contact-overlay"),
  loading = document.querySelector(".loading");

//   toggle nav links
toggleLinksMenu.addEventListener("click", toggleNav);
// nav links
navLinks.forEach((link) => {
  link.addEventListener("click", toggleNav);
});
function toggleNav() {
  navLinksElement.classList.toggle("show-links");
  toggleLinksMenu.children[0].classList.toggle("bx-x");
}
// open contactRightBar
toggleContactMenu.addEventListener("click", toggleContact);
// close contactRightBar in btn
closeContactRightBarBtn.addEventListener("click", toggleContact);
// close contactRightBar in overlay
contactOverlay.addEventListener("click", toggleContact);

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
