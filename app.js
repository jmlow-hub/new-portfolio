//grab DOM elements for nav menu
const openMenuBtn = document.querySelector(".nav__open");
const closeMenuBtn = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav");







//function to open nav menu:
const handleNavOpen = openMenuBtn.addEventListener("click", e => {
    navMenu.classList.add("showMenu");

    document.body.style.overflow = "hidden";

})

//function to close nav menu:
const handleNavClose = closeMenuBtn.addEventListener("click", e => {

    navMenu.classList.remove("showMenu");

    document.body.style.overflow = "auto";
 
} )