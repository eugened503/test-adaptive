const menu = document.querySelector(".mobile-js");
const toggleItems = document.querySelectorAll(".toggle-js");

function toggleMenu() {
  menu.classList.toggle("show-menu");
}

toggleItems.forEach((element) => {
  element.addEventListener("click", toggleMenu);
});
