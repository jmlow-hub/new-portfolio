//grab DOM elements for nav menu
const openMenuBtn = document.querySelector(".nav__open");
const closeMenuBtn = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav");

//variables for typing effect
const heading = document.querySelector("h1");
const headingText = "//Jackie Low Software Developer" //text for heading
const testBtn = document.getElementById("test");
let i = 0; //index for if statement - needs to be global else will loop
//typing function:
const typewriter = () => {  
  if(i < headingText.length) {
    heading.innerHTML += headingText.charAt(i);
    i++;       
 }
 setTimeout(typewriter, 75)//calls the function with delay of 75ms until i is greater than the text length
  
  } 

window.addEventListener("DOMContentLoaded", () => {
  typewriter()
 
})





//function to open nav menu:
const handleNavOpen = openMenuBtn.addEventListener("click", e => {
  navMenu.style.width = "200px";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
})

//function to close nav menu:
const handleNavClose = closeMenuBtn.addEventListener("click", e => {
  navMenu.style.width = "0";
  closeMenuBtn.style.display="none";
  openMenuBtn.style.display = "block";
} )