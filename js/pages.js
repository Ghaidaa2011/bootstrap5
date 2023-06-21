"use strict";
// Loadign 
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflow = 'auto';
});
// Loading
const scrollUp = document.querySelector(".scroll");
window.onscroll = function () {
    this.scrollY <= 200 ? scrollUp.classList.add("show") : scrollUp.classList.remove("show");
}
scrollUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
//Scroll