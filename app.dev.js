"use strict";

//grab DOM elements for nav menu
var openMenuBtn = document.querySelector(".nav__open");
var closeMenuBtn = document.querySelector(".nav__close");
var navMenu = document.querySelector(".nav");
var ctaElement = document.querySelector(".title__CTA"); //variables for typing effect

var heading = document.querySelector("h1");
var headingText = "//Jackie Low"; //text for heading

var testBtn = document.getElementById("test");
var i = 0; //index for if statement - needs to be global else will loop
//function to set visibility of cta:
// const ctaVisibility = () => {
//   ctaElement.classList.add("visible") 
//   setTimeout(ctaVisibility, 1000)
//   }
//typing function:
// const typewriter = () => {  
//   if(i < headingText.length) {
//     heading.innerHTML += headingText.charAt(i);
//     i++;       
//  }
//  setTimeout(typewriter, 75)//calls the function with delay of 75ms until i is greater than the text length
// } 
// const display = window.addEventListener("DOMContentLoaded", () => {
//   typewriter()
//   //ctaVisibility()
// })
//function to open nav menu:

var handleNavOpen = openMenuBtn.addEventListener("click", function (e) {
  navMenu.classList.add("showMenu");
  document.body.style.overflow = "hidden"; // navMenu.style.width = "200px";
  // openMenuBtn.style.display = "none";
  // closeMenuBtn.style.display = "block";
}); //function to close nav menu:

var handleNavClose = closeMenuBtn.addEventListener("click", function (e) {
  navMenu.classList.remove("showMenu");
  document.body.style.overflow = "auto"; // navMenu.style.width = "0";
  // closeMenuBtn.style.display="none";
  // openMenuBtn.style.display = "block";
});