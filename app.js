const sidebar = document.querySelector(".sidebar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", toggleMenuVisibility);
closeMenu.addEventListener("click", toggleMenuVisibility);

function toggleMenuVisibility() {
  sidebar.classList.toggle("sidebar--visible");
}
