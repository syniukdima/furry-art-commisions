const headerMenuBtn = document.querySelector(".header__menu-btn");
const headerMenu = document.querySelector(".header__menu");

headerMenuBtn.addEventListener("click", (event) => {
    headerMenu.classList.toggle("active")
})